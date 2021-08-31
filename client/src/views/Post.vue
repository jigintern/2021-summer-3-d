<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <div class="my-5" />
    <v-container>
      <v-row justify="center" align-content="center">
        <v-col>
          <div class="white--text text-h4">一日のスケジュール</div>
          <div class="my-3" />
          <v-text-field
            label="行動内容"
            placeholder="行動内容"
            solo
            :class="`rounded-xl`"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <div class="white--text text-h4"></div>
        </v-col>
      </v-row>
    </v-container>
    <div class="my-15" />
    <v-container>
      <v-row justify="center" align-content="center">
        <v-col>
          <div class="white--text text-h4">食事</div>
          <v-col>
            <img v-if="image !== null" :src="image_url" width="600" height="400"/>
            <!--<img v-if="image === null" src="../assets/logo.png" width="600" height="400"/>-->
            <v-file-input
              v-model="image"
              accept="image/*"
              placeholder=""
              prepend-icon="mdi-camera"
              label="Image File Input"
            />
          </v-col>
        </v-col>
        <v-col>
          <div class="white--text text-h4">栄養素</div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: "Post",
  data() {
    return {
      image: null,
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
