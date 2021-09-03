<template>
  <div id="post">
    <v-app :style="{ background: $vuetify.theme.themes.light.background }">
      <div class="my-5" />
      <v-container>
        <v-row justify="center" align-content="center" style="width: 800px">
          <v-col>
            <v-btn color="blue" :to="`/edit/${this.$route.params.selectId}`">編集する</v-btn>
          </v-col>
          <v-col>
            <v-btn color="blue" v-on:click="onDelete()" >削除する</v-btn>
          </v-col>
        </v-row>
        <v-row justify="center" align-content="center">
          <v-col>
            <div class="white--text text-h4 my-3">プロフィール</div>
            <div class="white--text text-h5 my-3">
              <v-icon color="white">mdi-account</v-icon> ユーザーネーム
            </div>
            <div class="white--text text-h5 my-3">・{{ userName }}</div>
            <div class="white--text text-h5 my-3">
              <v-icon color="white">mdi-controller-classic</v-icon>
              主にプレイしているゲーム
            </div>
            <div class="white--text text-h5 my-3">・{{ gameName }}</div>
            <div class="white--text text-h5 my-3">
              <v-icon color="white">mdi-note</v-icon> プロフィール
            </div>
            <div class="white--text text-h5">・{{ profile }}</div>
          </v-col>
          <v-col>
            <div class="white--text text-h4">一日のスケジュール</div>
            <div class="my-3" />
            <v-row style="width: 880px">
              <v-col>
                <div v-if="this.scheduleList.length !== 0">
                  <div v-for="(action, key) in scheduleList" :key="key">
                    <div class="white--text text-h5">
                      ・{{ action.start_time }}～{{ action.end_time }}:{{
                        action.menu
                      }}
                    </div>
                    <div class="my-3" />
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <PieChart :chartData="chartItems" :options="chartOptions" />
          </v-col>
        </v-row>
      </v-container>
      <div class="my-5" />
      <v-container>
        <v-row justify="center" align-content="center">
          <v-col>
            <div class="white--text text-h4">食事で気を付けること</div>
            <div class="my-3" />
            <div class="white--text text-h5">{{ mealCarefulContent }}</div>
          </v-col>
          <v-col>
            <div class="white--text text-h4">ゲームで気を付けること</div>
            <div class="my-3" />
            <div class="white--text text-h5">{{ gameCarefulContent }}</div>
          </v-col>
        </v-row>
        <div class="my-15" />
      </v-container>
    </v-app>
  </div>
</template>

<script>
import PieChart from "../components/PieChart.vue";
import "vue2-timepicker/dist/VueTimepicker.css";
import axios from "axios";
export default {
  name: "Post",
  components: {
    PieChart,
  },
  data() {
    return {
      isChartExist: false,
      userName: "",
      gameName: "",
      profile: "",
      editPath: "",
      maxTime: 1440,
      beforeTime: 0,
      correntId: 1,
      dataList: [],
      actionContent: null,
      mealCarefulContent: null,
      gameCarefulContent: null,
      actionDataList: [],
      scheduleList: [],
      startTimeObject: {
        HH: "00",
        mm: "00",
      },
      endTimeObject: {
        HH: "00",
        mm: "00",
      },
      chartItems: {
        datasets: [
          {
            label: "一日の生活",
            data: [],
            backgroundColor: "#847636",
          },
        ],
      },
      chartOptions: {
        //responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted: function () {
    axios
      .get(`https://3d.intern.jigd.info/api/articles/${this.$route.params.selectId}`)
      .then((response) => {
        this.articleObject = response.data.data;

        console.log(this.articleObject);

        this.userName = this.articleObject.userName;
        this.gameName = this.articleObject.gameName;
        this.profile = this.articleObject.profile;
        this.mealCarefulContent = this.articleObject.meal_description;
        this.gameCarefulContent = this.articleObject.notice;

        this.dataList = this.chartItems.datasets[0].data;
        console.log(this.dataList)
        this.dataList.push(
          parseInt(this.articleObject.schedule[0].start_time) *
            60
        );
        this.maxTime -=
          parseInt(this.articleObject.schedule[0].start_time) *
          60;
        this.beforeTime = parseInt(
          this.articleObject.schedule[0].start_time
        );


        for (
          let i = 0;
          i < this.articleObject.schedule.length;
          i++
        ) {
          //this.articlesList.push(this.articleObject[i].schedule[i]);

          this.scheduleList.push({
            start_time: this.articleObject.schedule[i].start_time,
            end_time: this.articleObject.schedule[i].end_time,
            menu: this.articleObject.schedule[i].menu,
          });

          /*
          if (parseInt(this.articleObject.schedule[i].end_time) < parseInt(this.articleObject.schedule[i].start_time)) {
            
          }
          */
          if (
            this.beforeTime !=
            parseInt(this.articleObject.schedule[i].start_time)
          ) {
            this.dataList.push(
              (parseInt(
                this.articleObject.schedule[i].start_time
              ) -
                this.beforeTime) *
                60
            );
          }
          this.beforeTime = parseInt(
            this.articleObject.schedule[i].end_time
          );

          this.dataList.push(
            (parseInt(this.articleObject.schedule[i].end_time) -
              parseInt(
                this.articleObject.schedule[i].start_time
              )) *
              60
          );
          //this.dataList[this.dataList.length - 1] = this.dataList[this.dataList.length - 1] - this.dataList[0];
          this.maxTime -=
            (parseInt(this.articleObject.schedule[i].end_time) -
              parseInt(
                this.articleObject.schedule[i].start_time
              )) *
            60;
          console.log(`dataList: ${this.dataList}`);
        }

        this.dataList.push(this.maxTime);
        this.fillData(this.dataList);
        //this.testObject = response.data.data;

      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    fillData(props = "") {
      if(!props) {
        this.chartItems = {
          datasets: [
            {
              label: "一日の生活",
              backgroundColor: "#847636",
              data: [1440],
            },
          ],
        }
      } else {
        this.chartItems = {
          datasets: [
            {
              label: "一日の生活",
              backgroundColor: "#847636",
              data: props,
            },
          ],
        }
      }
    },
    async onDelete() {
      try {
        await axios.delete(`https://3d.intern.jigd.info/api/articles/${this.$route.params.selectId}`);

        // re-route "/"
        this.$router.push("/")
      } catch (err) {
        console.log(err.message);
      }
    }
  },
};
</script>

<style>
.custom-placeholder-color input {
  color: white !important;
  opacity: 1;
}
.custom-label-color .v-label {
  color: white !important;
  opacity: 1;
}
.custom-label-color .v-model {
  color: white !important;
  opacity: 1;
}
.timepicker {
  color: white !important;
  opacity: 1;
}
</style>