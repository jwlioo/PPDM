import 'dart:io';
void Ex2() {
  print("Digite a base:");
  int base = int.parse(stdin.readLineSync()!);; // Defina a base do ret�ngulo

  print("Digite a altura:");
  int altura = int.parse(stdin.readLineSync()!); // Defina a altura do ret�ngulo

  int area = base * altura;
  print("A área do retângulo é: $area");
}
