"use strict";
// utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    // The line below will result in an error.
    // You're trying to include an object 'propsToUpdate' within another object 'assign'.
    // return { ...assign, propsToUpdate }
    // The line below correctly spreads the properties from both 'assign' and 'propsToUpdate'.
    // This works because 'propsToUpdate' is of type 'Partial<Assignment>',
    // which means al l its properties are optional and compatible with 'Assignment'.
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
let assign1 = {
    studentId: 3,
    title: 'final project',
    grade: 90
};
console.log(assign1);
assign1 = updateAssignment(assign1, { grade: 95 });
console.log(assign1);
/////////// required and readonly
const requiredAssignement = (assign) => {
    return assign;
};
console.log(requiredAssignement(Object.assign(Object.assign({}, assign1), { verified: true })));
// console.log(requiredAssignement(assign1)) // gives error
let assign2 = assign1;
// assign2.grade = 50 // gives error as its readonly
//////////// record type {most used utility type}
const student = {
    id: 1,
    grade: 'B'
};
const studentGrades = {
    Mon: 'B',
    Rach: 'C',
    // Feob: 'A' // this gives error as its not present inside Student types
};
const assignResult = {
    studentId: 4,
    grade: 80
};
const assignPrev = {
    studentId: 5,
    title: 'sem 3 project'
};
////////// return type
const createNewAssign = (title, grade) => {
    return { title, grade };
};
const tsAssign = createNewAssign('title', 90);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('dummyUrl');
    // .then(res => {
    //   return res.json()
    // })
    // .catch(err => {
    //   if(err instanceof Error){
    //     console.log(err)
    //   }
    // })
    return yield data.json();
});
fetchUsers().then(users => console.log(users));
// export {}
