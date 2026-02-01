function Nav() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const links = [
    { id: 'overview', label: 'Overview' },
    { id: 'round-one', label: 'Round I' },
    { id: 'round-two', label: 'Round II' },
    { id: 'round-three', label: 'Round III' },
    { id: 'deals', label: 'Deals' },
    { id: 'players', label: 'Players' },
    { id: 'conversions', label: 'Conversions' },
  ];

  return (
    <nav>
      {links.map(link => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={(e) => handleClick(e, link.id)}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default Nav;
