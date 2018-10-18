<template>
    <li class="gallery-item">
      <img class="mini" :src="loadImg(img)">
    </li>
</template>

<script>
    export default {
      name: "Slider",
      props: {
          img: String,
        product: Object
      },
    methods: {
      loadImg: function (path) {
        return require("@/assets/img/" + path);
      }
    },
    };

</script>

<style>
  .gallery-item {
    width: 20%;
    height: 150px;
    cursor: pointer;
  }
  .mini {
    width: 100%;
    height: 100%;
  }

</style>
