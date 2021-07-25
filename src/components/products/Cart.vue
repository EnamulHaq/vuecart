<template>
  <div class="mini__cart" v-if="cart.length">
    <div class="mini__cart-wrap">
      <div class="mini__cart-wrap-single" v-for="cartItem in cart" :key="cartItem.id">
        <div class="mini__cart-img">
          <img :src="cartItem.imageUrl" :alt="cartItem.name">
        </div>
        <div class="mini__cart-contents">
          <h4>{{cartItem.name}}</h4>
          <div class="mini__cart-price-quantity">
            <span>{{ cartItem.count }} x ${{ cartItem.price }}</span>
            <button class="remove__btn" @click.stop="removeCart(cartItem.id)">x</button>
          </div>
        </div>
      </div>
      <div class="mini__cart__footer">
        <div class="total">
          <h3>Total</h3>
          <h3>${{ cart.reduce((a, b) => a + b.price * b.count, 0) }}</h3>
        </div>
        <button class="btn btn-primary">Procced to checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Cart",
  methods: {
    ...mapActions("product", ["removeCart"]),
  },
  computed: {
    ...mapGetters("product", ["cart"]),
  },
}
</script>

<style scoped>
.mini__cart {
  background: #ffffffba;
  box-shadow: 0px 0px 5px #ded1d1;
  border-radius: 10px;
  position: fixed;
  top: 0;
  height: 100vh;
  overflow: hidden;
  width: 100%;
}

.mini__cart .mini__cart-wrap {
  padding: 15px;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  max-width: 385px;
  height: 100vh;
  background: #fff;
}

.mini__cart .mini__cart-wrap-single {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.mini__cart .mini__cart-img {
  width: 150px;
  height: auto;
}

.mini__cart .mini__cart-img img {
  width: 100%;
}

.mini__cart
.mini__cart__footer {border-top: 1px solid #dcdcdc;padding-top: 20px;}

.mini__cart .mini__cart__footer .total {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mini__cart .mini__cart-price-quantity {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mini__cart .mini__cart-price-quantity button.remove__btn {
  outline: none;
  border: none;
  margin-left: 15px;
  background: transparent;
  border: 1px solid #f5f5f5;
  padding: 1px 15px;
  height: auto;
}
</style>