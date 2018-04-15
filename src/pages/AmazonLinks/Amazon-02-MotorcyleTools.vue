<template>
  <f7-page>
    <f7-navbar title="Motorycle Tools" back-link="Back"></f7-navbar>
    <f7-swiper navigation
               :params="{init: true, scrollbar: true, spaceBetween: 10, loop: true }"
               :pagination="true"  >

      <f7-swiper-slide v-for="link in getLinks"
                       :key="link.asin"
                       :link="link">

        <amazon-item :link="link"></amazon-item>
      </f7-swiper-slide>

    </f7-swiper>
    <banner-ad-bottom></banner-ad-bottom>

  </f7-page>
</template>

<script>
  import {mapGetters} from 'vuex';
  // import BannerAdTop from './BannerAdTop.vue';
  import BannerAdBottom from './../BannerAdBottom.vue';
  // import BannerAdAmazon from './BannerAdLarge.vue';
  import AmazonItem from './Amazon-Item.vue';

  export default {
    components: {
      AmazonItem,
      BannerAdBottom
    },
    computed: {
      ...mapGetters({
        getLinks: 'affiliate/GetMotoLinks'
      })
    },


  }
</script>
