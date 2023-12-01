import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Thing } from '@/stores/thing'

export interface Place {
  name: String,
  things: Thing[],
  location: String
}

export const usePlaceStore = defineStore('place', () => {
  state: (): Place => {
    return {
      name: '',
      things: [],
      location: ''
    }
  }
})
