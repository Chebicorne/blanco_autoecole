<template>
    <div class="relative font-Poppins">
        <div id="svgContainer" class=""></div>
        <!-- <img class="land top-0 left-0 bg-white" src="../assets/Animation.svg" alt=""> -->
        <div class="landingText p-12 md:p-0 md:absolute text-center md:text-left md:left-20">
            <h1 class="text-2xl lg:text-4xl text-primary font-BornSpeed md:w-1/2">Une auto-école historique dans l’Hérault</h1>
            <p class="mt-6 md:mt-0 w-full text-sm lg:text-lg md:w-1/2">Avec l'auto-école BLANCO, votre formation au code de la route et à la conduite n’a jamais été aussi simple. Profitez de nos tarifs avantageux et rejoignez-nous dans une de nos 4 agences dans l’Hérault !</p>
        </div>
    </div>
</template>
<script>
import lottie from "lottie-web"
import bodyjson from '@/assets/animation-fond.json';

  export default {
    name: 'Landing',
    created() {

        setTimeout(function() {
            this.anim = lottie.loadAnimation(
                {
                    name: "animhehe",
                    container: document.getElementById("svgContainer"),
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    animationData: bodyjson,
                }
            );
        }.bind(this), 200);
       
    },
  }
</script>

<style scoped>
@media (min-width: 768px) { 
    .landingText {
        top: 30vh;
    }
 }
@media (min-width: 1024px) { 
    .landingText {
        top: 44vh;
    }
 }

</style>