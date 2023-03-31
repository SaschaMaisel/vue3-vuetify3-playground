<template>
  <v-card class="mainFrame">
    <v-card-title>
      ABC
    </v-card-title>
    <!--    <top-bar-->
    <!--      class="mainFrame__topBar"-->
    <!--      :appTitle="appTitle"-->
    <!--      :isUserLogged="isUserLogged"-->
    <!--      :drawUserMenu="drawUserMenu"-->
    <!--      :userName="userName"-->
    <!--      :userLogin="userLogin"-->
    <!--      :items="topBarItems"-->
    <!--    />-->
    <!--    <div class="mainFrame__businessAreaContainer">-->
    <!--    <side-bar-->
    <!--      class="mainFrame__sideBar"-->
    <!--      :items="sideBarItems"-->
    <!--    />-->
    <slot class="mainFrame__businessArea"></slot>
    <!--    </div>-->
    <!--    <footer-bar class="mainFrame__footerBar"></footer-bar>-->
  </v-card>
</template>

<script setup lang="ts">
  import FooterBar from "./FooterBar.vue"
  // import SideBar from "./SideBar.vue"

  import { onMounted } from "vue"
  import { IMenuItem } from "@/interfaces/IMenuItem";

  interface IMainFrameProps {
    sideBarItems: IMenuItem[]
    topBarItems: IMenuItem[]
  }

  // import TopBar from "./TopBar.vue"
  // import { ILedItem, LedItem } from "../types/LedItem"
  // import { SystemStatus } from "../types/SystemStatus"
  // import { defineComponent, PropType } from "vue"
  // import { IMenuItem } from "../interfaces"

  // const components = defineComponent({
  //   "top-bar": TopBar,
  //   'side-bar': SideBar,
  //   "footer-bar": FooterBar
  // });

  const props = defineProps<IMainFrameProps>() //{ sideBarItems: [], topBarItems: [] })
  //   sideBarItems: { type: Array as PropType<IMenuItem[]>, default: [] },
  //   topBarItems: { type: Array as PropType<IMenuItem[]>, default: [] },
  //   showSystemStatus: { type: Boolean, default: true },
  //   status: { type: Number },
  //   appTitle: { type: String, default: 'app' },
  //   onLedClicked: { type:  Object as PropType<ILedItem>, default: { } },
  //   isUserLogged: { type: Boolean, default: false },
  //   drawUserMenu: { type: Boolean, default: false },
  //   userName: String,
  //   userLogin: String
  // });

  onMounted(() => console.log("props:", props));

  // function mounted() {
  //   console.log('mounted - topbar');
  // };
</script>

<style lang="scss">
  $topBarHeight: 64px;
  $sidebarWidth: 80px;
  $footerHeight: 48px;
  $verticalBars: calc(#{$topBarHeight} + #{$footerHeight});

  html {
    overflow-y: hidden !important;
  }

  body {
    height: 100vh;
    width: 100vw;
  }

  .routed-content {
    z-index: 1;
    overflow: auto;
    width: calc((100vh - #{$verticalBars}) * (16 / 9));
    height: calc(100vh - #{$verticalBars});

  }

  .v-navigation-drawer {
    height: calc(100vh - #{$verticalBars}) !important;
  }

  .mainFrame {
    > .v-application--wrap {
      display: flex;
      flex-flow: column;
      width: 100%;
      height: 100%;
    }

    &__topBar {
      flex: 0 1 $topBarHeight;
    }

    &__sideBar {
      width: $sidebarWidth;
    }

    &__footerBar {
      flex: 0 1 $footerHeight;
    }

    &__businessAreaContainer {
      flex: 1 1 auto;
      flex-wrap: nowrap;

      > &__businessArea {
        flex-grow: 1;
        z-index: 2;
      }
    }
  }
</style>
