<template>
  <q-page class>
    <q-input placeholder="   Search Twitty" rounded outlined class="q-ma-md">
      <template v-slot:append>
        <q-avatar>
          <i class="fa-solid fa-magnifying-glass"></i>
        </q-avatar>
      </template>
    </q-input>
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-card>
          <q-tabs v-model="tab" align="left" class="q-mb-md">
            <q-tab
              v-model="tab"
              align="left"
              class="q-mb-none"
              justify="around"
              v-for="(item, index) in items"
              :key="index"
              :name="item.name"
            >
              {{ item.label }}
            </q-tab>
            <q-seperator />
            <q-tab-panels clickable v-model="tab">
              <q-tab-panel
                v-for="(item, index) in items"
                :key="index"
                :name="item.name"
              >
                <q-item-label
                  overline
                  v-for="(label, index) in item.labels"
                  :key="index"
                >
                  <q-item-label overline> {{ label.title }}</q-item-label>
                  <q-item-section side bottom>
                    <q-item-label clickable caption
                      >{{ label.tweetcount }} tweets</q-item-label
                    >
                  </q-item-section>
                </q-item-label>
              </q-tab-panel>
            </q-tab-panels>
          </q-tabs>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PageAbout",
  data() {
    return {
      tab: "tab1",
      items: [
        {
          name: "foryou",
          label: "For You",
          content: "This is the content for Tab 1",
          labels: [
            {
              title: "Artificial Intelligence",
              tweetcount: "103k",
            },
            {
              title: "Grammys",
              tweetcount: "553k",
            },
            {
              title: "Fifa",
              tweetcount: "123k",
            },
          ],
        },
        {
          name: "trending",
          label: "Trending",
          content: "This is the content for Tab 2",
          labels: [
            {
              title: "Artificial Intelligence",
              tweetcount: "103k",
            },
          ],
        },
        {
          name: "sports",
          label: "Sports",
          content: "This is the content for Tab 3",
        },
        {
          name: "news",
          label: "News",
          content: "This is the content for Tab 3",
        },
        {
          name: "entertainment",
          label: "Entertainment",
          content: "This is the content for Tab 3",
        },
      ],
    };
  },
});
</script>
<style>
.q-tab-panels {
  height: 100%;
}
.q-tabs__container {
  display: flex;
  justify-content: space-between;
}
</style>
