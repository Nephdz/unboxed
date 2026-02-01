import { useState } from 'react';
import { Player, Deal } from '../types';

interface PlayersProps {
  players: Player[];
  deals: Deal[];
  onAddPlayer: (name: string) => void;
  onRemovePlayer: (playerId: string) => void;
  onAssignDeal: (playerId: string, dealId: string) => void;
  onRemoveDeal: (playerId: string, dealId: string) => void;
  onClearAll: () => void;
}

function Players({
  players,
  deals,
  onAddPlayer,
  onRemovePlayer,
  onAssignDeal,
  onRemoveDeal,
  onClearAll
}: PlayersProps) {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [selectedDeal, setSelectedDeal] = useState<string>('');

  const handleAddPlayer = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPlayerName.trim()) {
      onAddPlayer(newPlayerName.trim());
      setNewPlayerName('');
    }
  };

  const handleAssignDeal = (playerId: string) => {
    if (selectedDeal) {
      onAssignDeal(playerId, selectedDeal);
    }
  };

  const getDealName = (dealId: string) => {
    return deals.find(d => d.id === dealId)?.name || dealId;
  };

  return (
    <section id="players" className="section">
      <h2>Players</h2>
      <p className="section-intro">Track players and their deals throughout the game.</p>

      <div className="content-box">
        <form onSubmit={handleAddPlayer} className="add-player-form">
          <input
            type="text"
            value={newPlayerName}
            onChange={(e) => setNewPlayerName(e.target.value)}
            placeholder="Enter player name"
            className="player-input"
          />
          <button type="submit" className="btn btn-primary">Add Player</button>
        </form>

        {players.length > 0 && (
          <>
            <div className="deal-selector">
              <label>Select deal to assign:</label>
              <select
                value={selectedDeal}
                onChange={(e) => setSelectedDeal(e.target.value)}
                className="deal-select"
              >
                <option value="">Choose a deal...</option>
                {deals.map(deal => (
                  <option key={deal.id} value={deal.id}>{deal.name}</option>
                ))}
              </select>
            </div>

            <div className="players-list">
              {players.map(player => (
                <div key={player.id} className="player-card">
                  <div className="player-header">
                    <h3>{player.name}</h3>
                    <button
                      onClick={() => onRemovePlayer(player.id)}
                      className="btn btn-remove"
                      aria-label={`Remove ${player.name}`}
                    >
                      ×
                    </button>
                  </div>

                  <div className="player-deals">
                    {player.deals.length === 0 ? (
                      <p className="no-deals">No deals yet</p>
                    ) : (
                      <ul className="deals-list">
                        {player.deals.map((dealId, index) => (
                          <li key={`${dealId}-${index}`} className="deal-tag">
                            {getDealName(dealId)}
                            <button
                              onClick={() => onRemoveDeal(player.id, dealId)}
                              className="deal-remove"
                              aria-label={`Remove ${getDealName(dealId)}`}
                            >
                              ×
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <button
                    onClick={() => handleAssignDeal(player.id)}
                    disabled={!selectedDeal}
                    className="btn btn-assign"
                  >
                    + Assign Deal
                  </button>
                </div>
              ))}
            </div>

            <button onClick={onClearAll} className="btn btn-clear">
              Clear All Players
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default Players;
