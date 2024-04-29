//Data Type
//Undefine/ Null
//Chua dc gan gia tri mac du da dc khai bao or dc gan vao ham ko tra ve du lieu gi
// let a;
// console.log(a);
// console.log(typeof a);

//lay du lieu tu DB or API ma du lieu ko ton tai or ko co => NULL
//  let b= null;
//  console.log(typeof b);

//  // boolean-true/false
// let c= a===b;
// console.log(c);

//Falsy
// console.log(0==false);
// console.log(undefined==false);
// console.log(""==false);

// if (false) {
//     // Not reachable
//     console.log("I am Thuy");
//   }
//   if (null) {
//     // Not reachable
//     console.log("I am Thuy");
//   }
//   if (undefined) {
//     // Not reachable
//     console.log("I am Thuy");
//   }
//   if (0) {
//     // Not reachable
//     console.log("I am Thuy");
//   } 
//   if (-0) {
//     // Not reachable
//     console.log("I am Thuy");
//   }
//   if (0n) {
//     // Not reachable
//     console.log("I am Thuy");
//   }  
//   if (NaN) {
//     // Not reachable
//     console.log("I am Thuy");
//   } 
//   if ("") {
//     // Not reachable
//     console.log("I am Thuy");
//   }

//3.Number
//dau cham dong 64 bit, luon la number
// let a =1;
// let b=3.5;
// let c= 1000000000000;  
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// let d= -a/0;
// console.log(d);
// let s= a/"abc";
// console.log(s);
// Math
// let x= 0.1 + 0.2;
// console.log(Number(x).toFixed(1)==0.3);
// console.log(Number(1).toFixed(5));

//cong va cac toan tu khac voi chuoi
let a= "10";
let b= 3;
console.log(a+b);
console.log(a/b);
console.log(a*b);
console.log(a-b);
console.log(a**b);

// let a=10;
// let b= new Number(10);
// console.log(typeof a);
// console.log(typeof b);
// console.log(a==b);
// let c= new Number(10);
// console.log(b==c);

//String
// them ki tu dac biet trong chuoi them dau \ truoc ki tu dac biet do
// let name= "Thuy\"\\";
// console.log(name);

// let name='Thuy\'';
// console.log(name);

// let name='Nguyen \nThi \tThuy';
// console.log(name);

//String Template
// let age= 20;
// let name = `I am Thuy. 
// toi dang lafm tester
// cong viec tester. Toi nam nay ${age} tuoi`;
// console.log(name);

//Method
// let text= " Thuy Nguyen ";
// console.log(text.length);
// console.log(text.charAt(0));
// console.log(text.charAt(11)=="");
// console.log(text.toLocaleUpperCase());
// console.log(text.toLocaleLowerCase());
// console.log("a"+text.trim() +"a");
// console.log("a"+ text.trimEnd()+"a");
// console.log("a"+ text.trimStart()+ "a");
// console.log(text.replace("Thuy","Thi"));
// console.log(text.replaceAll("y","abc"));
// console.log(text.split(" "));

//Regular expression
