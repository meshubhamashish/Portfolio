import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projects = [
    {
      title: "IVR Web Platform",
      description:
        "Migrated legacy Java XML-based IVR system to modern React web application with real-time WebSocket communication and JSON-driven rendering.",
      tags: ["React", "TypeScript", "WebSocket", "Node.js"],
      impact: "40% faster load times, 25% smaller bundle",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Built comprehensive analytics platform visualizing multi-channel customer interactions combining chat, voice, and email data in real-time.",
      tags: ["React", "TypeScript", "Redux", "REST APIs"],
      impact: "Handles 100K+ daily events",
    },
    {
      title: "BHCOE Accreditation Platform",
      description:
        "Led full-stack development of health tech certification platform connecting healthcare providers with accreditation bodies.",
      tags: ["React", "Angular", "Node.js", "MongoDB"],
      impact: "500+ institutions onboarded",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 border-t border-border/50">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-1 gap-6">
          {projects.map((project, idx) => (
            <Card key={idx} className="border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base mt-2 leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-accent font-medium">{project.impact}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
