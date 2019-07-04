// //FUNCTIONAL PROGRAMMING

// //function declaration and function expression
// //FUNCTION DECLARATION

// function add(n1, n2) 
// {
//     return n1+n2;
// }
// console.log(add(12,13))

// let addition = function(n1, n2) {
//     return n1 + n2
// }
// //can not invoke it before declaration
// // on demand, if you want fucntion, use function expression not funtion declartion

// //default parameters in javascript is undefined

// function func(a,b)
// {
//     console.dir(arguments)
// }
// func(1,2,3,4,5,6) //no error though if less, will be undefined

// //we can't overload the functions by parameters because there's not strictness in arguments

// //function with default parameters
// function defaultParamsEx(a =1 , b =2)
// {
//     console.log(a)
//     console.log(b)
// }
// defaultParamsEx()

// //function with rest parameter

// function restEx(a, b, ...rest) {
//     console.log(a)
//     console.log(b)
//     console.log(rest)
// }
// restEx(10, 20, 30, 30, 40)

// // function greet(f)
// // {
// //     console.log("hello...")
// //     f()
// // }
// // let greetF = greet()
// // console.log(greetF)

// // let tn = function() {
// //     console.log("vanakkam")
// // }
// // greet(tn)

// //return value of a fucntion can also be a function
// //function composition
// //higher order functions - take comething as input and gives other thing as output

// function f1() {
//     console.log("f1()")
// }
// function logWrapper(f)
// {
//     return function() {
//         console.log("BEFORE LOG")
//         f()
//         console.log("AFTER LOG")
//     }
// }
// let wrapper = logWrapper(f1)
// console.log(wrapper())

// ////higher order funcs

// function isMin(n)
// {
//     return n>100
// }
// function isMax(n)
// {
//     return n<1000
// }
// function compose(f1, f2)
// {
//     return function (n) {
//         return f1(n) && f2(n)
//     }
// }
// let and = compose(isMin, isMax)
// console.log(and(500))

// //closures
// function techPlease(sub)
// {
//     console.log("teaching" + sub)
//     let notes = sub + "--notes"
//     function learn()
//     {
//         console.log("learning with " + notes)
//     }
//     console.log('teach ends')
//     return learn
// }
// // techPlease('.js')

// // function learn()
// // {
// //     console.log("learning with" + )
// // }
// let leanrFunc = techPlease('.js')
// leanrFunc()
// //a closure is a function having access to paret scope even after the parent funtion is ended
// //closure captures soemthing

// //self excutable funcs //IIFE

// let arr = []

// //----------

// // for(var i =0; i< 2; i++){
// //     var index;
// //     var ind = function() {
// //        index = i;
// //        console.log(index)

// //     }
// //     arr.push(ind)

// // }
// // arr[0]()
// // arr[1]()

// //calling functions on objects
// //function binding

// //javascript has both static and dynamic function binding

// //STATIC FUNCTION BINDING

// let p1 = {
//     name: 'Nitesh',
//     sayName: sayNameForAll
// }
// let p2 = {
//     name: 'Singh',
//     sayName: sayNameForAll
// }

// function sayNameForAll(){
//     console.log('im' + this.name)
// }

// sayNameForAll() //typeerror
// p1.sayName()

// //DYNAMIC FUNCTION BINDING

// function doTraining(sub, duration, location) {
//     console.log(`${this.name} teaching ${sub} for ${duration} days in ${location}`)
// }
// //doTraining('react-native', '5', 'asv')
// //way 1
// let tnr = {name: 'Nitesh'}
// doTraining.call(tnr, 'react', '5', 'chennai')
// //way 2
// doTraining.apply(tnr, ['react', 5, 'chennai'])
// //binding is done multiple times

// //for 1 time
// //way 3
// let myTraining = doTraining.bind(tnr, 'react')
// myTraining(5, "MEPZ")

//EXAMPLE OF ALL PREVIOUS TOPICS

function sessionStart() {
    function doTeach(sub, duration) {
        console.log(`${this.name} - teaching on ${sub} - ${duration}`)
        let notes = `${sub} - notes`
        let self = this
        let doLearn = function () {
            console.log(` ${this.name} learning with ${notes} from ${self.name}`)
        }
        console.log("teaching ends")
        return doLearn
    }
    function Trainer(name) {
        this.name = name
    }
    function Employee(name) {
        this.name = name
    }
    Employee.prototype.doWork = function () {
        console.log(this.name + " working")
    }
    let trainer = new Trainer('Nag')
    let e1 = new Employee('Nitesh')
    let e2 = new Employee('Singh')
    let doLearn = doTeach.call(trainer, 'react-native', '5')
    doLearn.call(e1)
    doLearn.call(e2)
    e1.doWork()
    e2.doWork()
}
console.log(sessionStart())