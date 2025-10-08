import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: 'Drone Mapping Assistant',
      description: 'Built with AWS Bedrock to process aerial imagery and automate mapping workflows.',
    },
    {
      title: 'CCTV Detection Pipeline',
      description: 'Developed a scalable multimodal fusion system for real-time event detection across 300+ CCTV feeds.',
    },
    {
      title: 'Generative AI Training Program',
      description: 'Designed and delivered AI upskilling sessions for FactSet Manila, focusing on generative AI integration.',
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      {/* Header */}
      <section className="text-center mb-12">
        <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-2">
          King Matthew Ochoa
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-gray-600">
          Data Scientist & AI Developer | AWS • Python • Generative AI
        </motion.p>
      </section>

      {/* Projects */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        {projects.map((proj, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-gray-600 text-sm">{proj.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* About */}
      <section className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I’m a data scientist passionate about building intelligent systems that scale. I specialize in integrating AI and ML solutions into enterprise environments using AWS and Python. My work bridges innovation and impact, helping organizations transform their digital capabilities.
        </p>
      </section>

      {/* Contact */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <div className="flex justify-center gap-6">
          <Button variant="outline" asChild>
            <a href="mailto:xmatthewochoa@gmail.com"><Mail className="mr-2 h-4 w-4" /> Email</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/kingmatthewochoa" target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" /> GitHub</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com/in/kingmatthewochoa" target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a>
          </Button>
        </div>
      </section>
    </main>
  )
}
