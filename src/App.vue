<template>
  <v-app>
    
      <div class="">
       </div>

    <v-main>
      <br>
    
      <h2 class="title">COMPETENCIAS TIC </h2>
      <h3 class="title2">DIDACTICA Y PEDAGOGIA EMERGENTE</h3>
      <br>
     
      <v-row justify="a">
        
    <v-img  class="my-4" 
      src="../ilustracion/img/Fondo_inicio.png"
      
    >
    </v-img>
   
  </v-row>
<div class="icon">
      <v-btn
              x-large
              color="primary"
              large
              elevation="50"
              fab
            >
              <v-icon color="white">mdi-chevron-right</v-icon>
            </v-btn>
            </div>
            
           
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>

<style>


.title {
  align-items: right;
  align-content: right;
  text-align: center;

}
.title2 {
  align-items: right;
  align-content: right;
  text-align: center;
  

}

.imgdiv {
  align-content: center;
  align-items: center;

 
}


.icon {
    align-content: right;
    align-items: right;
    padding-left: 80%;
    

}
.my-4{
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
min-height: 100vh;
}

</style>