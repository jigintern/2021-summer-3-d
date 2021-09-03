<template>
  <div id="post">
    <v-app :style="{ background: $vuetify.theme.themes.light.background }">
      <div class="my-5" />
      <v-container>
        <v-row justify="center" align-content="center" style="width: 400px">
          <v-col>
            <v-btn color="blue" text :to="editPath">編集する</v-btn>
          </v-col>
          <v-col>
            <v-btn color="blue" text >削除する</v-btn>
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
      <div class="my-15" />
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
  props: ["selectId"],
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
      actionContent: "Apex",
      mealCarefulContent:
        "食生活では、お肉多めご飯少なめにしています。エナジードリンクは余り飲まないようにしています。",
      gameCarefulContent:
        "Apexはとてもイライラすることも多いので、無理せずイライラするときはランク溶かす前にやめるのも重要です。",
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
      .get("http://localhost:8893/api/articles/")
      .then((response) => {
        this.articleObject = response.data.data;
        //this.articlesList.push(this.articleObject[0]);
        this.correntId = this.selectId - 1;
        this.mealCarefulContent =
          this.articleObject[this.correntId].meal_description;
        this.gameCarefulContent = this.articleObject[this.correntId].notice;
        this.userName = this.articleObject[this.correntId].userName;
        this.gameName = this.articleObject[this.correntId].gameName;
        this.profile = this.articleObject[this.correntId].profile;

        this.editPath = `/edit/${this.correntId}`;

        this.dataList = this.chartItems.datasets[0].data;
        this.dataList.push(
          parseInt(this.articleObject[this.correntId].schedule[0].start_time) *
            60
        );
        this.maxTime -=
          parseInt(this.articleObject[this.correntId].schedule[0].start_time) *
          60;
        this.beforeTime = parseInt(
          this.articleObject[this.correntId].schedule[0].start_time
        );
        //this.dataList[this.dataList.length - 1] = (1440 - parseInt(this.articleObject[this.correntId].schedule[0].start_time) * 60);

        //this.dataList = this.chartItems.datasets[0].data;
        //this.dataList.unshift(parseInt(this.articleObject[this.correntId].schedule[0].start_time) * 60);
        //console.log(this.dataList);

        for (
          let i = 0;
          i < this.articleObject[this.correntId].schedule.length;
          i++
        ) {
          //this.articlesList.push(this.articleObject[i].schedule[i]);

          this.scheduleList.push({
            start_time:
              this.articleObject[this.correntId].schedule[i].start_time,
            end_time: this.articleObject[this.correntId].schedule[i].end_time,
            menu: this.articleObject[this.correntId].schedule[i].menu,
          });

          /*
          if (parseInt(this.articleObject[this.correntId].schedule[i].end_time) < parseInt(this.articleObject[this.correntId].schedule[i].start_time)) {
            
          }
          */
          if (
            this.beforeTime !=
            parseInt(this.articleObject[this.correntId].schedule[i].start_time)
          ) {
            this.dataList.push(
              (parseInt(
                this.articleObject[this.correntId].schedule[i].start_time
              ) -
                this.beforeTime) *
                60
            );
          }
          this.beforeTime = parseInt(
            this.articleObject[this.correntId].schedule[i].end_time
          );

          this.dataList.push(
            (parseInt(this.articleObject[this.correntId].schedule[i].end_time) -
              parseInt(
                this.articleObject[this.correntId].schedule[i].start_time
              )) *
              60
          );
          //this.dataList[this.dataList.length - 1] = this.dataList[this.dataList.length - 1] - this.dataList[0];
          this.maxTime -=
            (parseInt(this.articleObject[this.correntId].schedule[i].end_time) -
              parseInt(
                this.articleObject[this.correntId].schedule[i].start_time
              )) *
            60;
          console.log(this.dataList);
        }

        this.dataList.push(this.maxTime);
        this.fillData();
        //this.testObject = response.data.data;
        console.log(this.scheduleList);
        console.log(this.articleObject[0].meal_description);
        console.log(this.articleObject[0].notice);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    fillData() {
      this.chartItems = {
        datasets: [
          {
            label: "一日の生活",
            backgroundColor: "#847636",
            data: this.dataList,
          },
        ],
      };
    },
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