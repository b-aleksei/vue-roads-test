<template lang="pug">
  footer.footer(qa_footer)
    .container.footer__container
      ShareComp.footer__share(
        v-if="share"
        theme="blue")
      .footer__copyright
        a(
          :href="info.main.url"
          target="_blank"
          rel="noopener"
          v-html="info.main.text"
          ga_logo_lh_footer)
        | |
        a(v-if="info.partner" :href="info.partner.url" target="_blank" rel="noopener"
          v-html="info.partner.text" qa_logo_partner_footer qa_link_external)
        span © {{ getCurrentYear() }}
</template>

<script>
import ShareComp from '@/core/ShareComp.vue';

export default {
  name: 'Footer',
  data: (context) => ({
    info: context.$utils.loadJSON('template/common.json'),
  }),
  props: {
    share: Boolean,
  },
  components: {
    ShareComp,
  },
  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss">
.footer {
  margin-top: auto;
  background-color: $blue;
  padding: rem(30) 0;

  @include breakpoint(sm) {
    padding: 0;
    height: rem(72);
  }

  @include breakpoint(lg) {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    background: none;
  }

  &__container {
    text-align: center;

    @include breakpoint(sm) {
      @include flex(flex, center, space-between);
      height: 100%;
      text-align: left;
    }
  }

  &__share {
    margin-bottom: rem(32);
    @include flex(flex, center, center);

    @include breakpoint(sm) {
      justify-content: flex-start;
      margin-bottom: 0;
    }
  }

  &__copyright {
    font-size: 12px;
    line-height: 15px;
    @include flex(inline-flex, center);
    color: $white;

    a {
      margin-right: 5px;
      font-weight: 700;
      color: $light-blue;
      transition: color $duration-default;
      text-decoration: underline;

      &:not(:first-of-type) {
        margin-left: 5px;
      }

      @include hover(true) {
        color: $white;
      }

      @include breakpoint(lg) {
        transition: color $ease;
      }
    }

    span {
      line-height: rem(20);
    }

    @include breakpoint(sm) {
      order: 1;
    }
  }
}

.half-layout .footer__container {
  justify-content: flex-end;
}
</style>
