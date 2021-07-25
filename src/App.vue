<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/shop">Shop</router-link>
    <div class="total__cart">
      <img src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png" alt="cart_icon" />
      <span class="total_counter">{{cart.length}}</span>
    </div>
  </div>
  <router-view />
  <Cart/>
</template>
<script>
import { mapGetters} from "vuex";
import Cart from "./components/products/Cart";
export default {
  components: {Cart},
  computed: {
    ...mapGetters("product", ["cart"]),
  },
}
</script>
<style scoped>
div#nav {
  padding: 15px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
}
a {
  color: #000;
  text-decoration: none;
  font-size: 19px;
  font-weight: 500;
  margin-right: 15px;
}
.total__cart {
  margin-left: auto;
  margin-right: 0;
  position: relative;
  cursor: pointer;
}
.total__cart img{
  width: 25px;
  height: auto;
}
.total_counter {
  position: absolute;
  top: -10px;
  color: #000;
}
</style>