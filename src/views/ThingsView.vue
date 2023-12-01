<script setup lang="ts">
import type { Thing } from '@/stores/thing'
import { useStuffStore } from '@/stores/stuff'
import { ref } from 'vue'

defineProps<{
  things: Thing[]
}>()

const stuffStore = useStuffStore();

const newThing = ref(null)
</script>

<template>
  <div class="things">
    <h1>This is where all the things are</h1>
    <p>You don't have any things!</p>
    
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .things {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
