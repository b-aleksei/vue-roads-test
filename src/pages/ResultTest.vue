<template lang="pug">
  .default.result
    Header(qa_header)
    result-content(
      :question="currentQuestion")
    Footer(qa_footer team)
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ResultContent from '@/core/ResultContent.vue';

export default {
  name: 'ResultTest',
  components: {
    ResultContent,
    Footer,
    Header,
  },
  data: () => ({
    currentQuestion: null,
  }),
/*  methods: {
    updateUrl() {
      const { question } = this.$route.params;
      if (question) {
        this.currentQuestion = +question;
      }
    },
  },*/
  created() {
    this.currentQuestion = +this.$route.params.question;
    this.$utils.totalPoints = 0;
/*    if (question) {
      this.currentQuestion = +question;
    }*/
  },
/*  watch: {
    $route() {
      this.updateUrl();
    },
  },*/
};
</script>

<style lang="scss">

</style>
