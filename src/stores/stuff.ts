import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid';
import { useStorage } from '@vueuse/core'

interface State {
  places: Place[]
  things: Thing[]
}

interface Thing {
  id: String,
  name: String,
  place_id: String | null,
  description: String
}

interface Place {
  name: String,
  things: Thing[],
  location: String
}

export const useStuffStore = defineStore('stuff', {
  state: (): State => {
    return useStorage('all-my-stuff', {
      places: [],
      things: []
    })
  },
  actions: {
    addThing(name: String, description: String, place_id: String | null = null) {
      const new_thing: Thing = {
        id: uuidv4(),
        name: name,
        place_id: place_id,
        description: description
      }
      this.things.push(new_thing)
    },
    removeThing(thing_id: String) {
      this.things = this.things.filter(thing => thing.id != thing_id)
    }
  }
})
