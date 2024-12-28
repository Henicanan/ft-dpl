export default [
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/modules/auth/user/auth-user.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    component: () => import("@/modules/auth/user/register-user.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/layouts/user-layout.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "main-page",
        name: "main-page",
        component: () => import("@/components/user/main-page/main-page.vue"),
      },
      {
        path: "personal-courses",
        name: "personal-courses",
        component: () =>
          import("@/components/user/personal-courses/personal-courses.vue"),
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("@/components/user/profile/profile.vue"),
      },
      {
        path: "settings",
        name: "settings",
        component: () => import("@/components/user/settings/settings-page.vue"),
      },
    ],
  },
];
