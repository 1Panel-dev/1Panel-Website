import HeroSection from './components/HeroSection';
import ProductOverview from './components/ProductOverview';
import ComparisonTable from './components/ComparisonTable';
import AdvantagesSection from './components/AdvantagesSection';
import UseCases from './components/UseCases';
import CommunityStats from './components/CommunityStats';

function App() {
  return (
    <div className="comparison-webmin min-h-screen bg-white">
      <HeroSection />
      <ProductOverview />
      <ComparisonTable />
      <AdvantagesSection />
      <UseCases />
      <CommunityStats />
    </div>
  );
}

export default App;
