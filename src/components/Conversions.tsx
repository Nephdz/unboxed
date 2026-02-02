function Conversions() {
  return (
    <section id="conversions" className="section">
      <h2>Conversions</h2>
      <div className="content-box">
        <div className="conversion-table">
          <div className="conversion-row">
            <span className="sips">50 sips</span>
            <span className="equals">=</span>
            <span className="shots">1 shot</span>
          </div>
          <div className="conversion-note">Maximum 2 shots per conversion</div>
          <div className="conversion-example">
            <em>80 sips = 1 shot + 30 sips</em>
            <br />
            <em>120 sips = 2 shots + 20 sips</em>
            <br />
            <em>150 sips = 2 shots + 50 sips</em>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conversions;
