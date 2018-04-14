<template>
  <f7-page>
    <f7-navbar title="The Backstory" back-link="Back"></f7-navbar>
    <!--<f7-block-title>The Backstory</f7-block-title>-->
    <banner-ad-top></banner-ad-top>
    <f7-block strong>






      <f7-link back>(go back)</f7-link>
    </f7-block>
    <f7-block>
      <banner-ad-bottom></banner-ad-bottom>
    </f7-block>
  </f7-page>
</template>

<script>

  import BannerAdTop from './BannerAdTop.vue';
  import BannerAdBottom from './BannerAdBottom.vue';
  import BannerAdAmazon from './BannerAdLarge.vue';

  export default {
    components: {
      BannerAdAmazon,
      BannerAdBottom,
      BannerAdTop
    }


  }
</script>
