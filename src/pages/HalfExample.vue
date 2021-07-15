<template lang="pug">
  .default.half-layout
    Header(qa_header)
    question-content(
      :question="currentQuestion")
    Footer(qa_footer)
</template>

<script>
import QuestionContent from '@/core/QuestionContent.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'HalfExample',
  components: {
    Header,
    Footer,
    QuestionContent,
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

</style>
