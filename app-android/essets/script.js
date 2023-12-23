const firebaseConfig = {
    apiKey: "AIzaSyBckkNHIvMoIgxIHt_3HOTlMcso2V2uN_Q",
    authDomain: "database-app-android-4c845.firebaseapp.com",
    databaseURL: "https://database-app-android-4c845-default-rtdb.firebaseio.com",
    projectId: "database-app-android-4c845",
    storageBucket: "database-app-android-4c845.appspot.com",
    messagingSenderId: "596263588445",
    appId: "1:596263588445:web:ef8e05eee6120f71eeb3b4"
};
// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);

// Lấy reference đến Firebase Realtime Database
var database = firebase.database();

var temperatureKey = "setting";
database.ref(temperatureKey).on('value', function (snapshot) {
    var data = snapshot.val();

    console.log('data', data);
    applyButtonStates(data);
});
let audioAlert = {};
let audioSOS  = {};

$(document).ready(function () {
    // Hiển thị loading khi trang được tải
    var containerLoading = $('.container-loading');
    var containerContent = $('.container-content');

    // Thực hiện gọi API bằng AJAX
    setTimeout(() => {
        $.ajax({
            url: 'https://database-app-android-4c845-default-rtdb.firebaseio.com/setting.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {

                applyButtonStates(data);

                // Ẩn loading khi dữ liệu đã được tải
                containerLoading.hide();
                containerContent.show();
            },
            error: function (error) {
                // Xử lý lỗi
                console.error('Error:', error);
                Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: "Kết nối database thất bại, vui lòng thử lại !",
                    showConfirmButton: false,
                    timer: 1500
                });

                // Ẩn loading khi có lỗi xảy ra
                containerLoading.hide();
                containerContent.show();
            }
        });
    }, 1000);
});
function toggleButton(button) {
    // Kiểm tra xem button có lớp bật hay không không
    var isOn = button.classList.contains('turn-on');
    var id = $('#' + button.id);
    var message = "Hệ thống đang bảo trì, vui lòng thử lại sau!";

    // bật 
    if (!isOn) {
        button.classList.add('turn-on');
        id.attr("value", true);
        message = "Bật cảnh báo " + id.attr("text-title") + " thành công";
    } else {
        button.classList.remove('turn-on');
        id.attr("value", false);
        message = "Tắt cảnh báo " + id.attr("text-title") + " thành công";
    }
    getAllValuesAndCallApi(message);
}
function applyButtonStates(data) {
    // Duyệt qua các key trong data và áp dụng trạng thái lên các button
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            var buttonId = '#' + key;
            var button = $(buttonId);

            // Kiểm tra giá trị của key và thêm/loại bỏ lớp turn-on
            if (data[key] === "true") {
                button.addClass('turn-on');
            } else {
                button.removeClass('turn-on');
            }
            if (key === "temperature") {
                $('#temperature').html(`NHIỆT ĐỘ: ${data.temperature} độ C`);
            }
            $('#' + key).attr('value', data[key]);

            //bật tắt âm thanh
            if (key === "sos" && data[key] == "true") {
                playAudio(audioSOS, './mp3/sos.mp3');
            }else if (key === "sos" && data[key] == "false") {
                stopAudio(audioSOS);
            }
            if (key === "alert" && data[key] == "true") {
                playAudio(audioAlert, './mp3/alert.mp3');
            }else if (key === "alert" && data[key] == "false") {
                stopAudio(audioAlert);
            }
        }
    }
}
function getAllValues() {
    var values = {};

    // Duyệt qua mảng các ID và lấy giá trị từ các thẻ tương ứng
    var ids = [
        'area1', 'area2', 'area3', 'area4', 'area5',
        'area6', 'area7', 'area8', 'sos', 'alert', 'temperature'
    ];

    for (var i = 0; i < ids.length; i++) {
        var id = ids[i];
        var value = $('#' + id).attr("value");
        values[id] = value;
    }

    return values;
}
function getAllValuesAndCallApi(message) {
    // Lấy giá trị từ tất cả các thẻ button
    var values = getAllValues();

    // Gọi API để cập nhật dữ liệu trên server
    $.ajax({
        url: 'https://database-app-android-4c845-default-rtdb.firebaseio.com/setting.json',
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(values),
        success: function (response) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: message,
                showConfirmButton: false,
                timer: 1500
            });
        },
        error: function (error) {
            console.error('Error updating data:', error);
            Swal.fire({
                position: "center",
                icon: "warning",
                title: JSON.stringify(error),
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
}

function playAudio(audioObject, linkMp3) {
    if (!audioObject.audio) {
        audioObject.audio = new Audio(linkMp3);
        audioObject.audio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    audioObject.audio.play();
}

function stopAudio(audioObject) {
    console.log(audioObject);
    if (audioObject.audio && !audioObject.audio.paused) {
        audioObject.audio.pause();
        audioObject.audio.currentTime = 0;
    }
}
