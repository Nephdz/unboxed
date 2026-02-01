import { useState, useEffect } from 'react';
import { Player } from './types';
import { deals } from './data/deals';
import Header from './components/Header';
import Nav from './components/Nav';
import Overview from './components/Overview';
import RoundOne from './components/RoundOne';
import RoundTwo from './components/RoundTwo';
import RoundThree from './components/RoundThree';
import Deals from './components/Deals';
import Players from './components/Players';
import Conversions from './components/Conversions';
import Footer from './components/Footer';

function App() {
  const [players, setPlayers] = useState<Player[]>(() => {
    const saved = localStorage.getItem('unboxed-players');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('unboxed-players', JSON.stringify(players));
  }, [players]);

  const addPlayer = (name: string) => {
    const newPlayer: Player = {
      id: crypto.randomUUID(),
      name,
      deals: [],
    };
    setPlayers([...players, newPlayer]);
  };

  const removePlayer = (playerId: string) => {
    setPlayers(players.filter(p => p.id !== playerId));
  };

  const assignDeal = (playerId: string, dealId: string) => {
    setPlayers(players.map(p =>
      p.id === playerId
        ? { ...p, deals: [...p.deals, dealId] }
        : p
    ));
  };

  const removeDeal = (playerId: string, dealId: string) => {
    setPlayers(players.map(p =>
      p.id === playerId
        ? { ...p, deals: p.deals.filter(d => d !== dealId) }
        : p
    ));
  };

  const clearAllPlayers = () => {
    setPlayers([]);
  };

  return (
    <>
      <Header />
      <Nav />
      <main>
        <Overview />
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <Deals deals={deals} />
        <Players
          players={players}
          deals={deals}
          onAddPlayer={addPlayer}
          onRemovePlayer={removePlayer}
          onAssignDeal={assignDeal}
          onRemoveDeal={removeDeal}
          onClearAll={clearAllPlayers}
        />
        <Conversions />
      </main>
      <Footer />
    </>
  );
}

export default App;
