<template>
  <f7-page>
    <f7-navbar title="My Goal" back-link="Back"></f7-navbar>
    <banner-ad-top></banner-ad-top>
    <!--<f7-block-title>My Goal</f7-block-title>-->
    <f7-block strong>
      <p>
        My goal is to attend the Hack Reactor software engineering immersive bootcamp
        from June 11, 2018 to September 3rd, 2018.
      </p>

      <p>
        I am throwing myself into full study mode. I have already completed
        the first part of the Hack Reactor preparation material
        and have begun their structured study program. I will be
        studying about eight hours a day, six days a week  from
        March 19th through April 14th to prepare for Hack
        Reactor's technical admissions interview.
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
