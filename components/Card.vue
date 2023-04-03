<template>
  <div class="[perpective: 1000px] h-20 w-20 select-none md:h-24 md:w-24">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]"
      @click="onFlip" :class="{
        flipped: isFlipped,
        hidden: isHidden,
        'cursor-pointer': !isDisabled,
      }">
      <div class="card-front absolute inset-0 flex items-center justify-center rounded-xl bg-white shadow-sm">
        <!-- <img class="[transform: rotateY(180deg)]" :src="`/images/pocket-monsters/${card.value}.png`" /> -->
        <div class="h-full w-full bg-cover bg-center" :style="{
          backgroundImage: `url(/images/pocket-monsters/${card.name}.png)`,
        }"></div>
      </div>
      <div
        class="absolute inset-0 flex items-center justify-center rounded-xl bg-cyan-100 shadow-sm [backface-visibility:hidden]">
        <div class="card-back h-3/6 w-3/6 bg-cover bg-center"></div>
      </div>
    </div>
  </div>
</template>

<!-- <script>
export default {
  props: {
    card: {
      type: Object,
      default: () => ({
        id: 0,
        name: "",
      }),
    },
    flippedCards: Array,
  },
  data() {
    return {
      isFlipped: false,
      isDisabled: false,
      isHidden: false,
    }
  },
  methods: {
    onFlip() {
      if (this.flippedCards.length >= 2) return;
      if (this.isDisabled) return;

      this.isFlipped = true;
      this.isDisabled = true;
      if (this.isFlipped) this.$emit("onFlip", this.card);
    },

    onFlipBack() {
      this.isFlipped = false;
      this.isDisabled = false;
    },

    onHidden() {
      this.isHidden = true;
    },
  },
}
</script> -->

<script setup>
const props = defineProps({
  card: {
    type: Object,
    default: () => ({
      id: 0,
      name: "",
    }),
  },
  flippedCards: Array,
});
const emits = defineEmits(["onFlip"]);

const isFlipped = ref(false);
const isDisabled = ref(false);
const isHidden = ref(false);

const onFlip = () => {
  if (props.flippedCards.length >= 2) return;
  if (isDisabled.value) return;

  isFlipped.value = true;
  isDisabled.value = true;
  if (isFlipped.value) emits("onFlip", props.card);
};
const onFlipBack = () => {
  isFlipped.value = false;
  isDisabled.value = false;
};
const onHidden = () => {
  isHidden.value = true;
};

defineExpose({
  props,
  onFlipBack,
  onHidden,
});
</script>

<style lang="scss" scoped>
.flipped {
  transform: rotateY(180deg);
}

.card-back {
  background-image: url("../assets/images/icon_back.png");
}
</style>
