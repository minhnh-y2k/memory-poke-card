<template>
  <div class="screen">
    <div class="grid gap-4" :class="`grid-cols-${config.cols}`">
      <Card v-for="(card, index) in config.allCards" :key="index" :card="card" @onFlip="onFlipCard($event)" />
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
    }
  },

  methods: {
    onFlipCard(card) {
      if (this.flippedCards.length >= 2) return;
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {
        if (this.flippedCards[0] === this.flippedCards[1]) {
          
        } else {
          
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.screen {
  width: 100%;
  min-height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>