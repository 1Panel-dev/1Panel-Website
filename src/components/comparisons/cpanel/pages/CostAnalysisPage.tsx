import React from 'react'
import { motion } from '../../ui/motion'
import {
  TrendingDown,
  CheckCircle,
  Target,
  Building,
  Users
} from '../../ui/icons'
import type { CostData } from '../types'

interface CostAnalysisPageProps {
  embedded?: boolean
}

const CostAnalysisPage: React.FC<CostAnalysisPageProps> = ({ embedded = false }) => {
  const TitleTag = embedded ? 'h2' : 'h1'

  // 成本数据（同时作为静态图表的无障碍文本备份）
  const costData: CostData[] = [
    { 年份: '第1年', '1Panel': 0, 'cPanel Admin': 396, 节省金额: 396 },
    { 年份: '第2年', '1Panel': 0, 'cPanel Admin': 792, 节省金额: 792 },
    { 年份: '第3年', '1Panel': 0, 'cPanel Admin': 1188, 节省金额: 1188 },
    { 年份: '第4年', '1Panel': 0, 'cPanel Admin': 1584, 节省金额: 1584 },
    { 年份: '第5年', '1Panel': 0, 'cPanel Admin': 1979, 节省金额: 1979 }
  ]

  // cPanel不同版本价格
  const cPanelPricing = [
    { name: 'Solo', price: 26.99, accounts: 1, color: '#8884d8' },
    { name: 'Admin', price: 32.99, accounts: 5, color: '#82ca9d' },
    { name: 'Pro', price: 46.99, accounts: 30, color: '#ffc658' },
    { name: 'Premier', price: 65.99, accounts: 100, color: '#ff7c7c' }
  ]

  // 使用场景成本分析
  const scenarioCosts = [
    {
      scenario: '个人开发者',
      period: '5年',
      onePanelCost: 0,
      cPanelCost: 1979,
      savings: 1979,
      recommendation: '1Panel'
    },
    {
      scenario: '小型企业',
      period: '5年',
      onePanelCost: 0,
      cPanelCost: 2819, // Pro版本
      savings: 2819,
      recommendation: '1Panel'
    },
    {
      scenario: '中型企业',
      period: '5年',
      onePanelCost: 0,
      cPanelCost: 3959, // Premier版本
      savings: 3959,
      recommendation: '混合方案'
    }
  ]

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'USD'
    }).format(value)
  }

  return (
    <div
      id={embedded ? 'cost' : undefined}
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
              成本分析对比
            </TitleTag>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              详细分析 1Panel 和 cPanel 的总拥有成本，帮助您做出最经济的选择
            </p>
          </motion.div>
        </div>
      </section>

      {/* 快速对比 */}
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
              价格对比一目了然
            </h2>
            <p className="text-lg text-gray-600">
              开源 vs 商业：成本差异巨大
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* 1Panel 价格卡片 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-200 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  推荐
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">1Panel</h3>
                <div className="text-5xl font-bold text-green-600 mb-4">$0</div>
                <p className="text-gray-600 mb-6">永久免费开源</p>
                <div className="space-y-3 text-left">
                  {[
                    '开源开放',
                    '无许可证费用',
                    '无账户限制',
                    '社区技术支持',
                    '持续功能更新'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* cPanel 价格卡片 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border-2 border-red-200 relative overflow-hidden"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">cPanel</h3>
                <div className="text-5xl font-bold text-red-600 mb-2">$32.99</div>
                <p className="text-gray-600 mb-6">每月许可费用（Admin版）</p>
                <div className="space-y-3 text-left">
                  {[
                    '商业许可证费用',
                    '最多5个账户',
                    '24/7技术支持',
                    '企业级功能',
                    '定期商业更新'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="text-red-600 flex-shrink-0" size={16} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* 节省金额突出显示 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center"
          >
            <TrendingDown size={48} className="mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">选择 1Panel 可节省</h3>
            <div className="text-6xl font-bold mb-4">{formatCurrency(1979)}</div>
            <p className="text-xl text-blue-100">5年期总拥有成本节省</p>
          </motion.div>
        </div>
      </section>

      {/* 成本趋势图 */}
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
              累计成本趋势分析
            </h2>
            <p className="text-lg text-gray-600">
              时间越长，1Panel 的成本优势越明显
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white">
              <img
                src="/charts/comparisons/cpanel/panel_cost_comparison.svg"
                alt="1Panel 与 cPanel 累计成本趋势图"
                width={1440}
                height={820}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
              <div className="sr-only">
                <p>累计成本趋势分析：年份、1Panel、cPanel Admin、节省金额</p>
                <ul>
                  {costData.map(item => (
                    <li key={item.年份}>
                      {item.年份}：1Panel {item['1Panel']}，cPanel Admin {item['cPanel Admin']}，节省金额 {item.节省金额}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* cPanel 版本价格对比 */}
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
              cPanel 不同版本价格
            </h2>
            <p className="text-lg text-gray-600">
              所有版本相比1Panel都有显著成本差异
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cPanelPricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {formatCurrency(plan.price)}
                </div>
                <p className="text-gray-500 text-sm mb-4">每月</p>
                <div className="text-sm text-gray-600 mb-4">
                  最多 {plan.accounts} 个账户
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-sm text-gray-500 mb-1">5年总成本</div>
                  <div className="text-lg font-bold text-red-600">
                    {formatCurrency(plan.price * 60)}
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    vs 1Panel: 节省 {formatCurrency(plan.price * 60)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 使用场景成本分析 */}
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
              不同使用场景成本分析
            </h2>
            <p className="text-lg text-gray-600">
              无论哪种使用场景，1Panel 都能带来显著成本优势
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scenarioCosts.map((scenario, index) => {
              const IconComponent = index === 0 ? Users : index === 1 ? Building : Target
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-blue-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{scenario.scenario}</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">1Panel</span>
                      <span className="font-bold text-green-600">
                        {formatCurrency(scenario.onePanelCost)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">cPanel</span>
                      <span className="font-bold text-red-600">
                        {formatCurrency(scenario.cPanelCost)}
                      </span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">节省金额</span>
                        <span className="font-bold text-blue-600 text-lg">
                          {formatCurrency(scenario.savings)}
                        </span>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-blue-700">
                        推荐: {scenario.recommendation}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}

export default CostAnalysisPage
