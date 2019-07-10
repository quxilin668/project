class detail{
    constructor(){
        //完成数据的渲染
        this.cont=document.querySelector("#detail_bag");
        console.log(this.cont);
        this.url="../json/goods.json";
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
        this.goods=localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
        console.log(this.goods);
        this.display();
    }
    setDate(callback){
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id==this.id){
                callback(i)
            }
        }
        localStorage.setItem("goods",JSON.stringify(this.goods));
    }
    display(){
        var str = "";
        for(var i=0;i<this.data.length;i++){
            for(var j=0;j<this.goods.length;j++){
                if(this.data[i].id==this.goods[j].id){
                    str+=`
                    <p></p>
                    <div class="cont">
                        <div class="exhibit">
                            <img src="" alt="">
                            <span></span>
                        </div>
                        <ul>
                            <li><img src="" alt=""></li>
                            <li><img src="" alt=""></li>
                            <li><img src="" alt=""></li>
                        </ul>
                    </div>
                    <div class="box">
                        <img src="" alt="">
                    </div>
                    <div class="cox">
                        <h3></h3>
                        <i>商城价:</i>
                        <p>至&nbsp;&nbsp;全国:￥25.00</p>
                        <input type="button" value="立即购买">
                        <input type="button" value="加入购物车">
                    </div>
                </div>`
                }
            }
        }
        this.cont.innerHTML=str;
    }
}

new detail();