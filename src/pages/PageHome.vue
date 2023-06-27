<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input
            bottom-slots
            v-model="newTwit"
            placeholder="  Whats happening?"
            counter
            maxlength="200"
            autogrow
            class="twit"
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
              </q-avatar>
            </template>

            <template v-slot:append>
              <q-icon
                v-if="text !== ''"
                name="close"
                @click="text = ''"
                class="cursor-pointer"
              />
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn
            @click="addNewTwit()"
            :disable="!newTwit"
            no-caps
            class="q-mb-lg"
            unelevated
            rounded
            color="primary"
            >Twit</q-btn
          >
        </div>
      </div>
      <q-separator class="divider" horizontal size="10px" color="grey-2" />
      <q-list>
        <transition-group
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <q-item class="twit q-py-md" v-for="twit in twits" :key="twit.name">
            <q-item-section avatar top>
              <q-avatar>
                <img
                  size="xl"
                  src="{{ twit.dp }}"
                  srcset="{{ twit.dp }},
                  https://thumbs.dreamstime.com/b/blue-tweet-bird-vector-logo-jpg-jpeg-eps-twitter-icon-button-flat-social-media-twiter-sign-blue-tweet-bird-vector-logo-jpg-jpeg-131604912.jpg"
                  alt=""
                />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1"
                ><strong>{{ twit.name }}</strong>
                <span class="text-grey-7 q-pl-sm">
                  {{ twit.handle }}<br class="lt-md" />
                  &bull; {{ relativeDateMethod(twit.time) }}</span
                ></q-item-label
              >
              <q-item-label class="text-body1">
                {{ twit.content }}
              </q-item-label>

              <div class="row justify-between">
                <q-btn
                  flat
                  round
                  color="grey"
                  size="sm"
                  icon="far fa-comment"
                  label=""
                />
                <q-btn
                  flat
                  round
                  color="grey"
                  size="sm"
                  icon="fas fa-retweet"
                  label=""
                />
                <q-btn
                  flat
                  round
                  color="grey"
                  size="sm"
                  icon="far fa-heart"
                  label=""
                />
                <q-btn
                  flat
                  round
                  color="grey"
                  size="sm"
                  icon="fas fa-arrow-up-from-bracket"
                />
              </div>
              <q-separator horizontal size="2px" color="grey-2" />
            </q-item-section>
            <q-separator horizontal size="2px" color="grey-2" />

            <q-separator inset color="grey" />
          </q-item>
          <q-separator inset color="grey" />
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { formatDistance, subDays } from "date-fns";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHome",
  data() {
    return {
      newTwit: "",
      twits: [
        {
          name: "Suma Zacharia",
          handle: "@sumazacharia",
          dp: "https://cdn.quasar.dev/img/avatar2.jpg",
          content:
            "Let's talk about mental health. It's time to break the stigma and start having open and honest conversations about our struggles. It's okay to not be okay, and seeking help is a sign of strength, not weakness. Take care of yourself and those around you. #mentalhealthawareness #breakthestigma 🧠💛",
          time: 1682604043172,
        },
        {
          name: "Cillian Murphy",
          handle: "@cillianmurphy",
          dp: "https://imgs.search.brave.com/kTjYSqFHp_mzvbIIoMAYSlvpwSSdMGUxXQzZBgXBg9w/rs:fit:504:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/dlhkcEhoWE1Bdmhr/N1VXYTBNNnNRSGFH/OSZwaWQ9QXBp",
          content:
            "I believe that creativity is an essential part of being human. It allows us to explore new ideas, express ourselves, and connect with others in ways that words alone cannot. Let's celebrate creativity in all its forms and encourage it in ourselves and others. #Creativity #Art #Expression",
          time: 1682604503172,
        },
        {
          name: "Andrew Tate",
          handle: "@daRealTopG",
          dp: "https://imgs.search.brave.com/B4jHfcSFlZhJOY7Qv-sVf5Oa70zH5rKcH9r7179dOOY/rs:fit:356:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5X/TzdTdlJwMDI0Z1R5/MnAwSnZnRnVnSGFK/MyZwaWQ9QXBp",
          content:
            "Success is not about waiting for opportunities to come your way. It's about creating your own opportunities through hard work, determination, and a never-give-up attitude. Keep pushing forward, even when the going gets tough, and you will achieve greatness. Ey yo Where is my sandwich. Martha , you slut, where is my sandwich! Fuck these hoes yo",
          time: 1682602223172,
        },
        {
          name: "Dalai Lama",
          handle: "@spiritualTongue",
          dp: "https://imgs.search.brave.com/YiGP3Go6p-4S9U8xf4HizNtwcbAdBS49fDoU5-UyffQ/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKd1l3WkNE/QUxFcDlLb2hUM2FZ/V3BtNTVLMHpVMk5v/aWRpNndBPXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v",
          content:
            "It took the mankind thousands of years to develop our taste buds. Different cultures have gone through evolution in their own way which led to radical differences in taste buds across the globe. It is our sole duty to experience and restore our taste buds to our primal stages. So No! I did not suck that kid's tongue for pleasure.",
          time: 1682604043172,
        },

        {
          name: "President Joe Biden",
          handle: "@potus",
          dp: "https://imgs.search.brave.com/6zovd8klCuVpe4m9vjbV40GVYLSLZMnf_acMn34rHTc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/aXJpc2hjZW50cmFs/LmNvbS91cGxvYWRz/L2FydGljbGUvMTMz/NjE2L2pvZV9iaWRl/bl9qdW5lXzIyLmpw/Zz90PTE1NjIyNTI3/MjQ",
          content:
            "People of America, there are three major issues that require urgent national attention. We have been told that we should not have insipidasioson right wing shevasabbiso. How old is that kid?",
          time: 1682601113172,
        },
        {
          name: "Elon Musk",
          handle: "@elonMusk",
          dp: "https://imgs.search.brave.com/webbOxSZp59S8qas-reyfZvUkviT1Hs5xKEYWEatbjA/rs:fit:668:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/ZEladWRLTmc0ZGdQ/ZFRVWXk3VXhBSGFG/USZwaWQ9QXBp",
          content:
            "After 2 months of intense work, our team has finally launched an app that weekly selects a random Employee-ID and automically fires them from our office. Tech these days!",
          time: 1682604343172,
        },
      ],
    };
  },
  methods: {
    relativeDateMethod(value) {
      return formatDistance(value, new Date(), {
        addSuffix: true,
      });
    },
    addNewTwit() {
      let addTwit = {
        name: "Abin Zacharia",
        handle: "@abinzacharia",
        dp: "https://cdn.quasar.dev/img/avatar5.jpg",
        content: this.newTwit,
        time: Date.now(),
      };
      this.twits.unshift(addTwit);
      this.newTwit = "";
      console.log("New Twit Added");
    },
  },
});
</script>
<style lang="sass">
.twit
textarea
  font-size:19px
  line-height :1.7em

  .divider
  border-top:1px solid
  border-bottom:1px solid
  border-color:$grey-5

  .twit
  border-top:1px solid
</style>
