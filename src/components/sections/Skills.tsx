import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

const skillGroups = [
  {
    category: '后端架构',
    enCategory: 'Backend Architecture',
    skills: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'Kafka', 'Microservices'],
  },
  {
    category: 'AI 协作 (Vibe Coding)',
    enCategory: 'Vibe Coding',
    skills: ['Claude Code', 'AI-Assisted Coding', 'Prompt Engineering', 'LLM Workflows'],
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 border-t border-line">
      <div className="editorial-container">
        <div className="grid lg:grid-cols-[0.6fr_1.4fr] gap-16">
          <div className="max-w-md">
            <h2 className="text-xs font-black tracking-[0.2em] opacity-40 mb-6 uppercase">
              {t('技术体系', 'METHODOLOGY & STACK')}
            </h2>
            <h3 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] text-ink mb-10">
              {t('效率与', 'EFFICIENCY')}<br />
              {t('基石', 'FOUNDATION')}
            </h3>
            <p className="text-xl font-serif italic text-slate-600 leading-relaxed">
              {t(
                '利用 AI 协作提升交付效率，结合深厚的后端基座，构建可靠的数字化产品。',
                'Leveraging AI collaboration to boost delivery efficiency, combined with a deep backend foundation for reliable digital products.'
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="side-border"
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 opacity-40">
                {t('我的工作方法', 'MY METHODOLOGY')}
              </h4>
              <div className="space-y-6">
                <div className="text-2xl font-black uppercase tracking-tighter text-ink leading-tight">
                  AI 协作 / VIBE CODING
                </div>
                <p className="text-base font-serif italic text-slate-600 leading-relaxed">
                  {t(
                    '利用大模型和 AI 辅助工具贯穿开发全流程，极致提升交付效率与代码质量。',
                    'Utilizing LLMs and AI tools throughout the entire development process to maximize delivery efficiency and code quality.'
                  )}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="side-border"
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 opacity-40">
                {t('技术基础', 'TECHNICAL FOUNDATION')}
              </h4>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {skillGroups.find(g => g.enCategory === 'Backend Architecture')?.skills.map((skill) => (
                  <div key={skill} className="text-xl font-black uppercase tracking-tighter text-ink border-b border-line pb-1 whitespace-nowrap">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
