<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              Обратная связь
            </slot>
            <button class="close" @click="$emit('close')"><span>X</span></button>
          </div>

          <div class="modal-body">
            <slot name="body">
              <form>
                <input v-model="name" placeholder="Ваше имя" type="text">
                <input v-model="phone" placeholder="Телефон" type="tel">
                <input v-model="mail" placeholder="E-mail" type="email">
                <input v-model="comment" placeholder="Комментарий" type="text" id="comment">
              </form>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')">
                <span>Oтправить</span>
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
	export default {
  name: "modal"
};
</script>
<style scoped>
  .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 45px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
  .close {
    float: right;
    border: 1px solid black;
    background-color: transparent;
    cursor: pointer;
  }
.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  background-color: #008CBA;
  padding: 10px;
  color: white;
  border: none;
  cursor: pointer;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
  input {
    margin: 5px;
    padding: 5px;
    width: 93.5%;
  }
  #comment {
    height: 45px;
  }

</style>
