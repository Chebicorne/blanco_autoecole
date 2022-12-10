<template>
  <div class="">
    <Landing />
    <Cta />
    <Certif />
    <Avis />
    <About />
    <Map />
  </div>
</template>

<script>
import Landing from '@/components/Landing';
import Cta from '@/components/Cta';
import Certif from '@/components/Certif';
import Avis from '@/components/Avis';
import About from '@/components/About';
import Map from '@/components/Map';
export default {
  name: 'Home',
  components: {
    Landing,
    Cta,
    Certif,
    Avis,
    About,
    Map
  }
}
</script>

<style>

</style>