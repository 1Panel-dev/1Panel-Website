import { Cpu, Shield, Zap, Container, Code, Server } from '../../ui/icons'

const TechArchitecture = () => {
  const architectureFeatures = [
    {
      icon: Code,
      title: '现代化技术栈',
      description: 'Go + Vue.js + Ant Design',
      details: ['高性能 Go 后端', '现代化前端框架', '优雅的 UI 组件库'],
      highlight: '1Panel',
      color: 'blue'
    },
    {
      icon: Container,
      title: '容器化核心',
      description: 'Docker 容器原生支持',
      details: ['应用隔离部署', '环境一致性保证', '版本冲突解决'],
      highlight: '1Panel',
      color: 'green'
    },
    {
      icon: Zap,
      title: '高性能架构',
      description: '低资源占用，高并发处理',
      details: ['内存占用极低', 'CPU 效率优异', '响应速度快'],
      highlight: '1Panel',
      color: 'yellow'
    },
    {
      icon: Shield,
      title: '安全机制',
      description: '多层次安全防护',
      details: ['容器天然隔离', '开源代码审计', '无强制登录'],
      highlight: '1Panel',
      color: 'red'
    }
  ]

  const comparisonMetrics = [
    {
      metric: '内存占用',
      onepanel: '< 100MB',
      pagoda: '> 200MB',
      improvement: '50%+'
    },
    {
      metric: 'CPU 占用',
      onepanel: '< 1%',
      pagoda: '2-5%',
      improvement: '70%+'
    },
    {
      metric: '启动时间',
      onepanel: '< 3秒',
      pagoda: '10-15秒',
      improvement: '80%+'
    },
    {
      metric: '响应延迟',
      onepanel: '< 50ms',
      pagoda: '100-200ms',
      improvement: '75%+'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200',
      red: 'bg-red-100 text-red-600 border-red-200'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="architecture" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            技术架构革命性优势
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            1Panel 采用现代化技术栈和容器化理念，在性能、安全性和可维护性方面
            实现了对传统面板的代际超越
          </p>
        </div>

        {/* 架构特性展示 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {architectureFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-xl ${getColorClasses(feature.color)} flex items-center justify-center mb-4`}>
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 性能对比图表 */}
        <div className="mb-16 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
          <div className="mb-8 flex items-center justify-center gap-3 text-center">
            <Cpu className="text-blue-600" size={28} />
            <h3 className="text-2xl font-bold text-gray-900">性能表现对比</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {comparisonMetrics.map((item) => (
              <div key={item.metric} className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
                <h4 className="mb-4 text-lg font-bold text-gray-900">{item.metric}</h4>
                <dl className="space-y-3 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-gray-500">1Panel</dt>
                    <dd className="font-semibold text-blue-700">{item.onepanel}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-gray-500">传统面板</dt>
                    <dd className="font-semibold text-orange-700">{item.pagoda}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-blue-100 pt-3">
                    <dt className="text-gray-500">提升幅度</dt>
                    <dd className="font-bold text-green-600">{item.improvement}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>

        {/* 架构图对比 */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* 1Panel 架构 */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
              <Container className="mr-3" size={24} />
              1Panel 现代化架构
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-gray-900">前端层</div>
                <div className="text-sm text-gray-600">Vue.js + Ant Design + TypeScript</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-gray-900">API层</div>
                <div className="text-sm text-gray-600">RESTful API + Go Gin框架</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-gray-900">容器层</div>
                <div className="text-sm text-gray-600">Docker Engine + 容器编排</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-gray-900">系统层</div>
                <div className="text-sm text-gray-600">Linux Kernel + 系统服务</div>
              </div>
            </div>
          </div>

          {/* 传统面板架构 */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-orange-900 mb-6 flex items-center">
              <Server className="mr-3" size={24} />
              传统面板架构
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-gray-900">前端层</div>
                <div className="text-sm text-gray-600">jQuery + Bootstrap + 传统技术</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-gray-900">服务层</div>
                <div className="text-sm text-gray-600">Python + 插件系统</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-gray-900">应用层</div>
                <div className="text-sm text-gray-600">直接安装 + 配置管理</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-gray-900">系统层</div>
                <div className="text-sm text-gray-600">Linux/Windows + 系统服务</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechArchitecture
