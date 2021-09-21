const amIFat = null;
let something;

// undefined : 메모리에 할당은 되었지만 값이 정의되어 있지 않음
// null : 값이 비어있음
console.log(something, amIFat); // undefined null

// Array 공통된 맥락
const daysOfweek = ['mon','tue','wed','thu','fri','sat','sun'];
console.log(daysOfweek[5]);

// Add on more day to the array
daysOfweek.push('hello');
console.log(daysOfweek);

// Object
const player = {
    name : 'Bin',
    points: 10,
    fat: false,
    sayHello:function(otherPersonName){
        console.log("hello! "+otherPersonName);
    },
    sayHelloToMe: function(){
        console.log('say Hello To Me! '+this.name)
    },
};

// const지만 player 안 속성을 변하게 함
player.name = "nico";
player.sayHello('lynn');
player.sayHelloToMe();

// console == Object , log == property
console.log(player.name);
console.log(player["name"]);
player.points += 15;
// 속성 추가 가능
player.lastName = 'potato';
console.log(player);

//player = false // error! player 자체를 바꿈 let일 경우 가능

// Function
function hello(name, age){
    console.log('Hello my name is '+name+" and I'm " + age)
};
hello('nico',13);

let a = 13;
function plus(a){
    a += 3;
    return a;
}
console.log(plus(a)); // 16
console.log(a); // 13

const age = parseInt(prompt("How old are you?"))
console.log(isNaN(age))

if (isNaN(age)){
    console.log('plz write a number')
}