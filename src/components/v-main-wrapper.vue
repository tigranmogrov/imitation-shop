<template>
  <div class="main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>

export default {
  name: "v-main-wrapper",
  data() {
    return {}
  },
  computed: {},
  methods: {},
  components: {},
}
</script>

<style scoped lang="scss">
.main-wrapper {
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
}
</style>
