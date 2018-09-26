/* eslint-disable */
<template>
  <div id="app">
    <mainHeader/>
    <router-view/>
    <mainFooter/>
  </div>
</template>

<script>
import mainHeader from '@/components/header.vue'
import mainFooter from '@/components/footer.vue'
export default {
  name: 'App',
  components: {
    mainHeader,
    mainFooter
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
