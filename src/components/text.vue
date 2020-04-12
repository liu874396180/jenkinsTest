<template>
    <div class="textBox">
        <div class="text-line-camp"  ref="textLineCamp">
            <p class="text-content" ref="textContent" :style="{lineClamp: `${campNum}`}">
              {{textContent}}
            </p>
            <p v-if="textbtn" class="lastP" @click="openText"></p>
        </div> 
    </div>
    </div>
</template>
<script>
export default {
    data(){
      return{
        textbtn:false
      }
    },
    props:{
      textContent:{
        type: String,
        required: true,
        default: ""

      },
      campNum:{
        type: Number,
        // required: true,
        default: 1
      }
    },
    mounted(){
      this.fun()
    },
    methods:{
      fun(){
        var offsetHeight = this.$refs.textContent.clientHeight;
        var scrollHeight = this.$refs.textContent.scrollHeight;
        console.log()
        console.log(scrollHeight,offsetHeight)
        if(scrollHeight > offsetHeight){
          this.textbtn = true;
        }
      },
      openText(){
        this.textbtn = false;
        this.$refs.textContent.style.webkitLineClamp = "unset"
      }
    }
}
</script>
<style type="text/css">
  .textBox{
    margin: 50px 0;
    width: 100%
  }
.text-content{
    background: ghostwhite;
    width:200px;
    margin: 0 auto;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
}
.text-line-camp{
    position: relative;
}
.text-line-camp p.lastP{
    position: absolute;
    bottom: -45px;
    background: green;
    width: 100px;
    height: 10px;
    left: 100px;
}
</style>