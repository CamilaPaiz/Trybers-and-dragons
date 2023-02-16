import Archetype from './Archetype'; 

class Mage extends Archetype {
  private _energyType: string;
  private static _instances = 0;

  constructor(name:string) {
    super(name);
    this._energyType = 'mana';
    Mage._instances += 1;
  }

  get energyType(): string {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Mage._instances;
  }
}

export default Mage;