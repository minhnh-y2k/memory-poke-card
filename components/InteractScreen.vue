<template>
  <div class="screen w-full h-screen bg-black text-white flex justify-center items-center">
    <div :class="`grid grid-cols-${config.cols} gap-4`">
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

  data() {
    return {
      
    }
  },
}
</script>

<style scoped></style>