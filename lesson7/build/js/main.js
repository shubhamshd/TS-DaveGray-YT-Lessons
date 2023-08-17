"use strict";
const transactionObj = {
    Pizza: -5,
    Job: 40
};
console.log(transactionObj.Pizza);
console.log(transactionObj['Pizza']);
// the above code works, but if we try to access obj prop dynamically, it fails as follows
let prop = 'Pizza';
const transactionObj1 = {
    Pizza: -10,
    Job: 30
};
console.log(transactionObj1[prop]); // no issue here as we have index signature defined in interface
