<template>
  <MainScreen @on-starts="onHandleBeforeStart($event)" v-if="statusMatch === 'default'" />
  <!--  InteractScreen :config="config" -->
  <InteractScreen ref="testRef" v-if="statusMatch === 'match'" @onFinish="onGetResult()" @onStartAgain="statusMatch = 'default'" />
  <!-- ResultScreen :timer="timer" -->
  <ResultScreen v-if="statusMatch === 'result'" @onStartAgain="statusMatch = 'default'" />
</template>

<!-- <script>
export default {
  data() {
    return {
      statusMatch: "default",
      timer: 0,
      startedAt: 0,
      config: {
        cols: 0,
        cards: [],
      },
    }
  },

  methods: {
    onHandleBeforeStart(config) {
      const fisrtHalfCards = generateRandomArray(1, 64, config.rows * config.cols / 2);
      const secondHalfCards = [...fisrtHalfCards];
      const cards = [...fisrtHalfCards, ...secondHalfCards];

      this.config.cols = config.cols;
      this.config.cards = shuffleArray(shuffleArray(shuffleArray(cards)));
      this.startedAt = new Date().getTime();
      this.statusMatch = "match";
    },

    onGetResult() {
      this.statusMatch = "result";
      this.timer = new Date().getTime() - this.startedAt;
    }
  }
}
</script> -->
<script setup>
const { cols, timer, cards } = useConfig();
const statusMatch = ref('default')
const startedAt = ref(0)

const onHandleBeforeStart = (setting) => {
  const fisrtHalfCards = generateRandomArray(1, 64, setting.rows * setting.cols / 2);
  const secondHalfCards = [...fisrtHalfCards];
  const allCards = [...fisrtHalfCards, ...secondHalfCards];

  cols.value = setting.cols;
  cards.value = shuffleArray(shuffleArray(shuffleArray(allCards)));
  startedAt.value = new Date().getTime();
  statusMatch.value = 'match';
}

const onGetResult = () => {
  statusMatch.value = 'result';
  timer.value = new Date().getTime() - startedAt.value;
}
</script>

<style scoped></style>
