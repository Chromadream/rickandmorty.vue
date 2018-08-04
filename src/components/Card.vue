<template>
  <router-link :to="{name:'characterdetail',params:{id:id}}">
    <div class="card">
      <img :src="image">
      <h1>{{title}}</h1>
      <h2>{{description}}</h2>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Card',
  props: ['id', 'image', 'title', 'description'],
};
</script>

<style>
.card {
  border-width:1px;
  border-style: dashed;
  max-width: 300px;
  display: inline-block;
}
</style>
