// //Function
// let hocsinh1 =
// {
//     firstName: 'Nguyen',
//     lastName: 'Thuy',
//     age: 32,
//     state: 'Ha Noi',
//     zipCode: '100000',
//     street: 'Vo Chi Cong'
// }
// // in fullname and fulladress
// // let fullName = `${hocsinh.firstName} ${hocsinh.lastName}`;
// // let fullAdress = `${hocsinh.street} ${hocsinh.state} ${hocsinh.zipCode}`;
// // console.log(fullName);
// // console.log(fullAdress);

// //

// let hocsinh2 =
// {
//     firstName: 'Bui Anh',
//     lastName: 'Quan',
//     age: 3,
//     state: 'Thai Binh',
//     zipCode: '200000',
//     street: 'Tien Hai'
// }

// //in fullname and fulladress
// // let fullName1 = `${hocsinh2.firstName} ${hocsinh2.lastName}`;
// // let fullAdress1 = `${hocsinh2.street} ${hocsinh2.state} ${hocsinh2.zipCode}`;
// // console.log(fullName1);
// // console.log(fullAdress1);


// //tao function
// function printInfo(hocsinh) {
//     let fullName = `${hocsinh.firstName} ${hocsinh.lastName}`;
//     let fullAdress = `${hocsinh.street} ${hocsinh.state} ${hocsinh.zipCode}`;
//     console.log(fullName);
//     console.log(fullAdress);
// }

// // execute function
// //de dang quan ly va de bao tri
// //gom nhom hanh dong
// // printInfo(hocsinh1);
// // printInfo(hocsinh2);
// // printInfo({});// goi object rong


// function printFullName(hocsinh) {
//     let fullName = `${hocsinh.firstName} ${hocsinh.lastName}`;
//     console.log(fullName);
// }

// function printAddress(hocsinh) {
//     let fullAdress = `${hocsinh.street} ${hocsinh.state} ${hocsinh.zipCode}`;
//     console.log(fullAdress);
// }
// /*Goi Function trong Function=> De clear code sau de quan ly*/
// // function printInforV2(hocsinh){
// // printFullName(hocsinh);
// // printAddress(hocsinh);
// // }
// // printInforV2(hocsinh1);
// // printInforV2(hocsinh2);

// /*Function trong Function => Ko nen dung*/
// // function doSomeThing(){
// //     function doSomeThingElse(){
// //         console.log("doSomeThingElse");
// //     }
// //     doSomeThingElse();
// //     console.log("doSomeThingElse2");
// // }
// // doSomeThing();


// /*
// Function co ket qua tra ve
// */
// //tinh tong 2 so
// // function sum(a, b) {
// //     let total = a + b;
// //     return total;
// // }

// // let x = sum(5, 7);
// // console.log(x);
// // let y = sum(11,25);
// // console.log(y);
// // console.log(sum(x,y));


// /*
// Thay doi gia tri cua bien truyen vao
// */
// // function change(a) {
// //     a = 10;
// // }
// // let b = 3; //primitive-kieu nguyen thuy ko the thay doi dc
// // change(b);
// // console.log(b);
// /*
// gia tri cua object or Array co the thay doi khi bi thay doi trong function
// */
// // let object1 = {
// //     a: '1',
// //     b: 2
// // }
// function changeObject(object) {
//     object.a = 'Thuy Nguyen';
// }
// changeObject(object1);
// console.log(object1);

// /*gan bien bang 1 function*/
// function doSomeThing1() {
//     return 2;
// }
// let ham = doSomeThing1();
// console.log(ham);
// let ham1 = doSomeThing1;
// console.log(ham1);
// console.log(ham1());

/*
so luong parameter truyen vao 1 method(function)
*/
// function divide(a, b) {
//     console.log(a);
//     console.log(b);
//     console.log(arguments[2]);
//     return a / b;
// }
// console.log(divide(1, 2));
// console.log(divide(1,2,3));

// function divideSuper(){
//     return arguments[0]/arguments[1];
// }
// console.log(divideSuper(1,2));

/*Cách viet tat cua ham*/
// const divideSuper1 = (a, b) => {
//     return a / b;
// }

// console.log(divideSuper1(1, 2));
// //divideSuper1 = 'Thuy Nguyen';
// console.log(divideSuper1(1, 2));

/*javascript_hoisting
tu dong sap xep khai bao len dau ma van chay mac du function viet xuong duoi*/
console.log(divideSuper2(1, 2));
function divideSuper2(a, b) {
    return a / b;
}

// console.log(divideSuper3(1, 2));
// const divideSuper3 = (a, b) => {
//     return a / b;
// }