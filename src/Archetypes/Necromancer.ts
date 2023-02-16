import Archetype from './Archetype'; 

class Necromancer extends Archetype {
  private _energyType: string;
  private static _instances = 0;

  constructor(name:string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._instances += 1;
  }

  get energyType(): string {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._instances;
  }
}

export default Necromancer;