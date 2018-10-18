<template>
    <section class="portfolio">
      <div class="slide" id="slide">
        <div class="description">
          <h1 class="portfolio-header">
            header
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <ul class="portfolio-gallery" >
        <Slider v-for="work in works" :title="work.title"  :img="imgUrl(work.img, work.id)" :product="work" :id="work.id"/>
      </ul>
    </section>
</template>

<script>
  import axios from "axios"
  import Slider from "@/components/Slider.vue"
    export default {
      name: "portfolio",
      components:{
        Slider
      },
      data(){
        return {
          works: [],
        };
      },
      mounted(){
        this.loadData();
      },
      methods: {
        loadData(){
          axios
            .get('http://localhost:3000/works')
            .then(response => (this.works = response.data));
        },
        imgUrl(img, id) {
          return "cards/" + id + "/" + img + ".jpg";
        },
      }


    }
</script>

<style scoped>
  .portfolio {
    color: #fff;
    text-align: left;
    font-size: 2em;
  }
  .slide {
    width: 100%;
    height: 650px;
    background-image: url("../assets/img/about/head.jpg");
  }
  .portfolio-header {
    margin: auto;
    padding-top: 20px;
  }
  .description {
    margin-left: 5%;
    padding-top: 30%;
  }
  .portfolio-gallery {
    display: flex;
    list-style: none;
    padding: 0;
    flex-wrap: wrap;
    margin: auto;
  }

</style>
