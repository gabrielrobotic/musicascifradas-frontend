<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { useAuth } from './stores/auth';

const drawer = ref(false);
const menu = ref(false);
const auth = useAuth();

function usuarioAutenticado() {
  return auth.isAuthenticated;
}

function ocultar() {
  drawer.value = false;
  menu.value = false;
};

</script>

<template>
  <v-layout>
    <v-app-bar v-if="$router.currentRoute.value.name !== 'login'" color="surface-variant" density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon variant="text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Músicas Cifradas</v-app-bar-title>

      <template v-slot:append>
        <div class="text-center">
          <v-menu v-model="menu" :close-on-content-click="false" location="bottom left">
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>
            <v-card min-width="220" min-height="20">
              <v-list v-if="usuarioAutenticado()">
                <v-list-item prepend-icon="mdi-account" :title="`${auth.usuario.nome} ${auth.usuario.sobrenome}`"
                  :subtitle="`${auth.usuario.username}`"></v-list-item>
                <v-divider></v-divider>
              </v-list>
              <v-list>
                <v-list-item>
                  <router-link :to="{ name: 'login' }" class="rounded d-flex" @click="ocultar">
                    <span v-if="!usuarioAutenticado()" class="d-flex align-center justify-center"><v-icon
                        icon="mdi-login" size="24" class="me-2"></v-icon>Login</span>
                    <span v-else><v-icon icon="mdi-logout" size="24" class="me-2"></v-icon>Logout</span>
                  </router-link>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </div>
      </template>

    </v-app-bar>

    <v-navigation-drawer v-if="$router.currentRoute.value.name !== 'login'" v-model="drawer" temporary>
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

    <v-main>
      <router-view v-slot="{ Component }">
        <v-fade-transition hide-on-leave>
          <component :is="Component" />
        </v-fade-transition>
      </router-view>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
