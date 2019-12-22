<template>
  <div class="Header">
    <h3 class="HeaderTitle">Qoala Test</h3>
    <div>
      <button
        class="HeaderBtn"
        v-bind:class="{ Active: activeContent === 'color' }"
        v-on:click="onClickSort('color')"
      >
        Color
      </button>
      <button
        class="HeaderBtn"
        v-bind:class="{ Active: activeContent === 'cities' }"
        v-on:click="onClickSort('cities')"
      >
        Cities
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    activeContent: {
      type: String,
      required: true
    },
    onClickSort: {
      type: Function,
      required: true
    }
  }
};
</script>

<style>
.Header {
  z-index: 100;
  position: fixed;
  top: 0;
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5em 0.5em;
}

.HeaderTitle {
  margin: 0;
}

.HeaderBtn {
  padding: 0.5em 1em;
  border-radius: 4px;
  border: 0;
  font-size: 1em;
  background-color: #0078e7;
  color: #fff;
}

.HeaderBtn.Active {
  background-color: #42b8dd;
}

.HeaderBtn:not(:last-of-type) {
  margin-right: 0.5em;
}
</style>
