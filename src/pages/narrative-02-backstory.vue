<template>
  <f7-page>
    <f7-navbar title="The Backstory" back-link="Back"></f7-navbar>
    <f7-block-title>The Backstory</f7-block-title>
    <f7-block strong>
      <p>
        I had a decent job in accounting. My goal was to study independently
        and to save enough money in 2018 to attend Hack Reactor coding bootcamp in
        2019. Then I planned to switch career paths to software engineer.


      </p>

      <p>On March 13th, 2018 my decent job got outsourced to India. </p>
      <p>My options were:</p>
      <ul>
        <li>Give up.</li>
        <li>Find a new job and postpone my goal another year.</li>
        <li>Leap NOW for my goal !</li>
      </ul>
      <p>
       So I leaped.
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
