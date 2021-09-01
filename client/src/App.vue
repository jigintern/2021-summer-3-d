<template>
  <v-app>
    <v-app-bar app color="dark" dark height="100">
      <v-toolbar-title class="text-h4 ml-4"> Service name </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row align-content="center">
        <v-col>
          <div class="my-8" />
          <v-text-field
            label="検索"
            placeholder="検索"
            solo
            :class="`rounded-xl`"
          >
          </v-text-field>
          <!--<v-btn color="dark">検索</v-btn>-->
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/">ホーム画面</v-btn>
        <v-btn text to="/post">投稿</v-btn>
        <v-btn text to="/setting">設定</v-btn>
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

  data: () => ({
    
  }),
};
</script>
