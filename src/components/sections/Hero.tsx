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
              className="text-huge mb-12 text-ink"
            >
              {t('AI 驱动的', 'AI Driven')}<br />
              {t('全栈', 'Full Stack')} <br />
              <span className="text-primary-600">{t('开发者', 'Developer')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-3xl font-serif italic text-slate-700 max-w-xl leading-relaxed"
            >
              {t(
                '探索如何利用 AI 重塑软件开发的全生命周期，交付极致性能的数字化解决方案。',
                'Exploring how to use AI to reshape the entire software development lifecycle, delivering high-performance digital solutions.'
              )}
            </motion.p>
          </div>

          <div className="side-border h-full flex flex-col justify-end py-4 min-h-[300px] md:min-h-[400px] mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-soft p-8 md:p-10 rounded-sm relative"
            >
              <span className="absolute top-4 right-4 bg-primary-600 text-white text-[10px] font-black uppercase px-2 py-1 tracking-widest leading-none">
                Featured
              </span>
              <h2 className="text-2xl font-black mb-4 uppercase tracking-tighter">IronLogix</h2>
              <p className="text-sm font-serif italic text-slate-600 leading-relaxed">
                {t(
                  '为追求极致的力量训练者设计，摒弃冗余功能，通过精简数据采集与AI分析，直指力量提升核心。',
                  'Designed for extreme athletes, eliminating redundancy via lean data and AI analysis to focus purely on strength gains.'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
