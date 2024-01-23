import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import "./variables.css";
import tags from "./tags.vue";

export default {
  // https://vitepress.dev/guide/extending-default-theme
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "doc-before": () => h(tags),
    });
  },
};
