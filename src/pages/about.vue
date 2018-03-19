<template>
  <f7-page>
    <!--<f7-navbar title="About" back-link="Back"></f7-navbar>-->
    <f7-navbar title="About This App" back-link="Back"></f7-navbar>
    <banner-ad-top></banner-ad-top>
    <f7-block strong>

      <p>I built this simple single page app to raise funds for my Hack Reactor expenses</p>
      <p>
        It was built on a backbone of Webpack, VueJS, and Framework 7
      </p>
      <p>
        Russ Bain is a participant in the Amazon Services LLC Associates Program,
        an affiliate advertising program designed to provide a means for sites
        to earn advertising fees by advertising and linking to Amazon.com.
      </p>


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
