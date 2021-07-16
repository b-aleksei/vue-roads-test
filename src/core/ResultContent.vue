<template lang="pug">
  main.test
    picture-comp(
      className="test__bg"
      :fileName="`result/result${question}-`"
      :imgSetSizes="$options.imgBgSizes"
      width="320"
      height="195"
      alt="заснеженная улица")
    .result__info
      .result__status.container
        h1.result__title(v-html="info.title")
        p.result__text(v-html="info.text")
        .result__action
          share-comp(theme="blue")
          router-link(to="/roadstest/1" class="result__repeat")
            svg-el(name="repeat")
            span Пройти еще раз
      .result__marketing
        .container
          p.result__marketing-info <b>Чтобы любая дорога была для вас безопасной</b> — следите за качеством резины и переобувайтесь вовремя. С зимними шинами <b>Cordiant</b> ваша машина будет уверенно выезжать из снежных заносов и стабильно вести себя на обледенелых трассах. Прямо сейчас комплект зимних шин <b>Cordiant</b> можно купить со скидкой 15%! Просто введите промокод <mark>CORDIHACKER</mark> при покупке шин на <a href='https://koleso.ru'>koleso.ru</a>.
          p.result__expiry Срок действия промокода до <b>ХХ.ХХ.2020</b>
          button(class="btn-light-blue result__btn-bye" type="button") Купить шины со скидкой
</template>

<script>
import PictureComp from '@/components/PictureComp.vue';
import SvgEl from '@/components/SvgEl.vue';
import ShareComp from '@/core/ShareComp.vue';

export default {
  name: 'ResultContent',
  components: {
    ShareComp,
    SvgEl,
    PictureComp,
  },
  data: () => ({
    info: {},
  }),
  props: {
    question: {
      type: Number,
      require: true,
    },
  },
  created() {
    const resultData = this.$utils.loadJSON('template/result.json');
    this.info = resultData[`result${this.question}`];
  },
  imgBgSizes: [320, 640, 1024, 2048],
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

.test__bg {
  @include breakpoint(lg) {
    height: 100%;
    object-fit: cover;
  }
}

.result__info {
  padding-top: rem(40);

  @include breakpoint(lg) {
    padding-top: rem(117);
    padding-bottom: rem(80);
  }
}

.result__status {
  margin-bottom: rem(24);

  @include breakpoint(lg) {
    padding-left: rem(104);
    padding-right: rem(80);
    width: initial;
  }
}

.result__title {
  margin-bottom: rem(16);
  font-family: $Play;
  font-weight: bold;
  font-size: 35px;
  line-height: 40px;
}

.result__text {
  margin-bottom: rem(40);
  font-weight: bold;
  font-size: 18px;

  @include breakpoint(lg) {
    margin-bottom: rem(16);
  }
}

.result__action {
  display: flex;
  flex-direction: column;
  align-items: center;

  @include breakpoint(lg) {
    flex-direction: row;
  }
}

.result__repeat {
  display: flex;
  align-items: center;
  margin-top: rem(24);
  color: $light-blue;
  transition: color $duration-default;

  @include breakpoint(lg) {
    order: -1;
    margin: 0 rem(52) 0 0;
  }

  &:hover,
  &:focus {
    color: $white;
  }

  svg {
    width: rem(40);
    height: rem(40);
    margin-right: rem(16);
    flex-shrink: 0;
  }
}

.result__expiry {
  b {
    color: $aquamarine;
  }
}

.result__marketing {
  padding-top: rem(24);
  margin-bottom: 5px;
  border-top: 2px solid $white;

  @include breakpoint(lg) {
    padding-left: rem(104);
    padding-right: rem(80);
  }

  .container {
    @include breakpoint(lg) {
      width: initial;
    }
  }
}

.result__marketing-info {
  margin-bottom: rem(20);

  a {
    font-weight: bold;
    color: $light-blue;
    text-decoration: underline;
  }

  mark {
    font-weight: bold;
    background: #002B57;
    color: $aquamarine;
  }
}

.result__btn-bye {
  margin-top: rem(40);
}
</style>
