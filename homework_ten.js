/*
1. Viet function tao ra 52 la bai
Function lon gop tu nhieu function nho
mang gia tri 2,3,4,J, Q, K, A
mang 2: co ro chuon bich
Vong lap 1:
tach 
tao la bai(truyen 1 so => tao ra 4 => Tao ra mang luu 52 la bai)
Duyet qua 2 lan tao ra 1 bo bai
2. Viet function chia bai function(nhansoluongnguoichoi){chia so luong cho moi nguoi/13 cay}
*/
// {
//     "nguoichoi1": ["2-Co", '3-Bich', ...]
//     "nguoichoi1": ["2-Co", '3-Bich', ...]
// }


function datTenLaBai(i) {
    if (i == 1) return 'At';
    if (i == 11) return 'J';
    if (i == 12) return 'Q';
    if (i == 13) return 'K';
    return i;
}

function makeCards() {

    const arr = [];
    const types = ['Co', 'Ro', 'Tep', 'Bich'];
    for (const type of types) {
        for (let i = 1; i < 14; i++) {
            arr.push(`${datTenLaBai(i)}-${type}`);
        }
    }
    return arr;
}

console.log(makeCards());

//Co bo bai 52 la thi index tu 0-51
//De random ra dc thi chay vong for tu 0-51. Voi moi lan lap thi tao ra 1 so bat ki trong pham vi 0-51
//Sau do se lay phan tu cua bo bai tai index vua moi random ra dc
//Cuoi cung push phan tu lay ra dc vao mang chua bo bai dc xao


function randomTheoKhoang(max, min) {
    return Math.floor(Math.random() * (max - min)) + min
}

function xaoBai(cards) {
    //let arr1 = makeCards();// co bo bai
    let arr2 = new Set(); // array luu tru bo bai duoc xao
    while (arr2.size < 52) {// add 52 phan tu vao set
        let bienRanDom = Math.floor(randomTheoKhoang(0, 52));
        let a = cards[bienRanDom];
        arr2.add(a);
    }

    return arr2;

}

console.log(xaoBai(makeCards()));
let cards=xaoBai(makeCards());

//Chay theo so nguoi choi la 4
//voi moi nguoi push vao 13 la

function chiaBai(cards, soNguoiChoi) {
    if(typeof soNguoiChoi ==='number' && soNguoiChoi>0 && soNguoiChoi<=4){
        let arrCards = Array.from(cards);
        let baiDaChiaObj = {};
        for(let i=0; i<soNguoiChoi;i++){
            let arr=[];
            for(let j=0; j<13; j++){
                let laBai = arrCards[j];
                arr.push(laBai);
                arrCards.splice(j,1);
            }
            let tenNguoiChoi = `nguoiChoi${i+1}`;
            baiDaChiaObj[tenNguoiChoi] = arr;
        }
        return baiDaChiaObj;
    }else{
        throw new Error("So nguoi choi khong hop le");
    }
}
try{
    console.log(JSON.stringify(chiaBai(cards,5)));
}catch(error){
    console.log("Chia bai ko thanh cong");
}