<template>
  <section id="calculate">
    <h1>Рассчитайте стоимость материала</h1>
    <p>Выберите материал:</p>
    <select v-model="Selected">
      <option v-for="product in products" :title="product.title" :value="product.cost">{{product.title}}</option>
    </select>
    <br>
    <br>
    <p>Введите площадь:</p>
    <input v-model.number="meter" placeholder="кв.м" type="number" required min="0" step="10">
    <p>Цена за квадратный метр: {{Selected}}</p>
    <p>Примерная цена материалов: {{Selected * meter}} руб</p>
  </section>
</template>

<script>
  import axios from "axios"
  export default {
    name: 'calculate2',
    props:{
      product: Object,
    },
    data () {
      return {
        products: [],
        meter: null,
        Selected: null,
        value: null,
      };
    },
    mounted(){
      this.loadData();
    },
    methods: {
      loadData(){
        axios
          .get('http://localhost:3000/products')
          .then(response => (this.products = response.data));
      }
    },
  }
</script>

<style scoped>
  h1 {
    padding-top: 10%;
    font-size: 35px;
    color: white;
    text-transform: uppercase;
  }
  section {
    height: 500px;
  }
  select {
    width: 250px;
    padding: 15px;
    text-transform: uppercase;
    border: white 1px solid;
    overflow: hidden;
    cursor: pointer;
    text-align: center;
  }
  input {
    padding: 15px;
    width: 216px;
  }
  p, span {
    color: white;
    font-size: 1.5em;
  }
  option {
    height: 50px;
  }
</style>
