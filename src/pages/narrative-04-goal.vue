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
        the Hack Reactor structured study program.
        This took me a solid three weeks of not doing anything else.
        And that's just to prepare for Hack
        Reactor's technical admissions interview.
      </p>
      <p>
        After Hack Reactor I plan to work for a year in regular software development job
        in order to gain experience and knowledge, then focus on making software that supports
        the building of community.
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
