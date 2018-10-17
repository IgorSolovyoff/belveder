<template>
<section class="about">
  <section class="header-img">
    <h1>О нас</h1>
    <p>Мы производим декоративные краски и штукатурки высочайшего качества</p>
  </section>
  <section class="cards">

    <ul class="card-list">
      <li class="card-item">
        <div class="wrap">
        <h3>Продаём своё</h3>
        <p>
          Компания «Бельведер» занимается разработкой, производством и реализацией декоративных красок и штукатурок, а также является эксклюзивным дистрибьютором на территории России натуральных сухих штукатурок и пигментов от компании-производителя DEFI(Франция). Собственное производство полного цикла, химическая лаборатория, творческая мастерская, собственные идеи. Наша работа — создавать прекрасный вид на стенах, не забывая при этом о высоких эксплуатационных характеристиках и экологии.
        </p>
      </div>
      </li>
      <li class="card-item">
        <h3>Любим и знаем своё дело</h3>
        <p>
          Изучая опыт ведущих мировых производителей, мы никогда слепо не копируем даже лучшие их образцы продукции. Каждый новый материал создается вдумчиво, с пониманием того, каких именно эффектов и внешнего вида именно мы хотим добиться в новом декоративном покрытии. Большинство сотрудников компании работает в ней со времени основания. Огромный опыт позволяет избегать ошибок и досконально знать все нюансы своей профессии каждому специалисту от аппаратчика производственного цеха до технологов и руководителей высшего звена.
        </p>
      </li>
      <li class="card-item">
        <h3>Успешно работаем с 2003 года</h3>
        <p>
          Основанная более 15 лет назад, компания «Бельведер» выдержала жесткую конкуренцию не только с отечественными, но и с именитыми европейскими производителями.
          Наша компания создает материалы высочайшего качества — используем лучшее европейское и российское сырьё, контроль качества многоуровневый — химики из нашей лаборатории осуществляют обязательный входящий для сырья, контроль каждой производимой партии продукции. Сейчас у нас около 40 официальных дилеров в России и Казахстане, наши материалы представлены в 37 городах РФ.
        </p>
      </li>
      <li class="card-item">
        <h3>Ответственность и добросовестность</h3>
        <p>
          Мы гордимся своей продукцией, по этому тщательно проверяем все характеристики перед началом серийного производства в независимых лабораториях и испытательных центрах, осуществляем тщательный контроль каждой партии готовой продукции.
          Также мы ценим свою репутацию, и выполняя работы по нанесению штукатурок ставим перед собой задачу — заказчик должен быть доволен результатом.
          В крайне редких случаях допущения ошибок с нашей стороны - честно и спокойно признаём, за свой счет устраняем возникшие проблемы.
        </p>
      </li>
    </ul>
  </section>
  <section class="number">
    <h2 class="number-header">
      Бельведер в цифрах
    </h2>
    <ul class="number-list">
      <li class="number-item">
        <img src="https://png.icons8.com/dusk/50/000000/outline.png">
        <p>15 на рынке</p>
      </li>
      <li class="number-item">
        <img src="https://png.icons8.com/dusk/50/000000/outline.png">
        <p>1000+ двольных заказчиков</p>
      </li>
      <li class="number-item">
        <img src="https://png.icons8.com/dusk/50/000000/outline.png">
        <p>300+ выполненных проектов</p>
      </li>
      <li class="number-item">
        <img src="https://png.icons8.com/dusk/50/000000/outline.png">
        <p>40 городов</p>
      </li>
    </ul>
  </section>
  <section class="portfolio">

  </section>
</section>
</template>
<style type="text/css" scoped>
  .about {
    background-color: lightgray;
  }
  section {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    margin-bottom: 15px;
  }
  .header-img {
    background: url("../assets/img/about/head.jpg") no-repeat;
    width: 100%;
    height: 705px;
    text-align: left;
    color: white;
  }
  .header-img h1 {
    margin-top: auto;
    padding-top: 15%;
    font-size: 3em;
    margin-left: 5%;
    text-transform: uppercase;
  }
  .header-img p {
    margin-left: 5%;
    font-size: 1.5em;
    width: 40%;
  }
  .cards {
    background-color: white;
  }
  .card-list {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 5%;

  }
  .card-item {
    height: 350px;
    width: 450px;
    margin-bottom: 5%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    cursor: default;
  }
  .card-item:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  .card-item h3 {
    padding-top: 15px;
  }
  .card-item p{
    padding-right: 5%;
    padding-left: 5%;
  }
  .number {
    height: 350px;
    width: 100%;
    background-color: white;
  }
  .number-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 5%;
  }
  .number-header {
    padding-top:5%;
    margin-top: auto;
    text-transform: uppercase;
  }
  .number-item {
    width: 150px;
    height:150px;
  }
</style>
