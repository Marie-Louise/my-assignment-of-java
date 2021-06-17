// variable 
var a=3;
var b=4;
var c=a+b;
console.log(c);

var m=6;
var p=67;
console.log(m+p);

var person="Marie";
var carName="prado";
var price=5666
var c=(person+ ""+carName+""+price);
console.log(c);

var n=1+1+"2";
console.log(n);



// function

function name(){
    var firstName="Marie"
    var secondName="Valary"
    console.log(firstName+ "" +secondName)
}
name(name)

function numbers(){
    var firstNumber=4
    var anatherNumber=5
    console.log(firstNumber-anatherNumber)
}
numbers(numbers)


function name(){
    var firstNumber="hello my mum I miss you and I love you"
    var secondNumber=34 
    console.log(firstNumber+secondNumber)
}
name(name)

person={
firstName:"Marie Louise",
nationality:"Rwandan",
age:20,


}
console.log(person.firstName)
console.log(person.nationality)
console.log(person.age)


person={thirdName:"Olive",fourthName:"Divine",age:50,nationality:"Rwandan"}
console.log(person)

 person = {
    firstName: "Marie",
    lastName: "Louise",
    age: 20,
    Color: "red"
  };
  console.log(person.firstName)
  console.log(person.lastName)
  console.log(person.age)
  console.log(person.Color)

//   classes
class rectangulary{
    constructor(height,width){
    this.height=height;
    this.width=width;
      
}
}  
const y=new rectangulary(20,50)
console.log(y)

class animal{
  constructor(name,color) {
      this.name=name;
      
  } 
}
const z=new animal("dog")
console.log(z)

class point{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;   
    }
    
}
const q=new point(2,4,6)
console.log(q)

class content{
    constructor(p,z){
        this.p=p;
        this.z=z;
    }
    
}
const l=new content(3,5)
console.log(l)

// name function
function girl(name,age,school){
    var intro=`${name} ${age} ${school}`
    console.log(intro)
}
girl("Marie",19,"AkiraChix")

let digital= (name,age) => `${name} ${age}`
console.log(digital("Ange",22))
//arrays
var anitaB=["Babra","Marie","Zilla","Esther","Tabitha"]

console.log(anitaB[3])
var a=["Joy","baby","Catty"]
console.log(a[0])
a[1] = "Michell";
console.log(a);

//object

let user = {
weight: 56,
height:12,
color:"black"

}
console.log(user.height);
console.log(user.color);
// array destructuring
var anitaB=["Babra","Marie","Zilla","Esther","Tabitha"]
var [firstName,secondName,thirdName,fourthName,fifthName]= anitaB
console.log(fourthName)

// array object*/

let personal={
    sister:"Marie",
    age:34,
    size:23
}
let {sister,age,size}=personal;
console.log(size)

let econom={
mum:"Alice",
arm:20,
   
}
let{mum,arm}=econom;
console.log(econom)

// loops
let i=15;

for (let i = 0; i < 10; i++) {
}
console.log(i)

let e=2;
for(let e=0;e=10;e++){

}
console.log(e)

for(var a=0;a<55;a++){
    if(a%3==0){
    console("Fizz");
        
    }
    else{
        console.log(a);
    }

    

}

