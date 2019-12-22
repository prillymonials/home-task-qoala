<template>
  <div class="CardList" v-on:scroll="handleScroll">
    <card
      v-for="(user, index) in userList"
      v-bind:key="`user-${index}`"
      v-bind:user="user"
    />
  </div>
</template>

<script>
import Card from "./Card.vue";
import throttle from "lodash.throttle";
import getWidthAndHeight from "../utils/getWidthAndHeight";

export default {
  name: "CardList",
  components: {
    Card
  },
  props: {
    userList: {
      type: Array,
      required: true
    },
    doPagination: {
      type: Function,
      required: true
    }
  },
  methods: {
    /**
     * When user scroll the container, must do the pagination when need 20px
     * from below or right
     */
    handleScroll: throttle(function(e) {
      const { width } = getWidthAndHeight();
      let scrollPosition = 0,
        scrollWidth = 999;

      if (width <= 768) {
        scrollPosition = e.target.scrollTop;
        scrollWidth = e.target.scrollHeight - e.target.offsetHeight;
      } else {
        scrollPosition = e.target.scrollLeft;
        scrollWidth = e.target.scrollWidth - e.target.offsetWidth;
      }

      if (scrollWidth - scrollPosition <= 20) {
        this.doPagination();
      }
    }, 500)
  }
};
</script>

<style>
.CardList {
  max-width: 100%;
  overflow: auto;
  display: flex;
  align-items: flex-start;
  padding-top: 3.5em;
  padding-bottom: 1em;
}

@media screen and (min-width: 767px) {
  .CardList::after {
    content: "";
    min-width: 1px;
    min-height: 1px;
  }
}

@media screen and (max-width: 768px) {
  .CardList {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 1fr;
    max-height: 100vh;
  }
}
</style>
