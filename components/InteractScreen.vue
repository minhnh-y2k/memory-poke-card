<template>
  <div class="screen">
    <div class="grid gap-4" :class="`grid-cols-${config.cols}`">
      <Card v-for="(card, index) in config.allCards" />
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

  methods: {
  },
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