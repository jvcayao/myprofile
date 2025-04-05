import { motion } from 'framer-motion';

const projects = [
  {
    title: "ARCC Construction",
    description: "Official website for Al Rushaid Construction Company featuring company services, projects, and career information.",
    technologies: ["Laravel", "VueJS", "Tailwind CSS", "Ubuntu Server"],
    link: "https://arccksa.com/",
    image: "https://arccksa.com/img/backgrounds/slider/5.jpg" // Construction placeholder
  },
  {
    title: "HLAS Travel Insurance",
    description: "Comprehensive travel insurance platform with online purchase, claims, and policy management features.",
    technologies: ["ReactJS", "Laravel", "REST API", "Docker"],
    link: "https://www.hlas.com.sg/personal-insurance/travel-insurance/",
    image: "https://www.hlas.com.sg/wp-content/uploads/2022/09/Travel360-Promo.png" // Travel placeholder
  },
  {
    title: "HLAS Car Insurance",
    description: "Automobile insurance portal with quote generation, policy management, and claims processing.",
    technologies: ["ReactJS", "TypeScript", "Microservices", "Kubernetes"],
    link: "https://www.hlas.com.sg/personal-insurance/car-insurance/",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1983&auto=format&fit=crop" // Car placeholder
  },
  {
    title: "HLAS Consumer Portal",
    description: "Customer benefits management system for easy access to policy information, claims, and documents.",
    technologies: ["ReactJS", "Laravel", "MySQL", "Microsoft SQL Server"],
    link: "https://app.hlas.com.sg/consumer/login",
    image: "https://assets.hlas.com.sg/consumer-portal/Login.png" // Office placeholder
  },
  {
    title: "HLAS Health Insurance",
    description: "Critical illness insurance platform with medical underwriting and policy management.",
    technologies: ["ReactJS", "Laravel", "JWTAuth", "Automation"],
    link: "https://www.hlas.com.sg/personal-insurance/early-critical-illness-insurance/",
    image: "https://www.hlas.com.sg/wp-content/uploads/2025/04/What-to-Do-After-an-Accident-min-1.png" // Health placeholder
  },
  {
    title: "HLAS Distribution Portal",
    description: "Secure client login portal for policy management, claims submission, and document access.",
    technologies: ["ReactJS", "Laravel", "JWTAuth", "Automation"],
    link: "https://app.hlas.com.sg/partner/login",
    image: "https://www.hlas.com.sg/wp-content/uploads/2020/02/agents_recruitment.jpg" // Login placeholder
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-slate-800/90 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-900 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-cyan-400 transition-colors"
                  >
                    Visit Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}