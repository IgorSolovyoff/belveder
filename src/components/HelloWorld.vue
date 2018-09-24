<template>
  <div class="hello">
      <ul>
      <li>
        <a href="#/">home</a>
      </li>
      <li>
        <a href="#/test">test</a>
      </li>
      <li>
        <a href="#/test2">test2</a>
      </li>
      <li>
        <a href="#/test3">test3</a>
      </li>
    </ul>
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Здесь будет новый сайт Бельведер'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
