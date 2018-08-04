<template>
  <div class="Detail Text">
    <img :src="result.image">
    <h1>Name: {{result.name}}</h1>
    <h2>Status: {{result.status}}</h2>
    <h2>Species: {{result.species}}</h2>
    <h2>Gender: {{result.gender}}</h2>
    <h2>Origin: {{result.origin.name}}</h2>
    <h2 v-if="result.type">Type: {{result.type}}</h2>
  </div>
</template>

<script>
export default {
  name: 'CharacterDetailText',
  props: ['result'],
};
</script>

<style>

</style>
