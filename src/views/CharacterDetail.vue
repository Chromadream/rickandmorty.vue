<template>
  <div class="details">
    <router-link to="/cardlist">Back to character list</router-link>
    <api-request :resource="request" v-model="response">
      <character-detail-text
        v-if="response"
        v-bind:result="response.body"
      />
    </api-request>
  </div>
</template>

<script>
import CharacterDetailText from '@/components/CharacterDetailText.vue';

export default {
  data() {
    return {
      response: null,
    };
  },
  components: {
    CharacterDetailText,
  },
  methods: {
    request() {
      const id = this.$route.params.id;
      const url = 'https://rickandmortyapi.com/api/character/'+id;
      console.log(id);
      return this.$http.get(url);
    },
  },
};
</script>

<style>

</style>
