var age = 22; // If I am not writing var inside any braces then it is available globally 

if (true) {
    console.log(age);
}

function scope() {
    var age = 22
    console.log(age);
}

console.log(age) // This piece of code will give an error of age not defined because var has function scope not block scoped
scope();

let year = 2026
console.log(year) // No problem it will give us the output 2026 because for obvious reasons it is globally accessible

{
let year = 2026
}
console.log(year) // This will give us an error because let has block scope 

const a = 10
console.log(a); // This would work 

a = 20
console.log(a) // This reassignment will throw an error because reaasigning the value is not allowed inside const