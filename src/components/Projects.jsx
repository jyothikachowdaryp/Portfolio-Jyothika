import { motion } from 'framer-motion';
import { projects } from '../data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl overflow-hidden flex flex-col h-full"
                >
                    {/* Project Header/Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative group">
                        <div className="absolute inset-0 bg-purple-600/20 mix-blend-overlay group-hover:bg-purple-600/40 transition-colors"></div>
                        <h3 className="text-3xl font-bold text-white/10 group-hover:text-white/20 transition-colors">{project.title.substring(0, 2)}</h3>
                        
                         {/* Overlay Links */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm">
                             <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-purple-500 hover:text-white transition-colors"><FaGithub /></a>
                             <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 hover:text-white transition-colors"><FaExternalLinkAlt /></a>
                        </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-purple-300 border border-purple-500/20">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <ul className="space-y-2 mt-auto">
                            {project.points.slice(0, 2).map((point, i) => (
                                <li key={i} className="text-gray-400 text-sm pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-pink-500 before:rounded-full">
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
