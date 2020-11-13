const fillData = (tieuDeText, hoTenText, avatarImgLink, ChucDanhText) => {
    let tieuDe = document.getElementById('tieuDe');
    tieuDe.innerHTML = tieuDeText;
    //set hoTen
    let hoTen = document.getElementsByClassName('hoTen');
    for (let ht of hoTen) {
        ht.innerHTML = hoTenText;
    }
    //set avatar
    let avatar = document.getElementById('avatar');
    avatar.style.backgroundImage = `url(${avatarImgLink})`;
    // set ChucDanh
    let ChucDanh = document.getElementsByClassName('ChucDanh');
    for (let cd of ChucDanh) {
        cd.innerHTML = ChucDanhText;
    }
}


//  fillData(//Tên title , // Họ tên , //link Img avatar , // Chuc Danh  );
fillData(
    `<img src="./img/LogoCyberSoft.svg" alt="LogoCyberSoft.svg"><div>Kha</div>`,
    'Nguyễn Ngọc Kha',
    '../img/avatar.jpg',
    'Front-end Developer');



