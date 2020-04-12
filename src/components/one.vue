<template>
    <div id="ce">
        one
        <!-- <input type="text" name="" id="">
        <input type="text" name="" id=""> -->
    </div>
</template>

<script>
import two from './two'
export default {
    data(){
        return{
            arr:{},
            obj:{},
            test:"<a href='#'><img src='http://pic37.nipic.com/20140113/8800276_184927469000_2.png' ></a>",
            tan:false
        }
    },
   
    components:{
        two
    },
    created(){
        this.$axios.get("api/v1/all",{params:{
				app_key:"5eb4f0ed707854e9",
				page:1
        }}).then((response) => {
        console.log(response.data)
        })        
    },
    mounted () {

    },
    methods:{
        
    }

}
</script>
<style type="text/css">
    /*body { position: fixed; }*/
    .ff{
        width: 300px;
    }
    .ff img { 
        width: 100%;
     }
     .forr{
        height: 400px;
     }
     .opt{
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        background: rgba(0,0,0,.2) ;
        z-index:1;  
    }
    .box{
        width: 100px;
        height: 100px;
        background: red;
        margin: 100px;
        overflow-y: scroll;
    }
</style>

