
// Phần Like Ở  sản Phẩm 
// Biến Toàn CỤC
var flag = true;
function Like_Product() {
    var Like = document.getElementsByClassName('home__product-item-like')[0];
    if (flag) {
        Like.innerHTML = '<i class="home__product-item-like-button fas fa-heart"></i>'
        flag = false;
    } else {
        Like.innerHTML = '<i class="fas fa-heart"></i>'
        flag = true;
    }
}

// ============================= Phần Form đăng kí

var user_lick1_see = document.getElementById('Ege_1').onclick = See_PassWord_1;
var user_lick2_see = document.getElementById('Ege_2').addEventListener("click", See_PassWord_2);
var user_lick_Security_passWord = document.querySelector('.modal__body-form-input-see').onkeyup = Security_passWord;
var Kt_user_Nhap_TK = document.getElementById('kientraNguoiDungNhap').onblur = CheckTK;
var Kt_user_Nhap_user = document.getElementById('NguoiDungNhapUser').onblur = CheckUser;
var Kt_user_Nhap_Gmail = document.getElementById('NguoiDungNhapGmail').onblur = CheckGmail;
var Kt_user_Nhap_Xn_Gmail = document.getElementsByClassName('modal__body-form-input-see')[1].onblur = CheckXnMatKhau;



var SEEN = true;
function See_PassWord_1() {
    if (SEEN) {
        document.getElementsByClassName('modal__body-form-input-see')[0].setAttribute("type", "text");
        document.getElementById('Ege_1').innerHTML = '<i class="fas fa-eye-slash"></i>';
        SEEN = false;
    } else {
        document.getElementsByClassName('modal__body-form-input-see')[0].setAttribute("type", "password");
        document.getElementById('Ege_1').innerHTML = '<i  class="fas fa-eye"></i>';
        SEEN = true;
    }
}

var SEEN_2 = true;
function See_PassWord_2() {
    if (SEEN_2) {
        document.getElementsByClassName('modal__body-form-input-see')[1].setAttribute("type", "text");
        document.getElementById('Ege_2').innerHTML = '<i class="fas fa-eye-slash"></i>';
        SEEN_2 = false;
    } else {
        document.getElementsByClassName('modal__body-form-input-see')[1].setAttribute("type", "password");
        document.getElementById('Ege_2').innerHTML = '<i  class="fas fa-eye"></i>';
        SEEN_2 = true;
    }
}

// Xét Mật khẩu mạnh, yếu, Tb   
function Security_passWord() {
    var Security = document.getElementsByClassName('modal__body-form-input-see')[0].value.length;
    var tamp ="";
    if (Security == "") {
        tamp = "";
    }
    else if (Security >= 5 &&Security <= 10 ) {
        tamp = "Good";
    }
    else if (Security > 10) {
        tamp = "Very Good";    
    }
    document.getElementById("Securitys").innerHTML = tamp;
    
}

// Kiển tra ng dùng nhập
function CheckTK() {
    var values = document.getElementById('kientraNguoiDungNhap').value.length;
    var tamp ="";
    if (values == "") {
        tamp = "Hãy Nhập Tài Khoản";
        document.getElementById('kientraNguoiDungNhap').style.border ='1px solid red';
    }
    else if (values <6 ) {
        tamp = "Hãy Nhập số ký tự trên 6";
        document.getElementById('kientraNguoiDungNhap').style.border ='1px solid red';
    } else {
        document.getElementById('kientraNguoiDungNhap').style.border ='1px solid var(--border-color)';
    }
    document.getElementById('XuatThongBaoTK').innerHTML = tamp;  
}
function CheckUser() {
    var values = document.getElementById('NguoiDungNhapUser').value.length;
    var tamp ="";
    if (values == "") {
        tamp = "Hãy Nhập User";
        document.getElementById('NguoiDungNhapUser').style.border ='1px solid red';
    }
    else if (values <6 ) {
        tamp = "Hãy Nhập số ký tự trên 6";
        document.getElementById('NguoiDungNhapUser').style.border ='1px solid red';
    } else {
        document.getElementById('NguoiDungNhapUser').style.border ='1px solid var(--border-color)';
    }
    document.getElementById('XuatThongBaoUser').innerHTML = tamp;  
}
function CheckGmail() {
    var values = document.getElementById('NguoiDungNhapGmail').value;

    var flag = false;
    for (var values of values) {
        if (values == '@') {
            flag = true;
        }
    }
    var tamp ="";
    if (values == "") {
        tamp = "Hãy Nhập Gmail";
        document.getElementById('NguoiDungNhapGmail').style.border ='1px solid red';
    }else if ( flag == false) {
        tamp = "Hãy Nhập Đuôi @gmail.com";
        document.getElementById('NguoiDungNhapGmail').style.border ='1px solid red';
    }
    else  {
        document.getElementById('NguoiDungNhapGmail').style.border ='1px solid var(--border-color)';
    }

    document.getElementById('XuatThongBaoGmail').innerHTML = tamp;  

}
function CheckXnMatKhau() {
    var values_mk = document.getElementsByClassName('modal__body-form-input-see')[0].value;
    var values_Xn_mk = document.getElementsByClassName('modal__body-form-input-see')[1].value;

    var tamp ="";
    if (values_mk != values_Xn_mk) {
        tamp = " Xác nhận Mật khẩu sai!!!";
        document.getElementsByClassName('modal__body-form-input-see')[1].style.border ='1px solid red';
    }else  {
        document.getElementsByClassName('modal__body-form-input-see')[1].style.border ='1px solid var(--border-color)';
    }
   
    document.getElementById('XuatThongBaoXnMatKhau').innerHTML = tamp;  
}

// ===========================================Phần Nhấn để hiện modal 
// 
var nmodalDangNhap = document.getElementById('modalDangNhap');
var modalDangKi = document.getElementById('modalDangKi');


document.getElementById('Registration').addEventListener('click', Onclick_Registration);
function Onclick_Registration() {
    modalDangKi.setAttribute('style', 'display:flex;');
}


// Onclick bên Jquery
$('#Login').click(Onclick_Login);
function Onclick_Login() {
    nmodalDangNhap.setAttribute('style', 'display:flex;');
}
// nút nhấn trở lại :Ẩn bên đăng kí 
document.getElementById('btn_trolai_Registration').addEventListener('click', Onclick_Login_none);
function Onclick_Login_none() {
   modalDangKi.setAttribute('style', 'display:none;');
}


// nút nhấn trở lại :Ẩn bên đăng nhập
document.getElementById('btn_trolai_login').addEventListener('click',Onclick_Registration_none);
function Onclick_Registration_none() {
    nmodalDangNhap.setAttribute('style', 'display:none;');
}
//========= Chuyển sang đăng nhập
document.getElementById('ChuyenSangDangNhap').addEventListener('click',ChuyenSangDangNhap);
function ChuyenSangDangNhap() {
   modalDangKi.setAttribute('style', 'display:none;');
   nmodalDangNhap.setAttribute('style', 'display:flex;');
}
//========= Chuyển sang đăng kí
document.getElementById('ChuyenSangDangKi').addEventListener('click',ChuyenSangDangKi);
function ChuyenSangDangKi() {
   nmodalDangNhap.setAttribute('style', 'display:none;');
   modalDangKi.setAttribute('style', 'display:flex;');
}

//====================================== header_ thông báo
$('#header_thongbao').click(Onclick_thongbao);
function Onclick_thongbao() {
    document.getElementById('header_thongbao').setAttribute('class', 'header__thongbao-item header__thongbao-item--viewed');
}





