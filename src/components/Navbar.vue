<template>
  <nav class="w-full font-Poppins text-sm fixed z-50 lg:px-16 flex justify-center flex-col lg:flex-row bg-white items-center">
    <div class="lg:w-1/4 p-6">
        <router-link to="/"><LogoBlanco /></router-link>
    </div>
    <div class="lg:hidden absolute top-8 right-5" @click="menu = !menu">
        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
    </div>
    <a class="lg:w-3/4 w-full flex flex-col lg:flex-row items-center lg:justify-evenly relative" v-if="menu">
        <Dropdown class="" title="Le code de la route" :items="codeRoute" />
        <Dropdown class="" title="Le permis voiture" :items="permisVoiture" />
        <Dropdown class="" title="Les permis 2 roues" :items="permis2Roues" />
        <Dropdown class="" title="Outils" link="outils" :items="outils" />
        <div class=""><div class="hoverCursor bg-primary rounded-full text-white font-semibold px-5 py-2">Contacter l'auto-école</div></div>
    </a>
    
  </nav>
</template>

<script>
import Dropdown from './Dropdown';
import LogoBlanco from './LogoBlanco';
export default {
  name: 'navbar',
  components: {
    Dropdown,
    LogoBlanco
  },
  data () {
    return {
        menu: true,
        codeRoute: [
            {
            title: 'Apprendre le code',
            subtitle: 'Apprenez le code de la route et les thématiques de l’examen facilement ',
            link: '/code',
            src: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>',
            },
            {
            title: 'Activation / Ré-activation',
            subtitle: 'Nos solutions sur mesure pour réactiver votre code de la route ',
            link: '/reactivation',
            src: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>'
            }
        ],
        permisVoiture: [
            {
            title: 'Boite manuelle',
            subtitle: 'Nos formules pour l’apprentissage du permis B boite manuelle ',
            link: '/voiture-manuelle',
            src: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>'
            },
            {
            title: 'Boite automatique',
            subtitle: 'Nos formules pour l’apprentissage du permis B boite automatique',
            link:'#',
            src: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>'
            },
            {
            title: 'Conduite accompagnée',
            subtitle: 'Optez pour la conduite accompagné à partir de 15 ans ',
            link: '#',
            src: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>'
            }
        ],
        permis2Roues: [
            {
            title: 'Permis moto',
            subtitle: 'Votre code a été désactivé ? Retrouvez nos solutions sur mesures pour le réactiver.',
            link: '#',
            src: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>'
            },
            {
            title: 'Equivalence 125cm3',
            subtitle: 'L’obtention de votre permis 125 cm³ se passe dans cette page',
            link:'#',
            src: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>'
            },
            {
            title: 'Permis AM / Scooter',
            subtitle: 'Anciennement BSR, ce permis vous servira à l’utilisation d’un scooter',
            link: '#',
            src: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>'
            },
            {
            title: 'Formation A2 vers A',
            subtitle: 'Vous voulez passer du permis A2 au permis A ? C’est ici !',
            link: '#',
            src: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>'
            }
        ],
        outils: [
            {
            title: 'Annulation de permis',
            subtitle: 'Si votre permis a été annulé, venez le réactiver !',
            link: '#',
            src: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>'
            },
            {
            title: 'Vérification de permis',
            subtitle: 'Vous préparez votre examen du permis, révisez les notions importantes ici',
            link:'#',
            src: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>'
            },
            {
            title: 'Résultats permis de conduire',
            subtitle: 'Vous avez passer l’examen du permis récemment, vérifiez vos résultats',
            link: '#',
            src: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>'
            },
            {
            title: 'Recevoir son permis de conduire',
            subtitle: 'Favorable à l’examen du permis ? Suivez les démarches pour le recevoir !',
            link: '#',
            src: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>'
            }
        ],
        about: [
            {
            title: 'Nos auto-écoles labelisées',
            subtitle: 'Votre code a été désactivé ? Retrouvez nos solutions sur mesures pour le réactiver.',
            link: '#',
            src: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>'
            },
            {
            title: 'Protocoles COVID',
            subtitle: 'Votre code a été désactivé ? Retrouvez nos solutions sur mesures pour le réactiver.',
            link:'#',
            src: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>'
            }
        ],

    }
  }
}
</script>

<style>
</style>