<template>
  <div class="admin-page">
    <aside class="admin-sidebar">
      <div class="sidebar-header">
        <h2 class="sidebar-title">Админка</h2>
      </div>
      <nav class="sidebar-menu">
        <ul>
          <li>
            <router-link
              to="/admin/dashboard"
              class="menu-link"
              active-class="active-link"
            >
              <span class="menu-text">Панель управления</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/admin/moderators"
              class="menu-link"
              active-class="active-link"
            >
              <span class="menu-text">Модераторы</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/admin/students"
              class="menu-link"
              active-class="active-link"
            >
              <span class="menu-text">Студенты</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <main class="admin-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped lang="scss">
.admin-page {
  display: flex;
  height: 100vh;
  background-color: #eef2f7;
}

.admin-sidebar {
  width: $sidebar-width;
  background: $sidebar-bg;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-right: 2px solid #dee2e6;
  display: flex;
  flex-direction: column;

  .sidebar-header {
    margin-bottom: 30px;
    text-align: center;

    .sidebar-title {
      font-size: 1.7rem;
      color: $primary-color;
      font-weight: bold;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
  }

  .sidebar-menu {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      margin-bottom: 15px;

      .menu-link {
        display: flex;
        align-items: center;
        padding: 10px 15px;
        border-radius: 8px;
        text-decoration: none;
        color: $text-color;
        font-size: 1.2rem;
        font-weight: 500;
        background-color: #ffffff;
        transition: background-color 0.3s ease, transform 0.2s ease;

        &:hover {
          background-color: $hover-bg;
          transform: scale(1.02);
        }

        .menu-icon {
          margin-right: 10px;
          font-size: 1.4rem;
          color: $primary-color;
        }

        .menu-text {
          flex: 1;
        }

        &.active-link {
          background-color: $active-bg;
          color: #ffffff;
          font-weight: 600;

          .menu-icon {
            color: #ffffff;
          }
        }
      }
    }
  }
}

.admin-content {
  flex: 1;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 12px;
  margin: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}
</style>
