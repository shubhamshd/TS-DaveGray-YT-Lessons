"use strict";
class Coder {
    // if using visibility modifier inside constructor argument, it is not required to declare as a member, also even if do not intialize, ts wont complain in this case
    // name: string
    // music: string
    // age: number
    // lang: string
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
const me = new Coder('shubham', 'old songs', 25);
console.log(me.getAge());
// console.log(me.age) 
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const raj = new WebDev('mac', 'raj', 'rock', 33);
console.log(raj.getLang());
console.log(raj.getAge());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const jubin = new Guitarist('jubin', 'guitar');
console.log(jubin.play('strums'));
class Peeps {
    constructor(name) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const rohit = new Peeps('rohit');
const mohit = new Peeps('mohit');
const sohit = new Peeps('sohit');
console.log(Peeps.count);
console.log(mohit.id);
class Sportsman {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        this.dataState = value;
    }
}
const myFavSportsmen = new Sportsman();
console.log(myFavSportsmen.data);
myFavSportsmen.data = ['Dhoni', 'Shubhman', 'Jadeja'];
console.log(myFavSportsmen.data);
// myFavSportsmen.data = ['Dhoni', 'Shubhman', 1234] gives compile time error
