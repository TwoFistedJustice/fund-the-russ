<template>
  <f7-page>
    <f7-navbar title="You can help!" back-link="Back"></f7-navbar>
    <f7-block-title>What you can do to help</f7-block-title>
    <banner-ad-top></banner-ad-top>
    <f7-block strong>
      <p>Your generorsity and kindness can help me pay for Hack Reactor!</p>

      <p>You may contribute to <b><a class="link external" href="https://www.gofundme.com/fundruss" target="_blank">my Go Fund Me campaign!</a></b></p>
      <p>Of course not everyone has money just laying around they can give away...</p>
      <p>Sharing this page on Facebook would also help.</p>

      <p>Another way is shop on Amazon and to get there via the banner ad at the top of the page.
        That kicks a little advertising revenue my way and doesn't cost you anything!</p>
      <f7-link back>(go back)</f7-link>


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
