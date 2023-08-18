"use strict";
// generics
const echo = (arg) => arg;
console.log(echo('Raj'));
console.log(echo(1234));
console.log(echo(true));
const isObj = (arg) => {
    if (typeof arg === 'object' && !Array.isArray(arg) && arg !== null) {
        return true;
    }
    return false;
};
console.log(isObj(true));
console.log(isObj('raj'));
console.log(isObj(null));
console.log(isObj([1, 'fds', false]));
console.log(isObj({ name: 'raj', class: 'cs' }));
// checks truthiness of an argument, returns false for falsy values such as false, 0, '', null, undefined, {}, []
const isTrue = (value) => {
    if (isObj(value) && !Object.keys(value).length) {
        return { value, is: false };
    }
    else if (Array.isArray(value) && !value.length) {
        return { value, is: false };
    }
    return { value, is: !!value };
};
console.log(isTrue(true));
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(1));
console.log(isTrue(''));
console.log(isTrue('hello'));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue([]));
console.log(isTrue(['true', 123]));
console.log(isTrue({ name: 'fsd', place: 'fsd' }));
// extend type
const idCheck = (arg) => arg;
console.log(idCheck({ id: 1, name: 'raj' }));
// console.log(idCheck({name: 'raj'}))  // gives error due to absent id prop
const getUserProps = (users, key) => {
    return users.map(user => user[key]);
};
const userArray = [
    {
        id: 1,
        name: 'raj',
        email: 'raj@example.com'
    },
    {
        id: 2,
        name: 'mohit',
        email: 'mohit@example.com'
    },
    {
        id: 3,
        name: 'rohit',
        email: 'rohit@example.com'
    }
];
console.log(getUserProps(userArray, 'name'));
console.log(getUserProps(userArray, 'email'));
console.log(getUserProps(userArray, 'id'));
/////////////////////////////////////////Generic in Class
class State {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(newState) {
        this.state = newState;
    }
}
const myState = new State('raj');
// const myState = new State<number>('raj') // this gives error
const newState = new State(['sdf', 12, true]);
console.log(newState.data);
newState.data = [324, false, 'raj'];
console.log(newState.data);
