<template>
    <div class="contribuer">
        <h1>Contribue à ResIdig</h1>
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
    title: () => data.value?.title ?? 'ResIdig',
    description: () => data.value?.description ?? '',
})
</script>

<style>
main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

/* Style pour les liens de la page contribuer */


a {
    color: #fff;
    padding: 10px 22px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    transition: background 0.2s, transform 0.2s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
    display: inline-block;
}

a:hover {
    transform: translateY(-2px) scale(1.03);
}

/* Responsive */
@media (max-width: 768px) {
    main {
        flex-direction: column;
        padding: 1rem;
    }

    .contribuer-links {
        align-items: stretch;
    }
}

@media (max-width: 480px) {
    main {
        padding: 0.5rem;
    }

    .contribuer-links a {
        font-size: 1rem;
        padding: 8px 12px;
    }
}
</style>
