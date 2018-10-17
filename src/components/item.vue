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
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  cursor: pointer;
}
.item:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
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
