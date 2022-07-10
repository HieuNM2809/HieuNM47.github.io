// Biến toan cục
var ChuoiHinhAnh = [
    'https://cf.shopee.vn/file/96065e2f34221cef5ff97d5fe0c0c036_tn',
    'https://cf.shopee.vn/file/7004551b5e65e49b7326a35ab9d4ded0_tn',
    'https://cf.shopee.vn/file/9dad7eff4b09c402e908274ee5fed8ca_tn',
    'https://cf.shopee.vn/file/72e51ef544b25047c49fcb9d53318f84',
    'https://cf.shopee.vn/file/72e51ef544b25047c49fcb9d53318f84',
    'https://cf.shopee.vn/file/72e51ef544b25047c49fcb9d53318f84',
    'https://cf.shopee.vn/file/72e51ef544b25047c49fcb9d53318f84',
    'https://cf.shopee.vn/file/72e51ef544b25047c49fcb9d53318f84',
    'https://cf.shopee.vn/file/72e51ef544b25047c49fcb9d53318f84',
    'https://cf.shopee.vn/file/72e51ef544b25047c49fcb9d53318f84',


];



function BienSanPham(i) {
    var HinhAnh = this.ChuoiHinhAnh; 
       return '<div class="col l-2-4 m-4 c-6">' +
        '<div class="home__product-item">' +
        '<a href="./product_information.html"> ' +
        '<div class="home__product-item-img"  style="background-image: url('+ HinhAnh[i] + ');">' +
        '</div>' +
        '<h4 class="home__product-item-name">Điện thoại Samsung Galaxy A50s Điện thoại Samsung Galaxy A50s</h4>' +
        '<div class="home__product-item-price">' +
        '<div class="home__product-item-price-old">1.200.000đ</div>' +
        '<div class="home__product-item-price-current">999.000đ</div>' +
        '</div>' +

        '<div class="home__product-item-action">' +
        '<span class="home__product-item-like">' +
        '<!-- LIKE THÌ THÊM Class: home__product-item-like-button -->' +
        '<i class="home__product-item-like-button fas fa-heart"></i>' +
        '</span>' +
        '<div class="home__product-item-rating">' +

        '<!--  CHO SAO Class: home__product-item-rating-gold -->' +
        '<i class="fas fa-star home__product-item-rating-gold "></i>' +
        '<i class="fas fa-star home__product-item-rating-gold "></i>' +
        '<i class="fas fa-star home__product-item-rating-gold "></i>' +
        '<i class="fas fa-star home__product-item-rating-gold "></i>' +
        '<i class="fas fa-star "></i>' +
        '</div>' +
        '<span class="home__product-item-sold">Đã bán 88</span>' +
        '</div>' +
        '</a>' +
        '<div class="home__product-item-origin">' +
        '<a href="" class="home__product-item-brand">Hiếu Minh </a>' +
        '<span class="home__product-item-made">Việt Nam</span>' +
        '</div>' +
        '<div class="home__product-item-favourite">' +
        '<i class="home__product-item-favourite-icon fas fa-check"></i>' +
        '<span class="home__product-item-favourite-text">Yêu thích</span>' +
        '</div>' +
        '<div class="home__product-item-sale-of">' +
        '<div class="home__product-item-sale-of-number">40%</div>' +
        '<div class="home__product-item-sale-of-text">GIẢM</div>' +
        '</div>' +

            
        '</div>' +
        '</div>';
    
    
 

}

// Xuất sản phẩm
function XuatSanPham() {
    var SP = ""; 
    for (var i = 0; i < 10; i++){
        SP += BienSanPham(i);
    }
   document.getElementById('Product').innerHTML = SP;
}



// Để  hàm muốn onload
function Main() {
    XuatSanPham();
}
