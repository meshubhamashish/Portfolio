import { CheckCircle2, Sparkle } from "lucide-react"

export default function About() {
  const strengths = [
    "Frontend architecture and platform engineering",
    "Micro-Frontend systems and shared UI libraries",
    "Performance optimization and large-scale UI rendering",
    "Design systems and reusable component frameworks",
  ]

  return (
    <section id="about" className="py-20 md:py-32 border-t border-border/50 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -z-10" />

      <div className="container max-w-5xl mx-auto px-4">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">About Me</h2>
            <p className="text-3xl md:text-5xl font-bold text-foreground">
              Crafting <span className="text-gradient-purple-blue bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Digital Experiences</span>
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-center max-w-4xl mx-auto">
              <p className="text-xl">
                Senior Frontend / Platform Engineer with <span className="font-bold text-accent">10+ years</span> of experience building scalable, performant,
                and user-centric web platforms in product-based environments.
              </p>
              <p>
                I specialize in modernizing legacy systems into robust, modern web platforms, designing frontend architectures that support real-time data, scale, and long-term maintainability.
                My work focuses on translating complex business logic into clean, intuitive user experiences using <span className="text-accent font-semibold">React</span>, <span className="text-accent font-semibold">TypeScript</span>, REST APIs, and WebSocket-based systems.
              </p>
            </div>

            {/* Core Strengths */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                  <Sparkle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Core Strengths</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {strengths.map((strength, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional info */}
            <div className="text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto space-y-4">
              <p>
                I've worked across domains such as analytics, enterprise platforms, and healthcare systems,
                collaborating closely with product, design, and backend teams to deliver reliable, production-grade solutions.
              </p>
              <p>
                I enjoy solving complex UI and architectural problems and building frontend systems that scale gracefully without compromising user experience.
              </p>
            </div>
          </div>

          {/* Current role highlight */}
          <div className="relative group">
            {/* Gradient glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-500" />

            <div className="relative bg-card border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl font-bold text-foreground">Currently at Interactions LLC</h3>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs text-green-500 font-semibold">Active Role</span>
                    </div>
                  </div>
                  <p className="text-accent font-semibold">Senior Frontend Developer</p>
                  <p className="text-sm text-muted-foreground">
                    Specializing in platform architecture and modernization of enterprise systems.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                  <span>Since December 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
