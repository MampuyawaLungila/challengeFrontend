<template>
    <div class="row d-flex justify-content-center align-items-center p-3">
      <div class="col-4">
        <ProductItem
        image="product1.jpg"
        name="product 1"
        category="electronique"
        :price=100
        />
      </div>
      <div class="col-4 ">
        <ProductItem
        image="product1.jpg"
        name="product 1"
        category="electronique"
        :price=100
        />
      </div>
      <div class="col-4 ">
        <ProductItem
        image="product1.jpg"
        name="product 1"
        category="electronique"
        :price=100
        />
      </div>
        
    </div>
    
</template>
<script>
import ProductItem from './ProductItem.vue';


export default {
    name: "ProductComponent",
    components: { ProductItem }
}
</script>

