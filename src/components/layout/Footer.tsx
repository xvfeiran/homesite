import { Twitter, Linkedin, Github, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'Github', href: 'https://github.com/xvfeiran' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/xvfeiran/' },
  ];

  const email = 'xu.feiran#qq.com';
  const realEmail = 'xu.feiran@qq.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(realEmail);
    alert(t('邮箱已复制到剪贴板', 'Email copied to clipboard'));
  };

  return (
    <footer className="py-24 border-t border-line">
      <div className="editorial-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex gap-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={copyEmail}
            title={t('点击复制邮箱', 'Click to copy email')}
            className="text-xs font-black uppercase tracking-widest text-primary-600 border-b-2 border-primary-600 pb-1 cursor-pointer"
          >
            {email}
          </button>
        </div>

        <div className="mt-24 pt-12 border-t border-line flex flex-col md:flex-row gap-6 justify-between items-center opacity-40 text-[10px] uppercase font-bold tracking-widest">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <p>© {currentYear} {t('徐斐然', 'Feiran Xu')}. {t('版权所有', 'All Rights Reserved.')}</p>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="font-sans hover:text-ink transition-colors cursor-pointer">
              湘ICP备2026014578
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
