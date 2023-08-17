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

///////////////////////////////////////////////////////

// now lets looks at drawback

interface Student {
  readonly [index: string]: string | number | number[] | undefined
  name: string,
  gpa: number,
  classes?: number[]
}

const newStudent: Student = {
  name: 'shubham',
  gpa: 9,
  classes: [100, 200]
}

// now if we access the property that doesn't exist, ts wont complain because it thinks that prop may exist in future as a result of index sig

console.log(newStudent.name)  
console.log(newStudent.test)  // no error here, it will give undefined

//////////////////////////////////////////////////////////

// now we'll look at an example to access the prop dynamically without using index signature

interface StudentWithoutIndexSig {
  name: string,
  gpa: number
}

const student: StudentWithoutIndexSig = {
  name: 'shubham',
  gpa: 8
}

const loopThroughStudent = (student: StudentWithoutIndexSig) => {
  for (const props in student){
    // console.log(`Student ${prop} is ${student[prop]}`)  // this gives error without index sig
    console.log(`Student ${props} is ${student[props as keyof StudentWithoutIndexSig]}`)  // this works
  }
}

loopThroughStudent(student)