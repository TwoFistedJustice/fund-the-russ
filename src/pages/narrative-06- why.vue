<template>
  <f7-page>
    <f7-navbar title="Why Hack Reactor" back-link="Back"></f7-navbar>
    <banner-ad-top></banner-ad-top>
    <f7-block-title>Why <a href="https://www.hackreactor.com/" target="blank" class="link external">Hack Reactor</a>?
    </f7-block-title>

    <f7-block strong>

      <p><a href="https://www.hackreactor.com/" target="blank" class="link external">Hack Reactor</a> is one of the best
        quality and well known coding bootcamps
        in the world.</p>
      <p>It is a 12 week program running 12 hours per day, 6 days per week. Intense!</p>

      <p>I have friends who have gone through the program and now
        work as senior software engineers.</p>

      <p>Having the <a href="https://www.hackreactor.com/" target="blank" class="link external">Hack Reactor</a> brand
        underlying
        my resume will significantly increase my chances of getting noticed by potential employers.
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
