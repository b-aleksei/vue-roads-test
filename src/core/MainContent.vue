<template lang="pug">
  main
    picture-comp(
      className="default__bg"
      fileName="main-bg"
      :imgSetSizes="$options.mainBgSizes"
      width="320"
      height="249"
      alt="дорожная развязка")
    section.intro
      .intro__title
        h1.container Узнаете ли вы Россию <span>по дорогам?</span>
      .intro__middle
        .container
          p.intro__text Мы составили этот тест вместе с производителем шин <a href="https://cordiant.ru/">Cordiant</a>, чтобы вы проверили, сможете ли отличить российские дороги от остальных. Активируйте внутреннего Шерлока и вперёд! Пройдёте тест до конца — получите <span>скидку 15%</span> на зимнюю резину.
          router-link(:to={path: "/halfexample/1"} class="btn-light-blue intro__run-test") Пройти тест!
</template>

<script>
import PictureComp from '@/components/PictureComp.vue';

export default {
  name: 'MainContent',
  components: {
    PictureComp,
  },
  mainBgSizes: [320, 640, 1280, 2560],
};
</script>

<style lang="scss">
.intro {
  background: $dark-blue;

  @include breakpoint('lg') {
    position: absolute;
    top: rem(73);
    right: 0;
    width: rem(623);
    z-index: 2;
  }
}

.intro__title {
  padding-top: rem(22);
  padding-bottom: rem(24);
  margin-bottom: 8px;
  border-top: 2px solid $white;
  border-bottom: 2px solid $white;

  & > .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: rem(23);
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1.8px;

    @include breakpoint('lg') {
      width: rem(428);
      align-items: flex-start;
    }
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: rem(36);
    font-weight: 700;
    text-transform: uppercase;
  }
}

.intro__middle {
  padding-top: rem(32);
  padding-bottom: rem(32);
  border-top: 2px solid $white;
  border-bottom: 2px solid $white;

  & > .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include breakpoint('lg') {
      width: rem(428);
      align-items: flex-start;
    }
  }
}

.intro__text {
  margin-bottom: rem(40);

  a, span {
   font-weight: bold;
  }

  a {
    color: $light-blue;
    text-decoration: underline;
  }
}

.intro__run-test {
  margin-bottom: rem(38);
}
</style>
