import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Place } from '@/stores/place'

export interface Thing {
  id: String,
  name: String,
  place: Place | null,
  description: String
}

export const useThingStore = defineStore('thing', () => {
  state: (): Thing => {
    return {
      id: '',
      name: '',
      place: null,
      description: ''
    }
  }
})
