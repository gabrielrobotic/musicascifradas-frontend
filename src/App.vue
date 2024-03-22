<script setup>
import { RouterLink, RouterView } from 'vue-router'
import router from './router';
</script>

<template>
  <v-layout>
    <v-app-bar v-if="$router.currentRoute.value.name !== 'login'" color="surface-variant" title="Aulas de Música">
      <router-link :to="{ name: 'login' }" class="me-2 rounded">
        <v-icon icon="mdi-login" class="me-2"></v-icon>Login</router-link>
    </v-app-bar>

    <v-navigation-drawer v-if="$router.currentRoute.value.name !== 'login'" expand-on-hover rail>
      <v-list class="px-1" nav>
        <v-list-item>
          <router-link :to="{ name: 'home' }" class="d-flex align-center">
            <v-icon icon="mdi-home" class="me-4"></v-icon>
            Home
          </router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{ name: 'about' }" class="d-flex align-center">
            <v-icon icon="mdi-information" class="me-4"></v-icon>
            About
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center">
      <router-view v-slot="{ Component }">
        <v-fade-transition hide-on-leave>
          <component :is="Component" />
        </v-fade-transition>
      </router-view>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
