<script setup lang="ts">
import { ref } from "vue";
import ModalCard from "../modal/modal-card-description.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isModalVisible = ref<boolean>(false);

const props = defineProps({
  isPersonalLinkActive: { type: Boolean, default: false },
  isBought: { type: Boolean, default: false },
});

const openModal = () => {
  isModalVisible.value = true;
};

const openCourse = () => {
  router.push("course");
};

const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<template>
  <article class="card" v-bind="$attrs">
    <header class="card-header">
      <img
        src="@/assets/img/jscard.webp"
        alt="Изображение курса"
        class="card-image"
      />
      <h2 class="card-title">Основы JavaScript</h2>
    </header>
    <section class="card-content">
      <p class="card-description">
        Курс по основам JavaScript. В нем изучается синтаксис, структуры данных
        и основы программирования.
      </p>
      <div class="card-time">
        Время обучения: <span class="card-count-lessons">200 уроков</span>
      </div>
      <div class="card-tags">
        <span class="tag">Frontend</span>
        <span class="tag-red">Interview</span>
      </div>
    </section>
    <footer class="card-footer">
      <span v-if="!isBought" class="card-price">500 ₽</span>
      <span v-if="isBought" class="card-price">Куплено</span>
      <button
        v-if="!isPersonalLinkActive"
        class="card-button"
        @click="openModal"
      >
        Подробнее
      </button>
      <button
        v-if="isPersonalLinkActive"
        class="card-button"
        @click="openCourse"
      >
        Перейти
      </button>
    </footer>
  </article>

  <ModalCard
    :title="'Основы JavaScript'"
    :content="'fsdfds'"
    :visible="isModalVisible"
    :price="'200р'"
    :lessons-count="200"
    :course-description="'fsdfds'"
    @close="closeModal"
  />
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 280px;
  margin: 1rem;

  .card-header {
    position: relative;
    width: 100%;
    height: 200px;
    background-color: #f4f4f4;
    overflow: hidden;

    .card-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .card-title {
      position: absolute;
      bottom: 10px;
      left: 2rem;
      font-size: 24px;
      font-weight: 600;
      color: #fff;
      background: rgba(0, 0, 0, 0.5);
      padding: 5px 10px;
      border-radius: 4px;
    }
  }

  .card-content {
    padding: 1rem;

    .card-description {
      font-size: 16px;
      color: #333;
      margin-bottom: 1rem;
    }

    .card-time {
      font-size: 14px;
      color: #555;
      margin-bottom: 1rem;
    }

    .card-tags {
      display: flex;
      gap: 0.8rem;

      .tag {
        background-color: #007bff;
        color: #fff;
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 600;
      }

      .tag-red {
        background-color: #ff0000;
        color: #fff;
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f9f9f9;
    border-top: 1px solid #ddd;

    .card-price {
      font-size: 18px;
      font-weight: 600;
      color: #007bff;
      cursor: pointer;

      &:hover {
        color: #5ca6f5;
      }
    }

    .card-button {
      padding: 8px 16px;
      background-color: #007bff;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
}
</style>
