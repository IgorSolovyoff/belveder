/* eslint-disable */
<template>
  <footer class="footer">
    <div id="nav">
      <ul>
        <li>
          <a href="#/">home</a>
        </li>
        <li>
          <a href="#/test">test</a>
        </li>
          <img src="@/assets/Logo-Belveder.png"> 
        <li>
          <a href="#/test2">test2</a>
        </li>
        <li>
          <a href="#/test3">test3</a>
        </li>
      </ul> 
    </div>
  </footer>
</template>
<script>
export default {
  name: "mainFooter"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
