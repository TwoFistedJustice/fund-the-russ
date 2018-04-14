<template>
  <f7-block >
    <f7-card>
      <f7-card-content >
        <p>thing</p>
        <p>{{products[0].name}}</p>
        <p>{{products[0].blurb}}</p>
        <p v-html="products[0].frame"></p>
      </f7-card-content>
    </f7-card>
  </f7-block>
</template>

<script>
  export default {
    name: "Amazon-Item",
    data: function(){
      return {
        frame:  '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=hooliatornet-20&marketplace=amazon&region=US&placement=B000XJ48V0&asins=B000XJ48V0&linkId=35c3572f4d55a6c7d23d0a148ffcd7ee&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=e8ebf0"></iframe>',
        products: [
          {name: 'Thread fickser',
          blurb: 'It does stuff that is good',
          frame: '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=hooliatornet-20&marketplace=amazon&region=US&placement=B000XJ48V0&asins=B000XJ48V0&linkId=35c3572f4d55a6c7d23d0a148ffcd7ee&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=e8ebf0"></iframe>'
          }
        ]


      };
    },
    methods: {
      createElementFromHTML: function(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
  }
    }
  }
</script>

<style scoped>

</style>
