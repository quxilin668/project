    //随机验证码
    var code=vericode();
    var obigcode=document.getElementById("bigcode");
    var oa = document.getElementById("a");
    obigcode.innerHTML=code;
    obigcode.style.color=randomColor();
    //验证验证码
    var overi = document.getElementById("veri");
        overi.onblur=function(){
        // console.log(that.oinput2[5].value)
        // console.log(code)
        if(overi.value==""){
            obigcode.innerHTML="验证码不能为空！"
            return;
        }
        if(overi.value==code){
            obigcode.innerHTML="";
        }else{
            obigcode.innerHTML="验证码错误";
        }
        }
    
    
    
    
    
    //点击切换验证码
    this.oa.onclick=function(){
     var code=vericode();
     obigcode.innerHTML=code;
     obigcode.style.color=randomColor();
    window.code=code;
    return;
    }
    
    
        // 邮箱：Internet
        // 正常邮箱：liy123ang@1000phone.com
        // var reg = /^\w{3,10}@[0-9a-z]{2,10}\.[a-z]{2,5}$/i;
        // var str = "liy123ang@1000phone.com";
        // console.log(reg.test(str));
        var otel = document.getElementById("tel");
        var opass1 = document.getElementById("pass1");
        var opass2 = document.getElementById("pass2");
        var oyou = document.getElementById("you");
    
        oyou.onblur=function(){
            var reg = /^\w{3,10}@[0-9a-z]{2,10}\.[a-z]{2,5}$/i;
            if(reg.test(this.value)){
                this.nextElementSibling.innerHTML="成功";
            }else{
                this.nextElementSibling.innerHTML="不是邮箱号";
            }
        }
    
        otel.onblur=function(){
            var reg=/^1[1-9]\d{9}$/;
            if(reg.test(this.value)){
                 this.nextElementSibling.innerHTML="成功";
                 tel=1;
            }else{
                this.nextElementSibling.innerHTML="不是用户名";
                tel=0;
            }
        }
    
        opass1.onblur = function(){
              var a=b=c=0;
    //			长度验证
              var lengthReg = /^.{6,18}$/;
              if(!lengthReg.test(this.value)){
                  this.nextElementSibling.innerHTML = "长度不符";
                  passOnOff = false
                  return;
              }
    //			是否存在数字
              var numReg = /\d/;
              if(numReg.test(this.value)){
                  a = 1;
              }
    //			是否存在字母
              var azReg = /[a-zA-Z]/;
              if(azReg.test(this.value)){
                  b = 1;
              }
    //			是否存在特殊字符
              var tsReg = /[\W_]/;
              if(tsReg.test(this.value)){
                  c = 1;
              }
              
              switch(a+b+c){
                  case 1:
                      this.nextElementSibling.innerHTML = "简单";break;
                  case 2:
                      this.nextElementSibling.innerHTML = "一般";break;
                  case 3:
                      this.nextElementSibling.innerHTML = "困难";break;
              }
              
              passOnOff = true;
              
    //			验证是否一致
              if(opass2.value != ""){
                  if(opass2.value == this.value){
                      opass2.nextElementSibling.innerHTML = "一致"				
                      pass2OnOff = true
                  }else{
                      opass2.nextElementSibling.innerHTML = "不一致"				
                      pass2OnOff = false
                  }
              }
          }
    //		跟第一次输入密码一致
    opass2.onblur = function(){
              if(this.value === opass1.value){
                  this.nextElementSibling.innerHTML = "一致"
                  pass2OnOff = true
              }else{
                  this.nextElementSibling.innerHTML = "不一致"
                  pass2OnOff = false
              }
          }
    