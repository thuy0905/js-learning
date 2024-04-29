/*
Bài tập 1: Giỏ hàng
Tạo một mảng tên là gioHang để lưu trữ các đối tượng đại diện cho các mặt hàng được thêm vào giỏ hàng. Mỗi đối tượng nên có các thuộc tính như tenSanPham (chuỗi), gia (số) và soLuong (số).
Viết một hàm tên themVaoGioHang nhận một đối tượng sản phẩm (có tenSanPham, gia và soLuong) làm tham số đầu vào.
Bên trong hàm:
Sử dụng vòng lặp for để lặp qua mảng gioHang.
Bên trong vòng lặp, sử dụng câu lệnh if để kiểm tra xem sản phẩm hiện có trong giỏ hàng có cùng tenSanPham với sản phẩm đang được thêm vào không.
Nếu tìm thấy sản phẩm trùng khớp, sử dụng câu lệnh if...else:
Nếu có, tăng soLuong của sản phẩm hiện có trong giỏ hàng bằng soLuong của sản phẩm đang thêm.
Nếu không, đẩy trực tiếp đối tượng sản phẩm mới vào mảng gioHang.
Nếu không tìm thấy sản phẩm trùng khớp sau khi lặp qua toàn bộ giỏ hàng, hãy đẩy đối tượng sản phẩm mới vào mảng gioHang.
Viết một hàm tên tinhTongTien nhận mảng gioHang làm tham số đầu vào.
Bên trong hàm:
Khởi tạo một biến tongTien bằng 0.
Sử dụng vòng lặp for để lặp qua mảng gioHang.
Bên trong vòng lặp, nhân giá của mặt hàng hiện tại với soLuong của nó và cộng vào biến tongTien.
Trả về giá trị tongTien.*/


let gioHang = [
    {
        tenSanPham: 'SanphamA',
        gia: 100000,
        soLuong: 20

    },
    {
        tenSanPham: 'SanphamB',
        gia: 20000,
        soLuong: 10

    },
    {
        tenSanPham: 'SanphamC',
        gia: 300000,
        soLuong: 5
    }
]
function themVaoGiohang(tenSanPham, gia, soLuong) {
    // gioHang.push({
    //     tenSanPham: tenSanPham,
    //     gia: gia,
    //     soLuong: soLuong
    // }
    let flag = false;
    for (let i = 0; i < gioHang.length; i++) {
        if (gioHang[i].tenSanPham === tenSanPham) {
            gioHang[i].soLuong += soLuong;
            flag = true;
            // tim dc i roi
        }
    }
    if (!flag) {
        gioHang.push({
            tenSanPham: tenSanPham,
            gia: gia,
            soLuong: soLuong
        })
    }
}
themVaoGiohang('SanphamD', 10000, 100);
//console.log(JSON.stringify(gioHang));
themVaoGiohang('SanphamA', 10000, 100);
//console.log(JSON.stringify(gioHang));

function tinhTongTienMotSanPham(sanpham) {
    // console.log(sanpham);
    return sanpham.gia * sanpham.soLuong;
}

function tinhtong(a, b) {
    return a + b;
}



function TinhTongTienTatCaSanPham(gioHang) {
    let tongTienTatCa = 0;
    for (let i = 0; i < gioHang.length; i++) {
        tongTienTatCa += tinhTongTienMotSanPham(gioHang[i]);
    }
    return tongTienTatCa;
}

console.log(TinhTongTienTatCaSanPham(gioHang));
console.log(TinhTongTienTatCaSanPham(gioHang));

function XoaSanpham(gioHang, tenSanPham) {
    let index = -1;
    for (let i = 0; i < gioHang.length; i++) {
        if (gioHang[i].tenSanPham === tenSanPham) {
            index=i;
            break;
        }
    }
    if(index>=0){
        gioHang.splice(index, 1)
    } else {
        console.log('san pham ko ton tai')
    }

}

XoaSanpham(gioHang, 'dfkdlfd');
XoaSanpham(gioHang, 'SanphamD');
console.log(JSON.stringify(gioHang));


