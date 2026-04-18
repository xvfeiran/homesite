import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

export default function Education() {
  const { t } = useLanguage();

  const education = [
    {
      school: t('中南大学 (985/211)', 'Central South University (985/211)'),
      degree: t('软件工程硕士', 'Master of Software Engineering'),
      period: '2019 - 2022',
    },
    {
      school: t('宁波大学 (双一流)', 'Ningbo University (Double First Class)'),
      degree: t('通信工程学士', 'Bachelor of Communications Engineering'),
      period: '2015 - 2019',
    },
  ];

  return (
    <section id="education" className="py-24 border-t border-line">
      <div className="editorial-container">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
          <div>
            <h2 className="text-xs font-black tracking-[0.2em] opacity-40 mb-6 uppercase">
              {t('教育背景', 'EDUCATION HISTORY')}
            </h2>
            <h3 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] text-ink mb-10">
              {t('学术', 'ACADEMIC')}<br />
              {t('历程', 'JOURNEY')}
            </h3>
          </div>

          <div className="space-y-12">
            {education.map((item, index) => (
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
                  {item.school}
                </h4>
                <p className="text-xl font-serif italic text-slate-600 leading-relaxed">
                  {item.degree}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
