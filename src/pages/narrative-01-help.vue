<template>
  <f7-page>
    <f7-navbar title="You can help!" back-link="Back"></f7-navbar>
    <f7-block-title>I'm going to Hack Reactor!</f7-block-title>
    <banner-ad-top></banner-ad-top>
    <f7-block strong>


      <p>I've been a glorified bookkeeper for years.</p>

      <p>That's over. I'm switching over to software development.</p>

      <p>The thing is, I need your help to pay for the switch. Fortunately I only need a little help.</p>

      <p>I'm heading to the coding boot camp Hack Reactor. They are the best of the best of the best.</p>

      <p>They are also really expensive. And I can pay for it, in cash, right now.</p>

      <p>But then I won't have any money leftover for luxuries like rent and food.</p>

      <p>So I need your help to eat and not die of exposure while I go through their program.</p>

      <p>You can help either by donating to my
        <b><a class="link external" href="https://www.gofundme.com/fundruss"
              target="_blank">my Go Fund Me</a></b>.</p>
        <p>Or you can click on one of my Amazon links before you buy something on Amazon.</p>

      <p>Did I mention that I have a whole section on recommended products that you can buy on Amazon. Each and every
        one is something I have used and REALLY liked. And if you know me, you know I have really high standards.</p>


      <f7-link back>(go back)</f7-link>


    </f7-block>
    <f7-block>
      <!--<banner-ad-amazon></banner-ad-amazon>-->
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
