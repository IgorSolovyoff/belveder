<template>
<section class="home">
  <div class="hello">
    <div class="header_text">
      <h1 id="title">Декоративные краски и штукатурки</h1>
      <h2>Продажа и нанесение в Санкт-Петербурге.</h2>
    </div>
    <img src="@/assets/img/home/test3.jpg" id="header_img">
  </div>

  <section class="calc">
    <calculate />
  </section>

  <div class="action">
  	<div class="material">
  		<div class="material_img">
  			<img src="@/assets/img/home/test.jpg" id="action_img">
  		</div>
  		<div class="material_text">
  			<p>Выберете свой материал</p>
  			<router-link to="/catalog" tag="button">Перейти в каталог</router-link>
  		</div>
  	</div>
  	<div class="price">
  		<div class="price_text">
  			<p>Рассчитаем стоимость</p>
  			<button id="show-modal" @click="showModal = true">Рассчитать</button>
    <modal v-if="showModal" @close="showModal = false">
    	<h3 slot="header">custom header</h3>
    </modal>
  		</div>
  		<div class="price_img">
  			<img src="@/assets/img/home/test.jpg" id="action_img">
  		</div>
  	</div>
  </div>

  <section class="why">
  	<h1>Почему Бельведер?</h1>
  	<ul class="why_list">
  		<li>
  			<img src="@/assets/img/home/test.jpg" id="why_img">
  			<p>Продаём своё</p>
  		</li>
  		<li>
  			<img src="@/assets/img/home/test.jpg" id="why_img">
  			<p>Любим и знаем своё дело</p>
  		</li>
  		<li>
  			<img src="@/assets/img/home/test.jpg" id="why_img">
  			<p>Успешно работаем с 2003 года</p>
  		</li>
  		<li>
  			<img src="@/assets/img/home/test.jpg" id="why_img">
  			<p>Ответственность и добросовестность</p>
  		</li>
  	</ul>
  </section>
</section>
</template>


<script>
import modal from "@/components/modal.vue"
import Calculate from '../components/calculate'
import axios from "axios"
export default {
  name: 'Home',
  components: {
    Calculate,
  	modal
  },
  data: function(){
    return {
      showModal : false
    }
  },

}
</script>


<style scoped>
p{
color: #a07038;
}
.hello{
  background-color: white;
  color: black;
  display: flex;
  height: 750px;
}
.header_text{
  flex-basis: 50%;
  text-align: left;
  margin-left: 5%;
  margin-top: 10%;
}
#header_img {
  height: 250px;
  width: 300px;
  margin: auto;
}
#title{
  font-size: 60px;
}
.calc {
  height: 750px;
  background-color: deepskyblue;
}
.material {
	display: flex;
}
.price {
	display: flex;
}
#action_img {
	width: 100%;
	height: 100%;
}
.material_img {
	flex-basis: 50%;
}
.price_img {
	flex-basis: 50%;
}
.material_text {
	flex-basis: 50%;
	margin: auto;
}
.price_text {
	flex-basis: 50%;
	margin: auto;
}
button {
	background-color: #008CBA;
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
}
.why {
	height: 350px;
	background-color: #efefef;
}
.why h1 {
	padding-top: 15px;
	margin-top: 0;
}
.why_list {
  display: flex;
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  justify-content: space-between;
}
.why_list li {
	margin: auto;
}
#why_img {
	width: 150px;
	height: 150px;
	border-radius: 100px;
}

</style>
