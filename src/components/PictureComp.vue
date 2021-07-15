<template lang="pug">
  picture
    source(
      type="image/webp"
      :srcset="getImage('webp')"
      :sizes="sizes")
    img(
      :class="className"
      :src="$utils.loadAsset(fileName + `${imgSetSizes[0]}.${ext}`)"
      :srcset="getImage(ext)"
      :sizes="sizes"
      :width="width" :height="height" :alt="alt")
</template>

<script>
export default {
  name: 'PictureComp',
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
    sizes: {
      type: String,
      default() {
        return '100vw';
      },
    },
    ext: {
      type: String,
      default() {
        return 'jpg';
      },
    },
    imgSetSizes: Array,
  },
  methods: {
    getImage(ext) {
      let str = '';
      this.imgSetSizes.forEach((i) => {
        str += `${this.$utils.loadAsset(`${this.fileName}${i}.${ext}`)} ${i}w,`;
      });
      return str;
    },
  },
};
</script>
