"use strict";
exports.__esModule = true;
var message = 'watch';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = "kiran";
var isBeginner = true;
var total = 0;
var name = 'kiran';
var sentence = "My name is " + name + "\ni am beginner in ts";
console.log(sentence);
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person = ['kiran', 22];
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
var c = Color.green;
console.log(c);
var Diff;
(function (Diff) {
    Diff[Diff["kiran"] = 5] = "kiran";
    Diff[Diff["teja"] = 6] = "teja";
    Diff[Diff["goud"] = 7] = "goud";
})(Diff || (Diff = {}));
;
var d = Diff.teja;
console.log(d);
var randomNumber = 10;
randomNumber = true;
randomNumber = 'kiran';
console.log(randomNumber);
var a;
a = 20;
a = 'teja';
var b = 30;
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 10;
anyType = true;
function add(num1, num2) {
    return num1 + num2;
}
add(5, 5);
function add1(num3, num4) {
    return num3 + num4;
}
add1(5);
function add2(num5, num6) {
    if (num6 === void 0) { num6 = 10; }
    return num5 + num6;
}
add2(5); // output 5+10 = 15
add2(5, 20); // output 5+20 = 25
function fullname(person) {
    console.log(person.firstname + " " + person.lastname);
}
var p = {
    firstname: 'vijay',
    lastname: 'kanth'
};
fullname(p);
function fullname1(person1) {
    console.log(person1.firstname + " " + person1.lastname);
}
var p1 = {
    firstname: 'vijay',
    lastname: 'kanth'
};
fullname1(p1);
