<template>
  <v-app>
    
      <div class="">
       </div>

    <v-main>
      <br>
    
      <h2 class="title">COMPETENCIAS TIC </h2>
      <h3 class="title2">DIDACTICA Y PEDAGOGIA EMERGENTE</h3>
      <br>
     
     
        
   
   
  
<div class="icon">
      <v-btn
              x-large
              color="primary"
              large
              elevation="15"
              fab
            >
              <v-icon color="white">mdi-chevron-right</v-icon>
            </v-btn>
            </div>
         
           <div :style="image"></div>
            
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App', 
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
  background: url('../ilustracion/img/Fondo_inicio.png') no-repeat center center fixed !important;
  background-size: cover;
  z-index:-1;
}

.title {
  align-items: right;
  align-content: right;
  color: white;
  text-align: center;

}
.title2 {
  align-items: right;
  align-content: right;
  color:  white;
  text-align: center;
  

}

body{
  margin: 0; 
  padding: 0;
}

.imgdiv {
  align-content: center;
  align-items: center;

 
}

.icon {
    align-content: right;
    align-items: right;
    padding-left: 85%;
    

}
    

</style>
