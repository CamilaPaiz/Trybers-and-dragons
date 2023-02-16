import Archetype from './Archetype'; 

class Warrior extends Archetype {
  private _energyType: string;
  private static _instances = 0;

  constructor(name:string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._instances += 1;
  }

  get energyType(): string {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._instances;
  }
}

export default Warrior;