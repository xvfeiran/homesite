import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-40 pb-24 overflow-hidden border-b border-line">
      <div className="editorial-container">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[14vw] md:text-[110px] leading-[0.85] font-black uppercase mb-12 text-ink tracking-[-0.04em]"
            >
              {t('AI 辅助', 'AI Assisted')}<br />
              {t('端到端', 'End-to-End')} <br />
              <span className="text-primary-600">{t('交付', 'Delivery')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-3xl font-serif italic text-slate-700 max-w-xl leading-relaxed"
            >
              {t(
                '探索如何利用 AI 重塑软件开发的全生命周期，交付极致性能的数字化解决方案。',
                'Exploring how to use AI to reshape the entire software development lifecycle, delivering high-performance digital solutions.'
              )}
            </motion.p>
          </div>

          <div className="side-border h-full flex flex-col justify-end py-4 min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-soft p-10 rounded-sm relative"
            >
              <span className="absolute top-4 right-4 bg-primary-600 text-white text-[10px] font-black uppercase px-2 py-1 tracking-widest leading-none">
                Featured
              </span>
              <h2 className="text-2xl font-black mb-4 uppercase tracking-tighter">IronLogix</h2>
              <p className="text-sm font-serif italic text-slate-600 leading-relaxed">
                {t(
                  '专注于力量举/力量提升的智能训练管理工具。',
                  'A smart training management tool focused on powerlifting and strength gains.'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
