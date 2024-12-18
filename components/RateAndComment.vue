<template>
  <div>
    <van-rate v-model="rateVale" /> 
    <p class="comment-content">{{ comment }}</p>
  </div>
</template>

<script lang="ts" setup>
  const { rate, comment } = defineProps(['rate', 'comment'])
  const rateVale = toValue(rate)
</script>

<style lang="scss">
.comment-content {
  color: $secondary-text-color;
  flex-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>