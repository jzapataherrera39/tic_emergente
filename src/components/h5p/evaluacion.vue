<template>
  <v-container>
   <div id="h5p-container3">

   </div>
 
  </v-container>
  
</template>

<script>
import { H5P } from 'h5p-standalone';
export default {  
 data: () => ({
    //
  }),

  mounted(){
    const el = document.getElementById('h5p-container3');
    const options = {
    h5pJsonPath: "/actividades/eva",
    frameJs: "/actividades/frame.bundle.js",
    frameCss: "/actividades/styles/h5p.css",
     };
      new H5P(el, options);
  },

}
</script>