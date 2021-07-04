/* Orientado a objeto */

class Person{

    nome:string
    idade:number

    constructor(nome:string){
        this.nome = nome;
    }

    /* Method */
    printName(){
        return this.nome;
    }

}

/* extends herda todos os métodos e parâmetros (atributos) */
class user extends Person{
    constructor(nome:string){
        super(nome);
    }
}

var userOne = new user("Mateus");

console.log(userOne.printName());

/*
var personOne = new Person("Mateus");

var personTwo = new Person("Leonardo");

console.log(personOne.nome);
console.log(personTwo.nome);
*/