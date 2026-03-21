import { useState, useEffect } from "react";
import { Player } from "./types";
import { deals } from "./data/deals";

const defaultDeckConfig: Record<string, number> = deals.reduce((acc, deal) => {
  acc[deal.id] = deal.defaultCount;
  return acc;
}, {} as Record<string, number>);

import Header from "./components/Header";
import Nav from "./components/Nav";
import Overview from "./components/Overview";
import RoundOne from "./components/RoundOne";
import RoundTwo from "./components/RoundTwo";
import RoundThree from "./components/RoundThree";
import Deals from "./components/Deals";
import Players from "./components/Players";
import Conversions from "./components/Conversions";
import Clicker from "./components/Clicker";
import Footer from "./components/Footer";

function App() {
  const [players, setPlayers] = useState<Player[]>(() => {
    const saved = localStorage.getItem("unboxed-players");
    return saved ? JSON.parse(saved) : [];
  });

  const totalCards = deals.reduce((sum, deal) => sum + deal.defaultCount, 0);
  const dealsPerPlayer =
    players.length > 0 ? Math.floor(totalCards / players.length) : 0;

  useEffect(() => {
    localStorage.setItem("unboxed-players", JSON.stringify(players));
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
    setPlayers(players.filter((p) => p.id !== playerId));
  };

  const assignDeal = (playerId: string, dealId: string) => {
    setPlayers(
      players.map((p) =>
        p.id === playerId ? { ...p, deals: [...p.deals, dealId] } : p,
      ),
    );
  };

  const removeDeal = (playerId: string, dealId: string) => {
    setPlayers(
      players.map((p) =>
        p.id === playerId
          ? { ...p, deals: p.deals.filter((d) => d !== dealId) }
          : p,
      ),
    );
  };

  const clearAllPlayers = () => {
    setPlayers([]);
  };

  const randomlyAssignDeals = () => {
    if (players.length === 0) return;

    // Build the deck based on config
    const deck: string[] = [];
    for (const [dealId, count] of Object.entries(defaultDeckConfig)) {
      for (let i = 0; i < count; i++) {
        deck.push(dealId);
      }
    }

    // Shuffle the deck
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    // Assign dealsPerPlayer deals to each player
    const updatedPlayers = players.map((p) => ({
      ...p,
      deals: [] as string[],
    }));

    let deckIndex = 0;
    for (let i = 0; i < dealsPerPlayer; i++) {
      for (let j = 0; j < updatedPlayers.length; j++) {
        if (deckIndex < deck.length) {
          updatedPlayers[j].deals.push(deck[deckIndex]);
          deckIndex++;
        }
      }
    }

    setPlayers(updatedPlayers);
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
          dealsPerPlayer={dealsPerPlayer}
          onAddPlayer={addPlayer}
          onRemovePlayer={removePlayer}
          onAssignDeal={assignDeal}
          onRemoveDeal={removeDeal}
          onClearAll={clearAllPlayers}
          onRandomAssign={randomlyAssignDeals}
        />
        <Conversions />
        <Clicker />
      </main>
      <Footer />
    </>
  );
}

export default App;
