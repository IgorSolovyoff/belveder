<template>
  <footer class="footer">
    <div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3990.1545823370684!2d30.268961!3d59.997212000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696342263a273dd%3A0x57504ab9866f33d2!2z0YPQuy4g0J_QvtC70LXQstCw0Y8g0KHQsNCx0LjRgNC-0LLRgdC60LDRjywgNTTQsCwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjywgMTk3MTgz!5e0!3m2!1sru!2sus!4v1538061652327" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    <div class="info">
      <h2>ТВК "Интерио"</h2>
      <p>
         Телефон: <a href="tel:+79657577117">+7 965 757 7117</a><br><br>Email: <a href="mailto:spb@stav-decor.ru">spb@stav-decor.ru</a>
      </p>
    </div>
    </footer>
</template>
<script>
export default {
  name: 'mainFooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
 color: black;
 text-decoration: none;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
footer{
  height: 300px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 25px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.info{
flex-basis: 50%;
margin: auto;
}
.map{
flex-basis: 50%;
}
</style>
