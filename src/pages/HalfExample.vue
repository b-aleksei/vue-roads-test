<template lang="pug">
  test-layout
    question-content(
      :question="currentQuestion")
</template>

<script>
import TestLayout from '@/layouts/TestLayout.vue';
import QuestionContent from '@/core/QuestionContent.vue';

export default {
  name: 'HalfExample',
  components: {
    QuestionContent,
    TestLayout,
  },
  data: () => ({
    currentQuestion: 123,
  }),
  created() {
    console.log('this.$route', this.$route, this.$route.params);
    this.currentQuestion = this.$route.params.question;
    if (this.currentQuestion) {
      console.log('this.currentQuestion: ', this.currentQuestion);
    }
  },
};
</script>

<style scoped lang="scss">
  .half-example {
    color: red;
    @include flex(flex, $dir: column);
    flex: 1 0 auto;

    &__right {
      flex: 1 0 auto;
    }
  }
</style>
