
// ### 🟢 Fáceis (4 exercícios)

// 1. Listar nomes com for...of
let nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];
for (let nome of nomes) {
  console.log(nome);
}

// 2. Somar valores com for...of
let numeros = [10, 20, 30, 40, 50];
let total = 0;
for (let valor of numeros) {
  total += valor;
}
console.log("Total:", total);

// 3. Exibir propriedades de um objeto com for...in
let pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo"
};
for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}

// 4. Contar quantas propriedades tem um objeto
let objetoQualquer = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let contadorPropriedades = 0;
for (let chave in objetoQualquer) {
  contadorPropriedades++;
}
console.log("Número de propriedades:", contadorPropriedades);


// ### 🟡 Médios (4 exercícios)

// 1. Concatenar nomes em uma string com for...of
let listaNomes = ["Maria", "José", "Pedro", "Lucia"];
let nomesConcatenados = "";
for (let i = 0; i < listaNomes.length; i++) {
  nomesConcatenados += listaNomes[i];
  if (i < listaNomes.length - 1) nomesConcatenados += ", ";
}
console.log(nomesConcatenados);

// 2. Imprimir tipos de dados de elementos de um array
let arrayMisto = [42, "texto", true, { chave: "valor" }, [1, 2, 3]];
for (let item of arrayMisto) {
  console.log(typeof item);
}

// 3. Transformar valores de um objeto
let idades = {
  Ana: 20,
  Bruno: 25,
  Carlos: 30
};
for (let pessoa in idades) {
  idades[pessoa] += 1; // adiciona 1 ano
}
console.log(idades);

// 4. Converter objeto em array de strings
let produto = {
  nome: "Notebook",
  preco: 2500,
  estoque: 5
};
let arrayStrings = [];
for (let chave in produto) {
  arrayStrings.push(`${chave}: ${produto[chave]}`);
}
console.log(arrayStrings);


// ### 🔴 Difíceis (2 exercícios)

// 1. Contar quantos valores únicos existem em um array
let arrayRepetidos = [1, 2, 2, 3, 4, 4, 5, 1];
let valoresUnicos = new Set();
for (let valor of arrayRepetidos) {
  valoresUnicos.add(valor);
}
console.log("Quantidade de valores únicos:", valoresUnicos.size);

// 2. Criar um objeto com a contagem de caracteres de uma frase
let frase = "banana";
let contagemCaracteres = {};
for (let letra of frase) {
  if (contagemCaracteres[letra]) {
    contagemCaracteres[letra]++;
  } else {
    contagemCaracteres[letra] = 1;
  }
}
console.log(contagemCaracteres);
