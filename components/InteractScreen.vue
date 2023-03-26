<template>
  <div class="container relative min-w-full min-h-screen flex justify-center items-center">
    <button @click="onStartAgain"
      class="absolute top-0 left-0 text-2xl text-white p-3 m-2 border-2 rounded-xl transition-all duration-300 hover:bg-white hover:text-black">
      Home
    </button>
    <div class="grid gap-4" :class="gridColsClass">
      <Card v-for="(cardName, cardId) in config.allCards" @onFlip="onFlipCard($event)" :key="cardId"
        :card="{ id: cardId, name: cardName }" ref="cardRefs" :flippedCards="flippedCards" />
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
        if (this.flippedCards[0].name === this.flippedCards[1].name) {
          setTimeout(() => {
            this.$refs.cardRefs.forEach((cardRef) => {
              if (cardRef.card.id === this.flippedCards[0].id || cardRef.card.id === this.flippedCards[1].id) {
                cardRef.onHidden();
              }
            });

            this.countMatchedCards += 2;

            if (this.countMatchedCards === this.config.allCards.length) {
              this.$emit("onFinish");
            }

            this.flippedCards = [];
          }, 800);
        } else {
          setTimeout(() => {
            this.$refs.cardRefs.forEach((cardRef) => {
              if (cardRef.card.id === this.flippedCards[0].id || cardRef.card.id === this.flippedCards[1].id) {
                cardRef.onFlipBack();
              }
            });

            this.flippedCards = [];
          }, 600);
        }
      }
    },

    onStartAgain() {
      this.$emit('onStartAgain');
    },
  },

  computed: {
    gridColsClass() {
      return {
        "grid-cols-2": this.config.cols === 2,
        "grid-cols-3": this.config.cols === 3,
        "grid-cols-4": this.config.cols === 4,
        "grid-cols-5": this.config.cols === 5,
        "grid-cols-6": this.config.cols === 6,
        "grid-cols-8": this.config.cols === 8,
        "grid-cols-10": this.config.cols === 10,
        "grid-cols-12": this.config.cols === 12,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  background-image: linear-gradient(rgba(50, 61, 104, 0.5), rgba(44, 119, 118, 0.5)), url('../assets/images/bg_play.jpg');
  background-size: cover;
  background-position: center;
}
</style>
