/*1. Definições Basicas

1.1 Erro = Erro (em sentido geral): toda situação em que algo “não saiu como esperado”. Em linguagem natural, chamamos de erro qualquer falha — por exemplo, enganar-se ao digitar um número ou interpretar mal uma instrução.


1.2 Exceção = Exceção (em JavaScript): um tipo específico de erro que interrompe o fluxo normal do programa. Quando o JavaScript “lança” (throw) uma exceção, a execução para imediatamente, a menos que haja um bloco try…catch para capturá-la.


1.3 diferença entre "erro" em linguagem natural e "exceção" em Js
= - Em comunicação cotidiana, dizer “cometi um erro” significa que nossa ideia ou ação não foi adequada.
- Em JavaScript, esperamos que situações excepcionais (como acessar uma variável inexistente) sejam sinalizadas com **exceções** (por exemplo, `ReferenceError`, `TypeError`).


2.  **Erros sem Exceções?**
    
    Dê um exemplo de situação em que algo “deu errado” no seu código mas não gerou uma exceção (isto é, não disparou `throw`).

Às vezes, seu programa trabalha com dados incorretos, mas **não** lança uma exceção. Isso acontece quando:

- Você recebe um dado de usuário inválido (como uma string em vez de número) e não valida antes de usar.
- Uma função retorna `undefined` ou `NaN` em vez de lançar erro.

 Exemplo:
 */

{
 function soma(a, b) {
   return a + b;
 }
 console.log(soma(5, "dez")); // → "5dez" (concatenou), sem exceção
 console.log(soma(5, undefined)); // → NaN, mas sem lançar erro
}
 
 /*Embora o resultado esteja “errado” para a lógica esperada, não há exceção e o fluxo continua normalmente.

3 - Confiabilidade Limitada

Em que cenários seu programa deve assumir que não pode confiar plenamente em dados de entrada do usuário? Escreva um pequeno comentário indicando como você trataria validações simples (tipo “número esperado, string recebida”).

- Nunca confie 100% em dados vindos de fontes externas (usuário, API, arquivo).
- Sempre **valide** antes de trabalhar:
    - **Tipos**: se espera número, verifique com `typeof value === "number"`.
    - **Intervalos**: se espera uma idade entre 0 e 120, checar `value >= 0 && value <= 120`.
- Caso os dados sejam inválidos, você pode:
    1. Retornar um valor padrão (por exemplo, `null` ou `0`).
    2. Lançar uma **exceção customizada** (para avisar quem chamou a função).
    3. Apenas ignorar a operação (comentar no log).

> Importante: validar antes de executar a lógica principal evita exceções não tratadas e torna seu código mais robusto.


4. Tipos de Erros em JS
4.1 - ReferenceError
Acontece quando você tenta usar uma variável ou função que não existe no contexto atual.
Exemplo:
*/


console.log(variavelInexistente); // ReferenceError: variavelInexistente is not defined
​
/*
4.2 -TypeError
Ocorre quando você tenta fazer uma operação em um valor que não suporta aquela ação.
Exemplos comuns:
Chamar um método de null ou undefined:

*/
{
let x = null;
x.trim(); // TypeError: Cannot read property 'trim' of null
​}
//Invocar uma “coisa” que não é função:
{
let nãoFuncao = 5;
nãoFuncao(); // TypeError: nãoFuncao is not a function
}

 /* **SyntaxError**
    - Surge quando o motor do JavaScript não consegue interpretar seu código devido a erro de sintaxe.
    - **Exemplo**: */
        
    
        // Esqueceu uma chave, virou sintaxe inválida
        {
        if (condicao{
          console.log("Oi");
        }
    }
        // Vai gerar SyntaxError: Unexpected token '{'
        
    /*
    - **Observação**: SyntaxError acontece antes do código rodar, durante o *parsing*. Não há como “capturar” em tempo de execução, pois o arquivo nem chega a executar.

5. Try…Catch Básico
Escreva uma função safeParse(jsonString) que tente converter uma string JSON em objeto:
function safeParse(jsonString) {
  // Use try…catch para retornar o objeto parseado,
  // ou, em caso de erro, retornar null sem interromper a execução.
}*/
{
try {
  console.log(safeParse('{"nome": "Leandromeda"}')); // → { nome: "Leandromeda" }
} catch (erro) {
  console.log(safeParse('texto inválido'));     // → null
}
}
//6. Tratamento Condicional de Exceções

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    if (err instanceof SyntaxError) {
      // erro de parse JSON propriamente
      return null;
    } else {
      // erro inesperado, re-lança
      throw err;
    }
  }
}


// 7 .Bloco Finally
{
function safeParseWithFinally(jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (err) {
      console.warn("Erro de sintaxe no JSON:", err.message);
      return null;
    } finally {
      console.log("Parse attempt finishe");
    }
  }
}

// 8. Lançando Erros Customizados

class InvalidAgeError extends Error {
    constructor(message) {
      super(message);       // seta message e stack corretamente
      this.name = "InvalidAgeError";
    }
  }
  
  function checkAge(age) {
    if (typeof age !== "number") {
      throw new TypeError("Tipo de idade inválido");
    }
    if (age < 0 || age > 120) {
      throw new InvalidAgeError("Idade fora do intervalo (0–120)");
    }
    return "Idade válida";
  }
  
  // Testes
  try {
    console.log(checkAge(30));   // "Idade válida"
    console.log(checkAge(200));   // "Idade Invalida"
    console.log(checkAge(-5));   // lança InvalidAgeError
  } catch (err) {
    if (err instanceof InvalidAgeError) {
      console.error("Erro customizado:", err.message);
    } else {
      console.error("Outro erro:", err);
    }
  }

  //9 - Dá erro por conta q a soma nao é aplicada porem, se colocar depois da certo!

  //10 - com o atalho ctrl + shift + J ou apertar o f12 ou caso nao funcionar o f12, aperat o fn + f12

  //11 minha experiencia foi que nao entendi direito como funciona porem apliquei no f12 do navegador e entendi que serve para corrijir erros, observar possiveis falhas e navegar pelas linhas tornando facil

  /*12 - **Step Over (Avançar sobre)**
    - Atalho comum: `F10`.
    - Executa a linha atual e para **na próxima**, sem entrar dentro de chamadas de função.
    - Útil quando você sabe que a função chamada está correta e só quer ver o próximo passo no código externo.
- **Step Into (Entrar)**
    - Atalho comum: `F11`.
    - Ao chegar em uma chamada de função, “entra” nela e pausa na primeira linha interna.
    - Útil para investigar a lógica interna de funções.
- **Step Out (Sair)**
    - Atalho comum: `Shift+F11`.
    - Executa o restante da função atual sem parar em suas linhas internas até retornar ao chamador.
    - Útil quando você entrou em funções pequenas e quer voltar rapidamente ao nível de execução que chamou.
*/

//13 - 
{
 function externo(n) {
  return interno(n) + 1;
}
function interno(m) {
  return m * 3;
}
interno(4);
}

//14 . Depuração Sem debugger

/*depois de atingir um breakpoint no painel de ferramentas do navegador:
para retomar normalmente, clique no botão "Resume script execution" (ícone de play/F8).
para remover todos os breakpoints, clique com o botão direito na área de breakpoints e escolha "Remove all breakpoints" ou use o botão de lixeira.
*/