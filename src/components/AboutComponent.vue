<template>
    <div>
      <SectionComponent msg="A propos de nous" />
       <FooterComponent />
    </div>
</template>

<script>
import SectionComponent from "../components/SectionComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  //name: 'AboutComponent',
  components:{
    SectionComponent,
    FooterComponent
  }
 
}
</script>

