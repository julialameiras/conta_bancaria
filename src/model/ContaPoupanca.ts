import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {

  private _aniversario: number;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    aniversario: number
  ) {
    super(numero, agencia, tipo, titular, saldo);
    this._aniversario = aniversario;
  }

  public get aniversario() {
    return this._aniversario;
  }

  public set limite(aniversario: number) {
    this._aniversario = aniversario;
  }

  public visualizar(): void {
    super.visualizar();
    console.log("Aniversario da Conta: " + this._aniversario);
  }
}