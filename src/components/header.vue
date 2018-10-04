<template>
  <header class="header">
      <ul>
        <li>
          <router-link to="/">Главная</router-link>
        </li>
        <li>
          <router-link to="/about">О нас</router-link>
        </li>
        <li>
          <router-link to="/catalog">Продукция</router-link>
        </li>
        <li>
          <router-link to="/contacts">Контакты</router-link>
        </li>
      </ul>
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
  z-index: 100;
  position: relative;

}
ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: auto;
  overflow: hidden;
  justify-content: flex-end;
  height: 100px;
}

li {
 margin: auto 20px auto 20px;
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
