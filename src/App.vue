<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { watch, ref } from 'vue'
import Menu from 'primevue/menu';

// watch(
//   pinia.state,
//   (state) => {
//     // persist the whole state to the local storage whenever it changes
//     localStorage.setItem('piniaState', JSON.stringify(state))
//   },
//   { deep: true }
// )

const menu_items = ref([
  {
    label: 'Organize',
    route: '/'
  },
  {
    label: 'Search',
    route: '/search'
  },
  {
    label: 'Things',
    route: '/things'
  },
  {
    label: 'Places',
    route: '/places'
  }
]);
</script>

<template>
  <header></header>
  <main class="flex px-2 align-items-left">
    <section>
      <Menu :model="menu_items">
          <template #item="{ item, props }">
            <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
              <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
              </a>
            </RouterLink>
            <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </template>
        </Menu>
    </section>
    <section>
      <RouterView />
    </section>
  </main>
</template>
