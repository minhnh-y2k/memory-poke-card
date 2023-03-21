<template>
  <MainScreen @on-starts="onHandleBeforeStart($event)" v-if="statusMatch === 'default'" />
  <InteractScreen v-if="statusMatch === 'match'" :config="config" />
</template>

<script>
export default {
data() {
  return {
    statusMatch: "default",
    timer: 0,
    config: {
      cols: 0,
      allCards: [],
      startedAt: 0,
    },
  }
},

methods: {
  onHandleBeforeStart(config) {
    const fisrtHalfCards = generateRandomArray(1, 64, config.rows * config.cols / 2);
    const secondHalfCards = [...fisrtHalfCards];
    const allCards = [...fisrtHalfCards, ...secondHalfCards];
  
    this.config.cols = config.cols;
    this.config.allCards = shuffleArray(allCards);
    this.config.startedAt = new Date().getTime();
    this.statusMatch = "match";
  }
}
}
</script>

<style scoped></style>