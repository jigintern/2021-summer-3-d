<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <v-container>
      <v-row class="flex-column" align-content="center">
        <v-col cols="1" md="6" v-for="n in 20" :key="n">
          <div class="my-5" />
          <v-card dark raised width="800" class="ma-2">
            <v-card-title class="headline">ゲーマー生活</v-card-title>
            <v-card-subtitle>ゲーマー</v-card-subtitle>
            <v-divider class="mx-3"></v-divider>
            <v-card-text>
              <div class="body-1 mb-1">ゲーム楽しい</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Home",

  components: {},
};
</script>
