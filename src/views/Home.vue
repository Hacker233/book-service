<template>
  <div class="home">
    <Header></Header>
    <Classification></Classification>
    <Require></Require>
    <EBook></EBook>
    <Recbook></Recbook>
  </div>
</template>

<script>
import Header from '@/components/Home/Header'
import Classification from '@/components/Home/Classification'
import Require from '@/components/Home/Require'
import EBook from '@/components/Home/EBook'
import Recbook from '@/components/Home/RecBook'

export default {
  name: 'home',
  components: {
    Header,
    Classification,
    Require,
    EBook,
    Recbook
  }
}
</script>
