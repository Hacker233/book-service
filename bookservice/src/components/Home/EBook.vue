<template>
    <div class="Ebook">
        <p>电子书专场</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.Ebook {
    width: 95%;
    height: 100px;
    margin: 0 auto;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../../assets/images/EBook.jpg');
    background-size: 100% 150px;
    border-radius: 10px 10px 0 0;
    background-color: rgb(199, 169, 169);
    p {
        font-size: 25px;
        font-weight: 600;
        color: #491c1c;
        letter-spacing: 20px;
        font-family: "微软雅黑";
    }
}
</style>
