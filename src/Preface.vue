<template>
  <div id="app">
    <p id="title">Симулятор лифта</p>
    <span>Введите количество этажей</span>
    <input type="text" ref="input" :value="floor" @input="update($event.target.value)" @keyup.enter="start()">
    <span>{{ title }}</span>
    <p>（Нажмите клавишу Enter）</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      floor: 0
    }
  },
  methods: {
    update (value) {
      value = parseInt(value);
      if (Number.isInteger(value)) {
        this.floor = value;
      }
      this.$refs.input.value = this.floor;
    },
    start () {
      if (this.floor > 999 || this.floor < 1) {
        alert('Давай без самодеятельности');
        this.floor = 0;
        return;
      }
      this.$emit('start', this.floor);
    }
  },
  computed: {
    title () {
      if (this.floor > 100) {
        return "Небоскрёб";
      } else if (this.floor > 50) {
        return "Высокое здание";
      }else if (this.floor > 10) {
        return "Обычное здание";
      } else if (this.floor > 0) {
        return "Небольшое здание";
      } else {
        return "";
      }
    }
  }
}
</script>

<style>
  p {
    margin-bottom: 0;
    font-size: 14px;
    color: #aaa;
  }
  p#title {
    color: orange;
    font-size: 28px;
    line-height: 58px;
  }
  #app {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: 40px;
  }
  #app input[type="text"]{
    color: #fff;
    background-color: #111;
    max-width: 2em;
    line-height: 30px;
    border: 0;
    border-bottom: 2px solid #fff;
    text-align: center;
    font-family: Helvetica, sans-serif;
    font-size: 35px;
    outline: none;
  }
</style>
