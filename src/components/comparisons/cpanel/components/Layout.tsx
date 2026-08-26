import React from 'react'
import { motion } from '../../ui/motion'

import {
  ChevronRight
} from '../../ui/icons'

interface LayoutProps {
  children: React.ReactNode
  currentPath: string
}

const Layout: React.FC<LayoutProps> = ({ children, currentPath }) => {
  const navItems = [
    { path: '/vscpanel.html', label: '首页' },
    { path: '/vscpanel/comparison.html', label: '功能对比' },
    { path: '/vscpanel/cost.html', label: '成本分析' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* 面包屑导航 */}
      {currentPath !== '/vscpanel.html' && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border-b border-gray-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <a href="/vscpanel.html" className="hover:text-blue-600 transition-colors">
                首页
              </a>
              <ChevronRight size={16} />
              <span className="text-gray-900 font-medium">
                {navItems.find(item => item.path === currentPath)?.label}
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* 主要内容 */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}

export default Layout
