import PageShell from './PageShell'
import ComparisonPage from './pages/ComparisonPage'

function ComparisonApp() {
  return (
    <PageShell currentPath="/vscpanel/comparison.html">
      <ComparisonPage />
    </PageShell>
  )
}

export default ComparisonApp
