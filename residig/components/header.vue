<template>
    <header>
        <div class="header-content">
            <div class="header-text">
                <NuxtLink to="/">
                    <h2>Qui es-tu ?</h2>
                </NuxtLink>


            </div>
            <div class="header-logo">
                <LogoNav />
            </div>
        </div>

        <div>
            <h2>ResIdig</h2>
            <em class="header-subtitle">Jeu Sérieux en Ligne et en Réel</em>

        </div>
    </header>
</template>

<script setup>



</script>

<style scoped>
h2 {
    color: var(--main-color);
}


.header-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;

    border-radius: 8px;
    background-image: url('/asset/backgroundHeader.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin: 0;
    min-height: 240px;
    width: 100%;

}

.header-text {
    margin: 0;
    font-size: 1.2rem;
    padding: 20px 20px;
}

.header-logo img {
    width: 150px;
    height: auto;

}


header {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    background-position: center;

}

header h1 {
    margin: 0;
    font-size: 2rem;
    /* background-color: rgba(5, 22, 86, 0.9); */
}


nav ul {
    list-style: none;
    display: flex;
    gap: 16px;
    margin: 0;
    padding: 0;
}

nav a {
    text-decoration: none;
    font-weight: 500;
    color: white;
}

nav a:hover {
    text-decoration: underline;
}

em {
    font-size: 1.3em;
    font-weight: bold;

}

@media screen and (max-width: 800px) {
    .header-content {
        align-items: center;
        padding: 0px;
        flex-direction: column;
        text-align: center;

    }

    .header-logo {
        margin-top: 20px;
    }



    nav ul {
        flex-direction: column;
        align-items: center;

    }

}
</style>