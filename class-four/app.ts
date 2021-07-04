/* Orientado a objeto */

class Person{

    nome:string

    constructor(nome:string){
        this.nome = nome;
    }
}

var personOne = new Person("Mateus");

var personTwo = new Person("Leonardo");

console.log(personOne.nome);
console.log(personTwo.nome);