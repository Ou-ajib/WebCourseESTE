class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    module() {
        return  Math.sqrt(this.x*this.x + this.y * this.y);
    }

    egale(v) {
        if(v.x == this.x && v.y == this.y) return true ;
        return false ;
    }
}

let v1=new Vector(10, 4);
let v2=new Vector(3, 4);
console.log(v1.module());
console.log(v2.module());
console.log(v1.egale(v2));

// function vect(x, y){
//     this.x = x;
//     this.y = y;
// };
// vect.prototype.module = function(){
//     return Math.sqrt(this.x*this.x + this.y * this.y);
// }
// vect.prototype.egale = function(v){
//     if(v.x == this.x && v.y == this.y) return true ;
//     return false ;
// }


// console.log("Hello World!");
// let x = 3 + "4";
// console.log(x);
// console.log(`type of x is ${typeof x}`);
// x = 5;
// console.log(`type of x is ${typeof x}`)
// console.log(x==5)
// let y = x;
// console.log(y);
// z = 12;
// console.log(z);
// if(0) console.long('0 est evalue a true')
// else console.log('0 est evalue a false')

// // var name = window.prompt("Enter your name: ");
// // console.log(name)

// function caricatrice(firstNumber, secondNumber, operator)
// {
//     if(operator == "+") return parseInt(firstNumber) + parseInt(secondNumber) ;
//     else if(operator == "*") return parseInt(firstNumber) * parseInt(secondNumber) ;
//     else if(operator == "-") return parseInt(firstNumber) -  parseInt(secondNumber);
//     else if(operator == "/") return parseInt(firstNumber) / parseInt(secondNumber) ;
//     return "nta gha katkhrb9e 3lina hna"; mlkjmlkjmljkmljmljkmlkjmlkjmljk
// }
// var numberwa7d = window.prompt("Enter number one: ");
// console.log(numberwa7d)
// var operator = window.prompt("Enter operator: ");
// console.log(operator)
// var numberjouj = window.prompt("Enter red one: ");
// console.log(numberjouj)
// alert(caricatrice(numberwa7d, numberjouj, operator))

