<script setup lang="ts">
import CourseCard from "@/ui-components/card/course-card.vue";
import CloseMd from "@/ui-components/icons/close-md.vue";

import { useFiltersStore } from "./composables/useFilters";

const filtersStore = useFiltersStore();
</script>

<template>
  <div class="container">
    <div class="catalog-wrapper">
      <h1>Каталог курсов</h1>
      <div class="filters-group">
        <span>Фильтры</span>
        <div class="filters">
          <div class="frontend-checkbox">
            <input
              type="checkbox"
              v-model="filtersStore.frontendOption"
              id="frontend"
            />
            <label for="frontend">Frontend</label>
          </div>
          <div class="backend-checkbox">
            <input
              type="checkbox"
              v-model="filtersStore.backendOption"
              id="backend"
            />
            <label for="backend">Backend</label>
          </div>
          <div class="interview-checkbox">
            <input
              type="checkbox"
              v-model="filtersStore.interviewOption"
              id="interview"
            />
            <label for="interview">Interview</label>
          </div>
          <div class="clear-filters" v-if="filtersStore.handleActiveFilters">
            <button
              class="clear-filters-button"
              @click="filtersStore.resetFilters"
            >
              <CloseMd class="icon" /> Сбросить фильтр
            </button>
          </div>
        </div>
        <input
          class="input-search"
          type="text"
          placeholder="Поиск курса"
          v-model="filtersStore.inputSearchCourse"
        />
      </div>
    </div>
    <section class="course-section">
      <h2 class="section-title">Frontend</h2>
      <div class="card-group">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </section>
    <section class="course-section">
      <h2 class="section-title">Backend</h2>
      <div class="card-group">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </section>
    <section class="course-section">
      <h2 class="section-title">Interview</h2>
      <div class="card-group">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%ы;
  margin: 3rem auto;
  padding: 1rem;
  box-sizing: border-box;
}

.catalog-wrapper {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  padding-left: 5rem;

  h1 {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
  }

  .filters-group {
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    width: 100%;

    span {
      font-size: 20px;
      font-weight: 500;
    }

    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      width: 100%;
      height: 40px;
      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      input[type="checkbox"] {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }

      label {
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
      }

      .clear-filters-button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background-color: #ff4d4f;
        color: white;
        border: none;
        border-radius: 15px;
        padding: 0.4rem 0.4rem;
        cursor: pointer;

        &:hover {
          background-color: #d9363e;
          box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
        }

        .icon {
          width: fit-content;
          height: fit-content;
        }
      }
    }

    .input-search {
      width: 100%;
      max-width: 300px;
      padding: 0.5rem 1rem;
      margin-top: 1rem;
      border: 1px solid #ccc;
      border-radius: 10px;
      outline: none;
      background-color: #f5f5f5;
      transition: background-color 0.3s ease, border-color 0.3s ease,
        box-shadow 0.3s ease;

      &:focus {
        background-color: #ffffff;
        border-color: #007bff;
        box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
      }
    }
  }
}

.course-section {
  width: 100%;
  margin-bottom: 2rem;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  .section-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-left: 3rem;
  }

  .card-group {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin: 0 auto;
    padding: 0 1.5rem;
    box-sizing: border-box;
  }

  @media (max-width: 1024px) {
    .card-group {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .card-group {
      grid-template-columns: 1fr;
    }
  }
}
</style>
