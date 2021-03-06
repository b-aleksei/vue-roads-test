<template lang="pug">
  main.test
    .test__img-container
      picture-2x(
        className="test__img-mirror"
        :fileName="updateFace"
        ext="png"
        width="128"
        height="59"
        alt="зеркало заднего вида")
      picture-comp(
        className="test__img-rudder"
        fileName="test/rudder"
        sizes="(min-width: 1280px) 50vw, 100vw"
        :imgSetSizes="$options.imgRudderSizes"
        ext="png"
        width="1055"
        height="455"
        alt="салон автомобиля")
      picture-comp(
        className="test__bg"
        :fileName="`test/test${question}-`"
        sizes="(min-width: 1280px) 50vw, 100vw"
        :imgSetSizes="$options.imgBgSizes"
        width="320"
        height="195"
        alt="заснеженная улица")
    .question
      .container.question__inner
        .question__counter
          span.current(v-html="question")
          span /
          span.total(v-html="totalQuestions")
        template(v-if="!currentAnswer")
          b.question__title Где эта дорога?
          .question__answers-list
            button.question__answer(
              v-for="item in info.answers"
              v-html="item.answer"
              @click="onClickAnswer($event, item)")
        template(v-if="currentAnswer")
          b.question__feedback(v-html="feedback")
          p.question__marketing(v-if="marketing" v-html="marketing")
          a.btn-light-blue.question__btn-next(
            @click="updateRoute") Далее
</template>

<script>
import PictureComp from '@/components/PictureComp.vue';
import Picture2x from '@/components/Picture2x.vue';

export default {
  name: 'QuestionContent',
  components: {
    Picture2x,
    PictureComp,
  },
  data: () => ({
    totalQuestions: 6,
    info: {},
    currentAnswer: null,
    feedback: '',
    marketing: '',
  }),
  props: {
    question: {
      type: Number,
      require: true,
    },
  },
  computed: {
    updateFace() {
      if (this.currentAnswer === null) {
        return 'test/normal-face';
      }
      return this.currentAnswer === this.info.rightAnswerId
        ? 'test/joyful-face' : 'test/angry-face';
    },
  },
  imgBgSizes: [320, 640, 1600, 3200],
  imgRudderSizes: [1025, 2050],
  created() {
    this.renderQuestion();
  },
  methods: {
    renderQuestion() {
      const questionsData = this.$utils.loadJSON('template/questions.json');
      if (questionsData && this.question) {
        this.totalQuestions = Object.keys(questionsData).length;
        this.info = questionsData[`question${this.question}`];
        this.marketing = questionsData[`question${this.question}`].marketing;
        this.feedback = '';
      }
    },
    onClickAnswer(e, answerObj) {
      e.currentTarget.classList.add('active');
      this.currentAnswer = answerObj.id;
      this.feedback = answerObj.feedback;
      if (answerObj.id === this.info.rightAnswerId) {
        this.$utils.totalPoints += 1;
      }
    },
    updateRoute() {
      this.currentAnswer = null;
      if (this.question === this.totalQuestions) {
        if (this.$utils.totalPoints >= 5) {
          this.$router.push('/result/1');
          return;
        }
        if (this.$utils.totalPoints >= 3) {
          this.$router.push('/result/2');
          return;
        }
        this.$router.push('/result/3');
        return;
      }
      this.$router.replace(`/roadstest/${this.question + 1}`);
    },
  },
  watch: {
    question() {
      this.renderQuestion();
    },
  },
};
</script>

<style lang="scss">
.test {
  background: $blue;

  @include breakpoint(lg) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

.test__img-container {
  position: relative;
}

.test__img-mirror {
  position: absolute;
  top: 0;
  right: 50%;
  transform: translate(50%);
  width: rem(128);

  @include breakpoint(lg) {
    z-index: 2;
    width: rem(320);
    right: rem(48);
    transform: none;
  }
}

.test__img-rudder {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.test__bg {
  @include breakpoint(lg) {
    height: 100%;
    object-fit: cover;
  }
}

.question {
  border-top: 2px solid $white;

  @include breakpoint(lg) {
    border-top: none;
    border-left: 2px solid $white;
  }
}

.question__inner {
  display: flex;
  flex-direction: column;
  padding: rem(25) rem(16) 0;
  width: initial;

  @include breakpoint(lg) {
    padding: 78px 80px 78px 104px;
  }
}

.question__counter {
  margin-bottom: rem(16);

  @include breakpoint(lg) {
    margin-bottom: rem(27);
  }
}

.question__title {
  margin-bottom: rem(29);
  font-family: $Play;
  font-weight: bold;
  font-size: rem(37);
  line-height: rem(43);

  @include breakpoint(lg) {
    text-align: center;
    margin-top: rem(27);
    font-size: rem(45);
    line-height: rem(52);
  }
}

.question__answers-list {
  display: grid;
  row-gap: rem(15);
}
.question__answer {
  min-height: rem(82);
  padding: rem(16);
  font-size: rem(14);
  text-align: left;
  border-radius: 3px;
  background: $blue-sky;
  transition: color $duration-default, background-color $duration-default;

  &:hover,
  &:focus {
    color: $dark-blue;
    background: $light-blue;
  }

  @include breakpoint(lg) {
    font-size: rem(16);
  }

  &.active {
    background: $white;
  }
}

.question__btn-next {
  margin-right: auto;
}

.question__feedback {
  margin-bottom: rem(24);
  font-weight: bold;
  font-size: rem(18);

  @include breakpoint(lg) {
    margin-top: 58px;
  }
}

.question__marketing {
  margin-bottom: rem(40);
  font-weight: 700;

  a {
    color: $light-blue;
    text-decoration: underline;
  }
}
</style>
