<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">

    <h1 style="color:white; font-family:roboto;">User_List</h1>
    <v-divider style="background-color:#8A8989;"></v-divider>
    <v-container style="color:#000000">
      <v-row class="flex-column" align-content="center">
        <v-col cols="1" md="6" v-for="user in users" :key="user">
          <UserProfile
            :userName="user.userName"
            :gameName="user.gameName"
          ></UserProfile>
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
          userName: 'やまゆ',
          gameName: 'Apex'
        },
        {
          userName: 'いつき',
          gameName: 'Fortnite'
        },
        {
          userName: 'マーシー',
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