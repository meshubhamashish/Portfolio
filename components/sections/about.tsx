export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 border-t border-border/50">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">About</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              Innovative frontend engineer with <span className="font-semibold text-foreground">9+ years</span> of
              experience building scalable, performant, and user-focused web products. Specialized in React, TypeScript,
              Micro-frontends, WebSocket, and REST APIs. Proven success modernizing legacy Java systems into real-time
              web platforms and building design systems that scale across teams.
            </p>
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
