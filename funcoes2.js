function validateNumber(n) {
    if (typeof n !== 'number'){
        throw new Error('Valor não é um número');
    }
        return true;
}
console.log(validateNumber(10));

// 2. validateUser(name, age)
function validateUser(name, age) {
    if (typeof name !== 'string' || name.trim() === ''){  
        return false;
    }
   if ( typeof age === 'number' || age <= 0 || !number.isInteger(age)) {
       return false;
}
    return true;
}
console.log(validateUser('Ana', 25));


// 3. factorial(n) com recursão
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(n));

// 4. countDown(n)
function countDown(n) {
    if (n <= 0) {
        console.log('acabou');
        return;
    }
    console.log(n);
    countDown(n - 1);
}

console.log(5);



// 5. applyFunction(fn, value)
function applyFunction(fn, value) {
    return fn(value);
}
function square(x){
    return x*x;
}
console.log(applyFunction(square, 2)); 

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
        return "Oi!,eu sou ${this.name}";
    }
};
console.log(user.sayhi());

// 9. calculate(a, b, callback)
function calculate(a, b, callback) {
    return callback(a, b);
}

console.log(calculate(5,3, ( x ,y ) => x* y));

// 10. formatMessage(msg, formatter)
function formatMessage(msg, formatter) {
    return formatter(msg);
}
function toUpper(text){
    return text.toUpperCase();
}
console.log(formatMessage('teste', toUpper));

// 11. fakeRequest(url, callback)
function fakeRequest(url, callback) {
    setTimeout(() => {
        callback(null, "OK");
    }, 1000);
}

fakeRequest('/api', (err, res) => {
    console.log(res);
});

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

console.log(sum(5,7));

// 16. Arrow com this vs função tradicional
const objeto = {
    valor: 20,
    sayThisArrow: () => {
        console.log(this.valor);
    }
},
    sayThisRegular: fuction(){
    console.log(this.valor);
}
};

objeto.sayThisArrow();
objeto.sayThisRegular():
  
