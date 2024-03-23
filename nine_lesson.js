// /*1.FOR IN- PHU HOP VOI OBJECT*/
// let hocSinh={
//     ten: 'Thuy',
//     tuoi: 34,
//     diaChi: 'Ha Noi'
// }

// for(let thuocTinh in hocSinh){
//     console.log(`${thuocTinh}-${hocSinh[thuocTinh]}`);
// }
// /*2. FOR I CHO OBJECT-It su dung*/
// let keys = Object.keys(hocSinh);
// for(let i=0; i<keys.length; i++){
//     console.log(hocSinh[keys[i]]);
// }

// //liet ke ra cac gia tri cua doi tuong
// let mang =[5,4,2,8];
// for(let thuocTinh in mang){
//     console.log(`${thuocTinh}-${mang[thuocTinh]}`);
// }


/*2.FOR OFF CHO MANG*/
//Su dung trong truong hop chi can lay gia tri- ko sua gia tri cua mang
// let mang=[4,7,3,9];
// for(let value of mang){
//     console.log(value);
// }
/*3.Su dung FOR OF cho OBJECT- LOI -KHONG SU DUNG DC*/
// let hocSinh={
//     ten: 'Thuy',
//     tuoi: 34,
//     diaChi: 'Ha Noi'
// }
// for(let value of hocSinh){
//     console.log(value);
// }


/*VONG LAP WHILE*/
// let count=0;
// while(count<10){
//   console.log(count);
//   count++;
// }

// for(let i=0; i<10; i++){
//     console.log(i);
// }

// let a = 10;
// do{
//     console.log(a);
//     a++;
// }while(a<10);
// let a=10;
// while(a<10){
//     console.log(a);
//     a++;
// }

//Tim so dau tien la so chan
let arr=[1,3,1,6,7,8,9];
for(value of arr){
    if(value%2==0){
        console.log(value);
        break;
    }
}

//Test UI-tim item product , cart co ten la abc, co cai ID the nay trong danh sach=> Tim thay break ra 

/*
tao ra mot danh sach cac hinh bao gom: vuong, tron, tam giac, chu nhat
Yeu cau: 
1. Trong moi doi tuong hinh do se co: ten, danh sach cac hinh co kich thuoc khac nha(VD: Hinh vuong co 1 array hinh, array gom(kich thuoc, canh a))
2. Yeu cau: Tinh tong dien tich cua tat ca cac hinh trong mang hinh do
*/

let shapes = [
    {
        type: 'Square',
        instances: [
            {
                name: 'first square',
                a: 5
            },
            {
                name: 'second square',
                a: 7
            },
            {
                name: 'third square',
                a: 3
            },

        ]
    }
]