<script setup lang="ts">
import { ref } from "vue";
import LeftArrow from "../icons/left-arrow.vue";
import RigthArrow from "../icons/rigth-arrow.vue";

interface ModalProps {
  title: string;
  content: string;
  visible: boolean;
  price: string; 
  lessonsCount: number; 
  courseDescription: string; 
}

const image = [
  new URL("@/assets/img/course-img/courseimg1.png", import.meta.url).href,
  new URL("@/assets/img/course-img/courseimg2.png", import.meta.url).href,
  new URL("@/assets/img/course-img/course3img.png", import.meta.url).href,
];

const props = defineProps<ModalProps>();
const emit = defineEmits(["close"]);

const currentSlide = ref(0);
const carouselRef = ref<any>(null);

const goToNext = () => {
  if (carouselRef.value) {
    carouselRef.value.next();
  }
};

const goToPrev = () => {
  if (carouselRef.value) {
    carouselRef.value.prev();
  }
};

const onChange = (current: number) => {
  currentSlide.value = current;
};
</script>

<template>
  <a-modal
    width="70rem"
    :visible="props.visible"
    :title="props.title"
    @cancel="emit('close')"
    class="course-modal"
    :footer="null"
  >
    <div class="modal-content">
      <a-carousel
        ref="carouselRef"
        autoplay
        dots
        :current="currentSlide"
        @change="onChange"
      >
        <div v-for="(image, index) in image" :key="index" class="carousel-item">
          <img :src="image" alt="Картинка курса" class="carousel-image" />
        </div>
      </a-carousel>

      <div class="carousel-controls">
        <button @click="goToPrev" class="carousel-control prev">
          <LeftArrow />
        </button>
        <button @click="goToNext" class="carousel-control next">
          <RigthArrow />
        </button>
      </div>

      <div class="modal-description">
        <p>{{ props.content }}</p>
        <p><strong>Цена: </strong>{{ props.price }}</p>
        <p><strong>Количество уроков: </strong>{{ props.lessonsCount }}</p>
        <p><strong>Описание курса: </strong>{{ props.courseDescription }}</p>
      </div>
    </div>
  </a-modal>
</template>

<style scoped lang="scss">
.course-modal .ant-modal-content {
  border-radius: 16px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.modal-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
}

.carousel-item {
  position: relative;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 1rem;
}

.carousel-image {
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  height: auto;
}

.modal-description {
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  text-align: justify;
  padding-top: 1rem;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 10;
}

.carousel-control {
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease-in-out;
  font-size: 20px;

  &:hover {
    background-color: #1890ff;
    transform: scale(1.1);
  }
}

.carousel-controls .prev {
  left: 0;
}

.carousel-controls .next {
  right: 0;
}

.ant-carousel .slick-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}

.ant-carousel .slick-dots li button {
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.ant-carousel .slick-dots li.slick-active button {
  background-color: #1890ff;
}

.ant-carousel .slick-dots li button:hover {
  background-color: #1890ff;
}
</style>
