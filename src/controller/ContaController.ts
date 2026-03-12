import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository{
    
    // Polimorfismo = Lista de Conta (classe abstrata) que viram de Conta Corrente e Conta Poupança (subclasses)
    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;
    
    procurarPorNumero(numero: number): void {
        throw new Error("Method not implemented.");
    }

    // for of = percorre toda a Lista
    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, "\nA Conta número: "+ conta.numero +" foi criada com sucesso!", colors.reset);
    }

    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    // Métodos Auxiliares

    // Gerar Número da Conta
    public gerarNumero(): number {
        return ++ this.numero;
    }

    
}