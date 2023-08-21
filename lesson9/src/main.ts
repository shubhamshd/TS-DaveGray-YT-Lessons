// utility types

////////// partial types

interface Assignment {
  studentId: number,
  title: string,
  grade: number,
  verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  // The line below will result in an error.
  // You're trying to include an object 'propsToUpdate' within another object 'assign'.
  // return { ...assign, propsToUpdate }

  // The line below correctly spreads the properties from both 'assign' and 'propsToUpdate'.
  // This works because 'propsToUpdate' is of type 'Partial<Assignment>',
  // which means al l its properties are optional and compatible with 'Assignment'.
  return { ...assign, ...propsToUpdate };
};

let assign1: Assignment = {
  studentId: 3,
  title: 'final project',
  grade: 90
}

console.log(assign1)
assign1 = updateAssignment(assign1, {grade: 95})
console.log(assign1)

/////////// required and readonly

const requiredAssignement = (assign: Required<Assignment>): Assignment => {
  return assign
}

console.log(requiredAssignement({...assign1, verified: true}))
// console.log(requiredAssignement(assign1)) // gives error

let assign2: Readonly<Assignment> = assign1

// assign2.grade = 50 // gives error as its readonly

//////////// record type {most used utility type}

const student: Record<string, number | string> = {
  id: 1,
  grade: 'B'
}

type Student = 'Mon' | 'Rach'
type Grades = 'A' | 'B' | 'C'

const studentGrades: Record<Student, Grades> = {
  Mon: 'B',
  Rach: 'C',
  // Feob: 'A' // this gives error as its not present inside Student types
}

////////// pick & omit

type pickAssignment = Pick<Assignment, "studentId" | "grade">

const assignResult: pickAssignment = {
  studentId: 4,
  grade: 80
}

type omitAssignment = Omit<Assignment, "verified" | "grade">

const assignPrev: omitAssignment = {
  studentId: 5,
  title: 'sem 3 project'
}

/////////// exclude and extract { works with string, literal, union types and not interfaces}

type AdjustedGrades = Exclude<Grades, 'U'>

type HighGrades = Extract<Grades,  'A' | 'B'>

/////////// non nullable

type AllGrades = 'A' | 'B' | 'C' | 'D' | null | undefined
type NotNullGrades = NonNullable<AllGrades>

////////// return type

const createNewAssign = (title: string, grade: number) => {
  return { title, grade }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign('title', 90)


//////////// awaited

interface User {
  name: string,
  email: string
}
const fetchUsers = async(): Promise<User[]> => {
  const data = await fetch('dummyUrl')
  // .then(res => {
  //   return res.json()
  // })
  // .catch(err => {
  //   if(err instanceof Error){
  //     console.log(err)
  //   }
  // })
  return await data.json()
}

type fetchUserReturnType = ReturnType<typeof fetchUsers>

type fetchUserAwaitedReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))

// export {}