<template>
  <div class="hello">
    <router-view></router-view>
    <div class="footer">
      <ul>
        <li><router-link to="./one">1</router-link></li>
        <li><router-link to="./two">2</router-link></li>
        <li><router-link to="./three">3</router-link></li>
        <li><router-link to="./four">4</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  li {
    display: inline-block;
    margin: 0;
    width: 25%;
  }
}

a {
  color: #42b983;
}
</style>
