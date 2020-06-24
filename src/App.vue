<template>
  <div id="app">
    <el-header>
      <HeaderMain />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>
      <FooterMain />
    </el-footer>
  </div>
</template>

<script>
import FooterMain from "./components/FooterMain";
import Header from "./components/Header";
export default {
  components: {
    FooterMain: FooterMain,
    HeaderMain: Header
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
