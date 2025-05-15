import 'package:flutter/material.dart';

void main() {
  runApp(AnimalQuizApp());
}

class AnimalQuizApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Que animal você seria?',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.green,
        scaffoldBackgroundColor: Color(0xFFF9F5F0),
        appBarTheme: AppBarTheme(
          backgroundColor: Colors.deepPurple,
          foregroundColor: Colors.lightBlueAccent,
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            backgroundColor: Colors.green,
            foregroundColor: Colors.white,
            padding: EdgeInsets.symmetric(vertical: 16.0),
          ),
        ),
        textTheme: TextTheme(
          headlineSmall: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: Colors.deepPurple.shade900,
          ),
          bodyLarge: TextStyle(fontSize: 18),
        ),
      ),
      home: StartScreen(),
    );
  }
}

class StartScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Descubra seu animal interior'),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(32.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                '🐾 Você já se perguntou que animal reflete sua personalidade?',
                textAlign: TextAlign.center,
                style: Theme.of(context).textTheme.headlineSmall,
              ),
              SizedBox(height: 40),
              ElevatedButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => QuizScreen()),
                  );
                },
                child: Text('Começar o Quiz'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class QuizScreen extends StatefulWidget {
  @override
  _QuizScreenState createState() => _QuizScreenState();
}

class _QuizScreenState extends State<QuizScreen> {
  int _questionIndex = 0;
  Map<String, int> _scores = {
    'Leão': 0,
    'Coruja': 0,
    'Golfinho': 0,
    'Urso': 0,
    'Raposa': 0,
    'Cavalo': 0,
  };

  final _questions = [
    {
      'question': 'O que você prefere fazer no tempo livre?',
      'answers': {
        'Explorar e liderar': 'Leão',
        'Ler ou estudar': 'Coruja',
        'Conversar e brincar': 'Golfinho',
        'Descansar e relaxar': 'Urso',
        'Resolver enigmas ou jogos': 'Raposa',
        'Correr ao ar livre': 'Cavalo',
      }
    },
    {
      'question': 'Como você se descreveria?',
      'answers': {
        'Corajoso(a) e determinado(a)': 'Leão',
        'Inteligente e observador(a)': 'Coruja',
        'Alegre e sociável': 'Golfinho',
        'Calmo(a) e confiável': 'Urso',
        'Astuto(a) e estratégico(a)': 'Raposa',
        'Livre e aventureiro(a)': 'Cavalo',
      }
    },
    {
      'question': 'Qual ambiente você prefere?',
      'answers': {
        'Selva ou floresta': 'Leão',
        'Lugar tranquilo para pensar': 'Coruja',
        'Praia ou mar': 'Golfinho',
        'Cabana nas montanhas': 'Urso',
        'Cidade movimentada': 'Raposa',
        'Campos abertos ou trilhas': 'Cavalo',
      }
    },
    {
      'question': 'Como você resolve problemas?',
      'answers': {
        'Com coragem e ação direta': 'Leão',
        'Analisando cuidadosamente': 'Coruja',
        'Conversando com os outros': 'Golfinho',
        'Com paciência e calma': 'Urso',
        'Com criatividade e truques': 'Raposa',
        'Com persistência e movimento': 'Cavalo',
      }
    },
    {
      'question': 'O que mais valoriza?',
      'answers': {
        'Liderança': 'Leão',
        'Conhecimento': 'Coruja',
        'Amizade': 'Golfinho',
        'Paz': 'Urso',
        'Independência': 'Raposa',
        'Liberdade': 'Cavalo',
      }
    },
    {
      'question': 'Como você age em grupo?',
      'answers': {
        'Assumo o controle': 'Leão',
        'Observo e dou conselhos': 'Coruja',
        'Socializo e uno as pessoas': 'Golfinho',
        'Fico de boa e sigo o fluxo': 'Urso',
        'Acompanho, mas com cautela': 'Raposa',
        'Colaboro e incentivo todos': 'Cavalo',
      }
    },
    {
      'question': 'Seu maior ponto forte é...',
      'answers': {
        'Coragem': 'Leão',
        'Sabedoria': 'Coruja',
        'Carisma': 'Golfinho',
        'Estabilidade': 'Urso',
        'Esperteza': 'Raposa',
        'Energia': 'Cavalo',
      }
    },
    {
      'question': 'Qual dessas profissões mais combina com você?',
      'answers': {
        'Líder ou empreendedor(a)': 'Leão',
        'Professor(a) ou cientista': 'Coruja',
        'Comunicador(a) ou artista': 'Golfinho',
        'Terapeuta ou cuidador(a)': 'Urso',
        'Detetive ou programador(a)': 'Raposa',
        'Atleta ou viajante': 'Cavalo',
      }
    },
    {
      'question': 'Qual dessas frases te representa melhor?',
      'answers': {
        '“Comando e sigo em frente.”': 'Leão',
        '“Conhecimento é poder.”': 'Coruja',
        '“Sorrir é minha arma.”': 'Golfinho',
        '“Tranquilidade é minha força.”': 'Urso',
        '“Eu penso fora da caixa.”': 'Raposa',
        '“O mundo é meu para explorar.”': 'Cavalo',
      }
    },
    {
      'question': 'Qual dessas qualidades você mais admira?',
      'answers': {
        'Determinação': 'Leão',
        'Inteligência': 'Coruja',
        'Alegria': 'Golfinho',
        'Serenidade': 'Urso',
        'Criatividade': 'Raposa',
        'Espírito livre': 'Cavalo',
      }
    },
  ];

  void _answerQuestion(String animal) {
    setState(() {
      _scores[animal] = _scores[animal]! + 1;
      _questionIndex++;
    });

    if (_questionIndex >= _questions.length) {
      String resultAnimal = _getResultAnimal();
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (_) => ResultScreen(animal: resultAnimal),
        ),
      );
    }
  }

  String _getResultAnimal() {
    return _scores.entries.reduce((a, b) => a.value > b.value ? a : b).key;
  }

  @override
  Widget build(BuildContext context) {
    var current = _questions[_questionIndex];
    return Scaffold(
      appBar: AppBar(
        title: Text('Pergunta ${_questionIndex + 1} de ${_questions.length}'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              current['question'] as String,
              style: Theme.of(context).textTheme.headlineSmall,
            ),
            SizedBox(height: 20),
            ...(current['answers'] as Map<String, String>).entries.map(
              (entry) => Padding(
                padding: const EdgeInsets.symmetric(vertical: 8.0),
                child: ElevatedButton(
                  onPressed: () => _answerQuestion(entry.value),
                  child: Text(entry.key),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class ResultScreen extends StatelessWidget {
  final String animal;

  ResultScreen({required this.animal});

  final _descriptions = {
    'Leão': '🦁 Você é líder, corajoso(a) e determinado(a)!',
    'Coruja': '🦉 Você é sábio(a), observador(a) e ama aprender!',
    'Golfinho': '🐬 Você é alegre, comunicativo(a) e divertido(a)!',
    'Urso': '🐻 Você é tranquilo(a), acolhedor(a) e confiável!',
    'Raposa': '🦊 Você é esperto(a), criativo(a) e adaptável!',
    'Cavalo': '🐴 Você é livre, enérgico(a) e aventureiro(a)!',
  };

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Seu animal interior')),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(32.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                _descriptions[animal]!,
                style: TextStyle(fontSize: 28),
                textAlign: TextAlign.center,
              ),
              SizedBox(height: 40),
              ElevatedButton(
                onPressed: () {
                  Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(builder: (_) => StartScreen()),
                  );
                },
                child: Text('Refazer o Quiz'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
