import { motion } from 'motion/react';
import { ExternalLink, Github, Zap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('IronLogix', 'IronLogix'),
      description: t('为追求极致的力量训练者设计，摒弃冗余功能，通过精简数据采集与AI分析，直指力量提升核心。', 'Designed for extreme athletes, eliminating redundancy via lean data and AI analysis to focus purely on strength gains.'),
      image: 'https://picsum.photos/seed/ironlogix/800/600',
      tags: ['Strength Training', 'AI-Analysis', 'Deliverables'],
      link: 'https://ironlogix.faelan.cc/',
      github: 'https://github.com/xvfeiran',
    },
  ];

  return (
    <section id="projects" className="py-24 border-t border-line">
      <div className="editorial-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-black tracking-[0.2em] opacity-40 mb-6 uppercase">
              {t('实战案例', 'PORTFOLIO & CASE STUDIES')}
            </h2>
            <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-ink">
              {t('业务驱动', 'BUSINESS')}<br />
              {t('实战交付', 'DELIVERY')}
            </h3>
          </div>
          <a 
            href="https://ironlogix.faelan.cc/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-black uppercase tracking-widest text-primary-600 border-b-2 border-primary-600 pb-1"
          >
            {t('访问 IronLogix', 'Visit IronLogix')}
          </a>
        </div>

        <div className="grid md:grid-cols-1 gap-16 max-w-4xl">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-gray-soft p-12 mb-8 relative">
                <h4 className="text-4xl font-black uppercase tracking-tighter mb-4 text-ink">
                  {project.title}
                </h4>
                <p className="text-2xl font-serif italic text-slate-600 leading-relaxed mb-10">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest border border-slate-300 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
