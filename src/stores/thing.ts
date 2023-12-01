import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Place } from '@/stores/place'

export interface Thing {
  name: String,
  place: Place | null,
  description: String
}

export const useThingStore = defineStore('thing', () => {
  state: (): Thing => {
    return {
      name: '',
      place: null,
      description: ''
    }
  }
})
