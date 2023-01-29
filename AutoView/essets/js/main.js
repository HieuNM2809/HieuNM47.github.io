$(document).ready(function () {

    // Phần bắt đầu
    $('#Main_Star').show();
    $('#Main_form').hide();
    $('#star').click(function () {
        $('#Main_Star').hide();
        $('#Main_form').show(500);
    });

});

        
   // xuất giá trị 
var setInterval_main;
function LuuThayDoi(){
    var Link1 = document.getElementById('Video1').value;
    
    var dem = 0;
    var dem_SLView = 0;
    var Giay = document.getElementById('txtEnd').value;

     setInterval_main = setInterval(function(){
                            if(dem == 0){
                                msgWindow1 = window.open(Link1 ,'window2','resizable=no,width=200,height=200');
                            }
                            dem++;
                            if(dem == Giay){
                                msgWindow1.close();
                                dem = 0;
                                dem_SLView++;
                            }
                            document.getElementById('XuatTime').innerText = dem;
                            document.getElementById('SoViewCayDc').innerText = dem_SLView;
                            
                        }, 1000);
}
function Stop() {
    msgWindow1.close();
    clearInterval(setInterval_main);
}
function Batdau() {
    document.getElementById('start').setAttribute('disabled', 'disabled');
}
function KetThuc() {
    $('#start').attr('disabled', false);
}

 
 
       
       
       
    
         
 
         
