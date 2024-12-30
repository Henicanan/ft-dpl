<script setup lang="ts">
import { ref } from "vue";
import Card from "@/ui-components/card/course-card.vue";
</script>

<template>
  <div class="container">
    <span>Доступные курсы</span>

    <div class="personal-courses-list">
      <Card :isPersonalLinkActive="true" :isBought="true" />
      <Card :isPersonalLinkActive="true" :isBought="true" />
      <Card :isPersonalLinkActive="true" :isBought="true" />
      <Card :isPersonalLinkActive="true" :isBought="true" />
      <Card :isPersonalLinkActive="true" :isBought="true" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 3rem;

  & > span {
    font-size: 1.5rem;
    margin-left: 1rem;
  }

  .personal-courses-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin: 0 auto;

    box-sizing: border-box;
  }
}
</style>
