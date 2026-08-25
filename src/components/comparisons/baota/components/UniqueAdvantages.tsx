import { Crown, Zap, Shield, Container, Code, Cloud, Star } from 'lucide-react'

const UniqueAdvantages = () => {
  const advantages = [
    {
      icon: Zap,
      title: '现代化技术架构',
      description: 'Go + Vue + Docker 技术栈，性能卓越，资源占用极低',
      details: ['高性能 Go 语言编写', '现代化前端技术栈', '极低的内存和 CPU 占用', '毫秒级响应速度'],
      color: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Container,
      title: '容器化核心理念',
      description: '以容器作为应用管理基础，解决传统运维难题',
      details: ['应用完全隔离部署', '环境依赖问题彻底解决', '版本冲突不再存在', '一键部署，秒级启动'],
      color: 'from-green-500 to-green-600',
      iconBg: 'bg-green-100 text-green-600'
    },
    {
      icon: Code,
      title: '开源透明',
      description: '代码开源，社区驱动发展，安全可靠',
      details: ['GitHub 完整代码库', '社区驱动快速发展', '安全审计完全透明', '无强制绑定和隐私顾虑'],
      color: 'from-purple-500 to-purple-600',
      iconBg: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Star,
      title: '极致用户体验',
      description: '简洁优雅的设计，学习成本低，操作体验超群',
      details: ['Ant Design 现代化界面', '直观的操作流程', '响应式设计适配各屏幕', '一键完成核心操作'],
      color: 'from-yellow-500 to-orange-500',
      iconBg: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Cloud,
      title: '高质量应用商店',
      description: '精选开源应用，容器化部署，更新维护方便',
      details: ['精选高质量应用', '统一容器化打包', '一键安装和更新', '应用间完全隔离'],
      color: 'from-pink-500 to-red-500',
      iconBg: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Shield,
      title: '强大的云备份',
      description: '原生支持多种云存储，数据备份和迁移简单可靠',
      details: ['支持 OSS、S3、MinIO、SFTP', '自动化备份策略', '跨云平台数据迁移', '容器化快速恢复'],
      color: 'from-indigo-500 to-blue-500',
      iconBg: 'bg-indigo-100 text-indigo-600'
    }
  ]

  const targetUsers = [
    {
      icon: '👨‍💻',
      title: '现代化开发者',
      description: '追求新技术，注重效率和安全的开发者',
      features: ['熟悉容器化技术', '重视代码质量', '追求极致体验']
    },
    {
      icon: '🏢',
      title: '中小企业',
      description: '需要稳定可靠且成本可控的运维方案',
      features: ['资源消耗低', '维护成本少', '扩展性强']
    },
    {
      icon: '🎓',
      title: '技术学习者',
      description: '希望学习现代运维技术的学生和新手',
      features: ['学习成本低', '文档详细', '社区活跃']
    },
    {
      icon: '🚀',
      title: '创业团队',
      description: '快速迭代，需要高效部署的初创团队',
      features: ['快速部署', '容易扩展', '开源免费']
    }
  ]

  const comparisonChart = {
    categories: ['技术先进性', '用户体验', '安全性', '开放性', '性能表现', '学习成本'],
    onepanel: [95, 92, 88, 98, 94, 90],
    pagoda: [70, 75, 72, 40, 68, 65]
  }

  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
            <Crown className="text-blue-600 mr-2" size={20} />
            <span className="text-blue-800 font-medium">1Panel 独特优势</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            六大核心优势，引领运维新时代
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            1Panel 不仅仅是一个服务器管理面板，更是现代化运维理念的完美体现。
            以下六大优势让它在激烈的竞争中脱颖而出
          </p>
        </div>

        {/* 优势卡片网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent hover:-translate-y-2"
            >
              {/* 渐变背景 */}
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${advantage.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

              <div className="relative z-10">
                {/* 图标 */}
                <div className={`w-16 h-16 ${advantage.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <advantage.icon size={32} />
                </div>

                {/* 标题和描述 */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {advantage.description}
                </p>

                {/* 详细特性 */}
                <ul className="space-y-2">
                  {advantage.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600 transition-colors duration-300"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 对比雷达图 */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            综合能力对比
          </h3>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {comparisonChart.categories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-gray-700">{category}</span>
                    <span className="text-blue-600">1Panel {comparisonChart.onepanel[index]}% vs 传统面板 {comparisonChart.pagoda[index]}%</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${comparisonChart.onepanel[index]}%` }}
                      ></div>
                    </div>
                    <div
                      className="absolute top-0 bg-orange-400 h-3 rounded-full transition-all duration-1000 opacity-60"
                      style={{ width: `${comparisonChart.pagoda[index]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">91%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">综合领先优势</div>
                <p className="text-sm text-gray-600">
                  在六大核心维度中，1Panel 平均得分 91%，
                  相比传统面板的 65% 领先 26 个百分点
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 目标用户分析 */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">目标用户分析</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {targetUsers.map((user) => (
              <div key={user.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
                <div className="mb-4 text-4xl">{user.icon}</div>
                <h4 className="mb-3 text-xl font-bold text-gray-900">{user.title}</h4>
                <p className="mb-5 text-sm leading-relaxed text-gray-600">{user.description}</p>
                <ul className="space-y-2">
                  {user.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 结论 */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <Crown className="mx-auto mb-4" size={48} />
          <h3 className="text-3xl font-bold mb-4">为什么选择 1Panel？</h3>
          <p className="text-xl mb-6 max-w-4xl mx-auto leading-relaxed">
            1Panel 不仅仅是功能的堆砌，而是对现代化运维理念的深度思考和完美实现。
            它代表着服务器管理的未来方向：<span className="font-bold">更开放、更安全、更高效、更智能</span>
          </p>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">开放</div>
              <div className="text-sm">开源透明</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">安全</div>
              <div className="text-sm">容器化天然隔离</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">高效</div>
              <div className="text-sm">现代化技术栈</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">智能</div>
              <div className="text-sm">自动化运维体验</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UniqueAdvantages
