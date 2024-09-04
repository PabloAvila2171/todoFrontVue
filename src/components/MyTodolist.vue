<template>
  <section>
    <div class="flex justify-center items-center mt-5">
      <input
        type="text"
        id="title"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="title"
        @keypress.enter="addTask"
        v-model="task.title"
      />
      <input
        type="text"
        id="description"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="description"
        @keypress.enter="addTask"
        v-model="task.description"
      />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="addTask"
        
      >
        Agregar
      </button>
    </div>
    <ListTask :tasks="task"  @selectOptions="onSelectesOptions"/>
  </section>
</template>

<script setup lang="ts">
import { useTodoList } from '@/composable/useTodoList';
import ListTask from './ListTask.vue';

const { task, addTask,deleteTask } = useTodoList();


const onSelectesOptions = (value:number) =>{
  deleteTask(value)
}



</script>

<style scoped></style>
