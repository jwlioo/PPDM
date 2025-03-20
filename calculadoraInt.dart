import 'dart:io';

void main() {
  while (true) {
    print('\nMenu Interativo:');
    print('1️ Exibir "Olá, Dart!"');
    print('2️ Calcular a área de um retângulo');
    print('3️ Verificar se um número é par ou ímpar');
    print('4️ Comparar dois números');
    print('5️ Converter nota para conceito');
    print('6️ Exibir contagem progressiva');
    print('7️ Somar todos os números até um valor especificado');
    print('8️ Exibir a tabuada de um número');
    print('9️ Sair do programa');
    stdout.write('Escolha uma opção: ');

    var choice = stdin.readLineSync();
    if (choice == '9') {
      print('Saindo do programa...');
      break;
    }

    switch (choice) {
      case '1':
        print('Olá, Dart!');
        break;
      case '2':
        calculadoraRetangulo();
        break;
      case '3':
        parImpar();
        break;
      case '4':
        compararNumeros();
        break;
      case '5':
        verNota();
        break;
      case '6':
        contagemRegressiva();
        break;
      case '7':
        soma();
        break;
      case '8':
        multiplicacao();
        break;
      default:
        print('Opção inválida. Tente novamente.');
    }
  }
}

void calculadoraRetangulo() {
  stdout.write('Digite a largura do retângulo: ');
  var width = double.parse(stdin.readLineSync()!);
  stdout.write('Digite a altura do retângulo: ');
  var height = double.parse(stdin.readLineSync()!);
  var area = width * height;
  print('A área do retângulo é: $area');
}

void parImpar() {
  stdout.write('Digite um número: ');
  var number = int.parse(stdin.readLineSync()!);
  if (number % 2 == 0) {
    print('$number é par.');
  } else {
    print('$number é ímpar.');
  }
}

void compararNumeros() {
  stdout.write('Digite o primeiro número: ');
  var num1 = double.parse(stdin.readLineSync()!);
  stdout.write('Digite o segundo número: ');
  var num2 = double.parse(stdin.readLineSync()!);
  if (num1 > num2) {
    print('$num1 é maior que $num2');
  } else if (num1 < num2) {
    print('$num1 é menor que $num2');
  } else {
    print('$num1 é igual a $num2');
  }
}

void verNota() {
  stdout.write('Digite a nota (0 a 10): ');
  var grade = double.parse(stdin.readLineSync()!);
  if (grade >= 9) {
    print('Conceito: A');
  } else if (grade >= 7) {
    print('Conceito: B');
  } else if (grade >= 5) {
    print('Conceito: C');
  } else if (grade >= 3) {
    print('Conceito: D');
  } else {
    print('Conceito: F');
  }
}

void contagemRegressiva() {
  stdout.write('Digite um número: ');
  var max = int.parse(stdin.readLineSync()!);
  for (int i = 1; i <= max; i++) {
    print(i);
  }
}

void soma() {
  stdout.write('Digite um valor: ');
  var max = int.parse(stdin.readLineSync()!);
  var sum = 0;
  for (int i = 1; i <= max; i++) {
    sum += i;
  }
  print('A soma de todos os números até $max é: $sum');
}

void multiplicacao() {
  stdout.write('Digite um número: ');
  var number = int.parse(stdin.readLineSync()!);
  for (int i = 1; i <= 10; i++) {
    print('$number x $i = ${number * i}');
  }
}