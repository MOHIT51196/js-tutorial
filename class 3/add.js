var num1 = 10;   // type inference : intelligence to deduce data type
var num2 = 20;

console.log(num1 + num2)

// this is how a comment looks like. Comments are not read by interpreter or compiler

// ------------- calculator code ---------------
var inp1 = 20;
var inp2 = 10;

// () -> paranthesis
function calculator() {
    // addition
    var add = inp1 + inp2;
    // subtract
    var sub = inp1 - inp2;
    // multiply
    var mul = inp1 * inp2;
    // division
    var div = inp1 / inp2;

    console.log(add);
    console.log(sub);
    console.log(mul);
    console.log(div);
}

// functions - set of code lines which can be invoked on demand
function addv1() {
    var add = inp1 + inp2;
    console.log(add);
}

// inputs in functions are called arguments
// output of function is called return value 
function addv2(value1, value2) {
    var add = value1 + value2;
    console.log(add);
} 