<template>
  <div id="app" class="">
    <Navbar />
    <router-view></router-view>
    <Footer />
    
  </div>
</template>


<script>
import Navbar from '@/components/Navbar';

import Footer from '@/components/Footer';

export default {
  name: 'app',
  
  components: {
    Navbar,
    Footer
},

}
</script>

<style>
@font-face {
  font-family: "BornSpeed";
  src: local('BornSpeed'),
  url(assets/fonts/Bornspeed-Regular.ttf) format('truetype');
}
@font-face {
  font-family: "Poppins";
  src: local('Poppins'),
  url(assets/fonts/Poppins-Regular.ttf) format('truetype');
}
@font-face {
  font-family: "Poppins Bold";
  src: local('Poppins Bold'),
  url(assets/fonts/Poppins-Bold.ttf) format('truetype');
}

html {
  cursor: url('./assets/classic_cursor.png'), auto;
}

.hoverCursor{
  cursor: url('./assets/hover_cursor.png'), auto;
}

</style>