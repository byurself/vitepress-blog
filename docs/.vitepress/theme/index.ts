// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import GiscusComment from './components/giscus-comment.vue'
import confetti from "./components/confetti.vue"
import busuanzi from "busuanzi.pure.js"
import VisitorPanel from "./components/VisitorPanel.vue"
import { inBrowser } from "vitepress"
import 'virtual:group-icons.css'
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useRoute } from 'vitepress';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(GiscusComment),
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp(ctx) {
    const { app, router, siteData } = ctx;
    app.component("VisitorPanel", VisitorPanel);
    if (inBrowser) {
      router.onAfterRouteChange = () => {
        busuanzi.fetch();
      };
    }
    app.component("confetti", confetti);
    ctx.app.component('vImageViewer', vImageViewer);
  },
  setup() {
    const route = useRoute();
    // 启用插件
    imageViewer(route);
  }
} satisfies Theme
