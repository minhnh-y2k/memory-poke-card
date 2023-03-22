<template>
  <div class="card">
    <div class="card-inner" @click="onFlip" :class="{ flipped: isFlip }">
      <div class="card-face card-front">
        <div class="card-content flipped"></div>
      </div>
      <div class="card-face card-back">
        <div class="card-content"></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    card: {
      type: [Array, String, Number, Object],
    },
  },
  data() {
    return {
      isFlip: false,
    }
  },
  methods: {
    onFlip() {
      this.isFlip = true;
    }
  },
}
</script>
<style lang="scss" scoped>
.flipped {
  transform: rotateY(180deg);
}

.card {
  height: 6rem;
  width: 6rem;
  perspective: 1000px;

  .card-inner {
    height: 100%;
    width: 100%;
    position: relative;
    transition: all 0.5s;
    transform-style: preserve-3d;
    cursor: pointer;
    border-radius: 0.75rem;

    .card-face {
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 0.75rem;
      background-color: #fff;
      border-radius: 0.75rem;

      >.card-content {
        background-size: cover;
        background-position: center;
        height: 100%;
        width: 100%;
      }

      &.card-front {
        .card-content {
          background-image: url('~/assets/images/1.png');
        }
      }

      &.card-back {
        backface-visibility: hidden;

        .card-content {
          background-image: url('~/assets/images/icon_back.png');
        }
      }
    }
  }
}
</style>