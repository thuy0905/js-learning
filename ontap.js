// let a=[];
// console.log(typeof a);
// // Xac dinh xem co phai la array ko: Co 2 cach
// console.log(a instanceof Array);
// console.log(Array.isArray(a));


// a.push(1);
// console.log(a);
// a.push(4,6,7,'abc', true);
// console.log(a);



// // let hocsinh={
// //     name: 'Thuy Nguyen',
// //     tuoi: 3
// // }
// // a.push(hocsinh);
// // console.log(JSON.stringify(a));//in mot mang, doi tuong o dang chu

// let b= ['a', 1, 'c'];
// a.push(b);// nhat phan tu vao cuoi mang
// console.log(a);
// console.log(JSON.stringify(a));




// a.push(...b); //phan giai spreadout
// console.log(JSON.stringify(a));


// let lastElement = a.pop();// ham pop lay ra phan tu cuoi cung va return no
// console.log(lastElement);
// console.log(JSON.stringify(a));


/*---------------------------------*/
let a=[2,4,5,6];
//kiem tra so nào la chan so nao la le
for(let i=0; i< a.length; i++){
    console.log(a[i]);
    if(a[i]%2==0){
        console.log(`Phan tu thu ${i+1} la so chan`);
    } else
    {
        console.log(`Phan tu thu ${i+1} la so le`);
    }
}