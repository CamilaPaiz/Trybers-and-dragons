import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints:number;
  private _strength:number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get strength():number {
    return this._strength;
  }

  get lifePoints():number {
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    const newLifePoints = this._lifePoints - attackPoints;
    if (newLifePoints === 0) {
      return -1; 
    }
    return newLifePoints;
  }
}

export default Monster;