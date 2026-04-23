import { motion, useMotionValue, useSpring, useMotionTemplate, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';
import { Sparkles, FlaskConical } from 'lucide-react';
import LightRays from './ui/LightRays';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const clipPath = useMotionTemplate`circle(150px at ${smoothX}px ${smoothY}px)`;
  const sectionRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Values
  const rotateX = useTransform(mouseY, (y) => {
    if (!sectionRef.current) return 0;
    const rect = sectionRef.current.getBoundingClientRect();
    const centerY = rect.height / 2;
    return (y - centerY) / 20; 
  });

  const rotateY = useTransform(mouseX, (x) => {
    if (!sectionRef.current) return 0;
    const rect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    return -(x - centerX) / 40;
  });

  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const roles = [
    "Vibe Coding", "RAG 知识系统设计", "Multi-agent 产品设计", "AI Workflow 自动化"
  ];

  const abilities = "专注于将大模型能力转化为可落地的产品系统";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative pt-0 pb-12 w-full bg-labs-slate overflow-hidden">
      {/* Overscroll Background Fix */}
      <div className="absolute top-0 left-0 right-0 h-[1000px] -translate-y-full bg-labs-slate pointer-events-none" />
      
      {/* Google Labs Header Section */}
      <div className="w-full bg-labs-slate pt-32 pb-40 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <LightRays 
            raysOrigin="top-center"
            raysColor="#4285f4"
            raysSpeed={2.0}
            lightSpread={0.6}
            rayLength={1.5}
            followMouse={true}
            mouseInfluence={0.3}
            noiseAmount={0.1}
            distortion={0.05}
            pulsating={true}
            saturation={1.6}
          />
        </div>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl mx-auto space-y-4 relative z-10"
        >
          <div className="flex justify-center mb-6">
            <motion.div 
               animate={{ rotate: [0, 10, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="w-16 h-16 bg-white shadow-xl p-4 rounded-3xl"
            >
              <FlaskConical className="w-full h-full text-labs-brand" />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-gray-900 tracking-tighter leading-none">
            Grace Labs <br /> <span className="text-labs-brand">AI 设计与实验空间</span>
          </h1>
        </motion.div>
      </div>

      {/* Main Bento Area */}
      <div className="max-w-7xl mx-auto px-6 -mt-32 grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 relative z-20">
        {/* Main Interactive Bento Card */}
        <motion.div 
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-8 bg-white labs-card shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative min-h-[500px] cursor-none group perspective-1000 border border-black/5"
          style={{ perspective: "1200px" }}
        >
          {/* Tags Layer */}
          <div className="absolute inset-x-0 inset-y-0 p-12 pointer-events-none z-20">
            <div className="absolute top-12 left-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-labs-brand/10 text-labs-brand text-xs font-black uppercase tracking-widest ">
                <Sparkles size={14} />
                <span>AI 产品架构师</span>
              </div>
            </div>
            <div className="absolute bottom-12 left-12 flex flex-wrap gap-2">
              {roles.map((role) => (
                <span key={role} className="labs-pill bg-gray-50 text-gray-400 uppercase tracking-widest text-[10px] border-none shadow-sm">
                  #{role}
                </span>
              ))}
            </div>
          </div>

          {/* Base Layer: HELLO, I'M Grace */}
          <div className="absolute inset-0 dot-matrix flex items-center justify-center">
            <motion.div 
              className="text-center"
              style={{
                rotateX: smoothRotateX,
                rotateY: smoothRotateY,
                transformStyle: "preserve-3d"
              }}
            >
              <h1 className="text-5xl md:text-8xl font-display font-black text-gray-900 tracking-tighter leading-none uppercase" style={{ transform: "translateZ(100px)" }}>
                HELLO, <br /> I'M Grace
              </h1>
            </motion.div>
          </div>

          {/* Masked Layer */}
          <motion.div 
            className="absolute inset-0 bg-[#000000] z-10 flex items-center justify-center pointer-events-none overflow-hidden"
            style={{
              clipPath: clipPath,
              WebkitClipPath: clipPath,
            }}
          >
            <motion.div 
              className="text-center"
              style={{
                rotateX: smoothRotateX,
                rotateY: smoothRotateY,
                transformStyle: "preserve-3d"
              }}
            >
              <h1 className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter leading-none" style={{ transform: "translateZ(100px)" }}>
                你好，<br /> 我是 Grace
              </h1>
            </motion.div>
          </motion.div>

          <motion.div 
            className="absolute w-[300px] h-[300px] border border-white/20 rounded-full pointer-events-none z-30"
            style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
          />
        </motion.div>

        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 bg-labs-card-slate labs-card p-12 flex flex-col items-center justify-center text-center space-y-10 group border border-black/5"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-labs-brand/5 rounded-[72px] blur-2xl group-hover:blur-3xl transition-all" />
            <div className="relative w-56 h-56 rounded-[56px] overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-700">
               <img 
                src="https://i.imgur.com/4f4wInL.png" 
                alt="Grace" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-900 font-display font-bold text-lg leading-tight px-4">
              {abilities}
            </p>
            <div className="inline-flex px-6 py-2 bg-white/60 border border-black/5 rounded-full text-[10px] font-black text-gray-500 uppercase tracking-widest backdrop-blur-sm">
              Based in Hangzhou, China
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
