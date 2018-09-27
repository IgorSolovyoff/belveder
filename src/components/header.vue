<template>
  <header class="header">
    <div id="nav">
      <ul>
        <li>
          <a href="#/home">Главная</a>
        </li>
        <li>
          <a href="#/about">О нас</a>
        </li>
          <img src="@/assets/Logo-Belveder.png">
        <li>
          <a href="#/product">Продукция</a>
        </li>
        <li>
          <a href="#/contacts">Контакты</a>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  name: 'mainHeader'
}
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
img {
 max-width: 100%;
}
</style>
