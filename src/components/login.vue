<template>
    <div>
        <router-link to="/about">去关于</router-link>
        <div id="temp">
            <h3>title</h3>
            <img id="imga" src="../assets/logo.png" alt="">
        </div>
        <div id="box"></div>
        <div id="test">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0 DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==">

           <img src="https://finsuit-test.oss-cn-beijing.aliyuncs.com/phoneUpload/617f9e63-e624-42bf-9eac-2591de5098cd.png">
        </div>
        <div data-v-aba1f75c="" id="item2_box" class="item2_box"><p data-v-aba1f75c="" class="item2_lilv"><!----> 
            <span class="f">
          1.910
          <span class="s" data-v-aba1f75c="">%</span></span> <span class="s"  data-v-aba1f75c="">
           +0.06
          <span data-v-aba1f75c="">%</span></span></p> <div data-v-aba1f75c="" class="leftBfb_bj"></div> <p data-v-aba1f75c="" class="item2_type">七日年化收益率</p> <div data-v-aba1f75c="" class="haochus"><p data-v-aba1f75c="">银行存款</p><p data-v-aba1f75c="">随时存取</p></div></div>
           <img id="img" src="">
          <button style="margin-top: 300px " @click="go">go</button>
    </div>
</template>
<script>
import html2canvas from "html2canvas";
import * as rasterizeHTML from 'rasterizehtml';
export default {
    data(){
        return{
            baseImg:"",
            baseImg2:"",
        }
    },
    created(){
        
    },
    mounted(){
        // var img = "http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg";//imgurl 就是你的图片路径
        var img = document.getElementById("imga");
       

        var image = new Image();  
        // image.setAttribute("crossOrigin",'Anonymous')
        image.src = img;  
        image.onload = function(){  
          var base64 = this.getBase64Image(image);  
          console.log(base64);  
        } 
    },
    methods:{
          getBase64Image(img) {  
             var canvas = document.createElement("canvas");  
             canvas.width = img.width;  
             canvas.height = img.height;  
             var ctx = canvas.getContext("2d");  
             ctx.drawImage(img, 0, 0, img.width, img.height);  
             var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();  
             var dataURL = canvas.toDataURL("image/"+ext);  
             return dataURL;  
        }  ,
        go(){
            this.screenshots("test")
            // this.fun()
            // document.getElementById('img').setAttribute( 'src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0 DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==' );
        },
        fun(){
            var canvas = document.getElementById("canvas");
            rasterizeHTML.drawHTML('Some ' +
               '<span style="color: green; font-size: 20px;">HTML</span>' +
               ' with an image <img src="someimg.png">',
               canvas).then(function success(renderResult) {
                     console.log(renderResult)
                }, function error(e) {
                    console.log(e)
                });
        },
        // 截屏
        screenshots(id,cb) {
            let that = this;
            var shareContent = document.getElementById(id);
            var canvas = document.createElement("canvas");
            var scale = 2;
            canvas.width = 100 * scale;
            canvas.height = 100 * scale;
            canvas.getContext("2d").scale(scale, scale);
            var opts = {
                scale: scale,
                canvas: canvas,
                useCORS: true
            };
            setTimeout(() => {
                html2canvas(document.getElementById(id), opts).then(function(canvas) {
                var context = canvas.getContext("2d");
                that.baseImg = canvas.toDataURL("image/jpeg", 1);
                console.log(that.baseImg)
                cb && cb(that.baseImg);
                });
            }, 200);

            // 缩略图
            var canvasd = document.createElement("canvas");
            canvasd.width = 10 ;
            canvasd.height = 10 ;
            var optd = {
                scale: 1,
                canvas: canvasd,
                useCORS: true
            };
            setTimeout(() => {
                html2canvas(document.getElementById(id), optd).then(function(canvas) {
                var context = canvas.getContext("2d");
                that.baseImg2 = canvas.toDataURL("image/jpeg", 0.01);
                });
            }, 200);
            
        },
        img(url){
            var img = document.createElement('img');
            var box = document.getElementById('box');
            img.src = url;
            box.appendChild(img);
        }
    }
}
</script>
<style scoped>
#temp{
    background: #ccc;
}
.item2_box{
    position: absolute;
    top: 2.95rem;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
}
.item2_lilv span.f{
        font-size: 75px;
    font-weight: normal;
    color: #006BEB;
    font-family: has_buy;
}
.item2_lilv span.s{
         font-size: 75px;
    font-weight: normal;
    color: #FF801A;
    font-family: has_buy;
}
.leftBfb_bj{
        width: 322px;
    height: 36px;
    border-radius: 0.18rem;
    background: rgba(253,240,209,.4);
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: -1;
    top: 25px;
    /*opacity: 0.4;*/
}
.item2_type{
        font-size: 0.26rem;
    font-weight: normal;
    color: #333;
    margin: .2rem 0 0;
}
</style>
