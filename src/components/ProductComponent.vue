<template>
    <div class="row d-flex justify-content-center align-items-center p-3">
      <div class="col-4"
      v-for="prod in produitData"
        :key="prod.id"
      >
      
        <ProductItem
        :image="prod.image"
        :name=prod.title
        :category=prod.category
        :price=100
        />
      </div>
     
      
        
    </div>
    
</template>
<script>
import ProductItem from './ProductItem.vue';


export default {
    name: "ProductComponent",
    components: { ProductItem },

    
  methods: {
   
    produitList: function () {
    this.$store.commit('ListProduit');
    },
    ajoutCart: function (data) {
     this.$store.commit('AjoutCart',{data});
     
    },
    
  },

  computed:{
      produitData(){
        return this.$store.state.produitData;
      }
    },
  created() {
    this.produitList();
  },
}
</script>

