/*Array
*/
let a=[];
console.log(typeof a);
// Xac dinh xem co phai la array ko: Co 2 cach
console.log(a instanceof Array);
console.log(Array.isArray(a));

a.push(1);
console.log(a);
a.push(4,6,7,'abc', true);
console.log(a);

let hocsinh={
    name: 'Thuy Nguyen',
    tuoi: 3
}
a.push(hocsinh);
console.log(JSON.stringify(a));//in mot mang, doi tuong o dang chu

let b= ['a', 1, 'c'];
a.push(b);// nhat phan tu vao cuoi mang
console.log(a);
console.log(JSON.stringify(a));

a.push(...b); //phan giai spreadout
console.log(JSON.stringify(a));


let lastElement = a.pop();// ham pop lay ra phan tu cuoi cung va return no
console.log(lastElement);
console.log(JSON.stringify(a));

let firstElement= a.shift();// ham pop lay ra phan tu dau tien va tra ra no
console.log(firstElement);
console.log(JSON.stringify(a));

a.unshift(234); // nhet phan tu vao dau mang
console.log(JSON.stringify(a));

let midleElements= a.splice(1,3);// cat phan tu ra khoi mang
console.log(JSON.stringify(midleElements));
console.log(JSON.stringify(a));

 a.splice(2,1,'new string');// cat phan tu ra khoi mang// ap dung cho keo tha 
console.log(JSON.stringify(a));

//xoa phan tu bat ki bang index// ko nen dung vi con gia tri null trong mang
delete a[2];
console.log(JSON.stringify(a));

//noi chuoi concat
let c= [3,5,7,'mang c'];
let d= ['mang d'];
let newArray=a.concat(c,d);
console.log(JSON.stringify(a));
console.log(JSON.stringify(newArray));

console.log(a.join('_'));// dung de tao ra expected theo dung format

// in ra chieu dai mang
console.log(newArray.length);
console.log(newArray[12]);
newArray[15]='abc';
console.log(JSON.stringify(newArray));

//duyet qua mang va tim kiem phan tu trong mang => Hoc toi ham va vong lap se quay lai