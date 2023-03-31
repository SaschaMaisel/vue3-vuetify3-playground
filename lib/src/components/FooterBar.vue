<template>
  <v-card height="100%">
    <v-footer padless class="font-weight-medium" color="secondary" style="height: 100%">
      <v-col class="text-center" cols="12">
        <strong>{{ new Date().getFullYear() }} — Mitsubishi Heavy Industries EMEA - Digital Solutions</strong>
        <!--        <v-tooltip left>-->
        <!--          <template v-slot:activator="{ on, attrs }">-->
        <!--            <v-icon-->
        <!--              color="primary"-->
        <!--              style="float: right"-->
        <!--              dark-->
        <!--              v-bind="attrs"-->
        <!--              v-on="on"-->
        <!--            >-->
        <!--              fas fa-globe-->
        <!--            </v-icon>-->
        <!--          </template>-->
        <!--          <span>Session ID {{ sessionId }}</span>-->
        <!--        </v-tooltip>-->
      </v-col>
    </v-footer>
  </v-card>
</template>

<script setup lang="ts">
  import { onBeforeMount } from "vue"

  let sessionId: string = ""

  onBeforeMount(() => {
    console.log("footersetup")
    window.addEventListener("sessionIdUpdate", () => {
      sessionId = sessionStorage.getItem("connectionId") ?? ""
    })
  })
</script>
