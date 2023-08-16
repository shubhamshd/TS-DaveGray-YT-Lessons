class Coder {
  // if using visibility modifier inside constructor argument, it is not required to declare as a member, also even if do not intialize, ts wont complain in this case
  // name: string
  // music: string
  // age: number
  // lang: string
  
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'Typescript'
  ){
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }

  public getAge(): number {
    return this.age
  }
}

const me = new Coder('shubham', 'old songs', 25)
console.log(me.getAge())
// console.log(me.age) 

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ){
    super(name, music, age)
  }

  public getLang(){
    return `I write ${this.lang}`
  }
}

const raj = new WebDev('mac', 'raj', 'rock', 33)
console.log(raj.getLang())
console.log(raj.getAge())

interface Musician {
  name: string,
  instrument: string
  play(action: string): string
}

class Guitarist implements Musician {
  name: string
  instrument: string

  constructor(name: string, instrument: string){
    this.name = name
    this.instrument = instrument
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`
  }
}

const jubin = new Guitarist('jubin', 'guitar')
console.log(jubin.play('strums'))

class Peeps {
  static count: number = 0
  public id: number

  constructor(public name: string){
    this.id = ++Peeps.count
  }
}

const rohit = new Peeps('rohit')
const mohit = new Peeps('mohit')
const sohit = new Peeps('sohit')
console.log(Peeps.count)

console.log(mohit.id)


class Sportsman {
  private dataState: string[]

  constructor(){
    this.dataState = []
  }

  public get data(): string[] {
    return this.dataState
  }

  public set data(value: string[]){
    this.dataState = value
  }
}

const myFavSportsmen = new Sportsman()
console.log(myFavSportsmen.data)
myFavSportsmen.data = ['Dhoni', 'Shubhman', 'Jadeja']
console.log(myFavSportsmen.data)
// myFavSportsmen.data = ['Dhoni', 'Shubhman', 1234] gives compile time error