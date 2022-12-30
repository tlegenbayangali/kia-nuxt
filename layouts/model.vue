<template>
  <div>
    <Loader/>
    <div id="page" class="main-section">
      <Header/>
      <SubHeader/>
      <Nuxt/>
      <Footer/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
  mounted() {
  },
  head() {
    return {
      title: 'Kia - Главная страница',
    }
  },
}
</script>
