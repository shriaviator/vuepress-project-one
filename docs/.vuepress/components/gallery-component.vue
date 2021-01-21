<template>
  <!-- default gallery mode -->
  <v-gallery :images="list"> </v-gallery>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "Image1",
          url: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
        },
        { title: "Image2", url: "/docs/guide/aircon-one.png" },
        { title: "Image2", url: "../../guide/aircon-one.png" },
        { title: "Image2", url: "../../guide/aircon-one.png" },
      ],
    };
  },
};
</script>