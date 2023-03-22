<template>
  <div class="h-20 w-20 md:h-24 md:w-24 select-none [perpective: 1000px]">
    <div
      class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]"
      @click="onFlip" :class="{ 'flipped': isFlipped, 'hidden': isHidden, 'cursor-pointer': !isDisabled }">
      <div class="flex justify-center items-center card-front absolute inset-0 bg-white rounded-xl shadow-sm">
        <nuxt-img class="[transform: rotateY(180deg)]" :src="`/images/pocket-monsters/${card.value}.png`" />
      </div>
      <div
        class="flex justify-center items-center  absolute inset-0 bg-white rounded-xl shadow-sm [backface-visibility:hidden]">
        <div class="card-back h-3/6 w-3/6 bg-cover bg-center bg-[url('@/assets/images/icon_back.png')]"></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    card: {
      type: Object,
    },
    flippedCards: {
      type: Array,
    },
  },
  data() {
    return {
      isFlipped: false,
      isDisabled: false,
      isHidden: false,
    }
  },
  methods: {
    onFlip() {
      if (this.flippedCards.length >= 2) return;
      if (this.isDisabled) return;

      this.isFlipped = true;
      this.isDisabled = true;
      if (this.isFlipped) this.$emit("onFlip", this.card);
    },

    onFlipBack() {
      this.isFlipped = false;
      this.isDisabled = false;
    },

    onHidden() {
      this.isHidden = true;
    },
  },
}
</script>
<style lang="scss" scoped>
.flipped {
  transform: rotateY(180deg);
}
</style>
