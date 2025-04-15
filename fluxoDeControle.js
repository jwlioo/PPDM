function ex1() {

    let a = prompt('Digite um numero: ');

    if (a >= 0) {
        console.log(`O número é positivo!`)
    } else {
        console.log(`O número não é positivo!`)
    }
}

function ex2() {

    let numero = parseInt(prompt("Digite um número:"));

    if (numero % 2 === 0) {
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    }
}

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

function ex4() {

    const num1 = parseFloat(prompt("Digite o primeiro número:"));

    const num2 = parseFloat(prompt("Digite o segundo número:"));

    if (num1 > num2) {
        console.log(`O maior número é: ${num1}`);
    } else {
        console.log(`O maior número é: ${num2}`);
    }
}

function ex5() {

    const numero = parseFloat(prompt("Digite um número:"));

    console.log(numero >= 0 ? "Positivo" : "Negativo");

}

function ex6() {

    const opcao = prompt("Escolha uma opção:\n1 - Início\n2 - Sobre\n3 - Sair");

    switch (opcao) {
        case "1":
            console.log("Você escolheu Início");
            break;
        case "2":
            console.log("Você escolheu Sobre");
            break;
        case "3":
            console.log("Você escolheu Sair");
            break;
        default:
            console.log("Opção inválida");
    }
}

function ex7() {
    let contador = 1;
    while (contador <= 5) {
        console.log(contador);
        contador++;
    }
}

function ex8() {

    let contador = 5;

    do {
        console.log(contador);
        contador--;
    } while (contador >= 1);
}

function ex9() {

    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function ex10() {

    let soma = 0;
    
    for (let i = 1; i <= 10; i++) {
        soma += i;
    }

    console.log(`A soma dos números de 1 a 10 é: ${soma}`);
}

function ex11() {
    
    const array = ["Maçã", "Banana", "Laranja", "Uva"];
    
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function ex12() {
    
    const nomes = ["Ana", "João", "Maria", "Pedro"];
    
    for (const nome of nomes) {
        console.log(nome);
    }
}

function ex13() {
    
    const pessoa = {
        nome: "Carlos",
        idade: 25,
        cidade: "São Paulo"
    };
    
    for (const propriedade in pessoa) {
        console.log(`${propriedade}: ${pessoa[propriedade]}`);
    }
}

function ex14() {
    
    for (let i = 1; i <= 10; i++) {
        if (i === 6) {
            break;
        }
        console.log(i);
    }
}

function ex15() {
    
    for (let i = 1; i <= 10; i++) {
        if (i === 7) {
            continue;
        }
        console.log(i);
    }
}

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

function ex17() {
    
    const numero = parseInt(prompt("Digite um número para ver sua tabuada:"));
    
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

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



ex1();
ex2();
ex3();
ex4();
ex5();
ex6();
ex7();
ex8();
ex9();
ex10();
ex11();
ex12();
ex13();
ex14();
ex15();
ex16();
ex17();
ex18();
ex19();
