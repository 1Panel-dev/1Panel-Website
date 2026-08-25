import { Check, X, Database, FileText, Shield, Cloud, Package } from 'lucide-react'

const FeatureComparison = () => {
  const featureCategories = [
    {
      title: '基础管理',
      icon: FileText,
      features: [
        { name: '界面设计', onepanel: '现代化、简洁、美观', pagoda: '功能全面，布局略拥挤', winner: '1panel' },
        { name: '系统监控', onepanel: '实时数据，可视化图表', pagoda: '基础监控功能', winner: '1panel' },
        { name: '文件管理', onepanel: '现代化界面，操作流畅', pagoda: '功能成熟，操作传统', winner: '1panel' }
      ]
    },
    {
      title: '应用部署',
      icon: Package,
      features: [
        { name: '部署方式', onepanel: '容器化一键部署', pagoda: '传统源码安装', winner: '1panel' },
        { name: '应用商店', onepanel: '精选高质量应用', pagoda: '插件丰富但质量不一', winner: '1panel' },
        { name: '环境隔离', onepanel: '容器完全隔离', pagoda: '共享系统环境', winner: '1panel' }
      ]
    },
    {
      title: '数据库管理',
      icon: Database,
      features: [
        { name: '版本管理', onepanel: '容器化多版本并存', pagoda: '直接管理系统服务', winner: '1panel' },
        { name: '备份恢复', onepanel: '自动化容器备份', pagoda: '传统数据库备份', winner: '1panel' },
        { name: '性能监控', onepanel: '详细性能指标', pagoda: '基础监控功能', winner: 'tie' }
      ]
    },
    {
      title: '安全防护',
      icon: Shield,
      features: [
        { name: '隔离机制', onepanel: '容器天然隔离', pagoda: '依赖插件防护', winner: '1panel' },
        { name: '代码审计', onepanel: '开源可审计', pagoda: '核心代码不开源', winner: '1panel' },
        { name: '访问控制', onepanel: '细粒度权限控制', pagoda: '基础权限管理', winner: '1panel' }
      ]
    },
    {
      title: '备份恢复',
      icon: Cloud,
      features: [
        { name: '云存储支持', onepanel: '支持多种云存储', pagoda: '部分云存储支持', winner: '1panel' },
        { name: '自动备份', onepanel: '灵活的备份策略', pagoda: '基础自动备份', winner: '1panel' },
        { name: '快速恢复', onepanel: '容器化快速恢复', pagoda: '传统恢复方式', winner: '1panel' }
      ]
    }
  ]

  const getWinnerBadge = (winner: string) => {
    if (winner === '1panel') {
      return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">1Panel 领先</span>
    } else if (winner === 'pagoda') {
      return <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">传统面板领先</span>
    }
    return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">旗鼓相当</span>
  }

  const getWinnerIcon = (winner: string) => {
    if (winner === '1panel') return <Check className="text-green-500" size={16} />
    if (winner === 'pagoda') return <X className="text-red-500" size={16} />
    return <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
  }

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            功能特性全面对比
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            从基础管理到高级功能，深度对比两款产品在各个维度的表现，
            了解 1Panel 如何在功能质量上实现全面领先
          </p>
        </div>

        <div className="space-y-8">
          {featureCategories.map((category) => {
            const CategoryIcon = category.icon

            return (
              <div
                key={category.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg"
              >
                <div className="flex items-center gap-3 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-white px-6 py-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <CategoryIcon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-[860px] border-0 shadow-none">
                    <thead>
                      <tr>
                        <th className="px-6 py-4 text-left">对比项目</th>
                        <th className="px-6 py-4 text-left text-blue-700">1Panel</th>
                        <th className="px-6 py-4 text-left text-orange-700">传统面板</th>
                        <th className="px-6 py-4 text-center">对比结果</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.features.map((feature) => (
                        <tr key={feature.name} className="border-t border-slate-100">
                          <td className="px-6 py-5 font-semibold text-gray-900">{feature.name}</td>
                          <td className="px-6 py-5 text-gray-700">{feature.onepanel}</td>
                          <td className="px-6 py-5 text-gray-700">{feature.pagoda}</td>
                          <td className="px-6 py-5">
                            <div className="flex items-center justify-center gap-2">
                              {getWinnerIcon(feature.winner)}
                              {getWinnerBadge(feature.winner)}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          })}
        </div>

        {/* 核心优势总结 */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">1Panel 功能优势核心</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Package className="text-blue-300" size={20} />
                    <span className="font-semibold">应用部署革命</span>
                  </div>
                  <p className="text-sm text-blue-100">
                    容器化一键部署，彻底解决环境配置和应用冲突问题
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Shield className="text-green-300" size={20} />
                    <span className="font-semibold">安全性本质提升</span>
                  </div>
                  <p className="text-sm text-blue-100">
                    容器隔离机制从根本上降低风险，开源透明增强信任
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Cloud className="text-purple-300" size={20} />
                    <span className="font-semibold">备份现代化</span>
                  </div>
                  <p className="text-sm text-blue-100">
                    多种云存储原生支持，数据备份和迁移前所未有的简单
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-lg">功能领域优势明显</div>
                <div className="text-sm text-blue-200 mt-2">
                  在主要功能对比中，1Panel 在 85% 的领域表现更优
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default FeatureComparison
