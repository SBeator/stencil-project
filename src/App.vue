<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import PageLayout from './components/PageLayout'
import SideMenu from './components/SideMenu'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    PageLayout,
    SideMenu,
    Header
  }
}
</script>
