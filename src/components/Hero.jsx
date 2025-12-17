import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { personalDetails } from '../data';
import profileImg from '../assets/profile.png'; 

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-32">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-purple-400 font-medium text-lg mb-4 block">Hi, I am</span>
          <h1 className="text-6xl md:text-7xl font-bold font-heading mb-4 leading-tight">
            {personalDetails.name.split(' ')[0]} <br/>
            <span className="text-gradient">{personalDetails.name.split(' ')[1]}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
            I am a{' '}
            <span className="text-pink-500 font-medium">
              <Typewriter
                words={['Software Engineer', 'Backend Developer', 'Python Expert', 'FastAPI Specialist']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg max-w-lg leading-relaxed">
            {personalDetails.tagline}
          </p>
          <div className="flex gap-4">
            <Link to="projects" smooth={true} duration={500} className="btn-primary cursor-pointer">
              View Work
            </Link>
            <Link to="contact" smooth={true} duration={500} className="btn-outline cursor-pointer">
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-full animate-pulse-slow blur-lg opacity-50"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 glass-card animate-float">
               <img 
                src={profileImg} 
                alt={personalDetails.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badges */}
            <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-4 -right-4 glass px-4 py-2 rounded-lg text-sm font-semibold text-purple-300"
            >
              Backend Pro 🚀
            </motion.div>
            <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-8 -left-8 glass px-4 py-2 rounded-lg text-sm font-semibold text-pink-300"
            >
              AI Enthusiast 🤖
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
