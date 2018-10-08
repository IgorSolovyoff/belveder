<template>
    <section id="test_wrap">
      <test-component></test-component>
    </section>
</template>

<script>
  import testComponent from "../components/testComponent"
  export default {
    name: 'test_page',
    components: {
      testComponent,
    }
  }
</script>

<style scoped>

</style>
