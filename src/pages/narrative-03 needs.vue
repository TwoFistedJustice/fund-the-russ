<template>
  <f7-page>
    <f7-navbar title="What are my needs?" back-link="Back"></f7-navbar>
    <banner-ad-top></banner-ad-top>
    <!--<f7-block-title>What are my needs?</f7-block-title>-->
    <f7-block strong>
      <p>
        I need to raise $5,000 towards the total cost of tuitition and six months living expenses.
      </p>
      <p>The total cost of the program and living in San Francisco will set me back about 28 grand.</p>
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
