<template>
  <div id="post">
    <v-app :style="{ background: $vuetify.theme.themes.light.background }">
      <div class="my-5" />
      <v-container>
        <v-row justify="center" align-content="center">
          <v-col>
            <div class="white--text text-h4">一日のスケジュール</div>
            <div class="my-3" />
            <v-row style="width: 880px">
              <v-col>
                <div v-if="this.scheduleList.length !== 0">
                  <div v-for="(action, key) in scheduleList" :key="key">
                    <div class="white--text text-h4">
                      ・{{ action.start_time }}～{{ action.end_time }}:{{
                        action.menu
                      }}
                    </div>
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
            <div class="white--text text-h5">{{mealCarefulContent}}</div>
          </v-col>
          <v-col>
            <div class="white--text text-h4">ゲームで気を付けること</div>
            <div class="my-3" />
            <div class="white--text text-h5">{{gameCarefulContent}}</div>
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
  props:["selectId"],
  components: {
    PieChart,
  },
  data() {
    return {
      isChartExist: false,
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
            data: [1440],
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
  mounted: function() {
    console.log(this.selectId);
    axios
      .get("http://localhost:8004/api/articles/")
      .then((response) => {
        this.articleObject = response.data.data;
        //this.articlesList.push(this.articleObject[0]);
        this.correntId = this.selectId - 1;

        this.mealCarefulContent = this.articleObject[this.correntId].meal_description;
        this.gameCarefulContent = this.articleObject[this.correntId].notice;

        for (let i = 0; i < this.articleObject[this.correntId].schedule.length; i++) {
          //this.articlesList.push(this.articleObject[i].schedule[i]);
          this.scheduleList.push({
              start_time: this.articleObject[this.correntId].schedule[i].start_time,
              end_time: this.articleObject[this.correntId].schedule[i].end_time,
              menu: this.articleObject[this.correntId].schedule[i].menu
          });
        }

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