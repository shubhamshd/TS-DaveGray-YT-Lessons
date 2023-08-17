interface TransactionObj {
  Pizza: number,
  Job: number
}

const transactionObj: TransactionObj = {
  Pizza: -5,
  Job: 40
}

console.log(transactionObj.Pizza)
console.log(transactionObj['Pizza'])

// the above code works, but if we try to access obj prop dynamically, it fails as follows

let prop: string = 'Pizza'
// console.log(transactionObj[prop]) //this gives compile error

// to resolve above issue, lets see index signature

interface TransactionObjIndexSignature {
  [index: string]: number
}

const transactionObj1: TransactionObjIndexSignature = {
  Pizza: -10,
  Job: 30
}

console.log(transactionObj1[prop])  // no issue here as we have index signature defined in interface