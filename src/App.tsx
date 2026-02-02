import { useState, useEffect } from "react";
import { Player } from "./types";
import { deals } from "./data/deals";

type DeckConfig = Record<string, number>;

const defaultDeckConfig: DeckConfig = deals.reduce((acc, deal) => {
  acc[deal.id] = 2;
  return acc;
}, {} as DeckConfig);

import Header from "./components/Header";
import Nav from "./components/Nav";
import Overview from "./components/Overview";
import RoundOne from "./components/RoundOne";
import RoundTwo from "./components/RoundTwo";
import RoundThree from "./components/RoundThree";
import Deals from "./components/Deals";
import Players from "./components/Players";
import Conversions from "./components/Conversions";
import Footer from "./components/Footer";

function App() {
  const [players, setPlayers] = useState<Player[]>(() => {
    const saved = localStorage.getItem("unboxed-players");
    return saved ? JSON.parse(saved) : [];
  });

  const [deckConfig, setDeckConfig] = useState<DeckConfig>(() => {
    const saved = localStorage.getItem("unboxed-deck-config");
    return saved ? JSON.parse(saved) : defaultDeckConfig;
  });

  const [dealsPerPlayer, setDealsPerPlayer] = useState<number>(() => {
    const saved = localStorage.getItem("unboxed-deals-per-player");
    return saved ? JSON.parse(saved) : 2;
  });

  useEffect(() => {
    localStorage.setItem("unboxed-players", JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    localStorage.setItem("unboxed-deck-config", JSON.stringify(deckConfig));
  }, [deckConfig]);

  useEffect(() => {
    localStorage.setItem(
      "unboxed-deals-per-player",
      JSON.stringify(dealsPerPlayer),
    );
  }, [dealsPerPlayer]);

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

  const updateDeckConfig = (dealId: string, count: number) => {
    setDeckConfig({ ...deckConfig, [dealId]: Math.max(0, count) });
  };

  const updateDealsPerPlayer = (count: number) => {
    setDealsPerPlayer(Math.max(0, count));
  };

  const randomlyAssignDeals = () => {
    if (players.length === 0) return;

    // Build the deck based on config
    const deck: string[] = [];
    for (const [dealId, count] of Object.entries(deckConfig)) {
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
          deckConfig={deckConfig}
          dealsPerPlayer={dealsPerPlayer}
          onAddPlayer={addPlayer}
          onRemovePlayer={removePlayer}
          onAssignDeal={assignDeal}
          onRemoveDeal={removeDeal}
          onClearAll={clearAllPlayers}
          onUpdateDeckConfig={updateDeckConfig}
          onUpdateDealsPerPlayer={updateDealsPerPlayer}
          onRandomAssign={randomlyAssignDeals}
        />
        <Conversions />
      </main>
      <Footer />
    </>
  );
}

export default App;
