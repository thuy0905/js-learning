/*For*/
// let a = [1, 4, 0, 7, 8];
// //kiem tra so nao la chan so nao la le
// //duyet qua tung phan tu trong mang va so sanh
// for (let i = (a.length - 1); i >= 0; i--) {
//     console.log(a[i]);
//     if (a[i] % 2 == 0) {
//         console.log(`Phan thu ${i + 1} la so chan`);
//     } else {
//         console.log(`Phan thu ${i + 1} la so chan`);
//     }
// }


let hocSinh = [
    {
        thuTu: "hoc sinh 1",
        ten: 'Thuy Nguyen',
        diemSo: 8,
        monHoc: [
            {
                tenMonHoc: 'Toan',
                diemSo: 10
            },
            {
                tenMonHoc: 'Van',
                diemSo: 8
            },
            {
                tenMonHoc: 'Hoa',
                diemSo: 9
            },
        ]
    },
    {
        thuTu: "hoc sinh 2",
        ten: 'Duong',
        diemSo: 4
    },
    {
        thuTu: "hoc sinh 3",
        ten: 'Nam',
        diemSo: 6
    }
]

function duocLenLop(hocSinh) {
    if (hocSinh.diemSo >= 5) {
        console.log(`Hoc sinh ${hocSinh.ten} duoc len lop`);
    }
}

for (let i = 0; i < hocSinh.length; i++) {
    duocLenLop(hocSinh[i]);
}

// tim sp theo ten, go 3 ki tu tra ve list danh sach sp => lay dc ds sp hien len tu UI
// Se co 1 mang cac phan tu


// tu viet 1 danh sach gom 5 hoc sinh
/*
1. Moi hoc sih co: ten, dia chi, gioi tinh, mon hoc
2. Moi mon hoc se bao gom: ten mon hoc, diem trung binh cua mon hoc(6 mon toan ,ly, hoa, van, su, dia)
3. Duyet qua tung hoc sinh  va tinh diem trung binh cua cac mon hoc cho hoc sinh do
4. Sau khi tinh diem trung binh xong thi in ra danh sach cac hoc sinh duoc len lop va danh sach cac hoc sinh ko duoc len lop(dieu kien len lop>=5)
*/