<template>
  <div id="app">
    <ProjectHeader/>

    <project-footer/>
  </div>
</template>

<script>
import ProjectFooter from './components/project-footer.vue'
import ProjectHeader from './components/project-header.vue'

export default {
  name: 'App',
  components: {
    ProjectHeader,
    ProjectFooter
    
  }
}
</script>

<style lang="scss">
  @import './assets/scss/varibles.scss';



  *{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: "IBM Plex Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
