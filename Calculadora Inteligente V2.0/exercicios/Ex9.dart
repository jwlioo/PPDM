import 'dart:io';

void main() {
  print("Diga o número secreto: ");
  int numeroSecreto = 40;

  print("Dê um palpite: ");
  int palpite = int.parse(stdin.readLineSync()!);
  ;

  while (palpite != numeroSecreto) {
    if (palpite > numeroSecreto) {
      print("Dê um palpite menor");
      palpite--;
    } else if (palpite < numeroSecreto) {
      print("Dê um palpite maior");
      palpite++;
    }
  }

  print("Boa! Você acertou o número $numeroSecreto!");
}
