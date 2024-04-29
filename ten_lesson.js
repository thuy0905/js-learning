//set
//co 1 danh sach ko trung lap => Xu ly du lieu ko trung lap
//có 100 don hang => Sap xep boi 6-7 người=> duyet qua tung don hang => nhet ten nguoi xu ly vao trong 1 set => 1 set la 1 nguoi giam so luong don hang 
// set ko trung lap nen co 7 

// let kyTu = new Set();
// kyTu.add("A");
// kyTu.add("B");

// console.log(kyTu);// In 1 object set
// console.log(kyTu.values());// in gia tri

// kyTu.add("A");
// console.log(kyTu);// In 1 object set
// console.log(kyTu.values());// in gia tri

// for(let k of kyTu.values()){
//     console.log(k);
// }

//ko lay theo let i duoc
// for(let i=0; i<kyTu.size; i++){
//     console.log(kyTu.values().)
// }

//kyTu.forEach()

//ung dung: tren nhieu browser khac nhau
// Su dung ham chung de goi

// function calculate(method, a,b){
//     return method(a,b);
// }
// function add(a,b){
//     return a+b;
// }
// function minus(a,b){
//     return a-b;
// }

// console.log(calculate(add, 2,3));
// console.log(calculate(minus,7,3));
// kyTu.forEach((value)=>{
//     console.log(value)
// })


// VD array
// let mang=[4,56,7,"A", "c"];
// mang.forEach((value,index)=>{
//     console.log(`${index}`)
// })

//Xoa phan tu trong set
// let kyTu = new Set();
// kyTu.add("A");
// kyTu.add("B");
// kyTu.delete("A");
// console.log(kyTu.values());


//co 1 mang muon tao thanh set ko trung lap
let mang=[1,1,3,4,5,5];
//tao set tu mang
let SetFromMang= new Set(mang);
// console.log(SetFromMang.values());


// /*2.MAP*/
// //Giong Object co nhieu rang buoc de thao tac chat che hon
// let doiTuongMap = new Map();
// console.log(doiTuongMap);
// doiTuongMap.set("Ten","Thuy"); // them thuoc tinh cho map
// console.log(doiTuongMap);
// doiTuongMap.set("Tuoi","34");
// console.log(doiTuongMap);
// // lay doi thuoc tinh cua doi tuong ra
// console.log(doiTuongMap.get("Tuoi"));
// //Delete
// // console.log(doiTuongMap.delete("Ten"));
// // console.log(doiTuongMap);

// doiTuongMap.forEach((value, key)=>{
//     console.log(`${value}- ${key}`);
// }) 


/* RANDOM- VD tao du lieu bat ki dang so
Tao ID don hang de insert into DB
Generate number- Prepare Data with ID, name_3543534, ORDER_33453
// */
// console.log('ORDER_'+Math.floor(Math.random()*100));

//Random theo khoang tu 10-99. 
// Math.floor(Math.random()*(Max-Min))+ Min
  
console.log(Math.floor(Math.random()*(99-10))+ 10);

//Random ra cai khong trung lap nhau
function randomTheoKhoang(max,min){
    return Math.floor(Math.random()*(max-min))+ min
}
//Random 10 so ko trung lap lon hon 100 va be hon 999
//ap dung set, khi nao set co size<=10 thi goi ham random va add vao set do toi khi nao set do du 10 thi dung
let setSoDuyNhat= new Set();
while(setSoDuyNhat.size<10){
    setSoDuyNhat.add(randomTheoKhoang(100,999));
}
console.log(setSoDuyNhat.values());

setSoDuyNhat.forEach((value) =>{
    console.log(`${value}`);
})

/*
1. Viet function tao ra 52 la bai
Function lon gop tu nhieu function nho
mang gia tri 2,3,4,J, Q, K, A
mang 2: co ro chuon bich
Vong lap 1:
tach 
tao la bai(truyen 1 so => tao ra 4 => Tao ra mang luu 52 la bai)
Duyet qua 2 lan tao ra 1 bo bai
2. Viet function chia bai function(nhansoluongnguoichoi){chia so luong cho moi nguoi/13 cay}
*/
{
    "nguoichoi1": ["2-Co",'3-Bich',...]
    "nguoichoi1": ["2-Co",'3-Bich',...]
}

function chiaBai(inputs) {
    const cards = [...inputs];// Copy array ko muon thay doi du lieu dau vao 
    const players = {
        "nguoi_1": [],
        "nguoi_2": [],
        "nguoi_3": [],
        "nguoi_4": [],
    }
    const total = cards.length;
    let playerIndex = 1;

    /// players["nguoi_1"] tuong duong voi players.nguoi_1

    for (let i = 0; i < total; i++) { // total = 52;
        const card = cards.splice(rand(cards.length - 1), 1); // lay ngau nhien 1 card và xóa (splice startIndex, count)
        players["nguoi_" + playerIndex].push(card[0]);
        if (playerIndex === 4) {
            playerIndex = 1; //
        } else {
            playerIndex++;
        }
    }
    return players;
}

// for (0..12) {// hard
//     for (1..4) {

//     }
// }

function ChiaBai2(inputs, key) { // key: nguoi_1 | nguoi_2...
    const cards = [...inputs];
    const players = { // Map
        "nguoi_1": [],
        "nguoi_2": [],
        "nguoi_3": [],
        "nguoi_4": [],
    }
    for (let i = 0; i < 13; i++) {
        let card;
        card= cards.splice(rand(0,cards.length-1), 1);// ham splice luon tra ra 1 mang cat bat dau tu i, count = n
        players[key].push(card[0]);
    }
}
