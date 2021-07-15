<template lang="pug">
  .default.half-layout
    Header(qa_header)
    slot
    Footer(qa_footer)
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'TestLayout',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.half-layout .footer__container {
  justify-content: flex-end;
}
</style>
