<template>
  <f7-page>
    <f7-navbar title="Why Hack Reactor" back-link="Back"></f7-navbar>
    <f7-block-title>Why <a href="https://www.hackreactor.com/" target="blank" class="link external">Hack Reactor</a>
    </f7-block-title>
    <f7-block strong>

      <p><a href="https://www.hackreactor.com/" target="blank" class="link external">Hack Reactor</a> is one of the best
        quality and well known coding bootcamps
        in the world.</p>

      <p>I have friends who have gone through the program and now
        work as senior software engineers.</p>

      <p>Having the <a href="https://www.hackreactor.com/" target="blank" class="link external">Hack Reactor</a> brand
        underlying
        my resume will significantly increase my chances of getting noticed by potential employers.
      </p>


    </f7-block>
    <f7-block>
      <banner-ad-amazon></banner-ad-amazon>
      <!--<banner-ad-go-fund-me></banner-ad-go-fund-me>-->
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
