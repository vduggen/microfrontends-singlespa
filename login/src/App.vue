<template>
  <div class="login">
    <h1 class="link" @click="redirect('/teacher')">Teacher</h1>
    <h1 class="link" @click="redirect('/student')">Student</h1>
  </div>
</template>

<script>
import * as singleSpa from 'single-spa';

export default {
  name: 'App',

  methods: {
    redirect(route) {
      singleSpa.navigateToUrl(route);
    }
  }
}
</script>

<style lang="scss">
.login {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.link {
  cursor: pointer;
  transition: ease-in-out .3s;
  color: #42b983;
}

.link--disabled {
  color: #bebebea3;
  cursor: not-allowed;
}

.link:hover {
  filter: brightness(90%);
}
</style>
