import { useState } from 'react';

import { Tableau } from "./Tableau";

import { Stock } from './Stock';
import { Waste } from './Waste';

import { Foundations } from './Foundations';

import { cards } from './cards';

let shuffledCards = cards.sort(() => Math.random() - 0.5);

const tableauCards = [1, 2, 3, 4, 5, 6, 7].map((count, index) => {
  let pile = [];
  while(count){
    const card = shuffledCards.shift();
    pile.push(card);
    count--;
  }
  return pile;
});

const initialGameState = {
  stock: shuffledCards,
  waste: [],
  foundations: [
    [],[],[],[]
  ],
  tableau: tableauCards,
};

const styles = {
  Solitaire: {
    backgroundColor: 'green',
    height: '100%',
    width: '100%',
  }
}

export const Solitaire = () => {

  const [gameState, setGameState] = useState(initialGameState);

  const {stock, waste, foundations, tableau} = gameState;

  const updateGameState = (obj) => {
    setGameState({
      ...gameState,
      ...obj,
    })
  }

  return <div
    style={styles.Solitaire}
  >
    <div>
      <Stock
        cards={stock}
      />
      <Waste 
        cards={waste}
      />
      <Foundations 
        cards={foundations}
      />
    </div>
    <Tableau
      cards={tableau}
    />
  </div>
};