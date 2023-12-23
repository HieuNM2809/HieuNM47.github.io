
var inP = $(".input-field");
$(document).ready(function () {
    // Hiển thị loading khi trang được tải
    var containerLoading = $('.container-loading');
    var containerContent = $('.container-content');

    // Thực hiện gọi API bằng AJAX
    setTimeout(() => {
        containerLoading.hide();
        containerContent.show();
    }, 1000);
});

inP
    .on("blur", function () {
        if (!this.value) {
            $(this).parent(".f_row").removeClass("focus");
        } else {
            $(this).parent(".f_row").addClass("focus");
        }
    })
    .on("focus", function () {
        $(this).parent(".f_row").addClass("focus");
        $(".btn").removeClass("active");
        $(".f_row").removeClass("shake");
    });

$(".resetTag").click(function (e) {
    e.preventDefault();
    $(".formBox").addClass("level-forget").removeClass("level-reg");
});

$(".back").click(function (e) {
    e.preventDefault();
    $(".formBox").removeClass("level-forget").addClass("level-login");
});

$(".regTag").click(function (e) {
    e.preventDefault();
    $(".formBox").removeClass("level-reg-revers");
    $(".formBox").toggleClass("level-login").toggleClass("level-reg");
    if (!$(".formBox").hasClass("level-reg")) {
        $(".formBox").addClass("level-reg-revers");
    }
});
$(".btn-confirm").each(function () {
  
   
    $(this).on("click", function (e) {
        e.preventDefault();

        var userName = $('#username').val();
        var password = $('#password').val();

        var finp = $(this).parent("form").find("input");


        if (!finp.val() == 0) {
            console.log(userName, password);
            if (userName == 'admin' && password == "123456") {
                $(this).addClass("active");
                setTimeout(function () {
                    window.location.href = '/app-android/';
                }, 2000);
            }
        }

        inP.val("");

        $(".f_row").removeClass("shake focus");
        $(".btn").removeClass("active");

        if (inP.val() == 0) {
            inP.parent(".f_row").addClass("shake");
        }

        

        //inP.val('');
        //$('.f_row').removeClass('focus');
    });

    
    
});

