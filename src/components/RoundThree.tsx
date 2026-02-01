function RoundThree() {
  return (
    <section id="round-three" className="section">
      <h2>Round III</h2>
      <div className="invitation-card">
        <h3>The Finale</h3>
        <p className="round-subtitle">1 Stack Remains</p>

        <p>
          The group selects one stack to remain. The other three stacks are
          shuffled into the deck.
        </p>

        <div className="divider">
          <span className="divider-symbol">&#9830;</span>
        </div>

        <div className="rule-section">
          <h4 className="rule-title">Deals Unlocked</h4>
          <p className="rule-text">
            In this final round, players who guess incorrectly receive a Deal—a
            special ability that can be used in future turns.
          </p>
          <p className="note">Deals are only awarded when you're wrong.</p>
        </div>
      </div>
    </section>
  );
}

export default RoundThree;
