<template>
    <div class="classification">
        <div class="newBook bgc_img_1">
            <p>新书市集</p>
        </div>
        <div class="oldBoook bgc_img_2">
            <p>旧书集市</p>
        </div>
    </div>
</template>
<script>
export default {
}
</script>

<style lang="scss" scoped>
.classification {
    width: 95%;
    height: 160px;
    background-color: rgba(240, 224, 224,0.6);
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    margin-top: 10px;
    border: 1px solid #e4d1d1;
    border-radius: 10px 10px 0 0;
    .newBook {
        width: 40%;
        height: 120px;
        border-radius: 10px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            color: rgba(248, 242, 242, 0.6);
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 5px;
        }
    }
    .bgc_img_1 {
        background-image: url('../../assets/images/newBook.jpg');
        background-size:100% 120px;
    }
    .oldBoook {
        @extend .newBook;
        p {
            color: rgba(240, 224, 224,0.7);
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 5px;
        }
    }
    .bgc_img_2 {
        background-image: url('../../assets/images/oldBook.jpg');
        background-size:100% 120px;
    }
}
</style>
