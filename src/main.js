import Vue from 'vue'
import Preface from './Preface.vue'

import Control from './Control.vue'

new Vue({
  el: "#wrapper",
  data:{
  view: 'Preface',
  style: "preface",
  floor: 5
  },
  methods: {
  change (floor) {
    this.view = 'Elevator';
    this.style = 'content';
    this.floor = floor;
  }
},
  components: {
  Preface: Preface,
    Elevator: Control
  }
});

