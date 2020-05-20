<template>
  <div>
    <p class="hello">Hello vue and TamperMonkey !</p>
    <card/>
  </div>
</template>

<script>
  import Card from './components/Card.vue'
  export default {
    name: "app",
    components: {
      Card
    }
  }
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .hello {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ff000055;
    padding: 10px;
    z-index: 999;
  }
</style>
