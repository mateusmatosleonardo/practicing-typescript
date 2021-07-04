/* Orientado a objeto */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/* extends herda todos os métodos e parâmetros (atributos) */
var user = /** @class */ (function (_super) {
    __extends(user, _super);
    function user(nome) {
        return _super.call(this, nome) || this;
    }
    return user;
}(Person));
var userOne = new user("Mateus");
console.log(userOne.printName());
/*
var personOne = new Person("Mateus");

var personTwo = new Person("Leonardo");

console.log(personOne.nome);
console.log(personTwo.nome);
*/ 
