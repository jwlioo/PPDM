import 'dart:io';
void Ex4() {

  print("Digite o número 1:");
  int num1 = int.parse(stdin.readLineSync()!);

  print("Digite o número 2:");
  int num2 = int.parse(stdin.readLineSync()!);
  
  if(num1 > num2){
    print("O primeiro n�mero �: $num1");
  } else if (num1 < num2) {
    print("O segundo n�mero �: $num2");
  } else {
    print("Os n�meros s�o iguais");
  }
}
