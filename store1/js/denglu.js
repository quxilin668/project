var ouser = document.getElementById("user");
var opass = document.getElementById("pass");
var odenglu = document.querySelector(".denglu");
odenglu.onclick=function(){
    if((ouser.value=="admin"&&opass.value=="123")||(ouser.value=="qwe"&&opass.value=="456")){
        window.location.href="detail.html"
    }else{
        alert("登录失败");
    }
}