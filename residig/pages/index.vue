<template>
    <main v-if="data">
        <ContentRenderer :value="data" />
    </main>
</template>

<script setup>
const { data } = await useAsyncData(() => queryCollection('index').path('/accueil').first())

useSeoMeta({
    title: data.value?.title,
    description: data.value?.description
})

</script>

<style scoped>
/* Centrage de l'image */
:deep(img) {
    display: block;
    margin: 2rem auto;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
}

/* Effet de survol */
:deep(img:hover) {
    transform: scale(1.05);
    filter: brightness(0.8);
    box-shadow: none;
}

/* Centrage du lien contenant l'image */
:deep(a) {
    text-align: center;
    display: block;
}
</style>