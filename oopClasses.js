// Задание 1
// Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.
function Employee(company){
    this.company = company;
    this.work = () => {
        console.log(`This person works at ${company}`);
    }
}

const employee1 = new Employee("IT company");
employee1.work();

// Задание 2
// Создайте класс Calculator, который создаёт объекты с конструктором, который запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта, и двумя методами:
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств
class Calculator{
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    sum(){
        return this.num1 + this.num2;
    }
    mul(){
        return this.num1 * this.num2;
    }
}

const number1 = prompt("Please enter the first number");
const number2 = prompt("Please enter the second number");
const calc = new Calculator(Number(number1), Number(number2));
console.log(calc.sum());
console.log(calc.mul());


// Задание 3
// Реализовать следующее мини-приложение
// https://gist.github.com/zhekix

// window.location.href("/index1.html");


// Задание 4
// Добавить к приложению желтый круг (пример ЗДЕСЬ)
// Реализовать с помощью класса Circle, который принимает аргументы size (ширина и высота фигуры), color (цвет фигуры). При вызове метода render() из экземпляра класса Circle должен отрисоваться круг с заданными стилями.
// Сделать по примеру из последнего видео в уроке.

// window.location.href("/index1.html");