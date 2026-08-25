import Hero from './components/Hero'
import ProductOverview from './components/ProductOverview'
import TechArchitecture from './components/TechArchitecture'
import FeatureComparison from './components/FeatureComparison'
import UserExperience from './components/UserExperience'
import UniqueAdvantages from './components/UniqueAdvantages'
import CallToAction from './components/CallToAction'

function App() {
  return (
    <div className="comparison-baota min-h-screen bg-gray-50">
      <Hero />
      <ProductOverview />
      <TechArchitecture />
      <FeatureComparison />
      <UserExperience />
      <UniqueAdvantages />
      <CallToAction />
    </div>
  )
}

export default App
