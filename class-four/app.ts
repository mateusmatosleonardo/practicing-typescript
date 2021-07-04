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

var personOne = new Person("Mateus");


console.log(personOne.printName());

/*
var personOne = new Person("Mateus");

var personTwo = new Person("Leonardo");

console.log(personOne.nome);
console.log(personTwo.nome);
*/