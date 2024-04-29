/*Bài tập 3: Phân trang dữ liệu
Tạo một mảng tên là duLieu để lưu trữ một lượng lớn dữ liệu (ví dụ: danh sách sản phẩm, bài viết, v.v.).
Viết một hàm tên phanTrang nhận mảng dữ liệu duLieu, số lượng mục mỗi trang soLuongBanGhiMoiTrang, và số trang hiện tại soTrangHienTai làm tham số đầu vào.
Bên trong hàm:
Tính toán vị trí bắt đầu của trang hiện tại (viTriBatDau) bằng cách nhân soTrangHienTai với soLuongBanGhiMoiTrang.
Tính toán vị trí kết thúc của trang hiện tại (viTriKetThuc) bằng cách cộng viTriBatDau với soLuongBanGhiMoiTrang.
Sử dụng vòng lặp for để lặp qua dữ liệu từ viTriBatDau đến viTriKetThuc.
Bên trong vòng lặp, hiển thị dữ liệu của từng mục (ví dụ: sử dụng console.log hoặc in ra HTML).
Trả về mảng dữ liệu của trang hiện tại.*/



let duLieu = [
    {
        id: 1,
        ten: 'BanGhi1'
    },
    {
        id: 2,
        ten: 'BanGhi2'
    },
    {
        id: 3,
        ten: 'BanGhi3'
    },
    {
        id: 4,
        ten: 'BanGhi4'
    },
    {
        id: 5,
        ten: 'BanGhi5'
    },
    {
        id: 6,
        ten: 'BanGhi6'
    },
    {
        id: 7,
        ten: 'BanGhi7'
    },
    {
        id: 8,
        ten: 'BanGhi8'
    },
    {
        id: 9,
        ten: 'BanGhi9'
    }
]

//const itemPerPage = 5; trang: 1,2,3,4,5
/**
 * 
 * tongSoTrang = ceil(length/itemPerPage)
 * (0-4) 
 * (5,9)
 * (10, 14)
 * 
 * kethuc: = trang*5 - 1;
 * batdau: trang*5 - 5;
 * in du lieu theo trang: lap i = batdau; i<= kethuc -> print out ket qua
 * sotrang*5 -1;
 * sotrang*5 -1;
 * sotrang*5 -1;
 */

function phanTrang(duLieu, soLuongBanGhiMoiTrang, soTrangHienTai) {
    let duLieuTrang = [];
    let viTriBatDau;
    let viTriKetThuc;

    viTriBatDau = soTrangHienTai * soLuongBanGhiMoiTrang - soLuongBanGhiMoiTrang;
    viTriKetThuc = soTrangHienTai * soLuongBanGhiMoiTrang - 1;
    if (viTriKetThuc > duLieu.length -1) {
        viTriKetThuc = duLieu.length -1;
    }
    for (let i = viTriBatDau; i <= viTriKetThuc; i++) {

        duLieuTrang.push(duLieu[i]);

    }
    return duLieuTrang;
}

function phanTrangTong(duLieu, soLuongBanGhiMoiTrang) {
    let tongSoTrang = Math.ceil(duLieu.length / soLuongBanGhiMoiTrang);
    for(let i = 1; i <= tongSoTrang; i++) {
        console.log("Trang: " + i);
        let duLieuTrang = phanTrang(duLieu, soLuongBanGhiMoiTrang, i);
        console.log(JSON.stringify(duLieuTrang));
    }
}

phanTrangTong(duLieu, 4);