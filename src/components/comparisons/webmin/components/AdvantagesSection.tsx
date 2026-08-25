import React from 'react';
import { Container, Zap, Shield, Smartphone, Rocket, Users } from '../../ui/icons';

const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: <Container className="h-8 w-8 text-blue-600" />,
      title: "容器化技术优势",
      description: "深度集成Docker容器技术，实现应用隔离部署，降低安全风险，提升运维效率。一键部署主流应用，支持容器编排管理。",
      image: "/images/comparisons/webmin/container-tech.webp",
      width: 1233,
      height: 651,
      stats: "99.9% 部署成功率"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "现代化用户体验",
      description: "基于Vue.js的现代化界面设计，直观的操作流程，降低学习成本。响应式设计完美支持移动端访问。",
      image: "/images/comparisons/webmin/modern-vs-traditional.webp",
      width: 1434,
      height: 1028,
      stats: "90% 用户首次使用成功"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "增强安全防护",
      description: "容器化隔离减少攻击面，内置防火墙管理和日志审计，自动SSL证书配置，全方位保障系统安全。",
      image: "/images/comparisons/webmin/security-shield.png",
      width: 512,
      height: 512,
      stats: "0 重大安全事件"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: "移动优先设计",
      description: "完整的移动端适配，随时随地管理服务器。触控友好的界面设计，在平板和手机上都有出色的使用体验。",
      image: "/images/comparisons/webmin/comparison.jpg",
      width: 1230,
      height: 1390,
      stats: "100% 移动端兼容"
    },
    {
      icon: <Rocket className="h-8 w-8 text-blue-600" />,
      title: "快速部署能力",
      description: "精选应用商店，一键安装WordPress、Halo等主流应用。自动化配置域名绑定和SSL证书，大幅提升建站效率。",
      image: "/images/comparisons/webmin/server-admin.webp",
      width: 989,
      height: 538,
      stats: "5分钟完成建站"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "活跃社区生态",
      description: "GitHub 29k+ Stars，快速增长的开发者社区。丰富的中文文档和教程，积极的社区支持和问题解答。",
      image: "/images/comparisons/webmin/cloud-infrastructure.png",
      width: 1355,
      height: 1068,
      stats: "100+ 贡献者"
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">1Panel 核心优势</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            探索1Panel在现代化服务器管理中的技术创新与用户体验优势
          </p>
        </div>

        <div className="grid gap-12">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="bg-blue-50 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                      {advantage.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{advantage.title}</h3>
                      <div className="text-blue-600 font-semibold text-lg">{advantage.stats}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {advantage.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      现代化
                    </span>
                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      易用性
                    </span>
                    <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                      高效率
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="relative">
                  <img
                    src={advantage.image}
                    alt={advantage.title}
                    width={advantage.width}
                    height={advantage.height}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="mt-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">1Panel 关键指标</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">29k+</div>
              <div className="text-blue-100">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2.5k+</div>
              <div className="text-blue-100">Forks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">贡献者</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">V2</div>
              <div className="text-blue-100">最新版本</div>
            </div>
          </div>
        </div>

        {/* Technology Innovation */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Container className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">技术创新</h4>
            <p className="text-gray-600">采用最新的Go语言和Vue.js技术栈，提供更好的性能和开发体验</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">开发效率</h4>
            <p className="text-gray-600">一键部署、自动化配置，大幅提升运维团队的工作效率</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">安全可靠</h4>
            <p className="text-gray-600">容器化隔离和现代化安全防护机制，确保系统安全稳定运行</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
