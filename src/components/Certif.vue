<template>
    <div class="p-24 font-Poppins">
        <div class="flex flex-col-reverse md:flex-row md:justify-between">
            <div class="flex flex-col md:w-1/3 justify-center items-center md:items-start">
                <div class="text-primary mb-3 font-semibold text-xl text-center mt-5 md:text-left md:text-3xl font-BornSpeed">Des moniteurs de qualité !</div>
                <div class="text-center md:text-left mb-3">Nos formateurs sont là pour vous aider, vous expliquer et vous apprendre au mieux les bases de la conduite. Nos moniteurs ont tous au minimum 10 ans d’expérience dans la conduite. Ne vous en faites pas, vous êtes entre de bonnes mains :)</div>
                <div class="hoverCursor font-Poppins font-bold px-5 py-2 md:w-1/2 bg-primary rounded-full hover:text-secondary text-white flex justify-center items-center"><a>Contacter</a></div>
            </div>
            <div class="md:w-1/2">
                <img src="../assets/bleu.png" class="" alt="">
            </div>
        </div>
        <div class="flex flex-col md:flex-row md:justify-between mt-20">
            <div class="md:w-1/2 flex justify-center">
                <img width="60%" src="../assets/certif_logo.png" class="" alt="">
            </div>
            <div class="flex flex-col md:w-1/3 justify-center items-center md:items-start">
                <div class="text-primary mb-3 font-semibold text-xl text-center mt-5 md:text-left md:text-3xl font-BornSpeed">École conduite qualité !</div>
                <div class="text-center md:text-left mb-3">Notre auto-école BLANCO est certifiée par le label École conduite qualité. Ce certificat est délivré par l’Etat sur analyse de 23 critères sur la qualité des informations et des formations que donne notre auto-école BLANCO !</div>
                <div class="hoverCursor px-5 py-2 md:w-1/2 font-bold bg-primary rounded-full hover:text-secondary text-white flex justify-center items-center"><a>Contacter</a></div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Certif',
}
</script>