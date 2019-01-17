<template>
    <div class="footer">
        <div class="homePage">
            <i class="iconfont icon-shouye-1"></i>
            <br><span>首&nbsp;页</span>
        </div>
        <div class="sellBook">
            <i class="iconfont icon-tianjia"></i>
            <br><span>发&nbsp;布</span>
        </div>
        <div class="perInfo">
            <i class="iconfont icon-gerenzhongxin"></i>
            <br><span>个&nbsp;人</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.footer {
    width: 100%;
    height: 48px;
    background-color: rgb(224, 210, 210);
    position: fixed;
    bottom: 0;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    .homePage {
        width: 20%;
        height: 48px;
        text-align: center; 
        padding-top: 1px;
        .iconfont{
            font-size: 25px;
        }
        span {
            font-size: 12px;
            display: flex;
            justify-content: center;
        }
    }
    .sellBook {
        @extend .homePage;
        background-color: rgba(138, 67, 67, 0.6);
        border-radius: 10px;
        margin-top: -10px;
        color: #ecd4d4;
        span { 
            display: flex;
            justify-content: center;
        }
    }
    .perInfo {
        @extend .homePage;
        span {
            display: flex;
            justify-content: center;
        }
    }

}
</style>
