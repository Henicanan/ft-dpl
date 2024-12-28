<script setup lang="ts">
import trashIcon from "@/ui-components/icons/trash-icon.vue";
import settingsAdjustment from "@/ui-components/icons/settings-adjustment.vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  course: {
    type: Object as () => { id: number; title: string },
    required: true,
  },
});

const emit = defineEmits(["viewCourse", "deleteCourse"]);

const handleViewCourse = () => {
  emit("viewCourse", props.course.id);
};

const handleDeleteCourse = () => {
  emit("deleteCourse", props.course.id);
};
</script>

<template>
  <div class="course-item">
    <div class="course-item-title" @click="handleViewCourse">
      {{ course.title }}
    </div>
    <div class="icon-group">
      <settingsAdjustment class="settings-icon" @click="handleViewCourse" />
      <trashIcon @click="handleDeleteCourse" class="trash-icon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.course-item {
  background-color: #1e293b;
  color: white;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.3s;
}

.course-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.course-item-title {
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  flex: 1;
  text-align: left;
  transition: color 0.3s;
}

.course-item-title:hover {
  color: #63b3ed;
}

.icon-group {
  display: flex;
  align-items: center;
  gap: 20px;
}

.trash-icon,
.settings-icon {
  cursor: pointer;
  font-size: 24px;
  color: white;
  transition: color 0.3s;
}

.trash-icon:hover {
  color: #f56565;
}

.settings-icon:hover {
  color: #63b3ed;
}
</style>
