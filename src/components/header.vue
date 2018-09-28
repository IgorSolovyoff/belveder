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
        <li>
          <img src="@/assets/Logo-Belveder.png">
        </li>
        <li>
          <a href="#/product">Продукция</a>
        </li>
        <li>
          <a href="#/contacts">Контакты</a>
        </li>
      </ul>
    </div>
    <PushRotate id="ham">
        <a href="#/home">Главная</a>
        <a href="#/about">О нас</a>
        <a href="#/product">Продукция</a>
        <a href="#/contacts">Контакты</a>
    </PushRotate>
  </header>
</template>
<script>
import { PushRotate } from 'vue-burger-menu'
export default {
  name: 'mainHeader',
  components: {
    PushRotate
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
 display: flex;
 list-style-type: none;
 padding: 0;
 margin: auto;
 overflow: hidden;
 justify-content: center;
}
li {
 margin: auto 15px auto 15px;
}
a {
 color: black;
}

@media(max-width: 650px){
#nav {
 display: none;
}
}
@media(min-width: 650px){
  #ham{
    display: none;
  }
}
</style>
