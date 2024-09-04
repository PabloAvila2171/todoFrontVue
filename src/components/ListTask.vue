<template>
  <section>
    <div
      class="mt-5 text-center flex justify-center"
      v-for="{ id, title, description } in tasks"
      :key="id"
    >
      <p>{{ title }} , {{ description }} </p>
      <button class="mx-5 btn bg-red-500 hover:bg-red-700 text-white" :id="id" @click="$emit('selectOptions',id)"
      >
        Eliminar
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  tasks: [];
}

defineProps<Props>();



defineEmits<{
  selectOptions: [id:number]
}>();




</script>

<style scoped></style>
