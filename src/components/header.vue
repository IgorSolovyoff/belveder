<template>
  <header class="header">
    <div id="nav">
      <ul>
        <li>
          <router-link to="/">Главная</router-link>
        </li>
        <li>
          <router-link to="/about">О нас</router-link>
        </li>
        <li>
          <img src="@/assets/Logo-Belveder.png">
        </li>
        <li>
          <router-link to="/catalog">Продукция</router-link>
        </li>
        <li>
          <router-link to="/contacts">Контакты</router-link>
        </li>
      </ul>
    </div>
    <PushRotate id="ham">
        <router-link to="/">Главная</router-link>
        <router-link to="/about">О нас</router-link>
        <router-link to="/catalog">Продукция</router-link>
        <router-link to="/contacts">Контакты</router-link>
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
header {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.45);
  z-index: 100;
  position: relative;
}
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
 text-decoration: none;
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
