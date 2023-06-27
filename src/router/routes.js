const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/PageHome.vue"),
        name: "Home",
      },
      {
        path: "/Explore",
        component: () => import("src/pages/PageExplore.vue"),
        name: "Explore",
      },
      {
        path: "/Notifications",
        component: () => import("src/pages/PageNotifications.vue"),
        name: "Notifications",
      },
      {
        path: "/Messages",
        component: () => import("src/pages/PageMessages.vue"),
        name: "Messages",
      },
      {
        path: "/Bookmarks",
        component: () => import("src/pages/PageBookmarks.vue"),
        name: "Bookmarks",
      },
      {
        path: "/Profile",
        component: () => import("src/pages/PageProfile.vue"),
        name: "Profile",
      },
      {
        path: "/More",
        component: () => import("src/pages/PageMore.vue"),
        name: "More",
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
