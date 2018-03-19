<template>
  <f7-page>
    <f7-navbar title="You can help!" back-link="Back"></f7-navbar>
    <f7-block-title>What you can do to help</f7-block-title>
    <f7-block strong>
      <p>Please contribute to my <b>Go Fund Me campaign!</b></p>

      <p>
        Or, if you don't have the budget for that,
        whenever you shop on Amazon, you can come to this website first and click on the
        Amazon banner ad below.</p>

      <p>Kick a little advertising revenue my way!
        It won't increase the price you pay for anyting on Amazon.
      </p>
    </f7-block>
    <f7-block>
      <banner-ad-amazon></banner-ad-amazon>
    </f7-block>
  </f7-page>
</template>

<script>

  import BannerAdAmazon from './BannerAdLarge.vue';
  // import BannerAdGoFundMe from './BannerAdGoFundMe.vue';

  export default {
    components: {
      BannerAdAmazon,
      // BannerAdGoFundMe
    }


  }
</script>
