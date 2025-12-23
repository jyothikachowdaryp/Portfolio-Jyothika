import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaServer, FaBolt, FaBrain, FaRocket, FaCheckCircle, FaDatabase, FaNetworkWired } from 'react-icons/fa';

const FunZone = () => {
    const [currentLevel, setCurrentLevel] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const levels = [
        {
            id: 1,
            title: "Phase 1: Scale & Optimize",
            problem: "System Overload: 10,000+ SKUs are clogging the database. Latency is spiking to 5s.",
            problemIcon: <FaDatabase className="text-red-500 text-5xl" />,
            action: "Deploy Redis Caching",
            solution: "Solution Deployed: Implemented Redis caching & database indexing.",
            outcome: "Latency reduced by 35%. Real-time analytics enabled.",
            company: "Impact Analytics",
            color: "from-red-500 to-orange-500",
            accent: "text-orange-400"
        },
        {
            id: 2,
            title: "Phase 2: Intelligent Systems",
            problem: "Data Gap: Farmers lack accurate insights for crop identification.",
            problemIcon: <FaNetworkWired className="text-yellow-500 text-5xl" />,
            action: "Integrate ML Models",
            solution: "Solution Deployed: Built Flask services to serve ML inference.",
            outcome: "Identification accuracy boosted by 20%.",
            company: "Dell / KrishiMitra",
            color: "from-yellow-500 to-green-500",
            accent: "text-green-400"
        },
        {
            id: 3,
            title: "Phase 3: The Future Vision",
            problem: "Static Workflows: Systems execute commands but don't adapt autonomously.",
            problemIcon: <FaBrain className="text-blue-500 text-5xl" />,
            action: "Activate Agentic AI",
            solution: "Vision Realized: Creating autonomous agents that anticipate needs.",
            outcome: "Self-optimizing, intelligent infrastructure.",
            company: "Future Outlook",
            color: "from-blue-500 to-purple-500",
            accent: "text-purple-400"
        }
    ];

    const handleAction = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
            setCurrentLevel(prev => prev + 1);
        }, 2000); 
    };

    const resetJourney = () => {
        setCurrentLevel(0);
    };

    const renderSystemVisual = (levelIdx) => {
         // Visual representation of the system state
         // Level 0: Chaotic Red Lines
         // Level 1: Stable Orange Flow
         // Level 2: Green Data Packets
         // Level 3: Blue Neural Network Pulse
         
         const isCompleted = currentLevel > levelIdx;
         const isActive = currentLevel === levelIdx;

         if (isCompleted || (isActive && isAnimating)) {
             return (
                 <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                 >
                    <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${levels[levelIdx].color} blur-[60px] opacity-40 animate-pulse`}></div>
                        <FaCheckCircle className="text-9xl text-white drop-shadow-lg relative z-10" />
                    </div>
                 </motion.div>
             );
         }
         return null;
    };


  return (
    <section id="journey" className="section-padding relative min-h-[800px] flex items-center justify-center">
         {/* Background Ambient */}
         <div className="absolute inset-0 bg-black/40" />
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
             {/* Dynamic background lines based on state */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute h-[1px] w-full ${currentLevel === 3 ? 'bg-purple-500/20' : 'bg-gray-700/10'}`}
                    style={{ top: `${i * 5}%` }}
                    animate={{ x: [-1000, 1000] }}
                    transition={{ duration: 10 + i, repeat: Infinity, ease: "linear" }}
                />
            ))}
         </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-white">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Impact</span>
            </h2>
            <p className="text-gray-400 text-lg">My journey of solving complex problems. Experience the transformation.</p>
        </div>
        
        <div className="relative h-[500px]">
            <AnimatePresence mode="wait">
            {currentLevel < levels.length ? (
                <motion.div
                    key={currentLevel}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-4xl mx-auto glass-card border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                    {renderSystemVisual(currentLevel)}

                    <div className="grid md:grid-cols-2 gap-12 relative z-20">
                        {/* Problem State */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className={`px-4 py-1 rounded-full text-xs font-bold border border-white/20 text-gray-300`}>
                                   {levels[currentLevel].title}
                                </span>
                            </div>
                            
                            <h3 className="text-3xl font-bold text-white leading-tight">
                                {levels[currentLevel].problem}
                            </h3>
                            
                            <div className="p-6 bg-black/40 rounded-xl border border-white/5 flex items-center gap-6">
                                {levels[currentLevel].problemIcon}
                                <div>
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Current Status</p>
                                    <p className="text-red-400 font-mono">CRITICAL_WARNING</p>
                                </div>
                            </div>
                        </div>

                        {/* Action Area */}
                        <div className="flex flex-col justify-center items-center md:items-start space-y-8">
                            <p className="text-gray-300 leading-relaxed">
                                As the engineer, I analyzed the architecture and identified the key bottleneck. The system requires immediate intervention.
                            </p>
                            
                            <button
                                onClick={handleAction}
                                disabled={isAnimating}
                                className={`group relative px-8 py-4 bg-gradient-to-r ${levels[currentLevel].color} rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all w-full md:w-auto overflow-hidden`}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    {isAnimating ? "Thinking..." : levels[currentLevel].action}
                                    {!isAnimating && <FaBolt className="animate-pulse" />}
                                </span>
                                {isAnimating && (
                                    <motion.div 
                                        className="absolute inset-0 bg-white/20" 
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 2 }}
                                    />
                                )}
                            </button>
                            
                            {!isAnimating && (
                                <p className="text-xs text-center md:text-left text-gray-500">
                                    Click to execute solution
                                </p>
                            )}
                        </div>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    key="complete"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-3xl mx-auto text-center space-y-8 pt-10"
                >
                    <div className="inline-block p-8 rounded-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 blur-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
                    <FaRocket className="text-8xl text-purple-500 mx-auto mb-6 animate-bounce" />
                    
                    <h2 className="text-5xl font-bold text-white">System Optimized</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        From optimizing database queries to deploying agentic AI, I build systems that scale, learn, and perform.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-12">
                        {levels.map((lvl) => (
                             <div key={lvl.id} className="glass p-6 rounded-xl border-l-4 border-purple-500">
                                <h4 className="text-white font-bold text-lg mb-2">{lvl.company}</h4>
                                <p className="text-gray-400 text-sm">{lvl.outcome}</p>
                             </div>
                        ))}
                    </div>

                    <button 
                        onClick={resetJourney} 
                        className="mt-12 px-8 py-3 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-all"
                    >
                        Replay Journey
                    </button>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FunZone;
