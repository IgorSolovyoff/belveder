<template>
<section class="product">
	<div class="wrap">
		<Item v-for="product in filteredRows" :key="product.id" :img="imgUrl(product.img, product.id)" :product="product"/>
	</div>
</section>
</template>
<script>
	import axios from "axios";
	import Item from "@/components/item.vue";
	export default {
		name: "Product",
		components: {
			Item
		},
		data: () => ({
			products: [],
			    rowsPerPage: 8,
    // Отображаемая страница
    selectedPage: 1
			}),
		  computed: {
    // Количество строк в таблице
    totalRows() {
      return this.products.length;
    },
    // Отображаемые строки таблицы
    filteredRows() {
      return this.products.filter((item, index) => {
        const startIndex = (this.selectedPage - 1) * this.rowsPerPage;
        const finalIndex = startIndex + this.rowsPerPage;
        return startIndex <= index && index < finalIndex;
      });
    }
  },
    	mounted() {
    		axios
    		.get('http://localhost:3000/products')
    		.then(response => (this.products = response));
    	},
    	imgUrl(img, id) {
    		return "cards/" + id + "/main/" + img + ".jpg";
    }

	}	
</script>
<style type="text/css" scoped>

</style>
