<template>
    <div class="recBook">
        <div class="head">
            <span>本校好书推荐</span>
            <span><a href="#">>>></a></span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.recBook {
    .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0px 18px;
        width: 100%;
        height: 48px;
        margin-top: 10px;
        border-radius: 0 0 10px 10px;
        background-color: rgb(221, 203, 203);
        span:nth-child(1) {
            color: #613a3a;
            letter-spacing: 1px;
        }
    }
}
</style>
