import { motion } from 'framer-motion';
import { personalDetails } from '../data';
import { FaCode, FaServer, FaBrain } from 'react-icons/fa';

const About = () => {
    const cards = [
        { icon: <FaServer className="text-4xl text-purple-400" />, title: "Backend Systems", desc: "Designing scalable microservices & APIs" },
        { icon: <FaCode className="text-4xl text-pink-400" />, title: "Clean Code", desc: "Writing testable, maintainable software" },
        { icon: <FaBrain className="text-4xl text-blue-400" />, title: "AI Integration", desc: "Leveraging LLMs & seamless model deployment" },
    ];

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg leading-relaxed space-y-6"
            >
                <p>
                    {personalDetails.about}
                </p>
                <p>
                    I graduated from <strong>Siddaganga Institute of Technology</strong> with a degree in AI & Data Science. 
                    Currently, I'm solving complex inventory optimization problems at <strong>Impact Analytics</strong>.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                    <div>
                        <span className="block text-gray-500 text-sm">Location</span>
                        <span className="text-white font-medium">{personalDetails.location}</span>
                    </div>
                    <div>
                        <span className="block text-gray-500 text-sm">Experience</span>
                        <span className="text-white font-medium">2+ Years</span>
                    </div>
                     <div>
                        <span className="block text-gray-500 text-sm">Email</span>
                        <span className="text-white font-medium text-sm md:text-base">{personalDetails.email}</span>
                    </div>
                </div>
            </motion.div>

            <div className="grid gap-6">
                {cards.map((card, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card p-6 rounded-xl flex items-center space-x-6 hover:bg-white/5"
                    >
                        <div className="p-4 bg-white/5 rounded-full">
                            {card.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>
                            <p className="text-gray-400 text-sm">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
