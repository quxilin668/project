class detail{
    constructor(){
        //完成数据的渲染
        this.cont=document.querySelector("#detail_bag");
        console.log(this.cont);
        this.url="../json/goods2.json";
        this.init();
    }
    init(){
        var that = this;
        ajaxPost(this.url,function(data){
            that.data=JSON.parse(data);
            console.log(that.data)
            that.getDate();
        })
    }
    getDate(){
        this.goods=localStorage.getItem("shop") ? JSON.parse(localStorage.getItem("shop")) : [];
        console.log(this.goods);
        this.display();
    }
    setDate(callback){
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id==this.id){
                callback(i)
            }
        }
        localStorage.setItem("shop",JSON.stringify(this.goods));
    }
    display(){
        var str = "";
        for(var i=0;i<this.data.length;i++){
            for(var j=0;j<this.goods.length;j++){
                if(this.data[i].id==this.goods[j].id){
                    str+=`
                    <p>${this.data[i].name}</p>
                        <div class="sbox">
                            <img src="${this.data[i].src}" alt="" class="img">
                            <span></span>
                        </div>
                    <div class="bbox">
                        <img src="${this.data[i].src}" alt="">
                    </div>`
                }
            }
        }
        this.cont.innerHTML=str;
    }
}

new detail();


function Mag(){
    //获取元素
    this.sBox=document.querySelector(".sbox");
    console.log(this.sBox);
    this.bBox=document.querySelector(".bbox");
    this.span=document.querySelector(".sbox span");
    this.bImg=document.querySelector(".bbox img");
    this.addEvent();//绑定事件
    // this.init();
}
Mag.prototype.init=function(){
//右边大图的宽高除以右边框的宽高得到比例
    var w=this.bImg.offsetWidth/this.bBox.offsetWidth;
    var h=this.bImg.offsetHeight/this.bBox.offsetHeight;
//左边框的宽高除以比例得到span的宽高
    this.span.style.width=this.sBox.offsetWidth/w+"px";
    this.span.style.height=this.sBox.offsetHeight/h+"px";
}
Mag.prototype.addEvent=function(){
    var that = this;
    //进入
    this.sBox.addEventListener("mouseover",function(){
        that.over()
//补充布局：因为元素被display：none了，js获取不到隐藏的元素尺寸
        that.init()
    })
    //离开
    this.sBox.addEventListener("mouseout",function(){
        that.out()
    })
    //移动
    this.sBox.addEventListener("mousemove",function(eve){
        var e=eve || window.event;
        that.move(e);
    })
}
Mag.prototype.over=function(){
    this.span.style.display="block";
    this.bBox.style.display="block";
}
Mag.prototype.out=function(){
    this.span.style.display="none";
    this.span.style.display="none";
}
Mag.prototype.move=function(e){
//span跟随移动
var l=e.clientX-this.span.offsetWidth/2-this.sBox.offsetLeft;
var t=e.clientY-this.span.offsetHeight/2-this.sBox.offsetTop;
//边界限定
if(l<0){l=0}
if(l>this.sBox.offsetWidth-this.span.offsetWidth){l=this.sBox.offsetWidth-this.span.offsetWidth}
if(t<0){t=0}
if(t>this.sBox.offsetHeight-this.span.offsetHeight){t=this.sBox.offsetHeight-this.span.offsetHeight}
//计算比例
var x=l/(this.sBox.offsetWidth-this.span.offsetWidth);
var y=t/(this.sBox.offsetHeight-this.span.offsetHeight);

this.span.style.left=l+"px";
this.span.style.top=t+"px";
//移动大图
this.bImg.style.left=x*(this.bBox.offsetWidth-this.bImg.offsetWidth)+"px";
this.bImg.style.top=y*(this.bBox.offsetHeight-this.bImg.offsetHeight)+"px";


}

onload=function(){
    new Mag();
}


