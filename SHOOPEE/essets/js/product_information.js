var mangSanPhamFull = [
    'https://cdn.nguyenkimmall.com/images/thumbnails/370/370/detailed/629/10044940_DTDD_SAMSUNG_SM-A715FDS-128GB-DEN_01_96en-r2.jpg',
    'https://cdn.nguyenkimmall.com/images/thumbnails/370/370/detailed/629/10044940_DTDD_SAMSUNG_SM-A715FDS-128GB-DEN_02_6xcm-yk.jpg',
    'https://cdn.nguyenkimmall.com/images/thumbnails/370/370/detailed/629/10044940_DTDD_SAMSUNG_SM-A715FDS-128GB-DEN_03_0g3s-dg.jpg',
    'https://cdn.nguyenkimmall.com/images/thumbnails/370/370/detailed/629/10044940_DTDD_SAMSUNG_SM-A715FDS-128GB-DEN_04_at43-cs.jpg',
    'https://cdn.nguyenkimmall.com/images/thumbnails/370/370/detailed/629/10044940_DTDD_SAMSUNG_SM-A715FDS-128GB-DEN_05_s3lx-2s.jpg'
];



function product_active(value) {
    var x = document.getElementsByClassName('container__list-iphone-item');
    var Picture_full = document.getElementsByClassName('container__img-full')[0];
    if (value == 1) {
        x[0].setAttribute('class', 'container__list-iphone-item container__list-iphone-item-active');
        Picture_full.setAttribute('src',mangSanPhamFull[0]);
        x[1].setAttribute('class', 'container__list-iphone-item ');
        x[2].setAttribute('class','container__list-iphone-item ');
        x[3].setAttribute('class','container__list-iphone-item ');
        x[4].setAttribute('class','container__list-iphone-item ');  
    }
    else if (value == 2) {
        x[0].setAttribute('class', 'container__list-iphone-item');
        x[1].setAttribute('class', 'container__list-iphone-item  container__list-iphone-item-active');
        Picture_full.setAttribute('src',mangSanPhamFull[1]);
        x[2].setAttribute('class','container__list-iphone-item ');
        x[3].setAttribute('class','container__list-iphone-item ');
        x[4].setAttribute('class','container__list-iphone-item ');  
    }
    else if (value == 3) {
        x[0].setAttribute('class', 'container__list-iphone-item ');
        x[1].setAttribute('class', 'container__list-iphone-item ');
        x[2].setAttribute('class', 'container__list-iphone-item container__list-iphone-item-active');
        Picture_full.setAttribute('src',mangSanPhamFull[2]);
        x[3].setAttribute('class','container__list-iphone-item ');
        x[4].setAttribute('class','container__list-iphone-item ');  
    }
   else if (value == 4) {
        x[0].setAttribute('class', 'container__list-iphone-item ');
        x[1].setAttribute('class', 'container__list-iphone-item ');
        x[2].setAttribute('class','container__list-iphone-item ');
        x[3].setAttribute('class', 'container__list-iphone-item container__list-iphone-item-active');
        Picture_full.setAttribute('src',mangSanPhamFull[3]);
        x[4].setAttribute('class','container__list-iphone-item ');  
    }
    else if (value == 5) {
        x[0].setAttribute('class', 'container__list-iphone-item ');
        x[1].setAttribute('class', 'container__list-iphone-item ');
        x[2].setAttribute('class','container__list-iphone-item ');
        x[3].setAttribute('class','container__list-iphone-item ');
        x[4].setAttribute('class', 'container__list-iphone-item container__list-iphone-item-active');  
        Picture_full.setAttribute('src',mangSanPhamFull[4]);
        
    }
}