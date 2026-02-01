import GridVisual from "./GridVisual";

function Overview() {
  return (
    <section id="overview" className="section">
      <h2>The Game</h2>
      <div className="content-box">
        <p>
          A sophisticated game of higher or lower, played across three rounds
          with escalating stakes. Start with nine stacks of cards arranged in a
          3×3 grid and await your fate.
        </p>
        <GridVisual size="full" />
        <p className="note">
          Players take turns guessing higher or lower on any stack. Guess
          correctly and remain unscathed. Guess wrong and drink sips equal to
          the stack's count.
        </p>
      </div>
    </section>
  );
}

export default Overview;
