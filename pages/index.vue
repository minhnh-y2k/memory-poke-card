<template>
  <MainScreen @on-starts="onHandleBeforeStart($event)" v-if="statusMatch === 'default'" />
  <InteractScreen v-if="statusMatch === 'match'" :config="config" @onFinish="onGetResult()" />
  <ResultScreen v-if="statusMatch === 'result'" :timer="timer" @onStartAgain="statusMatch = 'default'"/>
</template>

<script>
export default {
  data() {
    return {
      statusMatch: "result",
      timer: 0,
      startedAt: 0,
      config: {
        cols: 0,
        allCards: [],
      },
    }
  },

  methods: {
    onHandleBeforeStart(config) {
      const fisrtHalfCards = generateRandomArray(1, 64, config.rows * config.cols / 2);
      const secondHalfCards = [...fisrtHalfCards];
      const allCards = [...fisrtHalfCards, ...secondHalfCards];

      this.config.cols = config.cols;
      this.config.allCards = shuffleArray(shuffleArray(shuffleArray(allCards)));
      this.startedAt = new Date().getTime();
      this.statusMatch = "match";
    },

    onGetResult() {
      this.statusMatch = "result";
      this.timer = new Date().getTime() - this.startedAt;
    }
  }
}
</script>

<style scoped></style>
