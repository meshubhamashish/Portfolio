import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Rocket } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "IVR Web Platform",
      description:
        "Migrated legacy Java XML-based IVR system to modern React web application with real-time WebSocket communication and JSON-driven rendering.",
      tags: ["React", "JavaScript", "WebSocket", "Airthemetic", "Algebra"],
      impact: "40% faster load times, 25% smaller bundle",
      icon: "🚀",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Built comprehensive analytics platform visualizing multi-channel customer interactions combining chat, voice, and email data in real-time.",
      tags: ["React", "TypeScript", "Redux", "REST APIs"],
      impact: "Handles 100K+ daily events",
      icon: "📊",
    },
    {
      title: "BHCOE Accreditation Platform",
      description:
        "Led full-stack development of health tech certification platform connecting healthcare providers with accreditation bodies.",
      tags: ["React", "Node.js", "MongoDB"],
      impact: "500+ institutions onboarded",
      icon: "🏥",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 border-t border-border/50 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent -z-10" />

      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Featured Work</h2>
          <p className="text-3xl md:text-5xl font-bold text-foreground">
            Projects That <span className="text-gradient-purple-blue bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Matter</span>
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />

              <Card className="relative border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-300 overflow-hidden">
                {/* Accent dot */}
                <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                  {project.icon}
                </div>

                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <Rocket className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    <p className="text-sm text-accent font-semibold">{project.impact}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
