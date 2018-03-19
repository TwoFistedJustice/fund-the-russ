<template>
  <f7-page>
    <f7-navbar title="What I'm getting into" back-link="Back"></f7-navbar>
    <f7-block-title>What am I getting into?</f7-block-title>
    <f7-block strong>

      <p>Hell yeah!</p>
      <p>I'm psyched! I love this stuff!</p>

      <p>I already know quite a bit about coding.
        I have written software in various programming
        languages and scripts including: C, C#, and
        Javascript. Having previous experience in object
        oriented and functional programming will ease my transition.</p>
      </p>

      <!--<f7-link back>back</f7-link>-->
    </f7-block>
    <f7-block>
      <banner-ad-amazon></banner-ad-amazon>
    </f7-block>
  </f7-page>
</template>

<script>

  import BannerAdAmazon from './BannerAdLarge.vue';

  export default {
    components: {
      BannerAdAmazon,
    }


  }
</script>
