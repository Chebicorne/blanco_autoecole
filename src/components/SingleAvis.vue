<template>
    <div class="avis bg-primary ml-10 w-full font-Poppins">
        <div class="max-w-sm bg-white p-6 rounded-md tracking-wide shadow-lg">
            <div id="header" class="flex flex-col lg:flex-row items-center mb-4"> 
                <img alt="avatar" class="w-20 rounded-full  " src="https://picsum.photos/seed/picsum/200" />
                <div id="header-text" class="leading-5 ml-6 sm">
                    <h4 id="name" class="text-xl font-semibold">{{ name }}</h4>
                    <h5 id="job" class="font-semibold text-primary">{{ job }}</h5>
                </div>
            </div>
            <div id="quote" class="h-72 md:h-32">
                <q class="italic text-gray-600">{{ desc }}</q>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleAvis',
    data() {
        return {

        }
    },
    props: {
        name: String,
        job: String,
        desc: String,
        src : String,
    }
}
</script>