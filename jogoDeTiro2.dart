/* Nomes: Julio Botaccio e Nícolas Oliveira 
Basicamente, incluimos duas opções de jogadores, e adicionamos uma segunda de cada função para o outro jogador e operadores lógicos
para diferenciar da opção de jogadores em cada.

E no sistema de pontuação adicionamos na função moverJogador um contador, para contar cada movimento, que foi utilizado em uma função
que criamos que altera o valor da variavel 'pontuacao', com um valor base de 200, diminuindo com base no contador dos movimentos.
*/

import 'dart:io';
import 'dart:math';

class JogoTiro {
  final int largura = 20; // Criação da variável largura que só pode ser atribuida uma vez
  late int alvo; // Criação da variável alvo int que será inicializado em um momento posterior 
  int jogador = 10; // Criação da variável jogador com o valor "10" atribuido a ela 
  int escolha = 0; //  Criação da variável escolha com o valor "0" atribuido a ela 
  late int alvo2; 
  int jogador2 = 10;
  int contador = 0; // Criação da variável contador, que inicia em 0
  int contador2 = 0;
  int pontuacao = 200; // // Criacao da variavel pontuaçao com o valor "200" atribuido a ela 
  int pontuacao2 = 200;

  JogoTiro() { // Criação de uma funçao para definir uma posição aleatória ao alvo
    alvo = Random().nextInt(largura);
    alvo2 = Random().nextInt(largura);
  }

  void exibirJogo() { // Criaçao de uma funçao para exibir o campo do jogo, o alvo e o jogador.
    if (escolha == 1) { // Se a escolha for de 1 jogador, irá criar 1 campo
      for (int i = 0; i < largura; i++) {
        if (i == jogador) {
          stdout.write('🔫');
        } else if (i == alvo) {
          stdout.write('🎯');
        } else {
          stdout.write('-');
        }
      }
    } else if (escolha == 2) { // Se a escolha for de 2 jogadores, irá criar 2 campos
      for (int i = 0; i < largura; i++) {
        if (i == jogador) {
          stdout.write('🔫');
        } else if (i == alvo) {
          stdout.write('🎯');
        } else {
          stdout.write('-');
        }
      }

      print("\n\n");

      for (int i = 0; i < largura; i++) {
        if (i == jogador2) {
          stdout.write('🔫');
        } else if (i == alvo2) {
          stdout.write('🎯');
        } else {
          stdout.write('-');
        }
      }
    } else { // Se tiver escolhido outro valor de 1 e 2, irá mostrar um valor inválido
      print("\nComando inválido! Escolha um número de '1' ou '2'.\n");
    }
    print('');
  }

  void moverJogador(String direcao) { // Função criada para mover o jogador no campo
    if (direcao == 'a' && jogador > 0) {
      jogador--;
      contador++;
    } else if (direcao == 'd' && jogador < largura - 1) {
      jogador++;
      contador++;
    }
  }

  void moverJogador2(String direcao) { // Função criada para mover o jogador 2 no campo
    if (direcao == 'a' && jogador2 > 0) {
      jogador2--;
      contador2++;
    } else if (direcao == 'd' && jogador2 < largura - 1) {
      jogador2++;
      contador2++;
    }
  }

  void pontuacaoJogador() { // Função criada para pontuar o jogador
    pontuacao = pontuacao - (contador * 20);
    print("Pontuação (Jogador 1): $pontuacao");
  }

  void pontuacaoJogador2() { // Função criada para pontuar o jogador 2
    pontuacao2 = pontuacao2 - (contador2 * 20);
    print("Pontuação (Jogador 2): $pontuacao2");
  }

  bool atirar() { 
    return jogador == alvo;
  }

  bool atirar2() {
    return jogador2 == alvo2;
  }
}

void main() {
  JogoTiro jogo = JogoTiro();
  String? comando;
  String? comando2;

  print("\n=== JOGO DE TIRO ===");
  print("Selecione quantos jogadores.");
  print("1 -> 1 Jogador\n2 -> 2 Jogadores");
  print("Opção: ");
  jogo.escolha = int.parse(stdin.readLineSync()!);
  print("Use 'a' para esquerda, 'd' para direita e 'f' para atirar!\n");

  while (comando != 'f' || comando2 != 'f') { // basicamente, quando um jogador atira 'f', o segundo jogador continua jogando até acertar o alvo
    jogo.exibirJogo();
    if (jogo.escolha == 1) {
      stdout.write("Comando: ");
      comando = stdin.readLineSync();

      if (comando == 'a' || comando == 'd') {
        jogo.moverJogador(comando!);
      } else if (comando == 'f') {
        if (jogo.atirar()) {
          print("\n🎯 Você acertou o alvo! Parabéns! 🎯\n");
          break;
        } else {
          print("\n💥 Errou! Tente novamente.\n");
        }
      } else {
        print("\nComando inválido! Use 'a', 'd' ou 'f'.\n");
      }
    } else {
      if (comando != 'f') {
        stdout.write("Comando do primeiro jogador: ");
        comando = stdin.readLineSync();

        if (comando == 'a' || comando == 'd') {
          jogo.moverJogador(comando!);
        } else if (comando == 'f') {
          if (jogo.atirar()) {
            print("\n🎯 Você acertou o alvo! Parabéns! 🎯\n");
          } else {
            print("\n💥 Errou! Tente novamente.\n");
          }
        } else {
          print("\nComando inválido! Use 'a', 'd' ou 'f'.\n");
        }
      } else {}

      if (comando2 != 'f') { // quando o primeiro jogador atira 'f', o segundo jogador continua jogando
        stdout.write("Comando do segundo jogador: ");
        comando2 = stdin.readLineSync();

        if (comando2 == 'a' || comando2 == 'd') {
          jogo.moverJogador2(comando2!);
        } else if (comando2 == 'f') {
          if (jogo.atirar2()) {
            print("\n🎯 Você acertou o alvo! Parabéns! 🎯\n");
          } else {
            print("\n💥 Errou! Tente novamente.\n");
          }
        } else {
          print("\nComando inválido! Use 'a', 'd' ou 'f'.\n");
        }
      } else {}
    }
  }

  if (jogo.escolha == 1) {
    jogo.pontuacaoJogador(); // exibe a pontuação do jogador
  } else {
    jogo.pontuacaoJogador();
    jogo.pontuacaoJogador2();
  }
}
