<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="This is a test page, actual card list link below"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
