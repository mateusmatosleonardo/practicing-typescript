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