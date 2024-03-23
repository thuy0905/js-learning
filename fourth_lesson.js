// //1. Object: kieu DL luu nhieu thong tin hon binh thuong
// let hocsinh ={
//     'name': 'Thuy Nguyen',
//     "address": "Ha Noi",
//     1: "Thong tin bat ki",
//     "graduated": true
// };
// console.log(hocsinh);
// console.log(hocsinh.name);
// console.log(hocsinh[1]);


//2.const for object
// const hocsinh={};
// hocsinh.name= 'Thuy Nguyen';
// console.log(hocsinh);

//3.Date_time
// let today = new Date();
// console.log(today);
// let exampleDate= new Date('2000-01-07');
// console.log(exampleDate);

// console.log(new Date(2024,1));
// console.log(new Date(2023,6,13));
// console.log(new Date(2022,1,1,12));
// console.log(new Date(2022,1,1,2,45));
// console.log(new Date(2023,3,23,1,30,59));
// console.log(new Date(2024,3,30,3,20,1,1));


//4. Function Date_time
// let today= new Date();
// // dynamic data to return
// console.log(today.getDay());
// console.log(today.getDate());
// console.log(today.getFullYear()-18);
// //nhap thogn tin user hop le neu du 18 tuoi
// //Dynamic data input data
// let birthDay= `${today.getDate()}-${today.getMonth()}-${today.getFullYear()-18}`;
// console.log(birthDay);


// // //submit don hang => Khi view don hang => Se co 1 truong DL tu dong tao ra la dueDate= Ngay hien tai+ 7. 
// // //Nhiem vu la dung automation verify truong du lieu dueDate do la dung
let today= new Date();
let dueDate= `${today.getDate()+7}-${today.getMonth()}-${today.getFullYear()}`
console.log(dueDate);
//Neu ngay thang nam tang len thi xu ly nhu the nao?