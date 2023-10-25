const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        meta: { active: "/" },
      },
      {
        path: "/about-us",
        component: () => import("pages/AboutUsPage.vue"),
        meta: { active: "/about-us" },
      },
      {
        path: "/contact",
        component: () => import("pages/ContactPage.vue"),
        meta: { active: "/contact" },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
