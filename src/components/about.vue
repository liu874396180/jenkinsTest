<template>
    <div>
    	<div id="quemer">
    		<div class="box">
			    <p class="animate">
			        文字滚动的内容
			    </p>
			</div>

    	</div>
    	<br>
        <router-link to="/login">去登录</router-link>
    </div>
</template>
<script>
export default {
    data(){
    return{}
    }
}
</script>
<style type="text/css">
	body,html{
		padding: 0;
		margin: 0;
	}
	#quemer{
		background: red

	}
	.box {
            width: 300px;
            border: 1px solid #ff6700;
            overflow: hidden;
            text-align: left;
        }
 
        .animate {
            font-size: 12px;
            color: #000;
            display: inline-block;
            white-space: nowrap;
            /*animation: 10s wordsLoop linear infinite normal;*/
        }
 		.animate2 {
            padding-left: 20px;
            font-size: 12px;
            color: #000;
            display: inline-block;
            white-space: nowrap;
            /*animation: 10s wordsLoop linear infinite normal;*/
        }
        @keyframes wordsLoop {
            0% {
                transform: translateX(-100px);
                -webkit-transform: translateX(-100px);
            }
            100% {
                transform: translateX(-100%);
                -webkit-transform: translateX(-100%);
            }
        }
 
        @-webkit-keyframes wordsLoop {
            0% {
                transform: translateX(200px);
                -webkit-transform: translateX(200px);
            }
            100% {
                transform: translateX(-100%);
                -webkit-transform: translateX(-100%);
            }
        }
</style>