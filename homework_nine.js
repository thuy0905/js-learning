/*
tao ra mot danh sach cac hinh bao gom: vuong, tron, tam giac, chu nhat
Yeu cau: 
1. Trong moi doi tuong hinh do se co: ten, danh sach cac hinh co kich thuoc khac nhau(VD: Hinh vuong co 1 array hinh, array gom(kich thuoc, canh a))
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

        ]
    },
    {
        type: 'Circle',
        instances: [
            {
                name: 'first circle',
                a: 5
            },
            {
                name: 'second circle',
                a: 7
            }

        ]
    },
    {
        type: 'Rectangle',
        instances: [
            {
                name: 'first rectangle',
                a: 5,
                b: 3
            },
            {
                name: 'second rectangle',
                a: 7,
                b: 6
            },

        ]
    },

]
function tinhDienTichHinhVuong(instances) {
    let tongSquare = 0;
    for (let inst of instances) {
        let size = (inst.a * inst.a); // Dien tich hinh vuong
        tongSquare += size;
    }
    return tongSquare;
}

function tinhDienTichHinhTron(instances) {
    let tongCircle = 0;
    for (let inst of instances) {
        let size = (inst.a * inst.a) * Math.PI; // Dien tich hinh tron 
        tongCircle += size;
    }
    return tongCircle;
}
function tinhDienTichHinhChuNhat(instances) {
    let tongRectangle = 0;
    for (let inst of instances) {
        let size = (inst.a * inst.b); // Dien tich hinh chu nhat
        tongRectangle += size;
    }
    return tongRectangle;
}

function tinhDienTichMoiHinh(shape) {
    if (shape.type === 'Square') {
        let tongSquare = tinhDienTichHinhVuong(shape.instances);
        return tongSquare;
        //console.log('Tong cac hinh vuong: ' + tongSquare);
    }
    if (shape.type === 'Circle') {
        let tongCircle = tinhDienTichHinhTron(shape.instances);
        return tongCircle;
        //console.log('Tong cac hinh tron: ' + tongCircle);
    }

    if (shape.type === 'Rectangle') {
        let tongRectangle = tinhDienTichHinhChuNhat(shape.instances);
        return tongRectangle;
        //console.log('Tong cac hinh chu nhat: ' + tongRectangle);
    }
}
function tinhDienTichTongTatCa(shapes) {
    let tongAll = 0;
    for (let shape of shapes) {
        tongAll += tinhDienTichMoiHinh(shape);
    }
    return tongAll;
}
console.log('Tong tat ca cac hinh: ' + tinhDienTichTongTatCa(shapes));
