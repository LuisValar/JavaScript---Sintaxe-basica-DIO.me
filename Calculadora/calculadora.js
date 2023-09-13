function calculadora() {
    const operacao = prompt('Escolha uma operacão:\n 1- Soma (+)\n 2 - Subtracão (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - divisão inteira(%)\n 6 - Potencialização (**)');

    if(!operacao || operacao >= 7){
        alert(`Erro - Digite um valor válido!`);
        calculadora();
    } else
    {
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if (!n1 || !n2){
            alert(`Erro - Parametros Invalidos!`)
            calculadora();
        }else{

            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoReal(){
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} = ${resultado}`);
                novaOperacao();
            }
            function potencializacao(){
                resultado = n1 ** n2;
                alert(`Se ${n1} elevado ${n2} é igual à ${resultado}`);
                novaOperacao();
            }
            function novaOperacao(){
                let opcao = prompt('Deseja fazer uma nova operacão?\n 1 - Sim \n 2 Não');
                if (opcao == 1){
                    calculadora();
                }else if (opcao ==2){
                    alert(`Até mais!`)
                }else{
                    alert(`Digite uma opção válida!`);
                    novaOperacao();
                }
            }
            
            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisaoReal();
                    break;
                case 5:
                    divisaoInteira();
                    break;
                case 6:
                    potencializacao();
                    break
                default:
                    alert(`Opção invalida!`);
                    operacao();
            }
        }
    }
}
calculadora();
