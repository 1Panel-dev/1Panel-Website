import { CheckCircle, XCircle, Star, Calendar, Code, Users } from 'lucide-react'

const ProductOverview = () => {
  const comparisonData = [
    {
      category: '产品定位',
      onepanel: '现代化、开源的 Linux 服务器运维管理面板',
      pagoda: '安全高效的服务器运维管理软件，支持 Linux 和 Windows',
      winner: '1panel'
    },
    {
      category: '发展历程',
      onepanel: '2023年3月推出，产品较新但发展迅速',
      pagoda: '2017年成立，发展时间长，用户基数大',
      winner: 'tie'
    },
    {
      category: '开源情况',
      onepanel: '开源 (GitHub)',
      pagoda: '核心部分不开源',
      winner: '1panel'
    },
    {
      category: '社区活跃度',
      onepanel: '社区活跃，GitHub Star 增长迅速，版本迭代快',
      pagoda: '庞大用户论坛，但以求助和经验分享为主',
      winner: '1panel'
    },
    {
      category: '官方支持',
      onepanel: '官方文档完善，社区支持响应积极',
      pagoda: '付费企业级支持，免费用户主要依赖社区',
      winner: '1panel'
    },
    {
      category: '安装配置',
      onepanel: '所有应用容器化安装，免配置免兼容，开箱即用',
      pagoda: '环境配置复杂，需手动处理版本兼容，易出错',
      winner: '1panel'
    }
  ]

  const getWinnerIcon = (winner: string) => {
    if (winner === '1panel') return <CheckCircle className="text-green-500" size={20} />
    if (winner === 'pagoda') return <XCircle className="text-red-500" size={20} />
    return <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
  }

  const stats = [
    { icon: Star, label: 'GitHub Stars', value: '29K+', trend: '+500%' },
    { icon: Calendar, label: '版本迭代', value: '月度', trend: '稳定更新' },
    { icon: Code, label: '代码质量', value: '优秀', trend: '持续优化' },
    { icon: Users, label: '开发者', value: '活跃', trend: '快速增长' }
  ]

  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            产品概况深度对比
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            从产品定位、发展历程、开源程度等维度全面对比两款产品，
            了解 1Panel 为何能在短时间内获得如此多的关注
          </p>
        </div>

        {/* 对比表格 */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">对比维度</th>
                  <th className="text-left py-4 px-6 font-semibold text-blue-600">1Panel</th>
                  <th className="text-left py-4 px-6 font-semibold text-orange-600">传统面板</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">优势</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-white transition-colors duration-200">
                    <td className="py-4 px-6 font-medium text-gray-900">{item.category}</td>
                    <td className="py-4 px-6 text-gray-700">{item.onepanel}</td>
                    <td className="py-4 px-6 text-gray-700">{item.pagoda}</td>
                    <td className="py-4 px-6 text-center">{getWinnerIcon(item.winner)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 统计数据展示 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="text-blue-600" size={32} />
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  {stat.trend}
                </span>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 核心优势总结 */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">为什么 1Panel 能够快速崛起？</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-300" />
                  <span>开源透明，赢得开发者信任</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-300" />
                  <span>现代化技术栈，满足新时代需求</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-300" />
                  <span>容器化理念，解决传统运维痛点</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-300" />
                  <span>社区驱动，快速响应用户需求</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <img
                src="/images/comparisons/baota/opensource-community.jpeg"
                alt="开源社区"
                width={1400}
                height={788}
                loading="lazy"
                decoding="async"
                className="w-full max-w-sm mx-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductOverview
