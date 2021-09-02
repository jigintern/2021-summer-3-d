<template>
  <v-app>
    <v-app-bar app color="dark" dark height="100">
      <v-toolbar-title class="text-h4 ml-4"> Service name </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row align-content="center">
        <v-col>
          <div class="my-8" />
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            solo
            :class="`rounded-xl`"
          >
            <template v-slot:append>
              <v-btn>検索</v-btn>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/">ホーム画面</v-btn>
        <v-btn text to="/post">投稿</v-btn>
        <v-btn fab text to="/setting"><v-icon>mdi-cog-outline</v-icon></v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({}),
};
</script>
