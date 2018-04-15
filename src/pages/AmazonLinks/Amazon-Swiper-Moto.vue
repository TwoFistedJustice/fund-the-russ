<template>
  <f7-page>
    <!--<f7-navbar title="The Backstory" back-link="Back"></f7-navbar>-->
    <!--<f7-block strong>-->
    <f7-swiper navigation :params="{init: true, scrollbar: true, spaceBetween: 20,  observer: true, observeParents: true }">
      <f7-swiper-slide><amazon-item></amazon-item></f7-swiper-slide>
      <f7-swiper-slide><amazon-item></amazon-item></f7-swiper-slide>
      <f7-swiper-slide><amazon-item></amazon-item></f7-swiper-slide>
    </f7-swiper>
    <!--</f7-block>-->
  </f7-page>
</template>

<script>

  // import BannerAdTop from './BannerAdTop.vue';
  // import BannerAdBottom from './BannerAdBottom.vue';
  // import BannerAdAmazon from './BannerAdLarge.vue';
  import AmazonItem from './Amazon-Item.vue';

  export default {
    components: {
      AmazonItem
    }


  }
</script>
