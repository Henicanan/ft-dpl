<script setup lang="ts">
import { ref } from "vue";

const userName = ref("Иван Иванов");
const userEmail = ref("ivan@example.com");
const userAvatar = ref("https://example.com/avatar.jpg");
const registrationDate = ref("01 января 2024");

const activityHistory = ref([
  {
    id: 1,
    title: "Записался на курс 'Введение в программирование'",
    date: "12 декабря 2024",
  },
  {
    id: 2,
    title: "Изменил пароль",
    date: "15 ноября 2024",
  },
  {
    id: 3,
    title: "Обновил информацию профиля",
    date: "28 октября 2024",
  },
]);
</script>

<template>
  <div class="profile-container">
    <div class="profile-header">
      <h1>Личный кабинет</h1>
      <p class="welcome-message">Добро пожаловать, {{ userName }}!</p>
    </div>

    <div class="profile-info">
      <div class="profile-avatar">
        <img :src="userAvatar" alt="Аватар пользователя" />
      </div>
      <div class="profile-details">
        <h2>{{ userName }}</h2>
        <p><strong>Email:</strong> {{ userEmail }}</p>
        <p><strong>Дата регистрации:</strong> {{ registrationDate }}</p>
      </div>
    </div>

    <div class="activity-history">
      <h2>История активности</h2>
      <table v-if="activityHistory.length > 0" class="activity-table">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Активность</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="activity in activityHistory" :key="activity.id">
            <td>{{ activity.date }}</td>
            <td>{{ activity.title }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else class="no-activity">
        <p>У вас нет истории активности.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile-container {
  margin: 3rem 6rem;
  font-family: "Arial", sans-serif;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 36px;
    font-weight: bold;
    color: #333;
  }

  p {
    font-size: 24px;
    margin-top: 0.5rem;
    color: #555;
  }
}

.profile-info {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  margin-right: 2rem;
}

.profile-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.profile-details {
  h2 {
    font-size: 28px;
    color: #333;
  }

  p {
    font-size: 18px;
    color: #555;
  }

  strong {
    font-weight: bold;
  }
}

.activity-history {
  margin-top: 2rem;

  h2 {
    font-size: 24px;
    margin-bottom: 1rem;
    color: #333;
  }

  .activity-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2rem;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .activity-table th,
  .activity-table td {
    padding: 12px 16px;
    text-align: left;
    font-size: 16px;
    color: #444;
    border-bottom: 1px solid #eee;
  }

  .activity-table th {
    background-color: #f5f5f5;
    font-weight: bold;
    color: #333;
  }

  .activity-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  .activity-table tr:hover {
    background-color: #f1f1f1;
  }

  .no-activity {
    font-size: 16px;
    color: #777;
  }
}
</style>
