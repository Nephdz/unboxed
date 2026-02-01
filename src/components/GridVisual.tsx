interface GridVisualProps {
  size: 'full' | 'small' | 'single';
}

function GridVisual({ size }: GridVisualProps) {
  const stackCount = size === 'full' ? 9 : size === 'small' ? 4 : 1;
  const className = `grid-visual${size === 'small' ? ' small' : size === 'single' ? ' single' : ''}`;

  return (
    <div className={className}>
      {Array.from({ length: stackCount }).map((_, i) => (
        <div key={i} className={`stack${size === 'single' ? ' large' : ''}`} />
      ))}
    </div>
  );
}

export default GridVisual;
