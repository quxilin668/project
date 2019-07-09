// 随机数
function random(a,b){
    return Math.round(Math.random()*(a-b)+b)
}
//随机颜色rgb
// function randomColor(){
//     return `rgb(${random(0,255)},${random(0,255)},${random(0,255)});`;
// }
//随机颜色16进制
function randomColor(){
    var r=random(0,255).toString(16);
    var g=random(0,255).toString(16);
    var b=random(0,255).toString(16);
    return "#"+createZero(r)+createZero(g)+createZero(b);
}
function createZero(n){
    if(n.length<2){
        return n="0"+n
    }else{
        return n;
    }
}

//随机验证码
function vericode(){
    var str="";
    for(var i=0;i<4;i++){
        str+=String.fromCharCode(random(65,90));//A-Z
        str+=String.fromCharCode(random(97,122));//a-z
        str+=String.fromCharCode(random(48,57));//0-9
    }
    //让字母与数字等可能取到
       var s="";
        for(var i=0;i<4;i++){
            s+=str[random(0,str.length-1)]
        }
        return s;
} 
