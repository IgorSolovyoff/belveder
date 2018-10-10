<template>
    <section id="test_wrap">
      <img src="@/assets/svg/paint.svg" alt="" id="paint">
    </section>
</template>

<script>

  export default {
    name: 'test_page',
    components: {

    }
  }
</script>

<style scoped>
  section {
    width: 100%;
    height: 750px;
    display: grid;
    grid-template-columns: auto;
    background: url(../assets/svg/bg.svg) no-repeat;
  }
  #paint {
    width: 300px;
    align-self: center;
    justify-self: center;
    margin-left: 500px;
  }
</style>
