<template>
  <div id="app">
    <h1>Student</h1>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <router-view/>

    <h2 class="link" @click="redirect">Login</h2>
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      window.history.pushState(null, null, '/')
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

span {
  color: #42b983;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
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
