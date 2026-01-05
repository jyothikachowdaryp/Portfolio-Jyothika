import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { personalDetails } from '../data';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black/50 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
        
        <div className="flex justify-center gap-6 mb-12">
            <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-purple-600 hover:text-white transition-all text-gray-400 text-xl">
                <FaLinkedinIn />
            </a>
            <a href={personalDetails.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-gray-800 hover:text-white transition-all text-gray-400 text-xl">
                <FaGithub />
            </a>
            <a href={`mailto:${personalDetails.email}`} className="p-4 bg-white/5 rounded-full hover:bg-pink-600 hover:text-white transition-all text-gray-400 text-xl">
                <FaEnvelope />
            </a>
        </div>

        <div className="text-gray-500 text-sm">
            <p className="mb-2">Designed & Built by {personalDetails.name}</p>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
