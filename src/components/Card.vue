<template>
  <div class="Card" v-bind:class="getBackgroundColor(user.age)">
    <div class="CardContainer">
      <img class="CardImage" v-bind:src="user.picture" />
      <div class="CardName">
        <h3>{{ user.title }} {{ user.first }} {{ user.last }}</h3>
        <label>{{ user.age }}</label>
      </div>
      <p class="CardEmail">{{ user.email }}</p>
      <p class="CardAddress">
        {{ `${user.city}, ${user.state}, ${user.postcode}` }}
      </p>
      <p class="CardRegisteredDate">
        {{ getFormattedDate(user.registeredDate) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    getBackgroundColor(age) {
      if (age < 21) {
        return "CardRed";
      }
      if (age < 56) {
        return "CardGreen";
      }
      return "CardBlue";
    },
    getFormattedDate(registeredDate) {
      const date = new Date(registeredDate);

      return `0${date.getDate()}`.slice(-2) + '/' +
        `0${date.getMonth() + 1}`.slice(-2) + '/' + date.getFullYear() + ' ' +
        `0${date.getHours()}`.slice(-2) + ':' + `0${date.getMinutes()}`.slice(-2) + ':' + `0${date.getSeconds()}`.slice(-2);
    }
  }
};
</script>

<style>
.Card {
  margin: 0.5em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
}

.Card.CardRed {
  background-color: #ff4136;
}

.Card.CardGreen {
  background-color: #01ff70;
}

.Card.CardBlue {
  background-color: #7fdbff;
}

.CardContainer {
  width: 350px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  position: relative;
}

.CardImage {
  display: block;
  margin: 0 auto;
  width: 150px;
}

.CardName > h3 {
  margin-bottom: .25em;
}

.CardAddress {
  margin: .75em 0;
}

.CardEmail {
  word-break: break-word;
  order: 99;
  margin-top: .5em;
}

.CardRegisteredDate {
  margin: 0;
  font-size: .75em;
  order: 100;
  text-align: right;
}

@media screen and (max-width: 768px) {
  .Card {
    height: calc(100% - 1em);
  }

  .CardContainer {
    display: block;
    width: 100%;
  }

  .CardName > h3 {
    margin-top: 0;
  }

  .CardImage {
    float: left;
    margin-right: .5em;
    width: 100px;
  }

  .CardAddress {
    clear: both;
    padding: .5em 0;
    margin: 0;
  }

  .CardEmail {
    margin-bottom: 0;
  }
}
</style>
