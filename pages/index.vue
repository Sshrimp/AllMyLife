<template>
  <div class="home-page-container">
    <div class="movie-router">
      <NuxtLink to="/movies">电影</NuxtLink>
    </div>
    <div class="decoration-router">
      装修
    </div>
  </div>
</template>

<script lang="js" setup>
</script>

<style lang="scss">
.home-page-container {
  .movie-router {
    background-color: $background-color;
  }
}
</style>