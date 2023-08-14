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
