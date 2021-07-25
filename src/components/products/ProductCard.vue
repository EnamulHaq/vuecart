<template>
  <div class="card mb-4 shadow-sm">
    <img :src="product.imageUrl" class="card-img-top product-image" />
    <div class="card-body">
      <h5 class="card-title text-left">{{ product.name }}</h5>
      <div class="row">
        <button type="button" @click="showProductDetails(product.id)" class="btn btn-primary btn-lg">View details</button>
      </div>
      <ProductDetails v-if="showModal" @close="showModal = false" :product="singleProductInfo" />
    </div>
  </div>
  <teleport to="body">
    <div v-if="isLoading" class="loading">Loading...</div>
  </teleport>
</template>
<script>
import {ref} from 'vue';
import axios from "axios";
import ProductDetails from "./ProductDetails";
export default {
  name: "ProductCard",
  components: {ProductDetails},
  props: ["product"],
  setup() {
    const showError = ref('')
    const isLoading = ref(false)
    const showModal = ref(false)
    const singleProductInfo = ref()
    const showProductDetails = (productId) => {
      isLoading.value = true
      let url = "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";
      axios.get(url, { params: { id: productId } }).then((response) => {
        singleProductInfo.value = response.data[0]
        isLoading.value = false
        showModal.value = true
      }).catch(function () {
        showError.value = "This product not found"
      });
    }

    return {
      showProductDetails,
      showError,
      showModal,
      isLoading,
      singleProductInfo
    }
  }
};
</script>
<style>
.card .product-image {
  height: 300px;
}
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
.single__product-modal {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  background: #ffffffa6;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.single__product-modal-innerwrap {
  box-shadow: 0 0 16px #000000;
  padding: 30px;
  border-radius: 10px;
  background: #fff;
  width: 90%;
  margin: 0 auto;
  position: relative;
}
.single__product-modal-header {
  position: absolute;
  right: 15px;
}
.single__product-modal-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.single__product-modal-content-left {
  flex-basis: 50%;
  margin-right: 50px;
}
.single__product-modal-content-right {
  flex-basis: 60%;
}
</style>