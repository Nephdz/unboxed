function RoundTwo() {
  return (
    <section id="round-two" className="section">
      <h2>Round II</h2>
      <div className="invitation-card">
        <h3>The Narrowing</h3>
        <p className="round-subtitle">4 Stacks Remain</p>

        <p>
          The group selects any four stacks to remain (forming a 2×2 square).
          The remaining five stacks are shuffled together to form the new deck.
        </p>

        <div className="divider">
          <span className="divider-symbol">&#9830;</span>
        </div>

        <div className="rule-section">
          <h4 className="rule-title">(Gay) Marriage</h4>
          <p className="rule-text">
            When a pair appears on the board, the player who created it selects
            a partner. Both must drink.
          </p>
          <ul className="rule-list">
            <li>The player who placed the matching card drinks their stack.</li>
            <li>The partner drinks the other matching stack.</li>
          </ul>
          <p className="rule-text special">
            Threesome: If a third matching card appears, the player who placed
            it drinks their stack and assigns the other two stacks to players of
            their choosing.
          </p>
        </div>

        <p className="transition">
          Round II concludes when the deck is exhausted.
        </p>
      </div>
    </section>
  );
}

export default RoundTwo;
