import React from 'react';
import { Building, Code, Users, Server, Smartphone, Globe } from 'lucide-react';

const UseCases: React.FC = () => {
  const onePanelColorClasses = {
    blue: { background: 'bg-blue-100', text: 'text-blue-800' },
    green: { background: 'bg-green-100', text: 'text-green-800' },
    purple: { background: 'bg-purple-100', text: 'text-purple-800' },
    orange: { background: 'bg-orange-100', text: 'text-orange-800' }
  } as const;

  const onePanelCases = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "现代化运维团队",
      description: "需要容器化部署和云原生技术的团队，追求现代化技术栈和高效运维体验。",
      features: ["容器化部署", "云原生技术", "现代化界面", "自动化运维"],
      color: "blue"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: "快速建站场景",
      description: "需要快速部署WordPress、Halo等CMS的用户，注重建站效率和用户体验。",
      features: ["一键建站", "域名绑定", "SSL配置", "应用商店"],
      color: "green"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "中小型团队",
      description: "注重用户体验和操作简便性的团队，希望降低Linux服务器管理门槛。",
      features: ["简单易用", "中文支持", "移动友好", "快速上手"],
      color: "purple"
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: "AI 应用部署",
      description: "需要部署和管理大型语言模型(LLMs)的开发者和研究团队。",
      features: ["LLM支持", "GPU管理", "模型部署", "资源监控"],
      color: "orange"
    }
  ];

  const webminCases = [
    {
      icon: <Building className="h-8 w-8 text-gray-600" />,
      title: "传统企业环境",
      description: "成熟稳定的生产环境管理，需要完整的系统管理功能和精细化控制。",
      features: ["全面管理", "精细控制", "稳定可靠", "企业级"],
      color: "gray"
    },
    {
      icon: <Server className="h-8 w-8 text-gray-600" />,
      title: "资源受限场景",
      description: "低配置服务器和嵌入式系统，对系统资源消耗有严格要求。",
      features: ["低资源占用", "轻量级", "高效运行", "兼容性强"],
      color: "gray"
    },
    {
      icon: <Users className="h-8 w-8 text-gray-600" />,
      title: "多服务器管理",
      description: "需要统一管理多台服务器的运维场景，要求集群管理和配置同步。",
      features: ["集群管理", "配置同步", "批量操作", "统一监控"],
      color: "gray"
    },
    {
      icon: <Code className="h-8 w-8 text-gray-600" />,
      title: "兼容性要求",
      description: "老旧系统或特殊Unix环境，需要广泛的系统兼容性支持。",
      features: ["广泛兼容", "老系统支持", "Unix系统", "历史维护"],
      color: "gray"
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">适用场景分析</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            根据不同的技术需求和应用场景，选择最适合的服务器管理解决方案
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* 1Panel Use Cases */}
          <div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 mb-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">1Panel 最佳适用场景</h3>
              <p className="text-xl opacity-90">现代化、高效、用户友好的运维体验</p>
            </div>

            <div className="space-y-6">
              {onePanelCases.map((useCase, index) => {
                const colorClasses = onePanelColorClasses[useCase.color as keyof typeof onePanelColorClasses];

                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                    <div className="flex items-start mb-4">
                      <div className={`w-16 h-16 ${colorClasses.background} rounded-2xl flex items-center justify-center mr-4 flex-shrink-0`}>
                        {useCase.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h4>
                        <p className="text-gray-600">{useCase.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {useCase.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className={`px-3 py-1 ${colorClasses.background} ${colorClasses.text} rounded-full text-sm font-medium`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Webmin Use Cases */}
          <div>
            <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl p-8 mb-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Webmin 最佳适用场景</h3>
              <p className="text-xl opacity-90">成熟稳定、功能完整的企业级管理</p>
            </div>

            <div className="space-y-6">
              {webminCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-start mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                      {useCase.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h4>
                      <p className="text-gray-600">{useCase.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specific Application Scenarios */}
        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">具体应用场景建议</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-bold mb-2">初创公司快速建站</h4>
              <p className="text-indigo-100 mb-2">推荐 1Panel</p>
              <p className="text-sm text-indigo-200">一键部署，用户体验好</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-bold mb-2">大型企业生产环境</h4>
              <p className="text-indigo-100 mb-2">推荐 Webmin</p>
              <p className="text-sm text-indigo-200">稳定性和功能完整性</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-bold mb-2">个人开发者</h4>
              <p className="text-indigo-100 mb-2">推荐 1Panel</p>
              <p className="text-sm text-indigo-200">简单易用，现代化</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
