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
/* extends herda todos os métodos e parâmetros (atributos) */
/*
class user extends Person{
    constructor(nome:string){
        super(nome);
    }

    sum(n1:number, n2:number){
        return n1+n2;
    }
}

var userOne = new user("Mateus");
console.log(userOne.sum(25, 30));
*/
/*
var personOne = new Person("Mateus");

var personTwo = new Person("Leonardo");

console.log(personOne.nome);
console.log(personTwo.nome);
*/ 
