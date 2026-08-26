import PageShell from './PageShell'
import CostAnalysisPage from './pages/CostAnalysisPage'

function CostApp() {
  return (
    <PageShell currentPath="/vscpanel/cost.html">
      <CostAnalysisPage />
    </PageShell>
  )
}

export default CostApp
