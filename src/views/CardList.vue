<template>
<div class="container">
  <api-request :resource="request" v-model="response">
    <div v-if="response">
      <Card
        v-for="char in response.body.results"
        v-bind:id="char.id"
        v-bind:key="char.id"
        v-bind:image="char.image"
        v-bind:title="char.name"
        v-bind:description="char.species"
      />
    </div>
  </api-request>
</div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  data() {
    return {
      response: null,
    };
  },
  components: {
    Card,
  },
  methods: {
    request() {
      return this.$http.get('https://rickandmortyapi.com/api/character/?gender=female');
    },
  },
};
</script>

<style>
.container{
  display: inline;
}
</style>
