<template>
  <section id="calculate">
      <p v-if="errors.length">
        <b>Пожалуйста исправьте указанные ошибки:</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      </p>
        <h1>Рассчитайте примерную стоимость материалов</h1>
        <select v-model="Selected">
          <option disabled value="">Выберите один из вариантов</option>
          <option v-for="product in products" :title="product.title" :key="product.id" :cost="product.cost">{{ product.title}} {{product.cost}} </option>
        </select>

        <span>Введите площадь:</span>
        <input v-model="meter" placeholder="кв.м" type="number">
        <form @submit="checkForm" method="post">Примерная цена материалов на кв.м:</form> {{ multiply }}
    <input type="submit" value="Отправить">
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'calculate',
    props: {
      product: Object,

    },
    data: function () {
      return{
        Selected: null,
        products: [],
        errors: [],
        meter: null,
        newCost: null,
        cost: null,

      }
  },
    mounted() {
      this.loadData();
      this.totalCost();
    },
    methods: {
      loadData() {
        axios
          .get('http://localhost:3000/products')
          .then(response => (this.products = response.data));
      },
      totalCost() {
        axios
          .get('http://localhost:3000/products/')
          .then(response => (this.cost = response.data));
      },
      multiply: () => cost * meter,
      checkForm: function (e) {
        if (this.meter) {
          return true;
        }

        this.errors = [];

        if (!this.meter) {
          this.errors.push('Введите площадь');
        }
        e.preventDefault();
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
