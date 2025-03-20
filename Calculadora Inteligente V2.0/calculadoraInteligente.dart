import 'dart:io';
import 'exercicios/barrel.dart';

void exibirMenu(){

  print('''

📌 MENU INTERATIVO:

    1 - Exibir "Olá, Dart!"
    2 - Calcular a área de um retângulo
    3 - Verificar se um número é par ou ímpar
    4 - Comparar dois números
    5 - Converter nota para conceito
    6 - Exibir contagem progressiva
    7 - Somar todos os números até um valor especificado
    8 - Exibir a tabuada de um número
    9 - Sair do programa
        
  ''');
}

void main(){
  int escolha;

  do {
    exibirMenu();
    stdout.write("Escolha uma opção: ");
    escolha = int.parse(stdin.readLineSync()!);

    print("");

    switch (escolha) {
      case 1: Ex1(); break;
      case 2: Ex2(); break;
      case 3: Ex3(); break;
      case 4: Ex4(); break;
      case 5: Ex5(); break;
      case 6: Ex6(); break;
      case 7: Ex7(); break;
      case 8: Ex8(); break;
      case 9: print("Saindo do programa... Até logo! ✌️"); break;
      default: print("Opção inválida! tente novamente.");
    }
  } while(escolha != 9);
}