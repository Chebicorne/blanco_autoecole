<template>
    <div class="footer font-Poppins bg-primary w-full p-16 text-white">
        <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2">
                <div class="text-xl lg:text-3xl font-bold mb-5">Prêt à nous rejoindre ?</div>
                <div class="">
                    <div class="hoverCursor mt-2">Code de la route</div>
                    <div class="hoverCursor mt-2">Permis de conduire</div>
                    <div class="hoverCursor mt-2">Permis moto</div>
                    <div class="hoverCursor mt-2">Permis accompagnée</div>
                </div>
            </div>
            <div class="md:w-1/2 flex flex-col justify-between">
                <img width="50%" src="../assets/Logo_blanco_blanc.png" alt="Logo Blanco blanc">
                <div class="flex">
                    <div class="hoverCursor">CVC</div>
                    <div class="hoverCursor">Mentions légales</div>
                    <div class="hoverCursor">Politique</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>