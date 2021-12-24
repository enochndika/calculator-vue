<script lang="ts" setup>
import Button from './ui/Button.vue';
import XIcon from './icons/XIcon.vue';
import TrashIcon from './icons/TrashIcon.vue';

defineProps({
  data: {
    type: Array,
    default() {
      return [];
    },
  },
});

const emit = defineEmits({});
</script>
<template>
  <section>
    <div class="mt-8">
      <div class="flex gap-x-6">
        <h2 class="text-3xl mt-1">Favoris</h2>
        <Button @click="emit('remove-all-from-bookmarks')">
          <XIcon />
          <span class="text-sm mt-0.5">Vider</span>
        </Button>
      </div>
    </div>
    <div v-if="!data.length" class="mt-4">
      Vous n'avez aucune operation enregistrée dans vos favoris
    </div>
    <div v-if="data.length" class="mt-4 w-full md:w-7/12 overflow-x-auto">
      <table class="w-full border">
        <thead>
          <tr>
            <th class="p-4 text-center border-r">Date</th>
            <th class="p-4 text-center border-r">Operation</th>
            <th class="p-4 text-center border-r">Résultat</th>
            <th class="p-4 text-center"></th>
          </tr>
        </thead>
        <tbody class="text-sm">
          <tr v-for="item in data" :key="item.id">
            <td class="p-4 text-center border border-gray-300">
              {{ item.date }}
            </td>
            <td class="p-4 text-center border border-gray-300">
              {{ item.operation }}
            </td>
            <td class="p-4 text-center border border-gray-300">
              {{ item.result }}
            </td>
            <td class="p-4 text-center border border-gray-300">
              <div class="flex justify-center">
                <Button @click="emit('remove-from-bookmarks', item.id)">
                  <TrashIcon />
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
