<template>
  <div>
    <child :level="level">Hello world!</child>
    <div id>
      <lottie
        :options="defaultOptions"
        :height="200"
        :width="200"
        v-on:animCreated="handleAnimation"
      />
      <div>
        <p>Speed: x{{animationSpeed}}</p>
        <input
          type="range"
          value="1"
          min="0"
          max="3"
          step="0.5"
          v-on:change="onSpeedChange"
          v-model="animationSpeed"
        />
      </div>
      <button v-on:click="stop">stop</button>
      <button v-on:click="pause">pause</button>
      <button v-on:click="play">play</button>
    </div>
  </div>
</template>

<script type='text/javascript'>
import Lottie from "./lottie.vue";
import * as animationData from "../assets/space-loading.json";
import Vue from "vue";
Vue.component("child", {
  render(h) {
    const tag = ["div", "p", "strong", "h1", "h2", "textarea"][this.level];
    return h(tag, this.$slots.default);
  },
  props: {
    level: { type: Number, required: true }
  }
});
export default {
  name: "hehe",
  data() {
    return {
      level: 1,
      defaultOptions: { animationData: animationData,loop:false,autoplay:false },
      animationSpeed: 1
    };
  },
  components: { lottie: Lottie },
  methods: {
      handleAnimation: function (anim) {
        this.anim = anim;
      },
      stop: function () {
        this.anim.stop();
      },
      play: function () {
        this.anim.play();
      },
      pause: function () {
        this.anim.pause();
      },
      onSpeedChange: function () {
        this.anim.setSpeed(this.animationSpeed);
      }
    }
};
</script>
