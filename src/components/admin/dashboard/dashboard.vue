<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { tabs } from "./constants/tabs.ts";
import type { Tab } from "./types/tab.ts";

const tabsItem: Tab[] = tabs;
const activeTab = ref<"course-list" | "tests" | "materials" | "videos">(
  "course-list"
);
const router = useRouter();

const switchTab = (tab: "course-list" | "tests" | "materials" | "videos") => {
  activeTab.value = tab;
  router.push({ name: tab });
  console.log(router.currentRoute.value.name);
};
</script>

<template>
  <div class="dashboard">
    <div class="tab-switcher">
      <button
        v-for="tab in tabsItem"
        :key="tab.name"
        :class="{ active: activeTab === tab.name }"
        @click="switchTab(tab.name)"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="dashboard-content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  font-family: Arial, sans-serif;

  .tab-switcher {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    gap: 10px;

    button {
      padding: 10px 20px;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;

      &.active {
        background-color: $active-bg;
        color: #fff;
        border-color: $active-bg;
      }

      &:hover {
        background-color: $active-bg;
        color: #c7c7c7;
      }
    }
  }

  .dashboard-content {
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h2 {
      font-size: 1.8rem;
      color: #333;
    }
  }
}
</style>
