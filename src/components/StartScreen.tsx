interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const highlights = ['5x5 social bingo', 'quick round', 'new card every game'];
  const steps = [
    'Spot someone who matches a square.',
    'Tap the prompt to claim the find.',
    'Finish a full line to call bingo.',
  ];
  const previewPrompts = [
    'Has changed careers',
    'Speaks 3+ languages',
    'Loves board games',
    'Can recommend a podcast',
  ];

  return (
    <div className="relative min-h-full overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.05))]" />
      <div className="absolute left-[-4rem] top-10 h-44 w-44 rounded-full bg-spark/20 blur-3xl" />
      <div className="absolute bottom-0 right-[-3rem] h-52 w-52 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-full max-w-6xl items-center px-6 py-10 sm:px-8 lg:px-10">
        <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-10">
          <section className="flex flex-col justify-center">
            <div className="mb-5 flex flex-wrap gap-2">
              {highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-paper/80"
                >
                  {highlight}
                </span>
              ))}
            </div>

            <h1 className="max-w-3xl font-display text-5xl leading-none text-paper sm:text-6xl">
              Break the ice without forcing the small talk.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-paper/78 sm:text-lg">
              Bingo Mixer turns introductions into a low-pressure scavenger hunt. Walk the room,
              find people who match the prompts, and fill your card before anyone else does.
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-paper-edge/50 bg-paper/95 p-6 text-paper-ink shadow-[0_20px_70px_rgba(7,16,19,0.28)] backdrop-blur">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-paper-ink/55">
                    Quick rundown
                  </p>
                  <h2 className="mt-1 font-display text-2xl">How a round works</h2>
                </div>
                <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-ink">
                  Good for events and meetups
                </span>
              </div>

              <ol className="space-y-3 text-sm leading-6 text-paper-ink/78 sm:text-base">
                {steps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-paper">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:max-w-sm">
              <button
                onClick={onStart}
                className="rounded-full bg-accent px-8 py-4 text-lg font-semibold text-ink transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 active:bg-accent-light"
              >
                Start the mixer
              </button>
              <p className="text-sm text-paper/65">
                You will get a fresh card instantly, no setup or sign-in needed.
              </p>
            </div>
          </section>

          <aside className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-[2rem] border border-paper-edge/50 bg-paper/94 p-5 text-paper-ink shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur">
              <div className="rounded-[1.5rem] bg-paper-strong p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-paper-ink/50">
                      Tonight's card
                    </p>
                    <h2 className="mt-1 font-display text-3xl">Find your people</h2>
                  </div>
                  <div className="rounded-full border border-spark/25 bg-spark/12 px-3 py-1 text-xs font-semibold text-spark">
                    First screen preview
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  {previewPrompts.map((prompt) => (
                    <div
                      key={prompt}
                      className="rounded-[1.25rem] border border-paper-edge/70 bg-white/75 p-4 leading-5 shadow-[0_8px_24px_rgba(32,28,18,0.08)]"
                    >
                      {prompt}
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[1.5rem] bg-ink p-4 text-paper">
                  <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-paper/65">
                    <span>Board feel</span>
                    <span>Warm contrast</span>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {['B', 'I', 'N', 'G', 'O'].map((letter, index) => (
                      <div
                        key={letter}
                        className={`flex aspect-square items-center justify-center rounded-2xl text-sm font-semibold ${
                          index === 2
                            ? 'bg-accent text-ink'
                            : 'border border-white/10 bg-white/6 text-paper/80'
                        }`}
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
