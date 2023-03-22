<template>
  <div class="screen">
    <div class="grid gap-4" :class="`grid-cols-${config.cols}`">
      <Card v-for="(cardName, index) in config.allCards" @onFlip="onFlipCard($event)" :key="index"
        :card="{ id: index, value: cardName }" :ref="`card-${index}`" :flippedCards="flippedCards" />
    </div>
  </div>
</template>

<script>
export default {
  emits: ["onFinish"],

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
          console.log("Matched");
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
          console.log("Not Matched");
          setTimeout(() => {
            this.$refs[`card-${this.flippedCards[0].id}`][0].onFlipBack();
            this.$refs[`card-${this.flippedCards[1].id}`][0].onFlipBack();

            this.flippedCards = [];
          }, 600);
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
