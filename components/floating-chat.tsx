"use client";

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

type Message = {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
};

export function FloatingChat() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    function handleOpenWithContext(event: Event) {
      const detail = (event as CustomEvent<{ question: string }>).detail;
      if (!detail?.question) return;
      setInput(detail.question);
      setIsOpen(true);
    }
    window.addEventListener("open-chat-with-context", handleOpenWithContext);
    return () => window.removeEventListener("open-chat-with-context", handleOpenWithContext);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      if (!res.ok) throw new Error(res.statusText);
      if (!res.body) throw new Error("No response body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let assistantContent = '';

      setMessages(msgs => [...msgs, { id: (Date.now() + 1).toString(), role: 'assistant', content: '' }]);

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value, { stream: !doneReading });
        
        // Vercel AI SDK streams text in the format: 0:"content"
        // We need to parse this if it's using the data stream format, or just raw text if it's a text stream.
        // Let's assume raw text stream since we used `toTextStreamResponse()`
        assistantContent += chunkValue;
        
        setMessages(msgs => {
          const updated = [...msgs];
          const lastMsg = updated[updated.length - 1];
          if (lastMsg.role === 'assistant') {
            lastMsg.content = assistantContent;
          }
          return updated;
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const showChat = pathname?.startsWith('/simulate') ?? false;
  if (!showChat) return null;

  return (
    <>
      {/* Floating Toggle Button — pill with label + glow */}
      <button
        onClick={() => setIsOpen(true)}
        className={`group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-emerald-400 px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(52,211,153,0.55)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_36px_rgba(52,211,153,0.8)] active:scale-95 ${
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        }`}
        aria-label="Open AI Judge chat"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/15">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 8V4H8" />
            <rect x="4" y="8" width="16" height="12" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
          </svg>
        </span>
        <span className="flex flex-col text-left leading-tight">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-950/70">
            Ask the
          </span>
          <span className="text-base font-semibold">AI Showcase Judge</span>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="-mr-1 transition-transform group-hover:translate-x-0.5"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex h-[600px] max-h-[80vh] w-[400px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#060816] shadow-2xl transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-slate-950">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8V4H8"></path>
                <rect x="4" y="8" width="16" height="12" rx="2"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white">AI Showcase Judge</h3>
              <p className="text-xs text-emerald-300/80">Ranked top 50 · live evidence</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 transition hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6">
          {messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
                </svg>
              </div>
              <p className="mb-5 text-sm text-slate-300">
                I&apos;m connected to the <span className="text-white">top 50 simulated finishers</span> — full scores, win probabilities, and the AI judge&apos;s rationale for each.
              </p>
              <div className="grid w-full gap-2">
                {[
                  "Who is the projected winner and why?",
                  "Compare the top 3 — what differentiates them?",
                  "Which projects scored highest on creativity?",
                  "Show me the closest race in the top 10."
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => setInput(suggestion)}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-left text-xs text-slate-300 transition hover:border-emerald-400/40 hover:bg-emerald-400/5 hover:text-white"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-emerald-400 text-slate-950 rounded-br-sm'
                        : 'bg-white/10 text-slate-200 rounded-bl-sm'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === 'user' && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl bg-white/10 px-4 py-3 text-sm text-slate-400 rounded-bl-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]"></span>
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]"></span>
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="border-t border-white/10 bg-white/[0.02] p-4">
          <div className="relative flex items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-4 pr-12 text-sm text-white placeholder-slate-500 outline-none transition focus:border-emerald-400/50 focus:bg-white/10"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-slate-950 transition hover:bg-emerald-300 disabled:opacity-50 disabled:hover:bg-emerald-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
