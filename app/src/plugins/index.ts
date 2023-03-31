import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from "./routing";

import type { App } from 'vue'

import { components } from "vue3-component-experiments"

export function registerPlugins(app: App) {
  loadFonts();
  app
    .use(vuetify)
    .use(router)
    .use(components);
}
