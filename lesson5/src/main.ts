type one = string
type two = string | number
type three = 'hello'

let a: one = 'hello2'
console.log(a)
let b = a as two //less specific
console.log(b)
let c = a as three//more specific
console.log(c)
console.log(typeof c)

// example of using type assertion when using ext libs with incomplete type definitions
// mistakes can be made when using type assertions, so be careful!!!

// import axios from 'axios';

// // Making an HTTP GET request using axios
// axios.get('https://api.example.com/data')
// .then(response => {
//     // The type of 'response' might not be well understood by TypeScript
//     // Use type assertion to give TypeScript a hint about the type
//     const data = response.data as { id: number; name: string; };
    
//     // Now, TypeScript knows that 'data' has 'id' and 'name' properties
//     console.log(data.id, data.name);
// })
// .catch(error => {
//     console.error(error);
// });
