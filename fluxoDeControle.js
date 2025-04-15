function ex1() {

    let a = prompt('Digite um numero: ');

    if (a >= 0) {
        console.log(`O número é positivo!`)
    } else {
        console.log(`O número não é positivo!`)
    }
}

/*2. **Número par ou ímpar**
   // Use `if... else` para dizer se um número é par ou ímpar.*/

function ex2() {

    let numero = parseInt(prompt("Digite um número:"));

    if (numero % 2 === 0) {
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    }
}

/*3. **Boas-vindas por turno**
    
    Crie uma variável com "M", "T" ou "N" e use `if... else if` para exibir "Bom dia", "Boa tarde" ou "Boa noite".*/


function ex3() {

    let turno = prompt("Digite o turno (M para manhã, T para tarde, N para noite):").toUpperCase();

    if (turno === "M") {
        console.log("Bom dia!");
    } else if (turno === "T") {
        console.log("Boa tarde!");
    } else if (turno === "N") {
        console.log("Boa noite!");
    } else {
        console.log("Turno inválido!");
    }
}
/* 4. **Maior de dois números**
    
    Peça dois números e exiba o maior usando `if`.*/
    


function ex4() {

    const num1 = parseFloat(prompt("Digite o primeiro número:"));

    const num2 = parseFloat(prompt("Digite o segundo número:"));

    if (num1 > num2) {
        console.log(`O maior número é: ${num1}`);
    } else {
        console.log(`O maior número é: ${num2}`);
    }
}

/*5. **Uso do operador ternário**
    
Dado um número, use `? :` para exibir "Positivo" ou "Negativo".*/

function ex5() {

    const numero = parseFloat(prompt("Digite um número:"));

    console.log(numero >= 0 ? "Positivo" : "Negativo");

}

/*6. **Menu simples com switch**
    
    Use `switch` para simular um menu com 3 opções: "Início", "Sobre", "Sair".*/

function ex6() {

    const opcao = prompt("Escolha uma opção:\n1 - Início\n2 - Sobre\n3 - Sair");

    switch (opcao) {
        case "1":
            console.log("Você escolheu Início");
            break;
        case "2":
            console.log("Mais sobre bla bla...");
            break;
        case "3":
            console.log("Você saiu");
            break;
        default:
            console.log("Opção inválida");
    }
}

/*7. **Contador de 1 a 5 com while**
    
    Use `while` para contar de 1 a 5.*/

function ex7() {
    let contador = 1;
    while (contador <= 5) {
        console.log(contador);
        contador++;
    }
}

/*8. **Contagem regressiva com do...while**
    
    Faça uma contagem de 5 a 1 com `do... while`.*/

 
function ex8() {

    let contador = 5;

    do {
        console.log(contador);
        contador--;
    } while (contador >= 1);
}

/*9. **Imprimir de 1 a 10 com for**
    
    Use `for` para exibir os números de 1 a 10. */

function ex9() {

    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}


/*10. **Somar números de 1 a 10**
    
    Use um `for` para somar os números de 1 a 10 e exibir o resultado. */


function ex10() {

    let soma = 0;
    
    for (let i = 1; i <= 10; i++) {
        soma += i;
    }

    console.log(`A soma dos números de 1 a 10 é: ${soma}`);
}

/*11. **Imprimir elementos de um array com for**
    
    Crie um array e use `for` para imprimir seus elementos.*/

function ex11() {
    
    
}

/* 12. **Usar for...of com array**
    
    Use `for... of` para exibir nomes de um array de nomes. */

function ex12() {
    
    const nomes = ["julio", "nicolas", "Maria", "Pedro"];
    
    for (const nome of nomes) {
        console.log(nome);
    }
}

/* 13. **Usar for...in com objeto**
    
    Crie um objeto com 3 propriedades e use `for... in` para listá-las. */

function ex13() {
    
    const pessoa = {
        nome: "julia",
        idade: 25,
        cidade: "São Paulo"
    };
    
    for (const propriedade in pessoa) {
        console.log(`${propriedade}: ${pessoa[propriedade]}`);
    }
}

/*14. **Parar contagem com break**
    
    Conte de 1 a 10, mas pare ao chegar no número 5 usando `break`. */

function ex14() {
    
    for (let i = 1; i <= 10; i++) {
        if (i === 6) {
            break;
        }
        console.log(i);
    }
}
/*15. **Pular número com continue**
    
    Conte de 1 a 10, mas pule o número 7 usando `continue`. */

function ex15() {
    
    for (let i = 1; i <= 10; i++) {
        if (i === 7) {
            continue;
        }
        console.log(i);
    }
}

/* 16. **Classificar nota do aluno**

Receba uma nota de 0 a 10 e classifique com `if... else if` como:

- < 6: "Reprovado"
- 6 a 7.9: "Recuperação"
- ≥ 8: "Aprovado" */

function ex16() {
    
    const nota = parseFloat(prompt("Digite a nota do aluno (0 a 10):"));
    
    if (nota < 6) {
        console.log("Reprovado");
    } else if (nota >= 6 && nota < 8) {
        console.log("Recuperação");
    } else if (nota >= 8 && nota <= 10) {
        console.log("Aprovado");
    } else {
        console.log("Nota inválida");
    }
}

/*17. **Tabuada de um número**
    
    Peça um número ao usuário e imprima sua tabuada de 1 a 10 com `for`.*/
    
  

function ex17() {
    
    const numero = parseInt(prompt("Digite um número para ver sua tabuada:"));
    
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

/* 18. **Contar elementos numéricos em um array misto**
    
Use `for... of` para contar quantos elementos são do tipo `number` em um array com vários tipos. */

function ex18() {
    
    const a = [1, "a", 2, "b", 3, true, 4];
    
    let contador = 0;
    
    for (const elemento of a) {
        
        if (typeof elemento === "number") {
            contador++;
        }
    }
    console.log(`O array possui ${contador} elementos numéricos.`);
}

/*19. **Verificar se uma palavra é palíndromo**
    
Peça uma palavra e, com um loop, verifique se ela é igual de trás pra frente. */
function ex19() {

    const palavra = prompt("Digite uma palavra:").toLowerCase();
    
    let palavraInvertida = "";
    
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    } 
    
    if (palavra === palavraInvertida) {
        console.log("A palavra é um palíndromo!");
    } else {
        console.log("A palavra não é um palíndromo.");
    }

}

/*20. **Menu interativo com switch e while**
    
    Crie um menu de opções em loop (`while`) com `switch` que só encerra quando a opção "Sair" for escolhida. */


        let = opcao = 0;

        do {
            opcao = prompt(`Escolha uma opçao abaixo. \n 1 - Verificar se número é positivo. \n 2- Número par ou ímpar. \n 3- Boas-vindas por turno \n 4- Maior de dois números \n 5- Uso do operador ternário \n  6 - Menu simples com switch \n 7- Contador de 1 a 5 com while\n 8- Contagem regressiva com do...while \n 9 - Imprimir de 1 a 10 com for \n 10- Somar números de 1 a 10\n 11- Imprimir elementos de um array com for \n 12- Usar for...of com array \n 13- Usar for...in com objeto \n 14- Parar contagem com break\n 15- Pular número com continue \n 16. Classificar nota do aluno \n 17 - Tabuada de um número \n 18- Contar elementos numéricos em um array misto \n 19. **verificar se uma palavra é palíndromo* \n 20. sair \nOpcao: `);
    


            opcao = parseInt(opcao);

            switch(opcao){
                case 1:
                    ex1();
                        break;

                case 2:
                    ex2();
                        break;

                case 3:
                    ex3();
                        break;

                case 4:
                    ex4();
                         break;

                 case 5:
                    ex5();
                          break;

                case 6:
                    ex6();
                          break;

                 case 7:
                    ex7();
                      break;

                case 1:
                    ex8();
                     break;

                case 9:
                    ex9();
                     break;

                case 10:
                    ex10();
                     break;

                case 11:
                    ex11();
                     break;

                 case 12:
                     ex12();
                         break;

                 case 13:
                     ex13();
                        break; 

                    case 14:
                      ex14();
                         break;

                     case 15:
                        ex15();
                            break;

                    case 16:
                        ex16();
                             break;

                    case 17:
                         ex18();
                            break;

                    case 18:
                        ex18();
                            break;

                    case 19:
                        ex18();
                            break;

                    default:
                        console.log("opcao invalida");

            } while (opcao != 20);
        }


        
    

