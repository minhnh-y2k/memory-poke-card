<template>
  <div class="w-full h-screen flex flex-col justify-center items-center bg-black text-white text-center">
    <h1 class="text-7xl uppercase font-bold m-0">Memory Poke Card</h1>
    <p class="text-3xl">Select mode to start game</p>
    <div class="modes mt-8 flex">
      <button @click="onStart(4, 4)" class="flex flex-col justify-center items-center w-36 h-36 rounded-3xl border-2 m-4">
        <span class="text-3xl">4x4</span>
        <span class="text-xl">Easy</span>
      </button>
      <button @click="onStart(6, 6)" class="flex flex-col justify-center items-center w-36 h-36 rounded-3xl border-2 m-4">
        <span class="text-3xl">6x6</span>
        <span class="text-xl">Normal</span>
      </button>
      <button @click="onStart(8, 8)" v-if="isDesktop"
        class="flex flex-col justify-center items-center w-36 h-36 rounded-3xl border-2 m-4">
        <span class="text-3xl">8x8</span>
        <span class="text-xl">Hard</span>
      </button>
      <button @click="onStart(10, 10)" v-if="isDesktop"
        class="flex flex-col justify-center items-center w-36 h-36 rounded-3xl border-2 m-4">
        <span class="text-3xl">10x10</span>
        <span class="text-xl">Super Hard</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDesktop: true, // giả định ban đầu là màn hình desktop
      isTablet: false,
      isMobile: false
    }
  },

  emits: ['onStarts'],

  methods: {
    onStart(rows, cols) {
      this.$emit('onStarts', { rows, cols });
    },

    handleMediaQueryChange(mediaQuery) {
      if (mediaQuery.matches) {
        // nếu màn hình có kích thước nhỏ hơn 1024px thì ẩn phần tử ở màn hình desktop và hiển thị phần tử ở màn hình tablet hoặc mobile
        this.isDesktop = false;
        this.isTablet = mediaQuery.matches && window.innerWidth < 768; // kiểm tra kích thước màn hình và chỉ hiển thị ở màn hình tablet
        this.isMobile = mediaQuery.matches && window.innerWidth >= 768; // kiểm tra kích thước màn hình và chỉ hiển thị ở màn hình mobile
      } else {
        // nếu màn hình có kích thước lớn hơn 1024px thì ẩn phần tử ở màn hình tablet và mobile và hiển thị phần tử ở màn hình desktop
        this.isDesktop = true;
        this.isTablet = false;
        this.isMobile = false;
      }
    }
  },

  mounted() {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    // lắng nghe sự kiện thay đổi của media query và cập nhật giá trị của biến isDesktop và isMobile
    mediaQuery.addEventListener('change', this.handleMediaQueryChange);
    this.handleMediaQueryChange(mediaQuery);
  }
}
</script>

<style scoped></style>