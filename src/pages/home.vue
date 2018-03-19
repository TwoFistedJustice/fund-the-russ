<template>
  <f7-page>
    <f7-navbar>
      <!--<f7-nav-left>-->
        <!--<f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>-->
      <!--</f7-nav-left>-->
      <f7-nav-title>Help Russ pay for Hack Reactor!</f7-nav-title>

    </f7-navbar>

    <!--<f7-block-title>The Story So Far</f7-block-title>-->
    <f7-block>
      <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=288&l=ur1&category=amazonhomepage&f=ifr&linkID=734738334f0b638f70957c2ec2a2704c&t=hooliatornet-20&tracking_id=hooliatornet-20"
              width="320" height="50" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
      <!--<banner-ad-top></banner-ad-top>-->
    <f7-list>

      <f7-list-item link="/help/" title="How you can help"></f7-list-item>
      <f7-list-item link="/backstory/" title="The Backstory"></f7-list-item>
      <f7-list-item link="/my-needs/" title="What I Need"></f7-list-item>
      <f7-list-item link="/my-goal/" title="My Goal"></f7-list-item>
      <f7-list-item link="/omg-wth/" title="Am I Ready?"></f7-list-item>
      <f7-list-item link="/why-hack-reactor/" title="Why Hack Reactor?"></f7-list-item>
      <f7-list-item link="/about/" title="About"></f7-list-item>

    </f7-list>
      <!--<f7-block-title>Adorable Kitties</f7-block-title>-->
    <!--<f7-block>-->
      <!--<f7-row>-->
        <!--<f7-col width="50">-->
          <!--<p>Everyone loves</p>-->
          <!--<f7-button fill raised popup-open="#popup">Adorable Kitties</f7-button>-->
        <!--</f7-col>-->
        <!--<f7-col width="50">-->
          <!--<banner-ad-amazon></banner-ad-amazon>-->
        <!--</f7-col>-->

      <!--</f7-row>-->
    <!--</f7-block>-->
    <!--<f7-block>-->
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
