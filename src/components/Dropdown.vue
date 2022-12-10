<template>
  <div class="flex flex-col lg:flex-row lg:items-center p-2 lg:p-6" @click="isOpen = !isOpen" @mouseleave="isOpen = false" @mouseenter="isOpen = true">
    <div class="hoverCursor mx-auto font-semibold flex-nowrap flex items-center">
      {{ title }}
      <svg class="w-4 h-4 text-primary ml-2 lg:block hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </div>
    <svg viewBox="0 0 1030 638" width="10">
      <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
    </svg>
    <transition name="fade" appear>
      <div class="lg:absolute flex lg:w-auto w-full flex-col lg:top-16 bg-white max-w-lg p-1 lg:p-4 rounded-b-lg" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="lg:mb-4">
            <router-link :to="item.link" class="hoverCursor flex flex-row items-center hover:bg-gray-200 p-4 rounded-lg">
                <div class="mr-4">
                    <div class="text-white bg-primary rounded-lg p-1" v-html="item.src"></div>
                </div>
                <div class="">
                    <div class="text-primary font-bold">{{ item.title }}</div>
                    <div class="text-gray-500 italic">{{ item.subtitle }}</div>
                </div>
            </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  props: ['title', 'items', 'link'],
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style>

</style>