<template lang="pug">
  .default.half-layout
    Header(qa_header)
    question-content(
      :question="currentQuestion")
    Footer(qa_footer)
</template>

<script>
import QuestionContent from '@/core/QuestionContent.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'HalfExample',
  components: {
    Footer,
    Header,
    QuestionContent,
  },
  data: () => ({
    currentQuestion: null,
  }),
  methods: {
    updateUrl() {
      const { question } = this.$route.params;
      if (question) {
        this.currentQuestion = +question;
      }
    },
  },
  created() {
    this.updateUrl();
  },
  watch: {
    $route() {
      this.updateUrl();
    },
  },
};
</script>

<style lang="scss">

</style>
