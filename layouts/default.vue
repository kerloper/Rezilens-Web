<template>
<!--  <div class="mx-auto bg-[#211952] font-sans pb-10">-->
  <div class="bg-[#211952]  mx-auto font-sans pb-10">
    <TheHeader/>
    <main class="bg-[#211952] ">
      <slot />
    </main>
    <TheFooter/>
  </div>
</template>

<script setup>
import TheFooter from "~/components/containers/TheFooter.vue";
import TheHeader from "~/components/containers/TheHeader.vue";
</script>

<style scoped>

</style>