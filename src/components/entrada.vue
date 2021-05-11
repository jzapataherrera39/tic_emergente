<template>
  <v-app>
 
      <v-tabs 
          right icons-and-text 
          slider-color="light-blue" 
          slider-size="3"
          fixed-tabs
          hide-slider
          >

          <v-tab :to="{ name: 'contenido' }" class="text-decoration-none mx-auto px-1 tabs_box">Contenido
            <v-icon  x-large class="mb-5"></v-icon>
          </v-tab>

          <v-tab :to="{ name: 'actividades' }" class="text-decoration-none mx-auto px-1 tabs_box">Actividades
            <v-icon x-large class="mb-5">fas fa-list-ol</v-icon>
          </v-tab>

          <v-tab :to="{ name: 'evaluacion' }" class="text-decoration-none mx-auto px-1 tabs_box">Evaluación
            <v-icon x-large class="mb-5">fas fa-clipboard-check</v-icon>
          </v-tab>
        </v-tabs>
           <div class="img">
            <v-img
          src="../assets/Ilustraciones/02.png"
          >
          </v-img>
           </div>


  </v-app>
</template>

<script>


export default {
  name: 'entrada', 
  components: {
    
  },

  data: () => {
  
    return {
          
    
    };
  }
};
</script>

<style>

#app {
  background: url('../assets/Background/fondo_inicio2.png') no-repeat center center fixed !important;
  background-size: cover;
  
}

.title {
color:  white;
text-align: right;
position: relative;
  bottom: -200px;
   right: 200px;


}

.subtitle {
  color:  white;
text-align: right;
position: relative;
  bottom: -220px;
   right: 170px;
   font-size: 35px;
  

}

body{
  margin: 0; 
  padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.img {
    align-content: right;
    align-items: right;
    padding-left: 50%;
    position: relative;
  bottom: 90px;
   right: 300px;
  
}
    

</style>
