import React from 'react'
import { motion } from '../../ui/motion'
import {
  Star,
  Zap,
  Shield,
  Database,
  Globe,
  HardDrive,
  Monitor,
  Container
} from '../../ui/icons'
import type { ComparisonData } from '../types'
import comparisonDataSource from '../data/panel_comparison_complete.json'

interface ComparisonPageProps {
  embedded?: boolean
}

const ComparisonPage: React.FC<ComparisonPageProps> = ({ embedded = false }) => {
  const comparisonData = comparisonDataSource as ComparisonData
  const TitleTag = embedded ? 'h2' : 'h1'
  const costHref = embedded ? '#cost' : '/vscpanel/cost.html'

  // 功能对比表格数据
  const featureComparisons = [
    {
      category: "文件管理",
      icon: HardDrive,
      "1Panel": "基于Web的文件系统管理，支持多格式预览",
      "cPanel": "FTP管理、安全文件传输、备份功能",
      "1Panel_score": 4,
      "cPanel_score": 5
    },
    {
      category: "数据库管理",
      icon: Database,
      "1Panel": "MySQL、PostgreSQL等数据库管理",
      "cPanel": "MySQL向导、phpMyAdmin深度集成",
      "1Panel_score": 4,
      "cPanel_score": 5
    },
    {
      category: "容器管理",
      icon: Container,
      "1Panel": "Docker容器深度集成管理",
      "cPanel": "基础容器插件支持",
      "1Panel_score": 5,
      "cPanel_score": 2
    },
    {
      category: "网站部署",
      icon: Globe,
      "1Panel": "一键WordPress部署，SSL证书自动配置",
      "cPanel": "Sitejet Builder网站构建器集成",
      "1Panel_score": 5,
      "cPanel_score": 4
    },
    {
      category: "安全功能",
      icon: Shield,
      "1Panel": "集成防火墙管理功能，容器隔离",
      "cPanel": "多因素认证、IP安全列表、加密通信",
      "1Panel_score": 4,
      "cPanel_score": 5
    },
    {
      category: "监控功能",
      icon: Monitor,
      "1Panel": "实时CPU、内存、磁盘、网络监控",
      "cPanel": "全面的服务器监控",
      "1Panel_score": 5,
      "cPanel_score": 4
    },
    {
      category: "性能优化",
      icon: Zap,
      "1Panel": "轻量级设计，资源效率高",
      "cPanel": "企业级性能，高可靠性",
      "1Panel_score": 5,
      "cPanel_score": 4
    }
  ]

  const renderStars = (score: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < score ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ))
  }

  const getScoreColor = (score: number) => {
    if (score >= 4) return 'text-green-600'
    if (score >= 3) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div
      id={embedded ? 'comparison' : undefined}
      className={embedded ? 'cpanel-static-section scroll-mt-24 border-t border-blue-100 bg-gray-50' : 'min-h-screen bg-gray-50'}
    >
      {/* 页面标题 */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <TitleTag className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              功能详细对比
            </TitleTag>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              全面对比 1Panel 和 cPanel 的核心功能、技术架构和用户体验
            </p>
          </motion.div>
        </div>
      </section>

      {/* 雷达图对比 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              综合能力雷达图
            </h2>
            <p className="text-lg text-gray-600">
              多维度对比两个面板的各项核心能力
            </p>
          </motion.div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            {/* 雷达图 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                能力雷达对比
              </h3>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <img
                  src="/charts/comparisons/cpanel/panel_radar_comparison.png"
                  alt="1Panel 与 cPanel 能力雷达对比图"
                  width={4103}
                  height={1760}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full"
                />
              </div>
            </motion.div>

            {/* 条形图 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                功能评分对比
              </h3>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <img
                  src="/charts/comparisons/cpanel/panel_bar_comparison.png"
                  alt="1Panel 与 cPanel 功能评分对比图"
                  width={3568}
                  height={2368}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 详细功能对比表 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              核心功能详细对比
            </h2>
            <p className="text-lg text-gray-600">
              逐项对比各功能模块的特点和能力
            </p>
          </motion.div>

          <div className="space-y-6">
            {featureComparisons.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* 功能分类 */}
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Icon className="text-blue-600" size={24} />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {feature.category}
                          </h3>
                          <p className="text-sm text-gray-500">核心功能对比</p>
                        </div>
                      </div>

                      {/* 1Panel */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-blue-600">1Panel</h4>
                          <div className="flex items-center space-x-1">
                            {renderStars(feature["1Panel_score"])}
                            <span className={`ml-2 font-bold ${getScoreColor(feature["1Panel_score"])}`}>
                              {feature["1Panel_score"]}/5
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {feature["1Panel"]}
                        </p>
                      </div>

                      {/* cPanel */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-red-600">cPanel</h4>
                          <div className="flex items-center space-x-1">
                            {renderStars(feature["cPanel_score"])}
                            <span className={`ml-2 font-bold ${getScoreColor(feature["cPanel_score"])}`}>
                              {feature["cPanel_score"]}/5
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {feature["cPanel"]}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 技术架构对比 */}
      {comparisonData && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                技术架构对比
              </h2>
              <p className="text-lg text-gray-600">
                深入了解两个平台的技术实现和架构设计
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 1Panel 技术架构 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">1P</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">1Panel 架构</h3>
                </div>

                <div className="space-y-4">
                  {Object.entries(comparisonData.对比分析.技术架构对比["1Panel"]).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-lg p-4 shadow-sm"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{key}</h4>
                          <p className="text-gray-700 text-sm">{value}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* cPanel 技术架构 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-200"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">cP</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">cPanel 架构</h3>
                </div>

                <div className="space-y-4">
                  {Object.entries(comparisonData.对比分析.技术架构对比["cPanel"]).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-lg p-4 shadow-sm"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{key}</h4>
                          <p className="text-gray-700 text-sm">{value}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      <section className="comparison-cta-section py-16">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="comparison-cta-panel px-6 py-10 sm:px-10 lg:px-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              深入了解成本优势
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              除了功能对比，成本也是选择服务器管理面板的重要考量因素
            </p>
            <div className="flex justify-center">
              <a
                href={costHref}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                查看成本分析
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ComparisonPage
