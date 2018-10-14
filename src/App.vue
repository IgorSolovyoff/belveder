/* eslint-disable */
<template>
  <div id="app">
    <mainHeader/>
      <main id="page-wrap">
        <h1 id="ham">Бельведер</h1>
      <router-view/>
    <mainFooter/>
    </main>
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
  },

}
</script>
<style scoped>
body {
  margin: 0;
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#ham {
  display: none;
}
@media(min-width: 650px){
  #ham{
    display: none;
  }
}
</style>
