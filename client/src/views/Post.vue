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
                  background-color="#676767"
                  label="行動内容"
                  style="width: 400px"
                  placeholder="行動内容"
                  solo
                  :class="`rounded-xl custom-placeholder-color custom-label-color`"
                >
                </v-text-field>
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
                <v-btn fab small>
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
            <v-row style="width: 600px">
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
                  background-color="#3e3e3e"
                  label="例：朝ごはんはきちんと食べる"
                  style="width: 400px"
                  placeholder="例：朝ごはんはきちんと食べる"
                  solo
                  :class="`rounded-xl custom-placeholder-color custom-label-color`"
                >
                </v-text-field>
              </v-col>
              <v-col>
                <v-btn fab small>
                  <v-icon size="50">mdi-plus-circle</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <div class="white--text text-h4">ゲームで気を付けること</div>
            <div class="my-3" />
            <v-row style="width: 600px">
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
                  background-color="#3e3e3e"
                  color="red"
                  label="例：朝ごはんはきちんと食べる"
                  style="width: 400px"
                  placeholder="例：朝ごはんはきちんと食べる"
                  solo
                  :class="`rounded-xl custom-placeholder-color custom-label-color`"
                >
                </v-text-field>
              </v-col>
              <v-col>
                <v-btn fab small>
                  <v-icon size="50">mdi-plus-circle</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row justify="end">
          <v-btn>投稿する</v-btn>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import PieChart from "../components/PieChart.vue";
import VueTimePicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";

export default {
  name: "Post",
  components: {
    PieChart,
    "vue-timepicker": VueTimePicker,
  },
  data() {
    return {
      image: null,
      startTimeObject: {
        HH: "00",
        mm: "00",
        A: "AM",
      },
      endTimeObject: {
        HH: "00",
        mm: "00",
        A: "AM",
      },
      chartItems: {
        datasets: [
          {
            label: "一日の生活",
            data: [95, 70, 80, 65, 69, 80, 100, 100, 72, 81, 45, 70],
            backgroundColor: "#847636",
          },
        ],
      },
      chartOptions: {
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    image_url() {
      if (this.image === null) {
        return;
      } else {
        return URL.createObjectURL(this.image);
      }
    },
  },
};
</script>

<style>
.custom-placeholder-color input::placeholder {
  color: white !important;
  opacity: 1;
}
.custom-label-color .v-label {
  color: white !important;
  opacity: 1;
}
.timepicker {
  color: white !important;
  opacity: 1;
}
</style>