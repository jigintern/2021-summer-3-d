<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <v-container>
      <v-row class="flex-column" align-content="center">
        <v-col cols="1" md="6" v-for="user in users" :key="user">
          <UserProfile
            :userName="user.userName"
            :gameName="user.gameName"
          ></UserProfile>
          <div class="my-5" />
          <v-card dark raised width="800" class="ma-2">
            <v-card-title class="headline">{{user.userName}}</v-card-title>
            <v-card-subtitle>{{user.gameName}}</v-card-subtitle>
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
import UserProfile from '../components/UserProfile.vue'

export default {
  name: "Home",

  data () {
    return {
      users: [
        {
          userName: 'あ',
          gameName: 'Apex'
        },
        {
          userName: 'い',
          gameName: 'Fortnite'
        },
        {
          userName: 'う',
          gameName: 'R6S'
        }
      ]
    }
  },

  components: {
    UserProfile
  },
};
</script>
