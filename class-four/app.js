/* Orientado a objeto */
var Person = /** @class */ (function () {
    function Person(nome) {
        this.nome = nome;
    }
    /* Method */
    Person.prototype.printName = function () {
        return this.nome;
    };
    Person.prototype.printIdade = function () {
        return this.idade;
    };
    return Person;
}());
var personOne = new Person("Mateus");
var personOne = new Person('21');
console.log(personOne.printName());
console.log(personOne.printIdade());
/*
var personOne = new Person("Mateus");

var personTwo = new Person("Leonardo");

console.log(personOne.nome);
console.log(personTwo.nome);
*/ 
