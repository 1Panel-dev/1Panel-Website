import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Layout from './components/Layout'

interface PageShellProps {
  children: ReactNode
  currentPath: string
  singlePage?: boolean
}

function PageShell({ children, currentPath, singlePage = false }: PageShellProps) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`comparison-cpanel min-h-screen bg-gradient-to-br from-slate-50 to-blue-50${singlePage ? ' cpanel-single-page' : ''}`}
    >
      <Layout currentPath={currentPath}>{children}</Layout>
    </motion.div>
  )
}

export default PageShell
