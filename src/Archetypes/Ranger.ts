import Archetype from './Archetype'; 

class Ranger extends Archetype {
  private _energyType: string;
  private static _instances = 0;

  constructor(name:string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._instances += 1;
  }

  get energyType(): string {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._instances;
  }
}

export default Ranger;