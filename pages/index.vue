<template>
  <div class="text-white">
    <div class="text-center mt-12 max-w-3xl mx-auto">
      <h1 class="font-semibold text-4xl">NFT Search</h1>
      <p class="text-lg mt-1">Quickly upload image and locate on NFT market, support <strong>ALL NFTs</strong>, but more accurate for <a href="https://boredapeyachtclub.com/" target="_blank"><strong>BAYC</strong></a> and <a href="https://www.azuki.com/" target="_blank"><strong>Azuki</strong></a> !</p>
      <Uploader ref="uploader" />
    </div>
    <BackgroundEffects />
    <p class="bottom-0 right-0 absolute w-2/5 pointer-events-none">
    &nbsp;
    <a href="https://github.com/tandpfun/uploadr" style="font-size:20%;">https://github.com/tandpfun/uploadr</a>
    </br>
    </p>
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
