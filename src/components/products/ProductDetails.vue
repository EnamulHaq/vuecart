<template>
  <teleport to="body">
    <div class="single__product-modal" v-if="product">
      <div class="single__product-modal-innerwrap">
        <div class="alert alert-primary" role="alert">
          {{ product.name }} This product added to your cart
        </div>
        <div class="single__product-modal-header"><button @click="$emit('close')" >Close</button></div>
        <div class="single__product-modal-content">
          <div class="single__product-modal-content-left">
            <img :src="product.imageUrl" class="card-img-top product-image" :alt="product.name"/>
          </div>
          <div class="single__product-modal-content-right">
            <h3>{{product.name}}</h3>
            <h5 class="price"><b>${{product.price}}</b></h5>
            <p>{{product.content}}</p>
            <button type="button" @click.stop="addCart({product})">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "ProductDetails",
  props: ["product"],
  emits: ['close'],
  methods: {
    ...mapActions("product", ["addCart"]),
  }
}
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  height: 100%;
  transition: 1s;
  width: 100%;
  background: #000;
  bottom: 0;
  height: 100vh;
  display: flex;
  overflow: hidden;
  color: #fff;
  font-size: 15px;
  align-items: center;
  justify-content: center;
}
</style>