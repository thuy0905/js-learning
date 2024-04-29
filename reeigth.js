// //1. For
// let a =[1,3,4,5,9,10];
// //Kiem tra so nao la so chan, so nao la so le
// //Duyet qua tung phan tu trong mang va so sanh
// for(let i=0; i<a.length; i++){
//     console.log(a[i]);
// }





let hocSinh = [
    {
        thuTu: 'hoc sinh1',
        ten: 'Thuy Nguyen',
        diemSo: 9,
        monHoc: [
            {
                'tenMonHoc': 'Toan',
                diemSo: 10
            },
            {
                'tenMonHoc': 'Ly',
                diemSo: 5
            },
            {
                'tenMonHoc': 'Hoa',
                diemSo: 6
            }
        ]
    },
    {
        thuTu: 'hoc sinh2',
        ten: 'Duong',
        diemSo: 4,
        monHoc: [
            {
                'tenMonHoc': 'Toan',
                diemSo: 6
            },
            {
                'tenMonHoc': 'Ly',
                diemSo: 8
            },
            {
                'tenMonHoc': 'Hoa',
                diemSo: 9
            }
        ]
    },
    {
        thuTu: 'hoc sinh3',
        ten: 'Nam',
        diemSo: 6,
        monHoc: [
            {
                'tenMonHoc': 'Toan',
                diemSo: 8
            },
            {
                'tenMonHoc': 'Ly',
                diemSo: 7
            },
            {
                'tenMonHoc': 'Hoa',
                diemSo: 9
            }
        ]
    }
]
function duocLenLop(hocSinh) {
    if (hocSinh.diemSo >= 5) {
        console.log(`Hoc sinh sinh ${hocSinh.ten} duoc len lop`);
    }
}
for (let i = 0; i < hocSinh.length; i++) {
    duocLenLop(hocSinh[i]);
}