<script setup lang="ts">
import { computed } from 'vue';
import { store } from '../store/setup';
import Bookmarks from './Bookmarks.vue';
import Operations from './Operations.vue';
import { sortByDate } from '../helpers/utils';
import { removeFromBookmarks, removeAllFromBookmarks } from '../actions/bookmarkActions';

let bookmarks = computed(() => sortByDate(store.state.bookmarks));
</script>

<template>
  <div class="container px-2 lg:mx-auto py-8 text-gray-800">
    <h1 class="text-4xl">Vue Calc</h1>
    <Operations />
    <Bookmarks
      :data="bookmarks"
      @remove-from-bookmarks="removeFromBookmarks"
      @remove-all-from-bookmarks="removeAllFromBookmarks"
    />
  </div>
</template>
