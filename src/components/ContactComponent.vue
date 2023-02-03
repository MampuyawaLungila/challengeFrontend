<template>
    <div>
      <SectionComponent msg="Merci de nous contacter" />
       <FooterComponent />
        
    </div>
</template>

<script>
import SectionComponent from "../components/SectionComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: 'ContactComponent',
  components:{
    SectionComponent,
    FooterComponent
  }
  
}
</script>