import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      title: t('AI 原生开发', 'AI-Native Development'),
      description: t('深度整合 Claude Code 与 LLM 工作流，实现 100% AI 辅助编码，交付效率提升 3-5 倍。', 'Deep integration of Claude Code and LLM workflows, achieving 100% AI-assisted coding and 3-5x efficiency.'),
    },
    {
      title: t('资深架构底座', 'Architectural Foundation'),
      description: t('具备应对万千级设备的 AIoT 平台架构经验，确保系统的高可用、可扩展与安全性。', 'Experience in AIoT platform architecture for thousands of devices, ensuring high availability, scalability and security.'),
    },
    {
      title: t('全栈自动化交付', 'Full-Stack Delivery'),
      description: t('涵盖 Web 全栈、iOS 客户端以及复杂的容器化 DevOps 流程，实现真正的全链路交付。', 'Covers Web full-stack, iOS clients, and complex containerized DevOps, achieving true end-to-end delivery.'),
    },
    {
      title: t('高质量代码产出', 'Quality Codebase'),
      description: t('AI 生成单元测试与合规性扫描，代码覆盖率目标 100%，解决传统开发的文档/代码失同步。', 'AI-generated unit tests and compliance scans, 100% code coverage target, solving doc/code sync issues.'),
    },
    {
      title: t('DevOps 专家', 'DevOps Expertise'),
      description: t('精通 Jenkins, K8s, GitOps 体系架构，为企业构建标准化的软件工程化基石。', 'Expertise in Jenkins, K8s, and GitOps, building standardized software engineering foundations for enterprises.'),
    },
    {
      title: t('灵捷交付模型', 'Agile Delivery Model'),
      description: t('独立开发者模式，省去沟通冗余，以极简团队（AI+人）交付大厂级复杂应用。', 'Independent developer mode, eliminating communication redundancy, delivering enterprise-level apps with a minimal team.'),
    },
  ];

  return (
    <section id="features" className="py-24 border-t border-line">
      <div className="editorial-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-black tracking-[0.2em] opacity-40 mb-6 uppercase">
              {t('核心理念', 'PHILOSOPHY')}
            </h2>
            <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-ink">
              {t('效率', 'EFFICIENCY')}<br />
              {t('重新定义', 'REDEFINED')}
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-12 border-r border-b border-line hover:bg-gray-soft transition-colors"
            >
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-6 text-ink">
                {feature.title}
              </h4>
              <p className="text-lg font-serif italic text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
