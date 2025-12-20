import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-slate-900/20 -z-10" />

      <div className="container max-w-4xl mx-auto px-4 py-20">
        <div className="space-y-8 text-center">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Shubham Ashish</h1>

          {/* Title */}
          <p className="text-2xl md:text-3xl font-medium text-muted-foreground">
            Senior Frontend Engineer <span className="text-accent">&</span> Platform Engineer
          </p>

          {/* Tagline */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
            Building scalable, elegant web platforms with React and TypeScript. Based in Bengaluru, India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
              <a href="#contact">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
            <Button size="lg" className="gap-2" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
