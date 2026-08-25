import { ArrowRight, Download, Github, BookOpen, Users } from 'lucide-react'

const CallToAction = () => {
  const quickActions = [
    {
      icon: Download,
      title: '立即安装',
      description: '一条命令，3分钟体验现代化面板',
      command: 'curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sh quick_start.sh',
      color: 'bg-blue-600 hover:bg-blue-700',
      primary: true
    },
    {
      icon: Github,
      title: 'GitHub 源码',
      description: '查看完整源码，了解技术细节',
      link: 'https://github.com/1Panel-dev/1Panel',
      color: 'bg-gray-800 hover:bg-gray-900',
      primary: false
    },
    {
      icon: BookOpen,
      title: '官方文档',
      description: '详细的安装和使用指南',
      link: 'https://1panel.cn/docs/',
      color: 'bg-green-600 hover:bg-green-700',
      primary: false
    }
  ]

  const benefits = [
    '✅ 开源开放，费用透明',
    '✅ 3分钟快速安装，即装即用',
    '✅ 容器化部署，安全可靠',
    '✅ 现代化界面，操作简单',
    '✅ 活跃社区，问题快速解决',
    '✅ 持续更新，功能不断完善'
  ]

  const stats = [
    { number: '29K+', label: 'GitHub Stars', icon: '⭐' },
    { number: '100K+', label: '活跃用户', icon: '👥' },
    { number: '99.9%', label: '运行稳定性', icon: '🚀' },
    { number: '< 100MB', label: '内存占用', icon: '💻' }
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/60 to-white py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
      <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl"></div>
      <div className="absolute -right-32 bottom-24 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 主要 CTA 区域 */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 px-6 py-12 text-white shadow-2xl sm:px-10 lg:px-16 lg:py-16">
          <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl"></div>
          <div className="relative mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="animate-pulse">🚀</span>
              <span className="ml-2 font-medium">准备好体验现代化运维了吗？</span>
            </div>

            <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              开始您的
              <span className="block bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">
                1Panel 之旅
              </span>
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-blue-100 sm:text-xl lg:text-2xl">
              告别复杂的服务器管理，拥抱现代化、安全、高效的运维体验。
              加入超过 10 万用户的选择，让服务器管理变得简单愉悦。
            </p>

            {/* 统计数据 */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm sm:p-5">
                  <div className="mb-1 text-2xl">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white lg:text-3xl">{stat.number}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {quickActions.map((action) => {
            const ActionIcon = action.icon
            const content = (
              <>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <ActionIcon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-950">{action.title}</h3>
                <p className="mt-2 text-gray-600">{action.description}</p>
                {action.command ? (
                  <code className="mt-5 block overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs leading-relaxed text-green-300">
                    {action.command}
                  </code>
                ) : (
                  <span className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-700">
                    {action.title}
                    <ArrowRight size={18} />
                  </span>
                )}
              </>
            )

            return action.link ? (
              <a
                key={action.title}
                href={action.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                {content}
              </a>
            ) : (
              <div key={action.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
                {content}
              </div>
            )
          })}
        </div>

        {/* 优势列表 */}
        <div className="mt-12 grid items-stretch gap-8 lg:mt-16 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8 lg:p-10">
            <h3 className="mb-8 text-2xl font-bold text-gray-950 sm:text-3xl">为什么现在就应该切换到 1Panel？</h3>
            <div className="grid grid-cols-1 gap-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 rounded-xl border border-blue-100 bg-blue-50/70 px-4 py-3.5"
                >
                  <span className="text-lg text-green-500">{benefit.split(' ')[0]}</span>
                  <span className="text-gray-700">{benefit.split(' ').slice(1).join(' ')}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
              <img
                src="/images/comparisons/baota/server-dashboard.png"
                alt="1Panel 清爽界面"
                width={1954}
                height={1203}
                loading="lazy"
                decoding="async"
                className="mb-6 w-full rounded-2xl border border-slate-200 shadow-xl"
              />
              <h4 className="mb-3 text-xl font-bold text-gray-950">体验现代化界面</h4>
              <p className="mb-6 text-gray-600">
                简洁优雅的设计，让服务器管理变成一种享受
              </p>
              <a
                href="https://demo.1panel.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
              >
                立即体验演示
              </a>
            </div>
          </div>
        </div>

        {/* 社区支持 */}
        <div className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-blue-50 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="flex max-w-3xl flex-col items-center gap-5 sm:flex-row sm:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <Users size={32} />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-gray-950">加入活跃的开源社区</h3>
                <p className="text-gray-600">
                  1Panel 拥有活跃的开源社区，无论是问题反馈、功能建议还是技术交流，
                  都能得到快速响应和专业帮助。
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <a
                href="https://github.com/1Panel-dev/1Panel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
              >
                <Github size={20} />
                <span>GitHub 社区</span>
              </a>
              <a
                href="https://1panel.cn/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:border-blue-300 hover:text-blue-700"
              >
                <BookOpen size={20} />
                <span>官方文档</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
