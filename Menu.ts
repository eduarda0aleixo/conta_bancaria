import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta";

export function main() {
    
    let opcao: number;

    // Objeto da Classe Conta (Teste)
    const conta: Conta = new Conta(2, 234, 2, "Fernanda", 20000);
    conta.visualizar();
    conta.sacar(20500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();

    const conta2: Conta = new Conta(298, 333, 1, "Elisangela", 4300);
    conta.visualizar();
    conta.sacar(100);
    conta.visualizar();
    conta.depositar(20);
    conta.visualizar();


    while(true){

        console.log(colors.bg.black, colors.fg.yellow)       
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if(opcao == 9){colors.fg.greenstrong
            console.log("\nBanco do Brazil com Z - O seu futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0) // força o terminal parar
        }
        
        switch(opcao){
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\n\nCriar Conta\n\n", colors.reset);
                    
                keyPress()
                break;
            
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            
            case 3: 
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta\n\n", colors.reset);
                
                keyPress()
                break;

            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;

            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma conta \n\n", colors.reset);
               
                keyPress()
                break;
            
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;

            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepósito\n\n", colors.reset);
            
                keyPress()
                break;

            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferência entre Contas", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpação Inválida!\n", colors.reset);

                keyPress()
                break;
        
        }
    }
}

function sobre(): void {
    
    console.log(colors.fg.green,
        `\n*****************************************************
            Projeto Desenvolvido por: 
            Eduarda Silva Aleixo - eduada.aleixo07@gmail.com
            https://github.com/eduarda0aleixo
*****************************************************`);
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();