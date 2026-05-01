export default function ResultsLoading() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-[1600px] px-6 py-10 lg:px-10">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-3xl">
            <div className="h-4 w-48 animate-pulse rounded-full bg-white/10" />
            <div className="mt-4 h-14 w-full max-w-3xl animate-pulse rounded-3xl bg-white/10" />
            <div className="mt-4 h-5 w-full max-w-2xl animate-pulse rounded-full bg-white/5" />
            <div className="mt-2 h-5 w-full max-w-xl animate-pulse rounded-full bg-white/5" />
          </div>

          <div className="flex gap-3">
            <div className="h-12 w-48 animate-pulse rounded-full bg-white/10" />
            <div className="h-12 w-32 animate-pulse rounded-full bg-white/5" />
          </div>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="panel rounded-[28px] p-5"
            >
              <div className="h-3 w-24 animate-pulse rounded-full bg-white/10" />
              <div className="mt-4 h-8 w-28 animate-pulse rounded-2xl bg-white/10" />
              <div className="mt-3 h-4 w-32 animate-pulse rounded-full bg-white/5" />
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="space-y-6">
            <div className="panel rounded-[30px] p-6">
              <div className="h-4 w-32 animate-pulse rounded-full bg-white/10" />
              <div className="mt-5 flex flex-wrap gap-2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-10 w-24 animate-pulse rounded-full bg-white/5"
                  />
                ))}
              </div>
              <div className="mt-6 h-12 w-full animate-pulse rounded-2xl bg-white/5" />
              <div className="mt-6 grid grid-cols-2 gap-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-10 animate-pulse rounded-2xl bg-white/5"
                  />
                ))}
              </div>
            </div>

            <div className="panel rounded-[30px] p-6">
              <div className="h-4 w-40 animate-pulse rounded-full bg-white/10" />
              <div className="mt-5 space-y-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-20 animate-pulse rounded-3xl bg-white/5"
                  />
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <div className="grid gap-6 2xl:grid-cols-[1.1fr_0.9fr]">
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="panel rounded-[32px] p-6"
                >
                  <div className="h-4 w-32 animate-pulse rounded-full bg-white/10" />
                  <div className="mt-4 h-7 w-72 animate-pulse rounded-2xl bg-white/10" />
                  <div className="mt-6 h-[340px] animate-pulse rounded-[28px] bg-white/5" />
                </div>
              ))}
            </div>

            <div className="grid gap-6 2xl:grid-cols-[minmax(0,1.2fr)_380px]">
              <div className="panel overflow-hidden rounded-[32px]">
                <div className="border-b border-white/10 px-6 py-5">
                  <div className="h-4 w-28 animate-pulse rounded-full bg-white/10" />
                  <div className="mt-4 h-7 w-64 animate-pulse rounded-2xl bg-white/10" />
                </div>
                <div className="space-y-3 px-6 py-5">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-16 animate-pulse rounded-2xl bg-white/5"
                    />
                  ))}
                </div>
              </div>

              <div className="panel rounded-[32px] p-6">
                <div className="h-56 animate-pulse rounded-[28px] bg-white/5" />
                <div className="mt-6 h-8 w-56 animate-pulse rounded-2xl bg-white/10" />
                <div className="mt-4 h-20 animate-pulse rounded-3xl bg-white/5" />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-20 animate-pulse rounded-3xl bg-white/5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
