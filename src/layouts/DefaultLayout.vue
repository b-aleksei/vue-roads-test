<template lang="pug">
  .default
    Header(qa_header)
    slot
    Footer(qa_footer share)
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Default',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
  .default {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    @include breakpoint(lg) {
      position: relative;
    }

    main {
      flex-grow: 1;
    }

    &__bg {
      object-fit: cover;

      @include breakpoint(lg) {
        height: 100%;
      }
    }
  }
</style>
