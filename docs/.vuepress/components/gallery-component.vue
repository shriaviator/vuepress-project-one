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
        {
          title: "Image1",
          url:
            "https://ik.imagekit.io/bfq9nml2mie/LEAP_COMPONENT_LOCATION/5414d0e6946ed6eec7b08eba3bf982be-1_9yKxlXF8h_.png",
        },
        {
          title: "Image1",
          url:
            "https://ik.imagekit.io/bfq9nml2mie/LEAP_COMPONENT_LOCATION/5414d0e6946ed6eec7b08eba3bf982be-3_TG8pBERyN.png",
        },
        {
          title: "Image1",
          url:
            "https://ik.imagekit.io/bfq9nml2mie/LEAP_COMPONENT_LOCATION/5414d0e6946ed6eec7b08eba3bf982be-3_TG8pBERyN.png",
        },

        { title: "Image2", url: require("../../guide/aircon-one.png") },
        { title: "Image2", url: require("../../guide/aircon-one.png") },
      ],
    };
  },
};
</script>