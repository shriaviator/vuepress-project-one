<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <section class="video-lesson">
    <a :href="href" target="_blank" rel="sponsored noopener" :title="title">
      <slot></slot>
    </a>
  </section>
</template>

<style >
.video-lesson {
  display: flex;
  align-items: center;
  background-color: #e7ecf3;
  padding: 1em 1.25em;
  border-radius: 2px;
  color: #486491;
  position: relative;
  margin: 24px 0;
}
.video-lesson a {
  color: #486491;
  position: relative;
  padding-left: 16px;
}
.video-lesson::before {
  content: "\f144";
  font-family: "FontAwesome";
  font-size: 2em;
  display: inline-block;
  color: #73abfe;
  vertical-align: middle;
}
</style>