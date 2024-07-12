import readlinesync = require("readline-sync");
import { Conta } from "./src/model/Conta";
import { colors } from "./src/model/Color";

let opcao: number;

export function main() {

/* Exemplo do cookbook */

    const conta: Conta = new Conta(1, 123, 1, "João da Silva", 1000);

    conta.visualizar();
    conta.sacar(500);
    conta.visualizar();
    conta.depositar(1000);
    conta.visualizar(); 

//  Instanciacao de Objeto 01 conforme Task 02

//     const conta: Conta = new Conta(158160, 33, 1, "Frederico dos Anjos", 350);

//     conta.visualizar();
//     conta.sacar(0);
//     conta.visualizar();
//     conta.depositar(600);
//     conta.visualizar(); 

//  Instanciacao de Objeto 02 conforme Task 02

//     const conta: Conta = new Conta(819419, 33, 2, "Carlos Marcos", 23640);

//     conta.visualizar();
//     conta.sacar(500);
//     conta.visualizar();
//     conta.depositar(1000);
//     conta.visualizar(); 

    while (true) {

        console.log(colors.fg.magentastrong, colors.bg.white, "\n*********************************************************");
        console.log(colors.fg.crimson, colors.bg.white, "                                                     ");
        console.log(colors.fg.magentastrong, colors.bg.white, "                    NAKED BANK                       ");
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
                   console.log("\nNAKED BANK - Natural é ser NAKED! :-) ");
                   sobre();
                   process.exit(0);
       
                   switch (opcao) {
                       case 1:
                           console.log("\n\nCriar Conta\n\n");
                            break;
                       case 2:
                           console.log("\n\nListar todas as Contas\n\n");
                           break;
                       case 3:
                           console.log("\n\nConsultar dados da Conta - por número\n\n");
                            break;
                       case 4:
                           console.log("\n\nAtualizar dados da Conta\n\n");
                            break;
                       case 5:
                           console.log("\n\nApagar uma Conta\n\n");
                            break;
                       case 6:
                           console.log("\n\nSaque\n\n");
                           break;
                       case 7:
                           console.log("\n\nDepósito\n\n");
                           break;
                       case 8:
                           console.log("\n\nTransferência entre Contas\n\n");
                           break;

                       default:
                           console.log("\nOpção Inválida!\n");      
                           break;
                   }
               }
       
           }
       }
       
       export function sobre(): void {
           console.log("\n****************************************************");
           console.log("Projeto Desenvolvido por: ");
           console.log("Umma Noydee @>---");
           console.log("Trabalhadores de todo o mundo, uni-vos!");
           console.log("*****************************************************");
       }

 main();