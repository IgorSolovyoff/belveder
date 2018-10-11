<template>
    <section id="test_wrap">
      <button @click="animateLogo">Click me</button>
      <img src="../assets/SVG/full.svg" id="full" ref="full">
      <img src="../assets/SVG/paint.svg" alt="" id="paint" ref="paint">
      <img src="../assets/SVG/half.svg" alt="" id="half" ref="half">
    </section>
</template>

<script>

  export default {
    name: 'test_page',
    components: {

    },
    methods: {

    }
  }
</script>

<style scoped>
  section {
    width: 100%;
    height: 750px;
    display: grid;
    grid-template-columns: 50% 40% 10%;
    background: url(../assets/svg/bg.svg) no-repeat;
    background-size: cover;
  }
  #paint {
    width: 300px;
    align-self: center;
    justify-self: center;
  }
  #full {
    width: 150px;
    height: 150px;
    align-self: center;
    justify-self: end;
  }
  #half {
    width: 80px;
    height: 150px;
    align-self: start;
    justify-self: end;
  }
</style>
