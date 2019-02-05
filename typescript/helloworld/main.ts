export{ }

let message = 'watch';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = "kiran";

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'kiran';

let sentence: string = `My name is ${name}
i am beginner in ts`
console.log(sentence);

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person: [string, number] = ['kiran', 22];

enum Color {red, green, blue};
let c: Color = Color.green;
console.log(c);

enum Diff {kiran = 5, teja, goud};
let d:Diff = Diff.teja;
console.log(d);

let randomNumber: any = 10;
randomNumber = true;
randomNumber = 'kiran';
console.log(randomNumber);

let a;
a = 20;
a = 'teja';

let b = 30;

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 10;
anyType = true;

function add(num1: number, num2: number): number{
    return num1 + num2;
}
add(5, 5);

function add1(num3: number, num4?: number): number{
    return num3 + num4;
}
add1(5);

function add2(num5: number, num6: number = 10): number{
    return num5 + num6;
}
add2(5);   // output 5+10 = 15
add2(5, 20);  // output 5+20 = 25



function fullname(person: {firstname: string, lastname: string}){
   console.log(`${person.firstname} ${person.lastname}`);
}

let p = {
    firstname: 'vijay',
    lastname: 'kanth'
}

fullname(p);

// using interface code is very cean
interface Person {
    firstname: string;
    lastname: string;
}
function fullname1(person1: Person){
   console.log(`${person1.firstname} ${person1.lastname}`);
}

let p1 = {
    firstname: 'vijay',
    lastname: 'kanth'
}

fullname1(p1);
