export default [
  {
    path: "/auth-admin",
    name: "auth-admin",
    component: () => import("@/modules/auth/admin/auth-admin.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/layouts/admin-layout.vue"),
    meta: { requiresAdmin: true },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/components/admin/dashboard/dashboard.vue"),
        redirect: "dashboard/courses/course-list",
        children: [
          {
            path: "courses",
            name: "courses",
            component: () =>
              import("@/components/admin/dashboard/courses/courses.vue"),
            children: [
              {
                path: "create-course",
                name: "create-course",
                component: () =>
                  import(
                    "@/components/admin/dashboard/courses/create-course/create-course.vue"
                  ),
              },
              {
                path: "course-list",
                name: "course-list",
                component: () =>
                  import(
                    "@/components/admin/dashboard/courses/courses-list/courses-list.vue"
                  ),
              },
              {
                path: "course-details/:id",
                name: "course-details",
                component: () =>
                  import(
                    "@/components/admin/dashboard/courses/course-details/course-details.vue"
                  ),
              },
            ],
          },
          {
            path: "tests",
            name: "tests",
            component: () =>
              import("@/components/admin/dashboard/test/test.vue"),
          },
          {
            path: "materials",
            name: "materials",
            component: () =>
              import("@/components/admin/dashboard/materials/materials.vue"),
          },
          {
            path: "videos",
            name: "videos",
            component: () =>
              import("@/components/admin/dashboard/videos/videos.vue"),
          },
        ],
      },
      {
        path: "moderators",
        name: "moderators",
        component: () =>
          import("@/components/admin/moderators/moderators-page.vue"),
      },
      {
        path: "students",
        name: "students",
        component: () =>
          import("@/components/admin/students/students-page.vue"),
      },
    ],
  },
];
