<template>
    <div>
    	<div id="quemer">
    		<div  class="remind-block">
                <div class="marquee-block">
                    <div class="marquee" >
                        这是一段很长的滚动文字&nbsp;&nbsp;&nbsp;
                    </div>
                   <!--  <div class="marqueeT1">
                        这是一段很长的滚动文字&nbsp;&nbsp;&nbsp;
                    </div> -->
                </div>
            </div>
    	</div>
    	<br>
        <router-link to="/login">去登录</router-link>
        <div style="background:#fce9aa;overflow: hidden">
            <div id="floatleft" class="floatleft">
                <span class="span1" data-att="211111111111111">1.发送阿里木龙骨啥地方弗萨方弗利萨ffs方弗利萨</span>
                <span class="span2">1.发送阿里木龙骨啥地方弗萨方弗利萨ffs方弗利萨</span>
            </div>
        </div>
        <msg-scroll v-if="text" :nbspNum="10" :text="text"></msg-scroll>
        <div id="checkes">
            <input type="radio" name="sex">
            <input type="radio" name="sex">
        </div>
        <div id="checkesbox">
            <input type="checkbox" name="a">
            <input type="checkbox" name="sex">
            <input type="checkbox" name="sex">
        </div>
        <div class="duoborder"></div>
        <div class="radioBoxTest">
            <input type="radio" name="sss" id="radioText">
            <label for="radioText">虚构</label>
            <input type="radio" name="sss" id="radioText2">
            <label for="radioText2">纯属</label>
        </div>
        <br>
        <br>
    </div>
</template>
<script>
import msgScroll from './msgScroll'
export default {
    data(){
    return{
        ownWidth:"",
        timer:null,
        text:""
    }
    },
    components:{
        msgScroll
    },
    mounted(){
        var supportsVibrate = "vibrate" in navigator;
        console.log(navigator.vibrate)
        navigator.vibrate(4000);
        setTimeout(()=>{
            this.text = "g反倒是抗衰老的那个卡洛斯那个g反倒是抗衰老的那个卡洛斯那个g反倒是抗衰老的那个卡洛斯那个g反倒是抗衰老的那个卡洛斯那个"
        },1000)
        this.$nextTick(()=>{
            var that = this;
            that.ownWidth = document.getElementsByClassName("span1")[0].offsetWidth;
            var span1 = document.getElementsByClassName("span1")[0];
            var span2 = document.getElementsByClassName("span2")[0];
            var floatleft = document.getElementsByClassName("floatleft")[0];
            console.log(document.getElementsByClassName("span1")[0].offsetWidth);
            var cont = 0;
            var timers = requestAnimationFrame(function fn(){
                cont++;
                if(cont < that.ownWidth + 3){
                    floatleft.style.transform = `translateX(-${cont}px)`;
                    // span1.style.transform = `translateX(-${cont}px)`;
                    // span2.style.transform = `translateX(-${cont}px)`;
                    timers = requestAnimationFrame(fn);
                }else{
                    floatleft.style.transform = `translateX(0px)`;
                    cont = 0;
                    timers = requestAnimationFrame(fn);
                    // cancelAnimationFrame(timers);
                }    
            });
           // this.timer = setInterval(()=>{
           //      cont++;
           //      if(cont < this.ownWidth){
           //          span1.style.transform = `translateX(-${cont}px)`;
           //      }else{
           //          span1.style.transform = `translateX(0px)`;
           //          cont = 0;
           //      }
                
           //  },20)
        })
        
    },
    created(){}
}
</script>
<style type="text/css">
    .radioBoxTest input[type="radio"]{
        display: none;
    }
    .radioBoxTest label{
        border: 1px solid #ccc;
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        line-height: 40px;
    }
    .radioBoxTest input[type="radio"]:checked + label{
        border-color: red;
    }
    div.duoborder {
    box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.2), 0 0 0 12px rgba(0, 0, 0, 0.2), 0 0 0 18px rgba(0, 0, 0, 0.2), 0 0 0 24px rgba(0, 0, 0, 0.2);
    height: 200px;
    margin: 50px auto;
    width: 400px
}
    #checkes input[type="radio"]{
    -webkit-appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #003366;
    outline: none;
    vertical-align: text-bottom;
}
#checkes input[type="radio"]:checked{
    border: 0;
    background: #003366;
}
    /* 保单管理委托服务 */
#checkesbox input[type="checkbox"]{
    -webkit-appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #003366;
    outline: none;
    vertical-align: text-bottom;
}
#checkesbox input[type="checkbox"]:checked{
    border: 0;
    background: #003366;
}
.fxcp_content .fxcp_list .fxcp_choose label{
    width: 1.78rem;
    display: inline-block;
}
    #floatleft{
        height: 20px;
        width: 100%;
        background: ;
        /*overflow: hidden;*/
        white-space: nowrap;
        /*position: relative;*/
    }
    #floatleft span{
        /*float: left;*/
        /*position: absolute;*/
        /*left: 0;*/
    }
    #floatleft .span1{
        /*transform :translateX(0px);*/
        /*position: relative;*/
    }
   /* .span1:after{
        content: attr(data-att);
        position: absolute;
        right: -118%;
    }*/


	body,html{
		padding: 0;
		margin: 0;
	}
	.remind-block {

    height: 30px;

    line-height: 30px;

    background-color: #fce9aa;

    color: #947334;

    position: relative;

    overflow: hidden;

    text-align: center;

    width: 100%;

    /*padding-right: 20px;*/

    z-index: 100;

}

.marquee-block{

display: inline-block;

width:100%;

height: 100%;

vertical-align: middle;

overflow: hidden;

box-sizing: border-box;

padding-left: 15px;

position: relative;

}

.marquee {

animation: marquee 20s linear infinite;

white-space: nowrap;

position: absolute;

}

.marqueeT {

animation: marqueeT 20s linear infinite;

white-space: nowrap;

position: absolute;

}

@keyframes marquee {

0% { left: 0; }

100% { left: -10%;}

}

@keyframes marqueeT {

0% { left: 110%; }

100% { left: 0; }

}

.remind-block span{

border-bottom: 1px solid #947334;

font-weight:bold;

}

.remind-block img{

height:20px;

position: absolute;

right: 2px;

top: 5px;

}
</style>