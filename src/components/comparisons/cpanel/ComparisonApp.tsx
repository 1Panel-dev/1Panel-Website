import PageShell from './PageShell'
import ComparisonPage from './pages/ComparisonPage'

function ComparisonApp() {
  return (
    <PageShell currentPath="/vscpanel/comparison">
      <ComparisonPage />
    </PageShell>
  )
}

export default ComparisonApp
