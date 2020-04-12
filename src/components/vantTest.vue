<template>
<div id="vantTest">
  <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="info">信息按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
  <p>鼎融易·隶属于郑州银行</p>
  <div></div>
</div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
#vantTest{
  p{
    color: #333333;
    font-size: 30px;
  }
  &> div{
    width: 200px;
    height: 200px;
    font-size: 36px;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid green;
  }
}
</style>
