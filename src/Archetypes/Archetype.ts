import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name:string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  // retorna uma energyType vinda da interface
  abstract get energyType(): EnergyType;

  // corresponde à quantidade de instâncias criadas a partir das classes estendidas da classe
  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
}

export default Archetype;