export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Version control for your<br />
          <span className="text-[#58a6ff]">AI prompt library</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Sync prompt templates with GitHub or GitLab, track performance metrics across model versions, and roll back bad prompts in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get started — $29/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn more
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[
            ['Git-native', 'Push & pull prompts like code'],
            ['Metrics tracking', 'Monitor latency, cost & quality'],
            ['One-click rollback', 'Revert any prompt version instantly']
          ].map(([title, desc]) => (
            <div key={title} className="p-4 rounded-xl bg-[#161b22] border border-[#21262d]">
              <p className="text-white font-semibold text-sm mb-1">{title}</p>
              <p className="text-[#8b949e] text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="rounded-2xl border border-[#58a6ff] bg-[#161b22] p-8">
          <div className="flex items-end gap-1 mb-1">
            <span className="text-4xl font-bold text-white">$29</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to manage prompts at scale</p>
          <ul className="space-y-3 mb-8">
            {[
              'Unlimited prompt templates',
              'GitHub & GitLab sync',
              'Performance metrics dashboard',
              'Version history & rollbacks',
              'Team collaboration (up to 5 seats)',
              'API access'
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start free trial
          </a>
          <p className="text-center text-xs text-[#8b949e] mt-3">14-day free trial · No credit card required</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            [
              'How does Git sync work?',
              'Connect your GitHub or GitLab account via OAuth. PromptSync watches your designated repo for changes and automatically pulls new prompt versions, keeping your library in sync with your codebase.'
            ],
            [
              'What metrics are tracked?',
              'We track latency, token cost, model output quality scores, and custom evaluation metrics you define. All data is visualized per prompt version so you can compare performance over time.'
            ],
            [
              'How do rollbacks work?',
              'Every prompt version is stored with its full history. If a new version degrades performance, click rollback to instantly revert to any previous version — no Git commands needed.'
            ]
          ].map(([q, a]) => (
            <div key={q} className="rounded-xl bg-[#161b22] border border-[#21262d] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} PromptSync. All rights reserved.
      </footer>
    </main>
  )
}
