import React from 'react'
import { motion } from '../../ui/motion'
import {
  Shield,
  Zap,
  DollarSign,
  Code2,
  Container,
  Gauge,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp
} from '../../ui/icons'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: DollarSign,
      title: "开源免费",
      description: "5年节省 $1,979+ 许可费用",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Zap,
      title: "现代化界面",
      description: "Vue.js 响应式设计",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Container,
      title: "容器化架构",
      description: "Docker 原生支持",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Gauge,
      title: "轻量高效",
      description: "Go 语言高性能",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Code2,
      title: "一键部署",
      description: "简化安装和配置",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      icon: Shield,
      title: "安全可靠",
      description: "企业级安全防护",
      color: "text-red-600",
      bgColor: "bg-red-50",
    }
  ]

  const stats = [
    { label: "GitHub Stars", value: "29K+", icon: Star },
    { label: "社区贡献者", value: "300+", icon: Users },
    { label: "累计部署", value: "1,500,000+", icon: TrendingUp },
  ]

  const advantages = [
    "开源免费，无许可费用",
    "现代化 Vue.js 界面设计",
    "Docker 容器化部署",
    "Go 语言高性能后端",
    "一键应用部署",
    "实时监控仪表板",
    "多服务器管理 (X-Pack)",
    "LLM 大语言模型集成"
  ]

  return (
    <div className="cpanel-home-page cpanel-static-section min-h-screen">
      {/* Hero 区域 */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16">
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-5">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl"
                >
                  Linux 服务器管理从未如此简单！
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-2xl text-xl leading-relaxed text-gray-600 md:text-2xl"
                >
                  1Panel vs cPanel 全面对比分析 - 为您的服务器选择最佳管理面板
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#comparison"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl"
                >
                  查看详细对比
                </a>
                <a
                  href="#cost"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 transition-all duration-200 hover:border-blue-600 hover:text-blue-600"
                >
                  成本分析
                </a>
              </motion.div>

              {/* 统计数据 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 gap-3 border-t border-gray-200 pt-8 sm:grid-cols-3"
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:block sm:text-center">
                      <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 sm:mb-3">
                        <Icon size={22} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative"
            >
              <div className="relative z-10 overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl">
                <img
                  src="/images/comparisons/cpanel/server-dashboard.png"
                  alt="1Panel 服务器管理仪表盘"
                  width={1954}
                  height={1203}
                  loading="eager"
                  decoding="async"
                  className="h-auto w-full rounded-xl"
                />
              </div>
              <div className="absolute inset-0 -rotate-6 scale-105 rounded-2xl bg-gradient-to-tr from-blue-100 to-transparent opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 核心优势 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              为什么选择 1Panel？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              现代化、开源、高效的服务器管理面板，专为开发者和企业用户设计
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-xl mb-6`}>
                    <Icon className={`${feature.color}`} size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 快速对比 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                1Panel 核心优势
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                基于现代技术栈构建，为开发者和中小企业提供完美的服务器管理解决方案
              </p>

              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{advantage}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <a
                  href="#comparison"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 group"
                >
                  <span>查看完整对比</span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">成本对比</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <div>
                      <div className="font-semibold text-gray-900">1Panel</div>
                      <div className="text-sm text-gray-500">开源免费</div>
                    </div>
                    <div className="text-2xl font-bold text-green-600">$0</div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <div>
                      <div className="font-semibold text-gray-900">cPanel Admin</div>
                      <div className="text-sm text-gray-500">月付许可</div>
                    </div>
                    <div className="text-2xl font-bold text-red-600">$32.99/月</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm text-green-700 mb-1">5年节省</div>
                    <div className="text-3xl font-bold text-green-700">$1,979+</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HomePage
