// function giaiPhuongTrinhBac2(a,b,c){
//     let detal= b*b-4*a*c;
//     if(detal<0){
//         return false;
//     }else if(detal=0){
//         x1=x2=-(b)/(2*a);
//     }else{
//         x1=((-b)+Math.sqrt(detal))/(2*a);
//         x2=((-b)-Math.sqrt(detal))/(2*a);
//     }
//     let ketQua ={
//         'x1': x1,
//         'x2': x2
//     }
//     return ketQua;
// }

// console.log(giaiPhuongTrinhBac2(4,3,-1));


/*2. Viết 1 function để tinh dien tich cac loai hinh hoc-hcn, hinh tron, hinh tam giac*/
/**/
// function tinhDienTich(loai, ???){
//     switch(loai){
//         case 'hcn':
//             b
//     }
// }


const shapeType = {
    circle: 'circle',
    triangle: 'triangle',
    rectangle: 'rectangle'
}

function CalculateAreaSize(type, a, b) {
    switch(type) {
        case shapeType.rectangle: return a*b;
        case shapeType.triangle: return (a*b)/2;
        case shapeType.circle: return a*a*Math.PI;
    }
}

console.log(CalculateAreaSize(shapeType.circle, 4, 5));