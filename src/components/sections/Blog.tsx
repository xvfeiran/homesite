import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

export default function Blog() {
  const { t } = useLanguage();

  const posts = [
    {
      date: '2026-04-18',
      title: t('初始化：AI 编码的新起点', 'Initialization: A New Start for AI Coding'),
      excerpt: t('在这篇文章中，我将分享为什么我选择全身心投入到 AI 驱动的开发模式中，以及它是如何彻底改变我的生产力的。', 'In this post, I share why I chose to fully commit to AI-driven development and how it has radically transformed my productivity.'),
      link: '#',
    },
  ];

  return (
    <section id="blog" className="py-24 border-t border-line">
      <div className="editorial-container">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
          <div>
            <h2 className="text-xs font-black tracking-[0.2em] opacity-40 mb-6 uppercase">
              {t('技术动态', 'JOURNAL & BLOG')}
            </h2>
            <h3 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] text-ink mb-10">
              {t('思考与', 'THOUGHTS')}<br />
              {t('初始化', 'INITIALIZE')}
            </h3>
          </div>

          <div className="space-y-16">
            {posts.map((post, index) => (
              <motion.article 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="side-border group"
              >
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">
                  {post.date}
                </div>
                <h4 className="text-3xl font-black uppercase tracking-tighter mb-6 text-ink group-hover:text-primary-600 transition-colors">
                  <a href={post.link}>{post.title}</a>
                </h4>
                <p className="text-xl font-serif italic text-slate-600 leading-relaxed max-w-2xl mb-8">
                  {post.excerpt}
                </p>
                <a href={post.link} className="text-xs font-black uppercase tracking-widest text-primary-600 border-b-2 border-primary-600 pb-1">
                  {t('阅读全文', 'Read More')}
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
