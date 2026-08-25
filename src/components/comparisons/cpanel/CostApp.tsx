import PageShell from './PageShell'
import CostAnalysisPage from './pages/CostAnalysisPage'

function CostApp() {
  return (
    <PageShell currentPath="/vscpanel/cost">
      <CostAnalysisPage />
    </PageShell>
  )
}

export default CostApp
