/**
 * type keyword is used to define complex data types which could
 * be used to define types using union/intersection of existing types
 * wheres as interface keyword is used mainly to create types for
 * object or class
 */

// type aliases
type stringOrNumber = string | number 

type stringOrNumberArray = stringOrNumber[]

type typeGuitarist = {
  name: string,
  active?: boolean,
  albums: stringOrNumber
}

// interface 
interface Guitarist {
  name: string,
  active?: boolean,
  albums: stringOrNumber
}

// literal types
type nameLiteral = 'Raj' | 'Suraj'
let username: nameLiteral = 'Suraj'
username = 'Raj'

// enum
enum Status {
  'Active' = 1,
  'Inactive',
  'Cancelled'
}

let myStatus = Status['Active']

// function types/interface
type mathFunction = (a: number, b: number) => number

// // interface for function
// interface mathFunction {
//   (a: number, b: number): number
// }

let addFunction: mathFunction = (a,b) => a+b

// optional params
const addAll = (a: number, b: number, c?:number) => a + b + (c ?? 0)
addAll(1,2,3)
addAll(1,2)

// rest params -> ...varName is used to address rest of params in argument list
const total = (a: number, ...restOfNums: number[]): number => a + restOfNums.reduce((prev, curr) => prev + curr)
total(1,2,3,4)
total(1)

// never return type => if function throws an error or if it never returns any value as it runs forever
const neverReturn = () => {
  throw new Error('not an error')
}

// use of return type
const numOrString = (a: stringOrNumber): string => {
  if (typeof a === 'string') return 'string'
  else if (typeof a === 'number') return 'number'
  return neverReturn()
}