import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      company: t('博世 (Bosch)', 'Bosch'),
      role: t('数字化转型 | 软件工程师', 'Digital Transformation | Software Engineer'),
      period: t('2024 - 至今', '2024 - Present'),
      description: t('专注于工业数字化转型与智能化系统架构。', 'Focused on industrial digital transformation and intelligent system architecture.'),
    },
    {
      company: t('中兴通讯 (ZTE)', 'ZTE'),
      role: t('软件工程师', 'Software Engineer'),
      period: '2022 - 2024',
      description: t('主要负责出口合规系统全栈开发。', 'Mainly responsible for full-stack development of export compliance systems.'),
    },
  ];

  return (
    <section id="experience" className="py-24 border-t border-line">
      <div className="editorial-container">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
          <div>
            <h2 className="text-xs font-black tracking-[0.2em] opacity-40 mb-6 uppercase">
              {t('工作经历', 'WORK EXPERIENCE')}
            </h2>
            <h3 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] text-ink mb-10">
              {t('职业', 'CAREER')}<br />
              {t('轨迹', 'PATH')}
            </h3>
          </div>

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="side-border"
              >
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">
                  {item.period}
                </div>
                <h4 className="text-3xl font-black uppercase tracking-tighter mb-2 text-ink">
                  {item.company}
                </h4>
                <p className="text-xl font-serif italic text-slate-800 font-bold mb-4">
                  {item.role}
                </p>
                <p className="text-lg font-serif italic text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
