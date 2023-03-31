<template>
    <v-app>
        <span> view </span>
        <main-frame :sideBarItems="[]" :topBarItems="[]">
            <router-view/>
        </main-frame>
        <v-footer> asdf</v-footer>
    </v-app>
</template>

<script lang="ts" setup>
</script>
