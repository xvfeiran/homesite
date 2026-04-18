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
  const { lang, t } = useLanguage();

  return (
    <section id="skills" className="py-24 border-t border-line">
      <div className="editorial-container">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
          <div className="max-w-md">
            <h2 className="text-xs font-black tracking-[0.2em] opacity-40 mb-6 uppercase">
              {t('核心竞争力', 'TECH STACK & SKILLS')}
            </h2>
            <h3 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] text-ink mb-10">
              {t('跨全栈的', 'FULL-STACK')}<br />
              {t('体系能力', 'CAPABILITY')}
            </h3>
            <p className="text-xl font-serif italic text-slate-600 leading-relaxed mb-12 lg:mb-0">
              {t(
                '从底层架构到交付体系，我构建了闭环的技术底座。',
                'From low-level architecture to delivery systems, I build closed-loop technical foundations.'
              )}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
            {skillGroups.map((group, groupIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.1 }}
                className="side-border"
              >
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 opacity-40">
                  {lang === 'zh' ? group.category : group.enCategory}
                </h4>
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div key={skill} className="text-lg font-black uppercase tracking-tighter text-ink border-b border-line pb-1 w-fit">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
