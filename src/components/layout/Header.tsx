import { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('xu.feiran@qq.com');
    alert(t('邮箱已复制到剪贴板', 'Email copied to clipboard'));
  };

  const navItems = [
    { label: t('主页', 'Home'), href: '#' },
    { label: t('项目', 'Projects'), href: '#projects' },
    { label: t('技能', 'Skills'), href: '#skills' },
    { label: t('博客', 'Blog'), href: '#blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-line py-4' : 'bg-transparent py-8'
      }`}
    >
      <nav className="editorial-container flex items-center justify-between">
        <a href="#" className="font-sans text-xl font-extrabold tracking-tighter lowercase">
          {t('徐斐然', 'feiran xu')}.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button 
                onClick={copyEmail}
                className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              >
                {t('联系', 'Contact')}
              </button>
            </li>
          </ul>

          <div className="h-4 w-[1px] bg-line" />

          <button 
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="text-xs font-black uppercase tracking-widest hover:text-primary-600 transition-colors"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="p-2"
          >
            <Languages size={18} />
          </button>
          <button 
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-line"
          >
            <ul className="editorial-container py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="block text-sm font-bold uppercase tracking-widest"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
