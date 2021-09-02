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
                <v-text-field
                  v-model="actionContent"
                  background-color="#676767"
                  label="行動内容"
                  style="width: 400px"
                  placeholder="行動内容"
                  solo
                  :class="`rounded-xl custom-placeholder-color custom-label-color`"
                >
                </v-text-field>
                <div v-if="this.actionDataList.length !== 0">
                  <div v-for="(action, key) in actionDataList" :key="key">
                    <div class="white--text text-h5">
                      ・{{ action.startTime }}～{{ action.endTime }}:{{
                        action.menu
                      }}
                    </div>
                  </div>
                </div>
              </v-col>
              <div class="my-3" />
              <v-col>
                <vue-timepicker
                  format="HH:mm"
                  v-model="startTimeObject"
                  class="timepicker"
                ></vue-timepicker>
              </v-col>
              <v-col>
                <vue-timepicker
                  format="HH:mm"
                  v-model="endTimeObject"
                ></vue-timepicker>
              </v-col>
              <v-col>
                <v-btn fab small v-on:click="addActionData()">
                  <v-icon size="50">mdi-plus-circle</v-icon>
                </v-btn>
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
            <v-row style="width: 500px">
              <v-col>
                <v-card
                  :class="`rounded-xl`"
                  class="mx-auto"
                  color="#3e3e3e"
                  height="50"
                  width="50"
                >
                </v-card>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="mealCarefulContent"
                  background-color="#3e3e3e"
                  label="例：朝ごはんはきちんと食べる"
                  style="width: 400px"
                  placeholder="例：朝ごはんはきちんと食べる"
                  solo
                  :class="`rounded-xl custom-placeholder-color custom-label-color`"
                >
                  <template v-slot:append>
                    <v-btn fab small
                      ><v-icon size="50">mdi-plus-circle</v-icon></v-btn
                    >
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <div class="white--text text-h4">ゲームで気を付けること</div>
            <div class="my-3" />
            <v-row style="width: 500px">
              <v-col>
                <v-sheet
                  :class="`rounded-xl`"
                  class="mx-auto"
                  color="#3e3e3e"
                  width="50"
                  height="50"
                ></v-sheet>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="gameCarefulContent"
                  background-color="#3e3e3e"
                  color="red"
                  label="例：朝ごはんはきちんと食べる"
                  style="width: 400px"
                  placeholder="例：朝ごはんはきちんと食べる"
                  solo
                  :class="`rounded-xl custom-placeholder-color custom-label-color`"
                >
                  <template v-slot:append>
                    <v-btn fab small
                      ><v-icon size="50">mdi-plus-circle</v-icon></v-btn
                    >
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row justify="end">
          <v-btn v-on:click="postData()" color="#46DC39">投稿する</v-btn>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import PieChart from "../components/PieChart.vue";
import VueTimePicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";
import axios from "axios";

export default {
  name: "Post",
  components: {
    PieChart,
    "vue-timepicker": VueTimePicker,
  },
  mounted: function() {
    this.$nextTick(function() {

    })
  },
  data() {
    return {
      isChartExist: false,
      actionContent: "Apex",
      mealCarefulContent:
        "食生活では、お肉多めご飯少なめにしています。エナジードリンクは余り飲まないようにしています。",
      gameCarefulContent:
        "Apexはとてもイライラすることも多いので、無理せずイライラするときはランク溶かす前にやめるのも重要です。",
      actionDataList: [],
      latestId: 0,

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
  methods: {
    addActionData() {
      this.actionDataList.push({
        //startTime: `${this.startTimeObject.HH}:${this.startTimeObject.mm}`,
        //endTime: `${this.endTimeObject.HH}:${this.endTimeObject.mm}`,
        startTime: `${this.startTimeObject.HH}`,
        endTime: `${this.endTimeObject.HH}`,
        menu: this.actionContent,
      });

      var list = this.actionDataList;
      var addTime =
        (parseInt(list[list.length - 1].endTime) -
          parseInt(list[list.length - 1].startTime)) *
        60;
      var maxTime =
        this.chartItems.datasets[0]["data"][
          this.chartItems.datasets[0]["data"].length - 1
        ];

      this.chartItems.datasets[0]["data"].unshift(addTime);
      this.chartItems.datasets[0]["data"][
        this.chartItems.datasets[0]["data"].length - 1
      ] = maxTime - addTime;
      /*
      console.log(parseInt(list[list.length-1].endTime));
      console.log(parseInt(list[list.length-1].startTime));
      console.log((parseInt(list[list.length-1].endTime) - parseInt(list[list.length-1].startTime)) * 60);
      */
      console.log(this.chartItems.datasets[0]["data"]);

      //this.$refs.PieChart.reRenderChart();
      //console.log("render chart");
      /*
      this.chartItems = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
        ],
      };
      */
    },
    postData() {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      //const body = JSON.stringify();
      axios
        .post(
          "http://localhost:8004/api/articles/",
          {
            gameName: "Apex",
            meal_description: this.mealCarefulContent,
            notice: this.gameCarefulContent,
            profile: "Apexのプロを１年やってます。",
            schedule: this.actionDataList,
            userName: "Test User 3",
          },
          config
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style>
/*
.custom-placeholder-color input::placeholder {
  color: white !important;
  opacity: 1;
}
*/
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