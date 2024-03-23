// function giaiPhuongTrinhBac2(a, b, c) {
//     let delta = b * b - 4 * a * c;
//     let x1;
//     let x2;
//     if (delta < 0) {
//         return false;
//     } else {
//         x1 = ((-b) + Math.sqrt(delta)) / (2 * a);
//         x2 = ((-b) - Math.sqrt(delta)) / (2 * a);
//     }
//     let ketQua = {
//         'x1': x1,
//         'x2': x2
//     }
//     return ketQua;
// }

// console.log(giaiPhuongTrinhBac2(1, 2, 1));


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

function CalculateAreaSize(type, {a, b, h, r}) {
    let result;
    switch (type) {
        case shapeType.rectangle:
            result = a * b;
            break;
        case shapeType.triangle:
            result = (a * h) / 2;
            break;
        case shapeType.circle:
            result = r *r * Math.PI;
            break;
    }
    console.log(result);
    return result;
}
let input={
    a:2,
    b:3,
    h:5,
    r:3
}
CalculateAreaSize(shapeType.rectangle,input);
CalculateAreaSize(shapeType.triangle,input);
CalculateAreaSize(shapeType.circle,input);

// CalculateAreaSize(shapeType.circle, 4, 5);