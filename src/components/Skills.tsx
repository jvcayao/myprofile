import { motion } from 'framer-motion';
import { SkillCategory } from '../types';

const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "ReactJS",
      "React Native",
      "NextJS",
      "JavaScript",
      "TypeScript",
      "Micro Frontend",
      "VueJS",
      "Tailwind CSS"
    ]
  },
  {
    category: "Backend",
    items: [
      "PHP 7.2 to 8.4",
      "Laravel Frameworks",
      "Micro Services",
      "RESTful APIs",
      "WordPress"
    ]
  },
  {
    category: "Database",
    items: [
      "MySQL",
      "SQL Server",
      "MongoDB"
    ]
  },
  {
    category: "DevOps",
    items: [
      "Ubuntu Server",
      "NGINX",
      "Docker",
      "Kubernetes",
      "Gitlab CI/CD",
      "Github Actions"
    ]
  },
  {
    category: "Tools",
    items: [
      "GIT",
      "JIRA",
      "Slack",
      "Notion",
      "Confluence"
    ]
  },
  {
    category: "Soft Skills",
    items: [
      "Leadership",
      "Effective Communication",
      "Critical Thinking",
      "Project Management"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-slate-800 rounded-full text-sm hover:bg-primary hover:text-dark transition-colors"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 glass-effect p-8 rounded-xl max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Certifications</h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
              <a
                href="https://www.udemy.com/certificate/UC-bbaeb5b9-a604-40ca-b858-1fbc133fb3f5/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary hover:text-cyan-400 transition-colors"
              >
                <div className="p-6 border border-primary/30 rounded-lg hover:border-primary/60 transition-colors h-full flex flex-col justify-between">
                  <h4 className="font-bold mb-2">Docker and Kubernetes</h4>
                  <p className="text-sm text-slate-400">Certification Course</p>
                </div>
              </a>
              <a
                href="https://www.udemy.com/certificate/UC-10779153-f296-42d1-a44a-4860311b3e52/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary hover:text-cyan-400 transition-colors"
              >
                <div className="p-6 border border-primary/30 rounded-lg hover:border-primary/60 transition-colors h-full flex flex-col justify-between">
                  <h4 className="font-bold mb-2">React and Typescript</h4>
                  <p className="text-sm text-slate-400">Certification Course</p>
                </div>
              </a>
              <a
                href="https://www.testdome.com/cert/ea9df4efc85b49f18e659a5996a38155"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary hover:text-cyan-400 transition-colors"
              >
                <div className="p-6 border border-primary/30 rounded-lg hover:border-primary/60 transition-colors h-full flex flex-col justify-between">
                  <h4 className="font-bold mb-2">PHP Testdome</h4>
                  <p className="text-sm text-slate-400">Certification</p>
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}