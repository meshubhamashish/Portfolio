import { Badge } from "@/components/ui/badge"
import { Code2, Database, GitBranch, Layers, Palette, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      icon: Code2,
      skills: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Architecture",
      icon: Layers,
      skills: ["Micro-Frontends", "Design Systems", "REST APIs", "WebSocket", "Performance Optimization"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Backend",
      icon: Database,
      skills: ["Node.js", "Express", ".NET Core", "MongoDB", "PostgreSQL"],
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Tools & DevOps",
      icon: Wrench,
      skills: ["Webpack", "Vite", "Git", "Docker", "CI/CD", "Figma"],
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "State Management",
      icon: GitBranch,
      skills: ["Redux", "Context API", "Zustand", "MobX"],
      color: "from-violet-500 to-purple-500",
    },
    {
      name: "Frameworks",
      icon: Palette,
      skills: ["Next.js", "Angular", "Vue.js", "Express"],
      color: "from-rose-500 to-red-500",
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 border-t border-border/50 relative">
      {/* Floating gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Technical Arsenal</h2>
          <p className="text-3xl md:text-5xl font-bold text-foreground">
            Skills & <span className="text-gradient-purple-blue bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Expertise</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500`} />

                <div className="relative space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-background/80 border-border/50 text-foreground hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
