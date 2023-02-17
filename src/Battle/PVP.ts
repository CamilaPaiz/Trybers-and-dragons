import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  player2: Fighter;
  constructor(player:Fighter, player2:Fighter) {
    super(player);
    this.player2 = player2;
  }

  /* fight(): number {
   
  } */
} 
// *while typescript
export default PVP;