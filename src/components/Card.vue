<template>
  <!--component example-->
  <div class="card" :class="{'card--hide': isHide}">
    <div class="introduction">
      <p>use webpack</p>
      <p>with vue2.X</p>
      <p>TemperMonkey UserScript constructor</p>
    </div>

    <div class="card__btn" @click="hide">
      <svg t="1589962875590" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2601"><path d="M730.020653 1018.946715l91.277028-89.978692a16.760351 16.760351 0 0 0 5.114661-11.803064 15.343983 15.343983 0 0 0-5.114661-11.803064l-400.123871-393.435467L821.691117 118.254899a17.075099 17.075099 0 0 0 0-23.606129L730.020653 4.670079a17.232473 17.232473 0 0 0-23.999564 0L202.030255 500.08402a16.445603 16.445603 0 0 0-4.721226 11.803064 15.265296 15.265296 0 0 0 5.114661 11.803064l503.597399 495.413941a17.153786 17.153786 0 0 0 23.999564 0z m0 0" fill="#FFFFFF" p-id="2602"></path></svg>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    data() {
      return {
        isHide: true
      }
    },
    methods: {
      hide() {
        this.isHide = !this.isHide
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    height: 100vh;
    width: 200px;
    background-color: #888888;
    transition: all 1s;
  }
  .introduction {
    font-size: 20px;
    line-height: 40px;
    text-align: center;
  }
  .card__btn {
    transition: all 1s;
    border-radius: 30px 0 0 30px;
    width: 30px;
    height: 60px;
    background-color: red;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    svg {
      height: 20px;
      width: 20px;
      position: absolute;
      right: 5px;
      top: 20px;
      transition: all 1s;
    }
  }
  .card--hide {
    left: -200px;
    .card__btn {
      border-radius: 0 30px 30px 0;
      right: -30px;
      svg {
        transform: rotate(180deg);
      }
    }
  }
</style>
