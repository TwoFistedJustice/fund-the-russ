<template>
  <f7-page>
    <f7-navbar title="Product Recommendations" back-link="Back"></f7-navbar>
    <!--<f7-block-title>The Backstory</f7-block-title>-->
    <banner-ad-top></banner-ad-top>

      <f7-block strong>


        <f7-toolbar tabbar bottom-md labels>
        <f7-link tab-link="#tab1" text="General Interest"></f7-link>
        <f7-link tab-link="#tab2" text="Motorcycle Tools"></f7-link>
        <!--<f7-link tab-link="#tab3" text="Add/Delete"></f7-link>-->
        </f7-toolbar>

        <f7-tabs swipeable data-loop="true">

        <f7-tab id="tab1">
        <!--<amazon-item></amazon-item>-->
        <!--<swiper-moto></swiper-moto>-->
        </f7-tab>
        <f7-tab id="tab2" tab>
        <!--<shopping-list></shopping-list>-->
        </f7-tab>
        <!--<f7-tab id="tab3">-->
        <!--<supplies-modify></supplies-modify>-->
        <!--</f7-tab>-->
        </f7-tabs>


      </f7-block>


      <banner-ad-bottom></banner-ad-bottom>

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
      SwiperMoto,
      AmazonItem
    }


  }
</script>
