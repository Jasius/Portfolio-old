<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
</template>
 
<script>
import VueGallery from "vue-gallery";

export default {
  data: function() {
    return {
      images: [],
      index: null
    };
  },

  components: {
    gallery: VueGallery
  }
};
</script> 