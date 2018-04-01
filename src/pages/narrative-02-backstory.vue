<template>
  <f7-page>
    <f7-navbar title="The Backstory" back-link="Back"></f7-navbar>
    <!--<f7-block-title>The Backstory</f7-block-title>-->
    <banner-ad-top></banner-ad-top>
    <f7-block strong>
      <p>
        Until March I had a good job in accounting. In my spare time I studied Javascript coding.
        I was saving money with the intention of going to Hack Reactor coding bootcamp in 2019
        and paying the entire cost out of my savings. Then I would stop doing accounting and switch
        careers to software engineer.
      </p>

      <p>Then my job got sent to India. </p>
      <p>My options were:</p>
      <ul>
        <li>Give up. (not really an option)</li>
        <li>Find a new, not as good. accounting job and postpone my goal another year.</li>
        <li>Leap NOW for my goal !</li>
      </ul>
      <p>
       So I leaped.
      </p>
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
