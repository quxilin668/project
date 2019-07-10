

   function search(){
    this.input=document.getElementById("p2_txt");
    this.ul=document.getElementById("p2_ul");
    console.log(this.ul);
    this.index=0;
    this.code=0;
    this.init()
   }
   search.prototype.init=function(){
       this.input.onkeyup=function(e){
           var e=event||window.event;
           var code=e.keyCode||e.which;
            this.code=code;
         this.value=this.input.value; 
            this.ferret(this.value);
       }.bind(this)
      
   }
   search.prototype.ferret=function(x){
       var script=document.createElement("script");
       var wd=x;
        script.src="https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=29358,1451,21116,29073,29238,28519,29099,29131,29368,28833,29221,26350&wd="+ wd +"&req=2&csor=1&cb=jQuery110209493171718918971_1561298781420&_=1561298781423"
        document.body.appendChild(script);
        this.ul.style.display="block";
        this.li=this.ul.getElementsByTagName("li");
        this.over();
    }
    search.prototype.over=function(){
        // console.log(this.li)
        //鼠标事件
        var that=this;
        this.ul.onmouseover=function(e){
            var e=event||window.event;
            var target=e.target||e.srcElement;
            if(target.nodeName=="LI"){
            target.style.background="#ccc";
              target.onclick=function(){
             that.input.value=target.innerHTML;
              that.ul.style.display="none";
            }
            }
        }
        this.ul.onmouseout=function(e){
            var e=event||window.event;
            var target=e.target||e.srcelement;
            if(target.nodeName=="LI"){
                target.style.background="#fff";
            }
        }
     this.key();
    }
    search.prototype.key=function(){
        var that=this;
        document.onkeydown=function(e){
            var e=event||window.event;
            var code=e.keyCode||e.which;
                that.code=code;
            // console.log(this.code)
        console.log(this.code)
        // if(this.code==0)return;
        if(this.code==38){
                if(this.index==0){
                    this.index=0;
                }else{this.index--}
                for(var i=0;i<this.li.length;i++){
                 this.li[i].className="";
            }
            this.li[this.index].classList.add('active');
            }
            // console.log(that.li.length)
            if(this.code==40){
                if(this.index==that.li.length-1){
                    this.index=that.li.length-1;
                }else{
                    this.index++;
                }
                for(var i=0;i<this.li.length;i++){
                 this.li[i].className="";
                  }
                this.li[this.index].classList.add('active');
                // this.li[this.index].style.background="red";
            }
        }
    } 
   function jQuery110209493171718918971_1561298781420(data){
    this.ul=document.getElementById("p2_ul");
        ul.innerHTML="";
        if(data.g==undefined){
            return;
        }else{
       for(var i=0;i<data.g.length;i++){
           var oli=document.createElement("li");
           oli.innerHTML=data.g[i].q;
           ul.appendChild(oli);
        }
    }
   }
   new search();
