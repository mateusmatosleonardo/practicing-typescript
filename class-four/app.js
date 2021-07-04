/* Orientado a objeto */
var Person = /** @class */ (function () {
    function Person(nome) {
        this.nome = nome;
    }
    /* Method */
    Person.prototype.printName = function () {
        return this.nome;
    };
    return Person;
}());
var personOne = new Person("Mateus");
console.log(personOne.printName());
/*
var personOne = new Person("Mateus");

var personTwo = new Person("Leonardo");

console.log(personOne.nome);
console.log(personTwo.nome);
*/ 
