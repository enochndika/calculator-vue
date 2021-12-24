<script lang="ts" setup>
import Option from './ui/Option.vue';
import Button from './ui/Button.vue';
import { useForm } from '../helpers/useForm';
import HeartIcon from './icons/HeartIcon.vue';
import RefreshIcon from './icons/RefreshIcon.vue';
import { operationsList } from '../helpers/optsList';
import { addToBookmarks } from '../actions/bookmarkActions';

const style = {
  select: `mt-1 py-1.5 px-4 border bg-white rounded-md focus:ring-1 text-gray-700 placeholder-gray-400 text-center text-base focus:border-transparent`,
  input: `mt-1 py-1 w-28 whitespace:pre px-2 bg-white text-base focus:ring-1 text-gray-700 placeholder-gray-400 border border-gray-300 focus:border-transparent`,
};

const { fields, methods } = useForm();
const { onSubmit, resetForm } = methods;
const { result, operation, rightNumber, leftNumber } = fields;
</script>

<template>
  <form @change="onSubmit" @submit.prevent>
    <div class="flex flex-wrap my-8">
      <div>
        <label class="mr-2 md:mr-4">Type d'opération</label>
        <select v-model="operation" :class="style.select">
          <Option :data="operationsList" />
        </select>
      </div>
      <div class="md:ml-6">
        <Button type="button" @click="resetForm">
          <RefreshIcon />
          <span>Réinitialiser</span>
        </Button>
      </div>
    </div>
    <div class="border border-gray-400 px-4 py-8 mb-12 overflow-x-hidden">
      <div class="flex flex-wrap">
        <div class="min-w-[8rem]">
          <input
            v-model="leftNumber"
            type="number"
            name="left-number"
            aria-label="Left Number"
            :class="style.input"
            @input="onSubmit"
          />
        </div>
        <div class="w-8">
          <div>
            <input
              name="operation"
              class="text-2xl appearance-none"
              type="text"
              aria-label="Operation type"
              readonly
              :value="operation"
            />
          </div>
        </div>
        <div class="min-w-[9rem]">
          <input
            v-model="rightNumber"
            name="right-number"
            aria-label="Right number"
            type="number"
            :class="style.input"
            @input="onSubmit"
          />
        </div>
        <div class="text-lg my-4 md:my-0 md:ml-5 flex md:text-3xl min-w-[8rem]">
          <span class="pl-1 md:pl-0 pr-4"> = </span>
          <span> {{ result }} </span>
        </div>
        <div class="ml-6 min-w-[8rem]">
          <Button
            type="button"
            @click="
              addToBookmarks({
                left: leftNumber,
                right: rightNumber,
                opt: operation,
                result: result,
              })
            "
          >
            <HeartIcon />
            <span>Ajouter aux favoris</span>
          </Button>
        </div>
      </div>
    </div>
  </form>
</template>
