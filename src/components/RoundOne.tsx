function RoundOne() {
  return (
    <section id="round-one" className="section">
      <h2>Round I</h2>
      <div className="invitation-card">
        <h3>The Beginning</h3>
        <p className="round-subtitle">9 Stacks in Play</p>

        <p>
          All nine stacks are in play. Players take turns selecting a stack and
          declaring <em>higher</em> or <em>lower</em>. A card is revealed from
          the deck and placed on the chosen stack.
        </p>

        <div className="divider">
          <span className="divider-symbol">&#9830;</span>
        </div>

        <div className="rule-section">
          <h4 className="rule-title">(Un)lucky Sevens</h4>
          <p className="rule-text">
            Should three cards appear in a row (horizontally, vertically, or
            diagonally), drink the stack count across all three stacks.
          </p>
          <p className="rule-text special">
            If all three cards are sevens, drink 7² = 49 sips.
          </p>
        </div>

        <p className="transition">
          Round I concludes when the deck is exhausted.
        </p>
      </div>
    </section>
  );
}

export default RoundOne;
