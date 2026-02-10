<template>
    <main class="container bg-secondary">
        <img :src="data.img" alt="Date" class="date-image" />
        <section class="animate__animated animate__backInUp animate__delay-800ms">
            <ContentRenderer :value="data" />
        </section>
    </main>
</template>

<script setup>

const route = useRoute()
const router = useRouter()

const { data } = await useAsyncData(
    () => `jeux-${route.params.name}`,
    () => queryCollection('jeux').path(`/jeux/${route.params.name}`).first()
)

watchEffect(() => {
    if (!data.value) {
        router.push('/404')
    }
})

useSeoMeta({
    title: () => data.value?.title ?? 'ResIdig',
    description: () => data.value?.description ?? '',
})


</script>

<style>
main {
    width: 90vw !important;
}

section {
    width: fit-content;
}
</style>