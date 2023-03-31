import MainFrame from "./components/MainFrame.vue";
import FooterBar from "./components/FooterBar.vue";
import SideBar from "./components/SideBar.vue";

export const components = {
  install(app: { component: (s: string, c: any) => void }) {
    app.component("MainFrame", MainFrame);
    app.component("FooterBar", FooterBar);
    app.component("SideBar", SideBar);
    console.log(app);
  },
}
