import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Enterprise E-Commerce Platform',
      description: 'Full-stack e-commerce solution serving 10,000+ daily users with payment integration, real-time inventory management, and advanced analytics dashboard.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://ecommerce-demo.com',
      image: 'Project 1',
    },
    {
      title: 'Real-Time Collaboration Platform',
      description: 'SaaS collaboration tool enabling teams to work together seamlessly with live editing, version control, and team management features.',
      tags: ['React', 'WebSocket', 'Node.js', 'MongoDB', 'Docker'],
      github: 'https://github.com/yourusername/collab',
      live: 'https://collab-platform.com',
      image: 'Project 2',
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Enterprise analytics platform with machine learning predictions, custom reporting, and real-time data visualization for business intelligence.',
      tags: ['React', 'Python', 'TensorFlow', 'D3.js', 'PostgreSQL'],
      github: 'https://github.com/yourusername/analytics',
      live: 'https://analytics-dashboard.com',
      image: 'Project 3',
    },
    {
      title: 'Mobile Banking Application',
      description: 'Secure mobile banking app with biometric authentication, bill payments, and account management across iOS and Android platforms.',
      tags: ['React Native', 'Node.js', 'Firebase', 'Stripe'],
      github: 'https://github.com/yourusername/banking',
      live: 'https://bankapp-demo.com',
      image: 'Project 4',
    },
    {
      title: 'Microservices Architecture Platform',
      description: 'Scalable microservices platform with API gateway, service discovery, and container orchestration using Docker and Kubernetes.',
      tags: ['Node.js', 'Docker', 'Kubernetes', 'Nginx', 'AWS'],
      github: 'https://github.com/yourusername/microservices',
      live: 'https://microservices-demo.com',
      image: 'Project 5',
    },
    {
      title: 'Content Management System',
      description: 'Headless CMS with powerful content management, SEO optimization, multi-language support, and automated deployment pipelines.',
      tags: ['Next.js', 'Strapi', 'GraphQL', 'Vercel'],
      github: 'https://github.com/yourusername/cms',
      live: '#',
      image: 'Project 6',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-gray-200 to-gray-100 dark:from-slate-800 dark:to-slate-900 border border-primary/20 rounded-xl overflow-hidden hover:border-primary/60 transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden relative">
                <span className="text-gray-400 dark:text-gray-400">{project.image}</span>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-4"
                >
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <FaGithub className="text-white" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <FaExternalLinkAlt className="text-white" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Gradient Border */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-secondary blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
