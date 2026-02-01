import { Deal } from '../types';

interface DealCardProps {
  deal: Deal;
}

function DealCard({ deal }: DealCardProps) {
  return (
    <div className="deal-card">
      <div className="deal-header">
        <h3>{deal.name}</h3>
      </div>
      <div className="deal-image">
        <span className="placeholder-text">{deal.imagePlaceholder}</span>
      </div>
      <div className="deal-description">
        <p>{deal.description}</p>
      </div>
    </div>
  );
}

export default DealCard;
