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

// console.log(giaiPhuongTrinhBac2(8, 2, 1));


/*2. Viết 1 function để tinh dien tich cac loai hinh hoc-hcn, hinh tron, hinh tam giac*/
/**/
// function tinhDienTich(loai, ???){
//     switch(loai){
//         case 'hcn':
//             b
//     }
//
let type = {
    circle: 'circle',
    triangle: 'triangle',
    rectangle: 'rectangle'
}

function tinhDienTich(shape, {a,b,h,r}) {
    let result;
    switch (shape) {
        case type.circle:
            result = r * r * Math.PI;
            break;
        case type.triangle:
            result = (a * h) / 2;
            break;
        case type.rectangle:
            result = a * b;
            break;
    }
    console.log(result);
    return result;
}

let input={
    a:2,
    b:3,
    h:5,
    r:4
}


tinhDienTich(type.circle, input);
tinhDienTich(type.rectangle,input);
tinhDienTich(type.triangle,input);

