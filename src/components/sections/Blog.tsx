import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';

export default function Blog() {
  const { t } = useLanguage();
  const [activePost, setActivePost] = useState<number | null>(null);

  const posts = [
    {
      date: '2026-04-18',
      title: t('初始化：AI 编码的新起点', 'Initialization: A New Start for AI Coding'),
      excerpt: t('在这篇文章中，我将分享为什么我选择全身心投入到 AI 驱动的开发模式中，以及它是如何彻底改变我的生产力的。', 'In this post, I share why I chose to fully commit to AI-driven development and how it has radically transformed my productivity.'),
      content: t('这是博文的详细内容占位符。AI 驱动开发不仅仅是生成代码，更是关于如何通过更高级的抽象来思考系统架构。', 'This is a placeholder for the detailed blog content. AI-driven development is more than just code generation; it is about thinking about system architecture through higher-level abstractions.'),
    },
    {
      date: '2026-04-10',
      title: t('从 Backend 到 AI Native 的架构转型', 'Architectural Shift: From Backend to AI Native'),
      excerpt: t('探讨传统后端开发者在 AI 时代如何拥抱大模型，重构自己的技术栈与思维模型。', 'Exploring how traditional backend developers embrace LLMs and refactor their tech stacks and mental models in the AI era.'),
      content: t('传统的后端架构在被 AI 重写。微服务的拆分粒度、接口定义的规范性，现在都在为了更好的“LLM 可理解性”而进化。', 'Traditional backend architectures are being rewritten by AI. Microservices granularity and API definition standards are evolving for better "LLM readability".'),
    },
    {
      date: '2026-03-25',
      title: t('Vibe Coding：一种全新的交付节奏', 'Vibe Coding: A New Rhythm of Delivery'),
      excerpt: t('在 AI 协作下，开发节奏从“敲键盘”转变为“语言指导”，这种范式转移对交付质量意味着什么？', 'Under AI collaboration, the development rhythm shifts from "typing" to "language steering". What does this mean for quality?'),
      content: t('交付质量不再取决于单行代码的编写，而取决于对业务逻辑的精确描述。Vibe Coding 让开发者从繁琐的语法中解脱出来，专注于核心逻辑。', 'Delivery quality no longer depends on manual code lines but on precise business logic description. Vibe Coding frees developers from syntax to focus on core logic.'),
    },
  ];

  return (
    <section id="blog" className="py-24 border-t border-line">
      <div className="editorial-container">
        <AnimatePresence mode="wait">
          {activePost === null ? (
            <motion.div 
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16"
            >
              <div>
                <h2 className="text-xs font-black tracking-[0.2em] opacity-40 mb-6 uppercase">
                  {t('技术动态', 'JOURNAL & BLOG')}
                </h2>
                <h3 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] text-ink mb-10">
                  {t('思考与', 'THOUGHTS')}<br />
                  {t('记录', 'RECORDS')}
                </h3>
              </div>

              <div className="space-y-16">
                {posts.map((post, index) => (
                  <motion.article 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="side-border group cursor-pointer"
                    onClick={() => setActivePost(index)}
                  >
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">
                      {post.date}
                    </div>
                    <h4 className="text-3xl font-black uppercase tracking-tighter mb-6 text-ink group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-xl font-serif italic text-slate-600 leading-relaxed max-w-2xl mb-8">
                      {post.excerpt}
                    </p>
                    <button className="text-xs font-black uppercase tracking-widest text-primary-600 border-b-2 border-primary-600 pb-1 cursor-pointer">
                      {t('阅读全文', 'Read More')}
                    </button>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto"
            >
              <button 
                onClick={() => setActivePost(null)}
                className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-ink transition-colors mb-12 cursor-pointer"
              >
                <ArrowLeft size={16} />
                {t('返回列表', 'Back to list')}
              </button>

              <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">
                {posts[activePost].date}
              </div>
              <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight text-ink mb-12">
                {posts[activePost].title}
              </h3>
              
              <div className="prose prose-slate max-w-none">
                <p className="text-2xl font-serif italic text-slate-700 leading-relaxed mb-12">
                  {posts[activePost].excerpt}
                </p>
                <div className="h-[1px] bg-line w-24 mb-12" />
                <p className="text-xl font-serif text-slate-600 leading-relaxed">
                  {posts[activePost].content}
                </p>
                <div className="mt-24 p-8 bg-gray-soft rounded-sm italic text-slate-500">
                  {t('这是一篇示例文章，更多内容正在初始化中...', 'This is a sample post. More content is being initialized...')}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
