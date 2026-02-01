import { Deal } from '../types';
import DealCard from './DealCard';

interface DealsProps {
  deals: Deal[];
}

function Deals({ deals }: DealsProps) {
  return (
    <section id="deals" className="section">
      <h2>Deals</h2>
      <p className="section-intro">Special abilities earned through misfortune. Use them wisely.</p>

      <div className="deals-grid">
        {deals.map(deal => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </section>
  );
}

export default Deals;
