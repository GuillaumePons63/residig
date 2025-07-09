<template>
    <main v-if="data">
        <ContentRenderer :value="data" />
    </main>
</template>

<script setup>
const { data } = await useAsyncData(() => queryCollection('content').path('/page/accueil').first())

console.log(data.value)

useSeoMeta({
    title: data.value?.title,
    description: data.value?.description
})

</script>

<style scoped></style>