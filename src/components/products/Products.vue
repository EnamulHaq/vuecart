<template>
  <div style="padding: 25px;">
    <div class="container">
      <div class="row" v-if="products">
        <div class="col-md-4" v-for="product in products" :key="product.id" >
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import ProductCard from './ProductCard'
export default {
  name: "Products",
  components: {
    ProductCard
  },
    computed: {
      ...mapGetters("product", ["products"]),
    },
    methods: {
      ...mapActions("product", ["getProducts"]),
    },
    mounted() {
      this.getProducts();
    }
};
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