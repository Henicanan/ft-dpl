<script setup lang="ts">
import { onMounted, watch } from "vue";
import debounce from "lodash/debounce";
import { useRouter } from "vue-router";
import circleSpinner from "@/ui-components/spinner/circleSpinner.vue";
import CourseItem from "./course-item.vue";
import { useCourse } from "@/components/admin/dashboard/courses/composables/useCourse";

const { fetchCourses, deleteCourse, inputSearchCourse, loading, courses } =
  useCourse();

const router = useRouter();

const createCourse = () => {
  router.push({ name: "create-course" });
  console.log(router.currentRoute.value.name);
};

const goToCourse = (id: number) => {
  router.push({ name: "course-details", params: { id } });
};

const debouncedFetchCourses = debounce(fetchCourses, 500);

watch(inputSearchCourse, () => {
  debouncedFetchCourses();
});

onMounted(() => {
  fetchCourses();
});
</script>

<template>
  <div class="courses">
    <div class="controls">
      <button @click="createCourse" class="create-course-btn">
        Создать курс
      </button>
      <div class="input-wrapper">
        <input
          v-model="inputSearchCourse"
          class="input-search-course"
          placeholder="Поиск курсов"
        />
      </div>
    </div>
    <div class="courses-list">
      <div v-if="loading" class="loading-spinner">
        <circleSpinner />
      </div>
      <div v-else>
        <CourseItem
          class="course-item"
          v-for="course in courses"
          :key="course.id"
          :course="course"
          @viewCourse="goToCourse"
          @deleteCourse="deleteCourse"
        />
      </div>
    </div>
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.courses {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;

  min-height: 100vh;
}

.create-course-btn {
  padding: 12px 24px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;
}

.create-course-btn:hover {
  background-color: #218838;
  transform: scale(1.05);
}

.input-wrapper {
  width: 100%;
  margin-top: 1rem;

  display: flex;
}

.input-search-course {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  background: #fff;
  font-size: 14px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s;
}

.input-search-course:focus {
  border-color: #80bdff;
  outline: none;
}

.courses-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 30rem;
}

.course-item {
  background-color: #1e293b;
  color: white;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.3s;
  margin-top: 1rem;
}

.course-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.course-item-title {
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  transition: color 0.3s;
}

.course-item-title:hover {
  color: #63b3ed;
}

.icon-group {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.trash-icon,
.settings-icon {
  cursor: pointer;
  font-size: 20px;
  color: white;
  transition: color 0.3s;
}

.trash-icon:hover {
  color: #f56565;
}

.settings-icon:hover {
  color: #63b3ed;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
</style>
