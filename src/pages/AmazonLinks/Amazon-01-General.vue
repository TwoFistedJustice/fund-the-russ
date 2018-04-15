<template>
  <f7-page>
    <f7-navbar title="Product Recommendations" back-link="Back"></f7-navbar>
    <!--<f7-block-title>The Backstory</f7-block-title>-->

        <!--<swiper-moto></swiper-moto>-->



      <!--<banner-ad-bottom></banner-ad-bottom>-->

  </f7-page>
</template>

<script>

  import BannerAdTop from './../BannerAdTop.vue';
  import BannerAdBottom from './../BannerAdBottom.vue';
  import AmazonItem from './Amazon-Item.vue';
  import SwiperMoto from './Amazon-Swiper-Moto.vue';
  // import SwiperMoto from './Amazon-Item.vue';

  export default {
    components: {

      BannerAdBottom,
      BannerAdTop,
      // SwiperMoto,
      // AmazonItem
    }


  }
</script>
