<template>
		<div class="item">
			<img class="item_img" :src="loadImg(img)">
				<h4 class="item_title">{{ product.title }}</h4>
		</div>
</template>

<script>
	export default {
  name: "item",
  props: {
    img: String,
    product: Object
  },
  methods: {
    loadImg: function(path) {
      return require("@/assets/img/" + path);
    }
  }
};
</script>

<style scoped>
.item {
	background-color: white;
	width: 200px;
	height: 250px;
	margin: 15px;
	padding: 0;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
img {
	width: 200px;
	height: 200px;
}
h4
{
	margin-top: 6%;
}
</style>