<template>
  <PageLayout>
    <template slot="header">
      <Header></Header>
    </template>
    <template slot="navigate">
      <SideMenu></SideMenu>
    </template>
    <router-view/>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/PageLayout'
import SideMenu from '@/components/SideMenu'
import Header from '@/components/Header'
export default {
  components: {
    PageLayout,
    SideMenu,
    Header
  },
  async mounted() {
    await this.$store.dispatch('login/checkLoginStatus')
    this.$router.push('/login')
  }
}
</script>
