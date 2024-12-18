<template>
  <div>
    <div class="rate-container rate-hai-container">
      <svg-icon name="hai" class="rate-icon" />
      <van-rate v-if="haiRate !== null" v-model="haiRateVale" color="#E50914"/> 
    </div>
  </div>
    <div class="rate-container rate-hai-container">
      <svg-icon name="qian" class="rate-icon" />
      <van-rate v-if="qianRateVale !== null" v-model="qianRateVale" color="#E50914" /> 
    </div>
</template>

<script lang="ts" setup>
  const { qianRate, haiRate } = defineProps(['qianRate', 'haiRate'])
  const qianRateVale = toValue(qianRate)
  const haiRateVale = toValue(haiRate)


</script>

<style>
.rate-container {
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
}
.rate-icon {
    font-size: 20px;
    width: 20px;
    height: 20px;
    margin-right: 5px;
}
</style>