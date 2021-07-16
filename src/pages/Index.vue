<template lang="pug">
  DefaultLayout
    main-content
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import MainContent from '@/core/MainContent.vue';

export default {
  name: 'Index',
  components: {
    MainContent,
    DefaultLayout,
  },
};
</script>
<style>
</style>
