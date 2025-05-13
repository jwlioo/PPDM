function validateNumber(n) {
    if (typeof n === 'number') return true;
    throw new Error('Valor não é um número');
}

// 2. validateUser(name, age)
function validateUser(name, age) {
    if (typeof name === 'string' && name.trim() !== '' && typeof age === 'number' && age >= 0) {
        return true;
    }
    return false;
}

// 3. factorial(n) com recursão
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// 4. countDown(n)
function countDown(n) {
    if (n <= 0) return;
    console.log(n);
    countDown(n - 1);
}

// 5. applyFunction(fn, value)
function applyFunction(fn, value) {
    return fn(value);
}

// 6. Array de funções
const operations = [
    function soma(a, b) { return a + b; },
    function subtrai(a, b) { return a - b; },
    function multiplica(a, b) { return a * b; }
];

operations.forEach(function(operation) {
    console.log(operation(4, 2));
});

// 7. function expression
const greet = function(name) {
    return `Olá, ${name}!`;
};

// 8. Função em objeto
const user = {
    sayHi: function() {
        return "Oi!";
    }
};

// 9. calculate(a, b, callback)
function calculate(a, b, callback) {
    return callback(a, b);
}

// 10. formatMessage(msg, formatter)
function formatMessage(msg, formatter) {
    return formatter(msg);
}

// 11. fakeRequest(url, callback)
function fakeRequest(url, callback) {
    setTimeout(() => {
        callback(null, "OK");
    }, 1000);
}

// 12. Encadeamento de chamadas
fakeRequest('url1', function(err, res1) {
    console.log(res1);
    fakeRequest('url2', function(err, res2) {
        console.log(res2);
        fakeRequest('url3', function(err, res3) {
            console.log(res3);
        });
    });
});

// 13. delayedHello()
function delayedHello() {
    setTimeout(() => {
        console.log("Hello after 1 second");
    }, 1000);
}

// 14. countToFive()
function countToFive() {
    let count = 1;
    const intervalId = setInterval(() => {
        console.log(count);
        if (count === 5) clearInterval(intervalId);
        count++;
    }, 1000);
}

// 15. Arrow function de soma
const sum = (a, b) => a + b;

// 16. Arrow com this vs função tradicional
const contexto = {
    nome: 'Objeto',
    arrow: () => {
        console.log('Arrow this:', this); // não aponta para "contexto"
    },
    tradicional: function() {
        console.log('Tradicional this:', this); // aponta para "contexto"
    }
};