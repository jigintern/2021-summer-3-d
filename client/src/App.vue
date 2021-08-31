<template>
  <v-app>
    <v-app-bar
      app
      color="dark"
      dark
      height=100
    >
      <v-toolbar-title class="text-h4 ml-4">
        Service name
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/post">設定</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-card
      elevation="2"
    ></v-card>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
