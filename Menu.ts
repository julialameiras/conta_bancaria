import readlinesync = require("readline-sync");
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { colors } from "./src/model/Color";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao, 
    numero, 
    agencia,
    tipo,
    saldo,
    limite,
    valor,
    numeroDestino: number, 
    aniversario: number;
    let titular: string;

    const tipoContas = ["Conta Corrente", "Conta Poupanca"];

    let contas: ContaController = new ContaController();

    while (true) {

        console.log(colors.fg.crimson, colors.bg.white, "\n*********************************************************");
        console.log(colors.fg.crimson, colors.bg.white, "                                                     ");
        console.log(colors.fg.crimson, colors.bg.white, "                    NAKED BANK                 ");
        console.log(colors.fg.crimson, colors.bg.white, "                                                     ");
        console.log(colors.fg.crimson, colors.bg.white, "*****************************************************");
        console.log(colors.fg.crimson, colors.bg.white, "                                                     ");
        console.log(colors.fg.crimson, colors.bg.white, "              1 - Criar conta                        ");
        console.log(colors.fg.crimson, colors.bg.white, "              2 - Listar todas as Contas             ");
        console.log(colors.fg.crimson, colors.bg.white, "              3 - Buscar Conta por Numero            ");
        console.log(colors.fg.crimson, colors.bg.white, "              4 - Atualizar Dados da Conta           ");
        console.log(colors.fg.crimson, colors.bg.white, "              5 - Apagar Conta                       ");
        console.log(colors.fg.crimson, colors.bg.white, "              6 - Sacar                              ");
        console.log(colors.fg.crimson, colors.bg.white, "              7 - Depositar                          ");
        console.log(colors.fg.crimson, colors.bg.white, "              8 - Transferir valores entre Contas    ");
        console.log(colors.fg.crimson, colors.bg.white, "              9 - Sair                               ");
        console.log(colors.fg.crimson, colors.bg.white, "                                                     ");
        console.log(colors.fg.crimson, colors.bg.white, "*****************************************************");

               console.log("Entre com a opção desejada: ");
               opcao = readlinesync.questionInt("");
       
               if (opcao == 9) {
                   console.log(colors.fg.crimson, 
                    "\nNAKED BANK - Natural é ser NAKED! :-) "
                );
                   sobre();
                   console.log(colors.reset, "");
                   process.exit(0);
            }
       
                   switch (opcao) {

                       case 1:
                           console.log(colors.fg.crimson, "\n\nCriar Conta\n\n", colors.reset);

                           console.log("Digite o número da agência: ");
                           agencia = readlinesync.questionInt("");
                           
                           console.log("Digite o nome do Titular da conta: ");
                           titular = readlinesync.question("");
                           
                           console.log("\nDigite o tipo da conta: ");
                           tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;
                           
                           console.log("\nDigite o saldo da conta: ");
                           saldo = readlinesync.questionFloat("");
                           

                           switch (tipo) {
                            case 1:
                              console.log("Digite o Limite da Conta: ");
                              limite = readlinesync.questionFloat("");
                              contas.cadastrar(
                                new ContaCorrente(
                                contas.gerarNumero(), 
                                agencia, 
                                tipo, 
                                titular, 
                                saldo, 
                                limite
                            )
                        );
                        break;

                            case 2:
                              console.log("Digite o Dia do aniversario da Conta Poupanca: ");
                              aniversario = readlinesync.questionFloat("");
                              contas.cadastrar(
                                new ContaPoupanca(
                                    contas.gerarNumero(), 
                                    agencia, 
                                    tipo, 
                                    titular, 
                                    saldo, 
                                    aniversario
                                )
                            );
                            break;
                          } 

                          keyPress();
                          break;

                       case 2:
                        console.log(colors.fg.crimson,
                        "\n\nListar todas as Contas\n\n",
                        colors.reset
                    );
                    contas.listarTodas();
                    
                    keyPress();
                    break;

                       case 3:
                        console.log(
                        colors.fg.crimson,
                        "\n\nConsultar dados da Conta - por número\n\n",
                        colors.reset
                    );
                    console.log("Digite o número da conta: ");
                    numero = readlinesync.questionInt();
                    contas.procurarPorNumero(numero);
                           
                    keyPress();
                    break;

                       case 4:
                           console.log(
                            colors.fg.crimson,
                            "\n\nAtualizar dados da Conta\n\n",
                        colors.reset
                    );
                        console.log("Digite o número da Conta: "); 
                        numero = readlinesync.questionInt();
                           
                        let conta = contas.buscarNoArray(numero);
                           
                        if (conta != null) {
                            console.log("Digite o número da agência: ");
                            agencia = readlinesync.questionInt();
                            
                        console.log("Digite o nome do titular da conta: ");
                        titular = readlinesync.question();
                            
                        tipo = conta.tipo;
                            
                        console.log("Digite o Saldo da conta: ");
                        saldo = readlinesync.questionFloat();
                            
                        switch (tipo) {
                            
                            case 1:
                                console.log("Digite o Limite da Conta: ");
                                limite = readlinesync.questionFloat();
                                contas.atualizar(
                                    new ContaCorrente(
                                    numero, 
                                    agencia, 
                                    tipo, 
                                    titular, 
                                    saldo, 
                                    limite
                                )
                            );
                            break;
                                
                            case 2:
                                console.log("Digite o Aniversario da Conta Poupanca: ");
                                aniversario = readlinesync.questionInt();
                                contas.atualizar(
                                    new ContaPoupanca(
                                    numero, 
                                    agencia, 
                                    tipo, 
                                    titular, 
                                    saldo, 
                                    aniversario
                                )
                            );
                            break;
                        }
                    } else {
                        console.log(
                            colors.fg.crimson,
                            "\nA Conta número: " + numero + "não foi encontrada!",
                            colors.reset
                        );
                    }
                        
                    keyPress();
                    break;

                       case 5:
                           console.log(colors.fg.crimson, 
                            "\n\nApagar uma Conta\n\n",
                        colors.reset
                    );
                    
                    console.log("Digite o numero da conta: ");
                    numero = readlinesync.questionInt("");
                    contas.deletar(numero);
                   
                    keyPress();
                    break;

                       case 6:
                        console.log(
                        colors.fg.crimson, 
                        "\n\nSaque\n\n", 
                        colors.reset
                    );
                        console.log("Digite o numero da conta: ");
                        numero = readlinesync.questionInt("");
                   
                        console.log("Digite o valor do Saque: ");
                        valor = readlinesync.questionFloat("");
                   
                        contas.sacar(numero, valor);
                   
                    keyPress();
                    break;

                       case 7:
                        console.log(
                        colors.fg.crimson,
                        "\n\nDepósito\n\n",
                        colors.reset
                    );
                        console.log("Digite o numero da conta: ");
                        numero = readlinesync.questionInt("");
                   
                        console.log("Digite o valor do Deposito: ");
                        valor = readlinesync.questionFloat("");
                   
                        contas.depositar(numero, valor);
                   
                    keyPress();
                    break;

                       case 8:
                        console.log(
                        colors.fg.crimson,
                        "\n\nTransferência entre Contas\n\n", 
                        colors.reset
                    );
                        console.log("Digite o numero da Conta de Origem: ");
                        numero = readlinesync.questionInt();
                   
                        console.log("Digite o numero da Conta de Destino: ");
                        numeroDestino = readlinesync.questionInt("");
                   
                        console.log("\nDigite o valor do Deposito: ");
                        valor = readlinesync.questionFloat();
                
                        contas.transferir(numero, numeroDestino, valor);
                   
                    keyPress();
                    break;

                default:
                    console.log(
                    colors.fg.crimson,
                    "\nOpção Inválida!\n",
                colors.reset
            );      
            break;
        }
    }
}
       
       function sobre(): void {
           console.log("\n****************************************************");
           console.log("Projeto Desenvolvido por: ");
           console.log("Umma Noydee @>---");
           console.log("Trabalhadores de todo o mundo, uni-vos!");
           console.log("*****************************************************");
       }

       function keyPress(): void {
        console.log(colors.reset, "");
        console.log("\nPressione enter para continuar...");
        readlinesync.prompt();
    }



main();