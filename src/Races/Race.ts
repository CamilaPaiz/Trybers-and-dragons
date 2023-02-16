abstract class Race {
  private _name:string;
  private _dexterity:number;
  static instance = 0;

  constructor(name:string, dexterity:number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name():string {
    return this._name;
  }

  get dexterity():number {
    return this._dexterity;
  }

  // getter para retornar: quantidade máxima de pontos de vida da raça
  abstract get maxLifePoints(): number;

  // método que retorna a quantidade de instâncias criadas a partir das classes estendidas da classe
  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}

export default Race;