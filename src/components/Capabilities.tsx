import { motion } from 'motion/react';

export default function Capabilities() {
  const categories = [
    {
      title: "方法论层",
      items: ["RAG 系统设计", "Prompt Engineering (CoT/Role)", "Agent 工作流设计", "结构化思维模型"]
    },
    {
      title: "技术工具层",
      items: ["Claude/OpenAI API", "LangChain/LlamaIndex", "Pinecone/Supabase", "Notion/NotebookLM"]
    },
    {
      title: "AI 协作工具",
      items: ["Claude Code", "Trae / Codex", "Cursor", "Coze / Dify"]
    },
    {
      title: "设计实验",
      items: ["Figma AI", "Midjourney", "Vibe Coding", "React Bits"]
    }
  ];

  return (
    <section id="capabilities" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
           {/* Left Info */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="md:col-span-4 labs-card bg-labs-card-slate border border-black/5 p-12 flex flex-col justify-between"
           >
              <div>
                 <h2 className="text-4xl font-display font-black text-gray-900 tracking-tighter leading-none uppercase mb-6">能力 <br /> <span className="text-labs-brand">分层</span></h2>
                 <p className="text-gray-800 font-bold leading-tight">
                    从方法论抽象到技术栈落地的完整 AI 交付能力模型。
                 </p>
              </div>
              <div className="pt-10">
                 <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-900/40">最后更新时间</div>
                 <div className="text-lg font-display font-black text-gray-900">2026 春季 / v2.5</div>
              </div>
           </motion.div>

           {/* Right Stack */}
           <div className="md:col-span-8 labs-card bg-gray-50 border border-black/5 p-12 lg:p-16 grid grid-cols-2 md:grid-cols-4 gap-12">
              {categories.map((cat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-6"
                >
                  <h4 className="font-display font-black text-gray-900/30 text-[10px] uppercase tracking-[0.3em] border-b border-black/10 pb-4">{cat.title}</h4>
                  <ul className="space-y-4">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-900 font-bold leading-none flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-labs-blue opacity-40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
