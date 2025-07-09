// variable Scope = where a variable is recognized and accessible (local vs global)

// let x = 1;
// let x = 2;   //u cant assign them in the same area 

//but another way to do that

var1();
var2();

function var1()
{
    let z = 25;       //local scope
    console.log(z);
}
function var2()
{
    let z = 69;        //local scope
    console.log(z);
}



// lets use (Global) Scope
//Global scope can be use everywhere 
//local scope can not be use everywhere

let y = 25;  //outside the function so its global scope

//call the function

function1();
function2();

function function1()
{
    console.log(y);
}
function function2()
{
    console.log(y);
}