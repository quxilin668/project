class Render{
 
    constructor(){
            //完成数据的渲染
            this.ol=document.querySelector("main .ac .l");
            this.url="data/goods.json"; 
               
            this.init()
        }
    init(){
        var that=this;
    
        ajaxPost(this.url,function(res){
            that.res=JSON.parse(res);
            that.getData();
        })
        }
    getData(){
        this.goods=localStorage.getItem("goods")?JSON.parse(localStorage.getItem("goods")):[];

        console.log(this.goods)
        console.log(this.res)
        this.display()
    } 
    setData(callback){
            for(var i=0;i<this.goods.length;i++){
                if(this.goods[i].id==this.id){
                    callback(i)
                }
            }
            localStorage.setItem("goods",JSON.stringify(this.goods));
        }

    display(){
        var str="";
        for(var i=0;i<this.res.length;i++){
            for(var j=0;j<this.goods.length;j++){
                if(this.res[i].goodsId==this.goods[j].id){
                    str+=`
                    <h4><p>${this.res[i].descr}</p></h4>
                <div class="l">
                    <div class="cont">
                        <div class="exhibit">
                            <img src="${this.res[i].src}" class="img1"/>
                            <span></span>
                            <p></p>
                        </div>
                    <ul>
                        <li><img src="${this.res[i].src}"/></li>
                        <li><img src="${this.res[i].pic}"/></li>
                        <li><img src="${this.res[i].pho}"/></li>
                    </ul>
                        </div>
                        <div class="box">
                            <img src="${this.res[i].src}"/>
                        </div>
                        <div class="cox">
                            <p>品牌：<span class="mtl1">嘉味莲</span></p>
                            <p>单价：<span class="mtl1">100.00元/kg</span></p>
                            <p>起订：<span class="mtl1">10kg</span></p>
                            <p>供货总量：<span class="mtl2">10000kg</span></p>
                            <p>所在地：<span class="mtl">10000kg</span></p>
                            <p>有效期至：<span class="mtl2">长期有效</span></p>
                            <p>最后更新：<span class="mtl2">2019-06-06 15:43</span></p>
                            <p>浏览次数：<span class="mtl2">143</span></p>
                            <p><input type="button"value="立即购买" id="btn1"/><input type="button" value="加入购物车" id="btn2"/></p>
                        </div>`
                }
            }
        }
        this.ol.innerHTML=str;
        }
   }
    new Render()


