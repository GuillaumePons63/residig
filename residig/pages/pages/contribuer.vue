<template>
    <div class="contribuer">
        <main v-if="data">
            <div>
                <LogoNav :upText="5" :upEnabled="false" :rightText="25" :rightEnabled="false" :downText="65"
                    :downEnabled="false" :leftText="15" :leftEnabled="false" :viewBox="'-180 -150 360 300'" :width="300"
                    :height="300" :centerEnabled="false" />
            </div>
            <ContentRenderer :value="data" />
        </main>
    </div>
</template>



<script setup>


const { data } = await useAsyncData(
    () => queryCollection('pages').path(`/pages/contribuer`).first()
)


useSeoMeta({
    title: () => data.value?.title ?? 'Residig',
    description: () => data.value?.description ?? '',
})
</script>

<style scoped>
main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>
