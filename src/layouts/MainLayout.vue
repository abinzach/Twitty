<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold"
          ><span class="gt-sm"> {{ $route.name }} </span>

          <q-icon
            clickable
            class="q-pb-sm lt-md absolute-center header-icon"
            name="fas fa-dove fa-fade"
            size="sm"
            color="primary"
            style="--fa-primary-color: #7a9db8; --fa-secondary-color: #0590d6"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      :width="280"
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      ><router-link to="/"
        ><q-btn flat rounded color="primary">
          <q-icon
            class="q-pa-md"
            name="fas fa-dove fa-fade"
            size="md"
            color="primary"
            style="
              --fa-primary-color: #7a9db8;
              --fa-secondary-color: #0590d6;
            " /></q-btn
      ></router-link>

      <q-list class="justify-between">
        <q-item to="/" clickable v-ripple exact class="q-pa-md">
          <q-item-section avatar>
            <q-icon name="fa-sharp fa-solid fa-house" size="md" />
          </q-item-section>

          <q-item-section round class="text-h5 text-weight-bold"
            >Home</q-item-section
          >
        </q-item>
        <q-item to="/explore" clickable v-ripple exact class="q-pa-md">
          <q-item-section avatar>
            <q-icon name="fa-sharp fa-solid fa-magnifying-glass" size="md" />
          </q-item-section>

          <q-item-section class="text-h5 text-weight-bold"
            >Explore</q-item-section
          >
        </q-item>
        <q-item to="/Notifications" clickable v-ripple exact class="q-pa-md">
          <q-item-section avatar>
            <q-icon name="fa-sharp fa-regular fa-bell" size="md" />
          </q-item-section>

          <q-item-section class="text-h5 text-weight-bold"
            >Notifications</q-item-section
          >
        </q-item>
        <q-item to="/Messages" clickable v-ripple exact class="q-pa-md">
          <q-item-section avatar>
            <q-icon name="fa-regular fa-envelope" size="md" />
          </q-item-section>

          <q-item-section class="text-h5 text-weight-bold"
            >Messages</q-item-section
          >
        </q-item>
        <q-item to="/Bookmarks" clickable v-ripple exact class="q-pa-md">
          <q-item-section avatar>
            <q-icon name="fa-regular fa-bookmark" size="md" />
          </q-item-section>

          <q-item-section class="text-h5 text-weight-bold"
            >Bookmarks</q-item-section
          >
        </q-item>
        <q-item to="/Profile" clickable v-ripple exact class="q-pa-md">
          <q-item-section avatar>
            <q-icon name="fa-regular fa-user" size="md" />
          </q-item-section>

          <q-item-section class="text-h5 text-weight-bold"
            >Profile</q-item-section
          >
        </q-item>
        <q-space class="leftDrawerSpace" />
        <q-item to="/More" clickable v-ripple exact class="q-pa-md">
          <q-item-section avatar>
            <q-icon name="fa-solid fa-list-ul" size="md" />
          </q-item-section>

          <q-item-section class="text-h5 text-weight-bold">More</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer
      :width="400"
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
      bordered
      class="q-ma-sm"
    >
      <q-input placeholder="   Search Twitty" rounded outlined class="q-ma-md">
        <template v-slot:append>
          <q-avatar>
            <i class="fa-solid fa-magnifying-glass"></i>
          </q-avatar>
        </template>
      </q-input>
      <q-space />
      <q-space />
      <q-card flat class="whats bg-grey-2 my-card">
        <q-list filled rounded padding class="q-ma-md">
          <div class="text-h6 text-weight-bold">What's Happening</div>

          <q-item clickable>
            <q-item-section>
              <q-item-label overline class="text-grey text-weight-bold"
                >Travel Luxury</q-item-label
              >
              <q-item-label class="text-weight-bold"
                >The best autumn desination 2023!</q-item-label
              >
              <q-item-label caption class="text-weight-bold"
                >Switzerland voted as the best autumn desination Q1
                2023!</q-item-label
              >
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>1 min ago</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>
              <q-item-label overline class="text-grey text-weight-bold"
                >Sports</q-item-label
              >
              <q-item-label class="text-weight-bold"
                >UFC star Alex Pereira was "rotten inside" after brutal battle
                with alcoholism</q-item-label
              >
              <q-item-label caption
                >UFC star Alex Pereira after the defeat with Israel
                Adasanya....</q-item-label
              >
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>3 mins ago</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>
              <q-item-label overline class="text-grey text-weight-bold"
                >Fashion</q-item-label
              >
              <q-item-label class="text-weight-bold"
                >Louis Vuitton signs deal to boost South Korea
                tourism</q-item-label
              >
              <q-item-label caption
                >The French luxury fashion house has signed an agreement with
                the Korea Tourism.....</q-item-label
              >
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>3 mins ago</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
      <q-space />
      <q-card flat class="bg-grey-2 my-card">
        <q-list filled rounded padding class="q-ma-md">
          <div class="text-h6 text-weight-bold">You might like</div>
          <q-item
            v-for="contact in offline"
            :key="contact.id"
            class="q-mb-sm"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-avatar>
                <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ contact.name }}</q-item-label>
              <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-icon name="chat_bubble" color="grey" />
            </q-item-section>
          </q-item> </q-list
      ></q-card>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const contacts = [
      {
        id: 1,
        name: "Ruddy Jedrzej",
        email: "rjedrzej0@discuz.net",
        letter: "R",
      },
      {
        id: 2,
        name: "Mallorie Alessandrini",
        email: "malessandrini1@marketwatch.com",
        letter: "M",
      },
      {
        id: 3,
        name: "Elisabetta Wicklen",
        email: "ewicklen2@microsoft.com",
        letter: "E",
      },
      {
        id: 4,
        name: "Seka Fawdrey",
        email: "sfawdrey3@wired.com",
        letter: "S",
      },
    ];

    const offline = [
      {
        id: 5,
        name: "Brunhilde Panswick",
        email: "bpanswick4@csmonitor.com",
        avatar: "avatar2.jpg",
      },
      {
        id: 6,
        name: "Winfield Stapforth",
        email: "wstapforth5@pcworld.com",
        avatar: "avatar6.jpg",
      },
    ];
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left:50%
  transform: translateX(-50%)

  .leftDrawerSpace
   height:100px
</style>
