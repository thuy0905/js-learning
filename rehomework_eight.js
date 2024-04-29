// tu viet 1 danh sach gom 5 hoc sinh
/*
1. Moi hoc sih co: ten, dia chi, gioi tinh, mon hoc
2. Moi mon hoc se bao gom: ten mon hoc, diem trung binh cua mon hoc(6 mon toan ,ly, hoa, van, su, dia)
3. Duyet qua tung hoc sinh  va tinh diem trung binh cua cac mon hoc cho hoc sinh do
4. Sau khi tinh diem trung binh xong thi in ra danh sach cac hoc sinh duoc len lop va danh sach cac hoc sinh ko duoc len lop(dieu kien len lop>=5)
*/

let hocSinh = [
    {
        ten: 'Thuy',
        diaChi: 'Ha Noi',
        gioiTinh: 'Nu',
        monHoc: [
            {
                ten: 'Toan',
                diemTrungBinh: 8
            },
            {
                ten: 'Ly',
                diemTrungBinh: 5
            },
            {
                ten: 'Hoa',
                diemTrungBinh: 6
            },
            {
                ten: 'Van',
                diemTrungBinh: 8
            },
            {
                ten: 'Su',
                diemTrungBinh: 9
            },
            {
                ten: 'Dia',
                diemTrungBinh: 8
            }
        ]
    },
    {
        ten: 'Duong',
        diaChi: 'Thai Binh',
        gioiTinh: 'Nam',
        monHoc: [
            {
                ten: 'Toan',
                diemTrungBinh: 8
            },
            {
                ten: 'Ly',
                diemTrungBinh: 1
            },
            {
                ten: 'Hoa',
                diemTrungBinh: 9
            },
            {
                ten: 'Van',
                diemTrungBinh: 4
            },
            {
                ten: 'Su',
                diemTrungBinh: 6
            },
            {
                ten: 'Dia',
                diemTrungBinh: 5
            }
        ]
    },
    {
        ten: 'Hong',
        diaChi: 'Thai Binh',
        gioiTinh: 'Nu',
        monHoc: [
            {
                ten: 'Toan',
                diemTrungBinh: 8
            },
            {
                ten: 'Ly',
                diemTrungBinh: 4
            },
            {
                ten: 'Hoa',
                diemTrungBinh: 7
            },
            {
                ten: 'Van',
                diemTrungBinh: 5
            },
            {
                ten: 'Su',
                diemTrungBinh: 8
            },
            {
                ten: 'Dia',
                diemTrungBinh: 5
            }
        ]
    }
]

function tinhDiemTrungBinh(monHocs) {
    let tongDiem = 0;
    let diemTrungBinh = 0;
    for (let i = 0; i < monHocs.length; i++) {
        tongDiem = tongDiem + monHocs[i].diemTrungBinh;
    }
    diemTrungBinh = tongDiem / monHocs.length;
    return diemTrungBinh;
}

// thu in ra xem tinh diem trung binh cua hoc sinh thu nhat dung chua
//console.log(tinhDiemTrungBinh(hocSinh[0].monHoc));

function tinhDiemTrungBinhDanhSachHocSinh(hocSinh) {
    for (let i = 0; i < hocSinh.length; i++) {
        let diemTrungBinhCacMonHoc = tinhDiemTrungBinh(hocSinh[i].monHoc);
        // gan mot gia tri diem trung binh vao mot doi tuong hoc sinh
        hocSinh[i].trungBinhMon= diemTrungBinhCacMonHoc; 
    }
}

console.log(JSON.stringify(hocSinh));

// tinh xem cac chau co duoc len lop khong
function duocLenLop(hocSinh){
    for(let i =0; i< hocSinh.length; i++){
        if(hocSinh[i].trungBinhMon>=5){
            console.log(`hoc sinh ${hocSinh[i].ten} duoc len lop`);
        }else{
            console.log(`hoc sinh ${hocSinh[i].ten} o lai lop`);
        }
    }
}

duocLenLop(hocSinh);