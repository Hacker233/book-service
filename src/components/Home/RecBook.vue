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
                    <span>管理沟通</span>
                </p>
                <p>
                    <span>￥15.00</span>
                    <span>二手</span>
                </p>
                
            </div>
            <div class="books">
                <img :src="imgUrl.books01Ur2" alt="">
                <p>
                    <span>领导科学与艺术</span>
                </p>
                <p>
                    <span>￥25.00</span>
                    <span>全新</span>
                </p>
            </div>
            <div class="books">
                <img :src="imgUrl.books01Ur3" alt="">
                <p>
                    <span>现代行政领导学</span>
                </p>
                <p>
                    <span>￥10.00</span>
                    <span>二手</span>
                </p>
            </div>
            <div class="books">
                <img :src="imgUrl.books01Ur4" alt="">
                <p>
                    <span>领导学理论与实践</span>
                </p>
                <p>
                    <span>￥10.00</span>
                    <span>二手</span>
                </p>
            </div>
            <div class="books">
                <img :src="imgUrl.books01Ur5" alt="">
                <p>
                    <span>领导学理论与实践</span>
                </p>
                <p>
                    <span>￥10.00</span>
                    <span>二手</span>
                </p>
            </div>
            <div class="books">
                <img :src="imgUrl.books01Ur6" alt="">
                <p>
                    <span>领导学理论与实践</span>
                </p>
                <p>
                    <span>￥10.00</span>
                    <span>二手</span>
                </p>
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
        books01Ur4: require('../../assets/images/bookImg/book4.jpg'),
        books01Ur5: require('../../assets/images/bookImg/book5.jpg'),
        books01Ur6: require('../../assets/images/bookImg/book6.jpg')
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
            background-color: rgb(248, 248, 248);
            img {
                width: 100%;
                height: 200px;
                border: none;
                border-radius: 10px 10px 0 0;
                display: block;
            }
            :nth-child(2) {
                padding-left: 10px;
                display: flex;
                background-color: #fff;
                height: 40px;
                align-items: center;
                font-size: 13px;
                border-bottom: 1px solid #ddd7d7;
            }
            :nth-child(3) {
                display: flex;
                width: 100%;
                height: 30px;
                border: none;
                justify-content: space-between;
                padding: 0 10px 0 10px;
                box-sizing: border-box;
                align-items: center;
                margin: 0;
                border-radius: 10px;
                background-color: rgba(255, 254, 254, 0.5);
                :nth-child(1) {
                    color: #8b5f5f;
                    font-size: 13px;
                }
                :nth-child(2) {
                    font-size: 16px;
                    color: #6b79a7;
                    background-color: rgba(255, 255, 255, 0);
                    border: none;
                }
            }
        }
    }
}
</style>
