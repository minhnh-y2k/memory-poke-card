<template>
  <MainScreen @on-starts="onHandleBeforeStart($event)" v-if="statusMatch === 'default'" />
  <InteractScreen v-if="statusMatch === 'match'" />
</template>

<script>
export default {
data() {
  return {
    statusMatch: "default",
    timer: 0,
    config: {
      rows: 0,
      cols: 0,
      allCards: [],
    },
  }
},

methods: {
  onHandleBeforeStart(config) {
    this.config.rows = config.rows;
    this.config.cols = config.cols;

    const totalCards = this.config.rows * this.config.cols;
    const fisrtHalfCards = generateRandomArray(1, 64, totalCards / 2);
    const secondHalfCards = [...fisrtHalfCards];
    const allCards = [...fisrtHalfCards, ...secondHalfCards];
  
    this.config.allCards = shuffleArray(allCards);

    console.log(this.config.allCards);

    this.statusMatch = "match";
  }
}
}
</script>

<style scoped></style>