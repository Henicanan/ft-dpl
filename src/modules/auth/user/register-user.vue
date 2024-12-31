<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/useAuth";
import { roles } from "../../../constants/roles";
import {
  validateLogin,
  validatePassword,
} from "../user/composables/validationUserSchemas";

const router = useRouter();
const authStore = useAuthStore();

const roleName = ref<string>(roles.student);

const errorMessages = ref<{ email: string; password: string }>({
  email: "",
  password: "",
});

const validateForm = () => {
  const isLoginlValid = validateLogin(authStore.email);
  const isPasswordValid = validatePassword(authStore.password);

  console.log("Login valid:", isLoginlValid);
  console.log("Password valid:", isPasswordValid);

  errorMessages.value.email = isLoginlValid ? "" : "Неверный формат логина.";
  errorMessages.value.password = isPasswordValid
    ? ""
    : "Пароль должен быть не менее 8 символов, содержать прописные и строчные буквы, цифры и спецсимволы.";

  return isLoginlValid && isPasswordValid;
};

const handleRegister = async () => {
  if (validateForm()) {
    try {
      console.log("Регистрация началась");
      await authStore.register(roleName.value);
      console.log("Регистрация прошла успешно");
      router.push("/auth");
    } catch (err) {
      console.error("Ошибка регистрации:", err);
    }
  } else {
    console.log("Форма не прошла валидацию");
  }
};
</script>

<template>
  <div class="auth-container">
    <div class="auth-form">
      <h2 class="auth-title">Регистрация</h2>
      <form @submit.prevent="handleRegister" class="form">
        <div class="form-group">
          <label for="email" class="form-label">Логин</label>
          <input
            v-model="authStore.email"
            id="email"
            type="text"
            placeholder="Введите ваш логин"
            class="form-input"
          />
          <p v-if="errorMessages.email" class="error-message">
            {{ errorMessages.email }}
          </p>
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Пароль</label>
          <input
            v-model="authStore.password"
            type="password"
            id="password"
            placeholder="Введите пароль"
            class="form-input"
          />
          <p v-if="errorMessages.password" class="error-message">
            {{ errorMessages.password }}
          </p>
        </div>
        <button type="submit" class="btn btn-primary">Создать аккаунт</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: $background-color;
  padding: 1rem;
}

.auth-form {
  background-color: $form-color;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.auth-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  text-align: left;
}

.form-label {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid $input-border;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: $input-focus;
    box-shadow: 0 0 0 3px rgba($input-focus, 0.2);
  }
}

.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s, transform 0.2s;

  &.btn-primary {
    background-color: $primary-color;
    color: #fff;

    &:hover {
      background-color: $primary-hover;
    }

    &:active {
      transform: scale(0.98);
    }
  }
}
</style>
