<template>
  <div class="text-white">
    <div class="text-center mt-12 max-w-3xl mx-auto">
      <h1 class="font-semibold text-4xl">NFT Search</h1>
      <p class="text-lg mt-1">Quickly upload image and locate on NFT market</p>
      <Uploader ref="uploader" />
    </div>
    <BackgroundEffects />
  </div>
</template>

<script>
export default {
  methods: {
    async selectUploader(event) {
      await this.$store.commit('data/selectUploader', event.target.value);
    },
  },
};
</script>
