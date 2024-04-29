//1. Object
// let hocsinh={
//     'name':'Thuy Nguyen',
//     'address':'Ha Noi',
//     1: 'Thong tin bat ki',
//     'age': 32,
//     'graduated': true
// };
// console.log(hocsinh);
// console.log(hocsinh[1]);


//2. Khai bao const voi object
/*Object la nhom du lieu duoc thiet ke theo kieu key-value*/
// const hocsinh={};

// hocsinh.name='thuy nguyen';
// console.log(hocsinh);


//3. Ham lay thong tin ngay thang nam hien tai
/*ISO date time format*/
// let today = new Date();
// console.log(today);
// let exampleDate= new Date("2000-01-07");
// console.log(exampleDate);

//4.Function ve Date time
// let today= new Date();
// console.log(today.getDate());
// console.log(today.getDay());
// console.log(today.getFullYear());
// console.log(today.getTime());

//Step input du 18 tuoi 
// Sinh ra ngay thang nam dong
// let today= new Date();
// console.log(today.getFullYear()-18);
// let birthDay= `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()-18}`;
// console.log(birthDay);


// Submit mot don hang => Khi view don hang se co truong DL tao ra laf dueDate= Ngay hien tai +7
//Nhiem vu cua auto la verify truong dueDate la dung
// Neu ngay thang nam tang len thi phai co if else xu ly
let today= new Date();
let dueDate= `${today.getDate()+7}- ${today.getMonth()+1}-${today.getFullYear()}`;
console.log(dueDate);