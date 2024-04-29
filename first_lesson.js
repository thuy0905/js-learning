// console.log("Hello world !");

// console.log(1+2);

//variable
// x='Thuy Nguyen';
// console.log(x);
// x=1;
// console.log(x);

// x= true;
// console.log(x);

//Khai báo con cha được ăn
// let
// {
//     //Scope A
//     let a= 1;
//     a=5;
//     {
//         //Scope B
//         console.log(a);

//         {
//             //Scope C
//             a=6; 
//             console.log(a);

//         }
//     }
// }

// {
    //Scope A
 //1. Khai báo con nhưng cha sẽ ko được ăn   
//     {
//         //Scope B
//         let a= 1;
//         console.log(a);

//         {
//             //Scope C
//             a=6; 
//             console.log(a);

//         }
//     }
//     console.log(a);
// }


//2. Let biến con sẽ ăn cha gần nhất
// {
//    //Scope A
    
//     let a=1;
    
//     {
//         //Scope B
//         let a= 2;
//         console.log("Scope B");
//         console.log(a);

//         {
//             //Scope C
//             console.log("Scope C");
//             console.log(a);
//         }
//     }
//     console.log("Scope A");
//     console.log(a);
// }

//3. Khai báo về const
// const nameThuy= "Nguyen Thi Thuy";
// nameThuy= "Nguyen Thi";
// {
//     const a = 2;
//     {
//         const a = 3;
//         a= 4;
//     }
// }

// var

// {
//     a = 4; 
 
//     {
//          a = 3; 
//     }
// console.log(a);
// 
