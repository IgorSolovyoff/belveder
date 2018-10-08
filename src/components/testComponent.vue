<template>
    <section id="calculate2">
      <select v-model="Selected">
        <option v-for="product in products" :title="product.title" :value="product.cost">{{product.title}}</option>
      </select>
      <p>{{Selected}}</p>
      <br>
      <input v-model.number="meter" placeholder="кв.м" type="number">
      <span>Введено: {{meter}}</span>
      <p>Примерная цена: {{Selected * meter}}</p>
    </section>
</template>

<script>
  import axios from "axios"
  export default {
    name: 'testComponent',
    props:{
      product: Object,
    },
    data () {
      return {
        meter: null,
        products: [],
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

  section {
    width: 100%;
    height: 750px;
  }

</style>
