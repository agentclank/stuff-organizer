import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useThingStore } from '@/stores/thing'
import { usePlaceStore } from '@/stores/place'
import type { Place } from '@/stores/place'
import type { Thing } from '@/stores/thing'

export const useStuffStore = defineStore('stuff', () => {
  state: () => {
    return {
      places: [] as Place[],
      things: [] as Thing[]
    }
  }
})
