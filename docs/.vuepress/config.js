const { description } = require("../../package");

module.exports = {
  base: "/vuepress-project-one/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Jebah",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-9VD62092G1",
      },
    ],
    [
      "script",
      {},
      `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-9VD62092G1');
`,
    ],
    [
      "link",
      {
        href:
          "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        rel: "stylesheet",
      },
    ],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    lastUpdated: "Last Updated",
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",

    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Config",
        link: "/config/",
      },
      {
        text: "DGCA",
        link: "https://dgca.gov.in/digigov-portal/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: [
            "",
            "using-vue",
            "air-conditioning",
            "reset-cheatsheet",
            "Aircraft-Models",
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "vuepress-plugin-cat",
  ],
};
