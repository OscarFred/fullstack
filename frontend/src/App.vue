<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
      <li :key="joke.punchline" v-for="joke in jokes">
        {{ joke.setup }}
        {{ joke.punchline }}
        </li>
    </ul>
    {{dataFromBackend}}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      jokes: null
    };
  },
  components: {
    HelloWorld
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch("http://localhost:3000/")
        .then(response => response.json())
        .then(result => {
          console.log(result);
          this.jokes = result;
        })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
