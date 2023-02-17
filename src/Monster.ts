import Fighter, { SimpleFighter } from './Fighter';

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

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this._lifePoints <= 0) {
      return -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  // Character pode atacar um Monster, e o Monster receberá de dano;
}

export default Monster;