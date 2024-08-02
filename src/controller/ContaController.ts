import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../model/Color";

export class ContaController implements ContaRepository {
  private listaContas: Array<Conta> = new Array<Conta>();
  numero: number = 0;

  procurarPorNumero(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) buscaConta.visualizar();
    else console.log("\nA conta: " + numero + " não foi encontrada!");
  }

  listarTodas(): void {
    for (let conta of this.listaContas) {
      conta.visualizar();
    }
  }

  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log(
      colors.fg.crimson,
      "\nA Conta numero: " + conta.numero + " foi cadastrada com sucesso!",
      colors.reset
    );
  }

  atualizar(conta: Conta): void {
    let buscaConta = this.buscarNoArray(conta.numero);

    if (buscaConta != null) {
      this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
      console.log(
        colors.fg.crimson,
        "\nA conta número: " + conta.numero + " foi atualizada com sucesso!",
        colors.reset
      );
    } else
      console.log(
        colors.fg.crimson,
        "\nA conta número: " + conta.numero + " não foi encontrada!",
        colors.reset
      );
  }

  deletar(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null) {
      this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
      console.log(
        colors.fg.crimson,
        "\nA conta número: " + numero + " foi deletada com sucesso!",
        colors.reset
      );
    } else
      console.log(
        colors.fg.crimson,
        "\nA conta número: " + numero + " não foi encontrada!",
        colors.reset
      );
  }

  public sacar(numero: number, valor: number): void {
    let conta = this.buscarNoArray(numero);

    if (conta != null) {
      if (conta.sacar(valor) == true)
        console.log(
          colors.fg.crimson,
          "\nO Saque na Conta numero: " + numero + " foi realizado com sucesso!",
          colors.reset
        );
    } else
      console.log(
        colors.fg.crimson,
        "\nA conta número: " + numero + " não foi encontrada!",
        colors.reset
      );
  }

  depositar(numero: number, valor: number): void {
    let conta = this.buscarNoArray(numero);

    if (conta != null) {
      conta.depositar(valor);
      console.log(
        colors.fg.crimson,
        "\nO Depósito na Conta numero: " + numero + " foi realizado com sucesso!",
        colors.reset
      );
    } else
      console.log(
        colors.fg.crimson,
        "\nA conta número: " + numero + " não foi encontrada!",
        colors.reset
      );
  }

  public transferir(
    numeroOrigem: number,
    numeroDestino: number,
    valor: number
  ): void {
    let contaOrigem = this.buscarNoArray(numeroOrigem);
    let contaDestino = this.buscarNoArray(numeroDestino);

    if (contaOrigem != null && contaDestino != null) {
      if (contaOrigem.sacar(valor) == true) {
        contaDestino.depositar(valor);
        console.log( 
          colors.fg.crimson,
          "\nA Transferência da Conta numero: " + numeroOrigem + " para a Conta numero " + numeroDestino + " foi efetuada com sucesso!", 
          colors.reset
        );
      }
    } else
      console.log(
        colors.fg.crimson, 
        "\nA conta numero: " + numeroOrigem + " e/ou Conta numero: " + numeroDestino + " não foram encontradas!", 
        colors.reset
      );
  }

  public gerarNumero(): number {
    return ++this.numero;
  }

  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listaContas) {
      if (conta.numero === numero) return conta;
    }

    return null;
  }
}
