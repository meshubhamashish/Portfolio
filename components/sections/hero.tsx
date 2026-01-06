import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh -z-10" />
      <div className="absolute inset-0 bg-background/50 -z-10" />

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container max-w-5xl mx-auto px-4 py-20 relative z-10">
        <div className="space-y-8 text-center">
          {/* Accent badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Available for opportunities</span>
          </div>

          {/* Name with gradient */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="text-gradient-purple-blue animate-gradient bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Shubham Ashish
            </span>
          </h1>

          {/* Title */}
          <div className="space-y-2">
            <p className="text-2xl md:text-4xl font-semibold text-foreground">
              Senior Frontend Engineer <span className="text-accent">&</span> Platform Engineer
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent" />
              <span className="text-sm">10+ Years of Excellence</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent" />
            </div>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building scalable, elegant web platforms with <span className="text-accent font-semibold">React</span> and{" "}
            <span className="text-accent font-semibold">TypeScript</span>. Transforming complex systems into beautiful user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
              asChild
            >
              <a href="#contact">
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-accent/30 bg-background/50 backdrop-blur-sm hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
              asChild
            >
              <a href="/Shubham_Ashish_Resume.pdf" download="Shubham_Ashish_Resume.pdf">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <a href="#about" className="block w-6 h-10 mx-auto border-2 border-accent/30 rounded-full p-1 cursor-pointer hover:border-accent transition-colors" aria-label="Scroll to About section">
              <div className="w-1.5 h-3 bg-accent rounded-full mx-auto animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
