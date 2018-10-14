<template>
  <header class="header">
    <nav>
      <ul class="navigation">
        <li class="logo"><router-link to="/" >Belveder</router-link></li>
        <li class="link">
          <router-link to="/">Главная</router-link>
        </li>
        <li class="link">
          <router-link to="/about">О нас</router-link>
        </li>
        <li class="link">
          <router-link to="/catalog">Продукция</router-link>
        </li>
        <li class="link">
          <router-link to="/contacts">Контакты</router-link>
        </li>
      </ul>
    </nav>
    <div class="wrap" id="ham">
    <PushRotate>
        <router-link to="/">Главная</router-link>
        <router-link to="/about">О нас</router-link>
        <router-link to="/catalog">Продукция</router-link>
        <router-link to="/contacts">Контакты</router-link>
    </PushRotate>
    </div>

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
  height: 100px;

}

.logo{
  flex-grow: 1;
  text-align: start;
  margin-left: 5%;
}

li {
 margin: auto 20px auto 20px;
}
.link {
  flex-grow: 0;
}
a {
 color: black;
 text-decoration: none;
}

@media(max-width: 650px){
nav {
 display: none;
}
}
@media(min-width: 650px){
  #ham{
    display: none;
  }
}
</style>
