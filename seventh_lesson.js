/*
Cach tinh diem
+ Neu diem so<5: In ra "Yeu"
+ Neu diem so 5-7: In ra "Trung Binh"
+ Neu diem so 7-8: In ra "Kha"
+ Neu diem so lon hon 9: In ra "Gioi"
*/

let hocSinh1 = {
    name: 'Thuy Nguyen',
    age: 30,
    diemSo: 7.5
}

function xepLoaiHocSinh(hocSinh) {
    if (hocSinh.diemSo < 5) {
        console.log("Yeu");
        hocSinh.xepLoai = 'Yeu';
    } else if (hocSinh.diemSo < 7) {
        console.log("Trung Binh");
        hocSinh.xepLoai = 'Trung Binh';
    }
    else if (hocSinh.diemSo < 8) {
        console.log("Kha");
        hocSinh.xepLoai = 'Kha';
    }
    else {
        console.log("Gioi");
        hocSinh.xepLoai = 'Gioi';
    }
}

xepLoaiHocSinh(hocSinh1);
console.log(hocSinh1);

function duocLenLop(hocSinh) {
    /*Neu diem >5 thi duoc len lop- tra ve true of false*/
    if (hocSinh.diemSo >= 5) {
        return true;
    } else {
        return false;
    }
}


//verify order tren san thuong mai 
/*Neu status= completed => Co icon mau xanh
  Neu status= In_progress=> Co icon vang
  Neu status= Start=> Icon mau xam
*/
/*Ham verify user login vao 1 trang user login successfully=> user thuong mau xam, admin => mau xanh, vendor buyer ...*/


/*Switch-case
VD: thu ngay thang
Ngay tu t2 den t6 la ngay lam viec
con lai ngay nghi
*/

function tinhPhanThuong(hocSinh) {
    let phanThuong;
    /*Tinh phan thuong switch dua vao xep loai*/
    switch (hocSinh.xepLoai) {
        case 'Yeu':
            phanThuong = 0;
            break;
        case 'Trung Binh':
            phanThuong = 1;
            break;
        case 'Kha':
            phanThuong = 2;
            break;
        case 'Gioi':
            phanThuong = 3;
            break;
        default:
            phanThuong = -1;
    }
    return phanThuong;
}
hocSinh1.xepLoai = undefined;
console.log(tinhPhanThuong(hocSinh1));
/*Test web: mau vang hong cao hon bt 30%, back kim cao hon bt 20%, con lai gia default gia goc*10%*/

/*
Trong truong hop ma don hang dc tao thì thông tin hiển thị của đơn hàng sẽ bao gồm:
Ngày tạo với format như sau: Thứ: Ngày: Tháng: Năm: */

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


/*1. Viết 1 function để giai phuong trinh bac 2 1 ẩn*/

function giaiPhuongTrinhBac2(a,b,c){
    let detal= b*b-4*a*c;
    if(detal<0){
        return false;
    }else if(detal=0){
        x1=x2=-(b)/(2*a);
    }else{
        x1=((-b)+Math.sqrt(detal))/(2*a);
        x1=((-b)-Math.sqrt(detal))/(2*a);
    }
    let ketQua ={
        'x1': x1,
        'x2': x2
    }
    return ketQua;
}

console.log(giaiPhuongTrinhBac2(1,2,3));



/*2. Viết 1 function để tinh dien tich cac loai hinh hoc-hcn, hinh tron, hinh tam giac*/
/**/
// function tinhDienTich(loai, ???){
//     switch(loai){
//         case 'hcn':
//             b
//     }
// }

// hcn, c, t

function CalculateAreaSize(type, a, b) {
    switch(type) {
        case 'rectangle': return a*b;
        case 'triangle': return a*b/2;
        case 'circle': return a*a*Math.PI;
    }
}

CalculateAreaSize('circle', 4, 5);