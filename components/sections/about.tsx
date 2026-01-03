export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 border-t border-border/50">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">About</h2>
            <div className="text-lg text-muted-foreground leading-relaxed text-balance space-y-4">
              <p>
                Senior Frontend / Platform Engineer with <span className="font-semibold text-foreground">10+ years</span> of experience building scalable, performant,
                and user-centric web platforms in product-based environments.
              </p>
              <p>
                I specialize in modernizing legacy systems into robust, modern web platforms, designing frontend architectures that support real-time data, scale, and long-term maintainability.
                My work focuses on translating complex business logic into clean, intuitive user experiences using React, TypeScript, REST APIs, and WebSocket-based systems.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <span className="font-semibold text-foreground">My core strengths include:</span>
                <li>Frontend architecture and platform engineering</li>
                <li>Micro-Frontend systems and shared UI libraries</li>
                <li>Performance optimization and large-scale UI rendering</li>
                <li>Design systems and reusable component frameworks</li>
              </ul>
              <p>
                I’ve worked across domains such as analytics, enterprise platforms, and healthcare systems,
                collaborating closely with product, design, and backend teams to deliver reliable, production-grade solutions.
              </p>
              <p>
                I enjoy solving complex UI and architectural problems and building frontend systems that scale gracefully without compromising user experience.
              </p>
            </div>
          </div>

          {/* Current role highlight */}
          <div className="bg-card border border-border/50 rounded-lg p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-foreground">Currently at Interactions LLC</h3>
                <p className="text-sm text-muted-foreground mt-1">Since December 2021</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-xs text-accent font-medium">Active</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Senior Frontend Developer specializing in platform architecture and modernization of enterprise systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
