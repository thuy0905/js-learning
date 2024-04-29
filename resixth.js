// //1. Ve function
// /*Cho mot doi tuong hoc sinh1 gom cac thong tin: fristName, lastName, age, state, zipCode, street
// in ra fullName and fullAddress
// */

// let hocsinh1 =
// {
//     firstName: 'Nguyen',
//     lastName: 'Thuy',
//     age: 32,
//     state: 'Ha Noi',
//     zipCode: '100000',
//     street: 'Vo Chi Cong'
// }

// // let fullName=`${hocsinh1.firstName} ${hocsinh1.lastName}`;
// // let fullAddress=`${hocsinh1.state} ${hocsinh1.zipCode} ${hocsinh1.street}`;
// // console.log(fullName);
// // console.log(fullAddress);

// /*Cho mot doi tuong hoc sinh2 gom cac thong tin: fristName, lastName, age, state, zipCode, street
// in ra fullName and fullAddress
// */
// let hocsinh2 =
// {
//     firstName: 'Bui Anh',
//     lastName: 'Quan',
//     age: 3,
//     state: 'Thai Binh',
//     zipCode: '200000',
//     street: 'Tien Hai'
// }

// // let fullName1=`${hocsinh2.firstName} ${hocsinh2.lastName}`;
// // let fullAddress1=`${hocsinh2.state} ${hocsinh2.zipCode} ${hocsinh2.street}`;
// // console.log(fullName1);
// // console.log(fullAddress1);

// //2. Function nham muc dich dung de quan ly va bao tri
// // Gom nhom cac hanh dong


// function printFullName(hocsinh){
//     let fullName=`${hocsinh.firstName} ${hocsinh.lastName}`;
//     console.log(fullName);
// }

// function printAddress(hocsinh){
//     let fullAddress=`${hocsinh.state} ${hocsinh.zipCode} ${hocsinh.street}`;
//     console.log(fullAddress);
// }

// function printInfor(hocsinh){
//     printFullName(hocsinh);
//     printAddress(hocsinh);
// }

// //3. Thuc thi Function
// printInfor(hocsinh1);
// printInfor(hocsinh2);


// /*4. Function trong Function => Ko nen dung*/
// function doSomeThing(){
//     function doSomeThingElse(){
//         console.log("doSomeThingElse");
//     }
//     doSomeThingElse();
//     console.log("doSomeThingElse2");
// }
// doSomeThing();


//5. Function tra ve ket qua
/*Tinh tong hai so*/
// function sum(a,b){
//     let total= a+b;
//     return total;
// }
// let x= sum(5,7);
// console.log(x);
// let y =sum(11,22);
// console.log(y);
// console.log(sum(x,y));


//6. Thay doi gia tri cua bein truyen vao
// function change(a){
//     a=10;
// }
// let b=3;
// change(b);
// console.log(b);// Van in ra b=3 gia tri ko thay doi


// //7. Gia tri cua Object or Array cos the thay doi khi bi thay doi trong function
// let object1={
//     a: '1',
//     b: 3
// }
// function change(object){
//     object.a="Thuy Nguyen"
// }
// change(object1);
// console.log(object1); // Gia tri cua object1 sau khi change: bi thay doi thanh Thuy Nguyen


//8. Gan bien bang 1 function
/*Chu y phai co dau ngoac ()*/
// function doSomeThing1(){
//     return 3;
// }
// let ham= doSomeThing1();
// console.log(ham);
// let ham1= doSomeThing1;
// console.log(ham1);
// console.log(ham1());
// max(1,3,5,6,8)

// function m(a, ...arguments) {
//     console.log(a);
// } 


//9. So luong parameter truyen vao mot method
// function divide(a, b){
//     console.log(a);
//     console.log(b);
//     console.log(arguments[2]);
//     return a/b;
// }
// console.log(divide(1,2));
// console.log(divide(1,2,3));

//10. 
// function divideSuper(){
//     return arguments[0]/arguments[1];
// }
// console.log(divideSuper(1,2));

//11. Cach viet tat cua ham
// const divideSuper1 = (a, b) => {
//     return a / b;
// }
// console.log(divideSuper1(1, 2));
// //divideSuper1 = 'Thuy Nguyen';
// console.log(divideSuper1(1, 2));


//12.Javascript_hoisting
//tu dong sap xep khai bao len dau ma van chay mac du function viet xuong duoi
// console.log(divideSuper2(1, 2));
// function divideSuper2(a, b) {
//     return a / b;
// }

//13. 
console.log(divideSuper3(1, 2));
const divideSuper3 = (a, b) => {
    return a / b;
}