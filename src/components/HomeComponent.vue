<template>
    <div>
       <SectionComponent />
       <FooterComponent />>
    </div>
</template>
<script>
import SectionComponent from './SectionComponent.vue';
import FooterComponent from './FooterComponent.vue';
export default {
  name: 'HomeComponent',
  components:{
    SectionComponent,
    FooterComponent
  }

  
}
</script>

