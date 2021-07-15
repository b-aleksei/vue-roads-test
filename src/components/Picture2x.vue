<template lang="pug">
  picture
    source(
      type="image/webp"
      :srcset="getImage('webp')")
    img(
      :class="className"
      :src="$utils.loadAsset(fileName + `.${ext}`)"
      :srcset="getImage(ext)"
      :width="width" :height="height" :alt="alt")
</template>

<script>
export default {
  name: 'Picture2x',
  props: {
    className: String,
    fileName: {
      type: String,
      require: true,
    },
    width: {
      type: String,
      require: true,
    },
    height: {
      type: String,
      require: true,
    },
    alt: {
      type: String,
      require: true,
    },
    ext: {
      type: String,
      default() {
        return 'jpg';
      },
    },
  },
  methods: {
    getImage(ext) {
      if (ext === 'webp') {
        return `${this.$utils.loadAsset(`${this.fileName}.${ext}`)} 1x,
         ${this.$utils.loadAsset(`${this.fileName}@2x.${ext}`)} 2x`;
      }
      return `${this.$utils.loadAsset(`${this.fileName}@2x.${ext}`)} 2x,`;
    },
  },
};
</script>
