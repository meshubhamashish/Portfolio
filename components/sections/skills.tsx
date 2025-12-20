import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      name: "Architecture",
      skills: ["Micro-Frontends", "Design Systems", "REST APIs", "WebSocket", "Performance Optimization"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", ".NET Core", "MongoDB", "PostgreSQL"],
    },
    {
      name: "Tools & DevOps",
      skills: ["Webpack", "Vite", "Git", "Docker", "CI/CD", "Figma"],
    },
    {
      name: "State Management",
      skills: ["Redux", "Context API", "Zustand", "MobX"],
    },
    {
      name: "Frameworks",
      skills: ["Next.js", "Angular", "Vue.js", "Express"],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 border-t border-border/50">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-12">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="bg-background/50 border-border/50 text-foreground hover:bg-background"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
