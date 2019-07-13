class daohang{
    constructor(){
        this.oblock=document.querySelector(".block");
        this.obag=document.querySelectorAll(".header_bag");
        this.oli=document.querySelectorAll(".r ul li");
        for(let i=0;i<this.oli.length;i++){
            var that = this;
            this.oli[i].onmouseover=function(){
                that.obag[i].style.display="block";
            }
            this.oli[i].onmouseout=function(){
                that.obag[i].style.display="none";
            }
        }
    }
}
new daohang();

class qu{
    constructor(){
        // this.nav=document.getElementsByClassName("nav-c")[0];
        // console.log(this.nav)
        // this.op=this.nav.getElementsByClassName("p1")[0];
        // this.oa=this.op.getElementsByTagName("a");
        this.oa=document.querySelectorAll(".nav-c .p1 a");
        this.input=document.querySelector(".p2 input");
        // console.log(this.input);
        var arr=["请输入您要搜索的商品关键字",
            "请输入您要搜索的店铺关键字"]
        var that = this;
        for(let i=0;i<this.oa.length;i++){
            this.oa[i].onclick=function(){
                for(let j=0;j<that.oa.length;j++){
                    that.oa[j].className="";
                }
                that.oa[i].className="current";
                that.input.placeholder=arr[i];
            }
        }
    }
}
new qu();


class shuju{
    constructor(){
        this.url="http://localhost/store/json/goods.json";        
        this.ul1=document.getElementById("reai_id");
        this.ul2=document.getElementById("love_id");
        this.init();
        this.addEvent();
    }
    init(){
        var that = this;
        ajaxPost(this.url,function(data){
            that.data=JSON.parse(data);
            that.display1();
            that.display2();
        })
    }
    addEvent(){
        let that=this;
        $('#reai_id').on('click','li',function(){
            // console.log(1)
            that.id = $(this).attr('index');
            that.setData();
        })
    }
    
    setData(){
        console.log(this.id);
        this.goods = localStorage.getItem("shop");
        // console.log(this.goods);
            this.goods = [{
                id:this.id,
                num:1
            }];
        // 最后将数据设置回去
        // console.log(this.goods);
        localStorage.setItem("shop",JSON.stringify(this.goods))
        location.href="http://localhost/store1/html/detail.html"

    }


    display1(){
        var str="";
        for(var i=0;i<(this.data.length/2);i++){
            // console.log(this.data[i].id)
            str+=`<a>
            <li index="${this.data[i].id}" class="oli">
            <img src="${this.data[i].src}" alt="">
            <p>${this.data[i].name}</p>
            <span>商城价:<h3>${this.data[i].price}</h3></span>
        </li></a>`
        // console.log(str);
        }
        this.ul1.innerHTML=str;
        }

        display2(){
            var str="";
            for(var i=6;i<this.data.length;i++){
                // console.log(this.data[i].id)
                str +=`<a>
                <li index="${this.data[i].id}" class="oli">
                <img src="${this.data[i].src}" alt="">
                <p>${this.data[i].name}</p>
                <span>商城价:<h3>${this.data[i].price}</h3></span>
                </li>
                </a>`
            // console.log(str)
            }
            this.ul2.innerHTML=str;
        }
}
new shuju();

class qiehuan{
    constructor(){
        this.oli=document.querySelectorAll('.title_hot ul li');
        this.reai=document.querySelector(".reai");
        this.xihuan=document.querySelector(".xihuan");
        for(var i=0;i<this.oli.length;i++){
            var that = this;
            this.oli[i].onmouseover=function(){
                that.index=this.getAttribute("index");
                    if(that.index==1){
                        that.reai.style.display="block";
                        that.xihuan.style.display="none";
                    }else{
                        that.reai.style.display="none";
                        that.xihuan.style.display="block";
                    }
            }
        }
    }
}
new qiehuan();

$(".btns").children("li").click(function(){
    var index=$(this).index();
    var iNowFloor=$(".floor").eq(index);
    var t=iNowFloor.offset().top;
    $("html").stop().animate({
        scrollTop:t
    })
})



