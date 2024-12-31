<template>
  <div class="settings">
    <div class="settings-container">
      <h2>Настройки профиля</h2>

      <section>
        <h3>Персональная информация</h3>
        <div class="field">
          <label for="avatar">Аватар:</label>
          <div class="avatar-upload">
            <img :src="avatar" alt="Avatar" class="avatar-preview" />
            <input type="file" id="avatar" @change="uploadAvatar" />
          </div>
        </div>
        <div class="field">
          <label for="name">Имя:</label>
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Введите ваше имя"
          />
        </div>
        <div class="field">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Введите ваш email"
          />
        </div>
      </section>

      <section>
        <h3>Безопасность</h3>
        <div class="field">
          <div class="old-password">
            <label for="password">Введите старый пароль:</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Введите старый пароль"
            />
            <div class="validation-icon">Верный пароль</div>
            <div class="validation-icon">Не верный пароль</div>
          </div>
          <div class="new-password">
            <label for="password">Новый пароль:</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Введите новый пароль"
            />
          </div>
        </div>
      </section>

      <div class="actions">
        <button @click="saveSettings" class="save">Сохранить изменения</button>
        <button @click="resetSettings" class="cancel">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const avatar = ref("path-to-default-avatar.jpg");
const name = ref("");
const email = ref("");
const password = ref("");
const isDarkTheme = ref(false);

const uploadAvatar = (event) => {
  const file = event.target.files[0];
  if (file) {
    avatar.value = URL.createObjectURL(file);
  }
};

const saveSettings = () => {
  console.log("Сохранение настроек", { name, email, password, isDarkTheme });
};

const resetSettings = () => {
  console.log("Сброс изменений");
};
</script>

<style scoped>
.settings {
  min-width: 70rem;
  margin-top: 2rem;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  padding-left: 30%;
}

h2 {
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}

section {
  margin-bottom: 20px;

  h3 {
    font-size: 22px;
  }
}

.field {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 20rem;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.avatar-upload {
  display: flex;
  align-items: center;
}

.avatar-preview {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
}

.toggle {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 20px;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:checked + .slider:before {
  transform: translateX(20px);
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}

button.save {
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

button.cancel {
  background-color: #f44336;
  color: white;
}

button.cancel:hover {
  background-color: #d32f2f;
}
</style>
