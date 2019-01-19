<template>
  <div class="header">
    <div class="address">
      <i class="iconfont icon-weizhi"></i>
    </div>
    <div class="search">
      <i class="iconfont icon-sousuo"></i>
      <input type="text">
    </div>
    <div class="btn-search">
      <button>搜索</button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  width: 100%;
  height: 48px;
  display: flex;
  display: -webkit-flex;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: rgb(224, 210, 210);
  border: 0 0 1px 0;
  border-color: #716baa;
  box-shadow: 0 0 1px #888888;
  .address {
    height: 48px;
    width: 20%;
    line-height: 48px;
    text-align: center;
    .iconfont {
      font-size: 20px;
    }
  }
  .search {
    width: 60%;
    height: 48px;
    padding-left: 0%;
    line-height: 42px;
    position: relative;
    .iconfont {
      font-size: 20px;
      position:absolute;
      margin-left: 10px;
      line-height: 48px;
    }
    input {
      width: 100%;
      height: 30px;
      border: none;
      border-radius: 10px 2px 2px 10px;
      background-color: rgba(250, 244, 244,0.5);
      padding-left: 20%;
      box-sizing: border-box;
      outline: none;
      font-size: 10px;
    }
  }
  .btn-search {
    width: 20%;
    height: 48px;
    line-height: 44px;
    text-align: center;
    button {
      width: 80%;
      height: 30px;
      border: none;
      border-radius: 2px 10px 10px 2px;
      font-size: 10px;
      letter-spacing: 5px;
      color: #716baa;
      outline: none;
    }
  }
}
</style>
