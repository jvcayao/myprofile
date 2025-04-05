import { motion } from 'framer-motion';
import { Experience } from '../types';

const experiences: Experience[] = [
    {
        company: "HL Assurance Pte., Ltd.",
        position: "Application Developer",
        location: "Tanjong Pagar, Singapore",
        responsibilities: [
            "Developed and maintained web applications using ReactJS and Laravel PHP frameworks throughout the entire SDLC",
            "Built and supported RESTful APIs for web clients and B2B partners, including complex integrations with third-party APIs",
            "Designed and implemented database schemas and optimized queries for MySQL databases",
            "Participated in code reviews and provided constructive feedback to peers, ensuring adherence to coding standards",
            "Utilized Docker for containerization and deployment of applications, ensuring consistency across development and production environments",
            "Implemented CI/CD pipelines using GitLab CI for automated testing and deployment",
            "Conducted performance tuning and optimization of applications to ensure high availability and scalability",
            "Participated in Agile development processes, including sprint planning, daily stand-ups and retrospectives",
            "Utilized Git for version control and collaborated with team members using GitLab",
            "Customized websites with WordPress to meet specific client needs",
            "Managed code using Git and handled deployment with Gitlab and Docker tools",
            "Configured and maintained Ubuntu servers, optimizing for performance, security and reliability",
            "Utilized Jira and Kanban project management methodologies"
        ]
    },
    {
        company: "Al Rushaid Construction Co., Ltd.",
        position: "IT Supervisor",
        location: "Al Khobar, Saudi Arabia",
        responsibilities: [
            "Developed and maintained custom construction applications and converted existing applications to web environment using Laravel PHP Frameworks",
            "Managed and maintained the company's IT infrastructure, including servers, networks and applications",
            "Led a team of developers and IT staff to ensure smooth operations and timely project delivery",
            "Implemented and enforced IT policies and procedures to ensure data security and compliance",
            "Provided technical support and training to staff on various IT systems and applications",
            "Enhanced and managed company applications, including Payroll and Employee Information System",
            "Implemented robust data security measures, including server configurations, SSL installations and encryption tools",
        ]
    },
    {
        company: "Teleperformance Philippines",
        position: "Technical Support Representative",
        location: "Masinag Rizal, Philippines",
        responsibilities: [
            "Provided comprehensive support and service to end users via advanced call distribution software",
            "Diagnosed and resolved complex technical hardware and software problems",
            "Delivered clear and detailed process information and alternative solutions",
            "Identified opportunities for upselling additional products and services",
            "Maintained a high level of customer satisfaction through effective communication and problem-solving skills",
            "Collaborated with team members to improve processes and enhance customer experience",
            "Participated in training sessions to stay updated on new products and services",
            "Documented customer interactions and technical issues in the ticketing system"
        ]
    },
    {
        company: "Bluwave Development",
        position: "IT Staff",
        location: "Marklina City, Philippines",
        duration: "January 2012 - March 2013",
        responsibilities: [
            "Configured networks and applications",
            "Created user accounts, permission and policies on computer systems",
            "Installed, updated and patched operating systems",
            "Documented system configuration, backups, and maintained and tuned servers",
            "Monitored system performance and security, and responded to incidents",
            "Provided technical support to end users and resolved hardware and software issues",
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Work Experience</h2>

                    <div className="relative">
                        <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-cyan-400 md:left-1/2"></div>

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className={`mb-12 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                            >
                                <div className="w-full md:w-1/2 px-4">
                                    <div className={`p-6 glass-effect rounded-xl ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                        <h3 className="text-xl font-bold mb-2">{exp.position}</h3>
                                        <h4 className="text-lg text-primary mb-2">{exp.company}</h4>
                                        <p className="text-slate-400 mb-4">{exp.location} {exp.duration && `• ${exp.duration}`}</p>
                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-primary mr-2">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-dark font-bold text-xl z-10 mt-8 md:mt-0">
                                    {index + 1}
                                </div>
                                <div className="w-full md:w-1/2 px-4"></div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}