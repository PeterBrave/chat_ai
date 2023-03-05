<template>
  <div class="card">
    <div class="title">{{ title }}</div>
    <div class="description">{{ description }}</div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.card {
  margin: 8px 4px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border: 2px solid #eee;
  background-color: #fff;
  overflow: hidden;
}

.card .title {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 10px;
}

.card .description {
  padding: 0px 20px 20px 10px;
  color: gray;
}
</style>
