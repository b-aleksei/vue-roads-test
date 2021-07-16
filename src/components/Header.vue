<template>
  <header class="header">
    <div class="header__inner container">
      <a class="logo logo-lifehacker"
         :href="$utils.info.main.url"
         target="_blank"
         rel="noopener"
         :aria-label="$utils.info.main.text"
         qa_logo_lh_header
      >
        <SvgEl name="logo"/>
      </a>
      <a class="logo logo-partner"
         :href="$utils.info.partner.url"
         target="_blank"
         rel="noopener"
         :aria-label="$utils.info.partner.text"
         qa_logo_partner_header
      >
        <SvgEl name="cordiant"/>
      </a>
    </div>
  </header>
</template>

<script>
import SvgEl from './SvgEl.vue';

export default {
  name: 'Header',
  components: {
    SvgEl,
  },
};
</script>
<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: rem(60);
  background: linear-gradient(180deg, #000 0%, rgba(0, 80, 138, 0) 100%);
  z-index: 1;

  @include breakpoint('lg') {
    height: rem(110);
  }
}
.header__inner {
  padding-top: rem(11);
  display: flex;
  justify-content: space-between;
}

.logo {
  color: $white;
  transition: color $duration-default;
}

.logo-lifehacker {
  width: rem(75);
  height: rem(14);
  flex-shrink: 0;

  @include breakpoint('lg') {
    width: rem(99);
    height: rem(18);
  }

  &:hover,
  &:focus {
    color: $lifehacker;
  }
}

.logo-partner {
  width: rem(116);
  height: rem(14);
  flex-shrink: 0;

  @include breakpoint('lg') {
    width: rem(154);
    height: rem(18);
  }
}
</style>
