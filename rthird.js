//Data type
// //1. Undefind and Null
// let a ; // du lieu khai bao chua duoc gan
// console.log(a);
// console.log(typeof a);
// // lay du lieu ma DL ko co thi la null
// let b =null;
// console.log(typeof b);

// //2. boolean-true/false
// let c= a==b;
// console.log(c);


//3.Falsy value
/*Neu cho vao if thi no quy ra false*/
// console.log(0==false);

//4. Number
/*Trong javascript chi co kieu Number va dau cham dong 64 bit*/
// let a=1;
// let b=3.5
// let c= 1000000000;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// let d=a/0;
// console.log(d);
// let s= a/'abc';
// console.log(s);


//5. Math
/*Trong javascript thi luon phai lam tron so*/
// let x=0.1+0.2;
// console.log(x);
// /*Ham lam tron may so thap phan*/

// //6. Thu vien Number
// /*Sau so thap phan bao nhieu so thi phai lam tron so*/
// console.log(Number(x).toFixed(1)==0.3);
// console.log(Number(1).toFixed(6));

//7. Cong tru nhan chia chuoi so
/*Chi can luu y phep cong la thanh chuoi con cac toan tu khac la se bien thanh so*/
// let a = "10";
// let b = 4;
// console.log(a+b);
// console.log(a/b);

/*8. Khong the so sanh hai doi tuong == nhau vi */
// let a=10;
// let b= new Number(10);
// console.log(typeof a);
// console.log(typeof b);
// console.log(a==b);
// let c= new Number(10);
// console.log(b==c);

//9. string
/*Muon them ki tu dac biet vao trong chuoi them ki tu \ truoc dau dac biet do*/
// let name='Thuy\'';
// console.log(name.length);
// console.log(name);

//10. /t la dau cach va /n la xuong dong
// let name= 'Nguyen\tThuy \nLinh';
// console.log(name);
// let age =20;
// let name1=`I am Thuy
// Toi dang lam tester
// Toi nam nay ${age} tuoi`;
// console.log(name1);

//11.Method cua String
// let text= " Thuy Nguyen "; 
// console.log(text.length);
// console.log(text.charAt(0));// muon lay ki tu o vi tri so may0
// console.log(text.charAt(12)==undefined);
// console.log(text.toLocaleUpperCase());
// console.log(text.toLocaleLowerCase());
// console.log(text.trim());
// console.log(text.trimEnd());
// console.log(text.trimStart());
// console.log(text.replace("Thuy","Thi"));
// console.log(text.replaceAll('y','abc'));
// console.log(text.split(" "));