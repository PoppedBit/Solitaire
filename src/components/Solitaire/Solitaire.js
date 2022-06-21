import { Tableau } from "./Tableau";

import { Stock } from './Stock';
import { Waste } from './Waste';

import { Foundations } from './Foundations';

export const Solitaire = () => {
  return <div>
    <div>
      <Stock />
      <Waste />
      <Foundations />
    </div>
    <Tableau />
  </div>
};