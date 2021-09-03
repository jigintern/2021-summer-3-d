<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <!-- <sidebar></sidebar> -->
    <v-container>
      <h1 style="color:white; font-family:roboto;">User_List</h1>
      <v-divider style="background-color:#8A8989;"></v-divider>
    </v-container>
    <v-container>
      <v-row class="flex-column" align-content="center">
        <v-col cols="1" md="6" v-for="user in users" :key="user">
          <UserProfile
            :id="user.id"
            :userName="user.userName"
            :gameName="user.gameName"
            :userComment="user.profile"
          ></UserProfile>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import axios from "axios";
// import sidebar from '../components/sidebar.vue';
export default {
  name: "Home",
  components: {
    UserProfile,
    // sidebar
  },
  data () {
    return {
      articlesList: [],
      articleObject: {},
      testObject: {},
      users: [
        /*
        {
          userName: 'やまゆ',
          gameName: 'Apex',
          userComment:"aiueoevef"
        },
        {
          userName: 'いつき',
          gameName: 'Fortnite',
          userComment:"aveefewrwetgege"
        },
        {
          userName: 'マーシー',
          gameName: 'R6S',
          userComment:"vaerrgiikejkjek"
        }
        */
      ]
    }
  },
  mounted () {
    axios
      .get('https://3d.intern.jigd.info/api/articles')
      .then(response => {
        this.articleObject = response.data.data;

        for (let i = 0; i < this.articleObject.length; i++) {
          this.users.push(this.articleObject[i]);
        }

        this.testObject = response.data.data[0];
        console.log(this.testObject);
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
};
</script>