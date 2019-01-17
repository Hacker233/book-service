<template>
  <div class="home">
    <Header></Header>
    <Classification></Classification>
    <Require></Require>
  </div>
</template>

<script>
import Header from '@/components/Home/Header'
import Classification from '@/components/Home/Classification'
import Require from '@/components/Home/Require'
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    Header,
    Classification,
    Require
  }
}
</script>
