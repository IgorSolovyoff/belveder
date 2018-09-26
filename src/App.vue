<template>
  <div id="app">
    <mainHeader/>       
    <router-view/>
  </div>
</template>

<script>
import mainHeader from "@/components/header.vue";
export default {
  name: 'App',
  components: {
    mainHeader
  }
};
</script>

<style>
#nav {
    
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
list-style-type: none;
padding: 0px;
margin: 0px;
overflow: hidden;
text-align: center;
}
li {
display: inline;
margin: 0 10px;

}
a {
color: #42b983;
}
p {
color: #42b983;
font-size: 25px;
}
</style>
