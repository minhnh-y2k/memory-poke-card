<template>
  <div class="group h-36 w-36 [perpective: 1000px]">
    <div @click="onFlip" :class="{ flipped: isFlip }"
      class="relative h-full w-full rounded-xl shadow-xl transition-all cursor-pointer duration-500 [transform-style:preserve-3d]">
      <div class="absolute inset-0 bg-white rounded-xl">
        <img src="~/assets/images/1.png" class="h-full w-full object-cover shadow-xl shadow-black/40 flipped">
      </div>
      <div class="absolute inset-0 bg-white rounded-xl h-full w-full [backface-visibility:hidden]">
        <img src="~/assets/images/icon_back.png" class="h-full w-full object-cover shadow-xl shadow-black/40 " alt="">
      </div>
    </div>
  </div>
</template>


<script>
export default {
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
</style>