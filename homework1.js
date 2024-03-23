// tu viet 1 danh sach gom 5 hoc sinh
/*
1. Moi hoc sih co: ten, dia chi, gioi tinh, mon hoc
2. Moi mon hoc se bao gom: ten mon hoc, diem trung binh cua mon hoc(6 mon toan ,ly, hoa, van, su, dia)
3. Duyet qua tung hoc sinh  va tinh diem trung binh cua cac mon hoc cho hoc sinh do
4. Sau khi tinh diem trung binh xong thi in ra danh sach cac hoc sinh duoc len lop va danh sach cac hoc sinh ko duoc len lop(dieu kien len lop>=5)
*/

let hocSinh = [
    {
        ten: 'hocsinh_A',
        diaChi: 'B',
        gioTinh: 'Nam',
        monHoc: [
            {
                ten: 'Toan',
                diem: 7,
            },
            {
                ten: 'Ly',
                diem: 9,
            },
            {
                ten: 'Hoa',
                diem: 6,
            },
            {
                ten: 'Van',
                diem: 5,
            },
            {
                ten: 'Su',
                diem: 4,
            },
            {
                ten: 'Dia',
                diem: 6,
            }
        ]
    },

    {
        ten: 'hocsinh_B',
        diaChi: 'Y',
        gioTinh: 'Nu',
        monHoc: [
            {
                ten: 'Toan',
                diem: 10,
            },
            {
                ten: 'Ly',
                diem: 9,
            },
            {
                ten: 'Hoa',
                diem: 6,
            },
            {
                ten: 'Van',
                diem: 5,
            },
            {
                ten: 'Su',
                diem: 4,
            },
            {
                ten: 'Dia',
                diem: 6,
            }
        ]
    },

    {
        ten: 'G',
        diaChi: 'K',
        gioTinh: 'Nam',
        monHoc: [
            {
                ten: 'Toan',
                diem: 6,
            },
            {
                ten: 'Ly',
                diem: 7,
            },
            {
                ten: 'Hoa',
                diem: 6,
            },
            {
                ten: 'Van',
                diem: 5,
            },
            {
                ten: 'Su',
                diem: 4,
            },
            {
                ten: 'Dia',
                diem: 6,
            }
        ]
    },
]


function tinhDiemTrungBinh(monHocs) {
    let tongdiem = 0;
    let diemTrungBinh = 0;
    for (let i = 0; i < monHocs.length; i++) {
        tongdiem += monHocs[i].diem;
    }
    // for(let value of monHocs){
    //     tongdiem+= value;
    // }
    diemTrungBinh = tongdiem / monHocs.length;
    return diemTrungBinh;
}

console.log(tinhDiemTrungBinh(hocSinh[0].monHoc));


function tinhDiemTrungBinhDanhSachHocSinh(hocSinh) {
    for (let i = 0; i < hocSinh.length; i++) {
        let DiemTrungBinhTungHocSinh = tinhDiemTrungBinh(hocSinh[i].monHoc);
        // Add thuoc tinh TrungBinhMon vao cho tung hoc sinh
        hocSinh[i].trungBinhMon = DiemTrungBinhTungHocSinh;
    }

}
tinhDiemTrungBinhDanhSachHocSinh(hocSinh);
console.log(JSON.stringify(hocSinh));

function duocLenLop(hocSinh) {
    for (let i = 0; i < hocSinh.length; i++) {
        if (hocSinh[i].trungBinhMon >= 5) {
            console.log(`Hoc sinh  ${hocSinh[i].ten} duoc len lop`);
        } else {
            console.log(`Hoc sinh  ${hocSinh[i].ten} o lai lop`)
        }
    }
}

// duocLenLop(hocSinh);