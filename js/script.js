
// «Самое большое число»
// Функция получает массив.
// Находит максимальное.
const findMax = a => {
    let max = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;
};
console.log(findMax([12, 127, 9, 1, 144]));  

// «Контроль доступа»
// Функция получает:
// логин
// пароль
// Если совпадают с "admin" и "1234" — доступ разрешён.
const checkAccess = (login, password) => {
    if (login === "admin" && password === "1234") {
        return "Доступ разрешён";
    } else {
        return "Доступ запрещён";
    }
};
console.log(checkAccess("admin", "14234")); 

// Напиши стрелочную функцию, которая:
// • принимает число
// • возвращает его квадрат
const square = num => num * num;
console.log(square(5));  


// Функция принимает имя и возвращает:
// "Привет, Alex!"
const greet = name => `Привет, ${name}!`;
console.log(greet("Alex"));  

// Функция получает два числа и возвращает большее.
const maxOfTwo = (a, b) => a > b ? a : b;
console.log(maxOfTwo(198, 12)); 

// Функция принимает возраст.
// Если ≥18 → "Доступ есть"
// Иначе → "Нет доступа"
const checkAge = age => {
    if (age >= 18) {
        return "Доступ есть";
    } else {
        return "Нет доступа";
    }
};
console.log(checkAge(18));


// Функция получает число.
// Если оно чётное → true
// Если нет → false
const isEven = num => num % 2 === 0;
console.log(isEven(9)); 

// Функция получает массив чисел.
// Возвращает сумму всех элементов.
const sumArray = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
console.log(sumArray([11, 2, 8, 40]));

// Функция получает массив.
// Возвращает количество элементов.
const getLength = arr => arr.length;
console.log(getLength([5, 0, 3, 8, 1, 50, 7]));  
