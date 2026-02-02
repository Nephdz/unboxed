import { Deal } from "../types";

interface DealCardProps {
  deal: Deal;
}

function DealCard({ deal }: DealCardProps) {
  return (
    <div className="deal-card">
      <div className="deal-corner deal-corner-top">
        <span className="deal-corner-symbol">{deal.abbreviation}</span>
        <span className="deal-corner-icon">♦</span>
      </div>
      <div className="deal-center">
        <img
          src={import.meta.env.BASE_URL + deal.image}
          alt={deal.name}
          className="deal-image"
        />
        <h3>{deal.name}</h3>
        <p>{deal.description}</p>
      </div>
      <div className="deal-corner deal-corner-bottom">
        <span className="deal-corner-symbol">{deal.abbreviation}</span>
        <span className="deal-corner-icon">♦</span>
      </div>
    </div>
  );
}

export default DealCard;
