<template>
  <f7-block >
    <f7-card>
      <f7-card-content >

        <f7-row>
          <f7-col class="col-60">
            <p><strong>{{products[0].name}}</strong></p>
            <p>{{products[0].blurb}}</p>
          </f7-col>
          <f7-col class="col-40">
            <p v-html="products[0].frame"></p>
          </f7-col>
        </f7-row>
        <f7-row>

        </f7-row>
        <f7-row>

          <a target="_blank"
             class = 'center'
             href="//www.gofundme.com/fundruss?utm_medium=wdgt" title="Visit this page now.">GO Fund Me!</a>
        </f7-row>



      </f7-card-content>
    </f7-card>
  </f7-block>
</template>

<script>
  // import BannerAdBottom from './../BannerAdBottom.vue';

  export default {
    name: "Amazon-Item",
    data: function(){
      return {
        frame:  '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=hooliatornet-20&marketplace=amazon&region=US&placement=B000XJ48V0&asins=B000XJ48V0&linkId=35c3572f4d55a6c7d23d0a148ffcd7ee&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=e8ebf0"></iframe>',
        products: [
          {name: 'Thread Maintenance',
          blurb: 'After wrecking several threads with with some generic kit, ' +
                  'I bought this kit from Lang Tools and have' +
                  ' been using it ever since! This kit has spared me the tap and die several times.',
          frame: '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=hooliatornet-20&marketplace=amazon&region=US&placement=B000XJ48V0&asins=B000XJ48V0&linkId=35c3572f4d55a6c7d23d0a148ffcd7ee&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=e8ebf0"></iframe>'
          }
        ]


      };
    },

    components: {
      // BannerAdBottom
    }
  }
</script>

<style scoped>
  .center {
    margin: auto;
  }

</style>
