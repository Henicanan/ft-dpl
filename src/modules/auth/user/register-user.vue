<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/useAuth";
import { roles } from "../../../constants/roles";

const router = useRouter();
const authStore = useAuthStore();

const roleName = ref<string>(roles.student);

const handleRegister = async () => {
  try {
    await authStore.register(roleName.value);
    router.push("/auth");
  } catch (err) {
    console.log(err);
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
