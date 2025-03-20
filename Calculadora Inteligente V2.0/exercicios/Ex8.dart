import 'dart:io';
void Ex8() {

  print("Digite um número: ");
  int numero = int.parse(stdin.readLineSync()!);

  for (int i = 1; i <= 10; i++) {
    print("$numero x $i = ${numero * i}");
  }
}

