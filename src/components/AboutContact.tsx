import { motion } from 'motion/react';
import { Mail, ArrowUpRight, Github, Twitter, Linkedin, FlaskConical } from 'lucide-react';

export default function AboutContact() {
  const email = "gracemao1491@foxmail.com";

  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
           <motion.div 
             initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-8"
           >
              <h2 className="text-5xl md:text-6xl font-display font-black text-gray-900 tracking-tighter leading-none">
                探索 <br /> 技术与 <span className="text-labs-brand">创意</span> 的边界
              </h2>
              <div className="space-y-10 pt-6">
                <div className="flex gap-6 group">
                  <span className="text-labs-brand font-display font-black text-2xl group-hover:scale-125 transition-transform leading-none">01</span>
                  <div className="space-y-2">
                    <h4 className="font-display font-black text-gray-900 text-xl tracking-tight leading-none uppercase">过去 / The Past</h4>
                    <p className="text-gray-500 text-sm leading-tight font-medium max-w-sm">拥有 7 年产品经理经验，主要在 B 端 SaaS 平台，沉淀了严谨的产品逻辑与业务洞察力。</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <span className="text-labs-green font-display font-black text-2xl group-hover:scale-125 transition-transform leading-none">02</span>
                  <div className="space-y-2">
                    <h4 className="font-display font-black text-gray-900 text-xl tracking-tight leading-none uppercase">现在 / The Present</h4>
                    <p className="text-gray-500 text-sm leading-tight font-medium max-w-sm">当前作为 AI 产品架构师，深度构建基于大模型的知识系统（RAG）、自动化工作流与智能体应用。</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <span className="text-labs-blue font-display font-black text-2xl group-hover:scale-125 transition-transform leading-none">03</span>
                  <div className="space-y-2">
                    <h4 className="font-display font-black text-gray-900 text-xl tracking-tight leading-none uppercase">未来 / The Future</h4>
                    <p className="text-gray-500 text-sm leading-tight font-medium max-w-sm">希望在更多真实复杂的业务场景中，推动 AI 原生产品的深度落地与价值转化。</p>
                  </div>
                </div>
              </div>
           </motion.div>

           {/* Philosophy/Tools Column */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-gray-50 p-12 labs-card flex flex-col justify-center gap-12 border border-black/5"
           >
              <div className="space-y-6">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">产品哲学 / Philosophy</h4>
                 <p className="text-2xl md:text-3xl font-display font-black text-gray-900 leading-tight">
                    "AI 不仅仅是代码；它更是连接人类意图与机器智能的桥梁。"
                 </p>
                 <div className="w-20 h-1 bg-labs-brand rounded-full" />
              </div>
              
              <div className="space-y-4">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">技术栈 / Stack</h4>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <span className="block text-xs font-black text-gray-900 uppercase">Architecture</span>
                       <div className="flex flex-wrap gap-2">
                          {['RAG', 'Prompt Eng', 'Agentic'].map(t => <span key={t} className="text-[10px] font-bold text-gray-500">{t}</span>)}
                       </div>
                    </div>
                    <div className="space-y-2">
                       <span className="block text-xs font-black text-gray-900 uppercase">Frameworks</span>
                       <div className="flex flex-wrap gap-2">
                          {['LangChain', 'Dify', 'Coze'].map(t => <span key={t} className="text-[10px] font-bold text-gray-500">{t}</span>)}
                       </div>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>

        {/* CC Style Featured Contact Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-labs-card-slate labs-card p-1 shadow-2xl shadow-slate-200 overflow-hidden group"
        >
          <div className="bg-white/40 backdrop-blur-2xl rounded-[60px] p-12 lg:p-20 border border-white/60 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-10 text-center lg:text-left">
              <div className="text-[12px] font-black uppercase tracking-[0.4em] text-gray-900/40">联系我 / Featured</div>
              <h3 className="text-6xl md:text-8xl font-display font-black text-gray-900 tracking-tighter leading-[0.8] uppercase">
                建立 <br /> <span className="text-labs-brand">联系</span>
              </h3>
              <p className="text-gray-800 text-lg font-bold max-w-md">
                对 AI 协作、工作流重构或产品出海感兴趣？<br />
                随时欢迎邮件探讨。
              </p>
              <div>
                 <a href={`mailto:${email}`} className="labs-pill bg-black text-white px-12 py-5 text-xl inline-flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl shadow-black/20">
                    {email} <ArrowUpRight size={20} />
                 </a>
              </div>
            </div>

            {/* Email Mockup Shape */}
            <div className="flex-1 w-full lg:w-auto relative perspective-1000">
               <motion.div 
                 animate={{ 
                   y: [0, -10, 0],
                   rotateX: [2, 0, 2],
                   rotateY: [-2, 0, -2]
                 }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="bg-white rounded-[48px] p-8 md:p-12 shadow-2xl relative z-10 border border-white/50"
               >
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 rounded-full bg-labs-brand flex items-center justify-center text-white">
                        <Mail size={24} />
                     </div>
                     <div>
                        <div className="text-xs font-black text-gray-900">{email}</div>
                        <div className="text-[10px] font-medium text-gray-400 uppercase tracking-widest leading-none pt-1">to: you</div>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="text-[10px] font-black text-labs-brand uppercase tracking-tighter">Subject: New Lab Collaboration</div>
                     <div className="h-6 w-full bg-gray-50 rounded-full flex items-center px-4">
                        <span className="text-[8px] font-bold text-gray-400">Hey Grace, seen your Multi-Agent workflow...</span>
                     </div>
                     <div className="h-16 w-full bg-blue-50/50 rounded-[24px] p-4 flex flex-col gap-2">
                        <div className="h-1.5 w-1/2 bg-labs-brand/20 rounded-full" />
                        <div className="h-1.5 w-full bg-labs-brand/10 rounded-full" />
                        <div className="h-1.5 w-3/4 bg-labs-brand/10 rounded-full" />
                     </div>
                     <div className="text-[8px] font-medium text-gray-300 italic">Thinking about a sync next week?</div>
                  </div>
                  <div className="mt-8 flex gap-3">
                     <div className="w-1/3 h-10 bg-black rounded-full" />
                     <div className="w-1/3 h-10 bg-gray-100 rounded-full" />
                  </div>
               </motion.div>
               {/* Blob backgrounds */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-labs-green rounded-full blur-[100px] opacity-20 pointer-events-none" />
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-labs-yellow rounded-full blur-[80px] opacity-30 pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Footer/Socials */}
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 pb-12">
           <div className="flex items-center gap-2">
              <FlaskConical size={20} />
              <span className="font-display font-black text-lg">Grace Labs</span>
           </div>
           <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="#" 
                  className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-900 border border-gray-100 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
           </div>
           <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
             Built with Passion in Hangzhou © 2026
           </div>
        </div>
      </div>
    </section>
  );
}
