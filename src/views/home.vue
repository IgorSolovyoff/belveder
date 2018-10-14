<template>
<section class="home">
  <section class="hello">
    <div class="header_text">
      <h1 id="title">Декоративные краски и штукатурки</h1>
      <h2>Продажа и нанесение&nbsp;в Санкт-Петербурге</h2>
    </div>
    <img src="../assets/img/home/test3.jpg" id="header_img">
  </section>

  <section class="calc">
    <calculate />
  </section>

  <section class="action">
  	<div class="material">
      <h1>ВЫБЕРИ СВОЙ МАТЕРИАЛ</h1>
      <router-link to="/catalog" tag="button">Перейти в каталог</router-link>
    </div>
  </section>
  	<section class="price">
      <div class="container" id="price_text">
      <h1>Рассчитаем стоимость</h1>
      <h2>Свяжитесь с нами, чтобы узнать точную цену за кв.м. и получить скидку от 10% на первый заказ!</h2>
        <p id="button_p">
      <button id="show-modal" @click="showModal = true">Отправить заявку</button>
          <modal v-if="showModal" @close="showModal = false"></modal>
        </p>
      </div>
      <div class="container" id="price_img">
      <img src="../assets/SVG/SVG/calc.svg" id="calc_svg">
      </div>
    </section>


  <!--section class="why">
  	<h1>Почему Бельведер?</h1>
  	<ul class="why_list">
  		<li>
  			<img src="../assets/SVG/SVG/1_item.svg" id="why_img">
  			<p>Продаём своё</p>
  		</li>
  		<li>
  			<img src="../assets/SVG/SVG/2_item.svg" id="why_img">
  			<p>Любим и знаем своё дело</p>
  		</li>
  		<li>
  			<img src="../assets/SVG/SVG/3_item.svg" id="why_img">
  			<p>Успешно работаем с 2003 года</p>
  		</li>
  		<li>
  			<img src="../assets/SVG/SVG/4_item.svg" id="why_img">
  			<p>Ответственность и добросовестность</p>
  		</li>
  	</ul>
  </section !-->
</section>
</template>


<script>
import modal from "@/components/modal.vue"
import Calculate from '../components/calculate'
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
  .home {
    background-color: lightgray;
  }
  section {
    width: 100%;
  }
p{
color: black;
}
.hello{
  height: 700px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.header_text{
  flex-grow: 0;
  text-align: left;
  margin-left: 5%;
  align-self: center;
}
#header_img {
  flex-grow: 1;
  align-self: center;
  height: 300px;
  width: 400px;
}
#title{
  font-size: 45px;
}
.calc {
  height: 750px;
  background-color: white;
  color: black;
  margin-top: 25px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.action {
  margin-top: 25px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.material {
	background: url("../assets/svg/bg.svg") no-repeat;
  height: 700px;
  background-size: cover;
}
.material h1 {
  margin: auto;
  padding-top: 20%;
  color: white;
  font-size: 2em;
  text-align: center;
}
.material button {
  margin-top: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
.price {
  background: url("../assets/SVG/SVG/bg_grad.svg") no-repeat;
  background-size: cover;
  width: 100%;
  height: 750px;
  display: flex;
  margin-top: 25px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.price h1 {
  text-align: left;
  text-transform: uppercase;
  margin: 0;
  padding-top: 10%;
  padding-left: 5%;
  font-size: 3em;
}
.price h2 {
  text-align: left;
  padding-top: 0;
  padding-left: 5%;
}
#price_text {
  margin: auto;
  flex-basis: 60%;
  color: white;
}
#price_img {
  flex-basis: 40%;
  margin: auto;
}
#calc_svg {
  width: 90%;
  height: 90%;
}

button {
	background-color: #008CBA;
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
  text-transform: uppercase;
}
#button_p {
  text-align: left;
  padding-left: 5%;
  padding-top: 10px;
}
.why {
	height: 350px;
	background-color: #efefef;
}
.why h1 {
	padding-top: 50px;
  padding-bottom: 50px;
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

@media (max-width: 750px) {
  #header_img, #calc_svg{
    display: none;
  }
}
</style>
