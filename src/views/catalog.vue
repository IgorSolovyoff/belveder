<template>
	<section class="prdct">
		<div class="wrap">
			<ul class="row">
			<Item v-for="product in products" :key="product.id" :img="imgUrl(product.img, product.id)" :product="product"/>
		</ul>
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
	.row{
		 display: flex;
		 list-style-type: none;
		 padding: 0;
		 margin: auto;
		 overflow: hidden;
		 justify-content: space-evenly;
		 flex-wrap: wrap;
	}
	ul {
		padding: 0;
	}

</style>
