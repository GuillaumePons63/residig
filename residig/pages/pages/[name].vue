<template>
    <main class="container bg-secondary">
        <section class="animate__animated animate__backInUp animate__delay-800ms">
            <ContentRenderer :value="data" />
        </section>
    </main>
</template>

<script setup>

const route = useRoute()
const router = useRouter()

const { data } = await useAsyncData(
    () => `page-${route.params.name}`,
    () => queryCollection('pages').path(`/pages/${route.params.name}`).first()
)

watchEffect(() => {
    if (!data.value) {
        router.push('/404')
    }
})

useSeoMeta({
    title: () => data.value?.title ?? 'Residig',
    description: () => data.value?.description ?? '',
})


</script>

<style scoped>
section {
    padding: 20px;
    margin: 0 auto;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>