<template>
  <div id="app">
    <app-header
      v-bind:active-content="activeContent"
      :on-click-sort="setActiveContent"
    />
    <card-list
      v-bind:user-list="sortedUserList"
      :do-pagination="doPagination"
    />
  </div>
</template>

<script>
import AppHeader from "./components/Header.vue";
import CardList from "./components/CardList.vue";

import ApiService from "./services";

export default {
  name: "app",
  components: {
    AppHeader,
    CardList
  },
  data() {
    return {
      activeContent: "",
      userList: []
    };
  },
  computed: {
    sortedUserList: function() {
      const copiedUserList = [...this.userList];

      if (this.activeContent === "color") {
        return copiedUserList.sort((user1, user2) => {
          const user1AgeRank = this.getAgeRank(user1.age);
          const user2AgeRank = this.getAgeRank(user2.age);

          if (user1AgeRank === user2AgeRank) {
            return user1.age - user2.age;
          }
          return user1AgeRank - user2AgeRank;
        });
      } else if (this.activeContent === "cities") {
        return copiedUserList.sort((user1, user2) =>
          ("" + user1.city).localeCompare(user2.city)
        );
      }

      return copiedUserList;
    }
  },
  methods: {
    setActiveContent(activeContent) {
      this.activeContent = activeContent;
    },
    doPagination() {
      if (this.userList.length < 100) {
        ApiService.getUserList().then(userList => {
          this.userList = [
            ...this.userList,
            ...userList.map(user => ({
              age: user.dob.age,
              picture: user.picture.large,
              title: user.name.title,
              first: user.name.first,
              last: user.name.last,
              email: user.email,
              city: user.location.city,
              state: user.location.state,
              postcode: user.location.postcode,
              registeredDate: user.registered.date,
            }))
          ];
          localStorage.setItem("userList", JSON.stringify(this.userList));
        });
      }
    },
    getAgeRank(age) {
      if (age < 21) {
        return 3;
      }
      if (age < 56) {
        return 1;
      }
      return 2;
    }
  },
  mounted() {
    const cachedUserList = localStorage.getItem("userList");
    if (cachedUserList) {
      this.userList = JSON.parse(cachedUserList);
    } else {
      this.doPagination();
    }
  }
};
</script>

<style>
@import "~normalize.css";

html,
body {
  margin: 0;
  padding: 0;
}

button {
  outline: none;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
