//1. Mang
let a=[];
console.log(typeof a);

//2. Xac dinh xem co phai la array ko: Co 2 cach
console.log(a instanceof Array);
console.log(Array.isArray(a));

//3. Day phan tu vao trong mang
a.push(1);
console.log(a);
a.push(4,6,7,'abc', true);
console.log(a);

//4. Day mot Object vao mang
//In mot  mang ra 
let hocsinh={
    name: 'Thuy Nguyen',
    tuoi: 3
}
a.push(hocsinh);
console.log(JSON.stringify(a));

//5. Nhet mang vao mang va phan giai tung phan tu trong mang khi nhet vao
let b= ['a', 1, 'c'];
//a.push(b);// nhet mang b vao mang a
console.log(a);
console.log(JSON.stringify(a));

// Phan giai tung phan tu cua mang b va nhet vao mang a
a.push(...b);
console.log(a);
console.log(JSON.stringify(a));

//6. lay phan tu cuoi cung trong mang va tra ra phan tu do
let lastElement= a.pop();
console.log(JSON.stringify(a));

//7. Tim ra phan tu dau tien remove ra khoi mang va tra ra phan tu do
let fistElement= a.shift();
console.log(JSON.stringify(a));

//8. Nhet mot phan tu vao dau mang
a.unshift(345);
console.log(JSON.stringify(a));

//9. Cat phan tu giua mang- Ap dung cho case keo tha(mot danh sach keo phan tu nay sang ben kia thi tra ra danh sach ben kia, kiem tra phan tu dau tien hay cuoi cung)
// Add them phan tu cuoi cung vao mang
let midElement= a.splice(1,3);
console.log(JSON.stringify(midElement));
console.log(JSON.stringify(a));

//10. Xoa phan tu bat ki trong mang bang DELETE
// Sau khi xoa van giu gia tri null trong mang
delete a[2];
console.log(JSON.stringify(a));

//11. ham concat se noi chuoi voi nhau nhung ko thay doi gia tri ban dau cua mang
let c=['mangc', 1,3];
let d= ['mang d'];
let newArray= a.concat(c,d);
console.log(JSON.stringify(a));
console.log(JSON.stringify(newArray));

//12. Noi chuoi
/*Tao expected theo dung format*/
console.log(a.join('_'));


//13. In ra chieu dai cua phan tu
console.log(a.length);
console.log(a[7]);
newArray[15]='af';
console.log(JSON.stringify(newArray));

// Duyet qua mang, tim kiem cac phan tu trong mang




