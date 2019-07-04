"use strict"
//does not contain classes, use function as classes


function Person(name , age)
{
this.name = name
this.age = age
// this.sayName = function() {
//     console.log(`I am ${this.name}`)
// }
Person.prototype.sayName = function() {
    console.log(`I am ${this.name}`)
}
//this is to create common stuff
}

var person = new Person("Nitesh", 22)

console.log(person)

//ES6 version, we can use Class now
//BETTER THIS WAY

class NewPerson {
    constructor(name, age)
    {
        this.name = name
        this.age = age
    }
    sayName() {
        console.log(`My name is ${this.name}`)
    }
}
var newPerson = new NewPerson("Nitesh Singh", 22)
console.log(newPerson)

//js is dynamic, objects are extensibe, can add more properties

newPerson.techSkills = ["js", "ios", "etc"]

newPerson.projs = function() {
    console.log(`First tech skill is ${techSkills[1]}`)
}
console.log(newPerson.projs)

Object.preventExtensions(newPerson)
//this object should not be extensible
Object.seal(newPerson)
//Prevents extension and deletion
Object.freeze(newPerson)
//Can not modify property
//delete newPerson.techSkills -- will throw error

//LITERAL STYLE OBJECTS -- can create without new keyword

var reqConfig = new Object()
reqConfig.url = "https://"
reqConfig.httpmethod = "GET"

reqConfig.onSuccess = function() {
    //
}
//newReqConfig is Literal Object
var newReqConfig = {
    url: 'http://',
    httpMethod:'GET',
    onSuccess: function (){
        //
    }
} //its an object similary as above //57

var menuArr = new Array()

var newMenuArr = []

//REGEX

var aadharRegex = new RegExp('\\d{4}-\\d{4}-\\d{4}')

aadharRegex.test("7070-7445-7365")


var addFunc = new Function("n1", "n2", "var n1 = n1+n2; return n1;")

console.log(addFunc(1,2))

function addNow(n1, n2)
{
    var n1, n2;
    var n3 = n1+n2;
    return n3;
}

let address = {
    name: "Nag",
    homeAddress: 'chennai',
    1: 'one'
}
console.log(address.name)
console.log(address['homeAddress'])
console.log(address[1])

//scope --small memory or stack frame


//var keyword will get hoisted with default value (undefined)
//js has one default scope

var v = 12

function scopeVal ()
{
 console.log(v)
 var v = 13
}
scopeVal() //unfefined

//can redeclare same variable twice
//no block scope

//now js comminity introduced new keywords

//console.log(p)
let p = 13
let p = 14
//let--> cant redeclare, can't put it after declartion
//const is equal to java final variable
//let is mutable const is immutable

//let, const, var