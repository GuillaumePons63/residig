<template>
    <main v-if="data">
        <ContentRenderer :value="data" />
    </main>
</template>

<script setup>
const { data } = await useAsyncData(() => queryCollection('pages').path('/content/accueil').first())

useSeoMeta({
    title: data.value?.title,
    description: data.value?.description
})

</script>

<style scoped>
.strong {
    font-size: 1.5em;
}


/* Centrage de l'image */
:deep(img) {
    display: block;
    margin: 2rem auto;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
}

:deep(a) {
    text-decoration: none;
    color: inherit;
    padding-top: 0;
}

/* Effet de survol */
:deep(a:hover) {
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