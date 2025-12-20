import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "shubham@example.com",
      href: "mailto:shubham@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shubham",
      href: "https://linkedin.com/in/shubham",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/shubham",
      href: "https://github.com/shubham",
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 border-t border-border/50">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="space-y-12">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">Get in Touch</h2>
            <p className="text-xl text-foreground max-w-2xl">
              Let's talk about building scalable web platforms, design systems, or your next big project.
            </p>
          </div>

          {/* Contact Links */}
          <div className="grid sm:grid-cols-3 gap-6">
            {contacts.map((contact, idx) => {
              const Icon = contact.icon
              return (
                <Button
                  key={idx}
                  variant="outline"
                  className="h-auto flex-col items-start p-6 border-border/50 hover:bg-card/50 gap-3 bg-transparent"
                  asChild
                >
                  <a href={contact.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-5 h-5 text-accent" />
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground font-medium">{contact.label}</div>
                      <div className="text-sm font-semibold text-foreground mt-1">{contact.value}</div>
                    </div>
                  </a>
                </Button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border/50 mt-20 pt-8 text-center text-sm text-muted-foreground">
        <p>© 2025 Shubham Ashish. Built with React + Tailwind + TypeScript.</p>
      </div>
    </section>
  )
}
