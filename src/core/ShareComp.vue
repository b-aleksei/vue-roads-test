<template lang="pug">
  .share(:class="getTheme")
    social-sharing(
      :url="url"
      :title="title"
      :description="description"
      :image="image"
      :twitterUser="twitterUser"
      :networkTag="networkTag"
      :redirect="redirect"
      @open="shareDataLayer"
      inline-template)
      .share__icons
        network.share__social.share__social--tw(network="twitter")
          svg(qa_button_share_tw)
            use(:xlink:href="$utils.loadAsset('tw', true)")
        network.share__social.share__social--vk(network="vk")
          svg(qa_button_share_vk)
            use(:xlink:href="$utils.loadAsset('vk', true)")
        network.share__social.share__social--fb(network="facebook")
          svg(qa_button_share_fb)
            use(:xlink:href="$utils.loadAsset('fb', true)")
</template>

<script>
import Meta from '@/utils/meta';

export default {
  name: 'ShareComp',
  data: (context) => ({
    info: context.$utils.loadJSON('template/common.json'),
    socials: [
      {
        name: 'twitter',
      },
      {
        name: 'vk',
      },
      {
        name: 'facebook',
      },
    ],
  }),
  props: {
    theme: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: `${window.location.origin}${window.location.pathname}`,
    },
    title: {
      type: String,
      default: Meta.getMeta('og:title'),
    },
    description: {
      type: String,
      default: Meta.getMeta('og:description'),
    },
    image: {
      type: String,
      default: Meta.getMeta('og:image'),
    },
    twitterUser: {
      type: String,
      default: 'ru_lh',
    },
    networkTag: {
      type: String,
      default: 'div',
    },
    eventAction: {
      type: String,
      default: '',
    },
  },
  computed: {
    getTheme() {
      return this.theme ? `share--${this.theme}` : '';
    },
    redirect() {
      return `${window.location.origin}/special/${this.info.settings.projectSlug}/`;
    },
  },
  methods: {
    shareDataLayer(eventLabel) {
      window.dataLayer.push({
        event: 'passEventToGa',
        eventCategory: 'Спецпроект',
        eventAction: `${this.info.settings.projectName}_социальная активность${this.eventAction}`,
        eventLabel,
        eventValue: 1,
      });
    },
  },
};
</script>

<style lang="scss">
.share {
  $root: &;

  &__icons {
    @include flex(flex, center);
  }

  &__social {
    width: rem(21);
    height: rem(18);
    overflow: hidden;
    cursor: pointer;
    @include flex(flex, center, center);

    &:not(:last-of-type) {
      margin-right: rem(25);
    }

    svg {
      display: block;
      transition: fill $ease;
      height: 100%;
      fill: $black;
    }
  }
  &--blue {
    #{$root}__social {
      width: 40px;
      height: 40px;
      background: $light-blue;
      border-radius: 50%;
      transition: background-color $duration-default;

      svg {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        fill: $dark-blue;
      }

      @include hover() {
        background: $white;
      }
    }
  }
}
</style>
