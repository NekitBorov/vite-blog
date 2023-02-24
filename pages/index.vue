<template>
  <div class="wrapper">
    <loader />
  </div>
</template>

<script>
import Loader from "@/helpers/loader";
export default {
  components: {
    Loader
  },
  async mounted () {
    await this.$router.push("/login");
  }
};
</script>

<style scoped>

.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
