import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
            {skills.map((skill, idx) => (
                <motion.div
                    key={idx}
                    variants={item}
                    className="glass-card p-6 rounded-xl text-center group hover:bg-white/10 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="text-5xl mx-auto text-gray-400 group-hover:text-white transition-colors mb-4 flex justify-center transform group-hover:scale-110 duration-300">
                        <skill.icon />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden mt-2">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full"
                        ></motion.div>
                    </div>
                    <span className="text-xs text-gray-500 mt-1 block text-right">{skill.level}%</span>
                </motion.div>
            ))}
        </motion.div>

        {/* Categories as Tags */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
            {["Backend Development", "Cloud Architecture", "Database Optimization", "AI Integration", "CI/CD Pipelines", "System Design"].map((tag, i) => (
                <span key={i} className="px-6 py-2 rounded-full border border-white/10 text-gray-400 text-sm hover:border-purple-500 hover:text-purple-400 transition-colors cursor-default">
                    {tag}
                </span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
