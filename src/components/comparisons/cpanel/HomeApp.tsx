import PageShell from './PageShell'
import ComparisonPage from './pages/ComparisonPage'
import CostAnalysisPage from './pages/CostAnalysisPage'
import HomePage from './pages/HomePage'

function HomeApp() {
  return (
    <PageShell currentPath="/vscpanel.html" singlePage>
      <HomePage />
      <ComparisonPage embedded />
      <CostAnalysisPage embedded />
    </PageShell>
  )
}

export default HomeApp
