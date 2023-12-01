<script setup lang="ts">
import type { Thing } from '@/stores/thing'
import { useStuffStore } from '@/stores/stuff'
import { ref, reactive, computed } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Card from 'primevue/card'

defineProps<{
  things: Thing[]
}>()

const state = reactive({
  modal: false
})

const stuffStore = useStuffStore();
const thingName = ref('')
const thingDescription = ref('')

const resetAddDialog = function() {
  state.modal = false;
  thingName.value = '';
  thingDescription.value = '';
}

const addThing = function() {
  stuffStore.addThing(thingName.value, thingDescription.value);
  resetAddDialog();
}

</script>

<template>
  <div class="p-6">
    <h1>This is where all the things are</h1>
    <Button @click="state.modal = true">Add a thing</Button>
    <p v-if="stuffStore.things.length == 0">You don't have any things!</p>
    <div v-else>
      <div class="grid mt-2">
        <div v-for="thing in stuffStore.things" class="col-12">
          <Card>
            <template #title>{{ thing.name }}</template>
            <template #content>
                <p class="m-0">
                    {{ thing.description }}
                </p>
            </template>
            <template #footer>
              <div class="w-full flex justify-content-end">
                <Button style="backgroundColor: var(--red-600); borderColor: var(--red-500)" icon="pi pi-trash" @click="stuffStore.removeThing(thing.id)" />
              </div>
            </template>
        </Card>
        </div>
      </div>
    </div>
    <Dialog v-model:visible="state.modal" modal :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
      <template #header>
        <h2 class="m-0">Ooooh what did you get?</h2>
      </template>
      <template #default>
        <div class="formgrid">
          <div class="field">
            <label for="thingName">Name</label>
            <InputText id="thingName" v-model="thingName" class="w-full"/>
          </div>
          <div class="field">
            <label for="thingDescription">Desciption</label>
            <Textarea id="thingDescription" v-model="thingDescription" class="w-full"/>
          </div>
        </div>
      </template>
      <template #footer>
        <Button label="Save" icon="pi pi-check" @click="addThing" autofocus />
      </template>
    </Dialog>
  </div>
</template>
