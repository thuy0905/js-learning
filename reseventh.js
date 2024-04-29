
// /*
// Cach tinh diem
// + Neu diem so<5: In ra "Yeu"
// + Neu diem so 5-7: In ra "Trung Binh"
// + Neu diem so 7-8: In ra "Kha"
// + Neu diem so lon hon 9: In ra "Gioi"
// */

// let hocSinh1 = {
//     name: 'Thuy Nguyen',
//     age: 30,
//     diemSo: 7.5
// }

// function xepLoaiHocSinh(hocSinh) {
//     if (hocSinh.diemSo < 5) {
//         console.log("Yeu");
//         hocSinh.xepLoai = 'Yeu';
//     }
//     if (hocSinh.diemSo < 7) {
//         console.log("Trung Binh");
//         hocSinh.xepLoai = 'Trung Binh';
//     }
//     if (hocSinh.diemSo < 8) {
//         console.log("Kha");
//         hocSinh.xepLoai = "Kha";
//     } else {
//         console.log("Gioi");
//         hocSinh.xepLoai = "Gioi";
//     }
// }

// //2. Neu duoc diem > 5 thif tra ve true or false
// function duocLenLop(hocSinh) {
//     if (hocSinh.diemSo >= 5) {
//         return true;
//     } else {
//         return false;
//     }
// }
// xepLoaiHocSinh(hocSinh1);
// console.log(hocSinh1);
// console.log(duocLenLop(hocSinh1));

// function tinhPhanThuong(hocSinh) {
//     let phanThuong;
//     switch (hocSinh.xepLoai) {
//         case "Yeu":
//             phanThuong = 0;
//             break;
//         case "Trung Binh":
//             phanThuong = 1;
//             break;
//         case "Kha":
//             phanThuong = 2;
//             break;
//         case "Gioi":
//             phanThuong = 3;
//             break
//         default:
//             phanThuong=-1;
//     }
//     return phanThuong;
// }

// console.log(tinhPhanThuong(hocSinh1));

//Function lay thu cua ngay hien tại
function getThuCuaNgayHienTai(){
    let day;
    switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
      return day;
}

console.log(getThuCuaNgayHienTai());