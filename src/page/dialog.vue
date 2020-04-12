<template>
    <div id="page">
        312
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    created(){
        let dialogComponent = this.$CommonDialog({
          componentName: "MembershipCard",
          appendElement: document.getElementById("page"),
          title: "会员卡",
          desc: "抽奖获得",
          content: "爱奇艺会员卡",
          exchangeCode: "data.AWARD",
          copyCallBack: () => {
            this.$trackEvents.ACB0K022();
            this.$Toast("复制成功");
            // dialogComponent.close()
          }
        })
    }
}
</script>
<style lang="less">
    
</style>