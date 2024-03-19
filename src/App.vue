<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="surface-variant" title="Application bar"></v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item>
          <router-link :to="{ name: 'login' }">Login</router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{ name: 'home' }">Home</router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{ name: 'about' }">About</router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="" style="min-height: 300px;">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<style scoped></style>
