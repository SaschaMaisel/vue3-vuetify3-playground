<template>
  <div>
    <div class="sideBar">
      <v-navigation-drawer color="secondary" permanent expand-on-hover mini-variant-width="80">
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>fas fa-bars</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Menu</v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-group
            v-for="item in items"
            mandatory
            :key="item.title"
            :appendIcon="item.children?.length === 0? '':'$expand'"
            :group="item.group"
            @click="item.action()">
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon color="primary">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item-group v-if="item.children">
              <v-list-item
                class="pl-12"
                v-for="child in item.children"
                :key="child.title"
                :to="child.link"
                @click="child.action()"
              >
                <v-list-item-icon>
                  <v-icon color="primary">{{ child.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ child.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list-group>
        </v-list>
        <status-indicator
          v-if="showSystemStatus"
          :status="status"
          :onLedClicked="onLedClicked"
        />
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from "vue";

  import { IMenuItem } from "@/interfaces/IMenuItem";
  import { SystemStatus } from "@/types/SystemStatus";
  import { ILedItem } from "@/interfaces/ILedItem";

  interface ISideBarProps {
    items: IMenuItem[]
    showSystemStatus: boolean
    status: SystemStatus
    onLedClicked: ILedItem
  }

  const props = defineProps<ISideBarProps>();
  const items = computed(() => props.items);
</script>

<style lang="scss">
  .sideBar {
    align-self: start;
    justify-self: start;
    z-index: 99;
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100%;
    width: 100%;
  }

  .v-card, aside {
    z-index: 99;
  }
</style>
