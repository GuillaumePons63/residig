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
    () => `livres-${route.params.name}`,
    () => queryCollection('livres').path(`/livres/${route.params.name}`).first()
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


main {
    flex-direction: column !important;
}

.date-image {
    display: block;
    margin: 30px auto 0 auto;
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #fff;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
    transition: transform 0.3s, box-shadow 0.3s;
    background: #eee;
    cursor: pointer;
}

.date-image:hover {
    transform: scale(1.08) rotate(-2deg);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
    border-color: #b3b3ff;
}
</style>