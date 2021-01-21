<template>
  <div>
    <!-- default gallery mode -->
    <v-gallery :images="list"> </v-gallery>
  </div>
</template>

<script>
import VueGallery from "v-gallery/src/Gallery";
export default {
  components: {
    "v-gallery": VueGallery,
  },
  data() {
    return {
      list: [
        {
          title: "Image1",
          url: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
        },

        { title: "Image2", url: require("../../guide/aircon-one.png") },
        { title: "Image2", url: require("../../guide/aircon-one.png") },
      ],
    };
  },
};
</script>