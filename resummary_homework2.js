/*Bài tập 2: Cơ sở dữ liệu phim
Tạo một mảng tên là phim để lưu trữ các đối tượng đại diện cho phim. Mỗi đối tượng nên có các thuộc tính như tieuDe (chuỗi), theLoai (chuỗi), namSanXuat (số) và danhGia (số từ 0 đến 5).
Viết một hàm tên timKiemPhimTheoTieuDe nhận tiêu đề phim (chuỗi) làm tham số đầu vào.
Bên trong hàm:
Sử dụng vòng lặp for để lặp qua mảng phim.
Bên trong vòng lặp, sử dụng câu lệnh if để kiểm tra xem tieuDe của phim
Viết một hàm tên locPhimTheoTheLoai nhận thể loại (chuỗi) làm tham số đầu vào.
Bên trong hàm:
Tạo một mảng mới rỗng tên là phimTheoTheLoai.
Sử dụng vòng lặp for để lặp qua mảng phim.
Bên trong vòng lặp, sử dụng câu lệnh if để kiểm tra xem theLoai của phim hiện tại có khớp với thể loại được nhập vào hay không.
Nếu có, thêm phim hiện tại vào mảng phimTheoTheLoai.
Trả về mảng phimTheoTheLoai.
Viết một hàm tên tinhDiemTrungBinhTheoTheLoai nhận mảng phim làm tham số đầu vào.
Bên trong hàm:
Tạo một đối tượng tên là diemTrungBinhTheoTheLoai để lưu trữ điểm trung bình cho từng thể loại.
Sử dụng vòng lặp for để lặp qua mảng phim.
Bên trong vòng lặp:
Sử dụng câu lệnh if để kiểm tra xem thể loại hiện tại có tồn tại trong diemTrungBinhTheoTheLoai hay không.
Nếu có, cộng điểm danhGia của phim hiện tại vào điểm danhGia đã có cho thể loại đó trong diemTrungBinhTheoTheLoai.
Nếu không, tạo một thuộc tính mới trong diemTrungBinhTheoTheLoai cho thể loại hiện tại và đặt giá trị bằng danhGia của phim hiện tại.
Sau vòng lặp, lặp qua đối tượng diemTrungBinhTheoTheLoai.
Bên trong vòng lặp:
Chia giá trị (tổng điểm) cho số lượng phim thuộc thể loại đó để lấy điểm trung bình.
In ra tên thể loại và điểm trung bình của nó bằng cách sử dụng console.log hoặc phương thức tương tự*/

let phim = [
    {
        tieuDe: 'PhimA',
        theLoai: 'PhimNgan',
        namSanXuat: 2002,
        danhGia: 4

    },
    {
        tieuDe: 'Phimb',
        theLoai: 'PhimDaiTap',
        namSanXuat: 2003,
        danhGia: 4

    },
    {
        tieuDe: 'Phimc',
        theLoai: 'PhimTaiLieu',
        namSanXuat: 2023,
        danhGia: 4

    },
]

function timKiemPhimTheoTieuDe(phim, tieuDe) {
    for (let i = 0; i < phim.length; i++) {
        if (phim[i].tieuDe == tieuDe) {
            console.log(phim[i].tieuDe);
        }
    }
}

function locPhimTheoTheLoai(phim, theLoai) {
    let phimTheoTheLoai = [];
    for (let i = 0; i < phim.length; i++) {
        if (phim[i].theLoai == theLoai) {
            console.log(phim[i].theLoai);
            phimTheoTheLoai.push(phim[i]);
        }
    }
    return phimTheoTheLoai;
}

function diemTrungBinhTheoTheLoai(phim, theLoai, danhGia) {
    let tongDanhGia=0;
    let diemTrungBinh=0;
    for (let i = 0; i < length; i++) {
        if(phim[i].theLoai==theLoai){
            tongDanhGia+=danhgia;
        }

    }
    diemTrungBinh=tongDanhGia/phim.length;
    return diemTrungBinh;
}
function tinhDiemTrungBinhTheoTheLoai(phim) {
    for (let i = 0; i < phim.length; i++) {
        let diemTrungBinhTheoTheLoai = diemTrungBinhTheoTheLoai(phim[i], phim[i].theLoai,phim[i].danhGia);
        // gan mot gia tri diem trung binh vao mot doi tuong hoc sinh
        phim[i].diemTrungBinh= diemTrungBinhTheoTheLoai; 
    }


}