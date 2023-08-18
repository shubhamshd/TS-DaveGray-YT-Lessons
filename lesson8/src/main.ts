// generics
const echo = <T>(arg: T): T => arg

console.log(echo('Raj'))
console.log(echo(1234))
console.log(echo(true))

const isObj = <T>(arg: T): boolean => {
  if(typeof arg === 'object' && !Array.isArray(arg) && arg !== null ){
    return true
  }
  return false
}

console.log(isObj(true))
console.log(isObj('raj'))
console.log(isObj(null))
console.log(isObj([1, 'fds', false]))
console.log(isObj({name: 'raj', class: 'cs'}))


const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
  if(isObj(arg) && !Object.keys(arg as keyof T).length){
    return {arg, is: false}
  }
  else if (Array.isArray(arg) && !arg.length){
    return {arg, is: false}
  }
  return {arg, is: !!arg}
}

console.log(isTrue(true))
console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(1))
console.log(isTrue(''))
console.log(isTrue('hello'))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({}))
console.log(isTrue([]))
console.log(isTrue(['true', 123]))
console.log(isTrue({name: 'fsd', place: 'fsd'}))
