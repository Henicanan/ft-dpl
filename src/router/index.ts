import { createRouter, createWebHistory } from "vue-router";
import adminRoutes from "./routes/adminRoutes";
import userRoutes from "./routes/userRoutes";
import { useAuthStore } from "@/modules/auth/store/useAuth";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/auth",
    },
    ...adminRoutes,
    ...userRoutes,
  ],
});

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthorizated) {
    return next("/auth");
  }
  next();
});

export default router;
