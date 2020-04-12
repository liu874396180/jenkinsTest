<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" v-lpd-image="{scale:'1.5'}"> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  // name: 'app',
  // components: {
  //   HelloWorld
  // }
  data(){
    return{}
  },
   watch:{
      '$route'(to,from){
        console.log("to.path");
        console.log(to.path);
      }
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
