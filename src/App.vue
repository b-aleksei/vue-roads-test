<template lang="pug">
  div(id="app")
    router-view
    //Index(v-if="$route.fullPath === '/'")
</template>

<script>

import Index from './pages/Index.vue';
import HalfExample from './pages/HalfExample.vue';

export default {
  components: {
    HalfExample,
    Index,
  },
};
</script>
<style>

</style>
