export type Project = {
  id: string;
  name: string;
  oneLineDescription: string;
  fullDescription: string;
  externalUrl?: string | null;
  previewImageUrl?: string | null;
  scores: {
    usefulness: number;
    execution: number;
    creativity: number;
    clarity: number;
    usability: number;
  };
  judgesNote?: string;
};

export const mockProjects: Project[] = [
  {
    "id": "3044908",
    "name": "SonicStudio",
    "oneLineDescription": "SonicStudio",
    "fullDescription": "SonicStudio is a browser-native composition studio I built with Codex to make real music creation workable in a local-first web app. It combines sequencing, song arrangement, sample slicing, MIDI import and export, WAV bounce analysis, and recovery checkpoints in one product surface. I used AI and Codex to iterate on architecture, UI, audio workflow, and submission polish, then verified the result through repeated browser testing and real product refinement.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 85,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, the clarity is the weakest due to the absence of a one-line summary and a somewhat dense description that could be more structured. The project shows creativity with its novel approach to music creation in a browser-native environment, though the usability is slightly hindered by a low app keyword count, suggesting limited interface elements."
  },
  {
    "id": "3049157",
    "name": "AI Voice Phone",
    "oneLineDescription": "AI Voice Phone",
    "fullDescription": "I built AIVoicePhone.com because small businesses kept losing customers to missed calls. Hard to pick up the phone when you're elbow deep in a furnace repair. My solution is an AI that answers the call, has a real conversation, and books the appointment. I used VAPI for voice AI, Twilio for phone numbers, ElevenLabs for speech, OpenAI for conversation, and Stripe for billing. Started on Replit, eventually moved to AWS. Over 170 businesses use it now.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 92,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it addresses a clear problem for small businesses by converting missed calls into appointments using AI. Execution is also strong, with a live URL returning a 200 status and structured metadata indicating a polished product. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat unstructured description, which could make it harder for judges to quickly grasp the project's scope and impact."
  },
  {
    "id": "3049144",
    "name": "Astralecture",
    "oneLineDescription": "Astralecture",
    "fullDescription": "Astralecture is an interactive 3D solar system education website built to make learning about planets more immersive and engaging. I created it as a showcase project using HTML, CSS, JavaScript, Three.js, and Vite, with AI helping me refine the UI, improve the experience, and speed up development. It includes real-time planet exploration, guided tours, moon systems, and educational facts. I learned how to use AI as a collaborator while making the key product and design decisions myself.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 90,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Creativity is the strongest dimension, with the use of 3D and real-time exploration providing a novel educational experience. Execution is solid due to a live URL with a substantial content length, though the lack of structured metadata and a mismatched title slightly detract from polish. Clarity is the weakest dimension, as the absence of a one-line summary and a somewhat vague description make it difficult to quickly grasp the project's scope and purpose."
  },
  {
    "id": "3048958",
    "name": "HerdSignal (HackSMU 7 1st Place Overall)",
    "oneLineDescription": "HerdSignal (HackSMU 7 1st Place Overall)",
    "fullDescription": "Built an elephant call separation pipeline that outperformed Meta Demucs in audio quality (0.72 vs 0.7 normalised clean samples), using a tuned unsupervised NMF approach validated through spectrogram analysis. Optimized CPU based source separation against GPU deep learning baselines, achieving cleaner recovery of low SNR elephant calls from noisy field recordings.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 92,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "The strongest dimension for HerdSignal is creativity, as it applies a novel unsupervised NMF approach to a unique problem of elephant call separation, outperforming existing models. However, the clarity of the project is its weakest aspect, lacking a concise one-line summary and structured explanation, which makes it harder to quickly grasp the project's purpose. The live URL is functional and detailed, supporting strong execution, but the low app keyword count suggests limited direct usability."
  },
  {
    "id": "3047919",
    "name": "AffiliateLink",
    "oneLineDescription": "AffiliateLink",
    "fullDescription": "\"Full-stack marketplace platform connecting brands with content creators for paid collaborations. Campaign management tools let brands post jobs and manage programs; creators build public profiles, discover opportunities, apply, submit content, and get paid via Stripe, PayPal, or crypto. Features include real-time peer-to-peer chat, advanced admin panel, OAuth integrations (TikTok, YouTube, Instagram, Discord, X), CRM system, affiliate referral program, bot-protection, and analytics.\"",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 92,
      "creativity": 85,
      "clarity": 80,
      "usability": 90
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. The platform's usefulness is also strong, targeting brands and content creators with concrete features like campaign management and payment integration. Clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description, which could be more structured for quick understanding."
  },
  {
    "id": "3045264",
    "name": "Goalline GM",
    "oneLineDescription": "Goalline GM",
    "fullDescription": "Built GoalLine GM, an AI-powered NFL franchise simulator that combines a full-stack web platform with reinforcement learning, simulation infrastructure, and backend APIs. I designed the environment, trained transformer-based RL agents for long-horizon roster decisions, and built the supporting product and data systems end-to-end. It reflects how I like to work: independently, across the stack, on technically ambitious problems.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 92,
      "creativity": 85,
      "clarity": 70,
      "usability": 82
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat vague description that doesn't immediately convey the user benefits or specific functionalities. The project shows creativity with its use of reinforcement learning in a sports simulation context, which is less common."
  },
  {
    "id": "3039115",
    "name": "Neon Run After Midnight",
    "oneLineDescription": "Neon Run After Midnight",
    "fullDescription": "Neon Run: After Midnight is a fast-paced, neon-soaked arcade thriller where you play as a lone courier racing through a futuristic city before sunrise. As you weave through traffic, dodge drones, and outrun shadowy pursuers, the job quickly turns dangerous, and the mysterious package you carry becomes the center of it all. With sleek visuals, tight controls, and rising tension, the game builds toward a final choice that determines how the story ends 🚴‍♂️🌆",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 85,
      "creativity": 88,
      "clarity": 70,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is execution, as it has a live URL with a matching page title and a substantial content length, indicating a functional deployment. However, the weakest dimension is usability, as there are no UI keywords present, suggesting a lack of visible interface elements, which limits user interaction. The creativity is strong due to the unique game concept and narrative, but the lack of a one-line summary and structured metadata affects clarity."
  },
  {
    "id": "3039065",
    "name": "Midnight Snack Heist",
    "oneLineDescription": "Midnight Snack Heist",
    "fullDescription": "“Midnight Snack Heist” is a quick, playful stealth game where you control a sneaky raccoon on a late-night mission to raid a kitchen full of tasty snacks. You dart between counters, dodge flashlight beams, and grab treats while trying not to wake the homeowner. With simple controls, silly chaos, and fast rounds, it’s all about grabbing as much food as possible before your luck runs out 🦝🍕",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 85,
      "clarity": 75,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a matching title and substantial content length, indicating a functional game. Usefulness is the weakest dimension, as the project targets a niche audience with limited practical application. The lack of a meta description and structured metadata slightly impacts clarity and usability, though the game is still accessible."
  },
  {
    "id": "3039045",
    "name": "Last Floor",
    "oneLineDescription": "Last Floor",
    "fullDescription": "“Last Floor” is a tense 2D horror experience where you navigate a dark, decaying apartment building with only your phone’s flickering flashlight to guide you. As you descend floor by floor, you explore eerie hallways, uncover disturbing clues, and solve simple puzzles while something unseen stalks you through the shadows. The game blends suspense, isolation, and psychological unease, making you question what’s real as the threat grows closer with every step toward escape.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 85,
      "creativity": 88,
      "clarity": 72,
      "usability": 70
    },
    "judgesNote": "The strongest dimension for 'Last Floor' is creativity, with its unique 2D horror experience and psychological elements that differentiate it from typical game projects. Execution is solid, with a live URL that returns a 200 status and a matching page title, although the lack of structured metadata and minimal UI keywords suggest room for improvement. The weakest dimension is usefulness, as the project targets a niche audience without a clear practical application beyond entertainment."
  },
  {
    "id": "3039016",
    "name": "MeetingDebt",
    "oneLineDescription": "MeetingDebt",
    "fullDescription": "MeetingDebt is a meeting accountability SaaS that automatically extracts commitments from meeting transcripts using AI, assigns them to team members, tracks deadlines, and sends daily nudge emails until every task is done. No more commitments falling through the cracks after meetings end.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 82,
      "clarity": 70,
      "usability": 78
    },
    "judgesNote": "The strongest dimension for MeetingDebt is its usefulness, as it addresses a clear problem of tracking commitments from meetings, which is relevant for businesses and teams. Execution is strong with a live URL that returns a 200 status and a matching page title, although the content is somewhat sparse. The weakest dimension is clarity, as the absence of a one-line summary and a more detailed description makes it harder to quickly grasp the project's full scope and functionality."
  },
  {
    "id": "3038927",
    "name": "HOPE Project",
    "oneLineDescription": "HOPE Project",
    "fullDescription": "Still Here Hope is a support-centered digital experience designed to help people navigate emotionally difficult moments with calm, dignity, and encouragement. The project was created around a simple idea: when someone feels overwhelmed, isolated, anxious, or close to giving up, even one compassionate interaction or grounding prompt can help them pause, breathe, and take a healthier next step. Rather than building a traditional productivity tool or social platform, I wanted to create a space focu",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 85,
      "clarity": 68,
      "usability": 72
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with structured metadata, indicating a shippable product. However, clarity is the weakest dimension as the description is incomplete and lacks a concise one-line summary, making it difficult to quickly understand the project's purpose. Usability is limited by the low app keyword count, suggesting a minimal interface."
  },
  {
    "id": "3038843",
    "name": "MirrorMind: An AI Self-Awareness Coach",
    "oneLineDescription": "MirrorMind: An AI Self-Awareness Coach",
    "fullDescription": "MirrorMind is an AI self-awareness coach that helps users journal, reflect, and better understand their thoughts, emotions, habits, and recurring concerns over time. I built it to make self-reflection more useful for students and young adults who often feel stressed or overwhelmed but struggle to see the deeper patterns behind those feelings. I built it with Next.js, React, TypeScript, Tailwind CSS, FastAPI, Python, Neon Postgres, and OpenAI to create a polished full-stack product daily.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs, making it harder to quickly grasp the project's purpose. The project shows creativity in its approach to self-awareness coaching, but the usability could be improved with more visible UI elements."
  },
  {
    "id": "3038807",
    "name": "QhealthAI",
    "oneLineDescription": "QhealthAI",
    "fullDescription": "QHealthAI utilizes a provider database to address outdated information within government health insurance networks. This increases patient access to care faster, reducing the back-and-forth between interested parties.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 72,
      "clarity": 60,
      "usability": 60
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a 200 status and structured metadata, indicating a polished and potentially shippable product. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is vague, making it difficult to understand the specific functionality and user interaction. The absence of UI keywords suggests limited usability for end-users."
  },
  {
    "id": "3038796",
    "name": "RowReady- warehouse storage solution",
    "oneLineDescription": "RowReady- warehouse storage solution",
    "fullDescription": "RowReady is an intelligent warehouse optimization platform that transforms messy spreadsheet inventory data into smart warehouse layouts with optimized bin slotting, interactive visual maps, and real-time shortage alerts.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 78
    },
    "judgesNote": "The strongest dimension for RowReady is execution, with a live URL returning a 200 status and a detailed meta description, indicating a well-developed platform. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks immediate clarity on the project's unique value proposition. The usability score is limited by the absence of visible UI keywords, suggesting a lack of user interface elements on the landing page."
  },
  {
    "id": "3038779",
    "name": "Margin Flow - Managing Carrier Negotiations Seamlessly.",
    "oneLineDescription": "Margin Flow - Managing Carrier Negotiations Seamlessly.",
    "fullDescription": "Margin Flow helps freight brokers cover lanes faster by scanning Outlook replies, matching carriers to a lane, extracting rates and MC numbers, and calculating margin instantly. Brokers can sort by rate, review only relevant emails, and mass reply while still sending individually. It cuts out the time consuming act of having to open each individual email and reply with a rate. This program is meant for loose market lanes or lanes that are extremely popular, when a lot of emails hit your inbox.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 60,
      "creativity": 82,
      "clarity": 70,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets a specific user group (freight brokers) with a clear problem-solving approach. However, the execution is limited by the lack of structured metadata and the presence of a login wall, which restricts usability and caps execution at 60. Clarity is weakened by the absence of a one-line summary and a somewhat dense description, making it harder to quickly grasp the project's purpose."
  },
  {
    "id": "3038735",
    "name": "A Connecte Network",
    "oneLineDescription": "A Connecte Network",
    "fullDescription": "I built a web extension that converts internet usage into a digital currency.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 78,
      "creativity": 68,
      "clarity": 40,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for this project is execution, as the live URL returns a 200 status with a matching page title and structured metadata, indicating a functional site. However, the weakest dimension is clarity; the description is missing, and the project lacks a one-line summary, making it difficult to understand the project's purpose and functionality. Additionally, the absence of app/UI keywords suggests limited usability, and the project's usefulness is unclear due to the lack of a concrete target user or problem statement."
  },
  {
    "id": "3038706",
    "name": "DebtLess",
    "oneLineDescription": "DebtLess",
    "fullDescription": "Helping you get out of credit card debt 1 penny at a time",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 72,
      "clarity": 60,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, the project lacks a one-line summary and a clear description, which impacts clarity. The app keyword count is low, suggesting limited interface elements, which affects usability."
  },
  {
    "id": "3038698",
    "name": "Persuaid - Learn Faster",
    "oneLineDescription": "Persuaid - Learn Faster",
    "fullDescription": "Persuaid is an AI copilot that puts your product knowledge to work during live calls. Instead of memorizing everything, agents can access answers instantly as they speak. I built it after seeing how onboarding drags because reps don’t feel ready. Persuaid helps teams ramp faster, train in real conversations, and build confidence early using speech-to-text, retrieval, and LLMs.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 82,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a detailed page content, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat vague description, making it difficult to quickly grasp the project's specifics. The project is useful for sales teams, but the usability score is limited by the low app keyword count, suggesting a less developed user interface."
  },
  {
    "id": "3038641",
    "name": "Sorakryl - Learn Flight by Flying",
    "oneLineDescription": "Sorakryl - Learn Flight by Flying",
    "fullDescription": "Sorakryl is a multilingual browser game that teaches flight through hands-on play. I built it to make aerodynamics intuitive rather than abstract: players learn lift, drag, stall, stability, wind, and landing by flying, experimenting, and getting immediate feedback. Built with Codex using a deployable web stack with localization, mission-based learning, sandbox physics, and post-flight explanations. (Note, it is still being updated)",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 82,
      "creativity": 85,
      "clarity": 72,
      "usability": 70
    },
    "judgesNote": "The strongest dimension for Sorakryl is creativity, as it offers a novel approach to learning aerodynamics through an interactive game format. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured detail. The live URL is functional, supporting a decent execution score, but the limited page content and UI keywords suggest that usability could be improved."
  },
  {
    "id": "3038623",
    "name": "Website Agency Portfolio",
    "oneLineDescription": "Website Agency Portfolio",
    "fullDescription": "Here's our Web Agencies Company Portfolio with over 30+ businesses we have serviced websites for by coding each one from the ground up.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 85,
      "creativity": 60,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a 200 status and structured metadata, indicating a polished presentation. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is vague, making it difficult to understand the specific offering. The project also lacks creativity, as it appears to be a standard portfolio without novel elements."
  },
  {
    "id": "3038604",
    "name": "AI Reactor Thermal Digital Twin for Fault Detection and Cooling Optimization",
    "oneLineDescription": "AI Reactor Thermal Digital Twin for Fault Detection and Cooling Optimization",
    "fullDescription": "1. Interactive Project Ideas (Live Demos You Can Build & Run)AI Digital Twin for Reactor Thermal Management Create a virtual \"reactor core\" simulator (using Python + simple physics equations for heat transfer and coolant flow). Train an AI model (e.g., physics-informed neural network or scikit-learn regressor) on simulated sensor data (temperature, pressure, flow rate) to predict and optimize cooling efficiency in real time. Add a small physical mockup with Arduino temperature sensors and a fan/",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 55,
      "creativity": 82,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it proposes a novel application of AI for reactor thermal management using digital twins and physical mockups. However, the weakest dimension is execution, as there is no working live URL, which severely limits the ability to assess the project's current state or usability. The lack of a one-line summary and a clear, structured description also impacts clarity."
  },
  {
    "id": "3038408",
    "name": "ClementOS AI",
    "oneLineDescription": "ClementOS AI",
    "fullDescription": "ClementOS AI turns fragmented workflows into one connected operating system. We start with a high-ROI AI receptionist and expand into CRM, support, hiring, and finance automation.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 68,
      "usability": 72
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs, making it difficult to quickly grasp the project's scope. The usability score is limited by the low app keyword count, suggesting a less developed interface."
  },
  {
    "id": "3038397",
    "name": "Jubido: Multilingual AI Lifestyle & Event Hub",
    "oneLineDescription": "Jubido: Multilingual AI Lifestyle & Event Hub",
    "fullDescription": "Jubido is a multilingual AI-powered lifestyle & event hub. ✨ Social: Discover local events, manage private bookings, and auto-provision isolated chat rooms for any gathering. 📦 Utility: Track household inventory & expirations. Super users can upload shopping receipts to let Vision AI instantly extract and log groceries. 🌍 Global: Fully localized multilingual architecture. Used: Next.js, Supabase, Drizzle ORM, Google Gemini.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a 200 status and structured metadata, indicating a polished and potentially shippable product. However, clarity is the weakest dimension; the description lacks a one-line summary and is vague about the specific functionalities and user benefits, making it difficult to quickly grasp the project's scope. The login wall limits usability, as it prevents immediate user interaction with the interface."
  },
  {
    "id": "3038390",
    "name": "Signal AI - Find an Internship",
    "oneLineDescription": "Signal AI - Find an Internship",
    "fullDescription": "As an Economics major at Rutgers, I spent weeks trying to find internships that actually matched my background. Signal fixes that. Upload your resume and Signal searches live internship postings ranked by how well they match your experience. It then generates a personalized company intel brief for any role. Signal pulls live data tailored to your background so you walk in prepared. Built with OpenAI Codex, Next.js, and Supabase.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 82,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it addresses a clear need for students seeking internships, providing tailored company intel briefs. Execution is solid with a live URL that returns a 200 status and a matching title, though the login wall limits usability. Clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description, making it harder to quickly grasp the project's full scope."
  },
  {
    "id": "3038301",
    "name": "BrainBuddy — ELI5 Engineering Chatbot",
    "oneLineDescription": "BrainBuddy — ELI5 Engineering Chatbot",
    "fullDescription": "I built BrainBuddy to make learning engineering and data science concepts simple and memorable. It explains topics in plain language with real-world analogies, creates comparison tables, offers step-by-step learning roadmaps, summarizes long text, supports voice input/output, saves conversation history, and has day/night modes. Built with FastAPI + Groq Llama 3 backend and React/Vite frontend, it may take 15–30s to respond after inactivity.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 82,
      "creativity": 85,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "The strongest dimension for BrainBuddy is creativity, as it combines multiple modalities like voice input/output and offers unique features such as real-world analogies and step-by-step learning roadmaps. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs, making it harder to quickly grasp the project's scope. The live URL is functional, but the lack of structured metadata and UI keywords suggests limited usability polish."
  },
  {
    "id": "3038216",
    "name": "GradeRight",
    "oneLineDescription": "GradeRight",
    "fullDescription": "GradeRight is an AI-powered grading platform designed to help educators automate and streamline the grading process. It analyzes student submissions, aligns feedback with grading rubrics, and generates consistent, high-quality feedback allowing teachers to save time, reduce bias, and focus more on teaching while maintaining full control over final evaluations",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 92,
      "creativity": 85,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for GradeRight is execution, with a live URL that returns a 200 status and a title that matches the project, indicating a shippable product. The weakest dimension is clarity, as the absence of a one-line summary and a somewhat dense description make it harder to quickly grasp the project's core functionality. The project is useful for educators, offering a clear target user group, but the lack of visible UI keywords suggests potential usability improvements."
  },
  {
    "id": "3038209",
    "name": "DraftBoard Recruiting",
    "oneLineDescription": "DraftBoard Recruiting",
    "fullDescription": "An online college sports recruiting platform built with TypeScript/React, PostgreSQL, and Stripe payment integration. Rate your coaches, search open roster spots, and apply directly with one click. The 'Handshake' for college athletes!",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 75,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with structured metadata, indicating a shippable product. However, clarity is the weakest dimension as the description lacks a one-line summary and the project name does not match the page title, which could confuse users. The project is useful for college athletes but lacks distinct creative elements beyond existing recruiting platforms."
  },
  {
    "id": "3038091",
    "name": "RESUME ANALYZER",
    "oneLineDescription": "RESUME ANALYZER",
    "fullDescription": "Web-based tool that evaluates how well a resume aligns with a job description using keyword extraction and custom scoring logic. The application analyzes resume text, identifies matched and missing skills, and generates a match score with improvement suggestions to help users strengthen resume-role alignment. Technologies: JavaScript, HTML, CSS, text analysis, data processing",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 60,
      "creativity": 72,
      "clarity": 70,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets job seekers looking to optimize their resumes for specific job descriptions, a practical and relevant problem. However, execution is weak due to the artifact review indicating an error page likely, which significantly impacts usability as well. The lack of a meta description and structured metadata further detracts from the clarity and polish of the project."
  },
  {
    "id": "3038074",
    "name": "Market Buddy",
    "oneLineDescription": "Market Buddy",
    "fullDescription": "Market Buddy is a browser extension that evaluates Facebook Marketplace listings in real time — built for buyers, sellers, and flippers. Think KBB, but smarter: powered by OpenAI's vision, text, and web search models, it analyzes any listing the moment you open it, with deep emphasis on vehicles. Market Buddy, your AI copilot, guides you through every deal so you never overpay or undersell. Choose from multiple evaluation modes and unlock more with Pro and Power+ plans.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL on the Chrome Web Store and structured metadata indicating a polished product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat dense description, making it harder to quickly grasp the project's core functionality. Usability is limited by the likely login wall, capping its score."
  },
  {
    "id": "3037970",
    "name": "Pantry Recipe Builder",
    "oneLineDescription": "Pantry Recipe Builder",
    "fullDescription": "Its a pantry recipe builder app and I built it so beginner cookers can use this to how to make new food and being good at it. and I build it with codex",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 85,
      "creativity": 70,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL that returns a 200 status with a matching page title, indicating a functional deployment. However, clarity is the weakest aspect, as the description is vague and lacks a one-line summary, making it difficult to understand the project's purpose and functionality quickly. The absence of UI keywords and structured metadata also impacts usability and polish."
  },
  {
    "id": "3037904",
    "name": "Moments — Private Photo Sharing for Close Friends",
    "oneLineDescription": "Moments — Private Photo Sharing for Close Friends",
    "fullDescription": "Private photo sharing app for close friend groups. Daily capture windows fire at random — your circle snaps a photo, reacts, and it fades after 48 hours. No algorithms, no public profiles, no vanity metrics. Includes a landing page with 3D iPhone mockup and waitlist flow, Node.js/Express backend with PostgreSQL, and a native iOS app in SwiftUI. Built with Codex and Claude Code — from database schema to SVG icons to CSS 3D transforms. Used AI design critiques to go from generic to polished.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 72,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL that returns a 200 status and has structured metadata, indicating a polished landing page. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is somewhat vague, making it difficult to quickly grasp the core functionality. Usability is limited by the absence of visible UI keywords on the page, suggesting a lack of immediate user interface engagement."
  },
  {
    "id": "3037858",
    "name": "InsureAI",
    "oneLineDescription": "InsureAI",
    "fullDescription": "InsureAI is an AI-powered insurance document assistant designed to simplify the understanding and analysis of complex policy documents. Built using a Retrieval-Augmented Generation (RAG) approach, it allows users to upload files such as PDFs, TXT, and Markdown and interact with them through natural language queries to receive accurate, context-aware answers. The platform includes features like document-based Q&A, policy simplification, claim risk analysis, fraud detection using machine learning,",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 78,
      "creativity": 82,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for InsureAI is its usefulness, as it targets a clear user need in simplifying and analyzing complex insurance documents, which is a practical and valuable application. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that could be more structured. The artifact review shows a live URL with a matching title, but the presence of a login wall limits usability and execution scores."
  },
  {
    "id": "3037574",
    "name": "Esmeralda's Meal Prep Corner",
    "oneLineDescription": "Esmeralda's Meal Prep Corner",
    "fullDescription": "MealPrep Advice is a single-page local web app that combines two ideas in one experience: a pantry-based recipe generator and a lightweight community chat for meal-prep conversations. The homepage introduces it as “Esmeraldas Recipe Helper” and frames the site as a warm, friendly place to turn ingredients you already have into useful meals, then talk with others about tips, swaps, and weekly cooking routines.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 68,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat vague description, making it harder to quickly grasp the project's purpose. The project shows creativity by combining a recipe generator with a community chat, but lacks structured metadata and a preview image, which slightly affects its polish."
  },
  {
    "id": "3037508",
    "name": "Lost Worlds Explorer Underwater Archaeology",
    "oneLineDescription": "Lost Worlds Explorer Underwater Archaeology",
    "fullDescription": "My website is an immersive platform that takes users deep into the ocean and lakes to uncover hidden histories. It's designed for schools to integrate oceanic histories into the classroom while also catering to enthusiasts who wish to explore without the financial burden of diving. Built using Codex and deployed to GitHub and Netlify, it offers a captivating experience that fosters learning and community. My goal is to inspire curiosity and connection with our planet's aquatic stories for all.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 85,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs, making it difficult to quickly grasp the project's scope. Usability is limited by the presence of a login wall, capping its score."
  },
  {
    "id": "3037499",
    "name": "Native American Mvskoke Language Preservation Project",
    "oneLineDescription": "Native American Mvskoke Language Preservation Project",
    "fullDescription": "Native American Mvskoke Language Preservation Project",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "The strongest dimension of this project is execution, as it has a live URL with a matching title and meta description, indicating a well-developed and accessible site. However, the clarity of the project is weak due to the absence of a one-line summary and a detailed description, making it difficult to quickly understand the project's scope and functionality. Usability is limited by the lack of visible UI keywords, suggesting a potential gap in user interface elements."
  },
  {
    "id": "3037491",
    "name": "Nu-Shape - Parametric Shape Generation Suite",
    "oneLineDescription": "Nu-Shape - Parametric Shape Generation Suite",
    "fullDescription": "Nu-Shape is a parametric vector based shape generation suite. It enables designers, creators and just about anyone to create and export assets for motion, graphic and web design. You can also share via social media or anywhere else that a funky shape would be appreciated. I built it as a fun side-project/design-toy using Perplexity (for research/prompt tweaking), Variant (for UI planning) and Lovable for building. Design assets were made in Affinity.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 82,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "The strongest dimension for this project is creativity, as it offers a unique parametric shape generation tool that could appeal to designers and creators. However, the weakest dimension is clarity, as the project lacks a concise one-line summary and the description is vague about specific functionalities. The live URL returns a 200 status with structured metadata, indicating a decent level of execution, but the absence of UI keywords suggests limited usability for end-users."
  },
  {
    "id": "3037438",
    "name": "BeforeYouSign",
    "oneLineDescription": "BeforeYouSign",
    "fullDescription": "BeforeYouSign helps renters understand leases before they sign. I built it to turn dense legal text into clear, actionable guidance and reduce surprise fees or unfair terms. The app accepts PDF uploads or pasted lease text, analyzes key clauses like fees, notice windows, renewals, and landlord rights, then returns a plain-language risk report with scores and evidence-linked excerpts.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 75,
      "usability": 70
    },
    "judgesNote": "The strongest dimension for BeforeYouSign is execution, as evidenced by a live URL that returns a 200 status with a matching page title and structured metadata. The weakest dimension is clarity, due to the absence of a one-line summary and a description that could be more structured to quickly convey the project's purpose. Usability is limited by the absence of visible UI keywords, which suggests the interface may not be fully user-ready."
  },
  {
    "id": "3037412",
    "name": "Quick: Smarter Studying Starts Here",
    "oneLineDescription": "Quick: Smarter Studying Starts Here",
    "fullDescription": "Quick is a modern, AI-powered productivity and learning platform designed to help students stay organized, study smarter, and complete work efficiently.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and the presence of structured metadata, indicating a polished and functional site. However, the clarity is the weakest aspect as there is no one-line summary and the description lacks structure, making it difficult to quickly grasp the project's purpose. The absence of app/UI keywords suggests limited usability, though the site is accessible without a login wall."
  },
  {
    "id": "3037404",
    "name": "FG StudyForge — Smart Study Platform",
    "oneLineDescription": "FG StudyForge — Smart Study Platform",
    "fullDescription": "I built FG StudyForge using Codex just to see how far I could take it. You get dark mode that stays, a Pomodoro timer, leaderboard, daily challenges with XP, confetti when you win, share to X, download your data, an onboarding tour, live student count, typing animation, floating background shapes, a glow logo, and a clean coral blue look. I wrote zero code — just talked to Codex until it felt right. Keep pushing. This is what happens when you don't stop.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 85,
      "creativity": 75,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a 200 status and a matching page title, indicating a functional deployment. However, the usefulness is limited by the lack of a clear target user or problem statement, and the description lacks clarity, making it difficult to understand the project's purpose quickly. The login wall limits usability, as it prevents immediate access to the interface."
  },
  {
    "id": "3037274",
    "name": "RPG Persona Dialogue Agent with Multi-Agent RAG Pipeline",
    "oneLineDescription": "RPG Persona Dialogue Agent with Multi-Agent RAG Pipeline",
    "fullDescription": "Built a multi-agent RPG dialogue system where NPCs adapt responses based on player persona (5 types). Implemented a RAG pipeline from scratch using sentence-transformers and cosine similarity over a custom 42-entry lore database. Added an MCP server exposing 8 RAG-powered tools, and a real-time evaluation pipeline scoring across 6 metrics (ROUGE-L, BERTScore, fn_exact). Achieved 93% function-name accuracy.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 55,
      "creativity": 85,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The project's creativity is its strongest dimension, as it combines a multi-agent RPG dialogue system with a custom RAG pipeline, which is a novel approach. However, the execution and usability are significantly hindered by the lack of a working live URL, which prevents any real-world testing or interaction with the system. Clarity is also weak due to the absence of a one-line summary and a somewhat dense description that lacks immediate accessibility."
  },
  {
    "id": "3037251",
    "name": "WonderBook Adventures",
    "oneLineDescription": "WonderBook Adventures",
    "fullDescription": "WonderBook Adventures is a revolutionary platform designed to bridge the gap between children's library adventures and educational tracking. We use AI to provide meaningful feedback and rewards for every library visit.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 55,
      "creativity": 72,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of WonderBook Adventures is its creativity, as it attempts to blend library visits with educational tracking using AI, which is a novel approach. However, the weakest dimension is execution due to the lack of a working live URL, resulting in a 404 error, which severely limits the ability to assess the project's current state and usability. The absence of a one-line summary and a clear description further impacts clarity."
  },
  {
    "id": "3037247",
    "name": "AnalystIQ – AI-Powered Financial Analysis & Learning Platform",
    "oneLineDescription": "AnalystIQ – AI-Powered Financial Analysis & Learning Platform",
    "fullDescription": "AnalystIQ is an AI-powered platform that transforms complex financial reports like 10-Ks into clear insights, dashboards, and actionable recommendations. Users can upload documents and instantly receive key metrics, risk analysis, and simplified explanations. I built it using Codex/OpenAI for data processing and insights, and Lovable for a clean, premium UI. It also includes sections like glossary, interview prep, and a ratio analyzer, creating a complete finance learning and analysis tool.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 82,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "The strongest dimension for AnalystIQ is its usefulness, as it targets a clear user group (financial analysts) with practical features like risk analysis and dashboards. Execution is strong with a live URL returning HTTP 200 and matching metadata, but the content length suggests a somewhat limited page. Clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description, making it harder to quickly grasp the project's scope."
  },
  {
    "id": "3037214",
    "name": "Grind & Glow",
    "oneLineDescription": "Grind & Glow",
    "fullDescription": "Grind & Glow is a gamified productivity and wellness web app designed to help college students stay balanced while managing academic stress. Purpose: Encourage healthier habits, prevent burnout, and help students stay productive without losing themselves This project was created from personal experience. As a college student, I often get tunnel vision while focusing on schoolwork and forget to take care of myself. Grind & Glow was built as a solution to that problem.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title, indicating a functional deployment. However, clarity is the weakest dimension as the description lacks a one-line summary and structured explanation, making it harder to quickly grasp the project's specifics. The app's focus on gamified productivity for students is a creative angle, although the lack of structured metadata and limited UI keywords suggest room for improvement in usability."
  },
  {
    "id": "3037123",
    "name": "AI Interview Helper",
    "oneLineDescription": "AI Interview Helper",
    "fullDescription": "The Problem Every time I had an upcoming interview, I would open an AI chat, write out a long prompt explaining the role, the company, and my resume, then ask it to simulate an interview. It technically worked — but there was no voice, no real pressure, no feedback on how I was actually performing. I had to set it up from scratch every time. It felt nothing like a real interview. I am not the only one in this situation. Students, new graduates, and people between jobs all face the same problem.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 72,
      "clarity": 65,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest due to the absence of a concise one-line summary and a somewhat scattered description, making it difficult to quickly grasp the project's purpose. The project addresses a real problem but lacks significant creativity, as it mainly builds on existing AI interview simulation concepts without introducing novel elements."
  },
  {
    "id": "3037019",
    "name": "Lin Hugo",
    "oneLineDescription": "Lin Hugo",
    "fullDescription": "Personal website with blog, photo, and project.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 90,
      "creativity": 60,
      "clarity": 50,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is execution, as evidenced by a live URL with a matching page title and structured metadata, indicating a polished and complete personal website. However, the weakest dimension is clarity, as there is no one-line summary or detailed description provided, making it difficult to quickly understand the project's purpose and content. The project lacks a clear target user or problem-solving focus, which impacts its usefulness score."
  },
  {
    "id": "3036964",
    "name": "VIrtual Experience Program on Forage",
    "oneLineDescription": "VIrtual Experience Program on Forage",
    "fullDescription": "This was my first virtual Experience Program.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 40,
      "creativity": 50,
      "clarity": 45,
      "usability": 40
    },
    "judgesNote": "The project lacks a clear description and target user, which severely impacts its usefulness score. The absence of a working live URL results in the lowest possible execution and usability scores, as there is no evidence of a functional artifact. The creativity score is low due to the lack of any novel or distinctive elements in the description. Overall, the submission is poorly articulated and lacks the necessary components to be evaluated positively."
  },
  {
    "id": "3036928",
    "name": "Healthy Cat AI: Smarter Feeding for a Healthier Life",
    "oneLineDescription": "Healthy Cat AI: Smarter Feeding for a Healthier Life",
    "fullDescription": "Many cats become overweight because owners don’t know how much to feed them. An overweight cat can’t run, play, or live comfortably—and cats already spend most of their lives resting. I built Healthy Cat AI to solve this by giving personalized feeding plans based on weight, age, and lifestyle, including special logic for growing kittens. It helps owners make better decisions and improve their cat’s quality of life.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 82,
      "creativity": 80,
      "clarity": 70,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is execution, with a live URL returning a 200 status and a matching page title, indicating a functional deployment. However, the weakest dimension is usability, as the artifact review shows no UI keywords and a short content length, suggesting a lack of a user interface. Clarity is also a concern due to the absence of a one-line summary and structured metadata."
  },
  {
    "id": "3036927",
    "name": "LumaCal",
    "oneLineDescription": "LumaCal",
    "fullDescription": "LumaCal uses Gemini AI to instantly analyze your meals from photos, scan barcodes, and provide personalized meal plans tailored to your specific needs. Whether you're tracking macros, counting steps, or searching for the perfect healthy recipe, LumaCal is the place. This app was built as something that could assist individuals in reaching their dietary goals, giving them all the tools they while keeping an easy userbase experience. The app was built in Google Ai Studio using Gemini Ai models.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension for LumaCal, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, the clarity is the weakest due to the absence of a one-line summary and a somewhat unstructured description, making it harder to quickly grasp the project's full scope. The lack of structured metadata and UI keywords also impacts usability, suggesting a need for more user interface elements."
  },
  {
    "id": "3036898",
    "name": "SaveRateAfrica , AI-Powered Comparison Website",
    "oneLineDescription": "SaveRateAfrica , AI-Powered Comparison Website",
    "fullDescription": "Over 350,000 Nigerians in the U.S. send $20 billion home annually, yet millions are lost to hidden fees. I built SaveRateAfrica to fix these issues. SaveRateAfrica compares 14+ remittance providers for the Nigerian diaspora in the USA, UK, and Canada, showing the exact NGN received after ALL fees. No guesswork. Features: real-time rates, AI chat assistant, savings calculator, rate alerts, and credit card recommendations for immigrants.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 92,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 88
    },
    "judgesNote": "The strongest dimension for SaveRateAfrica is usefulness, as it addresses a real financial issue for the Nigerian diaspora by comparing remittance fees across multiple providers. Execution is also strong, with a live site that returns a 200 status and has structured metadata, although the title does not match the project exactly. Clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description, which could be more structured to quickly convey the project's purpose."
  },
  {
    "id": "3036866",
    "name": "The Margin Guardian - Handshake x OpenAI Creator Challenge",
    "oneLineDescription": "The Margin Guardian - Handshake x OpenAI Creator Challenge",
    "fullDescription": "The Margin Guardian is an autonomous AI forensic accountant that protects entrepreneurs from hidden financial leaks like subscription creep and shipping anomalies. Built with a secure FastAPI backend integrating Stripe and Box, it uses Z-score algorithms to mathematically isolate transactional outliers. OpenAI's API then translates these anomalies into actionable CFO-style insights on a Vercel dashboard. It moves beyond standard data analysis to actively recover lost profit margins.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "The strongest dimension for this project is execution, as evidenced by a live URL with a matching page title and a substantial content length, indicating a functional deployment. Usefulness is also strong, targeting entrepreneurs with a clear problem-solving focus on financial leaks. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that could be more structured for quick understanding. Usability is limited by the lack of visible UI keywords, suggesting a less user-friendly interface."
  },
  {
    "id": "3036848",
    "name": "NextVid",
    "oneLineDescription": "NextVid",
    "fullDescription": "VidNextPart helps you follow serialized social video without digging through profiles. Drop in a single URL; it resolves the post, pulls nearby videos from that creator’s flow, and highlights what appears to be the next or previous installment. Built for cliffhangers, multi-part stories, and “where was that from?” moments.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL returning a 200 status and a substantial page content length, indicating a functional product. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured explanation. The project shows creativity by addressing a specific niche in serialized social video consumption."
  },
  {
    "id": "3036804",
    "name": "Portfolio",
    "oneLineDescription": "Portfolio",
    "fullDescription": "Scroll animation",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 88,
      "creativity": 60,
      "clarity": 50,
      "usability": 60
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and the presence of structured metadata, indicating a polished artifact. However, the project lacks a clear description and one-line summary, making clarity the weakest dimension. The absence of a concrete user problem or target audience significantly impacts its usefulness score."
  },
  {
    "id": "3036801",
    "name": "Community resource Hub",
    "oneLineDescription": "Community resource Hub",
    "fullDescription": "This Is a Workflow Engine, Not a Static List. I delivered an actionable digital health solution focused on saving staff time and closing the referral loop: ✅ Real-Time Verification: Uses Google's grounding API to confirm status, hours, and eligibility live—eliminating dead-end phone calls. ✅ AI Outreach Drafter: Generates immediate, personalized client messages (text/email drafts) for seamless linkage. ✅ Pro Workflow: Features verified professional reviews, \"Saved Lists,\".",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 90,
      "creativity": 82,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL that returns a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest dimension as the description lacks a concise one-liner and structured explanation, making it difficult to quickly grasp the project's purpose. The absence of structured metadata and UI keywords also affects usability, which is adequate but not exceptional."
  },
  {
    "id": "3036727",
    "name": "Design Portfolio",
    "oneLineDescription": "Design Portfolio",
    "fullDescription": "My design portfolio",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 68,
      "creativity": 60,
      "clarity": 50,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is execution, as the live URL returns a 200 status code, indicating that the site is accessible. However, the project lacks a clear description and structured metadata, which significantly impacts clarity and usefulness. The absence of a one-line summary and the minimal content length suggest a lack of depth and detail, limiting its potential impact and usability."
  },
  {
    "id": "3036710",
    "name": "Smart Finder",
    "oneLineDescription": "Smart Finder",
    "fullDescription": "I was spending too long searching through massive websites to find one answer or button, so I built a Chrome extension capable of searching sites using AI and regex to find and highlight the most relevant text. Thats not all. Smart Finder is a find bar that also allows the user to perform advanced regex, multi-term search, sentiment search, and normal findbar operations. It also allows the user to scrape and export structured emails, phone numbers, addresses, and more. Entirely built with AI",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 85,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a matching title and meta description, indicating a shippable product. However, usability is limited by a likely login wall, which prevents full access to the tool's features. Clarity is the weakest dimension, as the description lacks a one-line summary and structured explanation, making it harder to quickly grasp the project's scope and functionality."
  },
  {
    "id": "3036705",
    "name": "Stock Slides",
    "oneLineDescription": "Stock Slides",
    "fullDescription": "I was looking for a clean way to visualise the Best Buy stock for a marketing presentation, and couldn't find one. I realised there was no existing way to create clean, customised slides of a stock's historical and current data, so I built Stock Slides. Stock Slides uses an open-source GitHub library to tap into Yahoo Finance data for free. It also performs analyses like Bullish Percent Index. Stockslides is entirely free of charge and unlimited. I built StockSlides in a few days using AI",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 68,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL that returns a 200 status and a detailed page content length, indicating a functional product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs, making it hard to quickly grasp the project's scope and functionality. The project shows creativity by addressing a niche need for stock data visualization in presentations, but the lack of a preview image and limited UI keywords suggest room for improvement in usability."
  },
  {
    "id": "3036693",
    "name": "Auto Shop Inventory Manager",
    "oneLineDescription": "Auto Shop Inventory Manager",
    "fullDescription": "Architected and deployed a full-stack inventory management system for auto service shops, enabling real-time CRUD operations on vehicle records with multi-user Firebase authentication • Designed a normalized Firestore schema reducing redundant reads by 40%; implemented role-based access control to restrict sensitive data mutations to admin accounts • Built a RESTful API layer integrating with a third-party parts pricing feed, automating manual lookups and cutting shop estimate time from 15 min",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 80,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning HTTP 200 and a matching page title, indicating a shippable product. However, the clarity is the weakest due to the absence of a one-line summary and a somewhat dense description that lacks immediate clarity. The usability score is limited by the lack of visible UI keywords and structured metadata, suggesting a basic interface."
  },
  {
    "id": "3036688",
    "name": "Brand Soul",
    "oneLineDescription": "Brand Soul",
    "fullDescription": "Chat GPT sucks at writing like a human, and usually sounds really boring. Most people can tell when content was written by AI, and often skip it immediately. I built Brand Soul to study your brand, identify your communication style, and write like a real human. The copy is designed to be eye-catching, addictive, and human-like. Brand Soul is trained on samples from the world's best copywriters and marketers. I built this app using Claude, Gemini, and Codex!",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 72,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with structured metadata and a substantial content length, indicating a polished and deployable product. However, clarity is the weakest dimension as the description lacks a concise one-liner and fails to clearly articulate what the project does, making it difficult to quickly understand the offering. The absence of app/UI keywords suggests limited usability, as there is no visible interface for user interaction."
  },
  {
    "id": "3036682",
    "name": "Online Bulk Metadata Editor",
    "oneLineDescription": "Online Bulk Metadata Editor",
    "fullDescription": "Thousands accidentally reveal sensitive information online, including camera, phone, file history, and even location, just from sharing a single image or video online. I built this app to give creators, business owners, and everyone else a simple, free, online tool to edit and remove their metadata in bulk. I also added song fingerprinting to restore a song's full metadata, including cover art and lyrics, using the Shazam API. This was built entirely using Claude, Gemini, and Codex!",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 88
    },
    "judgesNote": "The strongest dimension for this project is execution, with a live URL returning a 200 status and a detailed page description, indicating a well-developed and accessible tool. Usefulness is also strong, as it addresses a real need for creators and business owners to manage metadata. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description, which could be more structured to quickly convey the project's purpose and functionality."
  },
  {
    "id": "3036669",
    "name": "lunch-box Bento Grid designer",
    "oneLineDescription": "lunch-box Bento Grid designer",
    "fullDescription": "I have always admired Apple's bento grids, but building them required hours and expertise in Illustrator or Figma. lunch-box is a design software built to make bento grid design easy and fun. You can add boxes by hitting space, drag to resize or reorder, drag and drop graphics, and customise everything. You can even publish your grids as a responsive, shareable website. I've even added the ability to upload videos, embeds, text, etc. Entirely built by Dane Bentley with AI.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 75,
      "clarity": 70,
      "usability": 72
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a 200 status and structured metadata, indicating a shippable product. However, the weakest dimension is usefulness, as the target user is not clearly defined beyond a vague admiration for Apple's design, limiting its practical application. Clarity is also a bit weak due to the absence of a one-line summary and a somewhat scattered description."
  },
  {
    "id": "3036648",
    "name": "Human In The Loop API",
    "oneLineDescription": "Human In The Loop API",
    "fullDescription": "Approve, deny, or prompt autonomous agents acting on your behalf on the go. Adding this API to your agent adds a layer of security, ensuring that you're asked for approval before an agent acts on your behalf for your specified criteria. When your agent encounters a decision requiring your approval or input, an email is sent to an approver or a group of approvers, allowing continuous automation even when you're away. This app was built by Dane Bentley with AI.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 90,
      "creativity": 82,
      "clarity": 70,
      "usability": 88
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with structured metadata and a substantial content length, indicating a well-developed product. Clarity is the weakest dimension as the description lacks a one-line summary and is somewhat vague, making it difficult to quickly understand the project's purpose and functionality."
  },
  {
    "id": "3036645",
    "name": "xCalr",
    "oneLineDescription": "xCalr",
    "fullDescription": "xCalr is a calendar poll site I built to solve a real scheduling problem I kept running into in group projects: finding a meeting time that works for everyone. I used ChatGPT and Codex to help design, build, test, and deploy the site. Organizers create a poll, participants submit availability, and xCalr generates a heatmap of overlapping free times and highlights the earliest time the group can meet.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 75,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and the page title matching the project name, indicating a functional deployment. However, clarity is the weakest dimension as the description lacks structure and a one-line summary, making it difficult to quickly grasp the project's purpose. The absence of structured metadata and UI keywords also limits usability and polish."
  },
  {
    "id": "3036571",
    "name": "Guardian Recruit",
    "oneLineDescription": "Guardian Recruit",
    "fullDescription": "Guardian Recruit is an AI-powered defense against the rising tide of fraudulent job postings. By leveraging a hybrid machine learning model, the app analyzes listings in real-time to flag high-risk scams. I integrated XAI (Explainable AI) to ensure that every safety alert is transparent, giving users clear reasons why a post was flagged so they can navigate their career search with total confidence.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for Guardian Recruit is execution, with a live URL that returns a 200 status and a matching page title, indicating a shippable product. Usefulness is also strong, targeting a real problem of fraudulent job postings with a clear user base. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs, making it harder to quickly grasp the project's scope."
  },
  {
    "id": "3036542",
    "name": "Wellness WayFinder",
    "oneLineDescription": "Wellness WayFinder",
    "fullDescription": "Wellness WayFinder is a website that is built on the foundational principles of wellness and is meant to be a guidance tool for everyone so they are able to assess where they stand and get guidance on areas where they may have gaps.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 85,
      "creativity": 72,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "The strongest dimension for Wellness WayFinder is execution, as the live URL returns a 200 status with a matching page title, indicating a functional deployment. However, the project lacks a clear one-line summary and structured metadata, which impacts clarity, making it the weakest dimension. The description is vague about the specific user benefits and lacks concrete examples, affecting both usefulness and creativity."
  },
  {
    "id": "3036523",
    "name": "Class Connect: Student Social App",
    "oneLineDescription": "Class Connect: Student Social App",
    "fullDescription": "Class Connect is a student-exclusive app that helps connect your local school with other schools in your state, country, or even another continent. We will be launching in four countries: the US, Canada, Australia, and the UK. We realized that there isn't currently a central social media app for students from 6th grade to graduate school where you can meet other students and talk about common interests. You can check who is in your class, start clubs, or even start a project together.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a matching title and structured metadata, indicating a polished and shippable product. However, clarity is the weakest dimension as the description lacks a concise one-line summary and structured explanation, making it difficult to quickly grasp the project's purpose. The login wall limits usability, capping it at 65, as it prevents immediate user interaction without account creation."
  },
  {
    "id": "3036465",
    "name": "Arbitrage Scanner for Sportsbooks and Prediction Markets",
    "oneLineDescription": "Arbitrage Scanner for Sportsbooks and Prediction Markets",
    "fullDescription": "[demo credentials redacted on publish] Sports Arbitrage Scanner Built to solve a real problem I noticed as a finance student studying prediction markets: Kalshi event contracts pricing the same outcomes as traditional sportsbooks, but with no systematic way to identify when those prices diverged enough to guarantee risk-free profit. The scanner automates the math and surface work that would otherwise take minutes per game — too slow for markets that close in seconds. The core idea is simple. An",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 60,
      "usability": 60
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and a matching page title, indicating a functional deployment. However, clarity is the weakest dimension as the description lacks a one-line summary and is incomplete, making it difficult to quickly understand the project's full scope. Usability is limited by the absence of visible UI keywords, suggesting a lack of user interface elements."
  },
  {
    "id": "3036456",
    "name": "Fillo",
    "oneLineDescription": "Fillo",
    "fullDescription": "Fillo is an AI marketing intelligence platform built for venues. It monitors real-time demand signals, generates platform-specific content in your brand voice, and measures how consistently your brand appears across every channel, team, and AI system that now mediates discovery. Built so venues stop guessing when fans are ready to buy — and start publishing at exactly the right moment.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for Fillo is execution, with a live URL returning a 200 status and a matching page title, indicating a well-developed platform. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that could be more concise. The presence of a login wall limits usability, capping it at 65, despite the presence of structured metadata and a substantial page content length."
  },
  {
    "id": "3036357",
    "name": "Ctrlavana - The app built for excursion and caravan organizers.",
    "oneLineDescription": "Ctrlavana - The app built for excursion and caravan organizers.",
    "fullDescription": "Ctrlavana is an iOS app built for caravan and group-trip organizers to manage trips in one place. It helps users organize passengers, payments, contacts, locations, check-in, raffles, imports/exports, and operational details through a polished native experience. The product is evolving from a simple trip manager into a more complete operational tool for organizers, with features focused on clarity, speed, and real-world workflow support.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 82,
      "clarity": 70,
      "usability": 85
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and structured metadata indicating a polished product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat vague description, which could hinder quick understanding of the project's scope and features."
  },
  {
    "id": "3036312",
    "name": "PreTeXt Prototype",
    "oneLineDescription": "PreTeXt Prototype",
    "fullDescription": "A prototype Zettelkasten book powered by PreTeXt. The xml takes a bit getting used to, but you can feel free to clone and make your own books with my Scriber Experience styling. You can fine the GitHub repo is at https://github.com/The-Scriber-Experience/zettelkasten-prototype . Happy coding/writing!",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 72,
      "creativity": 70,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for this project is execution, as it has a live URL that returns a 200 status code, indicating a functional prototype. However, the weakest dimension is clarity, as the description lacks a one-line summary and is vague about the project's purpose and target users. The artifact review shows a lack of structured metadata and minimal UI keywords, which limits usability and clarity."
  },
  {
    "id": "3036224",
    "name": "DogVida :  System of Record for Your Dog’s Life",
    "oneLineDescription": "DogVida :  System of Record for Your Dog’s Life",
    "fullDescription": "I built DogVida end to end, spanning product design, mobile engineering, backend architecture, and deployment. The app was developed in React Native with a Node.js and PostgreSQL backend. I designed the system of record for structured activity logging and implemented pipelines for daily summaries, trend detection, and insight generation. I also built an in app assistant that analyzes user data and responds contextually. The product was deployed to Google Play and supported by a web platform.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 60,
      "creativity": 82,
      "clarity": 70,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, with a novel approach to managing a dog's life through structured activity logging and an in-app assistant. However, the weakest dimension is execution due to the lack of a working live URL, which significantly impacts the ability to assess the app's current state and usability. The absence of a one-line summary and a clear description further affects clarity."
  },
  {
    "id": "3036104",
    "name": "Cheeky-Fit",
    "oneLineDescription": "Cheeky-Fit",
    "fullDescription": "A fashion application",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 75,
      "clarity": 55,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a 200 status and structured metadata, indicating a polished and shippable product. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is vague, making it difficult to understand the specific features and user benefits. The project shows potential usefulness for fashion enthusiasts, but the lack of a clear target user and detailed functionality description limits its perceived usefulness and creativity."
  },
  {
    "id": "3036081",
    "name": "DecisionCanvas - From Data to Decisions Instantly",
    "oneLineDescription": "DecisionCanvas - From Data to Decisions Instantly",
    "fullDescription": "DecisionCanvas is an AI-powered analytics copilot that turns raw business CSVs into decision-ready dashboards, findings, and recommendations. I built it to help teams answer questions like why conversion dropped or which segments underperform without needing a full BI stack. Using Codex, I developed a FastAPI + React app with deterministic analysis, schema-driven charts, guided question routing, and a polished demo workflow.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 70,
      "usability": 68
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title, indicating a functional deployment. However, clarity is the weakest dimension as the description lacks a one-line summary and is somewhat jargon-heavy, making it difficult to quickly grasp the project's purpose. The absence of structured metadata and UI keywords also impacts usability, suggesting limited user interaction on the landing page."
  },
  {
    "id": "3036061",
    "name": "Study + Life Dashboard",
    "oneLineDescription": "Study + Life Dashboard",
    "fullDescription": "The Study + Life Dashboard is a simple tool designed to help busy students stay organized and on track. I built this because I’m a non-traditional student balancing school, work, and real-life responsibilities. I know how easy it is to fall behind when everything is spread across different apps or not written down at all. I built this project using Codex by breaking the idea into small features and building them step by step.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 72,
      "clarity": 65,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for this project is execution, as evidenced by a live URL with a matching page title and a detailed meta description, indicating a shippable product. The weakest dimension is clarity; the absence of a one-line summary and a somewhat vague description make it difficult to quickly grasp the project's full scope. The usability is supported by a functional live site without login barriers, but the app keyword count suggests a basic interface."
  },
  {
    "id": "3036032",
    "name": "Resumorph",
    "oneLineDescription": "Resumorph",
    "fullDescription": "Resumorph is an AI-powered resume-to-portfolio generator that transforms a user's resume into a fully designed, deployable portfolio website. Built with Lovable, Supabase, and the Claude API it analyzes resume content and generates a personalized site across multiple layout options. I built it to solve the gap between having a strong resume and zero web presence, and to learn how to ship a production SaaS end to end using modern AI-assisted development tools.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 90,
      "creativity": 82,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL that returns a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs, making it harder to quickly grasp the project's scope. The usability score is limited by the lack of visible UI keywords, suggesting a less intuitive interface."
  },
  {
    "id": "3035998",
    "name": "CareGap AI",
    "oneLineDescription": "CareGap AI",
    "fullDescription": "CareGap AI is an intelligent healthcare analysis tool designed to identify gaps in patient care before they lead to adverse outcomes. By transforming unstructured medical records into clear timelines, the system highlights missed followups, delayed treatments, and potential health risks. CareGap AI goes beyond summarization by providing actionable recommendations to improve patient outcomes, reduce hospital readmissions, and support clinical support decision making.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 60,
      "creativity": 85,
      "clarity": 72,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for CareGap AI is usefulness, as it targets a critical area in healthcare by identifying gaps in patient care, which can have significant real-world impact. However, the execution is weak due to the lack of a working live URL, which limits the ability to assess the project's current state and usability. The creativity score is bolstered by the novel approach of transforming unstructured medical records into actionable insights, but clarity suffers from the absence of a concise one-line summary."
  },
  {
    "id": "3035938",
    "name": "AI News Generator",
    "oneLineDescription": "AI News Generator",
    "fullDescription": "AI News Generator is a personalized news brief app that ingests AI updates from selected sources, generates concise digests, ranks them for each signed-in user, and prepares an email-ready issue. I built it to turn noisy AI news streams into a focused daily briefing. I used Codex to design and ship the Next.js app, add Clerk authentication, build the pipeline and database flows, create the landing page and dashboard, and debug deployment issues on Vercel with Neon and Resend.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 75,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL returning a 200 status and structured metadata indicating a polished deployment. However, the project lacks a one-line summary and the description is somewhat vague, impacting clarity. The login wall limits usability, as it prevents immediate user interaction without signing in."
  },
  {
    "id": "3035934",
    "name": "EUNOIA",
    "oneLineDescription": "EUNOIA",
    "fullDescription": "EUNOIA is a compassionate mental health platform where curiosity meets healing. It empowers individuals, caregivers, and behavioral health professionals to understand emotions, track mood patterns, and access evidence based tools for anger, anxiety, depression, and trauma, transforming everyday feelings into meaningful insights, one gentle step at a time.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title, indicating a shippable product. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is somewhat vague, making it difficult to quickly grasp the project's core functionality. The login wall limits usability, capping it at 65."
  },
  {
    "id": "3035911",
    "name": "SmartWash FSU: No More Laundry Limbo",
    "oneLineDescription": "SmartWash FSU: No More Laundry Limbo",
    "fullDescription": "Ever waited on a washer that finished 40 minutes ago? SmartWash FSU ends laundry limbo. Students scan QR codes on machines to track cycles, join queues, and receive real-time reminders when clothes are done before they become that person. The app also shows live machine availability and lets users see what’s open instantly. Sticker sheets with QR codes are placed on every machine for quick access: https://new-project-eight-peach.vercel.app/stickers/ Cleaner system, fewer arguments.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 72,
      "creativity": 80,
      "clarity": 70,
      "usability": 68
    },
    "judgesNote": "The strongest dimension for SmartWash FSU is its usefulness, as it addresses a real problem for students by providing a system to track laundry cycles and machine availability. However, the weakest dimension is clarity, as the project lacks a concise one-line summary and the description could be more structured. The artifact review indicates a live URL with a 200 status, but the page lacks structured metadata and has minimal UI keywords, impacting execution and usability scores."
  },
  {
    "id": "3035880",
    "name": "VibeSpace",
    "oneLineDescription": "VibeSpace",
    "fullDescription": "VibeSpace is a digital marketplace that connects people with rentable spaces such as homes, studios, and offices for short-term use. I built it to make it easier for individuals to monetize unused space while giving users flexible, on-demand access to locations for work, content creation, and meetings. I used AI tools like Codex to accelerate development, streamline workflows, and iterate quickly on features. This project helped me improve my skills in full-stack development, problem-solving, a",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 72,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for VibeSpace is usefulness, as it targets a clear market need by connecting users with rentable spaces for various purposes. However, the execution is weak due to the lack of a working live URL, which significantly impacts the ability to assess the project's current state and usability. The description lacks clarity, missing a concise one-liner and leaving some details vague, which further affects the overall understanding of the project."
  },
  {
    "id": "3035852",
    "name": "PWRCALL/AMPP",
    "oneLineDescription": "PWRCALL/AMPP",
    "fullDescription": "AMPP is a mission power planning tool that helps small teams assess whether their power load will sustain operations. It outputs GO/NO-GO status, identifies failure points, and recommends adjustments. I built this as a Special Operations veteran with no prior software background, using ChatGPT and Codex to translate real operational problems into a working product - I just followed what CGPT and CODEX recommended.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 75,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for this project is execution, with a live URL returning a 200 status and a matching page title, indicating a shippable product. Usefulness is also strong, as it addresses a specific operational need for small teams in mission planning. However, clarity is the weakest dimension due to the lack of a one-line summary and a somewhat vague description that could be more structured to quickly convey the project's purpose and functionality."
  },
  {
    "id": "3035831",
    "name": "SignalDeck(Vercel Demo）",
    "oneLineDescription": "SignalDeck(Vercel Demo）",
    "fullDescription": "SignalDeck(Vercel Demo) is an AI-assisted stock discovery platform for overnight, swing, and multi-day setups. This demo currently runs on delayed 15-minute market data because free API limits make broad real-time coverage impractical, but the product architecture is designed to scale to richer paid feeds, larger market coverage, and validated trained models.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 80,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL returning a 200 status and a matching page title, indicating a functional demo. However, clarity is the weakest due to the absence of a one-line summary and a lack of structured metadata, making it difficult to quickly grasp the project's purpose. The login wall limits usability, capping it at 65, as it prevents immediate access to the platform's features."
  },
  {
    "id": "3035793",
    "name": "Layered Progressive Career Strategy System",
    "oneLineDescription": "Layered Progressive Career Strategy System",
    "fullDescription": "AI-powered career strategy platform for Data and AI roles that guides users from policy and industry analysis to company targeting, role path planning, and application assets in one connected workflow.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 68,
      "usability": 85
    },
    "judgesNote": "The strongest dimension is execution, with a live URL that returns a 200 status and a matching page title, indicating a shippable product. The weakest dimension is clarity, as the absence of a one-line summary and a structured description makes it difficult to quickly grasp the project's purpose and functionality. The project shows creativity with its comprehensive approach to career strategy, but the lack of structured metadata and preview image slightly detracts from its polish."
  },
  {
    "id": "3035791",
    "name": "NourishPath",
    "oneLineDescription": "NourishPath",
    "fullDescription": "NourishPath is a condition-aware nutrition platform that helps patients discover personalized meals, smoothies, cultural food options, and shopping lists while also connecting doctors and nutritionists in one practical food-guidance workflow.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 82,
      "clarity": 70,
      "usability": 78
    },
    "judgesNote": "The strongest dimension for NourishPath is usefulness, as it targets a clear user group (patients, doctors, and nutritionists) with a practical solution for personalized nutrition guidance. Execution is also strong with a live URL that returns a 200 status and a matching page title, although the lack of structured metadata and low app keyword count suggest room for improvement. Clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description, which could hinder quick understanding of the project's purpose."
  },
  {
    "id": "3035789",
    "name": "repo2site - AI powered",
    "oneLineDescription": "repo2site - AI powered",
    "fullDescription": "Repo2Site is a GitHub-first portfolio builder that turns public repositories, README content, and optional resume data into an editable personal website. Instead of starting from a blank template, users can import their GitHub profile, generate a first draft from real work, refine the content in a live builder, enhance copy with AI, and then publish, share, or export the final portfolio.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 90,
      "creativity": 82,
      "clarity": 70,
      "usability": 88
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. Usability is also strong, as the site is accessible without a login wall. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that could be more structured for quick understanding."
  },
  {
    "id": "3035772",
    "name": "ScamShield-AI Scam Chat Simulation",
    "oneLineDescription": "ScamShield-AI Scam Chat Simulation",
    "fullDescription": "ScamShield Pro simulates a real-world phishing attack — you receive messages from an AI scammer that adapts its tactics based on your responses, just like a real social engineering attempt. Your goal is to identify and flag the manipulation tactics before the scammer convinces you.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and having structured metadata, indicating a shippable product. However, clarity is the weakest dimension as the description lacks a concise one-liner and is somewhat vague, making it difficult to quickly grasp the project's purpose. The project is creative in simulating phishing attacks for educational purposes, but the page's low content length and minimal UI keywords suggest limited usability."
  },
  {
    "id": "3035764",
    "name": "IconBetsVIP – AI-Built Sports Betting Membership Platform",
    "oneLineDescription": "IconBetsVIP – AI-Built Sports Betting Membership Platform",
    "fullDescription": "IconBetsVIP is a subscription-based sports betting platform built with Codex, featuring an animated UI with live profit graphs and performance tracking. A custom Discord bot automates access—users are assigned roles when they subscribe and automatically removed when their subscription ends. Stripe and webhooks power a secure, fully automated membership system.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 92,
      "creativity": 82,
      "clarity": 70,
      "usability": 85
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL returning a 200 status and a matching page title, indicating a shippable product. The weakest dimension is clarity, as the description lacks a concise one-liner and is somewhat vague, making it harder to quickly grasp the project's full scope. The project shows creativity with its use of Codex and Discord integration, but the lack of a preview image and structured description affects clarity."
  },
  {
    "id": "3035741",
    "name": "My Common Hours Plan",
    "oneLineDescription": "My Common Hours Plan",
    "fullDescription": "Common Hours is a planning tool for students balancing classes, work, recruiting, and personal time. It lets users build recurring schedules, add one-off events, capture flexible tasks, and drag blocks onto a real weekly calendar. The app highlights overload, shows open time, and helps turn a crowded week into a realistic plan.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 80,
      "clarity": 75,
      "usability": 70
    },
    "judgesNote": "The strongest dimension for this project is execution, evidenced by a live URL that returns a 200 status with a matching page title and structured metadata. However, the clarity of the project is lacking due to the absence of a one-line summary and a preview image, which makes it harder to quickly grasp the project's purpose. Usability is limited by the low app keyword count, suggesting a lack of visible interface elements."
  },
  {
    "id": "3035735",
    "name": "Personal Blog Website",
    "oneLineDescription": "Personal Blog Website",
    "fullDescription": "A bilingual personal website built with Hugo and PaperMod to share my technical projects and resume. I used Codex to handle the complex configurations, from setting up the English/Chinese dual-language routing to writing the GitHub Actions workflow for automated deployment. The AI was instrumental in debugging Git submodule issues, allowing me to focus on content rather than deployment logistics. The project repo is in ”https://github.com/NeilMin/neilmin.github.io“.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 65,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and the presence of structured metadata, indicating a polished deployment. However, the project lacks a clear one-line summary and detailed explanation of its purpose, which affects clarity. The absence of app/UI keywords suggests limited interactivity, impacting usability."
  },
  {
    "id": "3035708",
    "name": "Research Starter",
    "oneLineDescription": "Research Starter",
    "fullDescription": "> Developed a free browser-based research intelligence tool for academic research. The tool generates database-specific Boolean search strings across seven major academic databases, maps relevant scholars and theoretical frameworks, scores sources for credibility and relevance, evaluates annotated bibliographies, and produces citations in APA, Chicago, MLA, and Harvard. Built using JavaScript with no backend infrastructure. Runs entirely through a Claude.ai account without a subscription.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 86,
      "creativity": 82,
      "clarity": 70,
      "usability": 78
    },
    "judgesNote": "The strongest aspect of this project is its usefulness, as it targets academic researchers with a comprehensive tool for generating search strings, mapping scholars, and producing citations. Execution is solid with a live URL that returns a 200 status and a matching page title, though the lack of structured metadata and minimal UI keywords suggest room for improvement. Clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that could be more structured for quick understanding."
  },
  {
    "id": "3035684",
    "name": "QuizCraft -AI Quiz Assistant",
    "oneLineDescription": "QuizCraft -AI Quiz Assistant",
    "fullDescription": "QuizCraft is a fully stateless, AI-powered quiz creation platform built with FastAPI and Gemini 2.5 Flash. It dynamically generates quizzes from user-uploaded documents using a custom Retrieval-Augmented Generation (RAG) pipeline. The system supports multi-format ingestion (PDF, DOCX, TXT), automated text extraction and normalization, and semantic search powered by an in-memory vector store with cosine similarity retrieval.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 85,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching title, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat dense description that lacks immediate accessibility. The project shows creativity with its use of a custom RAG pipeline and multi-format document ingestion, but usability is limited by the lack of visible UI keywords, suggesting a less user-friendly interface."
  },
  {
    "id": "3035648",
    "name": "Stock Advisor",
    "oneLineDescription": "Stock Advisor",
    "fullDescription": "This is a stock advisor app that helps long term investors figure out which stocks are good buys, sells, or holds based on prominent stock investors. I made this on replit.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 65,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest dimension is execution, as the live URL returns a 200 status with a matching page title, indicating a functional deployment. However, the weakest dimension is clarity due to the absence of a one-line summary and a sparse description that lacks detail on how the app functions or its unique features. The artifact review shows minimal UI elements and content, which limits usability and creativity scores."
  },
  {
    "id": "3035601",
    "name": "alfred_.ai",
    "oneLineDescription": "alfred_.ai",
    "fullDescription": "alfred_ is an AI executive assistant you can talk to via web or SMS. It connects your accounts, Google, Microsoft, and more, to manage email, calendar, files, and tasks from one place. It sends personalized morning briefings, drafts replies, and schedules meetings through natural conversation. I built it to replace the dozen tabs I open every morning. The stack is React + TypeScript + Supabase + LangChain. AI coding tools were essential, from designing the agent orchestration to shipping feature",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 75,
      "usability": 85
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a 200 status and structured metadata, indicating a polished and shippable product. Usefulness is also strong, targeting professionals who need to manage multiple accounts and tasks efficiently. Clarity is the weakest dimension, as the lack of a one-line summary and some jargon in the description make it harder to quickly grasp the project's scope."
  },
  {
    "id": "3035592",
    "name": "The Life-Value Optimizer",
    "oneLineDescription": "The Life-Value Optimizer",
    "fullDescription": "A full-stack web application that optimizes lifestyle spending across 6 life dimensions (health, connections, freedom, growth, food, savings). Combines Gemini LLM for personalized value profiling with OR-Tools CP-SAT for provably optimal item selection—treating every purchasing decision as a multi-objective life optimization problem.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 85,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for this project is creativity, as it combines a novel approach of using LLMs and optimization algorithms to tackle lifestyle spending. However, the weakest dimension is execution due to the lack of a working live URL, which severely limits the ability to assess the project's current state and usability. The absence of a one-line summary and a clear description further impacts clarity."
  },
  {
    "id": "3035513",
    "name": "\"Let’s take HMI/SCADA Automation to the next level using OpenAI Codex (GPT-5.4) + MCP Server + Ignition\"",
    "oneLineDescription": "\"Let’s take HMI/SCADA Automation to the next level using OpenAI Codex (GPT-5.4) + MCP Server + Ignition\"",
    "fullDescription": "Traditional SCADA/HMI development involves repetitive tasks such as creating and organizing tags, designing UI layouts, and configuring bindings for each component. These steps consume valuable time and slow down rapid prototyping. I built this system to reduce manual engineering effort using AI(CODEX), enabling faster development workflows and allowing engineers to focus more on system logic, process optimization, and overall integration instead of repetitive UI configuration tasks.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 68,
      "creativity": 85,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it applies AI to automate repetitive SCADA/HMI tasks, which is a novel approach in this domain. However, the weakest dimension is usability, as the artifact is behind a LinkedIn login wall, preventing direct interaction or evaluation of the interface. Execution is also limited due to the lack of a dedicated live URL and the mismatch between the page title and project name."
  },
  {
    "id": "3035494",
    "name": "Pelagia Operations Console",
    "oneLineDescription": "Pelagia Operations Console",
    "fullDescription": "The Pelagia Operations Console is a web app that presents a deep-sea research console for supervising an autonomous ocean probe. The project uses deterministic, rule-based simulation logic. I built it by deciding on the features, logic, and aesthetic I wanted the app to have, as well as the structure and tools (multi-page, React, Tailwind, etc). I then used an iterative process with Codex to build and refine the app. I chose this because I'm interested in marine robotics.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 80,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is creativity, as it presents a unique application in the domain of marine robotics with a deterministic, rule-based simulation. However, the weakest dimension is clarity, as the description lacks a concise summary and fails to clearly articulate the project's purpose and target users. The artifact review shows a live URL with a matching page title, but the low content length and absence of UI keywords suggest limited usability and execution."
  },
  {
    "id": "3035369",
    "name": "Day Line",
    "oneLineDescription": "Day Line",
    "fullDescription": "🔥 Meet Dayline — your personal discipline tracker Plan your day, track your goals, build your own life rules, and keep a streak going. It's free, simple, and built for people who actually want to get things done. It will be game changer of your life for sure ! 👉 Try it now → dayline-plum.vercel.app No sign-up needed to start — just open and go. ✅ Sign in with Google to save your data across all your devices and never lose your progress.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 75,
      "creativity": 70,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a 200 status code and structured metadata, indicating a functional deployment. However, clarity is the weakest dimension as the description lacks a one-line summary and the page title does not match the project, causing confusion about the project's identity. The login wall limits usability, as users must sign in to fully experience the app."
  },
  {
    "id": "3035366",
    "name": "World Crisis Map",
    "oneLineDescription": "World Crisis Map",
    "fullDescription": "Interactive humanitarian crisis map that lets users explore global hotspots related to hunger, lack of shelter, and water insecurity. I built it to make large-scale humanitarian issues easier to understand visually and to help people quickly find trusted places to support relief efforts. The site was built as a static web app using HTML, CSS, JavaScript, Leaflet, and OpenStreetMap, with curated hotspot data based on public reporting from organizations like WFP, UNHCR, and UNICEF.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 82,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and a substantial page content length, indicating a functional and accessible site. However, clarity is the weakest dimension as the project lacks a one-line summary and structured metadata, making it harder to quickly grasp the project's scope and purpose. The usability score is limited by the low app keyword count, suggesting a less interactive interface."
  },
  {
    "id": "3035345",
    "name": "Personal Wealth Simulator",
    "oneLineDescription": "Personal Wealth Simulator",
    "fullDescription": "Personal wealth simulator that models long-term portfolio outcomes based on user inputs such as income, savings, and risk tolerance. The tool allows users to customize ETF allocations, run scenario analysis (bull, base, bear cases), and evaluate progress toward a target portfolio value. Designed to simulate real-world wealth management decision-making, with clear, client-friendly explanations of risk, growth, and long-term tradeoffs.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 80,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, the clarity is the weakest due to the absence of a one-line summary and a sparse description that lacks structured paragraphs, making it harder to quickly grasp the project's full scope. Usability is limited by the low app keyword count, suggesting a minimal interface."
  },
  {
    "id": "3035330",
    "name": "DueDay",
    "oneLineDescription": "DueDay",
    "fullDescription": "DueDay is a student assignment tracking app that helps you stay on top of deadlines, manage courses, and monitor your grades — all in one place. It lets you add assignments, set reminders, and even import your syllabus or Canvas LMS feed to automatically populate your schedule.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 68,
      "creativity": 72,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for DueDay is its usefulness, as it targets a clear user group (students) with practical features like assignment tracking and syllabus import. However, the weakest dimension is clarity due to the absence of a one-line summary and a sparse description. The artifact review shows a live URL with a matching title, but the lack of structured metadata and UI keywords suggests limited execution and usability."
  },
  {
    "id": "3035307",
    "name": "Lakas Loob",
    "oneLineDescription": "Lakas Loob",
    "fullDescription": "Lakas Loob is a Tagalog learning foundation designed to bridge the gap between \"knowing\" the language and having the \"courage\" (lakas-loob) to speak it.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 80,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a matching page title, indicating a functional deployment. However, clarity is the weakest dimension as the project lacks a one-line summary and a structured description, making it difficult to quickly grasp the project's purpose. The absence of structured metadata and a low app keyword count also suggest limited usability."
  },
  {
    "id": "3035287",
    "name": "Driver Branded Ride",
    "oneLineDescription": "Driver Branded Ride",
    "fullDescription": "Driver-branded ride marketplace where drivers create customizable business profiles with branding, posts, contact info, and bookable ride experiences, helping drivers grow loyal customers and earn more through differentiation while riders browse and book based on vibe, quality, and trust.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 68,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a detailed page content, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat convoluted description, making it hard to quickly grasp the project's purpose. The project shows creativity with its unique approach to driver branding in ride marketplaces."
  },
  {
    "id": "3035263",
    "name": "AI Basketball Highlight Clipper",
    "oneLineDescription": "AI Basketball Highlight Clipper",
    "fullDescription": "AI Basketball Highlight Clipper is a web app that helps turn basketball game footage into highlight clips by detecting made shots from event logs, selecting key moments, and organizing them into a reel. Built with Next.js and React, it includes video review, clip timing controls, shot detection, and a simple highlight-building workflow.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL returning a 200 status and a substantial page content length, indicating a functional MVP. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs, making it harder to quickly grasp the project's purpose. The project shows creativity in its specific application to sports highlights, though it could benefit from more distinctive features or modalities."
  },
  {
    "id": "3035223",
    "name": "Anagrama Games",
    "oneLineDescription": "Anagrama Games",
    "fullDescription": "Anagrama Games is a web-based puzzle platform I built because I wanted games that would genuinely make me think instead of just helping me pass time. I could not find the kind of challenging word and logic games I wanted, so I decided to build my own. The platform now includes multiple game modes, including Anagrama, Defineagram, Mathagram, and more. I also built an API so other people can create their own word games and tools, and a CLI so people can play directly in the terminal.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 72,
      "execution": 90,
      "creativity": 80,
      "clarity": 65,
      "usability": 88
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title and a substantial content length, indicating a well-developed platform. However, clarity is the weakest dimension as the project lacks a concise one-line summary and the description is more about personal motivation than user-centric framing, which makes it harder to quickly grasp the project's purpose."
  },
  {
    "id": "3035216",
    "name": "TeraForge",
    "oneLineDescription": "TeraForge",
    "fullDescription": "TerraForge is a platform for on-demand 3D-printed housing designed to be fully self-powered. It helps users design and evaluate homes while considering structural feasibility, material efficiency, and off-grid energy systems. By combining automated construction planning with sustainable design, TerraForge can reduce carbon emissions by up to 89% while eliminating long-term operating costs.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 78,
      "creativity": 85,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "The strongest dimension for TeraForge is its usefulness, as it targets a real-world problem of sustainable housing with a focus on reducing carbon emissions and operational costs. However, the weakest dimension is clarity, due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs. The artifact review shows a live URL with a significant content length, but the page title does not match the project, and there is minimal UI keyword presence, which affects execution and usability scores."
  },
  {
    "id": "3035152",
    "name": "MarketSight",
    "oneLineDescription": "MarketSight",
    "fullDescription": "Developed a full-stack investment analysis platform using Python, PHP, AWS Bedrock (Claude AI), and AWS Lightsail that synthesizes real-time financial ratios, news sentiment, and SEC 10-K filings into quality equity research with an integrated AI chatbot for natural-language Q&A. Architected a UI with collapsible metric cards, async-loaded SEC filing analysis, and an AI sentiment system that weights breaking news against 10-K risk disclosures to distinguish market noise from structural concerns",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, the lack of a one-line summary and the presence of a login wall limit clarity and usability, respectively. The project is creative in its integration of AI for financial analysis, but the description could be clearer to better convey its full scope and user benefits."
  },
  {
    "id": "3035147",
    "name": "Where Dragons Dwell: An Atlas of Dragons Myths",
    "oneLineDescription": "Where Dragons Dwell: An Atlas of Dragons Myths",
    "fullDescription": "Where Dragons Dwell is an interactive mythology atlas exploring dragon traditions across 14 world cultures. Built with Codex, it features an ancient-style world map, era-based timeline filter, side-by-side tradition comparison, a daily dragon keepsake card to print, and an AI Oracle for cross-cultural myth questions. Designed for students, educators, and curious minds.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 75,
      "creativity": 88,
      "clarity": 68,
      "usability": 60
    },
    "judgesNote": "The project's strongest dimension is creativity, with its unique approach to exploring dragon myths through an interactive atlas and AI Oracle. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks immediate clarity on the project's functionality. The artifact review shows a live URL with a substantial page length, but the mismatch in the title and lack of UI keywords suggest limited usability and execution."
  },
  {
    "id": "3035133",
    "name": "Rate My Employer",
    "oneLineDescription": "Rate My Employer",
    "fullDescription": "AI-powered web app that evaluates internships before you apply. Upload your resume and paste a job description or URL to receive an overall match score, skill gap analysis, and a plain-English breakdown of the role. Designed to help students quickly understand fit, identify missing skills, and prioritize applications. Built with Next.js, GitHub, and Vercel.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 75,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for 'Rate My Employer' is execution, with a live URL returning a 200 status and a matching page title, indicating a shippable product. The usefulness is also strong, targeting students with a clear problem-solving approach. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description, which could hinder quick understanding."
  },
  {
    "id": "3035028",
    "name": "CuePro",
    "oneLineDescription": "CuePro",
    "fullDescription": "CuePro is a business platform for DJs. Manage leads through a pipeline tracker, send outreach with merge-field templates, and quote gigs with a rate calculator. Build and publish electronic press kits with customizable sections, booking forms, and visitor analytics. Generate contracts with configurable payment, equipment, and travel terms. Built on Next.js, Supabase, and Vercel.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 78,
      "creativity": 80,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for CuePro is usefulness, as it targets a specific user group (DJs) with concrete tools like lead management and contract generation. However, the weakest dimension is clarity due to the absence of a one-line summary and a somewhat dense description that lacks immediate clarity. The artifact review shows a live URL with a login wall, limiting usability to 65 and execution to 78 despite the page being well-structured and lengthy."
  },
  {
    "id": "3035025",
    "name": "Brand Blueprint Generator — by Jessica Hooper, Founder of Jess Designs",
    "oneLineDescription": "Brand Blueprint Generator — by Jessica Hooper, Founder of Jess Designs",
    "fullDescription": "A fully responsive, client‑side brand planning tool designed to generate a clean brand brief and three logo directions in one click. This project focuses on clarity, speed, and usability, guiding users through essential brand inputs and trait selection to produce a structured, shareable creative blueprint. Built with a modern layout, refined typography, and a centered Jess Designs logo, the interface delivers a polished, professional experience aligned with intentional brand strategy.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 72,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a matching page title and a content-rich page, indicating a shippable product. However, clarity is the weakest dimension as the project lacks a one-line summary and structured metadata, making it harder to quickly grasp the full scope and purpose. The project shows creativity with its unique approach to brand planning, but could benefit from more distinctive features or modalities."
  },
  {
    "id": "3035006",
    "name": "ThreatWatch AI",
    "oneLineDescription": "ThreatWatch AI",
    "fullDescription": "ThreatWatch AI delivers daily threat intelligence briefs tailored by industry and region for mid-size security teams that can't staff a full SOC. I built it because lean security teams get blindsided by threats visible in public OSINT long before any alert fires. Built with OpenAI Codex and Claude Code — Codex built the live brief feature that calls GPT-4o-mini directly from the browser, streaming analyst-grade threat context based on the user's selected industry and region.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension for ThreatWatch AI, with a live URL returning a 200 status and a matching page title, indicating a well-deployed product. Usefulness is strong due to its clear target user of mid-size security teams and the practical problem it addresses. However, clarity is the weakest dimension, as the absence of a one-line summary and a somewhat dense description make it harder to quickly grasp the project's essence."
  },
  {
    "id": "3034955",
    "name": "A3Aprotocol",
    "oneLineDescription": "A3Aprotocol",
    "fullDescription": "A3A Protocol is an AI payment to payment system. It allows merchant and customer agents to negotiate on behalf of clients and strike a deal.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 60,
      "creativity": 72,
      "clarity": 55,
      "usability": 50
    },
    "judgesNote": "The strongest dimension for A3Aprotocol is creativity, as it proposes an AI-driven negotiation system for payments, which is a novel concept. However, the weakest dimension is clarity, as the project lacks a one-line summary and a detailed description, making it difficult to understand the specifics of the implementation. The artifact review shows a live URL with a 200 status, but the page lacks structured metadata and UI elements, leading to low execution and usability scores."
  },
  {
    "id": "3034931",
    "name": "Ironclad Ops",
    "oneLineDescription": "Ironclad Ops",
    "fullDescription": "This project delivers a comprehensive, strategic analysis grounded in course concepts, research, and operational evaluation. It synthesizes key findings, applies data-informed reasoning, and presents a well-supported final recommendation to address the core business challenge. The submission reflects critical thinking, analytical rigor, and a practical, results-oriented approach to improving organizational effectiveness and supporting sustained success.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 72,
      "clarity": 60,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a matching title and structured metadata, indicating a shippable product. However, clarity is the weakest dimension as the description lacks a concise one-line summary and fails to clearly articulate what the project does, making it difficult to quickly understand its purpose and functionality."
  },
  {
    "id": "3034900",
    "name": "DataFlow Studio",
    "oneLineDescription": "DataFlow Studio",
    "fullDescription": "Upload any CSV and watch it flow through a full Bronze → Silver → Gold data engineering pipeline powered by Claude AI. Detects schema issues, applies PySpark and SQL transformations, generates KPIs and charts — then exports production-ready pipeline code.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 85,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The project's strongest dimension is creativity, as it offers a novel approach to data engineering pipelines using AI to automate transformations and generate KPIs. However, the weakest dimension is clarity, with no one-line summary and a description that lacks structure, making it difficult to quickly grasp the project's purpose. The execution is limited by a generic live page with minimal content and a non-matching title, which also impacts usability, as the interface is not fully evident."
  },
  {
    "id": "3034871",
    "name": "Budget Survival Toolkit 2.0: Earn & Manage System",
    "oneLineDescription": "Budget Survival Toolkit 2.0: Earn & Manage System",
    "fullDescription": "Most apps track your money. This one helps you fix it. Budget Survival Toolkit shows your daily spending, gives clear warnings, and connects you to Flip It. Flip It helps you identify profitable items, estimate returns, and turn everyday opportunities into income so you can stay in control and move forward.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 75,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "The strongest dimension is execution, with a live URL returning a 200 status and a matching page title, indicating a functional deployment. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs and specific details. The project has potential usefulness but lacks distinct creative elements and a clear, user-friendly interface as indicated by the low app keyword count."
  },
  {
    "id": "3034859",
    "name": "Planet and Community",
    "oneLineDescription": "Planet and Community",
    "fullDescription": "I have been in college going on my second year and I am getting my BS animal health and welfare. I have learned so much about animals and what we can do to help our planet. This website gives you places and events to go to. Codex and netlify worked together to build this.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 68,
      "creativity": 60,
      "clarity": 50,
      "usability": 60
    },
    "judgesNote": "The strongest dimension is execution, as the live URL returns a 200 status code, indicating a functioning page. However, the weakest dimension is clarity, with no one-line summary and a vague project description that fails to clearly articulate what the project does or who it serves. The artifact review shows limited content and UI keywords, suggesting a basic or incomplete interface."
  },
  {
    "id": "3034824",
    "name": "Human Mate Choice Model",
    "oneLineDescription": "Human Mate Choice Model",
    "fullDescription": "A teaching-friendly web demo that compares two human mate-choice models and lets you explore them interactively. It has a responsive two‑column layout with model comparisons on the left and a spatial simulation on the right; controls adjust preference rule, mobility, and density, and a canvas shows moving agents, matches, and pairing lines. Each run computes assortative matching and search metrics, then auto-generates a plain or technical explanation with page‑level citations to Smaldino & Schan",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 82,
      "clarity": 70,
      "usability": 72
    },
    "judgesNote": "The strongest dimension is creativity, as the project offers an interactive simulation of human mate-choice models, which is a novel educational tool. However, the weakest dimension is clarity, due to the absence of a one-line summary and a somewhat dense description that lacks immediate clarity on the project's purpose. The execution is solid with a live URL returning a 200 status, but the usability is limited by a low app keyword count, indicating a less developed interface."
  },
  {
    "id": "3034822",
    "name": "Budget Survival Toolkit",
    "oneLineDescription": "Budget Survival Toolkit",
    "fullDescription": "Budget Survival Toolkit is a simple, mobile-friendly financial app designed to help people manage their money between paychecks. Instead of focusing on complex budgeting systems, this app centers on one critical question: “Will my money last until my net payday?” The app provides quick, clear answers so users can make smarter daily spending decisions and avoid running out of money early.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 60,
      "creativity": 72,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it addresses a real problem of managing finances between paychecks, targeting a broad audience. However, the weakest dimension is execution due to the absence of a live URL, which limits the ability to assess the app's current state or functionality. Clarity is also a concern, as the description lacks a concise one-liner and could be more structured to quickly convey the app's purpose."
  },
  {
    "id": "3034690",
    "name": "Justice Wihout Fear",
    "oneLineDescription": "Justice Wihout Fear",
    "fullDescription": "Justice Without Fear empowers victims of police brutality and wrongful use-of-force. We provide essential rights education, survivor resources, and a roadmap for legal accountability. Our mission is to ensure no family navigates the aftermath of tragedy alone. Together, we move from crisis to empowerment. Justice is a right, not a risk.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 78,
      "creativity": 72,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The project's strongest dimension is usefulness, as it addresses a significant social issue by providing resources and education for victims of police brutality. However, the weakest dimension is clarity due to the absence of a one-line summary and a somewhat vague description that lacks specific details about the features or functionalities offered. The live site is accessible, but the lack of structured metadata and minimal UI elements limit its execution and usability scores."
  },
  {
    "id": "3034679",
    "name": "V.R.L. Autonomous Biometric Recovery System",
    "oneLineDescription": "V.R.L. Autonomous Biometric Recovery System",
    "fullDescription": "V.R.L. built the Dynamic Daily Baseline algorithm for athletic recovery. Current wearables just track passive data. I built this closed-loop system to process live ECG/HRV telemetry and autonomously trigger a wearable thermal/vibroacoustic intervention when a user redlines, accelerating parasympathetic return. Built using AI tools to architect the biometric logic loop, combined with parametric CAD and 3D printing for the physical hardware. It shifts wearables from passive to active",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 60,
      "creativity": 85,
      "clarity": 68,
      "usability": 55
    },
    "judgesNote": "The project's creativity is its strongest dimension, with a novel approach to transforming wearables from passive to active devices using biometric logic loops and 3D-printed hardware. However, the execution is weak due to the lack of a dedicated live URL for the project, with the provided link leading to a LinkedIn profile, which limits the ability to evaluate the system's functionality. Clarity is also a concern, as the absence of a one-line summary and a somewhat jargon-heavy description make it difficult to quickly grasp the project's purpose and functionality."
  },
  {
    "id": "3034647",
    "name": "Stone Age OS",
    "oneLineDescription": "Stone Age OS",
    "fullDescription": "StoneAgeOS turns your constraints into a structured action plan with alternatives, route context, and fallback recommendations.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 80,
      "clarity": 60,
      "usability": 60
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a 200 status and structured metadata, indicating a polished and deployable product. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is vague, making it difficult to understand the specific user problem being addressed. Usability is limited by the absence of visible UI keywords, suggesting a lack of user interface elements."
  },
  {
    "id": "3034642",
    "name": "Voxvitals",
    "oneLineDescription": "Voxvitals",
    "fullDescription": "What We Built VoxVitals: AI-powered clinical trial monitoring. Patients do voice check-ins; the system extracts symptoms, flags risks, and tracks adherence. Doctors get a live risk dashboard, AI alerts, and direct messaging with patients. How We Built It Next.js · Supabase · ElevenLabs · Gemini. Fallback pipeline for reliability. Challenges Merging voice, AI, and real-time messaging in 24 hrs. Built graceful degradation throughout. What We Learned Data must become decisions. Reliability first.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 90,
      "clarity": 75,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for VoxVitals is creativity, as it combines voice technology with AI for clinical trial monitoring, which is a novel application. Execution is also strong with a live URL that returns a 200 status and a matching page title, though the login wall limits usability. Clarity is the weakest dimension due to the absence of a one-line summary and a somewhat unstructured description, making it harder to quickly grasp the project's scope."
  },
  {
    "id": "3034580",
    "name": "Insulin daily",
    "oneLineDescription": "Insulin daily",
    "fullDescription": "This is an app designed to calculate fast acting insulin dosages with data from the user and their provider(provider info optional). It is made to take the guesswork out of insulin dosages on the fly. It has an option for charting blood sugar levels to upload to your provider and a wearable option that can notify emergency contacts if unconsciousness is detected.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 72,
      "creativity": 85,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The project's strongest dimension is usefulness, as it addresses a critical need for diabetes patients by calculating insulin dosages and offering emergency notifications. However, clarity is the weakest dimension due to the absence of a one-line summary and a structured description, making it difficult to quickly grasp the project's scope. The artifact review indicates a login wall, which limits usability and execution scores, despite the live URL returning a 200 status."
  },
  {
    "id": "3034574",
    "name": "PhD Pathway Planner",
    "oneLineDescription": "PhD Pathway Planner",
    "fullDescription": "This is a planner for those who are considering PhD programs, the goal of this project is to help keep future prospective programs and other necessary information in a clean, organized place to cut the overwhelm associated with PhD applications. I built this mainly for myself because I don't want to use an excel spreadsheet or word document to keep track of the programs I am interested in. I built this using Codex, Vercel, and Supabase.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 65,
      "clarity": 60,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its execution, as it has a live URL that returns a 200 status and matches the project title, indicating a functional deployment. However, the weakest dimension is clarity, as the description lacks a one-line summary and is vague about specific features or user benefits, making it difficult to quickly understand the project's scope. The absence of structured metadata and UI keywords also limits its usability and polish."
  },
  {
    "id": "3034466",
    "name": "ChibiRun",
    "oneLineDescription": "ChibiRun",
    "fullDescription": "A fun platformer obstacle-dodging game set in a city-scape background.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 40,
      "creativity": 68,
      "clarity": 55,
      "usability": 40
    },
    "judgesNote": "The strongest dimension for ChibiRun is creativity, as it offers a platformer game with a city-scape background, which is a somewhat novel setting. However, the weakest dimensions are execution and usability due to the lack of a working live URL, which severely limits the ability to assess the project's functionality and user interface. The absence of a one-line summary and a more detailed description also impacts clarity and usefulness."
  },
  {
    "id": "3034434",
    "name": "Scrutin",
    "oneLineDescription": "Scrutin",
    "fullDescription": "Scrutin is an AI-powered job posting scam detector. Paste any job listing and Scrutin analyzes it for fraud signals — returning a scam risk score, red flags with severity levels, and a plain-English recommendation. Built because job scams are up 118% since 2022 and job seekers deserve protection. Built with FastAPI, OpenAI GPT-4o, and vanilla HTML/CSS/JS, deployed on Netlify",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 78
    },
    "judgesNote": "Execution is the strongest dimension for Scrutin, with a live URL that returns a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that could be more structured. The project is useful for job seekers, addressing a real problem with job scams, but the lack of visible UI keywords suggests potential usability improvements."
  },
  {
    "id": "3034369",
    "name": "Campus Network",
    "oneLineDescription": "Campus Network",
    "fullDescription": "Campus Network is a verified university-email web app for finding study buddies, peer tutors, and study sessions. I built it to experiment with LLM/Codex development and to solve a real-world campus need, a trusted place for students to connect, stay motivated, and make friends while studying. I used Vue.js, Vite and Supabase (auth, database, storage), including profiles, matching, messaging, session RSVPs, and a community feed.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 80,
      "clarity": 72,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL returning a 200 status and a matching page title, indicating a deployable product. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured detail. The project is useful for university students, but the lack of visible UI keywords suggests limited immediate usability without further exploration."
  },
  {
    "id": "3034361",
    "name": "Who Done It? - validate your \"brilliant\" idea",
    "oneLineDescription": "Who Done It? - validate your \"brilliant\" idea",
    "fullDescription": "We validate your \"brilliant\", \"one-of-a-kind\" project idea by searching reddit to see the hundreds of people who already built it. Did they quit like you likely will? Did reddit roast their idea like they would roast yours? Skip the hassle of building your dream project by walking across the graveyards of projects that would have looked like yours after months of building. Find users who have done similar work, communities where you can find pain points and competitors through AI reddit scan.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 60,
      "creativity": 80,
      "clarity": 55,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it offers a novel approach to idea validation by leveraging Reddit data to assess project viability. However, clarity is the weakest dimension due to the absence of a one-line summary and a vague description that lacks structure. The artifact review indicates a live URL with a 200 status but minimal content and no UI keywords, limiting execution and usability scores."
  },
  {
    "id": "3034294",
    "name": "Text-to-Image Generative AI",
    "oneLineDescription": "Text-to-Image Generative AI",
    "fullDescription": "This project was designed for ARCH 483, a course exploring artificial intelligence in architecture. It was built and designed in order to test the capabilities of text-to-image AI tools and create futuristic architectural ideas using only written descriptions. Google Gemini (Nano Banana Pro) was the tool applied to transform detailed text prompts into building images with a photorealistic look. Each concept was tested by tweaking prompts related to lighting and weather to compare the results.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 60,
      "creativity": 80,
      "clarity": 65,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it explores the novel application of text-to-image AI in generating architectural designs, which is a unique use case. However, the weakest dimension is usability, as the artifact is a Google Drive link requiring login, which severely limits accessibility and practical use. Execution is also limited due to the lack of a live, interactive URL, capping its potential impact."
  },
  {
    "id": "3034218",
    "name": "Job Application Acceleration",
    "oneLineDescription": "Job Application Acceleration",
    "fullDescription": "I built this acceleration website to help job seekers turn scattered application work into one guided workflow. The product ranks pasted job posts and generates editable resumes, cover letters, and interview prep for each role. I used AI and Codex for product thinking, prompt iteration, debugging, and polishing the experience, and learned how much better results get with tight human review.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 82,
      "clarity": 68,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it offers a novel approach to streamlining the job application process by integrating AI to generate resumes, cover letters, and interview prep. However, the weakest dimension is execution, as there is no working live URL, which severely limits the ability to assess the project's current state and usability. The lack of a one-line summary and a structured description also impacts clarity, making it harder to quickly grasp the project's full scope and potential impact."
  },
  {
    "id": "3034196",
    "name": "Bantu Academy",
    "oneLineDescription": "Bantu Academy",
    "fullDescription": "At Bantu Academy, we are bridging the digital divide in Iowa and across the globe, empowering under-served communities through technology. Our mission is to cultivate young minds with programming skills and moral values, paving the way for a prosperous tomorrow for our local communities and the places of our heritage, including the Democratic Republic of Congo.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 72,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a matching title and structured metadata, indicating a polished and accessible site. However, clarity is the weakest dimension as the description lacks a concise one-liner and specific details about what the project does, making it difficult to quickly grasp the project's scope and functionality."
  },
  {
    "id": "3034187",
    "name": "MalobaMboka",
    "oneLineDescription": "MalobaMboka",
    "fullDescription": "MalobaMboka's mission is to democratize access to public expression for all citizens of the Democratic Republic of Congo, whether they reside in the country or are part of the vast global diaspora. In a context where reliable data on public opinion is often scarce or inaccessible, we provide a robust technological platform to collect, analyze, and disseminate the popular will in a transparent and secure manner.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 82,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "The strongest dimension for MalobaMboka is execution, with a live site that returns a 200 status and includes structured metadata, indicating a polished and shippable product. However, the clarity of the project is the weakest dimension due to the absence of a concise one-line summary and a somewhat vague description, which makes it difficult to quickly grasp the project's specifics. Usability is limited by the lack of visible UI keywords, suggesting a less interactive or user-friendly interface."
  },
  {
    "id": "3034183",
    "name": "Basketball Lift for High School Athletes",
    "oneLineDescription": "Basketball Lift for High School Athletes",
    "fullDescription": "A simple workout plan built specifically for a high school basketball player trying to get stronger for the next level",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 55,
      "creativity": 65,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is usefulness, as it targets a specific user group: high school basketball players aiming to improve their strength. However, the execution is weak due to the lack of a working live URL, which significantly limits the ability to assess the project's current state. Clarity is also a concern, as the absence of a one-line summary and a more detailed description makes it difficult to quickly understand the project's scope and functionality."
  },
  {
    "id": "3034114",
    "name": "XO Dispatch",
    "oneLineDescription": "XO Dispatch",
    "fullDescription": "XO Dispatch is a sales operating system I created for Business Intuitive to help reps sell web systems for contractors and service businesses in a clearer, more practical way. I came up with the product concept, sales logic, offer ladder, workflows, rep psychology model, and platform direction first, then used AI as a design and front-end execution assistant to help shape and refine the interface. The platform is built to guide reps",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 82,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for XO Dispatch is execution, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, the clarity of the project is weak due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs. Usability is limited by a likely login wall, capping its score despite the presence of a real interface."
  },
  {
    "id": "3034077",
    "name": "Portfolio Compass",
    "oneLineDescription": "Portfolio Compass",
    "fullDescription": "An app to help my friends and family navigate through this market using interactive and responsive ui. Helping build portfolios that are successful in the long term.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 72,
      "clarity": 55,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a substantial page content length, indicating a developed product. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is vague, making it difficult to understand the specific functionality and target users. The usability score is limited by the low app keyword count, suggesting a sparse interface."
  },
  {
    "id": "3034057",
    "name": "A New Me",
    "oneLineDescription": "A New Me",
    "fullDescription": "Rebuilding. Restoring. Moving forward. I am a three-time felon, and I built a Ne Me/Reentry Support from lived experiences. I know how hard it is to come home and feel like everything is against you, paperwork, pressure, doubt, and old habits. This app is the support I wish I had: motivation, weekly goals, compliance help, and more. I made it for anyone trying to rebuild their life one day at a time. This is not theory, it’s survival, growth, and second chances made pratical.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 82,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "The strongest dimension is usefulness, as the project addresses a real and significant problem for individuals reentering society after incarceration. Execution is also strong, with a live URL that matches the project title and a substantial page content length. However, clarity is the weakest dimension due to the lack of a one-line summary and a somewhat vague description that doesn't clearly outline the app's features. Usability is limited by the low app keyword count, suggesting a less developed interface."
  },
  {
    "id": "3034005",
    "name": "SkillForge – Personalized Career Intelligence for Software Engineers",
    "oneLineDescription": "SkillForge – Personalized Career Intelligence for Software Engineers",
    "fullDescription": "SkillForge is an AI-powered app that turns real job descriptions into personalized learning plans for software engineering graduates. It analyzes company-specific roles, extracts required skills, and creates a structured roadmap using free, high-quality resources. Instead of generic advice, it delivers targeted preparation so candidates can master the exact skills needed to become competitive applicants for their desired roles.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 78,
      "creativity": 85,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "The strongest aspect of SkillForge is its usefulness, as it addresses a real need for software engineering graduates by providing personalized learning plans based on job descriptions. However, the weakest dimension is clarity, as the project lacks a concise one-line summary and the description could be more structured. The live URL returns a 200 status, but the page title does not match the project name, and there is no meta description, which affects execution and usability scores."
  },
  {
    "id": "3033978",
    "name": "Personal Domain & Tools",
    "oneLineDescription": "Personal Domain & Tools",
    "fullDescription": "Project title: SimonBrainerd.com — Personal security and trust tools platform Problem: People cannot easily verify domain/email trust signals or understand browser metadata exposure. What it does: Provides public-facing security/privacy tools and educational utilities and provides a permanent personal platform. AI used: Codex/ChatGPT used to design, implement, debug, and iterate features. Impact: Built and deployed a live site with real tools, security-focused UX, and production hosting.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 68,
      "usability": 85
    },
    "judgesNote": "Execution is the strongest dimension due to the live site with a valid HTTP 200 response and structured metadata, indicating a well-deployed project. However, clarity is the weakest dimension as the description lacks a concise one-liner and clear explanation of the specific tools and features offered, making it difficult to quickly grasp the project's scope and functionality."
  },
  {
    "id": "3033962",
    "name": "BioLoop Water Efficiency Model (BWEM) — Irrigation Demand & Efficiency Scenario Tool",
    "oneLineDescription": "BioLoop Water Efficiency Model (BWEM) — Irrigation Demand & Efficiency Scenario Tool",
    "fullDescription": "BWEM is a planning-level irrigation water-demand and efficiency scenario tool based on FAO-56 ET methodology (ETc = ETo × Kc). It estimates applied irrigation demand and compares efficiency assumptions (flood/sprinkler/drip) for semi-arid farming contexts. Built to support irrigation planning and drought-resilience decisions; prototype includes pilot scenario outputs and technical documentation.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 82,
      "clarity": 68,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it applies the FAO-56 ET methodology to a novel scenario tool for irrigation planning, which is a unique approach. However, the weakest dimension is execution due to the lack of a working live URL, which significantly hampers the ability to evaluate the project's current state and usability. Without a functional artifact, execution and usability are capped at 55."
  },
  {
    "id": "3033900",
    "name": "Shade Story",
    "oneLineDescription": "Shade Story",
    "fullDescription": "How to find your perfect shade and then subsequently find other makeup products that match your shade to make the shopping process smoother.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 68,
      "usability": 75
    },
    "judgesNote": "The strongest dimension for Shade Story is execution, as evidenced by a live site with a matching title and meta description, indicating a shippable product. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description, making it difficult to quickly grasp the project's full scope. The project shows creativity by offering a unique solution in the beauty industry, but the usability is slightly hindered by a low app keyword count, suggesting a less developed interface."
  },
  {
    "id": "3033899",
    "name": "ATLAS",
    "oneLineDescription": "ATLAS",
    "fullDescription": "Atlas is an AI-native planning system built for students navigating high-pressure, multi-dimensional lives. From classes and assignments to recruiting, clubs, and personal goals, Atlas consolidates everything into a single intelligent workspace.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 60,
      "creativity": 82,
      "clarity": 68,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it offers an AI-native planning system tailored for students, which is a novel approach in the productivity space. However, the weakest dimension is usability, as the artifact review indicates an error page is likely, which severely limits user interaction and practical use. Execution is also limited by the error page, capping its potential despite a live URL."
  },
  {
    "id": "3033883",
    "name": "BRFSS Insights",
    "oneLineDescription": "BRFSS Insights",
    "fullDescription": "BRFSS Insights is a web-based risk estimator derived from CDC Behavioral Risk Factor Surveillance System (BRFSS) health indicators. Users answer a short survey and receive an evidence-based Type 2 diabetes risk estimate along with practical next steps tailored to their risk and location. AI let me iterate fast in a datathon context to build a reliable, elegant MVP and incorporate feedback from teammates without having to extensively rebuild and debug.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 82,
      "clarity": 75,
      "usability": 85
    },
    "judgesNote": "The strongest dimension for BRFSS Insights is execution, with a live URL that returns a 200 status and a detailed page content, indicating a well-developed MVP. Usefulness is also strong, as it targets a specific health-related need with a clear user base. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat convoluted description that could be more concise and structured."
  },
  {
    "id": "3033793",
    "name": "Planlytics",
    "oneLineDescription": "Planlytics",
    "fullDescription": "Planlytics is an AI-powered productivity platform designed for busy college students to centralize and optimize their schedules. It merges multiple calendars into one system, reducing manual input, and allows users to generate weekly, bi-weekly, or monthly schedule reports as downloadable PDFs, as well as daily task wallpapers. The platform also provides AI-driven insights to help students understand their time usage, identify overloads, and improve productivity.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 82,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of Planlytics is its creativity, offering a novel approach to productivity by merging calendars and providing AI-driven insights for college students. However, the weakest dimension is clarity, as the absence of a one-line summary and a structured description makes it difficult to quickly grasp the project's full scope. The execution and usability are limited by the lack of structured metadata and UI keywords, indicating a basic implementation without a fully developed interface."
  },
  {
    "id": "3033771",
    "name": "QuickSaySomething",
    "oneLineDescription": "QuickSaySomething",
    "fullDescription": "QuickSaySomething is your panic button for awkward silence: one click, and suddenly you’ve got a smart, business-friendly topic that makes you sound way more prepared than you probably felt 10 seconds ago. It gives you quick facts, a clean explanation, and just enough depth to jump into networking chats, interviews, or first dates without sounding like you swallowed a textbook. Basically, it’s conversation cheat codes for people who want to be interesting on purpose. Enjoy.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 82,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title and structured metadata, indicating a shippable product. The weakest dimension is usefulness, as the project lacks a clear target user group and practical application beyond being a conversation starter, which limits its real-world impact."
  },
  {
    "id": "3033741",
    "name": "NIKE - DAY 2",
    "oneLineDescription": "NIKE - DAY 2",
    "fullDescription": "AI Ad for Nike - used veo3, nanobanana 2, claude, chat gpt",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 78,
      "creativity": 68,
      "clarity": 40,
      "usability": 50
    },
    "judgesNote": "The strongest dimension for this project is execution, as the live URL returns a 200 status and contains structured metadata, indicating a polished presentation. However, the weakest dimension is clarity, as the description is sparse and lacks a one-line summary, making it difficult to understand the project's purpose and functionality. Additionally, the lack of a clear target user or problem addressed results in low usefulness and usability scores."
  },
  {
    "id": "3033696",
    "name": "diabetes support",
    "oneLineDescription": "diabetes support",
    "fullDescription": "This is an app that tells you what your fast acting insulin dose should be based carbohydrates and guidelines provided by your primary care doctor. There is a search engine for finding the carb count of the food you are planning on eating. There are options for linking your PCP to have real time messaging with them through the app there is an option for wearables that has an emergency contact option to be contacted based on predetermined guidelines. I built this app for convenience.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 70,
      "creativity": 80,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it addresses a real need for diabetes patients by calculating insulin doses and offering PCP connectivity. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat disorganized description. The artifact review shows a live URL with a login wall, which limits usability and execution scores, as the interface is not directly accessible."
  },
  {
    "id": "3033613",
    "name": "Production-style beauty consultation system",
    "oneLineDescription": "Production-style beauty consultation system",
    "fullDescription": "This project is a modular beauty consultation system designed to simulate a production-ready digital beauty advisor. It collects detailed user inputs like skin type, tone, concerns, climate, sensitivity, budget, and routine preferences, then turns that information into personalized skincare and makeup recommendations with ingredient reasoning, safety checks, timeline guidance, and feedback-based adaptation. I built it to show how a beauty brand could deliver intelligent, scalable personalization",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 82,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "The project's strongest dimension is creativity, as it offers a novel approach to personalized beauty consultations by integrating multiple user inputs for tailored recommendations. However, clarity is the weakest dimension due to the absence of a one-line summary and a structured description, making it difficult to quickly grasp the project's purpose. The execution is limited by the lack of structured metadata and a mismatch between the page title and project name, which affects the perceived polish and readiness of the system."
  },
  {
    "id": "3033600",
    "name": "SkillLoop – Adaptive Quiz App",
    "oneLineDescription": "SkillLoop – Adaptive Quiz App",
    "fullDescription": "SkillLoop is an adaptive quiz web app that turns study notes into personalized practice. Users generate quizzes from their own notes, answer questions, and rate their confidence. The app tracks accuracy and confidence to identify weak areas and automatically reintroduce those topics. I built this using HTML, CSS, and JavaScript, using AI to refine logic, UX, and code structure without breaking functionality.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 65,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL that returns a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs, making it difficult to quickly grasp the project's purpose. Usability is limited by the lack of visible UI keywords, suggesting a less intuitive interface."
  },
  {
    "id": "3033551",
    "name": "Uplift - Social Fitness App",
    "oneLineDescription": "Uplift - Social Fitness App",
    "fullDescription": "Uplift is a social fitness platform designed to bring accountability, competition, and community into people’s lives. I built Uplift because fitness has always been a huge part of my life. Fitness taught me discipline, structure, and confidence—but I also saw how hard it is for most people to stay consistent on their own. Me and my cofounder used various AI tools such as Cursor, Claude, and ChatGBT to build this. We're still early and very open to any feedback!",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 68,
      "usability": 85
    },
    "judgesNote": "Execution is the strongest dimension, with a live App Store page confirming the app's availability and structured metadata indicating polish. However, the clarity is weak due to the absence of a one-line summary and a sparse description that lacks detail on specific features or user benefits. Creativity is average, as the concept of a social fitness app is not novel without unique features or modalities."
  },
  {
    "id": "3033504",
    "name": "Angler IQ | Freshwater Fishing Intelligence",
    "oneLineDescription": "Angler IQ | Freshwater Fishing Intelligence",
    "fullDescription": "A fishing intelligence web app that analyzes weather, water conditions, and location data to predict optimal fishing times and locations.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 65,
      "usability": 72
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a matching page title and a comprehensive meta description, indicating a well-developed web app. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is not well-structured, making it difficult to quickly grasp the project's purpose. Usability is limited by the low app keyword count, suggesting a less interactive interface."
  },
  {
    "id": "3033503",
    "name": "I Build Systems That Grow Small Businesses",
    "oneLineDescription": "I Build Systems That Grow Small Businesses",
    "fullDescription": "Hey there! I’m Sergio, and today I’m walking you through a project I built called, \"I Build Systems That Grow Small Businesses.\" At its core, my project is a video portfolio designed to showcase my AI expertise. I wanted to see if I could bridge the gap between planning and conquering. To do that, I integrated AI; Flow and Whisk, into my workflow. Enjoy the video!",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 60,
      "creativity": 65,
      "clarity": 50,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it attempts to integrate AI into a personal workflow for showcasing expertise. However, the weakest dimension is clarity, as the description lacks a concise explanation of what the project does and who it serves. The artifact review indicates a LinkedIn post behind a login wall, limiting usability and execution scores due to restricted access and lack of a standalone product."
  },
  {
    "id": "3033464",
    "name": "Zap2weather",
    "oneLineDescription": "Zap2weather",
    "fullDescription": "I have built an AI that is growing and learning how to forecast tornadoes before they happen. I want to save lives.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 55,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a 200 status and structured metadata, indicating a shippable product. However, clarity is the weakest dimension as the description lacks a one-line summary and does not clearly explain the project's functionality or user interaction. The login wall limits usability, as it prevents immediate user access to the interface."
  },
  {
    "id": "3033452",
    "name": "Perfect Derby",
    "oneLineDescription": "Perfect Derby",
    "fullDescription": "Perfect Derby is a 2D arcade-style baseball game focused on timing-based hitting and high score gameplay. Built in JavaScript, it features custom hit detection, timing systems, and game flow. I implemented live leaderboards using Supabase and SQL, allowing player scores to update and rank in real time. AI tools were used to speed up iteration on art and UI.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 75,
      "clarity": 55,
      "usability": 78
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title, indicating a shippable product. However, clarity is the weakest dimension as the project lacks a one-line summary and structured description, making it difficult to quickly grasp the project's purpose and features. The usability score benefits from the live leaderboard feature, but the absence of structured metadata and a meta description suggests room for improvement in polish."
  },
  {
    "id": "3033301",
    "name": "SkillBridge: Helping Students Turn Experience Into Job-Ready Communication",
    "oneLineDescription": "SkillBridge: Helping Students Turn Experience Into Job-Ready Communication",
    "fullDescription": "SkillBridge is an AI career prep platform for students who have real experience but struggle to present it clearly. Users save a default CV, get ATS feedback against job descriptions, translate experience into stronger resume language, and generate personalized interview practice sets with AI follow-up questions and feedback. It connects resume, interview, and portfolio growth into one system so users can explain their value with more clarity and confidence.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 72,
      "creativity": 80,
      "clarity": 70,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for SkillBridge is its usefulness, as it targets a clear user group—students—and addresses a real problem of translating experience into job-ready communication. However, the weakest dimension is usability, as the live URL lacks visible UI elements and structured metadata, indicating a lack of a fully developed interface. Execution is also limited by the absence of a meta description and minimal page content, capping its potential impact."
  },
  {
    "id": "3033263",
    "name": "Career Connect",
    "oneLineDescription": "Career Connect",
    "fullDescription": "I created Career Connect to address the lack of clear, centralized workforce pathways for immigrants, refugees, and international students. I independantly developed the concept and system design, using AI to assist with coding and implementation. The platform connects users to resources, organizations, and career pathways, and taught me how to leverage AI as a tool to bring complex, real-world solutions to life. The website can be found at careerconnection.replit.app",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 80,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "The strongest dimension for Career Connect is its usefulness, as it targets a clear and defined user group: immigrants, refugees, and international students, providing them with valuable career resources. Execution is also strong, with a live URL that returns a 200 status and a matching page title, indicating a functional deployment. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs, making it harder to quickly grasp the project's scope and features."
  },
  {
    "id": "3033262",
    "name": "Torizon - Startup Intelligence Platform",
    "oneLineDescription": "Torizon - Startup Intelligence Platform",
    "fullDescription": "Spotted a painful gap in the market? Post it. The community votes on what's real and widespread. Building something people need? Submit your solution, link it to the problems it solves, and get seen by potential users.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 80,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL returning a 200 status and a detailed meta description, indicating a shippable product. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs. The usability score is limited by the absence of visible UI keywords, suggesting a lack of user interface elements."
  },
  {
    "id": "3033251",
    "name": "ArborOps + Olive AI",
    "oneLineDescription": "ArborOps + Olive AI",
    "fullDescription": "ArborOps + Olive is a custom-built operations platform designed specifically for tree service companies. Starting from a standard Odoo 19 system, we transformed it into a fully specialized operating system that manages estimates, jobs, crews, scheduling, routing, and employee workflows in one unified platform. The system includes a native iPhone app for field crews and a manager portal for office staff, both connected to the same real-time operational data. Employees can view schedules, access j",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 82,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension of this project is its usefulness, as it targets a specific industry (tree service companies) with a comprehensive operations platform. The execution is also strong, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest dimension due to the absence of a one-line summary and an incomplete description, which makes it difficult to quickly grasp the project's full scope. Usability is limited by the presence of a login wall, capping its score."
  },
  {
    "id": "3033248",
    "name": "Analect - The GPS for code",
    "oneLineDescription": "Analect - The GPS for code",
    "fullDescription": "Analect turns massive files into navigable summaries, so you jump straight to the logic you need.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description, making it difficult to quickly grasp the project's purpose. The project's creativity is bolstered by its unique approach to code navigation, though the usability score is limited by the low app keyword count, suggesting a less developed interface."
  },
  {
    "id": "3033062",
    "name": "OptOut.fyi",
    "oneLineDescription": "OptOut.fyi",
    "fullDescription": "OptOut.fyi is a free, bilingual letter generator that helps immigrants exercise CCPA/CPRA privacy rights against AI surveillance companies like Palantir, Clearview AI, and LexisNexis. Users pick a company and right—know, delete, correct, opt-out of sale, limit sensitive data, or opt-out of profiling—and get a legally-grounded letter ready to send. A 45-day countdown tracks the legal response deadline, then generates complaint letters to California regulators. Zero data collection, client-sided.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 90,
      "execution": 92,
      "creativity": 85,
      "clarity": 80,
      "usability": 88
    },
    "judgesNote": "The strongest dimension is execution, with a live URL returning a 200 status and a detailed page content, indicating a well-developed product. Usefulness is also high due to its clear target user group—immigrants—and practical application in exercising privacy rights. The weakest dimension is clarity, as the absence of a one-line summary and a slightly mismatched page title reduce immediate understanding. However, the structured metadata and comprehensive description support overall clarity."
  },
  {
    "id": "3032975",
    "name": "Vidove",
    "oneLineDescription": "Vidove",
    "fullDescription": "Introducing ViDove, a translation agent system that brings multimodal context and memory-augmented reasoning into an end-to-end video subtitling workflow. Inspired by professional translators, ViDove coordinates specialized agents (Vision, Auditory, Translation, Proofreader, Editor) over a unified memory to leverage visual/audio cues, domain knowledge, and retrieval-augmented context for accurate, consistent, and scalable translations.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 85,
      "clarity": 68,
      "usability": 60
    },
    "judgesNote": "The project's strongest dimension is creativity, as it introduces a novel approach to video subtitling by integrating multimodal context and memory-augmented reasoning. However, the weakest dimension is clarity, due to the absence of a one-line summary and a somewhat dense description that lacks immediate accessibility. The execution and usability are limited by the absence of structured metadata and UI elements on the live page, indicating a lack of polish and user interface readiness."
  },
  {
    "id": "3032970",
    "name": "Portfolio Agent: AI Portfolio Planning Desk",
    "oneLineDescription": "Portfolio Agent: AI Portfolio Planning Desk",
    "fullDescription": "Portfolio Agent is an AI-powered financial planning tool that helps users create and monitor risk-aware investment portfolios based on client profiles, risk tolerance, time horizon, and sector preferences. It provides smart allocation recommendations, live market tracking, return analysis, and forward-looking forecasts. Languages/Software used: TypeScript, Next.js 15 App Router, React 19, Node.js runtime.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 82,
      "clarity": 75,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for this project is execution, as evidenced by a live URL with a matching title and a comprehensive page content length, indicating a well-developed application. Usefulness is also strong, targeting financial planning with clear user benefits like risk-aware investment portfolios. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that could be more structured. Usability is solid, though the low app keyword count suggests the interface might not be fully intuitive."
  },
  {
    "id": "3032925",
    "name": "Win Big Florida",
    "oneLineDescription": "Win Big Florida",
    "fullDescription": "Win Big Florida is an AI‑powered web app that helps players quickly analyze Florida lottery scratch‑offs and draw games. It uses real‑time data and custom code to surface odds, expected value, and smarter play strategies in a clean, mobile‑friendly dashboard, showcasing my end‑to‑end skills in data integration, AI prompting, and full‑stack development.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 92,
      "creativity": 85,
      "clarity": 75,
      "usability": 80
    },
    "judgesNote": "The strongest dimension is execution, with a live URL returning a 200 status and a matching page title, indicating a shippable product. The weakest dimension is clarity, as the absence of a one-line summary and a somewhat dense description make it harder to quickly grasp the project's scope. The project is useful for lottery players in Florida, offering real-time data analysis, but the interface could be more evident given the low app keyword count."
  },
  {
    "id": "3032834",
    "name": "MadeLaunch - Launch anything you've built.",
    "oneLineDescription": "MadeLaunch - Launch anything you've built.",
    "fullDescription": "MadeLaunch - Launch anything you've built. MadeLaunch helps makers and creators get votes, feedback, and visibility from a community of early adopters.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 65,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a 200 status and structured metadata, indicating a polished and shippable product. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is repetitive, making it difficult to quickly grasp the project's purpose. The login wall limits usability, capping it at 65 despite the presence of a real interface."
  },
  {
    "id": "3032757",
    "name": "IPL-fantasy App",
    "oneLineDescription": "IPL-fantasy App",
    "fullDescription": "It's a fantasy app I created, which was used to auction the players present in this IPL season and to calculate and visualize the points scored by the respective team's players. This app for now is used by our roomates only for the IPL 2026",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 40,
      "creativity": 68,
      "clarity": 55,
      "usability": 40
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it attempts to create a fantasy app specifically for IPL, which is a popular domain. However, the usefulness is weak due to the limited target audience (roommates) and lack of broader applicability. Execution and usability are severely hampered by the lack of a working live URL, resulting in low scores in these dimensions. Clarity is also weak due to the absence of a one-line summary and a sparse description."
  },
  {
    "id": "3032704",
    "name": "Stem System Hub",
    "oneLineDescription": "Stem System Hub",
    "fullDescription": "STEM SYSTEM Hub is a platform designed to connect individuals in STEM with the business acumen needed to successfully pivot and grow in their careers. It provides access to mentors who support users throughout their professional journeys whilst creating opportunities for meaningful connection both in person and virtually.It offers structured lessons to ensure that knowledge is not only learned but can be practically applied at each stage of career development. https://chanelisaacs.lovable.app/",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 55,
      "creativity": 72,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of the project is its creativity, as it attempts to blend STEM career development with business acumen and mentorship, which is a novel approach. However, the weakest dimension is execution, as there is no working live URL, which severely limits the ability to assess the platform's functionality and usability. The lack of a one-line summary and a clear, structured description also impacts clarity."
  },
  {
    "id": "3032683",
    "name": "DEV 11 fantasy Cricket Platform",
    "oneLineDescription": "DEV 11 fantasy Cricket Platform",
    "fullDescription": "Designed and deployed a full-stack fantasy cricket platform (FastAPI, PostgreSQL, React, Tailwind) with Dream11-style T20 scoring, a 5-factor player credit calculator, and a live Cricbuzz scraper—fully containerized on GCP (Cloud Run, Cloud SQL, Cloud Build) at under $ 8/month.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching title, indicating a functional deployment. However, clarity is the weakest dimension as the description lacks a one-line summary and structured paragraphs, making it difficult to quickly understand the project's scope and purpose. The absence of structured metadata and low content length also suggest limited polish and usability."
  },
  {
    "id": "3032662",
    "name": "AI Cultural Guide to Kenyan & African Traditions",
    "oneLineDescription": "AI Cultural Guide to Kenyan & African Traditions",
    "fullDescription": "I built an AI-powered cultural guide that helps users learn about Kenyan and broader African traditions, languages, food, and history in an interactive way. I created this project to make African culture more accessible and engaging, especially for students and people curious about diverse cultural heritage. The app allows users to ask questions about topics like Swahili phrases, traditional foods, tribes, music, and customs. It also generates cultural facts, quizzes, and short explanations tai",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 82,
      "clarity": 68,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it offers an interactive AI-powered guide to African culture, which is a novel and engaging approach to cultural education. However, the weakest dimension is execution, as there is no working live URL, which severely limits the ability to assess the project's current functionality and usability. The lack of a one-line summary and a clear, structured description also impacts clarity."
  },
  {
    "id": "3032624",
    "name": "CampusRide",
    "oneLineDescription": "CampusRide",
    "fullDescription": "A real-time ride-sharing platform built for college students. Riders post trip requests, drivers compete with offers, and everyone saves money.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 78,
      "creativity": 80,
      "clarity": 70,
      "usability": 68
    },
    "judgesNote": "The strongest aspect of CampusRide is its usefulness, targeting a clear user group—college students—with a practical ride-sharing solution. Execution is solid with a live URL and correct page title, but the lack of structured metadata and minimal content length suggest limited polish. Clarity is the weakest dimension due to the absence of a one-line summary and a sparse description, making it difficult to quickly grasp the project's full scope."
  },
  {
    "id": "3032562",
    "name": "Bubble Planner",
    "oneLineDescription": "Bubble Planner",
    "fullDescription": "Planner app for keeping track of project and tasks throughout the day, week and month. Built with Claude Code.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 65,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "The strongest dimension for Bubble Planner is execution, as it has a live URL with a matching page title and meta description, indicating a shippable product. However, the weakest dimension is clarity due to the absence of a one-line summary and a sparse description that lacks detail about the app's features and user benefits. The low app/UI keyword count suggests limited usability, though the absence of a login wall is a positive signal."
  },
  {
    "id": "3032522",
    "name": "Carllm: LLM Diagnostics for Vehicles",
    "oneLineDescription": "Carllm: LLM Diagnostics for Vehicles",
    "fullDescription": "Carllm is an AI-powered car diagnostic web app built with Vue 3 and Firebase. I made it because I did not like troubleshooting my own car and wanted an easier, more accurate way to diagnose issues. I built it with Codex, designing it to ask follow-up questions, store useful details learned from user prompts such as symptoms, repairs, and vehicle history, and use multiple AI models with a judge model to deliver stronger diagnostics.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 82,
      "creativity": 85,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for this project is creativity, as it combines multiple AI models and a judge model to enhance vehicle diagnostics, which is a novel approach. However, clarity is the weakest dimension due to the absence of a one-line summary and a detailed description, making it challenging to quickly understand the project's scope and functionality. The live URL returns a 200 status, indicating a functional site, but the lack of UI keywords and structured metadata limits usability and execution scores."
  },
  {
    "id": "3032501",
    "name": "Student Hostel Finder",
    "oneLineDescription": "Student Hostel Finder",
    "fullDescription": "The project titled “Smart Hostel Finder with Intelligent Chatbot and Proximity-Based Suggestion” is designed to address the challenges faced by students in finding suitable off-campus accommodation, particularly around Kirinyaga University. Due to the limited availability of on-campus housing, a large number of students are forced to seek accommodation in nearby areas such as Kutus and Kerugoya. However, the current process of finding hostels is largely manual, fragmented, and inefficient. Stude",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 68,
      "creativity": 75,
      "clarity": 60,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its usefulness, as it targets a specific problem faced by students at Kirinyaga University in finding off-campus accommodation. However, the execution is limited by the lack of a matching page title and absence of a meta description, which suggests a lack of polish. Clarity is the weakest dimension due to the incomplete description and missing one-line summary, making it difficult to quickly grasp the project's full scope."
  },
  {
    "id": "3032405",
    "name": "CraveItOut-your own smart kitchen companion",
    "oneLineDescription": "CraveItOut-your own smart kitchen companion",
    "fullDescription": "Built and deployed a full-stack AI-powered meal suggestion web app using Anthropic's Claude API, vanilla JavaScript, and Vercel serverless functions. The app allows users to input ingredients and mood to receive personalized recipe suggestions in real time. Implemented a secure backend API proxy with server-side rate limiting, prompt injection detection, and CORS protection. Designed a mobile-first PWA with offline support, dark mode, and installable home screen capability.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 85,
      "clarity": 68,
      "usability": 75
    },
    "judgesNote": "The project's strongest dimension is execution, with a live URL returning a 200 status and a substantial page content length, indicating a fully deployed application. However, the clarity is the weakest due to the absence of a one-line summary and a somewhat vague description that lacks immediate clarity on the user experience. The usability score is limited by the absence of visible UI keywords, suggesting potential issues with user interface discoverability."
  },
  {
    "id": "3032246",
    "name": "PhishingScope — Real-Time Phishing Detection Chrome Extension",
    "oneLineDescription": "PhishingScope — Real-Time Phishing Detection Chrome Extension",
    "fullDescription": "PhishingScope is a Chrome extension that analyzes webpages in real time to detect phishing indicators and assign a clear, explainable risk score. It helps users make safer decisions by breaking down threats into simple, understandable insights. I built this to solve a real problem. Most people don’t know how to recognize phishing attempts, even though they’re one of the most common cybersecurity threats. My goal was to create a tool that n",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 78,
      "creativity": 85,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest aspect of this project is its usefulness, addressing a real cybersecurity issue with a clear target user base. However, the clarity of the project is weak due to the absence of a one-line summary and incomplete description. The execution is limited by the lack of structured metadata and minimal page content, which also impacts usability as there is no visible interface or app keywords."
  },
  {
    "id": "3032119",
    "name": "StylesGo Mobile Barber Service",
    "oneLineDescription": "StylesGo Mobile Barber Service",
    "fullDescription": "StylesGo is a marketplace platform that connects mobile barbers and hairstylists with customers seeking haircuts to be provided at their home, hotel, or event. Built primarily with the use of Claude, StylesGo is also a mobile app that can be found on the app store with features that make requesting service simple, smooth, and accessible.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 78,
      "creativity": 72,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for StylesGo is its usefulness, as it targets a clear user need by connecting mobile barbers with customers for in-home services, particularly in the SF Bay Area and DC Metro. However, the clarity of the project is weak due to the absence of a one-line summary and a structured description, making it difficult to quickly understand the project's scope and features. The execution is solid with a live URL and structured metadata, but the login wall limits usability, capping it at 65."
  },
  {
    "id": "3032118",
    "name": "Rural Guardian",
    "oneLineDescription": "Rural Guardian",
    "fullDescription": "Rural Safety Guardian is a simple emergency‑prep site for rural communities. It offers printable emergency cards, severe‑weather searches, outage and road‑condition tools, and resources for missing pets or livestock. It brings practical safety needs together in one easy place.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 78,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a detailed page and structured metadata, indicating a shippable product. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is somewhat vague, making it harder to quickly grasp the project's full scope. The project is useful for rural communities, but the creativity is average as it consolidates existing tools rather than introducing novel solutions."
  },
  {
    "id": "3032108",
    "name": "JobCraftor",
    "oneLineDescription": "JobCraftor",
    "fullDescription": "JobCraftor is an AI-powered tool that transforms a job posting and a resume into a personalized action plan for landing that role. Users paste a job description and their resume, and JobCraftor generates role insights, identifies skill gaps, suggests resume improvements, and creates a step-by-step plan to become competitive. I built it using Next.js, TypeScript, and AI-driven analysis, using Codex to accelerate development and refine both the product and user experience.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 92,
      "creativity": 85,
      "clarity": 75,
      "usability": 90
    },
    "judgesNote": "Execution is the strongest dimension for JobCraftor, with a live URL that returns a 200 status and a matching page title, indicating a well-developed and shippable product. The weakest dimension is clarity, as the absence of a one-line summary and a somewhat dense description make it harder to quickly grasp the project's purpose. However, the project is quite usable, with a real interface and no login wall, making it accessible to users."
  },
  {
    "id": "3032093",
    "name": "Hearth AI",
    "oneLineDescription": "Hearth AI",
    "fullDescription": "Hearth AI is a tech support experience designed for older adults. Inspired by real work helping seniors, it combines guided support for common tech issues. It also prepares a live support note so helpers can step in without starting over.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 78,
      "creativity": 80,
      "clarity": 70,
      "usability": 72
    },
    "judgesNote": "The strongest dimension for Hearth AI is its usefulness, as it targets a real and specific user group: older adults needing tech support. However, the clarity of the project is weak due to the absence of a one-line summary and a structured description, making it harder to quickly grasp the project's scope. The live URL is functional, but the lack of structured metadata and minimal UI keywords suggest limited usability and execution polish."
  },
  {
    "id": "3032006",
    "name": "Before Interview",
    "oneLineDescription": "Before Interview",
    "fullDescription": "Before Interview is a hiring platform that gives candidates more than a resume and gives recruiters more than a PDF. Instead of the normal application flow where a candidate finds a job, submits a form, and sends only a resume, Before Interview adds a role-specific mock interview before the real application. The candidate creates a profile, selects or searches for a target job, completes a mock interview tailored to that role, and then gets a structured report generated from their responses. Th",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 82,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest aspect of this project is its execution, with a live URL that returns a 200 status and a matching page title, indicating a shippable product. However, the clarity is the weakest dimension due to the absence of a one-line summary and a somewhat abrupt description that cuts off mid-sentence. The login wall limits usability, as it prevents full access to the platform without signing up, capping the usability score."
  },
  {
    "id": "3031954",
    "name": "ThreatLens: AI Threat Intelligence Platform",
    "oneLineDescription": "ThreatLens: AI Threat Intelligence Platform",
    "fullDescription": "Built with TypeScript, Firecrawl, and Elasticsearch, ThreatLens is a serverless attack surface management platform. I integrated Gemini 3 to parse unstructured security signals from endpoints and JavaScript, mapping findings to the NVD API. Building this taught me to engineer scalable data pipelines and use AI to extract structured threat intelligence from raw reconnaissance data, drastically reducing manual triage time.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL returning a 200 status and structured metadata, indicating a shippable product. However, clarity is the weakest dimension due to the absence of a concise one-line summary and a somewhat dense description that lacks immediate clarity on user impact. Usability is limited by the low app keyword count, suggesting a minimal interface."
  },
  {
    "id": "3031826",
    "name": "Essence Style Solver",
    "oneLineDescription": "Essence Style Solver",
    "fullDescription": "An AI-powered styling app that analyzes your features and shows you exactly what colors, fits, and styles enhance your look. It goes beyond recommendations by letting you visualize changes on yourself in real time. Designed to help you make confident style decisions effortlessly.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 85,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL returning a 200 status and structured metadata indicating a polished deployment. However, clarity is the weakest point due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs. The project shows creativity with its real-time visualization feature, but the lack of visible UI keywords suggests usability could be improved."
  },
  {
    "id": "3031768",
    "name": "Pophealthdataportal",
    "oneLineDescription": "Pophealthdataportal",
    "fullDescription": "I have built a county-level population health evidence workspace designed to help teams quickly find trusted, citable data for CHNAs, planning, and strategy. It turns a plain-language question into authority-ranked sources, readable county tables, exports, and analysis-ready evidence without relying on black-box AI search. The vision is to grow it into a high-trust platform for finding, comparing, and packaging population health and SDOH data across key service areas. Right now it covers TN & VA",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 82,
      "clarity": 75,
      "usability": 70
    },
    "judgesNote": "The strongest dimension of this project is its execution, with a live URL returning a 200 status and a substantial page content length, indicating a functional and detailed artifact. However, the clarity of the project is weaker due to the absence of a one-line summary and a somewhat dense description that could be more structured. Usability is limited by the low app keyword count, suggesting a less developed user interface."
  },
  {
    "id": "3031759",
    "name": "Face Pulse",
    "oneLineDescription": "Face Pulse",
    "fullDescription": "A Facial Emotion Detector that provides a after summary report to the user",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 75,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest dimension is execution, as the live URL returns a 200 status and matches the project theme, indicating a functional deployment. However, the weakest dimension is clarity, due to the lack of a one-line summary and a sparse description that fails to clearly explain the project's purpose and user benefits. The absence of UI keywords and a short content length suggest limited usability and interface development."
  },
  {
    "id": "3031748",
    "name": "CutServe",
    "oneLineDescription": "CutServe",
    "fullDescription": "Built a video condensing and stats-taking tool for a niche sport (roundnet), solving a common pain point and generating paid users. Built it with Claude Code, Codex, Cursor, Supabase, Vercel, and Stripe. Working on marketing and other operations now.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for CutServe is execution, with a live URL returning a 200 status and a matching page title, indicating a shippable product. Usefulness is also strong due to its clear target user base in the niche sport of roundnet. However, clarity is the weakest dimension, as the absence of a one-line summary and a somewhat vague description make it difficult to quickly grasp the project's full scope. The login wall limits usability, capping it at 65."
  },
  {
    "id": "3031744",
    "name": "AlgoScope",
    "oneLineDescription": "AlgoScope",
    "fullDescription": "I built AlgoScope because I kept wondering what Big O really looks like in my own code and how to actually make it better. Paste in Python and it turns your algorithm into a live visual story showing execution, bottlenecks, and scaling with input. Built with OpenAI Codex as a creative engineering partner, I iterated on design and workflow while keeping the core logic intentional. It helps you test ideas, compare approaches, and understand performance in a way that actually sticks.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 88,
      "clarity": 68,
      "usability": 68
    },
    "judgesNote": "The strongest dimension for AlgoScope is creativity, as it offers a novel approach to visualizing algorithm performance, which is not commonly seen. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured explanation. The live URL returns a 200 status with a matching title, indicating solid execution, but the lack of UI keywords and minimal content length suggest limited usability."
  },
  {
    "id": "3031712",
    "name": "CottageMP",
    "oneLineDescription": "CottageMP",
    "fullDescription": "A marketplace for homemade food, making it accessible for anyone to sell or purchase, like Uber or Airbnb for food.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 82,
      "creativity": 80,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for CottageMP is its usefulness, as it targets a real problem by creating a marketplace for homemade food, akin to Uber or Airbnb. However, the clarity of the project is weak due to the absence of a one-line summary and a structured description, making it harder to quickly grasp the project's scope. The artifact review shows a live URL with a matching title and meta description, indicating good execution, but the login wall limits usability."
  },
  {
    "id": "3031707",
    "name": "PrivacyShield",
    "oneLineDescription": "PrivacyShield",
    "fullDescription": "PrivacyShield is a full-spectrum digital privacy toolkit designed to return control to individuals targeted by mass data collection, corporate tracking, and government surveillance. It was built specifically to disrupt the pipeline used by tools like \"Fog Reveal,\" which allow law enforcement to purchase and analyze location and behavioral data from commercial brokers without warrants or oversight. features,Dark Web & Breach Monitoring,Digital Footprint Scrubbing,Identity Theft Prevention,GPS",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL with a matching title and meta description, indicating a shippable product. Usefulness is strong as it addresses a real problem for individuals concerned with digital privacy. Clarity is the weakest dimension; the absence of a one-line summary and a somewhat dense description make it harder to quickly grasp the project's scope."
  },
  {
    "id": "3031682",
    "name": "Web Hacking Portfolio",
    "oneLineDescription": "Web Hacking Portfolio",
    "fullDescription": "Web Application Portfolio Project Includes, Technical Portfolio about ME. Working for Educational Purposes.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 68,
      "creativity": 60,
      "clarity": 50,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for this project is execution, as it has a live URL returning a 200 status code, indicating a functional web page. However, the weakest dimension is clarity, as there is no one-line summary and the description is vague, making it difficult to understand the project's purpose. The presence of a login wall limits usability, and the lack of structured metadata and a meta description suggests a lack of polish."
  },
  {
    "id": "3031662",
    "name": "Props Edge",
    "oneLineDescription": "Props Edge",
    "fullDescription": "A full-stack data science web application that predicts NBA player prop outcomes using machine learning, analyzes defensive matchups, and compares real-time sportsbook lines to find edges.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 82,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it combines machine learning with real-time sportsbook analysis, which is a novel approach in the sports betting domain. However, the weakest dimension is execution, as there is no working live artifact due to a fetch timeout, which severely limits the ability to assess the project's current state and usability. The lack of a one-line summary and a structured description also impacts clarity, making it difficult to quickly grasp the project's scope and functionality."
  },
  {
    "id": "3031620",
    "name": "RewriteKit: From rough draft to ready-to-use",
    "oneLineDescription": "RewriteKit: From rough draft to ready-to-use",
    "fullDescription": "Communication matters more in today’s world than it should. I built RewriteKit to help people with strong ideas but weaker communication tools compete more fairly. It turns rough notes into polished posts, prompts, emails, summaries, tables, and slide bullets. Built with Next.js, TypeScript, and the OpenAI API to make clear writing faster and more accessible.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 90,
      "creativity": 82,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching title and structured metadata, indicating a shippable product. Clarity is the weakest dimension as the description lacks a concise one-line summary and is somewhat vague about specific user scenarios, which could hinder quick understanding."
  },
  {
    "id": "3031604",
    "name": "Mindful Journal",
    "oneLineDescription": "Mindful Journal",
    "fullDescription": "Mindful Journal is an AI-powered journaling app that helps users track moods, reflect on their emotions, and gain personalized insights. Using sentiment analysis and AI-generated prompts, it encourages deeper self-reflection while ensuring privacy by storing all data locally. Built with React, Flask, and OpenAI’s GPT-3, it provides real-time feedback, mood tracking, and weekly summaries. The goal is to make journaling more engaging, insightful, and secure for mental well-being",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 72,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a 200 status and structured metadata, indicating a polished and functional product. However, clarity is the weakest dimension as the description lacks a concise one-liner and the project title doesn't match the page title, which could confuse users. The login wall limits usability, capping it at 65 despite the presence of a real interface."
  },
  {
    "id": "3031570",
    "name": "SmartCart: AI Meal & Grocery Planner",
    "oneLineDescription": "SmartCart: AI Meal & Grocery Planner",
    "fullDescription": "SmartCart is an AI meal planner that stretches budgets by anchoring recipes to ingredients you already own. Built with Next.js, React, and Codex for rapid UI and OpenAI integration. Beyond generating recipes, my vision is to evolve this into a complete grocery logistics engine—integrating mapping and real-time pricing APIs to optimize store routes, compare local discounts, and fully automate the meal-planning lifecycle from pantry to purchase.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and having structured metadata, indicating a shippable product. However, the clarity is weak as there is no one-line summary and the description is somewhat vague, making it difficult to quickly grasp the project's scope. Usability is limited by a likely login wall, capping its potential for real user interaction."
  },
  {
    "id": "3031512",
    "name": "MyCrediTracker – All-in-One Credit Empowerment Platform",
    "oneLineDescription": "MyCrediTracker – All-in-One Credit Empowerment Platform",
    "fullDescription": "MyCrediTracker is an all-in-one credit management app built using Codex, Flutter, Visual Studio Code, and Firebase as the backend. Users can track scores, manage accounts and debts, access dispute templates, and connect with experts. The app supports multiple languages and is fully active (create a profile to test all features). I built this app to simplify credit & empower underserved communities. Since working with Codex, I’ve learned how to leverage AI to rapidly refine real-world solutions.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 75,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for MyCrediTracker is usefulness, as it targets a real problem by providing credit management tools for underserved communities. However, the weakest dimension is clarity, due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs. The artifact review shows a live URL with a 200 status, but the page title does not match the project, and the content is minimal, affecting execution and usability scores."
  },
  {
    "id": "3031434",
    "name": "Real Estate Investor Project",
    "oneLineDescription": "Real Estate Investor Project",
    "fullDescription": "Built to understand markets, evaluate opportunities, and turn public Zillow housing data into decision-support tools — featuring automated daily data pipelines, SQL modeling, data quality auditing, and embedded dashboards.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 75,
      "clarity": 60,
      "usability": 68
    },
    "judgesNote": "The strongest aspect of this project is its usefulness, as it targets real estate investors with tools for market analysis and decision support. However, the weakest dimension is clarity; the absence of a one-line summary and a somewhat vague description make it difficult to quickly grasp the project's full scope. The artifact review shows a live URL with a matching page title, but the content is sparse, limiting execution and usability scores."
  },
  {
    "id": "3031426",
    "name": "Event Threat Analyzer",
    "oneLineDescription": "Event Threat Analyzer",
    "fullDescription": "Built a live AI-powered web tool that helps LA County event planners identify safety risks, local crime patterns, and compliance requirements for their specific event. Used Claude AI to generate real-time personalized assessments by location, crowd size, and event type. Integrated lead capture, static free previews for 9 LA cities, and a contact form — turning an AI tool into a functioning business asset for a real security company.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 78
    },
    "judgesNote": "The strongest dimension for this project is execution, as evidenced by a live URL with a matching title and substantial content length, indicating a well-developed tool. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs, making it harder to quickly grasp the project's scope. Usability is solid but not exceptional, as the interface presence is minimal with only one app keyword detected."
  },
  {
    "id": "3031413",
    "name": "International Dark Sky DIscovery Center",
    "oneLineDescription": "International Dark Sky DIscovery Center",
    "fullDescription": "MuseumOS for the International Dark Sky Discovery Center — a multi-tenant SaaS platform replacing disconnected tool stacks at cultural venues. Built with React/Vite on Vercel, Supabase on the backend, and Square for payments. The platform manages inventory, POS, online store, and event operations in one unified system. Built using AI-assisted development (Claude) for architecture decisions, infrastructure automation, and rapid iteration from concept to production.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 80,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching title, indicating a functional deployment. However, clarity is the weakest dimension as the description lacks a concise one-liner and is somewhat jargon-heavy, making it difficult to quickly grasp the project's purpose. The absence of a preview image and low app keyword count also suggest limited usability and interface development."
  },
  {
    "id": "3031409",
    "name": "Taskmate Forest: Grow Your Productivity (and a Pet!)",
    "oneLineDescription": "Taskmate Forest: Grow Your Productivity (and a Pet!)",
    "fullDescription": "Stop the overwhelm. TaskMate turns your to-do list into a rewarding journey！ ·Task Vault: Store every idea and long-term goal. ·Today’s Focus: Pick your daily \"must-dos\" and stay on track. ·Evolve Your Pal: Earn nutrients by finishing tasks to hatch and grow your TaskMate pet.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 55,
      "creativity": 72,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, with a unique twist on the traditional to-do list by incorporating a pet evolution mechanic. However, the weakest dimension is execution, as there is no working live URL, which severely limits the ability to assess the project's current state and usability. The description lacks a one-line summary and is somewhat vague, impacting clarity."
  },
  {
    "id": "3031395",
    "name": "Pluto- stock research made easy",
    "oneLineDescription": "Pluto- stock research made easy",
    "fullDescription": "Pluto is an easy-to-use, seamless platform to conduct quick and easy financial research. Want to learn more about the stock you were gonna buy? Simply input the stock ticker, and Pluto will conduct a company analysis with financial ratios and the most recent SEC filings!",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 72,
      "clarity": 65,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching title, indicating a functional and accessible platform. However, the clarity is weak as the description lacks a one-liner and structured explanation, making it difficult to quickly grasp the project's purpose. The usability is limited by the low app keyword count, suggesting a minimal interface."
  },
  {
    "id": "3031280",
    "name": "ApexCareer Tracker",
    "oneLineDescription": "ApexCareer Tracker",
    "fullDescription": "ApexCareer Tracker is an AI-powered career management tool that helps students track job applications, analyze resumes, prepare for interviews, and manage their job search in one place. I built it to solve the problem of keeping applications organized while using AI to provide insights, interview questions, and follow-up messages that make the job search more efficient.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 80,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a functional deployment. However, the project lacks a meta description and structured metadata, which affects clarity and polish. The weakest dimension is clarity, as the absence of a one-line summary and a somewhat vague description make it harder to quickly grasp the project's full scope and benefits."
  },
  {
    "id": "3031272",
    "name": "Aurora - Smart Caffeine Tracker",
    "oneLineDescription": "Aurora - Smart Caffeine Tracker",
    "fullDescription": "Another Unwise Refill? O.K, Reconsider Alertness AURORA is a smart caffeine tracking app built to help users record doses, connect health data, and surface insights around caffeine, sleep, and alertness.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 80,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it offers a novel approach to caffeine tracking by integrating sleep and alertness data. However, the clarity is weak due to the absence of a one-line summary and a vague description that doesn't clearly convey the app's functionality. The execution and usability are limited by the sparse content and minimal interface signals on the live page, which suggests a lack of depth in the current implementation."
  },
  {
    "id": "3031186",
    "name": "Court Scheduling App",
    "oneLineDescription": "Court Scheduling App",
    "fullDescription": "The court calendar is often slow and inefficient, with clients and lawyers waiting for hours for their case to be called. Privacy is very important when scheduling cases, making an online or app-based solution difficult to implement. This site attempts to solve this problem by creating an app that does not compromise private attorney-client information.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 80,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The project's strongest dimension is creativity, as it addresses a unique problem of privacy in court scheduling, which is not commonly tackled. However, the weakest dimension is clarity, as the description lacks a one-line summary and is vague about the specific functionalities of the app. The artifact review indicates a login wall, which limits usability and execution scores, as it prevents full access to the app's features."
  },
  {
    "id": "3031165",
    "name": "Diagram Builder",
    "oneLineDescription": "Diagram Builder",
    "fullDescription": "This website is a clean and simple diagram builder designed to help users visualize ideas, systems, and workflows. It makes it easy to create diagrams with draggable boxes, arrows, and editable text directly on the canvas. Users can also save their work, load diagrams later, and quickly organize project plans or process maps.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for Diagram Builder is execution, as evidenced by a live URL with a matching page title and a substantial page content length, indicating a functional product. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs or a clear initial sentence. The project shows potential usefulness for users needing diagramming tools, but lacks creative novelty and structured metadata."
  },
  {
    "id": "3031024",
    "name": "StrideCirlce",
    "oneLineDescription": "StrideCirlce",
    "fullDescription": "StrideCircle is a social fitness app built to make walking feel competitive, motivating, and beautifully simple. Users can log daily steps, join multiple friend groups, track streaks and milestones, compare weekly progress, and switch between group dashboards to see who is leading. The experience is designed with a premium athletic aesthetic inspired by Apple Fitness and Strava, combining clean mobile UI with social accountability and lightweight gamification.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 60,
      "creativity": 72,
      "clarity": 68,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of StrideCircle is its usefulness, as it targets a clear user group (fitness enthusiasts) with practical features like step tracking and social gamification. However, the weakest dimension is execution; the live URL points to a GitHub repository rather than a functional app, capping execution at 60. Additionally, the lack of a one-line summary and a login wall on the GitHub page further hinder clarity and usability."
  },
  {
    "id": "3031021",
    "name": "Mobile app for groceries planification",
    "oneLineDescription": "Mobile app for groceries planification",
    "fullDescription": "SavorAI is a meal-planning and grocery app I built to save time, money, and mental load. Users can store recipes, import meals with AI or URLs, plan meals, and generate grocery lists. I started it to simplify my own life, then turned it into an entrepreneurial challenge to build a real product, using Flutter, Firebase, Codex, and AI-assisted coding while I drove the product logic, orchestration, and data model.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 68,
      "usability": 85
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL leading to an App Store page, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat vague description that lacks structured detail. The project is useful for meal planning but lacks distinct creative elements beyond standard app functionalities."
  },
  {
    "id": "3030940",
    "name": "Cajal Health",
    "oneLineDescription": "Cajal Health",
    "fullDescription": "AI appeals for denied insurance claims.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 78,
      "creativity": 80,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for Cajal Health is usefulness, as it addresses a real problem for healthcare clinics by automating insurance claim follow-ups. However, clarity is the weakest dimension due to the absence of a one-line summary and a structured description, making it harder to quickly understand the project's scope. The live URL returns a 200 status with a matching title, indicating a solid execution, but the login wall limits usability."
  },
  {
    "id": "3030916",
    "name": "Pivot — Financial Containment Workspace (FCOS)",
    "oneLineDescription": "Pivot — Financial Containment Workspace (FCOS)",
    "fullDescription": "Pivot is a browser-based financial containment workspace built on the Financial Containment Operating System (FCOS), a stabilization-first workflow for households in transition, recovery, or early structure-building phases. Instead of budgeting dashboards or payoff calculators, Pivot supports paycheck sequencing, income visibility, and credit continuity through connected monthly containment tools. https://github.com/roseandrevenuedesigns-source/pivot.git",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 68,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a functional deployment. However, the clarity is the weakest due to the absence of a one-line summary and a somewhat jargon-heavy description, making it difficult to quickly grasp the project's purpose. The usability is limited by a low app keyword count, suggesting a less developed interface."
  },
  {
    "id": "3030875",
    "name": "Flashcardy.com",
    "oneLineDescription": "Flashcardy.com",
    "fullDescription": "Web3 tokenized language learning app.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 72,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and matching the project title, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a vague description that fails to explain the app's functionality or target users. The lack of UI keywords suggests limited usability, as users may struggle to understand or interact with the app effectively."
  },
  {
    "id": "3030803",
    "name": "Learnova – AI-Powered Personalized Learning Assistant",
    "oneLineDescription": "Learnova – AI-Powered Personalized Learning Assistant",
    "fullDescription": "Learnova is an AI-powered learning companion that turns documents, text, and questions into interactive study experiences with summaries, quizzes, flashcards, and real-time Q&A. I built it to make learning faster, smarter, and more engaging. Powered by LLMs and a scalable full-stack architecture, it delivers personalized, on-demand learning for students and professionals.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 70,
      "usability": 68
    },
    "judgesNote": "The strongest dimension for Learnova is execution, as the live URL returns a 200 status with structured metadata, indicating a shippable product. However, the weakest dimension is clarity due to the absence of a one-line summary and a somewhat vague project description, which makes it difficult to quickly grasp the project's full scope. Usability is limited by the lack of visible UI keywords, suggesting a less user-friendly interface."
  },
  {
    "id": "3030798",
    "name": "Travis, Interavtive pill counting machine for hospitals and clinics",
    "oneLineDescription": "Travis, Interavtive pill counting machine for hospitals and clinics",
    "fullDescription": "Overview Medication counting is a routine task in hospitals, pharmacies, and clinics. Manual counting can be slow and prone to human error, especially when counting large quantities of pills. To address this challenge, I built Travis. I built Travis using Python's OpenCv, pyttsx3, and speech-recognition modules. Although I never used AI to built Travis. I am excited to share my project with you. And if you need More information, I am very willing to talk about my experience with building Travis.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 60,
      "creativity": 78,
      "clarity": 68,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its usefulness, as it addresses a real problem in hospitals and clinics by automating pill counting, which can reduce human error. However, the execution is weak due to the lack of a live, accessible demo; the GitHub repository is not a substitute for a working application. Clarity is also a concern, as the description lacks a concise one-liner and is somewhat disorganized, making it difficult to quickly grasp the project's scope."
  },
  {
    "id": "3030789",
    "name": "Pulse: Neural Stream DJ",
    "oneLineDescription": "Pulse: Neural Stream DJ",
    "fullDescription": "Pulse:Stream DJ is an AI pipeline that dynamically scores livestreams in realTime. I built it because gamers can't type music prompts while playing, leaving broadcasts with static, boring playlists. Pulse solves this by fusing live Twitch chat sentiment with the streamer's microphone audio (RMS). Using Python, Gemini 3 Flash, instantly prompting Google's Lyria 3 to generate and crossfade seamless 30-second tracks. https://drive.google.com/file/d/1WkJzE78SFP6dYPKB4MDFZhfA-gV-MCO2/view?usp=sharing",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 75,
      "creativity": 90,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The project's strongest dimension is creativity, with a novel approach to generating dynamic music for live streams by analyzing Twitch chat and audio inputs. However, the weakest dimension is clarity, as the absence of a one-line summary and a somewhat dense description make it harder to quickly grasp the project's core functionality. The execution is limited by the lack of a live demo URL, and the GitHub page indicates a login wall, which also affects usability."
  },
  {
    "id": "3030787",
    "name": "Elementy",
    "oneLineDescription": "Elementy",
    "fullDescription": "Build and save UI components instantly with AI",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 72,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and a matching page title, indicating a functioning site. However, the lack of structured metadata and minimal page content suggest limited polish. Clarity is the weakest dimension, as the absence of a one-line summary and a vague description make it difficult to understand the project's purpose and functionality quickly."
  },
  {
    "id": "3030756",
    "name": "edurag",
    "oneLineDescription": "edurag",
    "fullDescription": "EduRAG is an agentic university knowledge base that gives students instant, cited answers from real institutional documents — by voice or text. The agent autonomously searches a MongoDB vector store, reranks results with Voyage AI, and synthesizes grounded responses. Admins crawl university URLs to keep the knowledge base fresh. Powered by Next.js, Deepgram, Tavily, and the Vercel AI SDK.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 60,
      "creativity": 82,
      "clarity": 70,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its usefulness, as it targets university students with a practical solution for accessing institutional knowledge. However, the execution is weak due to the lack of a working live URL, which limits the ability to evaluate its current state and usability. The creativity score is supported by the novel use of voice and text interfaces, but the clarity suffers from the absence of a concise one-line summary and a somewhat dense description."
  },
  {
    "id": "3030752",
    "name": "StudyHub",
    "oneLineDescription": "StudyHub",
    "fullDescription": "StudyHub is a collaborative study platform where college students share study materials by course, fork and improve each other's work, and collaborate through real-time messaging and study groups. Built with Claude AI assisting in development. The stack includes React 19, Node.js, Express 5, PostgreSQL, and Socket.io across 21 backend modules and 30+ pages. Features include version-controlled study sheets, content moderation, course personalization, and a full fork-and-contribute workflow.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 82
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat dense description that could be more structured. The project is useful for college students, offering a collaborative platform with unique features like version-controlled study sheets."
  },
  {
    "id": "3030746",
    "name": "Resumlify - AI Career Platform for Job Application",
    "oneLineDescription": "Resumlify - AI Career Platform for Job Application",
    "fullDescription": "I’m building an AI-powered platform that helps job seekers apply faster and smarter. Users create a profile once, and we tailor resumes and cover letters to each job instantly. Our Chrome extension works directly on job sites to analyze roles and autofill applications. What used to take 20 minutes now takes under 2.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 75,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a matching title and comprehensive meta description, indicating a well-developed platform. However, clarity is the weakest as the project lacks a concise one-line summary, making it harder to quickly grasp the core offering. Usability is limited by the login wall, which prevents full access to the platform without registration."
  },
  {
    "id": "3030739",
    "name": "FrontierMap: An AI-Powered Research Exploration Tool",
    "oneLineDescription": "FrontierMap: An AI-Powered Research Exploration Tool",
    "fullDescription": "FrontierMap is an AI-powered, interactive research mapping tool for exploring how papers relate to one another. Starting from a single paper, it builds a navigable citation constellation that helps users trace connections, inspect related work, and visually organize the structure of a field instead of getting lost in endless reference lists. I built it with React, FastAPI, the OpenAlex API, Supabase, and Stripe, and developed it iteratively with Codex.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 82,
      "creativity": 90,
      "clarity": 75,
      "usability": 70
    },
    "judgesNote": "FrontierMap stands out for its creativity, offering a novel approach to visualizing research papers and their connections, which is a fresh take on academic exploration tools. The strongest dimension is creativity due to its unique citation constellation feature. However, clarity is the weakest dimension as the description lacks a one-line summary and structured metadata, making it harder to quickly grasp the project's scope. The live URL is functional, but the lack of UI keywords and minimal content length suggest limited usability and execution polish."
  },
  {
    "id": "3030716",
    "name": "Newton",
    "oneLineDescription": "Newton",
    "fullDescription": "Newton is an AI-powered learning platform that adapts to how students actually learn. Built with React, TypeScript, and Firebase, it uses an agentic architecture with specialized sub-agents for research, flashcard generation, quizzes, and explain-back exercises. Newton was built to make personalized tutoring accessible to everyone.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 82,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "The strongest aspect of Newton is its usefulness, as it targets students with a clear focus on personalized learning, which is a significant and practical problem. Execution is also strong, with a live URL returning a 200 status and matching the project title, although the lack of UI keywords suggests limited visible functionality. Clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that doesn't immediately convey the project's unique features."
  },
  {
    "id": "3030669",
    "name": "WizMac",
    "oneLineDescription": "WizMac",
    "fullDescription": "it's a CLI written in GO, it allows your AI agents to click, scroll anywhere on your mac. reverse engineered an app that allows users to control their macs with their keyboards, to make the click and scroll components to work more reliably. You can use this with your Codex, Claude Code, OpenClaw or any other agents",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 75,
      "creativity": 72,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for WizMac is execution, as the GitHub page is live and well-structured, indicating a functional project. However, the weakest dimension is clarity due to the absence of a one-line summary and a vague description that lacks structured explanation. Usability is also limited by the likely login wall and error page, which restricts access to the tool's functionality."
  },
  {
    "id": "3030653",
    "name": "VisionPad",
    "oneLineDescription": "VisionPad",
    "fullDescription": "It's an iOS app that gives a Vision Pro like experience on the iPad, where users can control their iPads without touching the screen. The app uses Eye and Hand Tracking to drive the cursor on the screen, simulate the click behaviour, it also has a street fighter like game where it tracks the users body for punch, block and kick input into the game on the screen",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 90,
      "clarity": 65,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for VisionPad is creativity, as it introduces a novel way to interact with an iPad using eye and hand tracking, which is not commonly seen. Execution is also strong, with a live TestFlight link indicating a shippable product. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat scattered description, making it harder to quickly grasp the project's full scope."
  },
  {
    "id": "3030593",
    "name": "Startup Screener",
    "oneLineDescription": "Startup Screener",
    "fullDescription": "As a Business Management major with a concentration in Entrepreneurship at Howard University, I know how scary it can be having a business idea but not knowing if it's actually feasible. That is why I built Startup Screener, a website where you can upload your pitch deck and get your idea ranked based on important metrics like SWOT, Market research, defensibility, traction, and business model. It even gives you recommendations to improve your pitch. Used: Claude, Codex and Netlify.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 78
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL that returns a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs, making it harder to quickly grasp the project's full scope. The usability score is limited by the low app keyword count, suggesting a less developed interface."
  },
  {
    "id": "3030565",
    "name": "FeedPilot - AI Newsletter Creation Tool",
    "oneLineDescription": "FeedPilot - AI Newsletter Creation Tool",
    "fullDescription": "FeedPilot AI is a project I built to make it easier for people and businesses to turn information overload into something useful. I created it because there is so much content online, and most people do not have the time to sort through articles, updates, and trends on their own. My goal was to build a tool that could help users quickly discover, organize, and understand the content that matters most to them.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 72,
      "clarity": 68,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title and structured metadata, indicating a shippable product. Clarity is the weakest dimension, as the absence of a one-line summary and a somewhat vague description make it difficult to quickly grasp the project's specifics. The project could benefit from more detailed user interface elements to enhance usability."
  },
  {
    "id": "3030559",
    "name": "ULTOR",
    "oneLineDescription": "ULTOR",
    "fullDescription": "Real-time geospatial intelligence on a photorealistic 3D globe. Satellites, ships, aircraft, seismic events, and more, unified in a single desktop interface.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 75,
      "creativity": 90,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest aspect of ULTOR is its creativity, offering a novel integration of real-time geospatial data on a photorealistic 3D globe with unique modes like CRT and FLIR. However, the weakest dimension is clarity, as the absence of a one-line summary and a structured description makes it challenging to quickly grasp the project's scope and purpose. The execution is limited by the lack of a direct live demo and the presence of a login wall, capping usability at 65."
  },
  {
    "id": "3030530",
    "name": "Internet Graffiti Wall",
    "oneLineDescription": "Internet Graffiti Wall",
    "fullDescription": "https://github.com/Azteriisk/spacetimedb-shared-canvas Built to be a test of SpacetimeDB and utilized codex for parts of the project. I especially love using AI for my readme's.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 60,
      "creativity": 68,
      "clarity": 50,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for this project is creativity, as it attempts to explore a novel concept with SpacetimeDB and AI integration. However, the weakest dimension is clarity; the project lacks a one-line summary and a coherent description, making it difficult to understand the purpose and functionality quickly. The artifact review shows a live URL with no matching title or structured metadata, limiting execution and usability scores."
  },
  {
    "id": "3030511",
    "name": "Farmtek-AI",
    "oneLineDescription": "Farmtek-AI",
    "fullDescription": "FarmTek-AI is a full-stack agricultural intelligence platform built for Kenyan farmers. It delivers real-time market prices across 47 counties; AI-powered crop and livestock disease scanning using GPT-4o Vision; weather forecasts; M-Pesa payment integration; a marketplace with seller verification; price alerts via SMS; a logistics booking system; satellite soil analysis; and a Vertical Integration Hub to help farmers cut out middlemen and increase profits.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 92,
      "execution": 86,
      "creativity": 90,
      "clarity": 75,
      "usability": 78
    },
    "judgesNote": "Farmtek-AI excels in usefulness, targeting Kenyan farmers with a comprehensive suite of tools including market prices, disease scanning, and payment integration. The execution is strong with a live site and structured metadata, though the content is somewhat sparse. Clarity is the weakest dimension due to the absence of a one-line summary and a less detailed description, which could hinder quick understanding."
  },
  {
    "id": "3030509",
    "name": "Suonni - Small Business Meets Early Talent",
    "oneLineDescription": "Suonni - Small Business Meets Early Talent",
    "fullDescription": "I built this website to track potential clients and creators prior to launching my startup. Suonni was built to bridge the gap between small businesses with limited financial resources and students looking to get their foot in the door of social media marketing.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 55,
      "creativity": 70,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it aims to connect small businesses with students for social media marketing, which is a novel approach to solving a real-world problem. However, the weakest dimension is execution, as there is no working live URL, which significantly impacts both execution and usability scores. The lack of a one-line summary and a more structured description also affects clarity."
  },
  {
    "id": "3030489",
    "name": "BookNafasi",
    "oneLineDescription": "BookNafasi",
    "fullDescription": "BookNafasi is an AI-powered Auto-Repair booking platform built for shop owners. It answers calls 24/7, books appointments by voice, sends SMS reminders to cut no-shows, and follows up with review requests — all automatically. Shop owners get a full dashboard with appointments, call logs, customer tracking, analytics, and promotions. Built with React, Node.js, PostgreSQL, Twilio, and SendGrid. Free plan available; Pro at $129/month.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 82,
      "clarity": 75,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for BookNafasi is usefulness, as it targets a clear user group (auto-repair shop owners) with practical features like 24/7 booking and SMS reminders. Execution is also strong, with a live site returning a 200 status and structured metadata, though the page content is slightly below the ideal length for full detail. Clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that could be more structured."
  },
  {
    "id": "3030480",
    "name": "ClubSport",
    "oneLineDescription": "ClubSport",
    "fullDescription": "ClubSport offers end-to-end digital management tools for specialized vehicles. From ownership tools, expense tracking & analytics as well as templatized co-ownership agreements for enthusiasts who'd like to co-own truly special vehicles. Powered by Rhodes AI, our agent is your personal garage/fleet manager accessible through the app or SMS.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat dense description, which could hinder quick understanding. The project is useful for vehicle enthusiasts, but the app keyword count suggests the interface might not be fully fleshed out."
  },
  {
    "id": "3030467",
    "name": "Ivy League Sentiment and Reporting Bias on RateMyProfessors",
    "oneLineDescription": "Ivy League Sentiment and Reporting Bias on RateMyProfessors",
    "fullDescription": "An interactive web analysis of professor reviews across the Ivy League using RateMyProfessors data and transformer-based sentiment modeling. The project compares school- and department-level sentiment, measures reporting bias driven by uneven review coverage, and presents the results through interactive visualizations, downloadable datasets, and school-specific detail views.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 85,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a substantial page content length, indicating a functional and detailed web application. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is somewhat dense, making it harder to quickly grasp the project's purpose and functionality."
  },
  {
    "id": "3030411",
    "name": "AgriXel | Protect Your Crops With AI Precision",
    "oneLineDescription": "AgriXel | Protect Your Crops With AI Precision",
    "fullDescription": "Upload a photo of your plant. Get instant disease diagnosis and organic treatment plans in your language. Built for farmers who need answers, not algorithms. 97.4% Model Accuracy 41+ Disease Classes 7 Languages Supported How It Works From photo to treatment plan in seconds 📷 Take a Photo : Point your camera at a sick leaf or fruit. 🔬 AI Analyses : Our model trained on 70,000+ plant images identifies the disease instantly. 🌿Get Treatment & 📈Track Progress",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 68,
      "creativity": 85,
      "clarity": 70,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for AgriXel is its usefulness, as it targets farmers with a practical solution for diagnosing plant diseases and provides treatment plans in multiple languages. However, the execution is weak due to the lack of structured metadata, minimal page content, and absence of UI keywords, indicating a non-functional or incomplete interface. Clarity is also lacking, as the description is missing a concise one-liner and structured explanation."
  },
  {
    "id": "3030369",
    "name": "NAAb",
    "oneLineDescription": "NAAb",
    "fullDescription": "Govern AI-generated code at the language level. NAAb is a polyglot programming language that applies code quality, security, and correctness policies at runtime — catching mistakes before they execute. A single govern.json controls what executes across 12 languages in one file.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 92,
      "creativity": 90,
      "clarity": 75,
      "usability": 85
    },
    "judgesNote": "The strongest dimension for NAAb is execution, with a live URL returning a 200 status and a matching page title, indicating a well-deployed project. Creativity is also high due to the novel approach of integrating multiple programming languages with AI governance. However, clarity is the weakest dimension, as the absence of a one-line summary and a somewhat dense description make it harder to quickly grasp the project's purpose."
  },
  {
    "id": "3030353",
    "name": "Lifecycle Carbon Modeling & Supply Chain Emissions Analytics",
    "oneLineDescription": "Lifecycle Carbon Modeling & Supply Chain Emissions Analytics",
    "fullDescription": "It is a Lifecycle Assessment (LCA) of carbon footprint of cars from 'cradle to grave' covering scope 1, 2, and 3 assessments. It can be useful for car manufacturers and consumers genuinely interested in reducing GHGs in the environment. Can be a tool for carbon emmission regulatory bodies to measure the carbon lifecycle of cars, do comparisons and determing the carbon breakeven point in the selected car's lifetime. I used codex all through",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 80,
      "clarity": 65,
      "usability": 55
    },
    "judgesNote": "The strongest dimension is creativity, as the project tackles lifecycle carbon modeling, a complex and relevant problem with potential impact on car manufacturers and regulatory bodies. However, the weakest dimension is execution, as there is no working live artifact, which severely limits the ability to assess the project's current state and usability. The lack of a one-line summary and a clear, structured description also impacts clarity."
  },
  {
    "id": "3030320",
    "name": "Libane - Run ML graphs directly on the Apple Neural Engine",
    "oneLineDescription": "Libane - Run ML graphs directly on the Apple Neural Engine",
    "fullDescription": "libane is an open-source runtime/compiler interface for the Apple Neural Engine (ANE). I built it to make ANE programming practical from Python and C++ without relying on opaque tooling. It provides a Graph IR, automatic op fusion, and a stable C ABI. I used Codex to iterate on API design, examples, docs, and release messaging, then validated behavior and performance with targeted experiments.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 75,
      "creativity": 85,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "The project's strongest dimension is creativity, as it offers a novel approach to interfacing with the Apple Neural Engine directly from Python and C++, which is not commonly addressed. However, clarity is the weakest dimension due to the absence of a one-line summary and a dense description that may be difficult to parse quickly. The artifact review shows a live GitHub page with structured metadata, but the login wall likely limits usability, and the execution is capped due to the lack of a standalone live product."
  },
  {
    "id": "3030303",
    "name": "AI-Powered NBA Betting Intelligence Dashboard",
    "oneLineDescription": "AI-Powered NBA Betting Intelligence Dashboard",
    "fullDescription": "Built an AI-powered NBA betting dashboard that analyzes live odds across moneylines, spreads, and totals to identify value bets. Calculates implied probabilities, edge, and confidence, while tracking line movement to spot inefficiencies before game time. Developed with Python, Streamlit, and real-time APIs, combining data engineering, modeling, and a user-facing analytics interface.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 82,
      "clarity": 70,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it combines AI with real-time sports betting analytics, offering a novel approach to identifying value bets. However, execution is the weakest dimension due to the absence of a working live URL, which significantly limits the ability to evaluate its current shippability and usability. The lack of a one-line summary and a failed artifact fetch further impact clarity and usability."
  },
  {
    "id": "3030300",
    "name": "Chicago Crash Risk Dashboard",
    "oneLineDescription": "Chicago Crash Risk Dashboard",
    "fullDescription": "An interactive dashboard visualizing crash risk patterns across Chicago using 300K+ traffic incident records. Built for an ML for Public Policy course at CMU, then extended independently with richer filters, map layers, and trend analysis. Built with Claude for architecture and logic, and Codex for rapid frontend iteration — the AI pair-programming workflow cut development time significantly while keeping the codebase clean and exploratory.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 82,
      "clarity": 70,
      "usability": 78
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets a concrete user base (public policy analysts) with a clear application in visualizing traffic incident data. Execution is also strong, evidenced by a live URL with a substantial page content length, though the lack of structured metadata and a mismatched title slightly detract from polish. Clarity is the weakest dimension due to the absence of a one-line summary and a somewhat unstructured description, which makes it harder to quickly grasp the project's scope and purpose."
  },
  {
    "id": "3030289",
    "name": "FlowBoard - Agile Sprint Tracker with Drag-and-Drop, Live Sync & Per-User Data Isolation",
    "oneLineDescription": "FlowBoard - Agile Sprint Tracker with Drag-and-Drop, Live Sync & Per-User Data Isolation",
    "fullDescription": "A responsive Kanban-style task manager built with React 19, TypeScript, and Supabase. Features real-time drag-and-drop task management, anonymous authentication with Row Level Security, optimistic UI updates with automatic rollback, and a full activity log system.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 80,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension for FlowBoard, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, the clarity is the weakest dimension due to the absence of a one-line summary and a sparse description that lacks structured metadata, making it harder to quickly grasp the project's purpose and features."
  },
  {
    "id": "3030281",
    "name": "Filibuster Band Landing Page",
    "oneLineDescription": "Filibuster Band Landing Page",
    "fullDescription": "Built a high-converting landing page for my band using Astro, Codex, and Superpower. After winning BYU’s Battle of the Bands, I wanted to turn momentum into growth—capturing fans, emails, and bookings. I used AI to generate copy, design components, and iterate quickly on UX. The result is a fast, clean site focused on lead generation, content distribution, and turning listeners into a loyal audience.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 72,
      "clarity": 65,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a detailed page and structured metadata, indicating a polished and shippable product. However, clarity is the weakest dimension as the project lacks a concise one-line summary and the description is somewhat vague about the specific features and user interactions beyond general lead generation."
  },
  {
    "id": "3030239",
    "name": "Diaspora link",
    "oneLineDescription": "Diaspora link",
    "fullDescription": "This is a mobile app that helps the immigrant communities integrate and settle down with ease abroad. Immigrants can get access to rides, housing, and jobs and meet people from their country all in one platform.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 82,
      "clarity": 70,
      "usability": 78
    },
    "judgesNote": "The strongest dimension for Diaspora Link is execution, with a live URL returning a 200 status and a matching page title, indicating a shippable product. Usefulness is also strong, as it targets a real problem for immigrant communities by providing access to essential services. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description, which makes it harder to quickly grasp the project's full scope."
  },
  {
    "id": "3030218",
    "name": "Scribe - AI-Powered Adventure",
    "oneLineDescription": "Scribe - AI-Powered Adventure",
    "fullDescription": "Uses Claude AI integration to generate choose-your-own-adventure stories. Ability to add stories to your library, save progress, and even create sequels and spinoffs of past stories. Generate your universe today!",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 85,
      "creativity": 78,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "The strongest aspect of this project is its execution, with a live URL that returns a 200 status and a matching page title, indicating a shippable product. However, the weakest dimension is clarity, as the absence of a one-line summary and a sparse description make it difficult to quickly understand the project's full scope and functionality. The project shows some creativity with its AI-powered storytelling, but lacks a unique angle to stand out significantly."
  },
  {
    "id": "3029530",
    "name": "Exchangr Campus – AI-powered Student Exchanger App",
    "oneLineDescription": "Exchangr Campus – AI-powered Student Exchanger App",
    "fullDescription": "Exchangr Campus is a platform for college students to get what they need by offering what they can do. College students exchange help instead of always using money, like tutoring for notes, rides for help studying, or everyday support on campus. I built it to solve a real problem where students need help but can’t always afford it, while others have skills or time to offer, turning that idea into a clear, simple experience that shows how students can connect, exchange, and help each other.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 75,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and matching the project title, indicating a shippable product. Usefulness is also strong, addressing a real need for college students to exchange services without money. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description, which could be more structured and concise."
  },
  {
    "id": "3029344",
    "name": "Moo Money — Your Finances, One Clear View",
    "oneLineDescription": "Moo Money — Your Finances, One Clear View",
    "fullDescription": "Moo Money is a collaborative personal finance platform designed for households to manage money together. It unifies banking, budgeting, investments, real estate insights, and advanced analytics in one place. Built to replace fragmented tools, it helps users track net worth, cash flow, and spending with clarity. Developed with React, FastAPI, and Supabase, it integrates Plaid and RentCast for real-time sync, transaction categorization, rules, and interactive dashboards.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 75,
      "usability": 80
    },
    "judgesNote": "Moo Money's strongest dimension is execution, with a live URL that returns a 200 status and a matching page title, indicating a shippable product. The project is useful for households managing finances collaboratively, supported by integration with Plaid and RentCast for real-time data. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that could be more structured for quick understanding. Usability is solid but not exceptional, as the interface presence is not strongly evidenced by keywords."
  },
  {
    "id": "3029316",
    "name": "Sage - AI Powered Product Manager",
    "oneLineDescription": "Sage - AI Powered Product Manager",
    "fullDescription": "An end-to-end agentic workflow that automates the full product management lifecycle — from raw problem statement to GTM plan — using the Anthropic Claude API, ElevenLabs voice, and persistent cross-session memory. Human-in-the-loop checkpoints at every stage. What makes Sage different: What she does? Input a product problem statement. Sage walks you through 7 PM stages from discovery to GTM converting any idea to a concrete actionable business plan!",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 82,
      "creativity": 85,
      "clarity": 65,
      "usability": 70
    },
    "judgesNote": "The strongest dimension for this project is creativity, as it integrates multiple AI technologies to automate the product management lifecycle, offering a novel approach to business planning. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured detail. The live URL returns a 200 status, indicating a functional execution, but the low content length and minimal UI keywords suggest limited usability."
  },
  {
    "id": "3029315",
    "name": "fAIshion AI",
    "oneLineDescription": "fAIshion AI",
    "fullDescription": "fAIshion.AI is an AI-powered fashion platform that enables users to manage their personal wardrobe, browse trending items, and experience AI-driven outfit mixing and virtual try-on. Users can create personalized outfits from their own wardrobe or trending items, and make more confident fashion decisions without the hassle of physical try-ons. The project is built using NextJS 15, React 19, TailwindCSS v4, and Prisma ORM with PostgreSQL.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 85,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for fAIshion AI is execution, with a live URL returning a 200 status and a matching page title, indicating a well-deployed project. However, the weakest dimension is clarity, as the absence of a one-line summary and a somewhat vague description make it challenging to quickly grasp the project's full scope. The login wall limits usability, capping it at 65, as it prevents immediate user interaction with the platform."
  },
  {
    "id": "3029267",
    "name": "Pulseplan",
    "oneLineDescription": "Pulseplan",
    "fullDescription": "PulsePlan is a web app that helps users build and follow personalized workout programs. After signing in, users complete a short survey about their goals, experience level, health history, injuries, available equipment, and workout preferences. The app then generates a structured workout plan with exercises, sets, reps, rest times, and progression guidance. It also lets users log workouts, track actual weights and reps, manually adjust exercises, and update plans over time. The app is designed",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension for PulsePlan, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat fragmented description, making it harder to quickly grasp the project's scope. The login wall limits usability, as it prevents immediate user interaction without signing in."
  },
  {
    "id": "3029229",
    "name": "Flint",
    "oneLineDescription": "Flint",
    "fullDescription": "Flint is an LLM-powered workflow orchestration engine that converts natural language descriptions into executable DAGs and runs them in parallel. It compiles task graphs from unstructured input with built-in corruption detection, smart retry logic, and a React Flow dashboard for real-time execution monitoring.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, the clarity is weak due to the absence of a one-line summary and a lack of structured description, making it difficult to quickly grasp the project's purpose. The usability score is limited by the absence of visible UI keywords, suggesting a lack of a user interface."
  },
  {
    "id": "3029178",
    "name": "FMEA.ai",
    "oneLineDescription": "FMEA.ai",
    "fullDescription": "FMEA.ai generates complete Failure Mode and Effects Analysis reports in seconds using GPT-4o. Engineers describe any mechanical, electrical, or manufacturing system and instantly get a full FMEA table with severity, occurrence, and detection scores, RPN calculations, color-coded risk levels, a plotted risk matrix, and specific recommended actions. What normally takes hours of manual work takes 30 seconds. Built with OpenAI Codex.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for FMEA.ai is execution, with a live URL returning a 200 status and a matching page title, indicating a shippable product. Usefulness is also strong, targeting engineers with a clear problem-solving approach in FMEA generation. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that could be more structured for quick understanding."
  },
  {
    "id": "3029152",
    "name": "Reducing Files size by compressing",
    "oneLineDescription": "Reducing Files size by compressing",
    "fullDescription": "I was having a hard time finding tools that helps to reduce file size. Most of them were paid, so I thought let me build something by myself.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 85,
      "creativity": 65,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL returning a 200 status and a detailed page title and meta description indicating a functional service. However, the project lacks a clear one-line summary and structured description, which affects clarity. The usefulness is average due to the common nature of file compression tools, and creativity is limited as it does not introduce novel features or modalities."
  },
  {
    "id": "3029071",
    "name": "RufffAI",
    "oneLineDescription": "RufffAI",
    "fullDescription": "Free AI tool to create perfectly formatted and tailored resume and cover letter for job applications.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 70,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest aspect of this project is its usefulness, as it addresses a real need for job seekers by offering tools to create resumes and cover letters. However, the execution is limited by the lack of structured metadata and a page title that doesn't match the project description, indicating potential misalignment. Clarity is the weakest dimension due to the absence of a one-line summary and a vague description, making it difficult to quickly understand the project's purpose."
  },
  {
    "id": "3029053",
    "name": "LiftLogic – AI Fitness Planner & Workout Tracker",
    "oneLineDescription": "LiftLogic – AI Fitness Planner & Workout Tracker",
    "fullDescription": "I built an AI-powered fitness web app that generates personalized workout plans, calculates calories and macronutrients, and tracks training performance over time. The app uses rule based decision logic to simulate an adaptive coaching system. Based on user inputs like weight, height, activity level, and goal (cut, maintain, bulk), it dynamically computes calorie targets, protein ranges, fats, and carbohydrates. It also includes a full push/pull/legs workout tracker with persistent state using",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 60,
      "creativity": 75,
      "clarity": 68,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its usefulness, as it targets a clear user group (fitness enthusiasts) with practical features like personalized workout plans and nutrition tracking. However, the weakest dimension is execution due to the lack of a live, accessible web app; the GitHub repository does not provide a direct user interface, and the login wall limits usability. The description is somewhat clear but lacks a concise one-liner, which affects clarity."
  },
  {
    "id": "3029042",
    "name": "LEVELSCRIBE",
    "oneLineDescription": "LEVELSCRIBE",
    "fullDescription": "**Folio** is a personal life-tracking web app built for people actively levelling up — learning new skills, job hunting, managing money, and trying to stay balanced at the same time. It brings together a structured learning roadmap, a job application kanban board with a live feed of real new-grad listings, a daily diary, wellness and finance logs, and a full XP and badge reward system — all wrapped in a deliberately crafted book and diary aesthetic. Warm parchment backgrounds, Playfair Display h",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 82,
      "clarity": 65,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of LEVELSCRIBE is its creativity, as it combines multiple modalities like a learning roadmap, job application board, and wellness logs with a unique aesthetic. However, the execution is weak due to the absence of a working live URL, which significantly limits the ability to assess its functionality and usability. The lack of a one-line summary and incomplete description also hinder clarity."
  },
  {
    "id": "3028958",
    "name": "ANIFORGE",
    "oneLineDescription": "ANIFORGE",
    "fullDescription": "Create full anime series and manga from your imagination. AI generates scenes, voices, and art — you direct the story.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 40,
      "creativity": 78,
      "clarity": 50,
      "usability": 40
    },
    "judgesNote": "The project's strongest dimension is creativity, as it proposes a novel concept of generating anime and manga using AI, which is an interesting and unique application. However, the weakest dimension is execution, as there is no working live URL, resulting in a 404 error, which severely limits the project's viability and usability. The lack of a one-line summary and a clear description further impacts clarity."
  },
  {
    "id": "3028947",
    "name": "Portland's Internal Monologue (Won Portland Claude Hack)",
    "oneLineDescription": "Portland's Internal Monologue (Won Portland Claude Hack)",
    "fullDescription": "The project that won me the Portland Claude Hackathon. A blend between a useful event explorer and a typical stupid Hackathon project. Test it out and see the cherry blossoms in Portland along with many other fun things.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 72,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its execution, as it has a live URL that returns a 200 status with a matching title, indicating a functional deployment. However, the clarity is notably weak due to the absence of a one-line summary and a vague description that fails to clearly articulate the project's purpose or functionality. The lack of structured metadata and UI keywords also limits its usability and polish."
  },
  {
    "id": "3028930",
    "name": "Pine Journal - Your Personal Journal",
    "oneLineDescription": "Pine Journal - Your Personal Journal",
    "fullDescription": "Local-first Private Journaling Web App with optional cloud sync and AI-guided journaling experience. Built with Typescript, React, Tanstack Router, Vite, Pglite WASM, Drizzle ORM, WebLLM, Assistant-ui, Shadcn UI, and Tiptap. Demo: https://vimeo.com/1170200880?share=copy&fl=sv&fe=ci",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 82,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "The strongest dimension for Pine Journal is creativity, as it offers a local-first journaling app with optional cloud sync and AI-guided features, which is a novel approach in personal journaling. However, clarity is the weakest dimension due to the absence of a one-line summary and a sparse description that lacks structured paragraphs, making it difficult to quickly grasp the project's purpose. The live URL is functional, but the lack of structured metadata and UI keywords limits its execution and usability scores."
  },
  {
    "id": "3028919",
    "name": "Code Logic Blocks Visualizer",
    "oneLineDescription": "Code Logic Blocks Visualizer",
    "fullDescription": "AI-powered code logic visualizer. Paste any code, get an interactive flowchart. Runs locally on your machine. Uses \"Groq AI\" (completely free, no credit card).",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 78,
      "clarity": 55,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL that returns a 200 status with a matching page title, indicating a functional deployment. However, clarity is the weakest dimension as the description lacks a one-line summary and structured explanation, making it difficult to quickly understand the project's purpose and functionality. The project shows some creativity with its local-first approach but lacks detailed user framing, impacting usefulness."
  },
  {
    "id": "3028908",
    "name": "SnapRemind",
    "oneLineDescription": "SnapRemind",
    "fullDescription": "\"Vision-to-Calendar: Agentic AI for Passive Intent Capture\": A self-initiated exploration into autonomous AI systems that transform visual reminders into actionable calendar events. This project reimagines how we interact with productivity tools by eliminating explicit commands and leveraging vision-based intent extraction.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 85,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of SnapRemind is its creativity, as it explores a novel approach to productivity by using vision-based intent extraction to automate calendar entries. However, the clarity of the project is weak due to the absence of a one-line summary and a vague description that lacks detail on how the system functions. The execution is solid with a live URL returning a 200 status, but the lack of structured metadata and UI keywords suggests limited usability, capping it at 60."
  },
  {
    "id": "3028901",
    "name": "Kyros - Manage your fleet and not spreadsheets",
    "oneLineDescription": "Kyros - Manage your fleet and not spreadsheets",
    "fullDescription": "African logistics is a mess of informal networks, phone calls, and zero visibility. Possivel connects shippers with carriers across underserved routes using AI-assisted matching and real-time tracking. Built the full platform solo, from route optimization to carrier onboarding. Crossed $500K in revenue with no outside funding. Proved that the hardest logistics problems aren't in the US. Built with React, Python, and PostgreSQL.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 80,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it addresses a real logistics problem in Africa with a clear target user base of shippers and carriers. Execution is also strong, supported by a live URL with a 200 status and structured metadata, although the login wall limits usability. Clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that could be more structured."
  },
  {
    "id": "3028899",
    "name": "Stock AI",
    "oneLineDescription": "Stock AI",
    "fullDescription": "StockAI synthesizes five specialized autonomous agents ,Price Monitoring, Technical Analysis, Fundamental Analysis, Sentiment Analysis, and Predictive Modeling , into a unified decision support framework for equity trading.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 68,
      "usability": 72
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and a substantial page content length, indicating a potentially robust implementation. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is somewhat jargon-heavy, making it difficult to quickly grasp the project's purpose. The usability score is limited by the low app keyword count, suggesting a less developed user interface."
  },
  {
    "id": "3028897",
    "name": "Explainable CNN Perception for Autonomous Vehicles",
    "oneLineDescription": "Explainable CNN Perception for Autonomous Vehicles",
    "fullDescription": "This project investigates explainability techniques for convolutional neural networks in autonomous vehicle perception systems. By applying advanced visualization methods, we identify critical failure modes in safety-critical scenarios that could impact real-world deployment of ADAS technologies.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 60,
      "creativity": 82,
      "clarity": 68,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it tackles the novel problem of explainability in CNNs for autonomous vehicles, a critical and emerging area. However, the weakest dimension is usability, as the artifact review indicates an error page likely, and the app/UI keyword count is very low, suggesting a lack of a usable interface. Execution is also limited due to the error page signal, capping its potential impact."
  },
  {
    "id": "3028896",
    "name": "Penpal - Making Networking more human",
    "oneLineDescription": "Penpal - Making Networking more human",
    "fullDescription": "Built a physical card marketplace that connects people through handwritten mail. Designed the full stack from scratch, handled card fulfillment logistics, and grew to 1,000 cards sold with zero ad spend. Won Forbes' $10K startup competition. Simple idea, real execution: bring back something the internet killed. Built with React, Node.js, and a lot of trips to the post office.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 82,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, the usability is limited by a likely login wall, capping its score. Clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured detail."
  },
  {
    "id": "3028893",
    "name": "Matcha.ai: AI-Powered Job Matching Platform",
    "oneLineDescription": "Matcha.ai: AI-Powered Job Matching Platform",
    "fullDescription": "Job searching is broken. 300 applications to land one offer. 75% of candidates are filtered out by keyword matching before a human ever reads their resume. We built Matcha to fix that. Upload your resume once, get AI-matched to roles that actually fit your skills and trajectory, and apply with one swipe directly into the employer's ATS. Built with Claude, Codex, and Gemini across a Next.js, React Native, and PostgreSQL stack. on web, iOS, and Android.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension for Matcha.ai, with a live URL returning a 200 status and a detailed page content, indicating a well-developed platform. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that lacks immediate clarity. The project is useful and creative, addressing a real problem in job matching with AI, but the lack of visible UI keywords slightly impacts usability."
  },
  {
    "id": "3028889",
    "name": "SecureCart – Role-Based E-Commerce Platform",
    "oneLineDescription": "SecureCart – Role-Based E-Commerce Platform",
    "fullDescription": "SecureCart, a role-based e-commerce platform focused on enforcing access control across different user types (admin vs customer). Designed the backend using Node.js and Express with JWT-based authentication and RBAC middleware to protect routes and ensure only authorized actions were allowed. Defined REST APIs for core flows like product management, cart operations, and order handling, keeping the API layer structured and consistent. On the frontend, used React to build reusable components and",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 72,
      "creativity": 70,
      "clarity": 60,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for SecureCart is execution, as there is a live URL returning a 200 status, indicating a functional deployment. However, the page title does not match the project name, and there is no structured metadata, which detracts from polish. The weakest dimension is clarity, due to the absence of a one-line summary and an incomplete description, making it difficult to quickly grasp the project's purpose and functionality."
  },
  {
    "id": "3028878",
    "name": "Smart Classroom Helper for Early Childhood Teachers",
    "oneLineDescription": "Smart Classroom Helper for Early Childhood Teachers",
    "fullDescription": "Smart Classroom Helper for Early Childhood Teachers is a beginner-friendly web application designed to support teachers in managing daily classroom activities efficiently. The app allows educators to enter student names, track attendance (present or absent), and record behavior notes for each student. The application also generates structured daily classroom reports using AI-style language, helping teachers quickly create clear and professional",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 75,
      "clarity": 70,
      "usability": 68
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, the clarity of the project is weaker due to the absence of a one-line summary and a somewhat fragmented description. The usability score is limited by the lack of visible UI keywords, suggesting potential issues with user interaction or interface visibility."
  },
  {
    "id": "3028828",
    "name": "Smart Classroom Helper for Early Childhood Teachers",
    "oneLineDescription": "Smart Classroom Helper for Early Childhood Teachers",
    "fullDescription": "“Hello, my name is Tahera Khanum from SUNY Empire State University. My project, Smart Classroom Helper for Early Childhood Teachers, helps teachers track attendance, record behavior notes, and generate daily reports in a simple web app. I created it to make classroom documentation easier and more organized.”",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 68,
      "creativity": 72,
      "clarity": 70,
      "usability": 60
    },
    "judgesNote": "The strongest dimension is usefulness, as the project targets early childhood teachers with specific features like attendance tracking and behavior notes, addressing a real need. However, the weakest dimension is execution due to the lack of a live, usable web app; the GitHub repository requires login and does not directly demonstrate a working product. The clarity is also limited by the absence of a concise one-line summary and structured description."
  },
  {
    "id": "3028817",
    "name": "Xplore",
    "oneLineDescription": "Xplore",
    "fullDescription": "Xplore solves the two hardest parts of moving somewhere new — meeting people and doing it without the pressure of dating apps or social media. Tell Xplore your age, city, and interests and it finds local events like golf leagues, cooking classes, and trivia nights where like-minded people already show up. No public profile, no swiping, no awkwardness. Just show up, do what you love, and meet people naturally. Built with OpenAI Codex.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 82,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension for Xplore, with a live URL that returns a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs, making it harder to quickly grasp the project's full scope."
  },
  {
    "id": "3028795",
    "name": "AI Policy Briefing Assistant (Featured on AI Showcase on Handshake)",
    "oneLineDescription": "AI Policy Briefing Assistant (Featured on AI Showcase on Handshake)",
    "fullDescription": "The AI Policy Briefing Assistant is a Retrieval-Augmented Generation (RAG) application that enables users to analyze policy documents and generate summaries and briefings through a Streamlit interface. I built this project to solve the challenge of manually reviewing large volumes of policy and legal documents. The system improves efficiency by retrieving relevant document content and generating context-aware responses. Tech Stack: Python, Streamlit, OpenAI API, and Vector Store",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 70,
      "creativity": 82,
      "clarity": 68,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets a clear problem of analyzing policy documents, which is relevant for legal professionals and policymakers. However, the weakest dimension is clarity due to the absence of a one-line summary and a somewhat vague description. The execution is limited by the lack of a live demo URL, as the project is only available on GitHub, which impacts usability as well, given the likely login wall and minimal UI keywords."
  },
  {
    "id": "3028789",
    "name": "Juett Tech Rescue — Business Website & Brand Launch",
    "oneLineDescription": "Juett Tech Rescue — Business Website & Brand Launch",
    "fullDescription": "Built the full website and brand identity for Juett Tech Rescue, a student-run e-waste pickup and recycling service I founded at CU Boulder. With no prior web development experience, I used Claude (AI) to guide me step-by-step through the building process, then deployed the site using Netlify and registered a custom domain. I also used AI tools to design and finalize marketing materials including our launch poster. The result is a live, functioning business website actively used to attract custo",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 72,
      "clarity": 65,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and a substantial page content length, indicating a fully deployed site. However, clarity is the weakest dimension as the description is incomplete and lacks a one-line summary, making it difficult to quickly understand the project's scope and purpose. The project shows solid usability with a functioning website, but creativity is average as it primarily involves standard web development and branding tasks."
  },
  {
    "id": "3028761",
    "name": "Grant Guardian",
    "oneLineDescription": "Grant Guardian",
    "fullDescription": "Link: https://github.com/DipeshK47/GRANT_GUARDIAN Grant Guardian is a Notion-native AI system for the full nonprofit grant lifecycle. It helps small teams triage opportunities, score funder fit, map evidence to requirements, draft grounded proposals, and manage post-award reporting inside a structured Notion workspace. Instead of disconnected tools, it creates one continuous workflow from intake to compliance, preserving institutional knowledge teams can easily use every day.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 86,
      "creativity": 84,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest aspect of Grant Guardian is its usefulness, as it addresses a clear need for nonprofit teams managing the grant lifecycle, offering a comprehensive workflow solution. Execution is also strong with a live URL that returns a 200 status and matches the project title, although a login wall limits usability. The weakest dimension is clarity, as the absence of a one-line summary and a somewhat dense description make it harder to quickly grasp the project's scope and impact."
  },
  {
    "id": "3028736",
    "name": "Investment Research Platform",
    "oneLineDescription": "Investment Research Platform",
    "fullDescription": "Developing an investment research platform that aggregates investment signals, including SEC Form 4 filings enabling equity researchers to track insider buying/selling patterns across public companies. Built interactive dashboard featuring price charts, insider activity timelines, and key stock statistics. Used AI for programming assistance and rapid ideation + prototyping of features.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 82,
      "clarity": 70,
      "usability": 78
    },
    "judgesNote": "The strongest dimension is usefulness, as the platform addresses a clear need for equity researchers to track insider trading patterns, supported by real-time SEC Form 4 filings. Execution is also strong, with a live URL returning a 200 status and a relevant meta description, though the title does not match the project name. The weakest dimension is clarity, due to the absence of a one-line summary and a somewhat vague project description, which makes it harder to quickly grasp the project's scope and features."
  },
  {
    "id": "3028700",
    "name": "Fashion Moodboard AI",
    "oneLineDescription": "Fashion Moodboard AI",
    "fullDescription": "Fashion Moodboard AI is a full stack AI platform that turns user-uploaded outfit photos into curated style recommendations. I used AI-assisted development to redesign the product into a premium editorial experience, build protected user flows, and connect Google Cloud Vision, an OpenAI-compatible LLM, Firebase Auth, Firestore, Firebase Hosting, and Google Cloud Run. It strengthened my skills in AI integration, full stack architecture, and polished frontend design.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 75,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest aspect of this project is its execution, as evidenced by a live URL returning a 200 status with a matching page title, indicating a functional deployment. However, the weakest dimension is clarity, as the description lacks a concise one-liner and fails to clearly articulate the user problem being solved. Additionally, the absence of structured metadata and UI keywords suggests limited usability and polish."
  },
  {
    "id": "3028694",
    "name": "HomeBridge",
    "oneLineDescription": "HomeBridge",
    "fullDescription": "HomeBridge is a full-stack housing platform designed to make affordable housing easier to find, understand, and apply for. It brings listings, maps, reusable applications, waitlist tracking, nearby jobs, and housing resources into one place so renters do not have to jump between disconnected systems. I built it to address the affordable housing shortage in the United States by reducing friction for people searching for stable housing. The goal was to create a clearer, faster experience for rent",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 82,
      "creativity": 80,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "The strongest aspect of HomeBridge is its usefulness, addressing a real problem in affordable housing with a clear target user base. Execution is solid with a live URL and matching page title, but the page content is sparse, limiting its score. Clarity is the weakest dimension due to the absence of a one-line summary and a somewhat abrupt description, which makes it harder to quickly grasp the project's full scope."
  },
  {
    "id": "3028686",
    "name": "Jarvis AI Assistant – Voice & Task Automation Agent",
    "oneLineDescription": "Jarvis AI Assistant – Voice & Task Automation Agent",
    "fullDescription": "Built an AI-powered assistant using n8n, Python, and ElevenLabs to automate tasks via voice and chat. Jarvis manages emails, calendars, content creation, and workflows using LLM-based agents and tool integrations. Developed to explore agentic AI systems, RLHF concepts, and scalable automation.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 60,
      "creativity": 75,
      "clarity": 55,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it explores the integration of voice and task automation using AI, which is a novel approach. However, the clarity is weak due to the absence of a one-line summary and a vague description that lacks focus on specific user benefits. The execution and usability are significantly hindered by the login wall, which prevents access to the live artifact, capping usability at 55 and execution at 60."
  },
  {
    "id": "3028682",
    "name": "North Star",
    "oneLineDescription": "North Star",
    "fullDescription": "AI is an incredible tool when it augments human thinking. The problem is when it replaces it. I built North Star out of a growing concern I couldn't shake: AI can be confidently, seriously wrong, and most people don't push back. Not because they're careless, but because the confidence of the response short-circuits the instinct to question it. That is Automation Bias, and it is happening across every industry right now with very little being done to measure it.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 85,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching title and structured metadata, indicating a well-deployed project. However, clarity is the weakest dimension as the description lacks a concise summary and clear explanation of what the project does, making it difficult to understand the project's purpose quickly. The absence of UI keywords suggests limited usability, as users may struggle to interact with the platform effectively."
  },
  {
    "id": "3028630",
    "name": "Campus AI Builder",
    "oneLineDescription": "Campus AI Builder",
    "fullDescription": "Campus Smart Scheduler is a full-stack web application designed to help college students build and manage their weekly class schedules more effectively. Students can add courses with details including course name, meeting days, start and end times, location, and priority level. The application automatically detects scheduling conflicts when two or more courses overlap on the same day and time, and warns the user immediately. Beyond conflict detection, the sys",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 70,
      "clarity": 68,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for Campus AI Builder is usefulness, as it targets a clear user group (college students) with a practical solution for managing class schedules. However, the execution is weak due to the lack of a working live URL, which significantly impacts usability as well. The description is incomplete and lacks a one-line summary, which affects clarity and makes it difficult to fully understand the project's scope and features."
  },
  {
    "id": "3028607",
    "name": "NeuroSymphony - Harmonize Your Senses",
    "oneLineDescription": "NeuroSymphony - Harmonize Your Senses",
    "fullDescription": "NeuroSymphony synchronizes music, light, and tactile stimulation that biomimics the nervous system to help regulate overexcitabilities. The NeuroSymphony Box is a chamber that eventually will connect to the software, NeuroSymphony Studio. The NeuroSymphony Studio shows in real-time how music translates into harmonic frequencies so that one may not just hear music but also see and feel the resonant frequencies.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 85,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "The strongest aspect of NeuroSymphony is its creativity, as it attempts to integrate music, light, and tactile stimulation in a novel way. However, the clarity of the project is weak due to the absence of a one-line summary and a somewhat vague description that lacks concrete details about user interaction. Execution is solid with a live URL returning a 200 status, but usability is limited by a low app keyword count, suggesting a minimal interface."
  },
  {
    "id": "3028548",
    "name": "Dynamic Media Portfolio with AI-Driven Content Integration",
    "oneLineDescription": "Dynamic Media Portfolio with AI-Driven Content Integration",
    "fullDescription": "I’m a photographer and photojournalist who outgrew platforms like WordPress and Squarespace, so I began building custom site components myself to better reflect my work. Using AI tools like Codex, I worked through complex problems like creating a dynamic podcast widget using an RSS parser with embedded audio and platform links. I later applied this system to my concert photography pages, letting visitors hear artists’ latest music alongside my work.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 85,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with structured metadata and a substantial content length, indicating a well-developed site. However, clarity is the weakest dimension as the description lacks a concise one-line summary and is somewhat disorganized, making it difficult to quickly grasp the project's scope and purpose."
  },
  {
    "id": "3028485",
    "name": "Solving financial problems through financial portfolios - Life, Health and Annuity Insurances.",
    "oneLineDescription": "Solving financial problems through financial portfolios - Life, Health and Annuity Insurances.",
    "fullDescription": "Agape Business Services, LLC is an Insurance Agency with respect to Life, Health and Annuity Insurances that is legal with the NY State and Federal Governments. The goal and purpose for my business is to meet the financial needs for family that are uninsured and underinsured in every aspect of life. Also, the company educates on financial literacy by explaining the Financial Principle, 'Make money and don't lose money.' It was built by me being licensed and created a website to advertise.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 72,
      "execution": 70,
      "creativity": 65,
      "clarity": 60,
      "usability": 62
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it addresses a real need for financial literacy and insurance services for underinsured families. However, the weakest dimension is clarity, as the description lacks a concise one-line summary and structured explanation of the project's offerings. The artifact review indicates a live site with a high content length, but the lack of structured metadata and low app keyword count suggest limited execution and usability."
  },
  {
    "id": "3028472",
    "name": "SysRelay",
    "oneLineDescription": "SysRelay",
    "fullDescription": "SysRelay is the secure network for AI agent coordination across organizations, and the core network is permanently free. Register an address, exchange end-to-end encrypted messages, and run multi-agent workflows across organizations — without managing infrastructure. It works directly over REST, supports scoped route recommendations, and ships with an MCP server adapter for agent stacks that prefer MCP.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 90,
      "creativity": 82,
      "clarity": 75,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension for SysRelay, with a live URL that returns a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest dimension due to the absence of a one-line summary and the somewhat dense description, which may hinder quick understanding. The project shows solid usefulness and creativity by addressing AI agent coordination across organizations with a unique approach."
  },
  {
    "id": "3028434",
    "name": "Laundry Management System Web App",
    "oneLineDescription": "Laundry Management System Web App",
    "fullDescription": "A full-stack Laundry Management System developed using modern web technologies. This application helps streamline laundry service operations by allowing users to manage orders, track laundry status, and organize customer details efficiently. The platform provides an intuitive interface for handling day-to-day laundry tasks, improving workflow and reducing manual effort. It demonstrates skills in web development, UI/UX design, and real-world problem solving. Key features include order tracking,",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 72,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a functional deployment. However, clarity is the weakest due to the absence of a one-line summary and a sparse description that lacks detail on specific features and user interactions. The lack of structured metadata and low content length also suggest limited polish and usability."
  },
  {
    "id": "3028414",
    "name": "CapitalForge",
    "oneLineDescription": "CapitalForge",
    "fullDescription": "CapitalForge is an AI-powered, gamified financial education platform designed to turn knowledge into action. Users build real-world skills in investing, credit, and money management through personalized learning paths, interactive challenges, and a risk-free portfolio simulator. By combining behavioral insights with real-time feedback, CapitalForge helps students develop lasting financial habits and confidence before risking real money.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 82,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for CapitalForge is its usefulness, as it targets a clear user group (students) with a practical application in financial education. Execution is also strong, with a live URL returning a 200 status and matching title, though the login wall limits usability. Clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description, which could be more structured for quick comprehension."
  },
  {
    "id": "3028314",
    "name": "Photoweb",
    "oneLineDescription": "Photoweb",
    "fullDescription": "The ProtosWeb project is a modern web application built to demonstrate how fast, responsive, and scalable apps are developed and deployed. It was created to gain practical experience in frontend development, UI design, and cloud deployment. Using tools like React/Next.js and Vercel, the app focuses on simplicity, performance, and accessibility, showing how developers can build and launch efficient applications with minimal infrastructure management.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 78,
      "creativity": 65,
      "clarity": 60,
      "usability": 60
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and the presence of structured metadata, indicating a polished deployment. However, the weakest dimension is usefulness, as the project lacks a clear target user or problem statement, and the page content does not align with the project's description. The clarity is also weak, with no one-line summary and a mismatch between the project description and the live artifact."
  },
  {
    "id": "3028311",
    "name": "Learning Log",
    "oneLineDescription": "Learning Log",
    "fullDescription": "Learning Log is a web app that helps users record and track their learning activities, topics, and progress over time. It was built to promote consistency, reflection, and structured personal growth. The project was developed using Python and Django, implementing models, views, and templates to manage entries and user interaction efficiently.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 75,
      "creativity": 68,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it addresses a clear need for users to track and reflect on their learning activities. However, the weakest dimension is clarity, due to the absence of a one-line summary and a somewhat vague description that lacks detail on specific features. The execution is limited by the lack of a live, interactive URL, as the project is only available on GitHub, which also impacts usability since a login wall is likely."
  },
  {
    "id": "3028205",
    "name": "ACT Math Sprint",
    "oneLineDescription": "ACT Math Sprint",
    "fullDescription": "A free ACT prep tool that gives students a diagnostic, an estimated score, and a personalized study path. Teachers can grade bubble sheets by photo. Solo project, built with React, TypeScript, and Firestore. actmathsprint.com",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 92,
      "creativity": 80,
      "clarity": 75,
      "usability": 85
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and matching metadata, indicating a shippable product. Usefulness is also strong, targeting students and teachers with a clear educational purpose. Clarity is the weakest due to the absence of a one-line summary and a somewhat sparse description, which could hinder quick understanding."
  },
  {
    "id": "3028196",
    "name": "Performance Fitness Tracking",
    "oneLineDescription": "Performance Fitness Tracking",
    "fullDescription": "I built an app allowing people to track their workouts in the gym, view their progress over time, and view and add pre made training programs to their calendar to use. I currently use it with my clients to prescribe fitness programs and have about 50 people signed up testing it for me!",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 68,
      "clarity": 60,
      "usability": 60
    },
    "judgesNote": "The strongest dimension is usefulness, as the app addresses a real need for fitness tracking and program management, with evidence of 50 users testing it. However, clarity is the weakest dimension due to the absence of a one-line summary and a vague description that lacks structured detail. The artifact review indicates a login wall, limiting usability and execution scores, as the interface is not directly observable."
  },
  {
    "id": "3028142",
    "name": "Nemilia AI Workspace",
    "oneLineDescription": "Nemilia AI Workspace",
    "fullDescription": "I built Nemilia AI Workspace as the 'AI OS for the Browser.' I wanted the heavy-lifting power of multi-agent frameworks like LangChain, but with zero backend bloat or SaaS lock-in. So, I engineered a 100% client-side engine into a single HTML file. It empowers you to build custom AI agents and orchestrate complex workflows using local or cloud LLMs. Paired with its Chrome extension for instant web data capture, it’s a completely portable, private, and secure AI production environment",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 92,
      "creativity": 90,
      "clarity": 75,
      "usability": 90
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a detailed page indicating a functional product. The project is also creative, offering a novel client-side AI framework without backend dependencies. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that could be more structured for quick understanding."
  },
  {
    "id": "3028122",
    "name": "LaneShift — AI Creator Intelligence Platform",
    "oneLineDescription": "LaneShift — AI Creator Intelligence Platform",
    "fullDescription": "LaneShift is an AI-powered creator intelligence platform that helps creators identify their niche, understand audience positioning, and discover strategic pivots for growth. It adapts recommendations based on the selected platform’s algorithm, generating tailored content ideas, performance predictions, and platform-aware strategy insights. I built it to solve a real creator problem: knowing what direction to take next.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 72,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title, indicating a functional deployment. However, the clarity is the weakest dimension as the project lacks a one-line summary and the description is somewhat vague, making it harder to quickly grasp the project's purpose and functionality. The usability score is limited by the low app keyword count, suggesting a less developed interface."
  },
  {
    "id": "3028080",
    "name": "BillPilot AI",
    "oneLineDescription": "BillPilot AI",
    "fullDescription": "Medical bills are opaque, error-prone, and hard to challenge. BillPilot AI helps on both sides of the journey: before care, it benchmarks treatment costs by condition and ZIP across settings and insurance plans using CMS Medicare anchors; after billing, it parses itemized charges, flags duplicates and benchmark variances, and generates dispute-ready letters for providers and insurers. Built end-to-end with Codex using Next.js, TypeScript, and Claude-powered local market context.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 60,
      "creativity": 85,
      "clarity": 75,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of BillPilot AI is its usefulness, as it addresses a real problem in healthcare billing for both patients and providers. However, execution is weak due to the artifact review indicating an error page despite a successful HTTP 200 response, which limits the project's usability as well. The creativity score is bolstered by the novel approach of benchmarking treatment costs and generating dispute-ready letters, but clarity suffers from the lack of a one-line summary and a somewhat dense description."
  },
  {
    "id": "3028076",
    "name": "SimzStyle",
    "oneLineDescription": "SimzStyle",
    "fullDescription": "SimzStyle is now your smart - outfit assistant that depicts the perfect look for you based on your closet, destination, weather and even current trends. It'll help you with everything from your socks to your hat, making a fashion statement has never been easier!",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension for SimzStyle, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description, which makes it harder to quickly grasp the project's scope and functionality."
  },
  {
    "id": "3028062",
    "name": "Raiz",
    "oneLineDescription": "Raiz",
    "fullDescription": "Raíz (\"root\" in Spanish) is a full-stack wellness app that analyzes ingredient labels from packaged foods, supplements, and beverages to flag harmful toxins like heavy metals, pesticides, food dyes, and synthetic additives — then recommends whole-food, herbal, and plant-based alternatives. I built it as a herbalist and Data Science student because decoding ingredient lists shouldn't require a science degree. Built with FastAPI, Python, and OpenAI Codex, and deployed on Render.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 60,
      "creativity": 85,
      "clarity": 72,
      "usability": 60
    },
    "judgesNote": "The project's strongest dimension is creativity, as it combines data science with wellness to offer a novel solution for analyzing food ingredients and recommending healthier alternatives. However, the weakest dimension is execution due to the lack of a working live URL, which limits the ability to assess the app's current functionality and usability. Without a live artifact, execution and usability are capped, reflecting the absence of direct evidence of a shippable product."
  },
  {
    "id": "3027990",
    "name": "BamaPickMe",
    "oneLineDescription": "BamaPickMe",
    "fullDescription": "BamaPickMe is a University of Alabama community donation app that connects donors with seekers. It helps students, staff, and local community members share useful items they no longer need, such as textbooks, bikes, electronics, and dorm essentials, so they can be claimed by someone who genuinely needs them. The project demonstrates a campus-centered platform focused on accessibility, sustainability, and practical peer-to-peer giving.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 80,
      "clarity": 75,
      "usability": 82
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title, indicating a shippable product. However, clarity is the weakest dimension as the description lacks a one-liner and structured metadata is missing, which could help in understanding the project quickly. The project is useful for the University of Alabama community, but the app/UI keyword count suggests a limited interface presence."
  },
  {
    "id": "3027986",
    "name": "Websumes- AI Career Assistance Platform",
    "oneLineDescription": "Websumes- AI Career Assistance Platform",
    "fullDescription": "Websumes is a platform that makes it easy to tailor your resume to a specific job description, understand how you stand as an applicant, and build a custom portfolio site from your resume. I created it to help people improve their chances of getting hired. It's completely free, with no hidden costs. Check it out-it's already helping people get results.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 72,
      "clarity": 65,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a functional deployment. However, the clarity is the weakest due to the absence of a one-line summary and a somewhat vague description that lacks structured detail. The usability is limited by the lack of visible UI keywords, suggesting a less interactive interface."
  },
  {
    "id": "3027972",
    "name": "Regional Pro Forma Statement",
    "oneLineDescription": "Regional Pro Forma Statement",
    "fullDescription": "This is a website that allows users to export pro forma financial statements based on different regions. Through my classes, I noticed that financial statement formatting varies across regions, which inspired this idea. The site automatically adjusts the input data to match the selected region’s format, making it easier for business partners in different locations to communicate and understand financial information.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 75,
      "clarity": 65,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a substantial content length, indicating a functional site. However, clarity is the weakest dimension as the description lacks a concise one-liner and structured explanation, making it difficult to quickly grasp the project's purpose. The project could also benefit from more creative elements to differentiate it from standard financial tools."
  },
  {
    "id": "3027956",
    "name": "GovLadder",
    "oneLineDescription": "GovLadder",
    "fullDescription": "The U.S. government must spend $150B+ annually with small businesses but most never see a dollar. Not because they don't qualify, but because navigating certifications across federal, state, county, and city levels is a maze. I built GovLadder to solve this after personally winning a government contract from scratch with no connections. It matches businesses to 80+ programs and guides them through applications step by step. Live now in CA, NY, and TX.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 78,
      "creativity": 85,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for GovLadder is usefulness, as it addresses a significant problem for small businesses seeking government contracts, with a clear target user and practical domain framing. However, clarity is the weakest dimension due to the absence of a one-line summary and a structured description, making it harder to quickly grasp the project's scope. The artifact review shows a live URL with a matching title and meta description, but the login wall and potential error page limit usability and execution scores."
  },
  {
    "id": "3027876",
    "name": "Breach Vector",
    "oneLineDescription": "Breach Vector",
    "fullDescription": "BreachVector is an AI-powered website security review platform that runs safe, passive checks on public websites and turns the results into polished executive and technical reports. It supports scan history, PDF export, shareable reports, workspaces, team collaboration, and production-ready deployment with Next.js, Prisma, Supabase, OpenAI, and Clerk.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 84,
      "creativity": 80,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for Breach Vector is usefulness, as it addresses a clear need for website security reviews with a focus on generating executive and technical reports. Execution is strong due to the live URL returning a 200 status and the presence of structured metadata, though the login wall limits usability. Clarity is the weakest dimension, as the absence of a one-line summary and a somewhat dense description make it harder to quickly grasp the project's scope and functionality."
  },
  {
    "id": "3027741",
    "name": "Rethinkjbos - AI-Powered Jobs & Internships Tracker with Automated Outreach",
    "oneLineDescription": "Rethinkjbos - AI-Powered Jobs & Internships Tracker with Automated Outreach",
    "fullDescription": "Built an AI-powered job search assistant to help students track applications, automate LinkedIn outreach and generate personalized cold emails. I designed workflows for message generation and application tracking to improve efficiency and response rates. This project taught me prompt engineering, automation design, and building real-world AI tools that solve student pain points.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 90,
      "creativity": 80,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a detailed page content, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs, making it harder to quickly grasp the project's full scope. The project shows solid usefulness for students, but the creativity is only moderate as it follows a common pattern of job application tools."
  },
  {
    "id": "3027686",
    "name": "Quickvite",
    "oneLineDescription": "Quickvite",
    "fullDescription": "Event planning should be about creating moments, not gatekeeping doors. Quickvite gives organizations full control over event access so you can focus on what matters. Distribute trackable invite links, manage claims and RSVPs in real-time, and let trusted guests chain-invite others. Live analytics, exportable guest lists, and QR-code scanning eliminate check-in chaos. Role-based permissions keep your team aligned from planning to door, turning access risk into a solved problem.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 86,
      "creativity": 84,
      "clarity": 80,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for Quickvite is usefulness, as it addresses a clear need for organizations to manage event access and RSVPs efficiently. Execution is also strong, with a live URL that returns a 200 status and a matching page title, though the login wall limits usability. Creativity is solid, offering a unique angle on event management with features like chain-invites and live analytics. Clarity could be improved with a more structured description, and usability is capped due to the login wall, which prevents full access to the interface."
  },
  {
    "id": "3027677",
    "name": "Dropima",
    "oneLineDescription": "Dropima",
    "fullDescription": "DROPIMA is a seat drop radar for movie fans who never want to miss opening night or premium formats like true IMAX and 70mm. I built it because I was tired of refreshing theater sites and still missing 70mm and opening night showings. Under the hood, it uses Netlify for the backend and background jobs, Supabase for data and a 60 second checker, and Zenrows to scrape and map live seat layouts from theater sites.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 85,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and matching the project title, indicating a functional deployment. However, the clarity is weak, as the absence of a one-line summary and a structured description makes it difficult to quickly grasp the project's purpose. Usability is limited by the likely login wall, which restricts access to the interface."
  },
  {
    "id": "3027645",
    "name": "AI Transition Change Management Plan Builder — Uplift Strategy Solutions LLC",
    "oneLineDescription": "AI Transition Change Management Plan Builder — Uplift Strategy Solutions LLC",
    "fullDescription": "A free AI-powered tool that generates customized change management plans for healthcare organizations deploying AI. Built to address the Human-AI Synergy Gap, the fastest growing workforce crisis in healthcare today.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 75,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets a specific and relevant problem in healthcare organizations transitioning to AI. However, the weakest dimension is clarity, due to the absence of a one-line summary and a description that lacks structured explanation. The artifact review shows a live URL with a relevant page title, but the title does not match the project, and the app keyword count is low, indicating limited interface presence."
  },
  {
    "id": "3027644",
    "name": "Apartment Helper",
    "oneLineDescription": "Apartment Helper",
    "fullDescription": "This project is to help NY'ers either voucher holders or non-voucher holders, as well as landlords, to assist them in apartment searches for tenants and applicants with resources as well as equipping landlords with the FAQs needed to help them make informed decisions.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 90,
      "creativity": 82,
      "clarity": 70,
      "usability": 88
    },
    "judgesNote": "The strongest dimension for 'Apartment Helper' is execution, with a live URL that returns a 200 status and a matching page title, indicating a shippable product. The weakest dimension is clarity, as the description lacks a one-line summary and is somewhat vague, making it difficult to quickly grasp the project's full scope. The project is useful for a specific audience and has a solid interface, but the creativity is moderate, as it addresses a common problem with a slightly novel approach."
  },
  {
    "id": "3027462",
    "name": "The Aligned Source Code Content Lab",
    "oneLineDescription": "The Aligned Source Code Content Lab",
    "fullDescription": "Aligned Content Studio (ACS) is a bespoke AI content engine that solves generic writing by capturing your authentic voice and expertise. It acts as a creative director working from your approved \"Source Code\". The four pillars are: 1. Knowledge Base (your expertise), 2. Brand Voices (mimics your tone), 3. Concept Lab (strategic ideation), and 4. Generation Studio (rapid content execution). ACS lets you quickly generate months' worth of authentic marketing material to scale your impact.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 70,
      "creativity": 75,
      "clarity": 60,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it attempts to offer a unique AI-driven content generation tool with a focus on personalized brand voice and strategic ideation. However, the weakest dimension is clarity, as the description lacks a concise one-liner and the explanation is somewhat abstract, making it difficult to quickly grasp the project's core functionality. The artifact review indicates a live URL, but the page is sparse with minimal content and lacks structured metadata, limiting execution and usability scores."
  },
  {
    "id": "3027438",
    "name": "Begin Where You Begin",
    "oneLineDescription": "Begin Where You Begin",
    "fullDescription": "I built this writing and meditation app to reflect my own fiction writing practice and the steps I take to unlock my creativity. The app uses mediation and free writing to free stories and enhance visual thinking.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 82,
      "creativity": 80,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "The strongest dimension for this project is execution, as it has a live URL that returns a 200 status with a substantial page content length, indicating a functional app. However, the weakest dimension is clarity, due to the absence of a one-line summary and a vague description that doesn't clearly articulate the app's purpose or target users. The creativity score benefits from the novel combination of meditation and writing, but the lack of a preview image and minimal UI keywords slightly impact usability."
  },
  {
    "id": "3027430",
    "name": "career-agent-pro",
    "oneLineDescription": "career-agent-pro",
    "fullDescription": "CareerAgentPro is a real-time AI-powered career assistant that analyzes job roles, generates tailored insights, and streams results using RAG pipelines and structured LLM outputs. I used AI tools like Codex-style workflows for rapid prototyping, debugging, and building backend APIs, improving iteration speed and reliability across the system. This project reflects how modern AI applications are built end-to-end.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 75,
      "creativity": 82,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it uses AI to provide real-time career assistance with a focus on role analysis and resume tailoring, which is a novel application of AI in the career domain. However, the clarity is weak due to the lack of a concise one-line summary and a somewhat jargon-heavy description. The execution is limited by the absence of a live demo or user-accessible interface, as the GitHub repository suggests a login wall, capping usability at 65."
  },
  {
    "id": "3027394",
    "name": "1,545 contributions on Github",
    "oneLineDescription": "1,545 contributions on Github",
    "fullDescription": "I built a portfolio of AI-assisted software initiatives through my GitHub work focused on practical execution: secure architecture, faster delivery, and better engineering quality. Instead of treating AI as a novelty, I used it as an operating layer across design, coding, testing, and documentation. Across my projects, I used AI tools (including coding copilots and LLM assistants) to accelerate four areas. First, I used AI to produce initial architecture options, API contracts, and implementati",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 60,
      "creativity": 65,
      "clarity": 50,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this submission is its creativity, as it attempts to leverage AI across multiple software development phases. However, the weakest dimension is clarity, due to the lack of a one-line summary and incomplete description, making it difficult to understand the specific contributions or projects. The artifact review indicates a login wall, which limits usability and execution scores, as the project is not directly accessible for evaluation."
  },
  {
    "id": "3027388",
    "name": "MyphotoAI",
    "oneLineDescription": "MyphotoAI",
    "fullDescription": "The project involves using AI to generate images. The project was created using codex and anti-gravity, it involves using gemini api key to edit and generate user uploaded images in different styles i.e linkedin headshots and instagram photos etc. It was a client project which involved a webapp, IOS and android app, the project was initially scafolled with codex then proceeded to be completed with antigravity.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a matching title and structured metadata, indicating a polished and potentially shippable product. However, clarity is the weakest dimension as the description lacks a concise one-liner and is somewhat vague, making it difficult to quickly understand the project's scope and functionality. The login wall limits usability, capping it at 65, as it prevents immediate user access to the interface."
  },
  {
    "id": "3027369",
    "name": "Job Pulse",
    "oneLineDescription": "Job Pulse",
    "fullDescription": "A job search and application tracking platform that helps users organize opportunities, monitor applications, manage follow-ups, and stay on top of their job search.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 68,
      "creativity": 72,
      "clarity": 60,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets a real problem of job search organization, which is relevant to many users. However, the weakest dimension is clarity due to the absence of a one-line summary and a sparse description that lacks detail. The artifact review indicates a live URL with a 200 status, but the lack of structured metadata, app keywords, and a short content length suggest limited execution and usability."
  },
  {
    "id": "3027361",
    "name": "Offline AI-powered Eye Screening System for Limited-Resource Settings",
    "oneLineDescription": "Offline AI-powered Eye Screening System for Limited-Resource Settings",
    "fullDescription": "Hi! My name is Arnita. As a development engineer, my north star is always about bringing global solutions to local problems. I build a screening system for eye disease where you don't depend on internet connection to run it, especially useful if you are in remote/rural areas, where access to healthcare is still lacking.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 84,
      "creativity": 90,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "The project's strongest dimension is creativity, with its focus on offline AI-powered eye screening in limited-resource settings, which is a novel and impactful approach. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat informal description that lacks structured detail. The live URL is functional and provides a substantial amount of content, supporting strong execution, but the lack of structured metadata and limited UI keywords suggest room for improvement in usability."
  },
  {
    "id": "3027346",
    "name": "AI-Powered Ricardian Trade Visualizer & Auditor",
    "oneLineDescription": "AI-Powered Ricardian Trade Visualizer & Auditor",
    "fullDescription": "I built a functional Ricardian Trade Visualizer using Codex to model complex economic scenarios. I audited the app’s logic against my 12th Ed Krugman & Obstfeld textbook, ensuring the mathematical output for opportunity costs and PPF slopes (Chapter 3) ensures the mathematical output is 100% accurate. This tool automates trade theory visualization and verifies AI logical consistency in financial modeling—a skill I've refined through 50+ hours of advanced AI training for finance roles.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 65,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title, indicating a functional deployment. However, clarity is the weakest dimension as the description lacks a one-line summary and is somewhat jargon-heavy, making it difficult to quickly grasp the project's purpose. The absence of structured metadata and UI keywords also impacts usability, though the project is still accessible."
  },
  {
    "id": "3027335",
    "name": "NYC Transit Finder",
    "oneLineDescription": "NYC Transit Finder",
    "fullDescription": "NYC Subway Finder is a web-based application designed to help users easily navigate the New York City subway system. The platform provides a simple and interactive interface where users can search for subway routes, find the best paths between stations, and access key transit information quickly. The application focuses on improving daily commuting by offering efficient route suggestions and a user-friendly experience. Built using modern web technologies, it ensures fast performance, responsive",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 72,
      "clarity": 70,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its usefulness, as it targets a real problem for NYC commuters by providing subway navigation and route suggestions. However, the execution is weak due to the lack of a working live URL, which significantly impacts both execution and usability scores. The absence of a one-line summary and a preview image also detracts from clarity and presentation."
  },
  {
    "id": "3027317",
    "name": "AI powered floor plan design",
    "oneLineDescription": "AI powered floor plan design",
    "fullDescription": "Chat GPT, Claude, or Gemini can't generate high quality, buildable floor plans. Protohaus can. Describe your dream house in natural language, and see your plan come to life!",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 78,
      "creativity": 85,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets a clear need for generating buildable floor plans, which is valuable for architects and homeowners. However, the clarity is weak due to the absence of a one-line summary and a somewhat vague description. The execution is solid with a live URL and structured metadata, but usability is limited by a likely login wall, which restricts access to the tool."
  },
  {
    "id": "3027267",
    "name": "FlightGPT – Book Flights by Chat or Voice on WhatsApp",
    "oneLineDescription": "FlightGPT – Book Flights by Chat or Voice on WhatsApp",
    "fullDescription": "FlightGPT is an AI travel assistant that lets you book flights by simply texting or calling on WhatsApp or web—no apps, no tab-switching. Powered by the Amadeus GDS, it searches 900+ airlines in real time, handles hotels and car rentals, and processes secure payments via Stripe, all within a single conversation. Built using conversational AI and integrated with WhatsApp's native security features.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 92,
      "creativity": 90,
      "clarity": 70,
      "usability": 85
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL returning a 200 status and a detailed page content, indicating a shippable product. Creativity is also strong due to the novel integration of conversational AI with WhatsApp for booking flights, which is not a common approach. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is somewhat dense, making it harder to quickly grasp the project's full scope."
  },
  {
    "id": "3027215",
    "name": "ClinicAI",
    "oneLineDescription": "ClinicAI",
    "fullDescription": "The AI Clinic Management System is a web application designed to help clinics manage patients, appointments, and daily operations efficiently. It includes a secure login system for doctors and staff, allowing them to access and update patient records easily. The platform also uses AI to provide insights and improve decision-making, making clinic workflows faster and more organized.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 72,
      "clarity": 65,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets a clear user group (clinics) with practical features like patient management and appointment scheduling. However, the execution is weak due to the absence of a working live URL, which limits the ability to assess the application's current state. Clarity is also a weak point, as the description lacks a concise one-line summary and is somewhat vague, making it difficult to quickly grasp the project's full scope."
  },
  {
    "id": "3027174",
    "name": "StyleSyncs - AI Fashion Visualization",
    "oneLineDescription": "StyleSyncs - AI Fashion Visualization",
    "fullDescription": "StyleSyncs is an AI-powered fashion platform that lets users visualize outfits on personalized avatars before purchasing. I built it to address high return rates and lack of confidence in online shopping. Using tools like Gemini and 3D modeling pipelines, I developed a system that generates realistic body representations and outfit visualizations, while integrating a marketplace and user-driven styling experience.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 90,
      "creativity": 88,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning HTTP 200 and structured metadata indicating a polished product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs, making it harder to quickly grasp the project's scope. Usability is limited by the absence of visible UI keywords, suggesting a less user-friendly interface."
  },
  {
    "id": "3027156",
    "name": "NoPhish – AI-Powered Phishing Detection Dashboard",
    "oneLineDescription": "NoPhish – AI-Powered Phishing Detection Dashboard",
    "fullDescription": "NoPhish is an AI-powered phishing detection dashboard that analyzes URLs and email text for indicators like social engineering, credential harvesting, and malicious links. I built this to simulate real-world threat detection and improve cybersecurity awareness. Using Codex, I developed the scoring logic, detection rules, and modern UI. This project deepened my understanding of phishing patterns, user-focused security design, and AI-assisted development workflows.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 82,
      "clarity": 68,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it tackles the novel and important problem of phishing detection using AI, which is a fresh approach in cybersecurity. However, the weakest dimension is execution due to the absence of a working live URL, which significantly limits the ability to assess the project's current state and usability. The lack of a one-line summary and a timeout error for the live URL further impact clarity and usability scores."
  },
  {
    "id": "3027077",
    "name": "Neon Lantern Cafe",
    "oneLineDescription": "Neon Lantern Cafe",
    "fullDescription": "I collaborated with Codex to put a fun spin on studying. With the pomodoro timer, there are 25-minute periods of study. After this, there is break time, during which you can play the little game off to the side being a barista at Neon Lantern Cafe. Earn money and customize your outfits as a barista! (Skin and hair color changes are free.) Lofi music can be played in the background to further enhance the game experience.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 72,
      "execution": 88,
      "creativity": 85,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for Neon Lantern Cafe is execution, with a live URL that returns a 200 status and a matching page title, indicating a shippable product. Creativity is also notable due to the unique combination of a Pomodoro timer with a cafe-themed game. However, the project lacks a one-line summary and the description is somewhat vague, impacting clarity. Usefulness is limited by the niche target audience and unclear practical benefits beyond entertainment."
  },
  {
    "id": "3027061",
    "name": "Limpia-RD",
    "oneLineDescription": "Limpia-RD",
    "fullDescription": "Limpia‑RD is a FastAPI backend for a marketplace connecting property owners and Airbnb hosts in the Dominican Republic with cleaners and service providers. It includes cleaner profiles, badges with images, host service requests, matching, reviews and ratings, Stripe‑ready payments, and English/Spanish messages.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 75,
      "clarity": 68,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for Limpia-RD is its usefulness, as it targets a specific user group (property owners and Airbnb hosts in the Dominican Republic) with a clear service offering. However, the weakest dimension is clarity due to the absence of a one-line summary and a somewhat dense description that lacks immediate clarity. The execution and usability are limited by the lack of a live, interactive URL, as the project is hosted on GitHub with a login wall likely, capping usability at 60."
  },
  {
    "id": "3027036",
    "name": "Email Sorting and Replying Agent",
    "oneLineDescription": "Email Sorting and Replying Agent",
    "fullDescription": "This is a project I built to automate email sorting (Spam/not) and if it is classified as not spam, a draft response is generated.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 60,
      "creativity": 70,
      "clarity": 55,
      "usability": 55
    },
    "judgesNote": "The project's strongest aspect is its creativity, as it attempts to automate email sorting and draft responses, which is a novel application of AI. However, the clarity is weak due to the lack of a one-line summary and a detailed description, making it difficult to quickly understand the project's scope and functionality. The execution and usability are limited by the login wall on the Google Colab link, preventing direct interaction with the project."
  },
  {
    "id": "3027032",
    "name": "Architecture Brand and Visuals",
    "oneLineDescription": "Architecture Brand and Visuals",
    "fullDescription": "Brand & Visual Designer | Graphic Designer → Creating Visuals that Elevate Real Estate, Architecture, and Industrial Brands | Helping Projects Sell Faster Through Strategic Design | $30M Project Value Delivered",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 68,
      "creativity": 60,
      "clarity": 50,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for this project is execution, as the live URL returns a 200 status and contains structured metadata, indicating a polished presentation. However, the weakest dimension is clarity, as the description lacks a one-line summary and fails to clearly articulate what the project specifically does or how it functions. The presence of a login wall limits usability, and the project does not demonstrate significant creativity or a unique approach to the problem space."
  },
  {
    "id": "3027025",
    "name": "Friendship Recapped",
    "oneLineDescription": "Friendship Recapped",
    "fullDescription": "Built to turn chaotic message histories into something navigable. I process exported chats into structured sessions, compute interaction and tone metrics, and visualize them over time. The tool highlights notable conversations and lets users quickly revisit or package meaningful context for further analysis without reading everything.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 85,
      "clarity": 68,
      "usability": 82
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat vague description, which makes it challenging to quickly grasp the project's scope and purpose. The project shows creativity in its approach to processing chat histories into structured data, which is not a common pattern."
  },
  {
    "id": "3027023",
    "name": "AI-Powered Grading For Schools & Teachers",
    "oneLineDescription": "AI-Powered Grading For Schools & Teachers",
    "fullDescription": "Revolutionize grading with AI. Teachers upload assignment ZIPs AI instantly grades, provides feedback, detects AI-generated content, and verifies math via Wolfram Alpha. Customize strictness, subject rules, and save templates. Plagiarism detection, CSV exports, and a sleek dashboard. Smarter grading, less time",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 70,
      "creativity": 82,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets a clear and practical need for teachers by automating grading tasks and providing additional features like plagiarism detection and feedback. However, the weakest dimension is clarity, due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs. The artifact review indicates a live URL with a login wall, which limits usability and execution scores, as the interface is not directly accessible for evaluation."
  },
  {
    "id": "3027009",
    "name": "CodeMate",
    "oneLineDescription": "CodeMate",
    "fullDescription": "CodeMate - Not just the answer but the logic and beyond. Built for learners who don't just pass but get it.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 85,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching title and structured metadata, indicating a shippable product. However, clarity is the weakest dimension as the description is vague and lacks a concise one-line summary, making it difficult to quickly understand the project's purpose. The login wall limits usability, capping it at 65."
  },
  {
    "id": "3027002",
    "name": "PuffCo Companion App",
    "oneLineDescription": "PuffCo Companion App",
    "fullDescription": "This project is a single-page React web app called Puffco Companion. It’s designed as a session tracker and companion dashboard for Puffco users, letting someone log concentrate sessions, rate them, track strains and heat profiles, save notes/photos/effects, and review past sessions. Beyond basic logging, it also includes profile customization, device/accessory management, cleaning/care tracking, a strain encyclopedia, backup/export tools, shareable session cards, guest/local storage support, a",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 68,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title, indicating a shippable product. However, the project lacks clarity, as there is no one-line summary and the description is cut off, making it difficult to quickly understand the full scope. Usability is limited by the absence of visible UI keywords, suggesting a less intuitive interface."
  },
  {
    "id": "3026991",
    "name": "PlantAutopsy",
    "oneLineDescription": "PlantAutopsy",
    "fullDescription": "PlantAutopsy is an AI-powered plant diagnosis app that analyzes plant photos and generates a revival plan. I built it to help beginners understand issues like overwatering, disease, nutrient deficiency, or stress. I used AI to build a full-stack app with a React frontend, Express backend, PWA support, history storage, and a plant explorer feature. I learned how to connect AI APIs, handle image-based workflows, and deploy a complete app on Vercel and Render.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and matching project title, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a description that lacks structured paragraphs, making it difficult to quickly grasp the project's purpose. Usability is limited by the low app/UI keyword count, suggesting a lack of visible interface elements."
  },
  {
    "id": "3026871",
    "name": "XSX Cortext AI",
    "oneLineDescription": "XSX Cortext AI",
    "fullDescription": "XSX Cortext AI is an AI-driven student platform built to improve productivity, learning support, and digital organization. I developed the system from concept to execution, focusing on AI-assisted features, workflow optimization, and user-centered design. Built with Codex, the platform integrates smart study tools and scalable functionality to create a more efficient and engaging student experience.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 72,
      "clarity": 65,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for XSX Cortext AI is usefulness, as it targets students with AI-driven productivity and learning support tools. However, the execution is weak due to the absence of a working live URL, which limits the ability to assess the platform's current state. Clarity also suffers from the lack of a one-line summary and structured description, making it difficult to quickly grasp the project's specifics."
  },
  {
    "id": "3026854",
    "name": "HomeAssist Winnipeg",
    "oneLineDescription": "HomeAssist Winnipeg",
    "fullDescription": "HomeAssist Winnipeg is a subscription-based home service platform built to streamline cleaning and maintenance through structured, recurring plans. I developed the project to improve reliability and convenience compared to traditional one-time bookings. Using AI-assisted development (Codex), I designed the platform’s workflows, service structure, and user experience, focusing on scalability, automation, and efficient service management.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 82,
      "creativity": 75,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title, indicating a functional deployment. However, the weakest dimension is clarity, as the description lacks a one-line summary and is somewhat vague about specific features and user benefits. The absence of structured metadata and UI keywords also suggests limited usability and polish."
  },
  {
    "id": "3026822",
    "name": "FoodSquare Ai",
    "oneLineDescription": "FoodSquare Ai",
    "fullDescription": "FoodSquare AI is a food-tech platform that lets users upload a dish, fridge scan, or food video and instantly generate personalized remake options, meal plans, and social-ready food inspiration. It combines AI cooking guidance, community engagement, and scalable meal planning for everyone from home cooks to event-scale food prep.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 90,
      "creativity": 88,
      "clarity": 75,
      "usability": 85
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. Creativity is also strong due to the unique combination of AI cooking guidance and community engagement. However, clarity is the weakest dimension as the description lacks a concise one-liner and structured paragraphs, making it harder to quickly grasp the project's scope."
  },
  {
    "id": "3026713",
    "name": "FinDr.",
    "oneLineDescription": "FinDr.",
    "fullDescription": "FinDr is a research outreach platform I built to make professor discovery less random and less privilege-dependent. Students often piece together stale faculty pages, unclear fit, and awkward cold emails, so I built a full-stack product that indexes live faculty data, helps assess research fit, drafts outreach with AI, and sends through linked inboxes. It uses coordinated agents to search university sites, locate professor pages, and turn the collected information into structured faculty",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 75,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for FinDr is execution, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, the clarity of the project is weaker due to the absence of a one-line summary and a somewhat dense description that could hinder quick understanding. Usability is limited by a likely login wall, which restricts access to the interface without user credentials."
  },
  {
    "id": "3026683",
    "name": "VoteGuard: Secure Voting Prototype",
    "oneLineDescription": "VoteGuard: Secure Voting Prototype",
    "fullDescription": "VoteGuard is a cybersecurity-focused voting prototype that simulates secure login, one-vote enforcement, session expiration, and audit logging. Users can start a session, cast a single vote, and view real-time results with a transparent audit trail. Built with Node.js and Express, this project demonstrates key security concepts like session control, integrity, and accountability in a simple, interactive app.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 82,
      "clarity": 70,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it tackles the novel and important problem of secure voting with an emphasis on cybersecurity concepts like session control and audit logging. However, the execution is weak due to the lack of a working live URL, which prevents verification of the claimed features. Clarity is also a bit lacking, as the absence of a one-line summary and a more structured description makes it harder to quickly grasp the project's scope and impact."
  },
  {
    "id": "3026662",
    "name": "Settro - AI for Restaurants",
    "oneLineDescription": "Settro - AI for Restaurants",
    "fullDescription": "Restaurants have used social media for years to get attention, but not to turn that attention into orders. Settro fixes that. For restaurants that use Settro, customers can place orders through simple texts and Facebook/Instagram DMs. If a call is missed, Settro sends a text back to help win back the sale - no annoying voice AI gimmick. Settro can also turn any photo of food into a short video ready to post and get customers on Instagram and Facebook.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 60,
      "creativity": 82,
      "clarity": 70,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets a clear user group (restaurants) with a practical solution for converting social media engagement into orders. However, the weakest dimension is execution due to the lack of a working live URL, which limits the ability to assess the project's current state and usability. The creativity score is bolstered by the novel approach of integrating text and DM ordering with social media content creation."
  },
  {
    "id": "3026660",
    "name": "phishguard Public",
    "oneLineDescription": "phishguard Public",
    "fullDescription": "PhishGuard is an open-source phishing detection tool that combines 5 detection layers with a local Mistral 7B AI to explain threats in plain English — no cloud APIs, no data sharing, everything runs on your own hardware. ⚡ Features 5-Layer Detection Engine — heuristics, phishing DB, WHOIS, DNS, AI analysis 110,000+ Threat Entries — PhishTank + URLhaus + OpenPhish + Feodo Tracker Local AI Explanations — Mistral 7B via Ollama, runs on your own GPU Plain English Results — non-technical users under",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 75,
      "creativity": 85,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for PhishGuard is its usefulness, as it addresses a real problem of phishing detection with a comprehensive approach using multiple detection layers and local AI explanations. However, the weakest dimension is clarity, as the description lacks a concise one-line summary and is somewhat fragmented, making it harder to quickly grasp the project's scope. The GitHub page is accessible, but the presence of a login wall limits usability, and the execution is capped due to the absence of a dedicated live demo or product interface."
  },
  {
    "id": "3026657",
    "name": "ClearBudget",
    "oneLineDescription": "ClearBudget",
    "fullDescription": "ClearBudget is a budgeting website built with HTML, CSS, and JavaScript, with help from Codex, that shows users how much they can safely spend each month and the real interest cost of not paying their credit card balance in full. It combines a monthly budget snapshot with a live payment planner so users can quickly understand the tradeoff between spending now and paying more later.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 75,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of ClearBudget is its usefulness, as it targets a real problem for users managing their finances by providing insights into monthly spending and credit card interest. However, the execution is weak due to the lack of a working live URL, which limits the ability to evaluate the project's current state and usability. Clarity is also a concern, as the absence of a one-line summary and a structured description makes it difficult to quickly grasp the project's scope and functionality."
  },
  {
    "id": "3026615",
    "name": "Steady Mental Health",
    "oneLineDescription": "Steady Mental Health",
    "fullDescription": "Steady is a mental wellness web app I built to encourage people to care for themselves emotionally and physically each day. Inspired by my own mental health journey, it helps users track moods, reflect on temporary struggles, and get personalized suggestions for healthier habits, self-care, and growth. I built it with HTML, CSS, JavaScript, and local storage to create a simple, supportive, and private experience (Using Codex).",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 68,
      "usability": 85
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a 200 status and structured metadata, indicating a well-developed and accessible web app. However, clarity is the weakest dimension as the project lacks a concise one-line summary and the description is somewhat vague, making it difficult to quickly grasp the app's unique value proposition."
  },
  {
    "id": "3026597",
    "name": "Sensitivity Limits of PET/MR Imaging for Detecting Early Prostate Cancer Lesions",
    "oneLineDescription": "Sensitivity Limits of PET/MR Imaging for Detecting Early Prostate Cancer Lesions",
    "fullDescription": "I used AI to quantify PSMA tracer uptake for PET/MRI imaging by analyzing the impact of parameters like FWHM, LBR, and noise ratio in lesion detectability for prostate cancer. I created a PET/MRI detectability model to find early prostate cancer using synthetic groups from NCI IDC datasets. With AI-assisted coding, I built Python pipelines to simulate imaging physics, like partial-volume effects and SNR-based detection. AI made it easier to review literature and build the model.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 85,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The project's strongest dimension is creativity, as it applies AI to a novel domain of PET/MR imaging for prostate cancer detection, incorporating complex imaging physics simulations. However, clarity is the weakest dimension due to the absence of a concise one-line summary and a somewhat dense description that may be difficult for judges to quickly grasp. The execution score is limited by the GitHub URL, which suggests a login wall and lacks a direct, user-friendly interface."
  },
  {
    "id": "3026594",
    "name": "THREE.JS Portfolio",
    "oneLineDescription": "THREE.JS Portfolio",
    "fullDescription": "An interactive personal portfolio showcasing projects, skills, and contact via a React (Vite) + Tailwind + Three.js frontend and an Express API on Firebase Functions (v2) with MongoDB Atlas. Includes dockerized local dev (Dockerfiles + Docker Compose for client, server, MongoDB, MailHog), Firebase Emulators, GitHub Actions CI/CD to Firebase Hosting (PR preview channels + production), a rate-limited SMTP contact form, and optional Cloudflare custom domain.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 72,
      "creativity": 75,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest aspect of this project is its execution, with a live URL returning HTTP 200, indicating a functional deployment. However, the lack of structured metadata, a matching page title, and a minimal page content length suggest limited polish and depth. Clarity is the weakest dimension due to the absence of a one-line summary and a description that doesn't clearly convey the project's purpose or target audience."
  },
  {
    "id": "3026564",
    "name": "Deflectra: Edge-Deployed AI Web Application Firewall (WAF)",
    "oneLineDescription": "Deflectra: Edge-Deployed AI Web Application Firewall (WAF)",
    "fullDescription": "Deflectra is a custom Layer-7 Web Application Firewall deployed at the edge via Cloudflare Workers and Supabase Edge Functions. It intercepts live HTTP traffic to protect origin servers. A multi-stage pipeline drops baseline noise using rate limiting, JWT authentication, and regex. Complex payloads are dynamically routed to a Google Gemini semantic engine to detect and block SQLi, XSS, and RCE attacks. The serverless architecture is monitored via a custom, real-time React dashboard.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 90,
      "clarity": 75,
      "usability": 78
    },
    "judgesNote": "The strongest dimension for Deflectra is creativity, with its novel use of AI and edge deployment for a Web Application Firewall, integrating multiple advanced technologies like Cloudflare Workers and Google Gemini. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that could be more accessible. The live URL returns a 200 status, indicating solid execution, but the page content is relatively sparse, impacting usability."
  },
  {
    "id": "3026485",
    "name": "recap.",
    "oneLineDescription": "recap.",
    "fullDescription": "A financial wrapped platform that allows you to see your money in a new way. Just like Spotify Wrapped, you'll get your finances in a wrapped manney. Built entirely with Codex agents, from frontend engineering to backend engineering and even integrations, deployment, and code review - all handled by Codex.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 40,
      "creativity": 65,
      "clarity": 50,
      "usability": 40
    },
    "judgesNote": "The project's strongest dimension is creativity, as it attempts to apply the popular 'wrapped' concept to personal finance, which is a novel angle. However, the weakest dimension is execution, as there is no working live URL, resulting in a 404 error, which severely limits the ability to assess the project's functionality. The lack of a one-line summary and a clear description further impacts clarity and usability."
  },
  {
    "id": "3026469",
    "name": "Final-Stage Photography Store",
    "oneLineDescription": "Final-Stage Photography Store",
    "fullDescription": "A premium, full-stack photography platform that seamlessly integrates a high-end client-facing website with a powerful administrative management system. Designed with a strong emphasis on visual storytelling and user experience, the platform enables photography studios to showcase their work, manage content, and engage clients in a refined and efficient way.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 55,
      "creativity": 72,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it attempts to integrate a client-facing website with an administrative management system for photography studios, which is a somewhat novel approach. However, the weakest dimension is execution, as there is no working live URL, which severely limits the ability to assess the platform's current state and usability. The lack of a one-line summary and a detailed description also impacts clarity."
  },
  {
    "id": "3026464",
    "name": "ChemDex - Periodic Insight",
    "oneLineDescription": "ChemDex - Periodic Insight",
    "fullDescription": "ChemDex is a fully interactive and educational web application designed to help users explore the periodic table in a visually engaging and informative way. The platform presents all chemical elements in a color-coded periodic table, where each color represents a specific group such as alkali metals, noble gases, halogens, and transition metals. Users can click on any element to view detailed chemical and physical information, including atomic number, atomic mass, electron configuration, oxidat",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 75,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL returning a 200 status and a substantial page content length, indicating a functional web application. However, clarity is the weakest dimension due to the absence of a one-line summary and incomplete description, which makes it difficult to quickly grasp the project's full scope. The lack of structured metadata and minimal UI keywords also impacts usability."
  },
  {
    "id": "3026463",
    "name": "Clarence: Designing an Autonomous AI Collaborator",
    "oneLineDescription": "Clarence: Designing an Autonomous AI Collaborator",
    "fullDescription": "I built a 16-agent autonomous AI system that runs 26 nightly cron jobs, manages a 1,533-memory knowledge database, and routes tasks across multiple models. The real lesson was not about automation. It was about trust calibration: how much autonomy to grant, when to intervene, and what happens when you design a collaborator instead of a tool.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 85,
      "clarity": 70,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title and structured metadata, indicating a well-documented project. However, usefulness is the weakest dimension as the project lacks a clear target user or practical application, making it difficult to assess its real-world impact. The description is somewhat vague, impacting clarity and usability, as it doesn't clearly convey how a user might interact with the system."
  },
  {
    "id": "3026441",
    "name": "Chatty Portfolio — Let Recruiters Talk to Your Website",
    "oneLineDescription": "Chatty Portfolio — Let Recruiters Talk to Your Website",
    "fullDescription": "Let recruiters talk to your resume!! Built a minimal, recruiter-focused portfolio website to present projects, experience, and security work in a clean, navigable format. Developed using React, TypeScript, and Vite, with deployment on Vercel. Integrated a Codex-powered chatbot to enable contextual Q&A over my background. Focused on performance, accessibility, and structured data for discoverability.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and structured metadata indicating a polished deployment. However, clarity is the weakest due to the absence of a one-line summary and a description that lacks detail on the chatbot's functionality. The project is creative in integrating a chatbot for recruiter interaction, but the lack of visible UI elements on the page impacts usability."
  },
  {
    "id": "3026426",
    "name": "RedLine AI",
    "oneLineDescription": "RedLine AI",
    "fullDescription": "Redline AI helps you compare two versions of text and instantly identify additions, deletions, and rewrites in a clean, product-grade interface built for modern writing workflows.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 70,
      "usability": 85
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching title and structured metadata, indicating a shippable product. Clarity is the weakest dimension, as the absence of a one-line summary and a preview image makes it harder to quickly grasp the project's purpose. The project is useful for writers needing text comparison, but lacks a novel approach, impacting creativity."
  },
  {
    "id": "3026369",
    "name": "Lumen Clash",
    "oneLineDescription": "Lumen Clash",
    "fullDescription": "This is a multiplayer game that was made entirely by Gen AI. This project was created to see how polished AI could make its own projects and how it can iterate upon itself. It is not perfect, but it is purely meant as a hobby project.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 60,
      "creativity": 68,
      "clarity": 50,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it explores the novel concept of a game created entirely by AI, which is an interesting experiment. However, the weakest dimension is clarity, as the description is sparse and lacks a one-line summary, making it difficult to quickly understand the project's purpose and functionality. The artifact review indicates an error page is likely, which limits execution and usability scores, as the project does not appear fully functional or accessible."
  },
  {
    "id": "3026306",
    "name": "Godot Runtime Bridge",
    "oneLineDescription": "Godot Runtime Bridge",
    "fullDescription": "GRB lets you build, test, and debug your Godot game through prompting after a short one-time setup in Godot and Cursor/Codex. A TCP debug server and MCP bridge connect Cursor/Codex to your running game: you describe what you want, the agent launches the game, observes it, edits code, and verifies. Full develop -> observe -> verify loops.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to a live GitHub page with extensive content and structured metadata, indicating a well-documented project. However, clarity is the weakest dimension as the description lacks a concise one-line summary and is somewhat jargon-heavy, making it difficult to quickly grasp the project's purpose. Usability is limited by the likely login wall, preventing full access to the tool's interface."
  },
  {
    "id": "3026288",
    "name": "Jobique - AI-Powered Job Application Tracking Platform",
    "oneLineDescription": "Jobique - AI-Powered Job Application Tracking Platform",
    "fullDescription": "Built and deployed an AI-powered job tracking platform using Next.js, TypeScript, and PostgreSQL on Vercel. Integrated OpenAI (GPT-4o-mini) to extract and normalize job data from unstructured sources using Schema.org JSON-LD and Open Graph fallbacks. Implemented secure authentication (Clerk), file validation, and usage quotas. Supports 5+ users managing 200+ job entries, improving organization and tracking efficiency.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 75,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension, with a live site returning HTTP 200 and a matching page title, indicating a shippable product. The weakest dimension is clarity, as the absence of a one-line summary and a somewhat dense description makes it harder to quickly grasp the project's purpose. The project shows creativity in its use of AI for job data extraction and normalization, but the interface could be more user-friendly given the low app keyword count."
  },
  {
    "id": "3026256",
    "name": "RebuildMe AI – Your Personal Comeback Coach",
    "oneLineDescription": "RebuildMe AI – Your Personal Comeback Coach",
    "fullDescription": "RebuildMe AI is a web app designed to help people get back on track after going through tough situations. I built this because I know how hard it can be to start over and not know where to begin. I wanted to create something that gives people structure, guidance, and encouragement when they need it most. I used Codex to build a simple website that takes user input and generates a personalized comeback plan, daily routine, and motivation.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 72,
      "execution": 82,
      "creativity": 75,
      "clarity": 60,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is execution, as it has a live URL that returns a 200 status with a matching page title, indicating a functional deployment. However, the weakest dimension is clarity, as the description lacks a one-line summary and is vague about specific features and user interactions. The absence of UI keywords and structured metadata also impacts usability, suggesting a lack of a real interface."
  },
  {
    "id": "3026245",
    "name": "CampusShare",
    "oneLineDescription": "CampusShare",
    "fullDescription": "CampusShare helps students find and share free food, supplies, and campus resources in real time.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 80,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title and structured metadata, indicating a shippable product. However, clarity is the weakest dimension as the description lacks a one-line summary and is not well-structured, making it harder to quickly understand the project. The login wall limits usability, capping it at 65 despite the presence of a real interface."
  },
  {
    "id": "3026200",
    "name": "Algorithmic Trading Engine",
    "oneLineDescription": "Algorithmic Trading Engine",
    "fullDescription": "A comprehensive full-stack algorithmic trading platform that empowers traders with portfolio management, backtesting, and paper trading functionalities. The application processes live market data in real-time while providing interactive 3D visualizations to analyze trading strategies, performance metrics, and market movements. Traders can test strategies risk-free through paper trading before deploying capital.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 60,
      "creativity": 90,
      "clarity": 70,
      "usability": 55
    },
    "judgesNote": "The strongest dimension is creativity, as the project offers a novel combination of real-time data processing and interactive 3D visualizations, which is not commonly seen in trading platforms. However, the weakest dimension is usability due to the absence of a working live URL, which severely limits the ability to assess the user interface and overall user experience. Execution is also limited by the lack of a functional artifact, capping its potential score."
  },
  {
    "id": "3026185",
    "name": "MyRoop",
    "oneLineDescription": "MyRoop",
    "fullDescription": "myRoop is a mobile product concept that improves how users book beauty services for weddings and events. I built it to address unclear pricing, fragmented availability, and low trust in artist selection. I used ChatGPT for business problem evaluation and flow planning, Figma AI to design user flows and screens, and Claude Code to build an initial MVP for testing, creating a conversational system that maps user intent to structured constraints for better matching.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 75,
      "creativity": 82,
      "clarity": 68,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for MyRoop is creativity, as it attempts to address a specific problem in the beauty service booking space with a novel approach using conversational systems. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs, making it difficult to quickly grasp the project's scope. The execution is limited by the lack of a live, interactive product, as the URL leads to a case study rather than a usable interface."
  },
  {
    "id": "3026133",
    "name": "Retail Store Simulator",
    "oneLineDescription": "Retail Store Simulator",
    "fullDescription": "This is my first attempt at using Codex. I used a very simple description of the project which is pasted below. Having managed retail stores in the past, I wanted to provide a sandbox where people can learn how to manage a store see their progress. Prompt: I want you build me a website that houses a retail store simulator. The simulator should show how the manager has performed in managing the store.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 55,
      "creativity": 72,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it attempts to create a novel retail store simulator for learning management skills. However, the weakest dimension is execution, as there is no working live URL, resulting in a 404 error, which severely limits the ability to assess the project's current state. The lack of a one-line summary and a clear, structured description also impacts clarity negatively."
  },
  {
    "id": "3026121",
    "name": "Entry Realtor Call Copilot",
    "oneLineDescription": "Entry Realtor Call Copilot",
    "fullDescription": "Entry is a desktop AI copilot for real estate agents. I built the \"Lead Line\" feature — a Twilio-powered missed-call pipeline that transcribes voicemails, scores lead urgency, auto-drafts follow-up messages, and pushes tasks directly to the agent's CRM. Built solo using Electron, Node.js, and the Claude API. Real estate agents miss calls constantly while in showings — this makes sure every lead gets a response, automatically.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 72,
      "creativity": 85,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension is usefulness, as the project addresses a real need for real estate agents by automating lead follow-up tasks. However, the weakest dimension is clarity, due to the absence of a one-line summary and a description that lacks structured clarity. The artifact review shows a mismatch between the project description and the live URL, which affects execution and usability scores."
  },
  {
    "id": "3026116",
    "name": "Nurabilt — AI-Powered Healthcare Platform",
    "oneLineDescription": "Nurabilt — AI-Powered Healthcare Platform",
    "fullDescription": "Nurabilt — AI-Powered Healthcare Platform Nurabilt is a full-stack AI-powered healthcare platform that bridges the gap between patients and doctors through intelligent, role-based access to medical tools. Built with FastAPI, Supabase, and state-of-the-art LLMs (Groq, Gemini, Anthropic), it provides patients with instant AI-driven health insights — including symptom checking, lab report analysis, drug information, and personalized nutrition guidance — while equipping doctors with AI-generated SOA",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 82,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest aspect of this project is its usefulness, as it targets a real problem in healthcare by providing AI-driven insights for both patients and doctors. Execution is also strong, with a live URL that returns a 200 status and a detailed meta description, though the title does not match the project exactly. The weakest dimension is clarity, due to the absence of a one-line summary and a somewhat vague description that doesn't fully explain the platform's capabilities. Usability is limited by a likely login wall, capping its score."
  },
  {
    "id": "3026115",
    "name": "BlobPrep.com - AI-powered test prep that actually adapts",
    "oneLineDescription": "BlobPrep.com - AI-powered test prep that actually adapts",
    "fullDescription": "BlobPrep helps students improve faster on GRE and GMAT by generating personalized practice, instant feedback, and adaptive learning paths. I built it to solve inefficient studying by targeting weak areas and reinforcing concepts through repetition. Combining my own programming with AI, I created a system that generates questions, explanations, and tracks performance to optimize learning.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 80,
      "clarity": 70,
      "usability": 85
    },
    "judgesNote": "The strongest dimension for BlobPrep.com is execution, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description, which makes it harder to quickly grasp the project's scope and functionality. The project is useful for students preparing for GRE and GMAT, but the creativity is moderate as adaptive learning is a common approach in test prep."
  },
  {
    "id": "3026084",
    "name": "AI Data Pipeline Builder",
    "oneLineDescription": "AI Data Pipeline Builder",
    "fullDescription": "AI Data Pipeline Builder helps users transform messy datasets into clean, analysis-ready data through a guided, no-code workflow. Users upload a CSV, the app detects data quality issues, and automatically suggests a step-by-step cleaning pipeline. Built with Codex using pandas and Streamlit, it emphasizes reliability, clear transformations, and a polished user experience for real-world data workflows.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 80,
      "clarity": 72,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it offers a novel no-code solution for transforming messy datasets into clean, analysis-ready data, which is a valuable tool for users dealing with data quality issues. However, the execution and usability are significantly hampered by the lack of a working live URL, which prevents any real assessment of the product's functionality or user interface. Without a live artifact, execution and usability scores are capped at 55."
  },
  {
    "id": "3026066",
    "name": "FinFlow MCR showcase",
    "oneLineDescription": "FinFlow MCR showcase",
    "fullDescription": "FinFlow MCR is a desktop application for parsing bank statements into structured transaction data, reviewing extracted rows, and exporting the result to Excel. This repository is a public showcase for the project. It documents the product, architecture, workflow, and benchmark approach without exposing the full commercial implementation.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 65,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets a practical need for structured financial data processing. However, the execution is limited by the lack of a live, usable application; the GitHub repository serves as documentation rather than a deployable product. Clarity is weak due to the absence of a one-line summary and a detailed description, making it difficult to quickly grasp the project's scope and functionality."
  },
  {
    "id": "3026020",
    "name": "Pink Hunter | Pink Flower Blossom Maps",
    "oneLineDescription": "Pink Hunter | Pink Flower Blossom Maps",
    "fullDescription": "From March to April, five kinds of pink blossoms bloom around the same time, and they are incredibly easy to confuse. A question keeps coming up: are all the pink flowers we see actually cherry blossoms? What PinkHunter does: 🌸 Helps people tell apart five commonly confused pink blossoms: cherry, plum, peach, magnolia, and crabapple 🗺️ Provides a mobile-first blossom map so people can explore where these trees are 🔎 Offers quick visual guides to compare petals, flower stalks, cluster patter",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and having structured metadata, indicating a polished and functional product. However, clarity suffers due to the absence of a one-line summary and a somewhat vague description that doesn't immediately convey the project's purpose. The project is creative in its focus on differentiating similar blossoms and providing a map, but the lack of a preview image and limited UI keywords slightly impact usability."
  },
  {
    "id": "3025998",
    "name": "The Recipe Generator",
    "oneLineDescription": "The Recipe Generator",
    "fullDescription": "I wanted to make a meal generator to help make meals. The last 2 years I was battling gut issues and had to completely change my diet because I lost a lot of weight and couldn't eat. The generator will help make simple high protein gut friendly meals using ingredients you already have in your home. I am completely new to this! I am pretty sure codex/netlify are the two that worked together to make this website.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 75,
      "creativity": 70,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest aspect of this project is its execution, as it has a live URL that returns a 200 status, indicating a functional deployment. However, the weakest dimension is clarity, as the description lacks a concise one-line summary and is somewhat vague about the specific functionality and user interaction. The project also lacks structured metadata and has minimal UI keywords, which affects its usability and polish."
  },
  {
    "id": "3025991",
    "name": "I Got Next",
    "oneLineDescription": "I Got Next",
    "fullDescription": "I Got Next is a recreational sports platform I founded that helps players find courts and connect with their local community. Built with Next.js, TypeScript, Firebase, and Google Maps API, it grew to 100+ users and 500+ check-ins. I integrated AI for court recommendations and run predictions, then pivoted the business to B2B — partnering with parks & rec departments, YMCAs, and rec centers. This project taught me product thinking, full-stack development, and how to build for real users.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 92,
      "creativity": 85,
      "clarity": 70,
      "usability": 90
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL that returns a 200 status and a matching title, indicating a shippable product. The project is useful, targeting recreational sports players and partnering with organizations, which is a concrete user base. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat scattered description, making it harder to quickly grasp the project's essence."
  },
  {
    "id": "3025970",
    "name": "SEEN:app",
    "oneLineDescription": "SEEN:app",
    "fullDescription": "SEEN:app is an AI-powered wellness journaling app with a customizable AI companion called Fathom. Users journal with daily prompts, explore emotional depth, and reflect with AI support. Uses Claude (Anthropic) for natural language understanding and a custom avatar system for personalized engagement styles. Amāru, a premium add-on launching April 6, generates session-ready summaries users can bring to therapy. Built natively for Android and iOS.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension for SEEN:app, with a live URL returning a 200 status and matching metadata, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat vague description, which makes it harder to quickly grasp the app's unique value proposition. The creativity score is bolstered by the novel use of an AI companion and customizable engagement styles."
  },
  {
    "id": "3025893",
    "name": "Touch Grass",
    "oneLineDescription": "Touch Grass",
    "fullDescription": "Well, In this project I would like to evaluate the social media and platform and any other information that i have to do.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 80,
      "creativity": 70,
      "clarity": 50,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is execution, as the live URL returns a 200 status with a matching page title and structured metadata, indicating a functional deployment. However, the weakest dimension is clarity, as the description is vague and lacks a clear explanation of what the project does or who it serves. The absence of UI keywords and a low content length suggest limited usability and functionality."
  },
  {
    "id": "3025892",
    "name": "TunnelVision",
    "oneLineDescription": "TunnelVision",
    "fullDescription": "An agentic lorebook retrieval engine that replaces dumb keyword matching with AI-driven reasoning. Your model browses a hierarchical channel guide, decides what it needs, and retrieves contextually relevant entries on its own. Full read-write memory: the AI creates, updates, forgets, and summarizes lorebook entries autonomously. Includes tracker systems, narrative arc organization, trigram dedup, auto-summaries, multi-lorebook support, and 30+ diagnostic checks. Zero vector infra.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 75,
      "creativity": 82,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for TunnelVision is creativity, as it introduces an AI-driven approach to lorebook management, which is a novel application in the context of narrative tools. However, the weakest dimension is clarity, as the absence of a one-line summary and a dense description make it difficult to quickly understand the project's purpose and functionality. The artifact review shows a GitHub page with a login wall, limiting usability and execution scores."
  },
  {
    "id": "3025891",
    "name": "VectHare",
    "oneLineDescription": "VectHare",
    "fullDescription": "Vector-powered RAG memory engine for SillyTavern. Semantic search across full chat history finds relevant context from hundreds of messages back. Temporal decay mimics real memory fading with configurable half-life. Conditional activation triggers retrieval by character emotion, topic, or recency. Scene management groups story arcs into coherent chunks. Supports Vectra, LanceDB, and Qdrant backends. Vectorizes chats, lorebooks, and character defs. Built-in chunk visualizer, and more.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 74,
      "creativity": 85,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "Creativity is the strongest dimension here, with the project offering a novel approach to memory management in chat applications through semantic search and temporal decay. However, the lack of a one-line summary and the absence of a live, accessible demo cap clarity and usability scores. The GitHub page is comprehensive, but the login wall limits usability, and without a live URL, execution is constrained."
  },
  {
    "id": "3025864",
    "name": "Summer Lunch",
    "oneLineDescription": "Summer Lunch",
    "fullDescription": "SummerLunch is a personalized discovery engine designed to connect college students with high-impact summer research opportunities, hackathons, and fellowships through an AI-driven, resume-first approach",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for SummerLunch is execution, with a live URL returning a 200 status and a detailed meta description indicating a polished and functional site. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague project description, which makes it harder to quickly grasp the project's purpose. The project is useful for college students seeking opportunities, but the lack of visible UI elements on the page slightly impacts usability."
  },
  {
    "id": "3025860",
    "name": "Dexcom Glucose monitoring application",
    "oneLineDescription": "Dexcom Glucose monitoring application",
    "fullDescription": "I built a data pipeline to get my live readings from Dexcom G7 CGM sensor and built a dashboard to visualize it. I integrated RAG and LLM to get in depth insights on which food is increasing my boold glucose and make various comparisons using llm.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 80,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The project's strongest dimension is creativity, as it integrates a data pipeline with RAG and LLM for personalized glucose insights, which is a novel approach. However, clarity is the weakest dimension due to the absence of a one-line summary and a description that lacks structure and detail. The GitHub page serves as the live URL but is behind a login wall, limiting usability and execution scores."
  },
  {
    "id": "3025858",
    "name": "Company application",
    "oneLineDescription": "Company application",
    "fullDescription": "Am making this application for my brothers' company.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 68,
      "creativity": 60,
      "clarity": 40,
      "usability": 60
    },
    "judgesNote": "The strongest dimension is execution, as the live URL returns a 200 status with a substantial page content length, indicating a potentially functional application. However, the weakest dimension is clarity, due to the absence of a one-line summary and a vague description that fails to specify the problem being solved or the target user. The project lacks a clear connection between the description and the live artifact, which impacts both usefulness and creativity scores."
  },
  {
    "id": "3025785",
    "name": "BukuGambar.AI (AI Coloring Book)",
    "oneLineDescription": "BukuGambar.AI (AI Coloring Book)",
    "fullDescription": "It started when my son said: \"Ayah, Niel mau gambar dinosaurus makan fried chicken!\" No coloring book had that. So I built one. BukuGambar.AI lets parents describe any scene or upload a photo, and GPT-4o image generation instantly turns it into printable line art. Claude powers the prompt engineering and content safety guardrails. Codex accelerated the full PWA build, complete with cloud save, gallery, and a top-up payment system (QRIS, GoPay, Visa). Tested on my two toddlers first.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 78,
      "creativity": 88,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The project's strongest dimension is creativity, as it offers a novel approach to generating personalized coloring pages using AI, which is a unique take on both AI and children's entertainment. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat scattered description that lacks immediate clarity on the project's core functionality. The live URL's login wall limits usability, and while the execution is competent, the lack of visible UI keywords and a title mismatch slightly detract from its polish."
  },
  {
    "id": "3025778",
    "name": "QC+AI Studio — A Quantum Computing & AI Learning Platform Built with OpenAI Codex",
    "oneLineDescription": "QC+AI Studio — A Quantum Computing & AI Learning Platform Built with OpenAI Codex",
    "fullDescription": "QC+AI Studio is a full‑stack, hardware‑constrained quantum computing & AI learning studio grounded in a curated research corpus. I designed and built 11 modules, 12 lesson entry points, and 16 browser labs with source‑grounded Q&A, analytics dashboard, projects, arena, and microlearning builder using FastAPI, Next.js, Auth0, OpenAI Codex, and Pinecone.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 75,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for QC+AI Studio is execution, with a live URL returning a 200 status and a substantial page content length, indicating a well-developed platform. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that may hinder quick understanding. The project shows strong usefulness by targeting a niche audience in quantum computing and AI education, but the creativity score is limited by the lack of novel modalities or unique angles beyond the educational scope."
  },
  {
    "id": "3025735",
    "name": "AI Invoice Reader for SMB Retailers",
    "oneLineDescription": "AI Invoice Reader for SMB Retailers",
    "fullDescription": "SMB retailers often spend hours manually entering vendor invoices due to inconsistent formats, vendor-specific item codes, and UPC variations across suppliers and regions. The same product can appear with different identifiers or missing UPCs, making reconciliation slow and error-prone. I built an AI Invoice Reader demo to simulate this real-world problem, processing invoices in 30–45 seconds by extracting and structuring key fields such as item names, UPCs, quantities, and prices. The system i",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 72,
      "creativity": 80,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its usefulness, as it addresses a real problem for SMB retailers by automating invoice processing, which can save significant time and reduce errors. However, the weakest dimension is clarity, as the description lacks a concise one-line summary and is cut off, making it difficult to fully understand the scope and functionality of the project. The execution is limited by the lack of a live demo URL, with only a GitHub repository available, which impacts usability as well."
  },
  {
    "id": "3025678",
    "name": "(client) BackdoorCo — Your Local Verified Resale Marketplace",
    "oneLineDescription": "(client) BackdoorCo — Your Local Verified Resale Marketplace",
    "fullDescription": "BackdoorCo.xyz — Your Local Verified Resale Hub BackdoorCo is a modern, StockX‑inspired storefront built for local buyers and sellers who want real products, real verification, and real convenience. We connect the community with authentic retail goods—from sneakers and streetwear to electronics, collectibles, and everyday essentials—sourced directly from trusted local resellers.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 75,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for this project is execution, as it has a live URL with a 200 status and structured metadata, indicating a polished and potentially shippable product. However, the weakest dimension is clarity, as the description is sparse and lacks a one-line summary, making it difficult to quickly understand the project's scope and purpose. The presence of a login wall limits usability, as it prevents immediate user interaction without account creation."
  },
  {
    "id": "3025677",
    "name": "Ghosted",
    "oneLineDescription": "Ghosted",
    "fullDescription": "Visa-aware job intelligence platform with H-1B data, salary insights, company comparison, and prediction tools.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 80,
      "clarity": 68,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it combines visa data with job intelligence, offering a unique angle on employment insights. However, the weakest dimension is clarity, as the absence of a one-line summary and a structured description makes it difficult to quickly grasp the project's purpose. The artifact review indicates a login wall, which limits usability and execution scores, as the project cannot be fully accessed or evaluated without credentials."
  },
  {
    "id": "3025673",
    "name": "Medbdridge Afrik Ltd",
    "oneLineDescription": "Medbdridge Afrik Ltd",
    "fullDescription": "Description: Developed an accessible telehealth platform tailored for African users, leveraging Next.js for the frontend and NestJS for the backend. Collaborated closely with the team to design and build reusable components from scratch, ensuring scalability, performance, and a seamless user experience.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 72,
      "clarity": 65,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is usefulness, as it targets a real problem by providing a telehealth platform for African users, which is a concrete and valuable application. However, the weakest dimension is execution due to the lack of a working live URL, which severely limits the ability to assess the platform's current state and functionality. The description lacks clarity and structure, making it difficult to quickly understand the project's scope and impact."
  },
  {
    "id": "3025665",
    "name": "Teaching the benefits of AI",
    "oneLineDescription": "Teaching the benefits of AI",
    "fullDescription": "Taking the benefits of AI is a product that I made to teach people how to use and understand AI. This product is very simple and easy. Anyone can do this anyone can learn this all you have to do is do it",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 60,
      "creativity": 58,
      "clarity": 50,
      "usability": 55
    },
    "judgesNote": "The strongest dimension is execution, as the live URL returns a 200 status and has structured metadata, indicating some level of polish. However, the project lacks clarity, with no clear description or one-liner explaining what was built, and the page title does not match the project name. The usefulness is weak due to the absence of a defined target user or problem being solved, and the usability is limited by a likely login wall, preventing easy access to the product."
  },
  {
    "id": "3025596",
    "name": "DraftMyForms , AI Powered Document Template Platform",
    "oneLineDescription": "DraftMyForms , AI Powered Document Template Platform",
    "fullDescription": "Built a document template SaaS platform with 36,000+ templates as an LSU Mechanical Engineering student using Claude as my primary dev partner. Stack: Vercel, Supabase, Stripe, Resend, Anthropic API. Features include AI document generation, PDF and DOCX export, e-signature, document sharing, and a Writing Assistant. Used Claude for architecture, debugging, SEO strategy, and every feature build. Hit 3.9K views on Reddit within 2 hours of launch.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 92,
      "creativity": 80,
      "clarity": 75,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a detailed meta description indicating a robust platform. However, the clarity is weaker due to the absence of a one-line summary and a somewhat dense description that could be more structured. Usability is limited by the login wall, which restricts access to the platform's features without registration."
  },
  {
    "id": "3025595",
    "name": "FrameFindr - Instant Photo Discovery For Marathons",
    "oneLineDescription": "FrameFindr - Instant Photo Discovery For Marathons",
    "fullDescription": "FrameFindr is an event photo discovery platform that helps runners find race photos using bib-number and face search. After attending 20+ marathon events, I observed that participants want fast photo access for social sharing, which also gives organizers organic marketing. I designed the software architecture first, then built features iteratively with AI-assisted coding while personally verifying logic, integrations, and performance before moving to the next feature.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 80,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "The strongest dimension for FrameFindr is its usefulness, as it addresses a clear need for marathon participants to quickly access their event photos, benefiting both users and organizers. However, the clarity of the project is the weakest dimension due to the absence of a one-line summary and a somewhat unstructured description. The live URL is functional and matches the project theme, supporting strong execution, though the lack of visible UI keywords suggests a less user-friendly interface."
  },
  {
    "id": "3025565",
    "name": "Ecosphere Nexus",
    "oneLineDescription": "Ecosphere Nexus",
    "fullDescription": "Ecosphere Nexus transforms complex environmental data into powerful insights, helping architects and designers create innovative, energy-efficient, and sustainable projects for a smarter, greener future.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 82,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of Ecosphere Nexus is its creativity, as it aims to transform complex environmental data into actionable insights for architects and designers, which is a novel approach. However, the clarity is weak due to the absence of a one-line summary and a vague description that lacks specific details about the functionality. The execution and usability are limited by the lack of structured metadata and minimal UI keywords, indicating a potentially underdeveloped interface."
  },
  {
    "id": "3025548",
    "name": "Smart-Job-Application-Tracker",
    "oneLineDescription": "Smart-Job-Application-Tracker",
    "fullDescription": "A comprehensive Security Operations Center (SOC) dashboard built with React, TypeScript, and Vite, powered by Supabase backend and AI-driven analytics.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 75,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is execution, as it has a live URL that returns a 200 status, indicating a functional deployment. However, the weakest dimension is clarity, as there is no one-line summary and the description does not clearly explain the project's purpose or target users. The mismatch between the project name and the page title also adds to the confusion. Usability is limited due to the minimal interface signals and low keyword count."
  },
  {
    "id": "3025542",
    "name": "SOC-dashboard-AI-Analytics",
    "oneLineDescription": "SOC-dashboard-AI-Analytics",
    "fullDescription": "A comprehensive Security Operations Center (SOC) dashboard built with React, TypeScript, and Vite, powered by Supabase backend and AI-driven analytics.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 68,
      "usability": 72
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title, indicating a functional deployment. However, clarity is the weakest dimension as the project lacks a one-line summary and a detailed description, making it difficult to quickly understand the project's purpose and functionality. The low app keyword count and absence of structured metadata also impact usability and creativity scores."
  },
  {
    "id": "3025514",
    "name": "Verimuze Sources - The Editorial Command Center for Human World-Builders.",
    "oneLineDescription": "Verimuze Sources - The Editorial Command Center for Human World-Builders.",
    "fullDescription": "Built with Codex CLI, Verimuze Sources (beta) is an advanced command center for artists and editors. I engineered a sophisticated pipeline using Gemini-2.5-flash and Tavily for high-intent scouting, matching \"Creative DNA\" through Firestore vector embeddings. The technical core features a WebSocket-based audio proxy and asynchronous background tasks for non-blocking search. I mastered bridging multimodal AI with human intent, ensuring technology empowers rather than replaces the creator.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 85,
      "clarity": 65,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for this project is execution, as evidenced by a live URL with a 200 status and structured metadata, indicating a polished and shippable product. However, the weakest dimension is clarity, due to the absence of a one-line summary and a description that is heavy on technical jargon without clearly explaining the user benefits. The login wall limits usability, as it prevents immediate access to the interface, capping the score in that dimension."
  },
  {
    "id": "3025450",
    "name": "Daily Recovery Check-In App",
    "oneLineDescription": "Daily Recovery Check-In App",
    "fullDescription": "“I created this app as a daily recovery check-in tool designed to support individuals in building awareness, tracking progress, and staying encouraged. As someone working in the recovery field, I wanted to build something simple, accessible, and meaningful that could actually be used in real-life settings. The app includes mood tracking, journaling, a recovery date tracker, milestone recognition, and daily encouragement to support consistency and reflection.”",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 72,
      "clarity": 70,
      "usability": 68
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, the clarity is weak due to the absence of a one-line summary and structured description, making it difficult to quickly grasp the project's scope. Usability is limited by the lack of visible UI keywords, suggesting a less intuitive interface."
  },
  {
    "id": "3025434",
    "name": "Statera AI - The Smarter Way to Schedule Healthcare Staff",
    "oneLineDescription": "Statera AI - The Smarter Way to Schedule Healthcare Staff",
    "fullDescription": "Statera AI automates shift scheduling, predicts staffing shortages weeks ahead, tracks nurse burnout risk, and gives your staff a self-service portal — all in one intelligent platform built for healthcare.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 72,
      "creativity": 85,
      "clarity": 70,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it addresses a real problem in healthcare staffing with concrete features like shift scheduling and burnout tracking. The weakest dimension is usability, as the live site lacks visible UI elements and structured metadata, indicating a lack of a user-facing interface. The execution is also limited by the absence of a detailed live artifact, capping its potential score."
  },
  {
    "id": "3025401",
    "name": "24/7 Urgent Care website",
    "oneLineDescription": "24/7 Urgent Care website",
    "fullDescription": "A website where instant care can be booked 24/7 for various reasons from general medical to radiology. Makes it easy for patients to book appointments and connect with a doctor with no hassle whatsoever.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 68,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is usefulness, as it targets a real need for patients seeking urgent care appointments. However, the execution is weak due to the absence of a working live URL, which prevents any assessment of the site's functionality or user interface. Clarity is also lacking, with no one-line summary and a vague description that doesn't clearly outline the project's unique features or user journey."
  },
  {
    "id": "3025399",
    "name": "TeamPulse",
    "oneLineDescription": "TeamPulse",
    "fullDescription": "TeamPulse gives student teams one place to track ownership, align schedules, run weekly pulse checks, and keep the real state of the project visible. This site turns the blueprint into a working product prototype with live auth and a usable workspace. New accounts open with a starter board, invite link, schedule blocks, pulse data, and document hub. Try creating an account and login into the site and work on your team projects.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable prototype. However, clarity is the weakest due to the absence of a one-line summary and a somewhat vague description, which makes it difficult to quickly grasp the project's full scope and functionality. The lack of UI keywords suggests limited visible interface elements, impacting usability."
  },
  {
    "id": "3025329",
    "name": "A Multimodal Machine Learning Approach to Loan Default Prediction",
    "oneLineDescription": "A Multimodal Machine Learning Approach to Loan Default Prediction",
    "fullDescription": "• Built a multimodal ML framework combining financial, textual, and behavioral data from the Lending Club dataset for default risk prediction. • Engineered features including sentiment analysis, repayment behavior metrics, and debt-to-income ratios, training models such as Logistic Regression, KNN, Decision Tree, and Gradient Boosting. • Achieved targeted improvement in ROC-AUC (>0.70) through model ensembling, early fusion, and cross-validated hyperparameter tuning.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 70,
      "creativity": 85,
      "clarity": 68,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it employs a novel multimodal approach combining financial, textual, and behavioral data for loan default prediction. However, the weakest dimension is usability due to the lack of a live, interactive interface; the GitHub repository is behind a login wall, limiting direct user interaction. Execution is limited by the absence of a live, accessible application, capping its potential impact."
  },
  {
    "id": "3025328",
    "name": "AI Skills Analyser",
    "oneLineDescription": "AI Skills Analyser",
    "fullDescription": "I tried building an AI powered CLI tool that helps identify in demand skills using real job market data and AI. Tech stack: - Python for the core application - Groq API (LLaMA 3.1) for skills extraction - JSearch API for realtime job postings How it works: - You enter your target role and location - It fetches recent job postings - AI analyzes them to extract top skills - It compares against your resume (optional) - Generates personalized learning challenges",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 75,
      "creativity": 82,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it combines AI with real-time job data to offer personalized learning challenges, which is a novel approach. However, the clarity of the project is weak due to the absence of a one-line summary and a somewhat vague description. The execution is limited by the lack of a live, interactive URL; the GitHub repository suggests a CLI tool, but the login wall and lack of a direct interface cap usability."
  },
  {
    "id": "3025300",
    "name": "Food finder",
    "oneLineDescription": "Food finder",
    "fullDescription": "This website helps users find the cheapest food in the DFW area in TX. It helps users compare prices with all competing restaurants.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 70,
      "clarity": 60,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a 200 status and structured metadata, indicating a well-developed site. However, clarity suffers due to the absence of a one-line summary and a vague description, making it difficult to quickly grasp the project's purpose. Creativity is limited as the concept of comparing restaurant prices is not novel."
  },
  {
    "id": "3025298",
    "name": "Science and the Quran",
    "oneLineDescription": "Science and the Quran",
    "fullDescription": "This project explores the scientific references in the Quran, emphasizing how a text revealed in the 7th century presents descriptions that many find strikingly consistent with modern scientific discoveries, in a time when no contemporary instruments or technological tools existed. The primary aim of this project is to express my intellectual curiosity and invite broader discussion. This project was developed using Codex and Vercel.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 88,
      "creativity": 72,
      "clarity": 60,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is execution, as it has a live URL that returns a 200 status with a matching page title, indicating a shippable artifact. However, the weakest dimension is usefulness, as the project lacks a concrete target user or practical application, focusing instead on intellectual curiosity. Clarity is also a concern due to the absence of a one-line summary and structured metadata, making it harder to quickly grasp the project's purpose."
  },
  {
    "id": "3025193",
    "name": "Sovereign Sentinel: The On-Device Industrial Nervous System",
    "oneLineDescription": "Sovereign Sentinel: The On-Device Industrial Nervous System",
    "fullDescription": "Sovereign Sentinel is an offline 3-agent Edge AI pipeline (SEE/ACT/AUDIT). I built it to provide private, real-time spatial reasoning for warehouse safety, identifying pests or leaks without cloud latency. Using PaliGemma 2 and MLX/Ollama, I achieved 24 ms vision latency. I orchestrated FunctionGemma for SQL-based SKU quarantine and integrated a 1B Gemma watchdog for safety, optimizing the system to run at 15.4% CPU usage.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 72,
      "creativity": 90,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The project's strongest dimension is creativity, with its novel approach to offline, real-time spatial reasoning for warehouse safety using an Edge AI pipeline. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that may be difficult for a quick understanding. The artifact review indicates a GitHub repository with a login wall, limiting usability and execution scores despite the presence of structured metadata and a substantial page content length."
  },
  {
    "id": "3025139",
    "name": "SignalDeck",
    "oneLineDescription": "SignalDeck",
    "fullDescription": "SignalDeck converts plain‑English trading goals into structured stock scans. Users describe their intent, and the system returns a filterable list of stocks. The demo uses a curated universe and slow refresh due to free‑tier market‑data limits. But it is possible that future additions of higher-performance paid API will cover the entire US market, supporting historical back testing and custom model training. Authentication is currently limited to email and Google sign‑in.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 82,
      "clarity": 65,
      "usability": 55
    },
    "judgesNote": "SignalDeck's strongest dimension is creativity, as it offers a novel approach to translating trading goals into actionable stock scans, which is not commonly seen. However, the weakest dimension is execution due to the lack of a working live URL, which severely limits the ability to assess the project's current shippability and usability. Without a functional artifact, execution and usability scores are capped, reflecting the project's incomplete state."
  },
  {
    "id": "3025049",
    "name": "Player EV Decision Engine",
    "oneLineDescription": "Player EV Decision Engine",
    "fullDescription": "Player EV Decision Engine is a data-driven tool that models expected value (EV) and tier progression in the Carnival casino ecosystem using community-sourced data. Built with Python and Streamlit, it helps players decide if chasing the next tier is worth it. Codex accelerated development and debugging. While variables like THEO are unavailable, the model delivers strong directional insights into player value.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 55,
      "creativity": 72,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it attempts to model expected value in a niche domain using community-sourced data, which is a novel approach. However, the execution is weak due to the lack of a working live URL, which severely limits the ability to assess the tool's functionality and usability. The absence of a one-line summary and a clear description further impacts clarity, making it difficult to quickly understand the project's purpose and scope."
  },
  {
    "id": "3025046",
    "name": "Ribix - AI Native Bug Hunter",
    "oneLineDescription": "Ribix - AI Native Bug Hunter",
    "fullDescription": "Ribix is a workflow-native GitHub App that enriches incoming bug reports with code context, likely cause, severity, and ownership guidance so teams can move from \"bug filed\" to \"bug assigned\" in minutes instead of hours.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 82,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for Ribix is its usefulness, as it targets a clear user base (engineering teams) with a practical solution for bug report management. Execution is also strong due to a live URL with a detailed page, though the login wall limits usability. Clarity is the weakest dimension, as the absence of a one-line summary and a somewhat dense description make it harder to quickly grasp the project's core functionality."
  },
  {
    "id": "3025000",
    "name": "CragScore",
    "oneLineDescription": "CragScore",
    "fullDescription": "CragScore is a website dedicated to finding and reviewing rock climbing gyms anywhere in the world (still working on that). This website will serve as a place for climbers of any level to get ratings and reviews written for climbers, by climbers. This is a demo version.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 75,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for CragScore is its usefulness, as it targets a specific user group—rock climbers—by providing a platform for gym reviews. However, the weakest dimension is clarity, due to the absence of a one-line summary and a sparse description that lacks structured detail. The artifact review shows a live URL with a matching title, but the lack of structured metadata and UI keywords suggests limited execution and usability."
  },
  {
    "id": "3024974",
    "name": "Threat Station 86.",
    "oneLineDescription": "Threat Station 86.",
    "fullDescription": "Live multi-source threat intelligence dashboard pulling real-time data from URLHaus, CISA KEV, ThreatFox, AlienVault OTX, and Feodo Tracker. Features AI-generated analyst briefings, anomaly detection, interactive filtering, pulse charts, and Excel/PDF exports. Built with Python, pandas, and Streamlit. Source code: https://github.com/L4Ng0dd3ssHQ/threat-data-pipeline",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 92,
      "creativity": 85,
      "clarity": 70,
      "usability": 90
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. Usefulness is also strong due to the concrete target users in cybersecurity and the practical features like real-time data and exports. Clarity is the weakest dimension, as the absence of a one-line summary and a structured description makes it harder to quickly grasp the project's scope and impact."
  },
  {
    "id": "3024929",
    "name": "Tax LLM",
    "oneLineDescription": "Tax LLM",
    "fullDescription": "Built Tax LLM, an authenticated, matter-based transactional tax workspace that turns deal facts and documents into issue buckets, retrieved authority, structural alternatives, and a first-pass memo. I built it to make structure analysis more rigorous and reusable for deal work. I used OpenAI Codex as the coding agent to plan, write, refactor, test, and deploy the app across the stack.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a matching title and structured metadata, indicating a well-developed product. However, clarity is the weakest dimension as the description lacks a one-line summary and is somewhat jargon-heavy, making it difficult to quickly grasp the project's purpose. The login wall limits usability, capping it at 65."
  },
  {
    "id": "3024888",
    "name": "Afrolingo — AI Language Tutor for African Languages",
    "oneLineDescription": "Afrolingo — AI Language Tutor for African Languages",
    "fullDescription": "Afrolingo is an AI-powered platform for learning 15 African languages—Yoruba, Igbo, Hausa, Swahili, Zulu and more—via conversational AI tutoring, structured lessons, and authentic text-to-speech. African languages are massively underserved; most apps cover 1-3 at best. The AI tutor chats entirely in the target language with auto-translation, phonetic guides, and cultural notes. TTS uses Meta MMS models for native-quality pronunciation. Built with React 19 + FastAPI, using AI tools throughout.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 90,
      "execution": 88,
      "creativity": 85,
      "clarity": 80,
      "usability": 75
    },
    "judgesNote": "The strongest dimension for Afrolingo is usefulness, as it addresses a clear gap in language learning apps by focusing on underserved African languages. Execution is strong with a live URL returning a 200 status and structured metadata, although the title mismatch slightly detracts. The weakest area is usability, as the absence of visible UI keywords suggests a lack of direct user interface elements, which limits user interaction despite the functional site."
  },
  {
    "id": "3024880",
    "name": "Dynamic Data Storytelling Engine",
    "oneLineDescription": "Dynamic Data Storytelling Engine",
    "fullDescription": "Dynamic Data Storytelling Engine is a schema-agnostic prototype that helps users upload structured data, PDFs, Word docs, and images, then identifies missing values, duplicates, invalid entries, suspicious records, and safely cleans reversible issues. I built it to make messy data easier to understand and trust. I used Codex to design the UI and implement parsing, profiling, issue detection, and the cleaning workflow.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a matching title and structured metadata, indicating a well-developed prototype. However, clarity is the weakest dimension as the description lacks a concise one-liner and is somewhat jargon-heavy, making it harder to quickly grasp the project's purpose. The project shows creativity in its schema-agnostic approach and multi-format data handling, but usability is limited by a low app keyword count, suggesting a less intuitive interface."
  },
  {
    "id": "3024878",
    "name": "crag",
    "oneLineDescription": "crag",
    "fullDescription": "Ingest any repository, ask questions in natural language, get answers grounded in your actual code. No GPU, no model downloads, no ML setup required. This was built using Codex aswell as Claude Code. There is support or AI supported exploration built in. This was for me to understand unfamiliar codebases based on simple principles right in my terminal.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 75,
      "creativity": 78,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it offers a novel approach to exploring codebases using natural language queries without requiring complex ML setups. However, the clarity is weak due to the absence of a one-line summary and a vague description that lacks structured explanation. The execution and usability are limited by the login wall on the GitHub page, which prevents direct interaction with the tool, capping usability at 55."
  },
  {
    "id": "3024849",
    "name": "NextBite | Practical Next-Meal Help",
    "oneLineDescription": "NextBite | Practical Next-Meal Help",
    "fullDescription": "NextBite is a bilingual meal decision helper designed for U.S.-based Chinese users with mixed everyday eating habits. I designed and built this React MVP to turn daily meal logs, 7-day eating patterns, personal preferences, and convenience needs into practical next-meal recommendations. The project highlights product thinking, front-end development, bilingual UX, and rule-based recommendation design without relying on a backend or calorie-counting model.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 82,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it offers a bilingual meal decision helper tailored for a specific user group, which is a novel approach. However, the weakest dimension is clarity, as the absence of a one-line summary and a somewhat dense description make it challenging to quickly grasp the project's core functionality. The execution is limited by the lack of a live, interactive product; the URL leads to a case study rather than a functional app, capping usability and execution scores."
  },
  {
    "id": "3024838",
    "name": "Spatial Analysis of Retail Accessibility in Los Angeles",
    "oneLineDescription": "Spatial Analysis of Retail Accessibility in Los Angeles",
    "fullDescription": "This project explores the spatial distribution of Nike retail stores in Los Angeles and their relationship to major road networks. The goal was to assess whether store locations are strategically placed along high-access transportation corridors to maximize visibility and customer accessibility. Using ArcGIS Pro and ArcGIS Online, I integrated multiple spatial datasets, including major roads from the LA GeoHub and geocoded store locations.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 72,
      "creativity": 75,
      "clarity": 60,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its execution, as it provides a live map viewer URL that returns a 200 status, indicating a functional artifact. However, the clarity is weak due to the absence of a one-line summary and a structured description, making it difficult to quickly grasp the project's purpose and scope. Additionally, the usability is limited by the lack of visible UI keywords and structured metadata, which suggests a lack of user interface elements."
  },
  {
    "id": "3024798",
    "name": "Course Connect",
    "oneLineDescription": "Course Connect",
    "fullDescription": "For Software Design (6.1040), my three teammates and I built a web application that helps MIT students coordinate the classes they plan on taking with friends., as back-and-forth messaging to see what classes one's friends are taking is more tedious. We utilized Github Copilot to iterate on the frontend using the Vue framework, Gemini models and Obsidian for LLM context management and building the backend, and MongoDB for database management.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 72,
      "clarity": 65,
      "usability": 68
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a matching title and no login wall, indicating a shippable product. However, the lack of structured metadata and minimal content length suggest limited polish. Clarity is the weakest dimension, as the description lacks a one-line summary and is somewhat fragmented, making it harder to quickly grasp the project's purpose and functionality."
  },
  {
    "id": "3024773",
    "name": "American Health Atlas",
    "oneLineDescription": "American Health Atlas",
    "fullDescription": "American Health Atlas (AHA) is a U.S. County and State data visualizer and aggregator. A fun tool for visualizing geographical data trends.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 75,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title, indicating a functional deployment. However, the clarity is the weakest aspect, as there is no one-line summary or structured description to quickly convey the project's purpose and functionality. The lack of structured metadata and low app keyword count also suggest limited usability and interface depth."
  },
  {
    "id": "3024743",
    "name": "GM Recall - How many chess openings do you remember?",
    "oneLineDescription": "GM Recall - How many chess openings do you remember?",
    "fullDescription": "Can you name the chess opening? Watch the moves, type the opening, hit Enter.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 85,
      "creativity": 80,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a detailed page content length, indicating a functional site. However, clarity is the weakest due to the absence of a one-line summary and a somewhat vague description that doesn't clearly explain the user interaction or purpose. The project is creative in its approach to testing chess knowledge but lacks a clear target user or practical application, affecting its usefulness score."
  },
  {
    "id": "3024719",
    "name": "GitHired",
    "oneLineDescription": "GitHired",
    "fullDescription": "Do you use GitHub boards to apply for internships? This Chrome Extension tracks job applications on GitHub and Google job boards. Key Features: -Tri-State Tracking: Easily mark jobs as 'Applied', 'Skipped', or 'Pending' directly within the job board. - Visual Clarity: Applied roles are instantly highlighted, - Automatic Sync: Your application statuses are saved locally, ensuring your progress is always tracked even if you refresh",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL on the Chrome Web Store, indicating a shippable product. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is not well-structured, making it difficult to quickly understand the project's purpose. The login wall likely limits usability, capping it at 65."
  },
  {
    "id": "3024696",
    "name": "NEST+m Senior College Destinations 🦅",
    "oneLineDescription": "NEST+m Senior College Destinations 🦅",
    "fullDescription": "A map of where my high school, NEST+m, seniors went to college ranging from '21 to '26.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 88,
      "creativity": 68,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest dimension is execution, with a live URL returning a 200 status and a substantial page content length, indicating a fully developed site. However, the weakest dimension is usefulness, as the project lacks a clear target user beyond a specific high school community, limiting its broader applicability. Clarity is also weak due to the absence of a one-line summary and a vague description that doesn't clearly convey the project's purpose or functionality."
  },
  {
    "id": "3024694",
    "name": "Metro Memory",
    "oneLineDescription": "Metro Memory",
    "fullDescription": "Challenge yourself to remember the stations of your city's metro. How well do you think know your city's metro system? The goal is simple. Type as many of the stations as you can remember, and see them pop up on the map. No time limit. If you do well, there might be some confetti involved—and achievements to celebrate it.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 88,
      "creativity": 68,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "The strongest dimension for Metro Memory is execution, with a live URL that returns a 200 status and a matching page title, indicating a shippable product. However, the weakest dimension is usefulness, as the project lacks a clear target user or practical application beyond a simple memory challenge, which limits its real-world impact. Clarity is also weak due to the absence of a one-line summary and a vague description that doesn't fully explain the user experience or benefits."
  },
  {
    "id": "3024686",
    "name": "Lumora",
    "oneLineDescription": "Lumora",
    "fullDescription": "Lumora is a high-performance analytics platform that enables non-technical users to gain instant insights from spreadsheets through natural language. I built it to bridge the gap between complex raw data and actionable intelligence, allowing users to ask questions in plain English rather than writing complex formulas or SQL. I developed the application using Next.js for the frontend visualization engine and FastAPI for the backend. To achieve sub-second response times, I integrated DuckDB for r",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 88
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. The weakest dimension is clarity, as the absence of a one-line summary and a somewhat vague description make it harder to quickly grasp the project's purpose. The project is useful for non-technical users needing data insights, and the integration of natural language processing is a creative approach."
  },
  {
    "id": "3024671",
    "name": "Soul Surgery Sunday",
    "oneLineDescription": "Soul Surgery Sunday",
    "fullDescription": "Soul Surgery Sunday is an AI-powered self-reflection app available only on Sundays. Users answer guided questions, then GPT-4o analyzes patterns across their session history. No advice, just observation. I built it because mental health apps demand too much or give too little. The Sunday only constraint makes reflection a ritual, not a chore. Built solo with AI-assisted dev across NestJS, React Native, and PostgreSQL.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 92,
      "creativity": 85,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and matching project title, indicating a shippable product. The weakest dimension is clarity, as the absence of a one-line summary and a somewhat vague description make it challenging to quickly grasp the project's purpose. The creativity score benefits from the unique 'Sunday only' constraint, which adds a novel ritualistic element to the self-reflection app."
  },
  {
    "id": "3024640",
    "name": "Youtube Comment Assistant App",
    "oneLineDescription": "Youtube Comment Assistant App",
    "fullDescription": "Reply to YouTube comments faster while keeping full human control. An AI-powered backend that fetches, classifies, drafts, and manages YouTube comment replies — with a human approval step before publishing. Built with Python, FastAPI, YouTube OAuth, Guardrail, and OpenAI.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 80,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The project's strongest dimension is creativity, as it offers a novel approach to managing YouTube comments with AI and human oversight. However, clarity is the weakest dimension due to the absence of a one-line summary and a structured description, making it difficult to quickly grasp the project's purpose. The artifact review indicates a login wall, which limits usability, and the lack of a live URL further constrains execution potential."
  },
  {
    "id": "3024625",
    "name": "Generate Social Media Post Ideas",
    "oneLineDescription": "Generate Social Media Post Ideas",
    "fullDescription": "An AI-powered FastAPI service that generates high-quality social media post ideas based on a given business or product description. The system leverages LLMs to transform raw input into structured, engaging, and platform-ready content ideas",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 60,
      "creativity": 70,
      "clarity": 55,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it attempts to leverage AI to generate social media content ideas, which is a novel application. However, the weakest dimension is clarity, as the description lacks a one-line summary and is vague about the specific functionalities and user benefits. The artifact review indicates a GitHub repository rather than a live service, with a login wall likely, which limits execution and usability scores."
  },
  {
    "id": "3024618",
    "name": "AI Leasing Chatbot Agent",
    "oneLineDescription": "AI Leasing Chatbot Agent",
    "fullDescription": "Developed an AI-driven conversational system to automate apartment leasing inquiries, lead qualification, and data capture using Botpress. Integrated the AI assistant with Make.com workflows, webhooks, Google Sheets, and Gmail to enable real-time data ingestion, automated notifications.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 72,
      "clarity": 65,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and a substantial page content length, indicating a functional deployment. However, clarity is the weakest dimension as the description lacks a concise one-line summary and structured explanation, making it difficult to quickly grasp the project's scope and functionality. The project shows potential usefulness for automating leasing inquiries but lacks distinct creativity beyond integrating existing tools."
  },
  {
    "id": "3024606",
    "name": "HR Dashboard Proejct",
    "oneLineDescription": "HR Dashboard Proejct",
    "fullDescription": "HR Website Made with Python https://github.com/vaughnderricktbr/HRDashboardProject.git",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 65,
      "clarity": 55,
      "usability": 70
    },
    "judgesNote": "The strongest dimension for this project is execution, as the live URL returns a 200 status with a matching page title, indicating a functional deployment. However, the weakest dimension is clarity due to the absence of a one-line summary and a vague description that fails to convey the project's purpose or target users. The project lacks structured metadata and has minimal UI keywords, which affects usability and creativity scores."
  },
  {
    "id": "3024555",
    "name": "Tradehook",
    "oneLineDescription": "Tradehook",
    "fullDescription": "Advanced machine learning and AI systems working 24/7 to optimize your trading performance 1 Learn AI analyzes your trades, strategies, and market patterns to understand your edge 2 Optimize Continuously tunes parameters and adapts to changing market regimes 3 Evolve Self-improves over time, getting smarter with every trade executed",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 72,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a matching page title and sufficient content length, indicating a functional site. However, the lack of structured metadata and UI keywords suggests limited usability and polish. Clarity is the weakest dimension, as the description is vague and lacks a concise one-line summary, making it difficult to quickly understand the project's purpose and functionality."
  },
  {
    "id": "3024548",
    "name": "magiccastle",
    "oneLineDescription": "magiccastle",
    "fullDescription": "Magic Castle Entertainment is a global creative powerhouse specializing in music, film, art, advertising, publishing, and artist management. We shape culture through the power of artistry—connecting creators, brands, and audiences through unforgettable experiences. With a full in‑house production team and a decade of industry expertise, we deliver world‑class creative solutions across visual media, digital platforms, and entertainment. From concept development to final production, we approach e",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 68,
      "creativity": 60,
      "clarity": 50,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is execution, as the live URL returns a 200 status and contains a substantial amount of content, indicating a developed site. However, the weakest dimension is clarity; the description is vague and lacks a concise summary of what the project specifically offers or does, making it difficult to understand its purpose quickly. Additionally, the lack of structured metadata and minimal UI keywords suggest limited usability and polish."
  },
  {
    "id": "3024512",
    "name": "Lens",
    "oneLineDescription": "Lens",
    "fullDescription": "Lens is an AI-powered media bias detector built for anyone who wants to read the news more critically. Paste any article URL or text and Lens instantly analyzes it using GPT-4o — detecting left and right leaning language, scoring emotional intensity, grading source credibility, and surfacing perspectives the article left out. Biased phrases are highlighted inline in red and blue so you can see exactly where the framing happens. A dual bias meter shows separate Democrat and Republican lean scores",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 90,
      "clarity": 72,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for this project is creativity, as it offers a novel approach to media bias detection with features like inline bias highlighting and dual bias meters. Execution is also strong, with a live URL that matches the project title and a substantial page content length, indicating a developed product. However, clarity is the weakest dimension due to the absence of a one-line summary and a less structured description, which makes it harder to quickly grasp the project's purpose and functionality."
  },
  {
    "id": "3024486",
    "name": "Synced",
    "oneLineDescription": "Synced",
    "fullDescription": "Synced is an AI-powered student life planner that connects your Canvas assignments, sports schedule, and todos into one place. Built with OpenAI Codex, it uses natural language chat (\"add lacrosse every Tuesday at 6pm\"), photo import to scan printed schedules, and Canvas iCal sync to keep everything updated automatically. Includes streaks, XP, and daily progress tracking to keep you motivated all semester.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for Synced is execution, with a live URL returning a 200 status and a matching page title, indicating a shippable product. Usefulness is also strong, targeting students with a practical solution for organizing their schedules. However, clarity is the weakest dimension due to the absence of a one-line summary and a lack of structured metadata, which makes it harder to quickly grasp the project's scope and features."
  },
  {
    "id": "3024444",
    "name": "The Persistent Memory Logic Loop (PMLL)",
    "oneLineDescription": "The Persistent Memory Logic Loop (PMLL)",
    "fullDescription": "An MCP tool for agents like Codex and Claude when using copilot to help in reducing memory cost overhead due to backend tools being redundantly called up by the model. Officially In the MCP registries outside of Pypi.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 72,
      "creativity": 75,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its execution, as it has a live URL with a 200 status code and a substantial page content length, indicating a functional deployment. However, the weakest dimension is clarity, as the description is sparse and lacks a one-line summary, making it difficult to quickly understand the project's purpose and functionality. The absence of structured metadata and UI keywords also impacts usability and clarity."
  },
  {
    "id": "3024391",
    "name": "SharkTank Pitching Deck",
    "oneLineDescription": "SharkTank Pitching Deck",
    "fullDescription": "Pitch your business idea to 3 AI agents with different personalities who will grill you and provide expert feedback. Voice Integrated, Gamified. Try to get an offer if you can.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 60,
      "creativity": 78,
      "clarity": 55,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, with a novel concept of pitching to AI agents with different personalities. However, the weakest dimension is clarity, as the description lacks a one-line summary and structured explanation of the project. The execution and usability are limited by the lack of a live interactive product; the artifact is a YouTube video, not a functional app, which caps these scores."
  },
  {
    "id": "3024323",
    "name": "Social Enterprise Career Explorer",
    "oneLineDescription": "Social Enterprise Career Explorer",
    "fullDescription": "Discover your impact career - all in one place. The SE Career Explorer is a curated platform connecting students with hundreds of mission-driven organizations across sectors, regions, and causes. Filter, explore, and save opportunities that match your values. Ready to find where business meets purpose? Start exploring.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 78,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat vague description that lacks structured detail. The project could improve usability by enhancing the interface, as indicated by the low app keyword count."
  },
  {
    "id": "3024300",
    "name": "AI-powered visual fashion search app - SearchOutfit.com",
    "oneLineDescription": "AI-powered visual fashion search app - SearchOutfit.com",
    "fullDescription": "Built and launched SearchOutfit, an AI-powered visual fashion search app that turns Instagram posts and screenshots into detected outfit items and shoppable product matches. Engineered the full product stack with React, Supabase Edge Functions, AI image analysis, multi-image Instagram extraction, market-aware merchant ranking, analytics, and magic-link authentication.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 92,
      "creativity": 85,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a detailed page with structured metadata, indicating a well-developed product. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks immediate clarity on the user experience and benefits. The project is useful for fashion enthusiasts and shoppers, but the usability score is slightly reduced due to a low app keyword count, suggesting limited visible interface elements."
  },
  {
    "id": "3024293",
    "name": "Gift Genie",
    "oneLineDescription": "Gift Genie",
    "fullDescription": "Genie simplifies gift-giving by helping you quickly find thoughtful presents without endless scrolling or second-guessing. Just choose the occasion, age, and relationship, and get relevant ideas that make sense. Its “vibe check” (Emotion Selector) adds a personal touch, tailoring gifts to moods like celebration or comfort. Built with HTML, CSS, and JavaScript, it runs in your browser with no sign-ups, just instant, meaningful inspiration anytime.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 68,
      "usability": 75
    },
    "judgesNote": "The strongest dimension for Gift Genie is execution, as it has a live URL with a functioning page, although the title does not match the project name exactly. The weakest dimension is clarity, due to the absence of a one-line summary and a somewhat vague description that lacks structured detail. The project shows creativity with its 'vibe check' feature, but usability is limited by minimal UI keywords, suggesting a less developed interface."
  },
  {
    "id": "3024289",
    "name": "Zcrafter the Ai platform for mainframe development",
    "oneLineDescription": "Zcrafter the Ai platform for mainframe development",
    "fullDescription": "Zcrafter to democratize mainframe intelligence to make it open and make it last longer than the decades before it. We made it so that everyone can look at mainframe programming and make it as intuitive as any other language.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 90,
      "creativity": 82,
      "clarity": 65,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a matching title and comprehensive page content, indicating a well-developed platform. However, clarity is the weakest dimension as the description lacks a concise summary and structured explanation, making it difficult to quickly understand the project's purpose. The absence of UI keywords suggests limited immediate usability for end users."
  },
  {
    "id": "3024277",
    "name": "AI Resume Analyser",
    "oneLineDescription": "AI Resume Analyser",
    "fullDescription": "An AI-powered web app that helps job seekers check if their resume matches a job description, see where they fall short, and get actionable suggestions to improve before applying. Built from personal experience in my finals in BYUI, where I struggled knowing if my resume was good enough for roles I was applying to. Technically built with React 19, React Router v7, TypeScript, Puter.js for serverless AI and auth, pdfjs-dist for PDF parsing, Zustand for state management, Tailwind CSS, Vercel.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 82,
      "creativity": 75,
      "clarity": 65,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and a content length suggesting a functional page. However, the lack of structured metadata and UI keywords indicates a need for more polish. Clarity is the weakest dimension as the description lacks a concise one-liner and the project title doesn't match the page title, making it harder to quickly grasp the project's purpose."
  },
  {
    "id": "3024257",
    "name": "WasteNotChef - AI-powered meal planning from your fridge",
    "oneLineDescription": "WasteNotChef - AI-powered meal planning from your fridge",
    "fullDescription": "WasteNotChef helps people reduce food waste by turning fridge ingredients into recipes, weekly meal plans, and smarter cooking decisions. As users look for more practical AI assistance in everyday life, WasteNotChef combines fridge scanning, pantry editing, recipe ranking, planning workflows, and in-app AI guidance to make home cooking more efficient and intentional.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 78,
      "creativity": 82,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for WasteNotChef is its usefulness, as it addresses a real problem of food waste with a practical solution for home cooks. However, the clarity of the project is weak due to the absence of a one-line summary and a somewhat vague description. The execution is limited by the lack of structured metadata and minimal content on the live site, which also affects usability, as there is no visible interface or app keywords."
  },
  {
    "id": "3024235",
    "name": "Charcoal.md",
    "oneLineDescription": "Charcoal.md",
    "fullDescription": "A web based markdown note taking app inspired by Obsidian. For those who don't wish to pay for Obsidian sync or for those who can't install desktop apps and prefer a webapp instead.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 65,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for Charcoal.md is execution, as it has a live URL that returns a 200 status with a matching page title. However, the page lacks structured metadata and has minimal content, indicating limited polish. The weakest dimension is clarity, due to the absence of a one-line summary and a sparse description that fails to clearly convey the app's functionality and target audience. Usability is also limited by the lack of visible UI elements on the page."
  },
  {
    "id": "3024225",
    "name": "Nymbus: One place for your entire job search.",
    "oneLineDescription": "Nymbus: One place for your entire job search.",
    "fullDescription": "Job hunting is stressful enough, keeping track of where you applied shouldn't make it worse. After drowning in messy spreadsheets and losing track of applications, I built Nymbus: a clean, responsive job application tracker that actually makes the process feel manageable. Built with Claude as my AI co-developer, Nymbus lets job seekers log applications, track statuses, and stay on top of follow-ups, all in a beautiful interface spreadsheets could never match.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 75,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and structured metadata, indicating a polished and potentially shippable product. However, the project lacks a one-line summary and the description is somewhat vague, impacting clarity. Usability is limited by the login wall, which prevents full access to the interface without signing up."
  },
  {
    "id": "3024160",
    "name": "Lumon: A visual layer for your AI agents",
    "oneLineDescription": "Lumon: A visual layer for your AI agents",
    "fullDescription": "Lumon is a visual supervision layer for AI agents that shows what they’re doing online and lets you step in when needed. I built it to make agents easier for non-technical people to use and to give them personality through stateful sprites. It’s built with FastAPI, React/Vite, WebSockets, and a Playwright-based browser runtime attached to your OpenCode sessions using spec-driven development and Codex.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 82,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for Lumon is creativity, as it introduces a novel concept of a visual supervision layer for AI agents, which is not commonly seen. However, the weakest dimension is clarity, as the absence of a one-line summary and a somewhat vague description make it difficult to quickly grasp the project's purpose and functionality. The artifact review shows a live URL with a matching title, but the lack of structured metadata and UI keywords suggests limited usability and execution polish."
  },
  {
    "id": "3024159",
    "name": "Study Focus - AI powered Focus Study Website that helps you stay on track with assignment",
    "oneLineDescription": "Study Focus - AI powered Focus Study Website that helps you stay on track with assignment",
    "fullDescription": "I built this so students could focus on their assignment rather than doomscrolling and wasting time. I believe that having the discpline and motivation to lock in and actually do your work is important which is why I created this website. Still needs updates.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 60,
      "creativity": 65,
      "clarity": 55,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its usefulness, as it targets a real problem faced by students: staying focused on assignments. However, the execution is weak due to the lack of a matching page title and absence of structured metadata, which suggests a lack of polish. Clarity is the weakest dimension, as the description is vague and lacks a one-line summary, making it difficult to quickly understand the project's purpose and functionality."
  },
  {
    "id": "3024147",
    "name": "LENSD",
    "oneLineDescription": "LENSD",
    "fullDescription": "LENSD is an AI-powered creative shoot planner for photographers and content creators, built by LeVar Hage from East Carolina University. Enter any city and pick your vibe — Urban Grit, Golden Hour, Soft & Dreamy, or Nature Escape — and LENSD instantly generates shoot locations, outfit ideas, a photo + TikTok/Reels shot list, and platform-ready captions. Built for the next generation of visual storytellers. Built with Codex.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 92,
      "creativity": 90,
      "clarity": 80,
      "usability": 78
    },
    "judgesNote": "Execution is the strongest dimension for LENSD, with a live URL that returns 200 and a matching page title, indicating a well-deployed and accessible application. Creativity is also strong, as the project offers a novel AI-powered solution for photographers with unique features like vibe-based location suggestions and platform-ready captions. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description, which could hinder quick understanding."
  },
  {
    "id": "3024144",
    "name": "Economics Budgeting and cash flow flashcards",
    "oneLineDescription": "Economics Budgeting and cash flow flashcards",
    "fullDescription": "This project is a lightweight flashcard study website built from my economics budgeting notes. It helps users review key topics such as sales forecasting, cash collections, gross profit, expenses, inventory planning, cash budgeting, and financing through interactive digital flashcards. The website includes features like card flipping, next/previous navigation, shuffle, topic filtering, search, and progress tracking to make studying faster and more organized before a test.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 55,
      "creativity": 72,
      "clarity": 70,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it offers a novel approach to studying economics through interactive flashcards with features like topic filtering and progress tracking. However, the weakest dimension is execution, as there is no working live URL, which significantly limits the ability to assess the project's current state and usability. Without a functional artifact, both execution and usability are capped at low scores."
  },
  {
    "id": "3024070",
    "name": "Steady Study",
    "oneLineDescription": "Steady Study",
    "fullDescription": "Ever struggle with ADHD, dyslexia, or processing-speed while reading your course textbooks? Well, this project helps with just that! Steady Study is built with learning disabilities in mind to break your reading into more manageable study chunks.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for Steady Study is execution, with a live URL that returns a 200 status and a matching page title, indicating a shippable product. The weakest dimension is clarity, as the project lacks a one-line summary and the description is somewhat vague, making it harder to quickly grasp the project's full scope. The project is useful for students with learning disabilities, addressing a real need, but the usability could be improved with more visible UI elements."
  },
  {
    "id": "3024067",
    "name": "Unknown Photography",
    "oneLineDescription": "Unknown Photography",
    "fullDescription": "UNKNOWN is more than a photography website, it’s a space built to capture real energy, real moments, and real stories. I created this platform to showcase my vision through photography. Raw, unfiltered, and true to the environments I step into. From street scenes to nightlife, every image represents a moment that can’t be recreated, only experienced. This is where art meets reality. Stay unknown. Stay unforgettable.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 88,
      "creativity": 72,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a substantial page content length, indicating a functional site. However, the weakest dimension is usefulness, as the project lacks a clear target user or problem-solving focus, making it difficult to assess its practical impact. The description is vague and lacks a one-line summary, which affects clarity."
  },
  {
    "id": "3024060",
    "name": "Food Scout",
    "oneLineDescription": "Food Scout",
    "fullDescription": "Smart Food Discovery Agent is an AI food-and-travel guide: you pick a place on an interactive globe, and it answers with short, curated tips on local food, nearby restaurants, and (when relevant) deeper restaurant context.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 85,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and having a substantial content length, indicating a functional product. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is somewhat vague, making it difficult to quickly grasp the project's purpose. The creativity score is bolstered by the novel use of an interactive globe for food discovery."
  },
  {
    "id": "3024055",
    "name": "Lung cancer prediction",
    "oneLineDescription": "Lung cancer prediction",
    "fullDescription": "It was predicting lung cancer using machine leaning models like logistic regression, random forest etc",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 55,
      "creativity": 65,
      "clarity": 55,
      "usability": 55
    },
    "judgesNote": "The strongest dimension is usefulness, as predicting lung cancer is a significant real-world problem. However, the execution is weak due to the mismatch between the project description and the live URL, which references stroke prediction instead of lung cancer. Additionally, the presence of a login wall and error page signals further hinder usability and execution, capping them at 55."
  },
  {
    "id": "3024054",
    "name": "Six Degrees",
    "oneLineDescription": "Six Degrees",
    "fullDescription": "To build true connections that will help everyone be connected based on the theory called 6 degrees of separation.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 75,
      "clarity": 55,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching title and structured metadata, indicating a well-deployed project. However, clarity is the weakest dimension as the description is vague and lacks a one-line summary, making it difficult to understand the project's purpose quickly. The project has potential usefulness but lacks specific user targeting, which affects its overall impact."
  },
  {
    "id": "3024024",
    "name": "Victora AI - Full AI UGC Platform",
    "oneLineDescription": "Victora AI - Full AI UGC Platform",
    "fullDescription": "I built Victora AI because most ad teams are still doing creative the hard way. It pulls together customer language, competitor positioning, Reddit conversations, and ad research into one place, then uses that to help generate angles, hooks, scripts, storyboards, and eventually the creative assets themselves. I wanted something that could help bridge the gap between what the market is saying and what you should actually make next. That’s what Victora is. Still early, but the direction is clear",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 85,
      "clarity": 68,
      "usability": 60
    },
    "judgesNote": "The project's strongest dimension is creativity, as it attempts to integrate multiple data sources to enhance ad creation, which is a novel approach. However, the weakest dimension is clarity, as the description lacks a concise one-liner and the purpose is not immediately clear. The execution is limited by the lack of a matching page title and minimal content length, indicating a less developed live site."
  },
  {
    "id": "3023977",
    "name": "Keydealnetwork",
    "oneLineDescription": "Keydealnetwork",
    "fullDescription": "KeyDeal Network is a real estate investment platform that connects off-market property sellers with investors.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 72,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a 200 status and structured metadata, indicating a polished and shippable product. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is sparse, making it difficult to quickly understand the project's purpose. The absence of UI keywords suggests limited usability features, impacting the usability score."
  },
  {
    "id": "3023962",
    "name": "Whosenxt",
    "oneLineDescription": "Whosenxt",
    "fullDescription": "WHOSENXT is an AI-powered life assistant platform designed to make everyday living easier, more connected, and more supportive. The platform combines technology, community, and real-world services to help people manage daily tasks, order deliveries, find local help, and stay emotionally supported through intelligent voice and chat interaction.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 92,
      "creativity": 80,
      "clarity": 70,
      "usability": 88
    },
    "judgesNote": "Execution is the strongest dimension for Whosenxt, with a live URL returning a 200 status and matching the project description, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat vague description, making it difficult to quickly grasp the project's full scope. The usability is strong, supported by the presence of structured metadata and a comprehensive page, though the app keyword count suggests a limited visible interface."
  },
  {
    "id": "3023936",
    "name": "BlueLineOps",
    "oneLineDescription": "BlueLineOps",
    "fullDescription": "BlueLineOps, an operational intelligence platform built for warehouse and logistics teams. I created it to turn fulfillment data into clear, actionable visibility across labor, process, YMS, and everything in between. I used AI to accelerate product design, structure workflows, refine prompts, troubleshoot logic, and speed up development across the app stack. Building it taught me how to combine real warehouse operations with modern AI-assisted software development to solve practical problems.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, the lack of a one-line summary and the login wall limit clarity and usability, respectively. The project could benefit from a clearer description and more accessible interface to improve user engagement."
  },
  {
    "id": "3023913",
    "name": "Animation Reference - The Artstation for aniamtors",
    "oneLineDescription": "Animation Reference - The Artstation for aniamtors",
    "fullDescription": "AnimationReference.org is a comprehensive hub for animators to find inspiration and study their craft. The site features a marketplace for professional rigs and a dedicated showcase for creator led short films. While artists often get lost in social media algorithms, our platform provides a safe home for creative growth and technical development. We bridge the gap between student learning and industry standard production for visual storytellers.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 68,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title and structured metadata, indicating a well-developed platform. However, clarity is the weakest dimension as the description lacks a concise one-liner and is somewhat vague about specific features and user interactions. The usability score is limited by the low app keyword count, suggesting a less interactive interface."
  },
  {
    "id": "3023894",
    "name": "DayFlow — AI Daily Planner",
    "oneLineDescription": "DayFlow — AI Daily Planner",
    "fullDescription": "DayFlow is a full-stack productivity app that turns your raw task list into a smart, time-blocked daily schedule using Claude AI. Paste your tasks, set your work hours, and get an energy-optimised plan with MITRE-style block types (Deep Work, Admin, Meetings, Breaks). Built with Claude (Anthropic), Python, and Flask — featuring a web dashboard with 3 sample presets and a CLI mode for power users.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 68,
      "creativity": 82,
      "clarity": 70,
      "usability": 60
    },
    "judgesNote": "The project's strongest dimension is creativity, with its novel approach to time-blocking tasks using AI and offering both a web dashboard and CLI mode. However, execution is weak due to the lack of a live, interactive URL; the GitHub repository serves as the main artifact, which limits immediate usability and shippability. Clarity suffers from the absence of a one-line summary and a somewhat dense description, making it harder to quickly grasp the project's core functionality."
  },
  {
    "id": "3023868",
    "name": "ThreatSense — AI-Powered Threat Detection & Analysis",
    "oneLineDescription": "ThreatSense — AI-Powered Threat Detection & Analysis",
    "fullDescription": "ThreatSense is an AI-powered cybersecurity tool built using Claude, ChatGPT, and Codex to detect, analyze, and report on security threats in real time. It combines large language models for threat intelligence analysis with automated code generation to streamline incident response workflows. Built to demonstrate how multi-model AI collaboration can enhance modern SOC operations.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 85,
      "clarity": 68,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its creativity, leveraging multiple AI models to enhance cybersecurity operations, which is a novel approach. However, the clarity is weak due to the absence of a concise one-line summary and a structured description, making it difficult to quickly grasp the project's purpose. The execution is limited by the lack of a live, interactive demo, as the GitHub repository requires login access, impacting usability and capping its potential."
  },
  {
    "id": "3023867",
    "name": "Liver food analyzer",
    "oneLineDescription": "Liver food analyzer",
    "fullDescription": "Let's you know how bad or good your meal is for your liver",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 55,
      "creativity": 70,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The project has a potentially useful concept by targeting liver health, which is a specific and practical domain. However, the lack of a working live URL severely limits execution and usability, capping both at 55. The absence of a one-line summary and a structured description makes clarity weak, as it's difficult to quickly grasp the project's full scope and functionality."
  },
  {
    "id": "3023857",
    "name": "ResearchQuest AI",
    "oneLineDescription": "ResearchQuest AI",
    "fullDescription": "I built ResearchQuest because literature reviews are slow, and existing tools lack depth or a solid grounding in the paper's content. It's an AI-powered platform that automates finding papers, reading them, and synthesizing citation-grounded answers with page-level references. The architecture is a serverless React app backed by four AWS Lambda functions handling search ranking, PDF ingestion, chunking with embeddings in Supabase pgvector, and RAG-powered Q&A with hallucination prevention.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 82,
      "execution": 78,
      "creativity": 85,
      "clarity": 70,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for ResearchQuest AI is creativity, as it offers a novel approach to literature reviews by integrating AI for citation-grounded synthesis and hallucination prevention. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that could be clearer. The execution and usability are limited by the sparse live page, lacking UI elements and structured metadata, which impacts the user experience."
  },
  {
    "id": "3023827",
    "name": "Hospital Readmission Risk and Cost Driver Analysis - 2023",
    "oneLineDescription": "Hospital Readmission Risk and Cost Driver Analysis - 2023",
    "fullDescription": "This dashboard offers a nationwide view of hospital readmission performance, integrating CMS HRRP metrics with county-level social determinants of health (SDOH) and population health indicators. I’m using this project to showcase my analytical skills, assisted by AI. A key challenge was creating a scalable database. While the AI helped with titles, it sometimes gave incorrect advice on calculated fields yet still provided helpful ideas for problem-solving.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 70,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest aspect of this project is its usefulness, as it targets a specific problem in healthcare analytics by integrating CMS HRRP metrics with social determinants of health. However, the execution is limited due to the lack of structured metadata and a low app keyword count, indicating a less polished and potentially incomplete dashboard. Clarity is the weakest dimension, as the description lacks a one-line summary and is somewhat vague, making it difficult to quickly grasp the project's scope and functionality."
  },
  {
    "id": "3023822",
    "name": "Distributed Code Review System",
    "oneLineDescription": "Distributed Code Review System",
    "fullDescription": "A smart multi-agent AI tool that delivers fast and thorough code reviews. Using React frontend and FastAPI backend, it takes code snippets and runs three agents in parallel via OpenAI API: Security, Performance, and Style. They check vulnerabilities, optimizations, and best practices. A Coordinator then combines results into one clear, prioritized review. Parallel processing makes it quick and insightful for developers.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 75,
      "creativity": 82,
      "clarity": 70,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets developers with a clear problem-solving approach for code reviews, leveraging AI to enhance security, performance, and style checks. However, the weakest dimension is clarity, due to the absence of a one-line summary and a somewhat dense description that could be more structured. The execution is limited by the lack of a live demo URL, and usability is capped due to the login wall on the GitHub page, which prevents immediate access to a working interface."
  },
  {
    "id": "3023790",
    "name": "TimerHustler Architect AI | Beta",
    "oneLineDescription": "TimerHustler Architect AI | Beta",
    "fullDescription": "ArchitectAI is an AI-powered architectural design generator! It helps you create stunning architectural designs with ease. Here's a quick overview of what you can do: Generate Designs: Simply provide a title, select a building type (like Residential, Commercial, Industrial, etc.) and a style (Modern, Classical, Futuristic, etc.), and write a description. You can even use 'Expand with AI' to turn a short idea into a detailed prompt. Design Views: Each design generation gives you 5 different VW",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 70,
      "creativity": 75,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it offers an AI-powered tool for generating architectural designs, which is a novel application of AI. However, the weakest dimension is clarity, as the description lacks a one-line summary and is vague about the specific functionalities and benefits. The execution and usability are limited by the login wall, which prevents direct access to the tool, capping usability at 55 and execution at 70."
  },
  {
    "id": "3023787",
    "name": "Preso",
    "oneLineDescription": "Preso",
    "fullDescription": "Preso AI is a platform that helps you create presentations with AI. The project is built using NextJS, TursoDB, Tailwind, Shadcn, and Stripe. It uses a combination of models from OpenAI, Anthropic, and Google.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 90,
      "creativity": 85,
      "clarity": 65,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension for Preso, with a live URL returning a 200 status and matching metadata, indicating a well-deployed platform. However, clarity is the weakest due to the absence of a one-line summary and a vague description that lacks detail about the user experience and specific features. The project shows creativity by integrating multiple AI models to generate presentations, which is a novel approach."
  },
  {
    "id": "3023782",
    "name": "SharpPick",
    "oneLineDescription": "SharpPick",
    "fullDescription": "I built a live sports analytics platform that scores users on pick-making skill, not just wins and losses. It pulls real ESPN odds, tracks bankroll performance, and ranks users on a public leaderboard via a custom Sharp Rating algorithm. Built from scratch as a self-taught developer using JavaScript, Supabase (PostgreSQL), ESPN API, and Netlify with automated serverless functions.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for SharpPick is execution, with a live URL returning a 200 status and matching project title, indicating a shippable product. The weakest dimension is clarity, as the absence of a one-line summary and a somewhat dense description make it harder to quickly grasp the project's core value. The presence of a login wall limits usability, capping it at 65, despite the evidence of a real interface."
  },
  {
    "id": "3023778",
    "name": "Living Word",
    "oneLineDescription": "Living Word",
    "fullDescription": "Living Word is a real-time AI-powered Bible verse display system built for churches and sermon settings. When a preacher mentions a scripture during a live service whether they say \"John 3:16\" directly or reference \"the twenty-third Psalm\" naturally the full verse text automatically appears on the congregation's projection screen within about one second. No operator needed. No missed cues. No broken flow.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 72,
      "creativity": 88,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The project's strongest dimension is creativity, as it introduces a novel real-time AI application for churches, which is a unique and specific use case. However, clarity is the weakest dimension due to the absence of a one-line summary and a detailed description, making it difficult to quickly grasp the project's scope. The live URL returns a 200 status but lacks structured metadata and a comprehensive interface, limiting execution and usability scores."
  },
  {
    "id": "3023772",
    "name": "DraftMate",
    "oneLineDescription": "DraftMate",
    "fullDescription": "Draft email replies instantly with Claude AI. Works in Gmail and Outlook. ✦ Draftmate — AI Email Assistant Never stare at a blank compose window again. DraftMate automatically drafts a reply the moment you open an email — in Gmail or Outlook Web. HOW IT WORKS - Open any email - DraftMate detects it and generates an AI draft in seconds - Review and edit in the side panel - Send with one click",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 72,
      "clarity": 68,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat unstructured description, making it harder to quickly grasp the project's purpose. The project is useful for email users but lacks significant creativity, as it follows a common pattern of AI email drafting."
  },
  {
    "id": "3023756",
    "name": "Nubis",
    "oneLineDescription": "Nubis",
    "fullDescription": "Nubis is a cloud infrastructure platform built for developers in emerging markets. It simplifies deploying and scaling applications by providing reliable, low-latency compute without the cost and complexity of traditional cloud providers. Inspired by firsthand challenges with infrastructure access, Nubis was designed to make building globally scalable products easier and more accessible.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 92,
      "creativity": 85,
      "clarity": 75,
      "usability": 90
    },
    "judgesNote": "The strongest dimension for Nubis is execution, with a live URL that returns a 200 status and a matching page title, indicating a shippable product. Usefulness is also strong, targeting developers in emerging markets with a clear problem-solving focus. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description, which could be more structured to quickly convey the project's purpose."
  },
  {
    "id": "3023751",
    "name": "AI Operations App",
    "oneLineDescription": "AI Operations App",
    "fullDescription": "A full-stack web application for managing product orders, viewing mockups, and generating shipping labels. This project demonstrates how an order moves through a simple fulfillment workflow — from creation to approval to shipping label generation.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 75,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets a specific business need in managing product orders and generating shipping labels. However, the weakest dimension is clarity, due to the absence of a one-line summary and a description that lacks structure, making it difficult to quickly grasp the project's scope. The artifact review reveals a GitHub page rather than a live application, with a login wall likely, which limits usability and execution scores."
  },
  {
    "id": "3023699",
    "name": "Chapter hub",
    "oneLineDescription": "Chapter hub",
    "fullDescription": "An all-inclusive app for managing a greek college organization that's largely adaptable to other clubs or organizations. This app allows organizations to improve contact with their members and to track things such as payment and attendance easily and all in one place",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 90,
      "creativity": 72,
      "clarity": 65,
      "usability": 85
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL leading to a functional App Store page, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a somewhat vague project description, making it difficult to quickly grasp the project's scope and purpose. The project is useful for managing college organizations but lacks a unique creative angle."
  },
  {
    "id": "3023690",
    "name": "Chladni Plate Visualizer",
    "oneLineDescription": "Chladni Plate Visualizer",
    "fullDescription": "An audio visualizer based on the experiment of German Physicist, Ernst Chladni, where he found that certain frequencies of sounds vibrated different patterns represented by the shape of sand on a plate. I built this app because I am passionate about music and believe that it can also be another type of visual art. I downloaded a PDF of the Chladni Plate from a Smithsonian webpage, specifically from the National Museum of American History, then shared it to Codex and built the app from there.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 88,
      "creativity": 82,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "The strongest dimension for this project is execution, as it has a live URL that returns a 200 status with a matching page title, indicating a functional deployment. However, the weakest dimension is usefulness, as the project lacks a clear target user or practical application beyond being a visual art piece. Clarity is also a concern, with no one-line summary and a vague description that doesn't clearly explain the app's functionality or user interaction."
  },
  {
    "id": "3023652",
    "name": "Aperture Api",
    "oneLineDescription": "Aperture Api",
    "fullDescription": "Digital Signal Processing Layer for Optical Computing and Laser Reconstruction with Real-Time Cloud QA Capabilities",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 60,
      "creativity": 78,
      "clarity": 55,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for this project is creativity, as it attempts to tackle digital holography with a novel API approach. However, the weakest dimension is clarity, as the description is sparse and lacks a one-line summary, making it difficult to quickly understand the project's purpose. The artifact review indicates an error page likely, which significantly impacts both execution and usability scores, capping them at 60 and 55 respectively."
  },
  {
    "id": "3023646",
    "name": "Sidees",
    "oneLineDescription": "Sidees",
    "fullDescription": "Sidees is a prototype exploring the integration of student identification credentials into digital wallets (Apple Wallet and Google Wallet) using NFC technology for secure access to campus systems. The primary objective of this prototype was to evaluate the feasibility, usability, and system behavior of such an implementation through a pilot-style test case modeled on UMBC. To conclude there is futher work to be done and make it adopted national wide.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 80,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and structured metadata, indicating a shippable prototype. However, the clarity of the project is weak due to the absence of a one-line summary and a somewhat vague description, making it difficult to quickly grasp the project's scope and purpose. Usability is limited by the lack of visible UI keywords, suggesting a non-interactive or incomplete interface."
  },
  {
    "id": "3023643",
    "name": "AI Image Generator",
    "oneLineDescription": "AI Image Generator",
    "fullDescription": "Uses the OpenAI API (DALL-E 3 model) to generate an image based on user prompts; fetches data from the API and changes the default image URL to a new image URL provided - built using React.js, Node.js, HTML, and CSS",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 65,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL returning a 200 status with a matching page title, indicating a functional deployment. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is sparse, making it difficult to quickly understand the project's purpose and user impact. The creativity score is limited by the project being a straightforward implementation of a common pattern without unique features."
  },
  {
    "id": "3023565",
    "name": "I Retail Analytics Agent (Ask Questions → Get SQL Insights)",
    "oneLineDescription": "I Retail Analytics Agent (Ask Questions → Get SQL Insights)",
    "fullDescription": "Built an end-to-end data engineering pipeline transforming raw retail data into analytics-ready datasets and actionable insights. Developed an AI agent that converts natural language questions into SQL queries, executes them on a structured database, and explains results in plain English. Includes automated data quality checks, KPI generation (revenue, profit, margin), and an interactive dashboard enabling non-technical users to explore data.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 75,
      "creativity": 85,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets non-technical retail users with a clear problem-solving approach by translating natural language into SQL for insights. However, execution is limited by the lack of a live, interactive URL; the GitHub repository is comprehensive but not directly usable. Clarity is also a weak point due to the absence of a one-line summary and a somewhat dense description, making it harder to quickly grasp the project's scope."
  },
  {
    "id": "3023557",
    "name": "Policy Radar",
    "oneLineDescription": "Policy Radar",
    "fullDescription": "A research chatbot for tracking U.S. federal policy activity across multiple official government sources.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 68,
      "creativity": 72,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its usefulness, as it targets a specific user group interested in tracking U.S. federal policy activity. However, the weakest dimension is clarity, as the absence of a one-line summary and a structured description makes it difficult to quickly understand the project's purpose and functionality. The artifact review indicates a GitHub repository rather than a live application, which limits execution and usability scores due to the likely login wall and lack of a directly usable interface."
  },
  {
    "id": "3023553",
    "name": "Outage Archive",
    "oneLineDescription": "Outage Archive",
    "fullDescription": "The internet feels abstract until it breaks. Internet Outage Archive is a single-page Art Deco broadsheet documenting 52 major U.S. outages & six recurring failure patterns, built in Astro with dual light/dark themes. I used Codex for building everything from UI/UX to Components & GPT to rip through postmortems, FCC filings, & BGP data, then iterate on the frontend super fast. AI let me do weeks of research in days & try way more layout ideas than I could alone. Codex changed out I build now.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 60,
      "creativity": 85,
      "clarity": 70,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, with its unique Art Deco broadsheet design and the use of AI to analyze complex data sets. However, execution is weak due to the artifact review indicating an error page likely, which limits the project's usability and execution scores. The lack of a one-line summary and some clarity issues in the description also affect the clarity score."
  },
  {
    "id": "3023535",
    "name": "Noncitizen College Cost Calculator",
    "oneLineDescription": "Noncitizen College Cost Calculator",
    "fullDescription": "The Noncitizen College Cost Calculator helps undocumented and immigrant students estimate realistic college costs. Unlike traditional tools, it accounts for limited financial aid, policy restrictions, and higher tuition rates. I built this to give students clear, accurate guidance so they can find colleges that are truly accessible and affordable.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 60,
      "creativity": 80,
      "clarity": 70,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets a specific and underserved user group: undocumented and immigrant students seeking college cost estimates. However, the weakest dimension is execution due to the lack of a working live artifact, which limits the ability to assess its current shippability. The description provides a clear purpose but lacks a concise one-line summary, affecting clarity."
  },
  {
    "id": "3023514",
    "name": "Vibe-a-holic",
    "oneLineDescription": "Vibe-a-holic",
    "fullDescription": "It is a platform designed to help people find places to go in Philadelphia based on different vibes, such as first dates, chill hangouts, happy hour, brunch, or special occasions. The purpose is to make it easier to discover honest and authentic spots that fit the experience someone wants.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 68,
      "creativity": 75,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for Vibe-a-holic is its usefulness, as it targets a specific audience looking for tailored experiences in Philadelphia. However, execution is weak due to the live site displaying a generic 'Create Next App' page, indicating the project is not fully deployed. Clarity suffers from the absence of a one-line summary and a vague description, making it difficult to quickly understand the project's unique value."
  },
  {
    "id": "3023436",
    "name": "Career fair prep Agent",
    "oneLineDescription": "Career fair prep Agent",
    "fullDescription": "With this, you can create a downloadable file with customized talking points, likely recruiter questions and recruiter specific tips by uploading your resume, firm overview or job description.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 80,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it offers a novel approach to preparing for career fairs by generating customized talking points and recruiter tips. However, the weakest dimension is execution, as there is no working live artifact to evaluate, which significantly limits the project's shippability. Additionally, the lack of a one-line summary and a clear, structured description impacts clarity."
  },
  {
    "id": "3023408",
    "name": "3D portfolio",
    "oneLineDescription": "3D portfolio",
    "fullDescription": "Built the 3d scene with codex, as i did not know blender, used blender mcp to create this amazing 3d scene! Still working on to optimize it and use bakes instead of realtime lighting",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 60,
      "creativity": 78,
      "clarity": 40,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it attempts to create a 3D portfolio using Blender MCP, which is a novel approach. However, the weakest dimension is clarity, as the description is sparse and lacks a one-line summary, making it difficult to understand the project's purpose and functionality quickly. The artifact review indicates a login wall and potential error page, which severely limits usability and execution scores."
  },
  {
    "id": "3023404",
    "name": "CUNY Rate My Professor Extension",
    "oneLineDescription": "CUNY Rate My Professor Extension",
    "fullDescription": "Built a Chrome extension that shows Rate My Professor data directly inside CUNY Schedule Builder, so students can compare classes without constantly switching tabs. I built it with Codex to help plan faster and reduce repetitive research. Since launch, it’s grown to 500+ daily users, generated 100k+ social views, and received lots of positive feedback from students, which taught me how useful small AI-assisted tools can be at real scale.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 80,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension is execution, as the project is live on the Chrome Web Store with a 200 status code and structured metadata, indicating a polished and deployable product. Usefulness is also strong, targeting CUNY students with a practical tool that integrates Rate My Professor data directly into their scheduling process. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description that lacks structured detail. Usability is limited by the login wall, capping its potential score."
  },
  {
    "id": "3023403",
    "name": "Account manager",
    "oneLineDescription": "Account manager",
    "fullDescription": "Account Manager is a web dashboard for running multiple WhatsApp-style business lines in one place: inbox, contacts, accounts, message templates, tags, and auto-reply rules. I built it to prototype how small teams could centralize support and sales chats. Stack: React, TypeScript, Vite, Tailwind, and shadcn/ui, with Zustand for client-side state and sample data. I used Codex to scaffold UI, wire pages and forms, and iterate on layout and interactions so I could focus on product flow and polish.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 75,
      "execution": 70,
      "creativity": 68,
      "clarity": 72,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is execution, as the GitHub repository is well-structured and includes a detailed page with a high content length, indicating a substantial amount of information. However, the weakest dimension is usability, as the live URL leads to a GitHub page rather than a directly usable application, and a login wall is likely, which limits user interaction. The lack of a one-line summary and the absence of a live, interactive demo also impact clarity and usability."
  },
  {
    "id": "3023357",
    "name": "Full-Stack Engineering Portfolio: From Startups to AI Solutions",
    "oneLineDescription": "Full-Stack Engineering Portfolio: From Startups to AI Solutions",
    "fullDescription": "Developed secure full-stack systems, including multi-tenant platforms and AI-integrated databases. I mastered Row-Level Security (RLS) and JWT-based authorization for data integrity and tenant isolation. I applied Test-Driven Development (TDD) via Vitest and Playwright to ensure 98%+ reliability. Additionally, I bridged complex backend architectures with user-centric design, integrating OpenAI to simplify data querying and enhance system accessibility.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 70,
      "creativity": 72,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest dimension is creativity, as the project integrates AI with full-stack development, showcasing a blend of backend security and user-centric design. However, clarity is the weakest dimension due to the absence of a one-line summary and a description that lacks structure, making it difficult to quickly grasp the project's purpose. The artifact review indicates a GitHub repository behind a login wall, which limits usability and execution scores."
  },
  {
    "id": "3023276",
    "name": "Student Performance Analytics",
    "oneLineDescription": "Student Performance Analytics",
    "fullDescription": "Developed a data analytics project to analyze student performance and identify key factors impacting outcomes. Performed data cleaning, exploratory data analysis (EDA), and built visualizations to uncover patterns and insights. Leveraged SQL and Python for data processing and analysis.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 74,
      "creativity": 70,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The strongest dimension is usefulness, as the project targets a concrete problem of analyzing student performance, which is relevant for educators and institutions. However, the weakest dimension is clarity, as the absence of a one-line summary and a structured description makes it challenging to quickly grasp the project's scope and impact. The GitHub repository is accessible, but the login wall likely limits usability, and the lack of a live demo caps execution at 74."
  },
  {
    "id": "3023275",
    "name": "End-to-End Customer Data Processing Pipeline (AWS)",
    "oneLineDescription": "End-to-End Customer Data Processing Pipeline (AWS)",
    "fullDescription": "Built an end-to-end data engineering pipeline on AWS to process customer data. Ingested raw data into Amazon S3, automated schema discovery using AWS Glue Crawlers, and performed ETL transformations using AWS Glue. Enabled SQL-based analytics using Amazon Athena to generate analytics-ready datasets for reporting and insights.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 72,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to the presence of a detailed GitHub repository with a matching title and comprehensive content, indicating a well-documented project. However, the lack of a one-line summary and a clear, concise description impacts clarity, making it difficult to quickly grasp the project's purpose. Usability is limited by the login wall, which prevents direct interaction with the pipeline, capping its score."
  },
  {
    "id": "3023095",
    "name": "AI-Bias-Ethics-Evaluation",
    "oneLineDescription": "AI-Bias-Ethics-Evaluation",
    "fullDescription": "Analyzed AI outputs to identify bias and ethical risks. Provided structured recommendations for bias mitigation in LLM datasets.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 60,
      "creativity": 75,
      "clarity": 55,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it addresses the novel and important issue of bias and ethics in AI, which is a less commonly tackled problem. However, the weakest dimension is clarity, as the description is sparse and lacks a one-line summary, making it difficult to quickly understand the project's scope and impact. The artifact review indicates a GitHub profile page rather than a specific project page, which limits execution and usability scores due to the lack of a direct, usable interface."
  },
  {
    "id": "3023023",
    "name": "Electronics Design & Simulation (EDA) Specialists",
    "oneLineDescription": "Electronics Design & Simulation (EDA) Specialists",
    "fullDescription": "I am currently building a hands-on EDA portfolio using KiCad, LibrePCB, Qucs, and Ngspice, focusing on schematic design, PCB layout, and circuit simulation. My work emphasizes clear engineering reasoning and structured documentation for AI training and technical evaluation tasks.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 85,
      "creativity": 70,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a 200 status code and structured metadata, indicating a well-presented portfolio. However, clarity is the weakest dimension as the description lacks a concise one-line summary and clear explanation of the project's purpose, making it difficult to quickly understand the project's goals and users. The project shows potential but needs clearer framing and user identification to enhance its usefulness and clarity."
  },
  {
    "id": "3022493",
    "name": "Finance Allocator",
    "oneLineDescription": "Finance Allocator",
    "fullDescription": "Finance Allocator is a personal finance planning tool that tells users exactly how to allocate income each month across expenses, debt payoff, savings, and investing. I built it to make financial decisions more concrete and explainable. It was built with Codex using a Next.js frontend, a Python backend, modular agent-style planning services, deterministic allocation logic, and tested core financial rules.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 68,
      "usability": 72
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL that returns a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest dimension as the description lacks a one-line summary and is somewhat vague about the specific features and user interactions. The project is useful for personal finance management but lacks distinctive creative elements beyond standard financial planning."
  },
  {
    "id": "3022069",
    "name": "F1Expert AI Dashboard",
    "oneLineDescription": "F1Expert AI Dashboard",
    "fullDescription": "Built F1Expert with a teammate, an AI powered Formula 1 dashboard combining race predictions, trivia, and a chat assistant for an interactive fan experience. Used data pipelines and AI models to simulate outcomes and enable natural language queries, while learning how to blend analytics with AI in a collaborative setting. GitHub: https://github.com/zenil16/F1_APP.git",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 55,
      "creativity": 75,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it combines race predictions, trivia, and a chat assistant for Formula 1 fans, which is a novel approach in the sports analytics domain. However, the weakest dimension is execution due to the lack of a working live URL, which severely limits the ability to assess the project's current state and usability. The absence of a one-line summary and a clear description also impacts clarity, making it difficult to quickly grasp the project's scope and functionality."
  },
  {
    "id": "3022053",
    "name": "USPTO Trademark Analytics",
    "oneLineDescription": "USPTO Trademark Analytics",
    "fullDescription": "Natural language analytics platform for 65,000+ USPTO trademark records. Ask plain English questions and get interactive Plotly charts instantly. Built end-to-end with Snowflake for data warehousing, OpenAI Codex for query generation, Flask for the REST API, and deployed live on Railway. Currently working on the live integration on Railway API. Live Demo: https://www.loom.com/share/8e3a2ce2170a4bc2a7ad345e3c6f81e1",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 60,
      "creativity": 82,
      "clarity": 70,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it combines multiple technologies (Snowflake, OpenAI Codex, Flask) to provide natural language analytics for USPTO trademark records, which is a novel application. However, the weakest dimension is usability, as the artifact review indicates a likely login wall and error page, preventing users from accessing the live demo. Execution is also limited due to the absence of a functional live URL, capping its potential impact."
  },
  {
    "id": "3021919",
    "name": "LokaTechnology",
    "oneLineDescription": "LokaTechnology",
    "fullDescription": "I made a website for lockers that will be used at ASU for students as they struggle to carry their backpacks all over campus",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 74,
      "creativity": 72,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its usefulness, as it addresses a real problem for ASU students who need storage solutions on campus. However, the weakest dimension is clarity, as the project lacks a one-line summary and the description is minimal, making it difficult to understand the full scope and functionality quickly. The artifact review indicates a login wall, which limits usability and execution scores, as the interface is not readily accessible for evaluation."
  },
  {
    "id": "3021794",
    "name": "AquaVitals – AI for Fish Health Forecasting",
    "oneLineDescription": "AquaVitals – AI for Fish Health Forecasting",
    "fullDescription": "Built AquaVitals, an AI tool using a chained XGBoost pipeline and live weather data to predict fish survival with 90%+ accuracy. Developed a real-time Flask/JavaScript dashboard to support data-driven decisions at Iowa hatcheries.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 70,
      "creativity": 85,
      "clarity": 68,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for AquaVitals is its usefulness, as it targets a specific problem for Iowa hatcheries by predicting fish survival with high accuracy. However, the weakest dimension is clarity, as the project lacks a one-line summary and the description is not well-structured, making it difficult to quickly grasp the project's scope. The artifact review indicates a GitHub repository with a login wall, limiting usability and execution scores."
  },
  {
    "id": "3021674",
    "name": "Hpay Payment System",
    "oneLineDescription": "Hpay Payment System",
    "fullDescription": "Hpay payment system is designed to revolutionize the way businesses and individuals manage financial transactions. By enabling seamless payments to banks, Paybills, Tills and mobile wallets, we simplify complex financial interactions, turning them into smooth and efficient processes. Our platform is built with a focus on reliability, speed, and top-tier security to ensure that every transaction is executed flawlessly. We pride ourselves on delivering a user-centric experience.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 68,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets a real problem in financial transactions for businesses and individuals. However, the execution is limited by the login wall, which prevents full evaluation of the platform's functionality, capping usability at 55. The clarity of the project is also weak due to the absence of a one-line summary and a somewhat generic description."
  },
  {
    "id": "3021555",
    "name": "The S3 Storage Sentinel",
    "oneLineDescription": "The S3 Storage Sentinel",
    "fullDescription": "The S3 Storage Sentinel is a stateful AI agent designed to serve as a natural language interface for cloud storage environments. It enforces strict security boundaries between \"Metadata Retrieval\" (accessible to standard users) and \"Data/Policy Manipulation\" (restricted to administrators). The project focuses on \"Safe Autonomy,\" ensuring that high-stakes actions cannot be performed by the agent without explicit human authorization, even if the LLM is tricked into attempting them.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 74,
      "creativity": 82,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is creativity, as it introduces a novel approach to managing cloud storage security through a natural language interface. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that lacks immediate accessibility. The artifact review indicates a GitHub repository with a login wall, limiting usability and execution scores."
  },
  {
    "id": "3021150",
    "name": "Portfolio Website",
    "oneLineDescription": "Portfolio Website",
    "fullDescription": "No description provided.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 40,
      "execution": 40,
      "creativity": 40,
      "clarity": 40,
      "usability": 40
    },
    "judgesNote": "The project lacks any description or live artifact, making it impossible to assess its usefulness, execution, or usability. Without a working URL or any explanatory text, the project cannot be evaluated for creativity or clarity either. This submission is significantly deficient across all dimensions due to the absence of any substantive content or evidence."
  },
  {
    "id": "3021149",
    "name": "MedNova",
    "oneLineDescription": "MedNova",
    "fullDescription": "An agentic, multi-provider clinical intelligence platform built on MIMIC-IV, designed to assist physicians with real-time patient analysis, multi-patient comparison, population analytics, and evidence-grounded reasoning.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 75,
      "creativity": 82,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for MedNova is its usefulness, as it targets a clear user group—physicians—and addresses real clinical needs like patient analysis and population analytics. However, the weakest dimension is clarity due to the absence of a one-line summary and a somewhat jargon-heavy description. The GitHub page indicates a substantial codebase, but the login wall limits usability, and without a live demo, execution is capped at 75."
  },
  {
    "id": "3021148",
    "name": "Sentinel",
    "oneLineDescription": "Sentinel",
    "fullDescription": "Sentinel is a terminal-based autonomous agent that integrates deeply with your local operating system, files, and cloud services to execute complex workflows via natural language.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 75,
      "creativity": 82,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for Sentinel is creativity, as it offers a novel approach by integrating an AI agent directly into the terminal for executing complex workflows. However, clarity is the weakest dimension due to the absence of a concise one-line summary and a structured description, making it difficult to quickly grasp the project's purpose. The execution is limited by the lack of a live demo or accessible interface, as the GitHub page requires login access, capping usability at 65."
  },
  {
    "id": "3020689",
    "name": "Instagram Carousel Tracker",
    "oneLineDescription": "Instagram Carousel Tracker",
    "fullDescription": "This tracks the top performing carousels and finds outliers from 30+ different pages",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 80,
      "clarity": 65,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a matching page title and structured metadata, indicating a shippable product. Clarity is the weakest dimension as the description lacks a one-line summary and is vague, making it difficult to quickly understand the project's purpose and functionality."
  },
  {
    "id": "2997371",
    "name": "The Beauty Ingredient Index",
    "oneLineDescription": "The Beauty Ingredient Index",
    "fullDescription": "This app helps you discover products from top brands, check for ingredient concerns, and find safer alternatives within the same category.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 80,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it offers a novel approach to comparing beauty products based on ingredient safety, which is a unique angle in the beauty industry. However, the weakest dimension is execution, as there is no working live URL, resulting in a 404 error, which severely limits the ability to assess the project's current state and usability."
  },
  {
    "id": "3019249",
    "name": "FemGAP Club Landing Page",
    "oneLineDescription": "FemGAP Club Landing Page",
    "fullDescription": "I founded FemGap at UC Berkeley and built our website using OpenAI Codex. The site shares information about FemGap's mission and includes tools for recruitment, managing our mailing list, and spreading awareness.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 85,
      "creativity": 70,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest dimension is execution, as the live URL returns a 200 status and the page is not a stub, indicating a functional website. However, the weakest dimension is clarity due to the absence of a one-line summary and a vague description that doesn't clearly explain the tools or features available on the site. The lack of UI keywords suggests limited interactivity, impacting usability."
  },
  {
    "id": "3019085",
    "name": "Fin",
    "oneLineDescription": "Fin",
    "fullDescription": "A full-stack personal finance management app with a dashboard for tracking income, expenses, budgets, goals, and investments. Features an AI-powered financial advisor chatbot built with Google Gemini, interactive charts, and secure authentication.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 82,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title, indicating a functional deployment. However, clarity is the weakest dimension as the project lacks a one-line summary and structured description, making it difficult to quickly grasp the project's scope and features. The absence of structured metadata and a low content length also suggest limited depth in the presentation."
  },
  {
    "id": "3018973",
    "name": "FINSIGHT AI",
    "oneLineDescription": "FINSIGHT AI",
    "fullDescription": "No description provided.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 60,
      "creativity": 68,
      "clarity": 40,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its execution, as the GitHub page is accessible and contains a significant amount of content, indicating a potentially developed project. However, the lack of a description or one-liner severely impacts clarity, making it difficult to understand the project's purpose or functionality. Additionally, the presence of a login wall limits usability, as it prevents immediate access to any user interface or application features."
  },
  {
    "id": "3018651",
    "name": "Semantic Misclassification In Autonomous Vehicles And Bayes Filter",
    "oneLineDescription": "Semantic Misclassification In Autonomous Vehicles And Bayes Filter",
    "fullDescription": "https://www.linkedin.com/in/mohamed-sharif-47301520b/details/projects/ https://www.youtube.com/watch?v=4N3DsV26Atk",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 75,
      "creativity": 72,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its execution, as evidenced by a live GitLab repository with substantial content (45733 characters), indicating a detailed technical implementation. However, the weakest dimension is clarity, as there is no one-line summary or structured description provided, making it difficult to quickly understand the project's purpose and functionality. The lack of a visible user interface or app keywords also limits its usability score."
  },
  {
    "id": "3018358",
    "name": "Blueprint AI",
    "oneLineDescription": "Blueprint AI",
    "fullDescription": "Blueprint is an AI study chat assistant for college students. Ask questions naturally and get clear, course-aware help for homework, concepts, exam prep, and study planning in one conversation. The chat supports Socratic guidance when you want to learn step by step and more direct answers when you need fast clarity.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 78,
      "creativity": 82,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "The strongest dimension for Blueprint AI is its usefulness, as it targets a clear user group—college students—and addresses specific needs like homework help and exam prep. However, the weakest area is clarity due to the absence of a one-line summary and a somewhat vague description that lacks structured paragraphs. The live site is accessible, but the lack of structured metadata and minimal UI keywords suggest limited usability and execution polish."
  },
  {
    "id": "3018070",
    "name": "GodotSandbox_2D",
    "oneLineDescription": "GodotSandbox_2D",
    "fullDescription": "A 2D platformer I’m building from scratch, featuring my own movement and collision systems, hand-drawn pixel art, a fully rigged character, and upcoming additions like AI enemies, building/mining, and procedural world generation.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 72,
      "creativity": 80,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for this project is creativity, as it involves unique elements like hand-drawn pixel art and plans for procedural world generation. However, the weakest dimension is clarity due to the absence of a one-line summary and a description that lacks structured detail. The artifact review shows a GitHub page with a login wall, limiting usability and execution scores, as the project is not directly accessible or demonstrable."
  },
  {
    "id": "3016991",
    "name": "Coding",
    "oneLineDescription": "Coding",
    "fullDescription": "No description provided.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 40,
      "execution": 60,
      "creativity": 40,
      "clarity": 40,
      "usability": 55
    },
    "judgesNote": "The strongest dimension is execution, as the live URL returns a 200 status and has structured metadata, indicating some level of polish. However, the project lacks a clear description and a matching title, severely impacting clarity and usefulness. The login wall likely present on the Colab page limits usability, and without a unique angle or description, creativity is also weak."
  },
  {
    "id": "3016661",
    "name": "Enterprise Agent – Lab Data Oil & Gas Analysis",
    "oneLineDescription": "Enterprise Agent – Lab Data Oil & Gas Analysis",
    "fullDescription": "Problem Statement Oil and gas labs generate extensive data from various tests on samples, including metals, sulfur content, physical properties, and more. Analysts currently spend a lot of time manually compiling these results into client-ready reports, which is labor-intensive, prone to human error, and slows down decision-making. Automating this process is critical for improving efficiency, accuracy, and timeliness in lab reporting.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 75,
      "clarity": 68,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its usefulness, as it addresses a real problem in the oil and gas industry by automating lab data analysis and report generation. However, the weakest dimension is clarity, as the project lacks a concise one-line summary and the description is not well-structured, making it difficult to quickly grasp the project's scope. The execution is limited by the lack of a live, interactive URL, and the usability is constrained by the absence of a visible interface on the artifact page."
  },
  {
    "id": "3015977",
    "name": "BreadCrumb - AI Powered Networking Intelligence",
    "oneLineDescription": "BreadCrumb - AI Powered Networking Intelligence",
    "fullDescription": "BreadCrumb is an AI-powered networking intelligence tool that helps students capture, remember, and act on conversations. It turns everyday interactions - like coffee chats, career fairs, and introductions - into structured memory and timely follow-ups.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 80,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a 200 status and structured metadata, indicating a shippable product. However, clarity is the weakest dimension as the description lacks a one-line summary and the project title does not match the page title, causing confusion about the project's focus. Usability is limited by the absence of visible UI keywords, suggesting a lack of user interface elements."
  },
  {
    "id": "3015601",
    "name": "Ledgermind",
    "oneLineDescription": "Ledgermind",
    "fullDescription": "No description provided.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 85,
      "creativity": 75,
      "clarity": 40,
      "usability": 60
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and matching the project title, indicating a shippable product. However, the lack of a project description severely impacts clarity, making it difficult to understand the project's purpose and functionality. Usability is limited by the absence of visible UI keywords, suggesting a lack of user interface elements."
  },
  {
    "id": "3015519",
    "name": "CliniClarity",
    "oneLineDescription": "CliniClarity",
    "fullDescription": "CliniClarity is a secure, agentic AI platform that translates complex medical reports into clear summaries for patients. Built with Python and LangGraph, it uses FastMCP to verify facts via PubMed. As an AI Security Architect project, it prioritizes safety using PII redaction, prompt injection defense, and automated auditing.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 60,
      "creativity": 85,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for CliniClarity is its usefulness, as it addresses a real need by simplifying medical reports for patients, a clear target user group. However, the weakest dimension is clarity, as the absence of a one-line summary and a structured description makes it difficult to quickly grasp the project's scope and functionality. The execution and usability are limited by the lack of a live, interactive URL, as the artifact is a YouTube demo rather than a functional application."
  },
  {
    "id": "3015462",
    "name": "Quaero",
    "oneLineDescription": "Quaero",
    "fullDescription": "Quaero is a RAG-based document Q&A app. Upload a PDF, ask questions, get answers cited back to the source passage. Supports multi-document workspaces for cross-document queries and streams responses token by token. Behind the scenes: chunking, OpenAI embeddings, and pgvector HNSW search for fast semantic retrieval. Deployed on GCP with Terraform and GitHub Actions CI/CD, with structured logging so the pipeline is observable in production. Demo mode available, no account needed.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 82,
      "clarity": 75,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a matching title and structured metadata, indicating a well-deployed and observable application. However, usability is limited by a likely login wall, which prevents full access to the app's features without an account. Clarity is the weakest dimension as the description lacks a concise one-liner and could be more structured to quickly convey the project's purpose and functionality."
  },
  {
    "id": "3015295",
    "name": "DeductTax AI: Intelligent Tax Automation for Small Businesses",
    "oneLineDescription": "DeductTax AI: Intelligent Tax Automation for Small Businesses",
    "fullDescription": "Built an AI system to automate tax document processing using RAG and LLMs. Implemented data extraction and classification workflows with FastAPI to identify deductions and improve efficiency.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 82,
      "execution": 78,
      "creativity": 75,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets a clear user group (small businesses) with a practical solution (tax document processing). However, the weakest aspect is clarity due to the absence of a one-line summary and a somewhat vague description that lacks structured explanation. The live URL is functional, but the lack of app/UI keywords and structured metadata suggests limited usability and execution polish."
  },
  {
    "id": "3014182",
    "name": "Artificial Intelligence & Cybersecurity",
    "oneLineDescription": "Artificial Intelligence & Cybersecurity",
    "fullDescription": "In this project the 3 AI language models were tested for performing certain specific tasks for offensive and defensive cybersecurity. The intention of this project was to understand effective usage of AI language models for cybersecurity. The project explored AI tools like - ChatGPT, Google Gemini and Microsoft Copilot.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 60,
      "creativity": 65,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The project has a solid foundation in exploring AI language models for cybersecurity, which is a relevant and practical domain. However, the execution is weak due to the lack of a dedicated live URL that matches the project, as the provided URL leads to a personal e-portfolio page unrelated to the project. Clarity is the weakest dimension, as the description is sparse and lacks a clear one-line summary, making it difficult to quickly grasp the project's scope and outcomes."
  },
  {
    "id": "3013833",
    "name": "Cornell AI Strategy Club",
    "oneLineDescription": "Cornell AI Strategy Club",
    "fullDescription": "We explore how artificial intelligence is transforming business, policy, and society. From case studies to hands-on projects, we examine the opportunities and challenges of emerging AI technologies.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 70,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is execution, as evidenced by a live URL with a matching title and structured metadata, indicating a polished and accessible web presence. However, the weakest dimension is clarity, due to the absence of a one-line summary and a vague description that lacks specifics about the club's activities or target users. Usability is also limited by the lack of interactive elements or UI keywords, suggesting a primarily informational site."
  },
  {
    "id": "3013709",
    "name": "AI Tab Session Manager",
    "oneLineDescription": "AI Tab Session Manager",
    "fullDescription": "A browser extension that saves active tab sessions with AI-generated context summaries. Utilizing Anthropic Claude, the tool automatically describes research workflows to help users revisit complex tasks. The project features local-first storage to ensure data privacy and a minimal UI for efficient session restoration. Built with Manifest V3 and iterated via Claude Code, the stack includes JavaScript, the Anthropic Claude API, and Local Storage.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 82,
      "clarity": 68,
      "usability": 60
    },
    "judgesNote": "The project's strongest dimension is creativity, with its novel use of AI-generated context summaries for tab management and local-first storage for privacy. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat dense description that lacks immediate clarity. The artifact review indicates a GitHub repository with a login wall, limiting usability and execution scores, as there is no direct evidence of a working extension interface."
  },
  {
    "id": "3013707",
    "name": "Echo",
    "oneLineDescription": "Echo",
    "fullDescription": "Developed Echo, an AI-powered scheduling assistant that automates calendar management through image, speech, and text inputs. Using a FastAPI backend and Flutter frontend, the developer enabled multimodal event creation, allowing users to sync schedules by snapping photos or using natural language. The project integrates the Gemini API for image processing and ElevenLabs for voice synthesis to provide daily audio briefings. The tech stack includes Python, FastAPI and Flutter.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 85,
      "clarity": 68,
      "usability": 60
    },
    "judgesNote": "The project's strongest dimension is creativity, with its use of multimodal inputs (image, speech, text) for scheduling, which is a novel approach. However, the weakest dimension is clarity, as the absence of a one-line summary and a somewhat dense description make it hard to quickly grasp the project's scope. The execution is limited by the lack of a live demo; the GitHub repository is not a substitute for a working application, capping usability and execution scores."
  },
  {
    "id": "3012950",
    "name": "In-Line AI Vision Inspection for Real-Time Defect Detection on Manufacturing Conveyors",
    "oneLineDescription": "In-Line AI Vision Inspection for Real-Time Defect Detection on Manufacturing Conveyors",
    "fullDescription": "Partnered with IE.ai and Crayola to develop an in-line AI vision inspection system for watercolor palettes. Designed a hands-free imaging station, automated data collection and labeling workflows, and benchmarked defect-detection models under factory constraints. Achieved 96% real-time detection accuracy, exceeding the 95% target, and created a scalable deployment playbook for future lines.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 92,
      "execution": 72,
      "creativity": 85,
      "clarity": 70,
      "usability": 60
    },
    "judgesNote": "The project's strongest dimension is usefulness, with a clear target user in the manufacturing sector and a concrete problem-solving approach for defect detection. However, the weakest dimension is execution, as the provided URL does not match the project, limiting evidence of a shippable product. Usability is also constrained due to the lack of a relevant live artifact, which prevents a full assessment of the user interface."
  },
  {
    "id": "3012930",
    "name": "LLM Based Magazine Generator",
    "oneLineDescription": "LLM Based Magazine Generator",
    "fullDescription": "The LLM-Based Magazine Maker is a free, open-source tool that automatically generates professional magazines or newsletters for organizations using Large Language Models (LLMs). The system processes various document formats containing event and achievement details, then creates beautifully formatted magazine-style publications in PDF or HTML format Tools: Python, Ollama",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 60,
      "creativity": 75,
      "clarity": 55,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for this project is creativity, as it offers a novel application of LLMs to generate magazine-style publications, which is a less common use case. However, clarity is the weakest dimension due to the absence of a one-line summary and a vague description that lacks detail on how the tool functions. The artifact review indicates a GitHub profile page rather than a project-specific page, leading to low execution and usability scores due to the lack of a direct, usable interface."
  },
  {
    "id": "3012734",
    "name": "Personal website",
    "oneLineDescription": "Personal website",
    "fullDescription": "Cybersecurity portfolio built to prove real engineering capability through execution. Showcases security automation tools, penetration-testing walkthroughs, network defense projects, and technical case studies based on telecom NOC experience. Features an interactive terminal interface, an AI-driven browser RPG experiment, and documented solutions focused on risk reduction, operational efficiency, and secure system design across modern infrastructure environments.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 80,
      "usability": 85
    },
    "judgesNote": "The strongest dimension for this project is execution, with a live URL returning a 200 status and a detailed page content length, indicating a well-developed site. The weakest dimension is clarity, as the absence of a one-line summary and a project title mismatch slightly hinder immediate understanding. However, the project is still solidly presented with structured metadata and a comprehensive description of cybersecurity capabilities."
  },
  {
    "id": "3012149",
    "name": "AI-Integrated Developer Portfolio",
    "oneLineDescription": "AI-Integrated Developer Portfolio",
    "fullDescription": "Built a modern AI-integrated developer portfolio showcasing full-stack and front-end projects. Features dynamic project showcases, interactive UI components, and AI-assisted development workflows. Highlights projects including Ultraverse (NFT marketplace), Mahdiflix (Netflix clone with Stripe & Firebase), a C++ CLI horror game, and the 1st-place Columbia DevFest hackathon project YourCongress. Designed with performance, responsive UX, and recruiter-focused storytelling.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 72,
      "clarity": 60,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL that returns a 200 status, indicating the project is shippable. However, the page title does not match the project, and there's no meta description, which affects clarity and polish. Clarity is the weakest dimension, as the description lacks a one-line summary and structured paragraphs, making it difficult to quickly understand the project's purpose and features."
  },
  {
    "id": "3012099",
    "name": "appliance repair company set up",
    "oneLineDescription": "appliance repair company set up",
    "fullDescription": "simply, my dad's business website that was entirely built by an AI agent",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 90,
      "creativity": 65,
      "clarity": 55,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a detailed page and structured metadata, indicating a well-built site. However, clarity is the weakest dimension as the project lacks a one-line summary and a structured description, making it difficult to quickly understand the project's scope and purpose. The creativity score is limited by the project's straightforward nature as a business website without novel elements."
  },
  {
    "id": "3010604",
    "name": "RAG Powered Oncology Clinic Matcher",
    "oneLineDescription": "RAG Powered Oncology Clinic Matcher",
    "fullDescription": "A full-stack web app that uses Retrieval-Augmented Generation (RAG) to match patients with oncology clinical trials.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 72,
      "creativity": 85,
      "clarity": 68,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets a specific and impactful problem: matching patients with oncology clinical trials. However, the weakest dimension is clarity due to the lack of a concise one-line summary and a somewhat dense description. The artifact review indicates a login wall, which limits usability and execution scores despite the presence of structured metadata and a substantial page content length."
  },
  {
    "id": "3010289",
    "name": "The Last Relapse — AI-Powered Porn Recovery Webapp",
    "oneLineDescription": "The Last Relapse — AI-Powered Porn Recovery Webapp",
    "fullDescription": "AI recovery webapp for men quitting porn. Built with React, Supabase & Gemini AI. Personalized nervous system tools, coach & urge support.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 80,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and having structured metadata, indicating a polished and functional deployment. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is sparse, making it difficult to quickly understand the full scope and functionality of the app. The absence of UI keywords suggests limited usability insights from the artifact review."
  },
  {
    "id": "3010246",
    "name": "AIDocAssistant",
    "oneLineDescription": "AIDocAssistant",
    "fullDescription": "A RAG (Retrieval-Augmented Generation) system for querying documents using OpenAI embeddings and LLMs.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 70,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension due to a live, functional URL with a detailed page and structured metadata, indicating a shippable product. Clarity is the weakest dimension as the project lacks a one-line summary and the description is sparse, making it difficult to quickly grasp the project's purpose and functionality."
  },
  {
    "id": "3009941",
    "name": "Jobsekr",
    "oneLineDescription": "Jobsekr",
    "fullDescription": "Job board with latest jobs and application tracking",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 70,
      "clarity": 65,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension for Jobsekr, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest dimension due to the absence of a one-line summary and a vague description that lacks structured detail, making it difficult to quickly understand the project's scope and features."
  },
  {
    "id": "3009590",
    "name": "Foundaura",
    "oneLineDescription": "Foundaura",
    "fullDescription": "Foundaura is an AI-powered business development platform that converts ideas into actionable, compliance-ready business plans with resources",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 75,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching title and structured metadata, indicating a well-prepared artifact. However, clarity is the weakest dimension as the description is vague and lacks a concise one-liner, making it difficult to quickly grasp the project's purpose. The login wall limits usability, capping it at 65 despite the presence of a real interface."
  },
  {
    "id": "3009390",
    "name": "Inflago.ai",
    "oneLineDescription": "Inflago.ai",
    "fullDescription": "Inflago.ai inflates the ego of your prompts, giving AI models the ideal persona for any conversation to deliver the best results.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 72,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL that returns a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a vague description that does not clearly define the user or the problem being solved. Usability is limited by the lack of visible UI keywords, suggesting a lack of a real interface."
  },
  {
    "id": "3009317",
    "name": "AI-Based Early Detection of Migraines Using a Fusion Machine Learning Model",
    "oneLineDescription": "AI-Based Early Detection of Migraines Using a Fusion Machine Learning Model",
    "fullDescription": "• Engineered a dual-branch machine learning model combining a Multi-Layer Perceptron (MLP) for tabular EEG features and a Convolutional Neural Network (CNN) for spectrogram images. • Built preprocessing pipelines to extract features like band power, entropy, and complexity from raw EEG, converting signals into time-frequency representations. • Achieved 90%+ precision and 0.97 AUC. • Implemented the full pipeline in Python using PyTorch, NumPy, SciPy, and modular training tools.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 60
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching title and extensive content, indicating a well-documented project. However, clarity is the weakest dimension as the description lacks a concise one-line summary and is overly technical, making it difficult for a general audience to quickly grasp the project's purpose. Usability is limited by the absence of a user-facing interface, as indicated by the zero app keyword count."
  },
  {
    "id": "3009308",
    "name": "Care Explained",
    "oneLineDescription": "Care Explained",
    "fullDescription": "Developing a healthcare app to summarize patient appointments and next steps.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 72,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is usefulness, as it targets a real problem in healthcare by summarizing patient appointments and next steps, which could benefit patients and healthcare providers. However, the weakest dimension is execution, as there is no working artifact available, which severely limits the ability to assess the project's current state and usability. The lack of a one-line summary and a more detailed description also affects clarity."
  },
  {
    "id": "3009143",
    "name": "Executive Analytics Dashboard",
    "oneLineDescription": "Executive Analytics Dashboard",
    "fullDescription": "Founders, the new era of reporting starts now. Let’s build faster. Let’s decide smarter. Let’s make momentum effortless.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 60,
      "creativity": 65,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its execution, as the live URL returns a 200 status and has structured metadata, indicating some level of polish. However, the weakest dimension is clarity, as the description is vague and lacks a one-line summary, making it difficult to understand what the project specifically does. Additionally, the artifact review suggests that the URL leads to a video rather than a functional dashboard, which limits usability and execution scores."
  },
  {
    "id": "3009097",
    "name": "AI Image Description Trainer",
    "oneLineDescription": "AI Image Description Trainer",
    "fullDescription": "A small project demonstrating how detailed image descriptions can help train AI systems to better understand visual scenes.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 60,
      "creativity": 70,
      "clarity": 55,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it explores the novel idea of using detailed image descriptions to train AI systems. However, the weakest dimension is clarity, as the description lacks a one-line summary and fails to clearly articulate the project's purpose and functionality. The artifact review indicates a login wall, limiting usability and execution scores, as the project is not directly accessible to users."
  },
  {
    "id": "3009054",
    "name": "NYC Airbnb Regulatory Compliance Analysis",
    "oneLineDescription": "NYC Airbnb Regulatory Compliance Analysis",
    "fullDescription": "Analyzed NYC Airbnb compliance using Python. Built a 99% accurate Random Forest model, K-means clustering, and ANOVA statistical tests.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 70,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The strongest dimension is usefulness, as the project targets a specific problem related to Airbnb compliance in NYC, which is a relevant issue for regulatory bodies. The weakest dimension is clarity; the absence of a one-line summary and a detailed description makes it difficult to quickly understand the project's scope and outcomes. The artifact review indicates a GitHub repository with a login wall, limiting usability and execution scores."
  },
  {
    "id": "3008905",
    "name": "Touch Grass - The Anti-Social Media",
    "oneLineDescription": "Touch Grass - The Anti-Social Media",
    "fullDescription": "Stop DOOMSCROLLING! Get outside, look up, and make networking fun!",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 82,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is creativity, as it attempts to tackle the common issue of excessive social media use with a novel 'anti-social media' approach. However, the weakest dimension is clarity, as the description is sparse and lacks a one-line summary, making it difficult to understand the project's specific functionality and target users. The live URL is functional, which supports execution, but the lack of visible UI elements and a short page content length limit usability."
  },
  {
    "id": "3008877",
    "name": "IntelliVine",
    "oneLineDescription": "IntelliVine",
    "fullDescription": "Project Memory Copilot",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 68,
      "creativity": 60,
      "clarity": 50,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for IntelliVine is execution, as the GitHub repository is accessible and well-documented, indicating a potentially shippable project. However, the weakest dimension is clarity; the absence of a one-line summary and a vague description make it difficult to understand the project's purpose and target users. The login wall likely present on the GitHub page limits usability, as it prevents direct interaction with the project."
  },
  {
    "id": "3008788",
    "name": "Modern Education Platform",
    "oneLineDescription": "Modern Education Platform",
    "fullDescription": "A comprehensive solution for managing students, faculty, attendance, grades, and everything your institution needs.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 70,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and a detailed page content, indicating a functional system. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is vague, making it difficult to understand the specific features and benefits quickly. The absence of UI keywords suggests limited usability insights."
  },
  {
    "id": "3008601",
    "name": "AI_Document_Assistant",
    "oneLineDescription": "AI_Document_Assistant",
    "fullDescription": "A full-stack AI-powered document question answering system that allows users to upload documents and ask natural language questions.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 75,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "The strongest dimension for this project is execution, as it has a live URL that returns a 200 status and a matching page title, indicating a functional deployment. However, the weakest dimension is clarity due to the absence of a one-line summary and a detailed description, making it difficult to quickly understand the project's scope and functionality. The lack of structured metadata and UI keywords also impacts usability and creativity, as it suggests limited interface development and novelty."
  },
  {
    "id": "3008484",
    "name": "Grocery List Generator",
    "oneLineDescription": "Grocery List Generator",
    "fullDescription": "Use this to quickly create a personalized grocery list",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 55,
      "creativity": 65,
      "clarity": 55,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is usefulness, as it addresses a common task of creating personalized grocery lists, which could be beneficial for a wide range of users. However, the lack of a live URL and the absence of a one-line summary or detailed description significantly hinder the clarity and execution scores. Without a working artifact, execution and usability are capped, and the creativity is limited by the generic nature of the project concept."
  },
  {
    "id": "3008482",
    "name": "Conversational Database",
    "oneLineDescription": "Conversational Database",
    "fullDescription": "Talk in natural language, dont worry about the SQL",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 55,
      "creativity": 72,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, as it attempts to simplify database interactions using natural language, which is a novel approach. However, the weakest dimension is execution due to the lack of a working live URL, which severely limits the ability to assess the project's current state and usability. The absence of a one-line summary and a more detailed description also impacts clarity, making it difficult to fully understand the project's scope and functionality."
  },
  {
    "id": "3008480",
    "name": "Sinbad AI",
    "oneLineDescription": "Sinbad AI",
    "fullDescription": "SinbadAI: Enter any world. Live the adventure",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 72,
      "creativity": 78,
      "clarity": 50,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for Sinbad AI is creativity, as it offers an immersive RPG game powered by AI, which is a novel approach. However, the weakest dimension is clarity, as the project lacks a one-line summary and a detailed description, making it difficult to understand the project's scope and purpose quickly. The artifact review indicates a login wall, which limits usability and execution, as the interface is not readily accessible to users."
  },
  {
    "id": "3008414",
    "name": "Lokin with AI Technical Interviewer Agent",
    "oneLineDescription": "Lokin with AI Technical Interviewer Agent",
    "fullDescription": "Share Your Screen, Lets do LeetCode Mockup with Lokin.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 70,
      "creativity": 75,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it attempts to integrate voice conversational AI into technical interviews, which is a novel approach. However, the weakest dimension is clarity, as the description is sparse and lacks a clear one-line summary, making it difficult to quickly understand the project's purpose. The execution and usability are limited by the fact that the live URL leads to a GitHub repository with a login wall, which restricts access to the actual application."
  },
  {
    "id": "3008374",
    "name": "Ripple",
    "oneLineDescription": "Ripple",
    "fullDescription": "Meet Ripple, the AI 3D visualization tool that brings your goals to life. Ripple takes your goals, and provides a guided roadmap!",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 60,
      "creativity": 68,
      "clarity": 50,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for this project is creativity, as it attempts to offer a novel approach to goal visualization through AI and 3D visualization. However, the weakest dimension is clarity, with a vague description and missing one-liner, making it difficult to understand the project's purpose and functionality quickly. The artifact review shows a live URL but lacks structured metadata, a matching title, and UI keywords, limiting execution and usability scores."
  },
  {
    "id": "3008359",
    "name": "Argus: The All-Seeing Eye",
    "oneLineDescription": "Argus: The All-Seeing Eye",
    "fullDescription": "AI-powered surveillance agent that autonomously monitors Polymarket for insider trading patterns using Claude Opus 4.5",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 85,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest dimension due to the absence of a one-line summary and a preview image, making it difficult to quickly understand the project's purpose. The project demonstrates creativity by addressing insider trading in prediction markets, a less common application of AI."
  },
  {
    "id": "3008353",
    "name": "Promptr - Enhance Your Prompts",
    "oneLineDescription": "Promptr - Enhance Your Prompts",
    "fullDescription": "Promptr is a google chrome extension made to help you craft a better refined propmt.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 65,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for Promptr is execution, as it has a live URL with a 200 status and structured metadata, indicating a polished web presence. However, the weakest dimension is clarity, as the project lacks a one-line summary and the description is vague, making it difficult to quickly understand the project's purpose. The login wall limits usability, as it prevents immediate access to the tool's functionality."
  },
  {
    "id": "3008276",
    "name": "AI-Powered Event Intelligence Platform",
    "oneLineDescription": "AI-Powered Event Intelligence Platform",
    "fullDescription": "A B2B SaaS platform using AI to turn event attendees into customers with smart analytics, ICP analysis, and automated onboarding.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 70,
      "creativity": 75,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest dimension is usefulness, as the project targets a clear B2B market with a focus on converting event attendees into customers using AI. However, the weakest dimension is clarity due to the absence of a one-line summary and a vague description that lacks detail on how the platform functions. The artifact review shows a live URL with a 200 status but lacks structured metadata and UI keywords, indicating limited execution and usability."
  },
  {
    "id": "3008212",
    "name": "StockVisionz",
    "oneLineDescription": "StockVisionz",
    "fullDescription": "Pick any US stock. Research it, backtest it, and let AI predict what comes next. Built for everyone.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 65,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for StockVisionz is execution, with a live URL returning a 200 status and a detailed page title and meta description. However, the project lacks a one-line summary and has a login wall, which limits usability and clarity. The creativity score is bolstered by the use of multiple ML models for stock prediction, but the absence of a preview image and a more structured description affects clarity."
  },
  {
    "id": "3008186",
    "name": "SmartRemind",
    "oneLineDescription": "SmartRemind",
    "fullDescription": "Created SmartRemind to solve the student deadline management problem through AI-powered automation. Documents to reminders in 30 seconds.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 75,
      "creativity": 72,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for SmartRemind is usefulness, as it targets a specific problem for students by automating deadline management. However, the execution is limited by the login wall, which restricts usability and prevents a full assessment of the interface. Clarity is the weakest dimension due to the absence of a one-line summary and a lack of structured explanation in the description."
  },
  {
    "id": "3008111",
    "name": "AI Diabuddy: Smart Insulin Dosage Tool for Type 1 Diabetics",
    "oneLineDescription": "AI Diabuddy: Smart Insulin Dosage Tool for Type 1 Diabetics",
    "fullDescription": "ML driven insulin dosage calculator which accounts for Insulin sensitivity variation based on CGM and WHOOP data for Type 1 Diabetics.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for AI Diabuddy is execution, as evidenced by a live URL with a 200 status and structured metadata, indicating a shippable product. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description, which makes it difficult to quickly grasp the project's full scope. The project is highly useful for Type 1 diabetics, but the interface could be more user-friendly, as suggested by the low app keyword count."
  },
  {
    "id": "3008100",
    "name": "RISC-V OS: A Minimal Yet Capable Educational Operating System",
    "oneLineDescription": "RISC-V OS: A Minimal Yet Capable Educational Operating System",
    "fullDescription": "Designed and implemented a RISC-V operating system in C++ for bare-metal environments, featuring a handwritten assembly bootloader, Supervisor-mode kernel initialization, and trap/interrupt handling. Developed a cooperative scheduler, virtual in-memory FAT-style filesystem, and user program loader supporting embedded assembly (.S) programs injected at boot. Engineered lightweight kernel subsystems to enable efficient multi-process execution under constrained hardware conditions.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 75,
      "creativity": 85,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "The project's strongest dimension is creativity, as it offers a novel educational operating system for RISC-V environments, which is not a common focus. However, the weakest dimension is clarity due to the absence of a one-line summary and a somewhat dense description that may be difficult for a quick understanding. The execution is limited by the lack of a live demo URL, and usability is capped due to the login wall on the GitHub page, which restricts immediate access to the content."
  },
  {
    "id": "3008092",
    "name": "MOCKDEU",
    "oneLineDescription": "MOCKDEU",
    "fullDescription": "MockDeu is an open-source AI-powered visa interview simulator that helps applicants prepare for F-1 (Student) and Tourists prepare for iv.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 75,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets a specific user group—visa applicants—and addresses a real need for interview preparation. However, the weakest dimension is clarity due to the absence of a one-line summary and a sparse description, making it difficult to quickly grasp the project's scope and functionality. The artifact review indicates a login wall, which limits usability and execution scores, as it prevents immediate access to the tool's interface."
  },
  {
    "id": "3008088",
    "name": "BLADEI: Bitstream-Level Abnormality Detection for Embedded Inference",
    "oneLineDescription": "BLADEI: Bitstream-Level Abnormality Detection for Embedded Inference",
    "fullDescription": "Re-engineered state-of-the-art (SOTA) hardware benchmarks from Trust-Hub, producing a labeled dataset of benign and malicious bitstreams. Built a supervised machine learning pipeline using byte-frequency analysis, dimensionality reduction with TSVD, and class balancing with SMOTE to identify malicious bitstreams. Deployed the final quantized model on PYNQ-supported FPGA devices to validate real-time performance in an embedded environment.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 75,
      "creativity": 85,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "The project's strongest dimension is creativity, as it applies machine learning to a novel domain of bitstream-level malware detection on FPGA devices, which is not commonly addressed. However, clarity is the weakest dimension due to the lack of a one-line summary and a somewhat dense description that may be challenging for quick comprehension. The execution is limited by the absence of a live, interactive artifact, as the GitHub repository requires login, capping usability and execution scores."
  },
  {
    "id": "3008078",
    "name": "PromptQuest",
    "oneLineDescription": "PromptQuest",
    "fullDescription": "PromptQuest: K-12 game for prompt engineering using React, Flask, & Gemini. Deployed on Vercel/Cloud Run.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 85,
      "creativity": 80,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and structured metadata, indicating a shippable product. However, clarity is the weakest dimension as the description lacks a one-line summary and is vague about the game's mechanics and user engagement. The project shows creativity by integrating a game format for prompt engineering, but the lack of detailed explanation limits its perceived usefulness."
  },
  {
    "id": "3008073",
    "name": "Intelligent-Search-agent",
    "oneLineDescription": "Intelligent-Search-agent",
    "fullDescription": "An intelligent multi-source search AI agent built with LangGraph and LangChain",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 70,
      "creativity": 72,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its execution, as evidenced by a live GitHub repository with a substantial amount of content, indicating a well-documented codebase. However, the weakest dimension is clarity, as the project lacks a one-line summary and a detailed description, making it difficult to quickly understand its purpose and functionality. The presence of a login wall limits usability, as it prevents immediate access to the application interface."
  },
  {
    "id": "3008065",
    "name": "Smart Home Keyword-Spotting",
    "oneLineDescription": "Smart Home Keyword-Spotting",
    "fullDescription": "This project is a proof of concept for a smart-home voice-controlled system that obeys a set of commands and controls peripherals.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 72,
      "creativity": 75,
      "clarity": 60,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is creativity, as it explores a novel application of voice-controlled systems in smart homes. However, the weakest dimension is clarity, as there is no one-line summary and the description is sparse, making it difficult to quickly understand the project's scope and functionality. The execution and usability are limited by the lack of a live interactive URL, with the project being presented as a YouTube video rather than a functional demo."
  },
  {
    "id": "3008038",
    "name": "Classmate - AI-powered writing feedback that's actually useful",
    "oneLineDescription": "Classmate - AI-powered writing feedback that's actually useful",
    "fullDescription": "Classmate helps students get personalized purpose-built writing feedback that helps them to learn through inline comments and annotations.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 88,
      "creativity": 80,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for this project is execution, as evidenced by a live URL with a matching title and structured metadata, indicating a polished and shippable product. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description, which makes it harder to quickly grasp the project's full scope. The login wall limits usability, capping it at 65, as it prevents immediate access to the interface."
  },
  {
    "id": "3008033",
    "name": "SpiritMirror",
    "oneLineDescription": "SpiritMirror",
    "fullDescription": "AI-Powered path-forward prediction & Emotional Wellness mobileApp; Your Personal Altar/analyze your facial measurement to predict your path",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 60,
      "creativity": 72,
      "clarity": 50,
      "usability": 50
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it attempts to combine facial measurement analysis with emotional wellness, which is a novel approach. However, the weakest dimension is clarity, as the description is vague and lacks a one-line summary, making it difficult to understand the project's purpose and functionality quickly. The execution and usability are limited by the lack of a clear live interface and missing structured metadata, which prevents it from being fully shippable or user-friendly."
  },
  {
    "id": "3008028",
    "name": "AuraVision",
    "oneLineDescription": "AuraVision",
    "fullDescription": "A multimodal web application providing real-time, AI-powered guidance for field technicians, enhancing diagnostics and maintenance with augm",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 85,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of AuraVision is its creativity, as it offers a multimodal approach to assist field technicians with AI-powered guidance, which is a novel application. However, clarity is the weakest dimension due to the absence of a one-line summary and an incomplete description, making it difficult to quickly grasp the project's purpose. The execution and usability are limited by the GitHub repository being behind a login wall, restricting immediate access to a usable product."
  },
  {
    "id": "3008024",
    "name": "AgentTrace",
    "oneLineDescription": "AgentTrace",
    "fullDescription": "No description provided.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 60,
      "creativity": 55,
      "clarity": 40,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for this project is execution, as the GitHub repository is accessible and contains a significant amount of content, indicating some level of development. However, the weakest dimension is clarity, as there is no description or one-liner provided, making it impossible to understand what the project does or who it serves. The presence of a login wall further limits usability, as it prevents direct interaction with the project."
  },
  {
    "id": "3007999",
    "name": "Taxora AI Financial...Your Financial Quant Genie",
    "oneLineDescription": "Taxora AI Financial...Your Financial Quant Genie",
    "fullDescription": "I recently developed Taxora Financial Genie, an AI-powered web app that helps users analyze their investment portfolios",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 72,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for this project is execution, as the live URL returns a 200 status with structured metadata, indicating a functional deployment. However, the weakest dimension is clarity due to the absence of a one-line summary and a vague description that lacks detail about the specific functionalities and target users. The project also lacks a preview image and has a low content length, which impacts usability and clarity."
  },
  {
    "id": "3007984",
    "name": "Barracua: AI Agent for Blind People",
    "oneLineDescription": "Barracua: AI Agent for Blind People",
    "fullDescription": "AI Agent that helps blind people navigate the web",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 72,
      "creativity": 80,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for this project is usefulness, as it targets a specific and meaningful problem: helping blind people navigate the web. However, the weakest dimension is clarity, due to the absence of a one-line summary and a sparse description that lacks detail. The artifact review indicates a login wall, which limits usability to 65 and suggests the execution is not fully shippable, capping it at 72."
  },
  {
    "id": "3007930",
    "name": "Stryde - AI Powered Running Coach",
    "oneLineDescription": "Stryde - AI Powered Running Coach",
    "fullDescription": "Personalized running coach application that leverages your personal running data to generate training guidance, plans, and insights.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 74,
      "creativity": 82,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it offers a novel approach to personal fitness coaching by leveraging AI to provide personalized running insights and plans. However, the clarity is weak due to the absence of a concise one-line summary and a structured description, making it difficult to quickly grasp the project's scope. The execution is limited by the lack of a live, accessible application beyond a GitHub repository, and the usability is constrained by a likely login wall, preventing immediate user interaction."
  },
  {
    "id": "3007920",
    "name": "Nexus - AI-Powered SSH Terminal Management System",
    "oneLineDescription": "Nexus - AI-Powered SSH Terminal Management System",
    "fullDescription": "Transform server management from manual command execution to AI-assisted administration",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 82,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it attempts to innovate server management by integrating AI into SSH terminal management, which is a novel approach. However, the clarity is weak due to the absence of a concise one-line summary and a detailed description, making it difficult to quickly grasp the project's scope and functionality. The execution is limited by the lack of a live demo or accessible interface, as the GitHub page requires a login, capping usability at 65."
  },
  {
    "id": "3007903",
    "name": "ASCIIpy",
    "oneLineDescription": "ASCIIpy",
    "fullDescription": "A CLI tool that generates ASCII art, charts, diagrams, and images. Written in Python. Built for Linux & Mac OSX.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 72,
      "creativity": 75,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is creativity, as it offers a CLI tool for generating ASCII art, which is a somewhat novel application of Python for artistic purposes. However, the weakest dimension is clarity, as the project lacks a one-line summary and the description is sparse, making it difficult to quickly understand the project's scope and purpose. The execution is limited by the lack of a live demo or interactive interface, and usability is capped due to the login wall on the GitHub page."
  },
  {
    "id": "3007867",
    "name": "Executive Analytics Dashboard",
    "oneLineDescription": "Executive Analytics Dashboard",
    "fullDescription": "Founders, the new era of reporting starts now. Let’s build faster. Let’s decide smarter. Let’s make momentum effortless.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 60,
      "creativity": 65,
      "clarity": 55,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for this project is execution, as there is a live URL with a substantial content length, although it is a video rather than an interactive dashboard. The weakest dimension is clarity, as the description is vague and lacks a clear explanation of what the project does or who it serves. The absence of a functional live product and the reliance on a video presentation limit the usability and usefulness scores."
  },
  {
    "id": "3007829",
    "name": "Shopthru.ai : Multiplying Sales for AI commerce",
    "oneLineDescription": "Shopthru.ai : Multiplying Sales for AI commerce",
    "fullDescription": "Shopthru.ai helps brands win in AI-driven shopping. As consumers increasingly shop through ChatGPT, Gemini, and other AI assistants, we make",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 85,
      "execution": 92,
      "creativity": 88,
      "clarity": 70,
      "usability": 90
    },
    "judgesNote": "The strongest dimension for Shopthru.ai is execution, with a live URL that returns a 200 status and a matching page title, indicating a well-deployed product. Creativity is also strong, as the project addresses a novel problem in AI-driven shopping with a unique approach. However, clarity is the weakest dimension due to the absence of a one-line summary and a somewhat vague description, making it harder to quickly grasp the project's full scope."
  },
  {
    "id": "3007791",
    "name": "Multi-Agent Workflow Automator",
    "oneLineDescription": "Multi-Agent Workflow Automator",
    "fullDescription": "Built an offline multi-agent AI system with Ollama and Streamlit where Researcher, Writer, and Reviewer agents generate polished content.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 72,
      "creativity": 80,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The project's creativity is its strongest aspect, leveraging a multi-agent system with Ollama and Streamlit for offline AI automation, which is a novel approach. However, the clarity is weak due to the absence of a one-line summary and a vague description that doesn't clearly outline the user or problem solved. Execution and usability are limited by the GitHub repository being the primary artifact, which suggests a login wall and lacks a direct, user-friendly interface."
  },
  {
    "id": "3007783",
    "name": "Ultra Low Latency C++ Matching Engine",
    "oneLineDescription": "Ultra Low Latency C++ Matching Engine",
    "fullDescription": "Built an ultra-low latency C++ matching engine with bid/ask order books, FIFO priority, partial fills, and cancel/modify support simulating.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 75,
      "creativity": 82,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it implements a high-performance C++ matching engine with advanced features like FIFO queues and real-time execution logging, which is not a common pattern. However, the clarity is weak due to the absence of a one-line summary and a structured description, making it difficult to quickly grasp the project's scope and purpose. The execution is limited by the lack of a live, interactive demo and the presence of a login wall, which also impacts usability."
  },
  {
    "id": "3007766",
    "name": "Storybook Painter",
    "oneLineDescription": "Storybook Painter",
    "fullDescription": "StoryPainter bridges the gap between creativity and language learning.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 85,
      "creativity": 80,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL that returns a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest dimension due to the absence of a one-line summary and a sparse description, making it difficult to quickly understand the project's purpose and functionality. The project shows creativity by combining storytelling and language learning, but lacks detailed information on how it achieves this."
  },
  {
    "id": "3007759",
    "name": "AI-Powered Email Drafting System for Consulting Workflows",
    "oneLineDescription": "AI-Powered Email Drafting System for Consulting Workflows",
    "fullDescription": "AI system auto-drafts routine email replies via IMAP, Zapier, and a Python webhook for Roundcube webmail, saving time with pro tone in email",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 68,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to a live URL with a matching title and structured metadata, indicating a well-documented project. However, clarity is the weakest due to the absence of a one-line summary and a somewhat dense description that could hinder quick understanding. The project is useful for consulting professionals but lacks a clear demonstration of a unique creative angle."
  },
  {
    "id": "3007741",
    "name": "Identifying Associated Factors of Substance Use in Adolescents Using Machine Learning",
    "oneLineDescription": "Identifying Associated Factors of Substance Use in Adolescents Using Machine Learning",
    "fullDescription": "Research project aimed at identifying patterns associated with adolescent substance use using machine learning models",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 68,
      "creativity": 72,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest dimension is usefulness, as the project addresses a significant issue by using machine learning to identify factors associated with adolescent substance use. However, the weakest dimension is clarity, as the absence of a one-line summary and a structured description makes it difficult to quickly understand the project's scope and outcomes. The artifact is a lengthy PDF document, which limits execution and usability scores due to the lack of an interactive or user-friendly interface."
  },
  {
    "id": "3007733",
    "name": "Care Equity",
    "oneLineDescription": "Care Equity",
    "fullDescription": "Care Equity exposes racial gaps in maternal care by showing hospital ratings by race and enabling safe, anonymous patient reports.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 80
    },
    "judgesNote": "The strongest dimension for Care Equity is execution, with a live site returning a 200 status and a matching title, indicating a shippable product. The weakest dimension is clarity, as the project lacks a one-line summary and the description is sparse, making it difficult to quickly understand the project's scope and functionality. The project is useful, targeting a real problem in maternal healthcare, but the low app keyword count suggests limited visible interface elements, impacting usability."
  },
  {
    "id": "3007731",
    "name": "SafePlate: The Safety-First AI-Powered Dietary Assistant",
    "oneLineDescription": "SafePlate: The Safety-First AI-Powered Dietary Assistant",
    "fullDescription": "SafePlate SafePlate is a safety-first recipe assistant designed to prevent AI hallucinations in dietary advice. By combining the reasoning o",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 72,
      "creativity": 75,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its execution, with a live GitHub page and a detailed description of the technology stack used, indicating a well-thought-out approach. However, the weakest dimension is clarity, as the description is incomplete and lacks a concise one-line summary, making it difficult to quickly understand the project's purpose. The presence of a login wall limits usability, as it prevents direct interaction with the application."
  },
  {
    "id": "3007727",
    "name": "Driver-Drowsiness-Detection",
    "oneLineDescription": "Driver-Drowsiness-Detection",
    "fullDescription": "No description provided.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 70,
      "creativity": 65,
      "clarity": 40,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for this project is execution, as the GitHub repository is accessible and contains a substantial amount of content, indicating a potentially complete project. However, the weakest dimension is clarity, as there is no description or one-liner provided, making it difficult to understand the project's purpose or functionality quickly. The presence of a login wall likely limits usability, as it prevents easy access to the project's interface."
  },
  {
    "id": "3007725",
    "name": "DermSense: Clinical-Grade Medical Safety Net",
    "oneLineDescription": "DermSense: Clinical-Grade Medical Safety Net",
    "fullDescription": "A privacy-first, clinical-grade medical skincare platform. Orchestrates Google Health AI (PaliGemma, MedGemma, Derm Foundation) via edge dev",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 68,
      "creativity": 82,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The project's strongest dimension is creativity, as it attempts to integrate multiple AI technologies for personalized skincare diagnostics, which is a novel approach. However, clarity is the weakest dimension due to the absence of a one-line summary and a description that lacks clear structure and detail. The execution is limited by the lack of a live, accessible demo, as the GitHub page serves as a repository rather than a user-facing application, and the login wall further restricts usability."
  },
  {
    "id": "3007687",
    "name": "Conversational Recipe Assistant",
    "oneLineDescription": "Conversational Recipe Assistant",
    "fullDescription": "- Conversational search engine querying a 6k+ recipe dataset using fuzzy logic for typo correction and score-based ingredient ranking. - Built a hybrid retrieval pipeline that prioritizes local data, automatically falling back to the Spoonacular API to maximize query coverage. - Implemented persistent session state management to handle multi-turn context, dynamic allergen filtering, and strict dietary exclusion logic.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 55,
      "creativity": 82,
      "clarity": 68,
      "usability": 55
    },
    "judgesNote": "The project's strongest dimension is creativity, with a novel approach to recipe searching using fuzzy logic and a hybrid retrieval pipeline. However, the execution is weak due to the absence of a working live URL, which significantly impacts the ability to assess the project's current state and usability. Clarity is also a concern, as the lack of a one-line summary and structured description makes it harder to quickly grasp the project's scope and functionality."
  },
  {
    "id": "3007523",
    "name": "Polyp Detection",
    "oneLineDescription": "Polyp Detection",
    "fullDescription": "Developed a live Polyp Detection app using RUPNet. Features a GitHub Pages frontend & Hugging Face backend for real-time AI medical imaging.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 82,
      "clarity": 60,
      "usability": 58
    },
    "judgesNote": "The strongest dimension for this project is creativity, as it applies AI to the novel and impactful domain of medical imaging for polyp detection. However, the weakest dimension is clarity due to the absence of a one-line summary and a sparse description, making it difficult to quickly understand the project's scope and functionality. The execution and usability are limited by the lack of a visible interface or structured metadata on the live page, suggesting it is not fully shippable or user-ready."
  },
  {
    "id": "3007221",
    "name": "Differdle",
    "oneLineDescription": "Differdle",
    "fullDescription": "No description provided.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 68,
      "creativity": 60,
      "clarity": 40,
      "usability": 55
    },
    "judgesNote": "The strongest dimension for Differdle is execution, as the live URL returns a 200 status with a matching page title, indicating a functional site. However, the lack of a meta description and structured metadata suggests limited polish. The weakest dimension is clarity, with no description provided, making it difficult to understand the project's purpose or target users. Usability is also low due to the likely login wall, which restricts access to the interface."
  },
  {
    "id": "3006758",
    "name": "AI YouTube Summarizer – Python Project",
    "oneLineDescription": "AI YouTube Summarizer – Python Project",
    "fullDescription": "No description provided.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 60,
      "creativity": 65,
      "clarity": 40,
      "usability": 55
    },
    "judgesNote": "The strongest dimension is usefulness, as the project targets a practical problem of summarizing YouTube videos, which can be beneficial for users seeking quick insights. However, the weakest dimension is clarity, with no description or one-liner provided, making it difficult to understand the project's scope and functionality quickly. The artifact review indicates a GitHub repository rather than a live application, leading to low execution and usability scores due to the lack of a direct user interface or accessible live product."
  },
  {
    "id": "3006423",
    "name": "Smartbot the new age technology",
    "oneLineDescription": "Smartbot the new age technology",
    "fullDescription": "I created a Smartbot through ChatGPT. She is designed to help you within the classroom, allowing students to upload whatever they desire.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 72,
      "creativity": 60,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its execution, as the live URL returns a 200 status and contains structured metadata, indicating some level of polish. However, the weakest dimension is clarity, as the description is sparse and lacks a one-line summary, making it difficult to understand the project's purpose and functionality quickly. Additionally, the presence of a login wall limits usability, as it prevents immediate access to the interface."
  },
  {
    "id": "3006178",
    "name": "AI-Powered Microservices Contract Monitor",
    "oneLineDescription": "AI-Powered Microservices Contract Monitor",
    "fullDescription": "A microservices platform that detects breaking API changes, analyzes service dependencies, and suggests migration strategies using AI.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 80,
      "clarity": 68,
      "usability": 60
    },
    "judgesNote": "The project's strongest dimension is creativity, as it tackles the novel problem of monitoring microservices for breaking changes using AI. However, the weakest dimension is clarity, due to the absence of a one-line summary and a structured description, making it hard to quickly grasp the project's purpose. The execution is limited by the lack of a live demo URL, and the GitHub repository requires login, which also impacts usability."
  },
  {
    "id": "3006008",
    "name": "Movie Recommendation System",
    "oneLineDescription": "Movie Recommendation System",
    "fullDescription": "• Designed and deployed on AWS EC2 a dynamic, user-personalized Movie Recommender app using React.js, Tailwind CSS, and Node.js using AI",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 72,
      "clarity": 65,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and a matching page title, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a sparse description that lacks detail on user interaction or unique features. The project shows potential usefulness but lacks creativity, as it follows a common pattern without novel elements."
  },
  {
    "id": "3005823",
    "name": "Smart Degree Pathway",
    "oneLineDescription": "Smart Degree Pathway",
    "fullDescription": "A comprehensive degree planning and course exploration tool designed specifically for UMass Lowell students.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 85,
      "creativity": 75,
      "clarity": 70,
      "usability": 65
    },
    "judgesNote": "The strongest aspect of this project is its usefulness, as it targets a specific user group (UMass Lowell students) with a practical solution for degree planning and course exploration. Execution is strong due to a live URL with a matching title and meta description, indicating a shippable product. However, creativity is only adequate as the concept is not particularly novel. Clarity suffers from the absence of a one-line summary and a somewhat vague description. Usability is limited by the login wall, which prevents full access to the interface."
  },
  {
    "id": "3005061",
    "name": "Pixelorama – Open-Source Pixel Art Editor",
    "oneLineDescription": "Pixelorama – Open-Source Pixel Art Editor",
    "fullDescription": "Open-source pixel art editor built with Godot Engine. Supports sprites, animations & tilemaps. Runs on Windows, Linux, macOS and Web.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 70,
      "creativity": 82,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for Pixelorama is creativity, as it offers a unique open-source pixel art editor with support for sprites, animations, and tilemaps, which is not a common offering. The weakest dimension is clarity, as the project lacks a concise one-line summary and the description is minimal, making it difficult to quickly understand the project's scope and purpose. The execution and usability are limited by the lack of a direct live demo URL, with the GitHub page serving as the primary artifact, which impacts the ability to assess the product's readiness and user interface."
  },
  {
    "id": "3004953",
    "name": "AI Research and Sound Bite Summarization Agent",
    "oneLineDescription": "AI Research and Sound Bite Summarization Agent",
    "fullDescription": "AI agent that researches any topic via Perplexity API, summarizes with GPT, and converts to audio—handling long outputs via smart chunking.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 72,
      "creativity": 75,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it combines research, summarization, and audio conversion in a novel way. However, the weakest dimension is clarity, due to the absence of a one-line summary and a description that lacks structure and detail. The execution is limited by the lack of a live, accessible product beyond the GitHub repository, and usability is capped due to the login wall and minimal interface evidence."
  },
  {
    "id": "3004761",
    "name": "A Hot sauce DEMO site",
    "oneLineDescription": "A Hot sauce DEMO site",
    "fullDescription": "This is a Hot sauce DEMO site to showcase the excellence in UI for mobile and PC both while keeping compact and simple.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 55,
      "execution": 78,
      "creativity": 60,
      "clarity": 50,
      "usability": 60
    },
    "judgesNote": "The strongest dimension for this project is execution, as the live URL returns a 200 status, indicating a functioning site. However, the weakest dimension is clarity, as the description is sparse and lacks a one-line summary, making it difficult to understand the project's purpose quickly. The project also lacks structured metadata and a meta description, which affects both clarity and usability."
  },
  {
    "id": "3004758",
    "name": "Ticket booking site with 100% customisation options through Admin panel",
    "oneLineDescription": "Ticket booking site with 100% customisation options through Admin panel",
    "fullDescription": "Ticket booking site which can be anytime changed into different color, different title, different seats and everything A-Z from admin panel.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 78,
      "creativity": 65,
      "clarity": 55,
      "usability": 60
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status and a substantial page content length, indicating a potentially complete product. However, clarity is the weakest dimension as the description lacks a one-line summary and fails to clearly articulate the project's purpose and functionality. The absence of structured metadata and UI keywords also impacts usability and creativity scores."
  },
  {
    "id": "3004727",
    "name": "Getaway Tracker",
    "oneLineDescription": "Getaway Tracker",
    "fullDescription": "Ongoing project of mine. App to track all aspects of a getaway such as a family cabin, Vrbo, etc.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 75,
      "clarity": 68,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning a 200 status and matching metadata, indicating a shippable product. However, clarity is the weakest due to the absence of a one-line summary and a vague description, making it difficult to quickly understand the project's purpose and features. The project shows potential usefulness for managing getaway properties, but lacks distinctive creative elements."
  },
  {
    "id": "3004446",
    "name": "The Task App",
    "oneLineDescription": "The Task App",
    "fullDescription": "A productivity app that organizes tasks with lists, calendars, and an Eisenhower matrix to help you prioritize what matters.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 85,
      "creativity": 68,
      "clarity": 55,
      "usability": 70
    },
    "judgesNote": "The strongest aspect of this project is its execution, with a live URL returning a 200 status and structured metadata indicating a polished presentation. However, the weakest dimension is clarity, as the absence of a one-line summary and a vague description make it difficult to quickly understand the project's unique value proposition. The project is a typical task management app, which limits its creativity score."
  },
  {
    "id": "3004443",
    "name": "InternAtlas",
    "oneLineDescription": "InternAtlas",
    "fullDescription": "Search internships and new grad jobs scraped directly from company career pages—updated twice daily.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 92,
      "creativity": 75,
      "clarity": 70,
      "usability": 85
    },
    "judgesNote": "The strongest dimension for InternAtlas is execution, with a live URL returning a 200 status and a matching page title, indicating a well-deployed and polished product. The weakest dimension is clarity, as the absence of a one-line summary and a somewhat vague description make it harder to quickly grasp the project's scope and purpose. The project is useful for job seekers, but lacks creative novelty, as it follows a common job board pattern without distinctive features."
  },
  {
    "id": "3004440",
    "name": "The Study Buddy",
    "oneLineDescription": "The Study Buddy",
    "fullDescription": "Upload notes, generate flashcards, and chat with an AI tutor trained on your material.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 82,
      "clarity": 65,
      "usability": 75
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching title and structured metadata, indicating a shippable product. Clarity is the weakest dimension as the description lacks a one-line summary and is not well-structured, making it difficult to quickly grasp the project's purpose."
  },
  {
    "id": "3004359",
    "name": "Infinite Story Generator",
    "oneLineDescription": "Infinite Story Generator",
    "fullDescription": "A web app that uses OpenAI's GPT and DALL-E APIs to create endless stories with matching illustrations from user prompts.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 85,
      "creativity": 78,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a matching page title and meta description, indicating a shippable product. However, clarity is the weakest dimension as the description lacks a one-line summary and is vague about the specific user experience and features. The project shows some creativity by combining GPT and DALL-E for storytelling, but the concept is not highly novel."
  },
  {
    "id": "3004300",
    "name": "Waynav - Trip & Itinerary Planner",
    "oneLineDescription": "Waynav - Trip & Itinerary Planner",
    "fullDescription": "Waynav lets you plan trips together, edit your itinerary in real time, and sync everything to Google Calendar automatically.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 90,
      "creativity": 85,
      "clarity": 70,
      "usability": 88
    },
    "judgesNote": "The strongest dimension for Waynav is execution, with a live URL returning a 200 status and a detailed page content, indicating a shippable product. Usefulness is also strong, targeting travelers with practical features like real-time itinerary editing and Google Calendar sync. However, clarity is the weakest dimension due to the absence of a one-line summary and a less structured description, which makes it harder to quickly grasp the project's scope."
  },
  {
    "id": "3004262",
    "name": "Telos - Personal Accountability Ledger",
    "oneLineDescription": "Telos - Personal Accountability Ledger",
    "fullDescription": "Founder of Telos - a Personal Accountability Ledger, created to help young individuals track and achieve their Telos (goal).Founder of Telos",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 88,
      "creativity": 75,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension here, with a live URL returning a 200 status and matching project title, indicating a shippable product. However, the clarity is weak due to the absence of a one-line summary and a vague description that doesn't clearly explain the project's functionality. The lack of UI keywords suggests limited usability, but the absence of a login wall is a positive sign."
  },
  {
    "id": "3004118",
    "name": "Zume – AI-Powered Resume Builder",
    "oneLineDescription": "Zume – AI-Powered Resume Builder",
    "fullDescription": "AI-powered resume builder that generates professional, ATS-friendly resumes with smart suggestions and easy customization.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 72,
      "clarity": 65,
      "usability": 65
    },
    "judgesNote": "The strongest dimension is execution, as the live URL returns a 200 status with a detailed page and structured metadata, indicating a well-developed product. However, the weakest dimension is clarity due to the absence of a one-line summary and a somewhat vague project description, making it harder to quickly grasp the project's unique value. The login wall limits usability, capping it at 65, despite the presence of a real interface."
  },
  {
    "id": "3004117",
    "name": "SilentSoundAI",
    "oneLineDescription": "SilentSoundAI",
    "fullDescription": "SilentSoundAI translates sign language letters into text in real time using on-device machine learning.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 75,
      "creativity": 85,
      "clarity": 68,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for SilentSoundAI is its usefulness, as it addresses a real need by translating sign language into text, which can greatly aid communication for the hearing impaired. However, the weakest dimension is clarity, due to the absence of a one-line summary and a structured description, making it harder to quickly grasp the project's scope. The artifact review shows a GitHub page with a login wall, limiting usability and execution scores despite the presence of structured metadata and a comprehensive project description."
  },
  {
    "id": "3004105",
    "name": "Interactive AI Automation Projects Portfolio",
    "oneLineDescription": "Interactive AI Automation Projects Portfolio",
    "fullDescription": "A portfolio website where I showcase AI automation capabilities and allow users to contact me to request custom-built automation solutions.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 85,
      "creativity": 70,
      "clarity": 60,
      "usability": 70
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with structured metadata, indicating a polished and functional site. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is vague, making it difficult to quickly understand the project's purpose and offerings. The usefulness is limited by the lack of a specific target user beyond general businesses."
  },
  {
    "id": "3004094",
    "name": "Dimex",
    "oneLineDescription": "Dimex",
    "fullDescription": "An end-to-end machine learning pipeline designed to compare glass-box and black-box approaches to predictive modeling.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 72,
      "creativity": 75,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it attempts to compare glass-box and black-box approaches in predictive modeling, which is a less common focus. However, the weakest dimension is clarity, as the description is sparse and lacks a one-line summary, making it difficult to quickly grasp the project's purpose. The execution is limited by the lack of a live, accessible interface, as the GitHub repository is behind a login wall, capping usability and execution scores."
  },
  {
    "id": "3004087",
    "name": "Code Buddy",
    "oneLineDescription": "Code Buddy",
    "fullDescription": "CodeBuddy is a web-based personal coding tutor designed to assist students in building intuition and solving coding problems.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 70,
      "creativity": 75,
      "clarity": 60,
      "usability": 65
    },
    "judgesNote": "The strongest dimension for Code Buddy is usefulness, as it targets students with a clear educational purpose. However, the weakest dimension is clarity due to the absence of a one-line summary and a vague description that lacks detail on how the tool functions. The GitHub page indicates a substantial amount of content, but the login wall limits usability and execution scores."
  },
  {
    "id": "3004074",
    "name": "Referee AI",
    "oneLineDescription": "Referee AI",
    "fullDescription": "RefereeAI monitors 8,500+ companies 4x daily, alerting you on Discord when matching jobs appear and auto-removing expired or stale listings.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 88,
      "execution": 92,
      "creativity": 85,
      "clarity": 70,
      "usability": 90
    },
    "judgesNote": "Execution is the strongest dimension due to the live URL returning a 200 status with a comprehensive page and structured metadata, indicating a polished and shippable product. However, clarity is the weakest dimension as the project lacks a one-line summary and the description is somewhat vague, making it difficult to quickly grasp the project's full scope and functionality."
  },
  {
    "id": "3004056",
    "name": "Hybrid Identity Security Lab: Zero Trust Active Directory Hardening, Automation, and Attack Detection Simulation",
    "oneLineDescription": "Hybrid Identity Security Lab: Zero Trust Active Directory Hardening, Automation, and Attack Detection Simulation",
    "fullDescription": "Built a hybrid Active Directory lab demonstrating Zero Trust, identity hardening, automation, and attack simulations for modern IAM, SOC det",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 68,
      "execution": 55,
      "creativity": 72,
      "clarity": 60,
      "usability": 55
    },
    "judgesNote": "The project shows potential in usefulness by addressing modern IAM and SOC needs through Zero Trust and identity hardening. However, the execution is weak due to the absence of a working live artifact, which limits the ability to assess the project's current state. Clarity is also a concern, as the description is incomplete and lacks a one-line summary, making it difficult to quickly grasp the project's scope and impact."
  },
  {
    "id": "3003823",
    "name": "Candidate Recommendation Engine",
    "oneLineDescription": "Candidate Recommendation Engine",
    "fullDescription": "- Built a full-stack ML-powered Streamlit app that matches candidate resumes to job descriptions using semantic search and LLMs. - It leverages the paraphrase-MiniLM-L6-v2 SentenceTransformer model for cosine similarity-based matching, and integrates GPT-3.5 via OpenRouter to generate recruiter-friendly summaries. - The app supports resume file uploads, dynamic UI selection, and Streamlit Cloud deployment with local model caching.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 72,
      "creativity": 82,
      "clarity": 65,
      "usability": 60
    },
    "judgesNote": "The strongest aspect of this project is its creativity, as it combines semantic search with LLMs to offer a novel approach to candidate-job matching. However, the weakest dimension is clarity, as the absence of a one-line summary and the dense description make it challenging to quickly grasp the project's purpose. The execution and usability are limited by the lack of a live, interactive demo; the GitHub repository serves as documentation rather than a usable product."
  },
  {
    "id": "3003805",
    "name": "CookPaddy - Extract any recipe from videos",
    "oneLineDescription": "CookPaddy - Extract any recipe from videos",
    "fullDescription": "CookPaddy helps users know the Ingredients and Instructions of any Cooking Video they see online.",
    "externalUrl": null,
    "previewImageUrl": null,
    "scores": {
      "usefulness": 78,
      "execution": 88,
      "creativity": 85,
      "clarity": 68,
      "usability": 80
    },
    "judgesNote": "Execution is the strongest dimension, with a live URL returning HTTP 200 and structured metadata indicating a polished product. However, the clarity is the weakest due to the absence of a one-line summary and a somewhat vague description that doesn't clearly outline the user journey or specific features. The project is creative in its approach to extracting recipes from videos, which is a novel application of technology."
  }
];
