//declaring constant variable, set value to 293 
const kelvin = 293;
//celsius is kelvin - 273
const celsius = kelvin - 273; 
//creating variable type that allows value changes 
let fahrenheit = celsius * (9/5) + 32;
/*converting fahrenheit - round down to whole number
Math is library, floor is method*/
fahrenheit = Math.floor(fahrenheit);
//string interpolation & applying function to object for string to be expressed
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//converting celsius to newton - creating variable with changable value for newton
let newton = celsius * (33/100);
//round down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees in Newton.`);