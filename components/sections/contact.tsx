import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Package, Send } from "lucide-react"

export default function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "shubhamashish@outlook.com",
      href: "mailto:shubhamashish@outlook.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/shubham-ashish-770a87a9",
      href: "https://www.linkedin.com/in/shubham-ashish-770a87a9",
      color: "from-blue-600 to-blue-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "https://github.com/meshubhamashish",
      href: "https://github.com/meshubhamashish",
      color: "from-purple-600 to-purple-500",
    },
    {
      icon: Package,
      label: "NPM",
      value: "https://www.npmjs.com/~shubhamashish",
      href: "https://www.npmjs.com/~shubhamashish",
      color: "from-red-600 to-red-500",
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 border-t border-border/50 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 gradient-mesh -z-10" />
      <div className="absolute inset-0 bg-background/80 -z-10" />

      {/* Floating orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '3s' }} />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="space-y-16">
          {/* Heading */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm">
              <Send className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Let's Connect</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Ready to Build <span className="text-gradient-purple-blue bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Something Amazing?</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you're looking to discuss a project, explore opportunities, or just want to say hello — I'd love to hear from you!
            </p>
          </div>

          {/* Contact Links */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, idx) => {
              const Icon = contact.icon
              return (
                <div key={idx} className="group relative">
                  {/* Gradient glow */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${contact.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`} />

                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex flex-col items-start gap-4 p-6 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-300 h-full"
                  >
                    {/* Icon */}
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${contact.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="space-y-1 w-full">
                      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        {contact.label}
                      </div>
                      <div className="text-sm font-semibold text-foreground break-all group-hover:text-accent transition-colors">
                        {contact.value}
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center py-12">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
                asChild
              >
                <a href="mailto:shubhamashish@outlook.com">
                  <Mail className="w-4 h-4" />
                  Send Me an Email
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-accent/30 bg-background/50 backdrop-blur-sm hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
                asChild
              >
                <a href="/Shubham_Ashish_Resume.pdf" download="Shubham_Ashish_Resume.pdf">
                  Download Resume
                  <Send className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <div className="border-t border-border/50 mt-20">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-gradient-purple-blue bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Shubham Ashish
              </div>
              <p className="text-sm text-muted-foreground mt-1">Senior Frontend Engineer</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-accent transition-colors">About</a>
              <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
              <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
              <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>© 2025 Shubham Ashish</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
