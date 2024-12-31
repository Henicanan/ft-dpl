<script setup lang="ts">
import ExitButton from "@/ui-components/icons/exit-button.vue";
import ScrollUpButton from "@/ui-components/button/scroll-up-button.vue";
import { useRouter } from "vue-router";
import { menuItems } from "./constants/userMenuItem";
import { onBeforeMount, onMounted, ref } from "vue";

const router = useRouter();

const showScrollToTop = ref<boolean>(false);

function navigateTo(path: string) {
  router.push(path);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleScroll() {
  showScrollToTop.value = window.scrollY > 300;
}

onMounted(() => {
  if (router.currentRoute.value.path === "/user") {
    router.push("/user/main-page");
  }

  window.addEventListener("scroll", handleScroll);
});

onBeforeMount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="user-page">
    <div class="left-panel">
      <div class="user-information">
        <span class="user-name">Иванов А.А</span>
        <ExitButton class="exit-button" />
      </div>
      <nav class="user-menu">
        <span class="menu-title">Меню</span>
        <ul class="menu-list">
          <li
            v-for="item in menuItems"
            :key="item.path"
            :class="{ active: router.currentRoute.value.path === item.path }"
            @click="navigateTo(item.path)"
          >
            {{ item.name }}
          </li>
        </ul>
      </nav>
    </div>
    <div class="content">
      <router-view />
    </div>
    <ScrollUpButton v-if="showScrollToTop" @click="scrollToTop" />
  </div>
</template>

<style scoped lang="scss">
.user-page {
  display: flex;
  width: 100vw;
}

.left-panel {
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  border-right: 2px solid #cecbcb;
  width: fit-content;
  min-width: 15rem;
  padding-right: 1.5rem;
  min-height: 100vh;

  .user-information {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    .user-name {
      font-size: 22px;
      cursor: pointer;
    }

    .exit-button {
      margin-left: 2rem;
      font-size: 25px;
      cursor: pointer;
    }
  }

  .user-menu {
    margin-top: 1.5rem;

    .menu-title {
      font-weight: 600;
      font-size: 25px;
    }

    .menu-list {
      margin-top: 0.8rem;

      li {
        margin-bottom: 0.6rem;
        cursor: pointer;
        font-size: 20px;
        transition: all 0.3s ease;

        &:hover {
          background-color: #dddada;
          border-radius: 8px;
          padding: 4px;
        }

        &.active {
          background-color: #cfe2ef;
          color: rgb(0, 85, 243);
          padding: 5px 10px;
          border-radius: 8px;
          font-weight: 600;
          transform: scale(1.05);
        }
      }

      li:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.content {
  margin-left: 2rem;
}
</style>
