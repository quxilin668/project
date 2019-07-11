class car{
    constructor(){
        //完成数据的渲染
        this.body=document.querySelector(".carbody");
        this.url="../json/goods2.json";
        this.init();
        //绑定事件完成删除的功能
        this.addevent();
    }
    addevent(){
        var that = this;
        this.body.onclick=function(e){
            var e=eve||window.event;
            var target=e.target||e.srcElement;
            if(target.className=="t4 del"){
                that.id=target.parentNode.parentNode.getAttribute("index");
                //删除dom节点
                target.parentNode.parentNode.remove();
                //需要清除localstorage的数据
                that.setDate(function(i){
                    that.goods.splice(i,1)
                })
            }
            //商品数量的功能
            if(target.className=="small-button"){}
            if(target.className=="check"){
                that.sum();
            }
        }
    }
    changecount(){
        var countButtons=document.querySelectorAll(".small-button")
        var that = this;
        for(var i=0;i<countButtons.length;i++){
            countButtons[i].onclick=function(e){
                var e=eve||window.event;
                var target=e.target||e.srcElement;
                if(target.textContent=="+"){
                    var figure=target.previousElementSibling.value;
                    if(target.previousElementSibling){

                    }
                }
            }
        }
    }

    
}