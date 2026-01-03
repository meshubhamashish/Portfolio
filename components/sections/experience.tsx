import { Building2, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "Interactions LLC",
      title: "Senior Frontend Developer (Platform Engineer)",
      period: "Dec 2021 – Present",
      highlights: [
        "Modernized Java IVR system into React web version using JSON rendering and WebSockets",
        "Built Analytics Dashboard integrating chat and voice data with real-time updates",
        "Created reusable UI library shared across micro-frontend applications",
        "Improved performance by reducing load time 40%, bundle size 25%",
      ],
      current: true,
    },
    {
      company: "HumaneBITS",
      title: "Technical Lead / Senior Frontend Engineer",
      period: "Dec 2016 – Nov 2021",
      highlights: [
        "Led frontend development for healthcare and analytics platforms using React, Angular, .NET Core",
        "Built design systems, SCSS frameworks, and reusable component templates",
        "Mentored frontend developers and established best practices across teams",
        "Architected scalable frontend solutions handling 100K+ daily active users",
      ],
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 border-t border-border/50 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/5 to-transparent -z-10" />

      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Career Journey</h2>
          <p className="text-3xl md:text-5xl font-bold text-foreground">
            Professional <span className="text-gradient-purple-blue bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-8 hidden md:block">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 ring-4 ring-background shadow-lg" />
                </div>

                {/* Content card */}
                <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="group relative p-6 md:p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300">
                    {/* Gradient glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500" />

                    <div className="relative space-y-4">
                      {/* Header */}
                      <div className={`flex items-start gap-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                        <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                          <div className="flex items-center gap-2 mb-2">
                            {exp.current && (
                              <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 text-green-500 rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                            {exp.company}
                          </h3>
                          <p className="text-accent font-semibold mt-1">{exp.title}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shrink-0">
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className={`space-y-3 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                            <span className="text-accent mt-1 flex-shrink-0">•</span>
                            <span className="flex-1">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for timeline */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
