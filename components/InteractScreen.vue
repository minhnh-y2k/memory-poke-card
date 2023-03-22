<template>
  <div class="container relative min-w-full min-h-screen flex justify-center items-center">
    <button @click="onStartAgain"
      class="absolute top-0 left-0 text-2xl text-white p-3 m-2 border-2 rounded-xl transition-all duration-300 hover:bg-white hover:text-black">
      Home
    </button>
    <div class="grid gap-4" :class="{
      'grid-cols-3': config.cols === 3,
      'grid-cols-4': config.cols === 4,
      'grid-cols-5': config.cols === 5,
      'grid-cols-6': config.cols === 6,
      'grid-cols-8': config.cols === 8,
      'grid-cols-10': config.cols === 10,
      'grid-cols-12': config.cols === 12,
    }">
      <Card v-for="(cardName, index) in config.allCards" @onFlip="onFlipCard($event)" :key="index"
        :card="{ id: index, value: cardName }" :ref="`card-${index}`" :flippedCards="flippedCards" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => ({
        cols: 0,
        allCards: [],
      }),
    },
  },

  data() {
    return {
      flippedCards: [],
      countMatchedCards: 0,
    }
  },

  methods: {
    onFlipCard(card) {
      if (this.flippedCards.length >= 2) return;
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {
        if (this.flippedCards[0].value === this.flippedCards[1].value) {
          setTimeout(() => {
            this.$refs[`card-${this.flippedCards[0].id}`][0].onHidden();
            this.$refs[`card-${this.flippedCards[1].id}`][0].onHidden();

            this.countMatchedCards += 2;

            if (this.countMatchedCards === this.config.allCards.length) {
              this.$emit("onFinish");
            }

            this.flippedCards = [];
          }, 800);
        } else {
          setTimeout(() => {
            this.$refs[`card-${this.flippedCards[0].id}`][0].onFlipBack();
            this.$refs[`card-${this.flippedCards[1].id}`][0].onFlipBack();

            this.flippedCards = [];
          }, 600);
        }
      }
    },

    onStartAgain() {
      this.$emit('onStartAgain');
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-image: linear-gradient(rgba(50, 61, 104, 0.5), rgba(44, 119, 118, 0.5)), url('../assets/images/bg_play.jpg');
  background-size: cover;
  background-position: center;
}
</style>
