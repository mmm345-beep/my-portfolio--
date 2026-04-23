import { motion } from 'motion/react';
import { FlaskConical } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-black/5"
    >
      <div className="flex items-center gap-10">
        <a href="#hero" className="flex items-center gap-2 hover:opacity-70 transition-opacity translate-y-[2px]">
          <FlaskConical size={24} className="text-gray-900" />
          <span className="font-display font-black text-xl tracking-tighter">Grace Labs</span>
        </a>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-bold text-gray-900">
          <a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a>
          <a href="#workflow" className="hover:opacity-70 transition-opacity">Workflow</a>
          <a href="#about" className="hover:opacity-70 transition-opacity">About Me</a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-[10px] font-bold">GM</div>
      </div>
    </motion.nav>
  );
}
