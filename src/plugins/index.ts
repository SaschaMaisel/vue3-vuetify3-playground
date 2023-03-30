import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from "./routing";

import type { App } from 'vue'

import {components} from "gccp-vue-components-3"

export function registerPlugins(app: App) {
  loadFonts();
  app
    .use(vuetify)
    .use(router)
    .use(components)
}
