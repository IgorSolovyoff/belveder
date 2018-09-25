<template>
  <div id="app">
    <header class="header">
      <div id="nav">
      <ul>
        <li>
          <a href="#/">home</a>
        </li>
        <li>
          <a href="#/test">test</a>
        </li>
        <img src="./assets/Logo-Belveder.png"> 
        <li>
          <a href="#/test2">test2</a>
        </li>
        <li>
          <a href="#/test3">test3</a>
        </li>
      </ul> 
      </div>     
    </header>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
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
