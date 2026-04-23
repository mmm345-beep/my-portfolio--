import { motion } from 'motion/react';
import { Book, Github } from 'lucide-react';

export default function Workflows() {
  return (
    <section id="workflow" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 tracking-tighter">
            智能工作流探索
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            探索 AI 自动化与知识管理的最佳实践
          </p>
        </div>

        <div className="space-y-16">
          {/* Obsidian + Karpathy-wiki */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="labs-card bg-labs-card-yellow group hover:shadow-2xl hover:shadow-black/5 transition-all duration-700"
          >
            <div className="absolute inset-0 noise-texture" />
            <div className="rounded-[64px] p-8 lg:p-14 h-full labs-glass relative overflow-hidden">
               <div className="absolute top-0 right-0 w-96 h-96 bg-labs-yellow/10 blur-[100px] -mr-32 -mt-32 pointer-events-none" />
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-12 flex flex-col lg:flex-row items-center gap-12 relative z-10">
                     {/* Left content */}
                     <div className="lg:w-7/12 space-y-10">
                       <div className="inline-flex items-center gap-2 labs-pill bg-black text-white px-6 py-2 border-none">
                         <Book size={14} />
                         <span className="text-[10px] uppercase tracking-widest font-black">Knowledge OS</span>
                       </div>
                       <div className="space-y-6">
                         <h3 className="text-4xl md:text-6xl font-display font-black text-gray-900 leading-[0.9] tracking-tighter">
                           Obsidian + Karpathy <br /> 个人知识库
                         </h3>
                         <p className="text-gray-800 text-lg md:text-xl font-bold leading-tight max-w-xl">
                           基于 Obsidian 构建结构化知识库，融合 Karpathy 学习法，形成以 Concept Node 为核心的持续演进 AI 认知系统。
                         </p>
                       </div>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                          <div className="space-y-3">
                             <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-labs-yellow" />
                                方法设计
                             </h4>
                             <ul className="text-sm font-bold text-gray-600 space-y-1">
                                <li>· 以 Concept node 组织知识</li>
                                <li>· 双向链接构建图谱结构</li>
                                <li>· 基础 → 方法 → 应用分层</li>
                             </ul>
                          </div>
                          <div className="space-y-3">
                             <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-labs-yellow" />
                                项目价值
                             </h4>
                             <ul className="text-sm font-bold text-gray-600 space-y-1">
                                <li>· 笔记工具升级为“认知系统”</li>
                                <li>· 提升知识吸收脉络与迁移</li>
                                <li>· 形成可持续成长的 AI 知识栈</li>
                             </ul>
                          </div>
                       </div>

                       <div className="pt-4" />
                     </div>

                     {/* Right: Video Mockup */}
                     <div className="lg:w-5/12 relative">
                        <div className="bg-white/40 rounded-[48px] border border-white/60 p-4 h-full aspect-video lg:aspect-auto min-h-[350px] overflow-hidden flex items-center justify-center group-hover:bg-white/60 transition-colors shadow-2xl shadow-yellow-200/50">
                           <iframe
                             src="https://www.kapwing.com/e/69e8a0173de72fa1c591b66e"
                             title="Obsidian Knowledge Base"
                             className="w-full h-full rounded-[32px] border-none"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                             allowFullScreen
                           ></iframe>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* GitHub Trending Bot */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="labs-card bg-labs-card-blue group hover:shadow-2xl hover:shadow-black/5 transition-all duration-700"
          >
            <div className="absolute inset-0 noise-texture" />
            <div className="rounded-[64px] p-8 lg:p-14 h-full labs-glass relative overflow-hidden">
               <div className="absolute top-0 right-0 w-96 h-96 bg-labs-blue/10 blur-[100px] -mr-32 -mt-32 pointer-events-none" />
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                  <div className="lg:col-span-12 flex flex-col lg:flex-row items-start justify-between gap-12">
                     <div className="lg:w-7/12 space-y-8">
                        <div className="flex items-center gap-4">
                           <div className="w-16 h-16 rounded-3xl bg-black flex items-center justify-center border border-white/20">
                              <Github size={32} className="text-white" />
                           </div>
                           <div className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 bg-black text-white rounded-full">
                              Automated Workflow
                           </div>
                        </div>

                        <div className="space-y-6">
                           <h3 className="text-4xl md:text-6xl font-display font-black leading-[0.9] tracking-tighter text-gray-900">
                              GitHub 热点 <br /> 自动抓取机器人
                           </h3>
                           <p className="text-gray-800 text-xl font-bold leading-tight max-w-xl">
                              自动化持续抓取 GitHub Trending 内容，通过 AI 进行结构化分析与内容生成，无缝推送至 Notion。
                           </p>
                        </div>

                        <div className="pt-6" />
                     </div>

                     {/* Content flow for Bot */}
                     <div className="lg:w-5/12 bg-white/40 backdrop-blur-md p-8 rounded-[48px] border border-white/60 space-y-8 lg:mt-8 shadow-sm">
                        <div className="space-y-6">
                           <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-labs-blue/40" />
                              解决的问题
                           </h4>
                           <ul className="text-sm font-bold space-y-2 text-gray-700">
                              <li>· 热门项目分散，难以持续化追踪</li>
                              <li>· 冗余信息多，人工筛选成本极高</li>
                              <li>· 碎片化内容难以形成结构化报告</li>
                           </ul>
                        </div>
                        
                        <div className="space-y-6">
                           <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-labs-blue/40" />
                              Workflow 设计
                           </h4>
                           <div className="flex flex-wrap gap-2">
                              {['数据采集', '数据清洗', 'AI 总结', '内容生成'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/60 border border-white/80 rounded-full text-[10px] font-bold text-gray-900 shadow-sm">
                                   {tag}
                                </span>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
