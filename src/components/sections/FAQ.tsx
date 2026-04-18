import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('什么是“纯 AI 编码”？', 'What is "Pure AI Coding"?'),
      answer: t('这意味着从架构设计方案、核心逻辑编写到测试用例生成，全过程深度利用 Claude Code 等顶级 AI 工具协作。开发者转变为系统架构与 Reviewer 角色，极大减少了低级 Bug 和无谓的手工劳动。', 'This means utilizing top-tier AI tools like Claude Code throughout the entire process—from architecture design to core logic and test generation. The developer pivots to an Architect and Reviewer role, significantly reducing low-level bugs and manual labor.'),
    },
    {
      question: t('AI 交付的项目质量有保障吗？', 'Is AI-delivered quality guaranteed?'),
      answer: t('质量反而更高。通过 AI 自动化生成 100% 覆盖的单元测试，并结合我作为资深架构师的 Code Review 经验，可以确保交付的代码既快又稳，且具备大厂级的工程化水准。', 'Quality is actually higher. By leveraging AI to generate unit tests with 100% coverage, combined with my experience as a Senior Architect for Code Reviews, I ensure code is delivered both fast and stable at enterprise-grade engineering levels.'),
    },
    {
      question: t('这种模式适合什么样的项目？', 'What projects are suitable for this mode?'),
      answer: t('非常适合数字化转型、MVP 快速验证、高可靠性后台管理系统以及需要快速迭代的 SaaS 产品。', 'It is ideal for digital transformations, rapid MVP validation, high-reliability backend systems, and SaaS products requiring fast iterations.'),
    },
    {
      question: t('如何联系你合作？', 'How to contact for collaboration?'),
      answer: t('您可以通过 header 处的邮件按钮直接向我发送邮件，或者在 GitHub 上关注我的最新动态。我目前主要接受数字化架构咨询与高价值产品的前后端全栈开发需求。', 'You can directly email me via the button in the header or follow my updates on GitHub. I currently accept digital architecture consulting and high-value full-stack development requests.'),
    },
  ];

  return (
    <section id="faq" className="py-24 border-t border-line">
      <div className="editorial-container">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
          <div>
            <h2 className="text-xs font-black tracking-[0.2em] opacity-40 mb-6 uppercase">
              {t('常见问题', 'FAQ')}
            </h2>
            <h3 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] text-ink mb-10">
              {t('新范式', 'NEW')}<br />
              {t('工作流', 'PARADIGM')}
            </h3>
          </div>

          <div className="space-y-12">
            {faqs.map((faq, index) => (
              <div key={`faq-wrap-${index}`} className="side-border">
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-6 text-ink">
                  {faq.question}
                </h4>
                <p className="text-lg font-serif italic text-slate-600 leading-relaxed max-w-2xl">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
