<template>
  <f7-page>
    <f7-navbar title="What are my needs?" back-link="Back"></f7-navbar>
    <f7-block-title>What are my needs?</f7-block-title>
    <f7-block strong>
      <p>
        I need to have about $28,000 for the combination of tuition
        and six months living expenses while I attend the program and
        look for a job afterwards.</p>

      <p>I will be able to fund part of that
        out of my savings. I can raise more through short term loans
        in my personal network.</p>

      <p>Hack Reactor has some funding options
        of their own, which I would prefer to avoid, but which I may have to use.
      </p>
      <p>
        But the best thing would be to have all the money up front and have no debt aftwerwards.
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
