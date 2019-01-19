<template>
    <div class="recBook">
        <div class="head">
            <span>本校好书推荐</span>
            <span><a href="#">>>></a></span>
        </div>
        <div class="allBooks">
            <div class="books">
                <img :src="imgUrl.books01Url" alt="书籍">
                <p>
                    <span>￥15.00</span>
                    <span>二手</span>
                </p>
                
            </div>
            <div class="books">
                <img :src="imgUrl.books01Ur2" alt="">
            </div>
            <div class="books">
                <img :src="imgUrl.books01Ur3" alt="">
            </div>
            <div class="books">
                <img :src="imgUrl.books01Ur4" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      imgUrl: {
        books01Url: require('../../assets/images/bookImg/book1.jpg'),
        books01Ur2: require('../../assets/images/bookImg/book2.jpg'),
        books01Ur3: require('../../assets/images/bookImg/book3.jpg'),
        books01Ur4: require('../../assets/images/bookImg/book4.jpg')
      }
    }
  }
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
    .allBooks {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top: 10px;
        margin-bottom: 58px;
        .books {
            width: 45%;
            height: 270px;
            border-radius: 10px;
            margin-bottom: 10px;
            background-color: rgb(230, 215, 215);
            img {
                width: 100%;
                height: 200px;
                border: none;
                border-radius: 10px 10px 0 0;
                display: block;
            }
            p {
                display: block;
                width: 100%;
                height: 30px;
                border: none;
                margin: 0;
                background-color: rgba(230, 209, 209,0.5);
            }
        }
    }
}
</style>
