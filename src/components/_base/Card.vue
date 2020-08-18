<template>
  <div class="card-product">
    <div class="card-image">
      <img id="img-product" :src="image" alt="img-product" />
    </div>
    <div class="card-box">
      <div class="card-name">{{name}}</div>
      <div class="card-price">{{price}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['name', 'image', 'price', 'id']
}
</script>

<style scoped>
.card-product {
  margin: 10px;
  height: 247px;
  width: 250px;
  display: flex;
  flex-direction: column;
  position: relative;
}
.card-box{
  font-weight: 500;
}
.card-image, #img-product {
    height: 200px;
    width: 250px;
    background-size: cover;
}
.card-price {
  font-weight: 600;
}
</style>
