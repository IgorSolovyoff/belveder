<template>
	<div class="box">
		<div class="item">
			<img class="item__img" :src="loadImg(img)">
				<h4 class="item__title">{{ product.name }}</h4>
		</div>
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
.box {
 display: flex;
 list-style-type: none;
 padding: 0;
 margin: auto;
 overflow: hidden;
 justify-content: space-evenly;
 flex-wrap: wrap;
}
.item {
	background-color: white;
	width: 200px;
	height: 250px;
	border: 1px solid white;
	border-radius: 20px;
	margin: 15px;
	padding: 0;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
img {
	width: 200px;
	height: 200px;
	border-radius: 20px;
}
</style>