import { useState } from 'react';

type Round = 1 | 2 | 3;

const stackCounts: Record<Round, number> = {
  1: 9,
  2: 4,
  3: 1,
};

function Clicker() {
  const [round, setRound] = useState<Round>(1);
  const [allCounts, setAllCounts] = useState<Record<Round, number[]>>({
    1: Array(9).fill(0),
    2: Array(4).fill(0),
    3: Array(1).fill(0),
  });

  const counts = allCounts[round];

  const handleIncrement = (index: number) => {
    setAllCounts(prev => {
      const next = [...prev[round]];
      next[index] = next[index] + 1;
      return { ...prev, [round]: next };
    });
  };

  const handleReset = () => {
    setAllCounts(prev => ({ ...prev, [round]: Array(stackCounts[round]).fill(0) }));
  };

  const stackCount = stackCounts[round];
  const gridClass = `clicker-grid${round === 2 ? ' small' : round === 3 ? ' single' : ''}`;

  return (
    <section className="section" id="clicker">
      <h2>Clicker</h2>
      <p className="section-intro">Track flips per stack across rounds.</p>

      <div className="clicker-controls">
        {([1, 2, 3] as Round[]).map(r => (
          <button
            key={r}
            className={`btn${round === r ? ' btn-primary' : ''}`}
            onClick={() => setRound(r)}
          >
            Round {r === 1 ? 'I' : r === 2 ? 'II' : 'III'}
          </button>
        ))}
      </div>

      <div className={gridClass}>
        {Array.from({ length: stackCount }).map((_, i) => (
          <button
            key={i}
            className={`clicker-stack${round === 3 ? ' large' : ''}`}
            onClick={() => handleIncrement(i)}
          >
            <span className="clicker-count">{counts[i]}</span>
          </button>
        ))}
      </div>

      <div className="clicker-footer">
        <button className="btn" onClick={handleReset}>Reset</button>
      </div>
    </section>
  );
}

export default Clicker;
