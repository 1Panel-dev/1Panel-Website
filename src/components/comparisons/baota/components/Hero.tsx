import { ArrowRight, Shield, Cpu, Code, Users } from '../../ui/icons'

const Hero = () => {
  const highlights = [
    { icon: Shield, label: '容器化安全', color: 'text-green-600' },
    { icon: Cpu, label: '高性能架构', color: 'text-blue-600' },
    { icon: Code, label: '开源免费', color: 'text-purple-600' },
    { icon: Users, label: '优秀体验', color: 'text-red-600' }
  ]

  return (
    <section className="pt-16 bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <span className="animate-pulse">🚀</span>
                <span className="ml-2">现代化服务器管理的新选择</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                为什么选择
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {' 1Panel'}
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                基于深度对比分析，1Panel 以其现代化的技术架构、开源免费的理念、
                容器化的核心优势以及出色的用户体验，为服务器运维带来革命性的提升。
              </p>
            </div>

            {/* 核心优势标签 */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                >
                  <item.icon size={16} className={item.color} />
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA 按钮 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
              href="#overview"
              style={{
                position: 'relative',
                zIndex: 9999,
                pointerEvents: 'auto'
              }}
         className=" bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              查看详细对比
              <ArrowRight size={20} />
            </a>
              <a
               style={{
                position: 'relative',
                zIndex: 9999,
                pointerEvents: 'auto'
              }}
              target="_blank"
              href="https://1panel.cn/docs/installation/online_installation/"
              rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-semibold"
              >
                免费下载 1Panel
              </a>
            </div>

            {/* 统计数据 */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2023</div>
                <div className="text-sm text-gray-600">发布年份</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">开源免费</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">Go</div>
                <div className="text-sm text-gray-600">高性能语言</div>
              </div>
            </div>
          </div>

          {/* 右侧图片 */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/comparisons/baota/server-dashboard.png"
                alt="1Panel 现代化界面"
                width={1954}
                height={1203}
                loading="eager"
                decoding="async"
                className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200"
              />
              {/* 浮动卡片 */}

              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-sm font-medium">容器化部署</div>
                <div className="text-2xl font-bold">Docker</div>
              </div>
            </div>

            {/* 背景装饰 */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-2xl -rotate-6 scale-105 opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
