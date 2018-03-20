<template>
  <f7-page>
    <f7-navbar title="You can help!" back-link="Back"></f7-navbar>
    <f7-block-title>What you can do to help</f7-block-title>
    <banner-ad-top></banner-ad-top>
    <f7-block strong>
      <p>There are two main ways you can help me pay for Hack Reactor!</p>

      <p>You may contribute to <b><a class="link external" href="https://www.gofundme.com/fundruss" target="_blank">my Go Fund Me campaign!</a></b></p>
      <p>Another way is shop on Amazon and to get there via the banner ad at the top of the page. That kicks a little advertising revenue my way and doesn't cost you anything!</p>


    </f7-block>
    <f7-block>
      <!--<banner-ad-amazon></banner-ad-amazon>-->
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
