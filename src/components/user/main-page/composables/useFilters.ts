import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useFiltersStore = defineStore("filters", () => {
  const frontendOption = ref<boolean>(false);
  const backendOption = ref<boolean>(false);
  const interviewOption = ref<boolean>(false);
  const inputSearchCourse = ref<string>("");

  const handleActiveFilters = computed(() => {
    return frontendOption.value || backendOption.value || interviewOption.value;
  });

  function resetFilters() {
    frontendOption.value = false;
    backendOption.value = false;
    interviewOption.value = false;
  }

  return {
    handleActiveFilters,
    frontendOption,
    backendOption,
    interviewOption,
    inputSearchCourse,
    resetFilters,
  };
});
