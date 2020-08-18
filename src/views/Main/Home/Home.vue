<template>
  <div class="contain">
    <router-view/>
    <ModalAdd v-show= "showModalAdd" @cancel-modal = "AddOff"/>
    <ModalCheckout v-show= "showModalCheckout" @cancel-modal = "CheckoutOff"/>
    <div class="main">
      <div class="main-header">
        <NavbarHome/>
        <SideBar @launch-modaladd = "AddOn"/>
      </div>
      <div class="main-content">
        <!-- <Card/> -->
        <div class="card-product" v-for="item in products" :key="item.id">
          <Card :image="item.image" :name="item.name" :price="item.price" :id="item.id"/>
        </div>
      </div>
    </div>
    <div class="cart">
      <div class="cart-header">
        <NavbarCart/>
      </div>
      <div class="cart-content">
        <div v-if="empty">
          <div class="cart-null">
            <img src="../../../assets/img/food-and-restaurant.png" alt="food-cart">
            <br>
            <div class="cart-empty">Your cart is empty</div>
            <div class="cart-add">Please add some items from the menu</div>
          </div>
        </div>
        <div v-else>
          <div class="cart-value">
            <div class="cart-list" v-for="item in products" :key="item.id">
              <CartList :image="item.image" :name="item.name" :price="item.price"/>
            </div>
          </div>
          <div class="cart-total">
            <CartTotal @launch-modalcheckout = "CheckoutOn"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarHome from '../../../components/_base/NavbarHome'
import NavbarCart from '../../../components/_base/NavbarCart'
import SideBar from '../../../components/_base/SideBar'
import Card from '../../../components/_base/Card'
import ModalAdd from '../../../components/_base/ModalAdd'
import ModalCheckout from '../../../components/_base/ModalCheckout'
import CartList from '../../../components/_base/CartList'
import CartTotal from '../../../components/_base/CartTotal'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    NavbarHome,
    NavbarCart,
    SideBar,
    Card,
    ModalAdd,
    ModalCheckout,
    CartList,
    CartTotal
  },
  data () {
    return {
      products: [],
      showModalAdd: false,
      showModalCheckout: false,
      empty: true
    }
  },
  methods: {
    getData () {
      axios.get('http://localhost:4000/api/v1/product?page=1&limit=12')
        .then((res) => {
          this.products = res.data.result
        })
    },
    AddOn () {
      this.showModalAdd = true
    },
    AddOff () {
      this.showModalAdd = false
    },
    CheckoutOn () {
      this.showModalCheckout = true
    },
    CheckoutOff () {
      this.showModalCheckout = false
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>
/* Home Container */
.contain {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: Arial, Verdana, sans-serif;
  font-size: 20px;
  background-color: rgba(190, 195, 202, 0.3)
}
/* Main */
.main {
    flex: 2;
}
.content {
  display: flex;
  flex-direction: row;
  width: 30px;
}
.main-content {
  height: 810px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: auto;
  margin: 0 20px 0 150px;
  padding-top: 10px;
}
/* Cart */
.cart {
    flex: 1;
    background-color: white;
    border-left: 1px solid rgba(141, 141, 141, 0.3);
    box-shadow: 0px -2px 7px rgba(0, 0, 0, 0.1);
}
.cart-content {
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.cart-null {
  flex: 1;
  height: 200px;
  padding-top: 30px;
  margin: 30px 20px 30px 20px;
  text-align: center;
}
.cart-value {
  width: 400px;
  height: 500px;
  margin-bottom: 30px;
  overflow: auto;
}
.cart-total {
  flex: 1;
  height: 250px;
}
.cart-empty {
    color: black;
    font-weight: 650;
}
.cart-add {
    color: #cecece;
    font-weight: 500;
}
</style>
