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
fillData('Kha', 'Kha', '../img/avatar.jpg', 'Front-end Developer');