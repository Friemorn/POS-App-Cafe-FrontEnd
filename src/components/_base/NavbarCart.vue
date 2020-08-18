<template>
  <nav>
    <div class="navbar-cart">
      <span>Cart&nbsp;</span>
      <span class="cart-n" for="n">0</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarCart'
}
</script>

<style scoped>
.navbar-cart {
    width: 100%;
    height: 80px;
    font-size: 25px;
    padding: 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.2);
}

.cart-n {
    height: 30px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    color: white;
    background-color: #57CAD5;
    border-radius: 50%;
}
</style>
