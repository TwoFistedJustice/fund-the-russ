<template>
  <f7-block >
    <f7-card>
      <f7-card-content >

        <f7-row>
          <f7-col class="col-60">

            <p><strong>{{link.item}}</strong></p>
            <p>{{link.blurb}}</p>
            <!--<a :href="link.link" target="blank">Link to Amazon</a>-->
            <div class="text-center">
              <f7-link :href="link.link"

                       target="blank" external>Link to Amazon
              </f7-link>
            </div>
          </f7-col>
          <f7-col class="col-40">
            <p v-html="link.frame"></p>
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
  import {mapGetters} from 'vuex';

  export default {
    name: "Amazon-Item",

    props: ['link'],


    components: {
      // BannerAdBottom
    }
  }
</script>

<style scoped>
  .center {
    margin: auto;
  }
.text-center {
  text-align: center;
}

</style>
