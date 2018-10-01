<template>
	<section class="prdct">
		<div class="wrap">
			<Item v-for="product in products" :key="product.id" :img="imgUrl(product.img, product.id)" :product="product"/>
		</div>
	</section>
</template>
<script>
	import axios from "axios";
	import Item from "@/components/item.vue";
	export default {
		name: "Catalog",
		components: {
			Item
		},
		data() {
			return{
				products: [],
			};
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
    	imgUrl(img, id) {
    		return "cards/" + id + "/" + img + ".jpg";
    	}
    }
}	
</script>
<style type="text/css" scoped>

</style>
