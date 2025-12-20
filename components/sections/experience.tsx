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
    },
  ]

  return (
    <section id="experience" className="py-12 md:py-16 border-t border-border/50">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-8">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="space-y-3">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
                  <p className="text-accent font-medium">{exp.title}</p>
                  <p className="text-sm text-muted-foreground mt-1 sm:mt-0">{exp.period}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="text-accent mt-1 flex-shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
