import React from 'react';
import { motion } from 'motion/react';
import { Layers, Cpu } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  problem: string[];
  solution: string[];
  design: string[];
  value: string[];
  icon: React.ReactNode;
  tags: string[];
  color: string;
}

const projects: Project[] = [
  {
    title: "企业级私有信息增强智能问答平台",
    description: "构建一套完整的非结构化数据处理 Pipeline，通过检索增强生成（RAG）架构，解决了大模型在企业私有数据上的幻觉问题，打破数据孤岛。",
    icon: <Layers className="text-gray-900" />,
    tags: ["RAG Architecture", "LLM", "Vector DB"],
    color: "labs-card-slate",
    problem: [
      "企业知识分散在本地/多源业务系统，难以统一检索与有效复用",
      "大模型无法直接访问私有数据，且由于知识库缺失易产生幻觉",
      "关键业务决策缺乏可回溯的忠实数据源与信源背书"
    ],
    solution: [
      "自研文档解析与智能清洗分片（chunking）Pipeline",
      "基于向量数据库实现语义检索 + 混合检索（Keyword + Semantic）",
      "设计多步推理与回答源溯源归因逻辑，确保每个答案均有可查信源"
    ],
    design: [
      "检索召回策略设计（Recall vs Precision）",
      "Prompt 结构工程（减少 Hallucination）与 Answer Grounding",
      "支持按模版生成数据报表/日报周报等结构化输出"
    ],
    value: [
      "提升知识获取效率（秒级响应）",
      "问答准确率达 95% 以上",
      "大幅降低信息查询链路及重复沟通成本"
    ]
  },
  {
    title: "多智能体（Multi-Agent）任务协作系统",
    description: "面向复杂任务拆解与自动执行的 AI Agent 系统。将单一的 AI 调用转变为“规划-执行-校验”的闭环自动化流水线。",
    icon: <Cpu className="text-gray-900" />,
    tags: ["Autonomous Agents", "Workflow Automation"],
    color: "labs-card-green",
    problem: [
      "单一 LLM 难以稳定处理“规划-执行-校验”全流程复杂任务",
      "复杂逻辑下 AI 输出稳定性差，难以直接对接生产系统接口",
      "缺乏对执行过程的中间监控与自动回溯重试机制"
    ],
    solution: [
      "Planner Agent：任务拆解与路径规划；Executor Agent：自主执行",
      "Reviewer Agent：对输出结果进行多维度质量审查与闭环校验",
      "Memory 模块：全局上下文管理与执行状态持久化"
    ],
    design: [
      "Agent 间异步协同通信机制（Message Passing）",
      "可视化任务执行路径看板与动态环境重规划",
      "自动错误回溯与重试机制，确保流程 80% 以上自动化"
    ],
    value: [
      "将 AI 调用升级为系统级协作，提升复杂任务稳定性",
      "在内容生产、代码分发等垂直领域实现规模化交付",
      "打破“只能聊不能干”的局限，提供自动化工作流架构"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 tracking-tighter">
            核心项目展示
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            探索 AI 与 业务流程的深度融合方案
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, idx) => {
            const isPink = idx === 0;
            const bgClass = isPink ? 'bg-labs-card-pink' : 'bg-labs-card-green';
            const accentColor = isPink ? 'bg-labs-pink/20' : 'bg-labs-green/20';
            const dotColor = isPink ? 'bg-labs-pink/40' : 'bg-labs-green/40';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`labs-card ${bgClass} group hover:shadow-2xl hover:shadow-black/5 transition-all duration-700`}
              >
                <div className="absolute inset-0 noise-texture" />
                <div className="rounded-[64px] p-8 lg:p-14 h-full labs-glass relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-96 h-96 ${accentColor} blur-[100px] -mr-32 -mt-32 pointer-events-none`} />
                  
                  <div className="absolute top-8 right-8">
                     <div className="labs-pill bg-black text-white px-8 text-[10px] uppercase tracking-widest py-2 border-none">
                       {project.tags[0]}
                     </div>
                  </div>

                  <div className="flex flex-col gap-12 lg:gap-16 relative z-10">
                    {/* Top Section: Title & Description */}
                    <div className="space-y-6 max-w-4xl">
                      <h3 className="text-4xl md:text-6xl font-display font-black text-gray-900 leading-[0.9] tracking-tighter">
                        {project.title}
                      </h3>
                      <p className="text-gray-800 text-lg md:text-xl font-bold leading-tight opacity-80">
                        {project.description}
                      </p>
                      
                      {/* Interaction Button if exists */}
                      {isPink && (
                        <div className="pt-4">
                          <div className="relative group/btn inline-block">
                            <button className="labs-pill bg-black text-white text-base py-4 px-12 border-none shadow-xl shadow-black/10 transition-all hover:scale-105 active:scale-95">
                              详情说明
                            </button>
                            <div className="absolute top-full left-0 mt-4 w-64 p-4 bg-black text-white text-[10px] font-bold rounded-2xl opacity-0 translate-y-2 pointer-events-none group-hover/btn:opacity-100 group-hover/btn:translate-y-0 transition-all duration-300 z-50 shadow-2xl">
                              这是一个基于 RAG 架构构建的知识问答系统示例，当前知识库基于我的个人资料构建，用于演示系统能力。
                              <div className="absolute -top-1 left-8 w-2 h-2 bg-black rotate-45" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Section: Media & Details Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
                      {/* Left: Video Demonstration (if Pink project) */}
                      {isPink && (
                        <div className="lg:col-span-6 h-full">
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative h-full"
                          >
                            <div className="labs-glass rounded-[48px] p-2 overflow-hidden shadow-2xl border-white/60 bg-white/20 group/video h-full flex flex-col">
                              <div className="relative rounded-[40px] overflow-hidden flex-1 border border-black/5 min-h-[300px]">
                                <video 
                                  src="https://cdn.jsdelivr.net/gh/mmm345-beep/my-portfolio@main/4月23日%20(1)(1).mp4"
                                  autoPlay 
                                  loop 
                                  muted 
                                  playsInline
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                              </div>
                              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md border border-white px-4 py-1.5 rounded-full shadow-sm z-30">
                                <span className="text-[10px] font-black uppercase tracking-widest text-labs-pink">Live Demo</span>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      )}

                      {/* Right: Challenges & Values (Spans full width if no video) */}
                      <div className={`${isPink ? 'lg:col-span-6' : 'lg:col-span-12'} flex flex-col gap-8 h-full`}>
                        <div className="bg-white/40 backdrop-blur-md p-8 lg:p-12 rounded-[48px] border border-white/40 shadow-sm space-y-12 h-full flex flex-col justify-center">
                          <div className="space-y-6">
                            <h4 className="text-[10px] font-black text-gray-900/40 uppercase tracking-[0.3em] flex items-center gap-3">
                              <div className={`w-2.5 h-2.5 rounded-full ${dotColor}`} />
                              核心挑战
                            </h4>
                            <ul className="space-y-4">
                              {project.problem.map((p, i) => (
                                <li key={i} className="text-sm md:text-base text-gray-900 font-bold leading-tight flex items-start gap-3">
                                  <span className="text-labs-brand opacity-40">•</span>
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="space-y-6">
                            <h4 className="text-[10px] font-black text-gray-900/40 uppercase tracking-[0.3em] flex items-center gap-3">
                              <div className={`w-2.5 h-2.5 rounded-full ${dotColor}`} />
                              商业价值
                            </h4>
                            <div className={`grid grid-cols-1 ${isPink ? 'sm:grid-cols-1' : 'sm:grid-cols-3'} gap-4`}>
                              {project.value.map((v, i) => (
                                <div key={i} className="p-5 bg-white/70 rounded-[28px] border border-white text-xs font-black text-gray-900 leading-tight shadow-sm hover:translate-y-[-2px] transition-all">
                                  {v}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
