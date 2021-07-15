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
  created() {
    console.log('this.$route', this.$route.params);
  },
};
</script>
<style>
.bg {
//background-color: tan; //background: tan image-set("/assets/img/main-bg.jpg" 1x,
//"/assets/img/main-bg@2x.jpg" 2x); background: cadetblue url("/assets/images/main-bg.jpg");
//  min-height: 300px;
}
</style>
