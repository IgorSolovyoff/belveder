<template>
  <section class="contacts">
    <section class="head">
      <h1>Как нас найти</h1>
      <p>Мы находимся в ТВК "Интерио"</p>
      <p>Адрес: ул.Полевая Сабировская, 54А</p>
      <p>345 секция</p>
    </section>
    <section class="social">
      <h1>Мы в социальных сетях</h1>
    </section>
  </section>
</template>
<script>
  export default {
    name: 'Contacts'
  }
</script>
<style type="text/css" scoped>
  .contacts {
    background-color: #e2e1e0;
  }
  section {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    margin-bottom: 15px;
  }
  .head {
    background: url("../assets/img/cont/head1.jpg") no-repeat center;
    background-size: cover;
    height: 800px;
    width: 100%;
    color: white;
    font-size: 2em;
  }
  .head h1 {
    margin: auto;
    padding-top: 25%;
    text-transform: uppercase;
  }
  .head p{
    text-align: center;
  }
  .social {
    background-color: #fff;
    height: 500px;
    width: 100%;
    font-size: 1.5em;
  }
  .social h1 {
    margin: auto;
    padding-top: 5%;
    text-transform: uppercase;
  }
</style>
