<template>
  <div class="flex flex-row items-center justify-center my-2 p-2 bg-purple-800 rounded-md cursor-pointer w-80">
    <img :src="url[1]" class="w-12 h-12 ounded-md object-contain" />
    <a :href="url[0]" class="ml-2" target="_blank">Open on Opensea</a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
  },
  methods: {
    copyUrl() {
      navigator.clipboard.writeText(this.url[0]);

      this.$toast.show({
        type: 'success',
        title: 'Copied!',
        message: 'Image URL copied to clipboard!',
        timeout: 5,
      });
    },
  },
};
</script>
