<template>
  <div class="card group h-24 w-24 [perpective: 1000px]">
    <div @click="onFlip" :class="{ flipped: isFlip }"
      class="card-inner relative h-full w-full rounded-xl shadow-xl transition-all cursor-pointer duration-500 [transform-style:preserve-3d]">
      <div class="card-front absolute inset-0 bg-white rounded-xl">
        <div class="card-content flipped h-full w-full object-cover shadow-xl shadow-black/40"
          :style="{ backgroundImage: `url('@/assets/images/${card}.png')')` }"></div>
      </div>
      <div class="card-back absolute inset-0 bg-white rounded-xl h-full w-full [backface-visibility:hidden]">
        <div class="card-content h-full w-full object-cover shadow-xl shadow-black/40"></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    card: {
      type: [Array, String, Number, Object],
    },
  },
  data() {
    return {
      isFlip: false,
    }
  },
  methods: {
    onFlip() {
      this.isFlip = true;
    }
  },
}
</script>
<style scoped>
.flipped {
  transform: rotateY(180deg);
}
.card-front .card-content {
  background-size: cover;
  background-position: center;
}
.card-back .card-content {
  background-image: url('~/assets/images/icon_back.png');
  background-size: cover;
  background-position: center;
}
</style>