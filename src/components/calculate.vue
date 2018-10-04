<template>
  <section id="calculate">
    <h1>Рассчитайте примерную стоимость материалов</h1>
    <select v-model="Selected">
      <option disabled value="">Выберите один из вариантов</option>
      <option v-for="product in products" :title="product.title" :key="product.id">{{ product.title}} </option>
    </select>
    <p >Выбрано: {{ Selected }}</p>
    <span>Введите площадь:</span>
    <input v-model="value" placeholder="кв.м" type="number">
    <button v-on:click="totalCost">Примерная цена материалов на кв.м:{{totalCost}}</button>
  </section>
</template>

<script>
  import axios from "axios"
  export default {
    name: 'calculate',
    props: {
      product: Object
    },
    data: function () {
      return{
        Selected: '',
        products: [],
        value: this.value,
      }
  },
    mounted() {
      this.loadData();
    },
    methods: {
      loadData() {
        axios
          .get('http://localhost:3000/products')
          .then(response => (this.products = response.data));
      },
      totalCost: function () {
        return this.price * this.value
      }
  },

  }
</script>

<style scoped>
  h1 {
    padding-top: 10%;
    font-size: 35px;
    color: white;
  }
  section {
    height: 500px;
  }
  select {
    margin-top: 10%;
  }
</style>
