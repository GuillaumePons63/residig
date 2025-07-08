<template>
    <header>
        <div class="header-content">
            <div class="header-text">
                <h1>Residig</h1>
                <p>Jeu sérieux en ligne et en réel</p>
            </div>
            <div class="header-logo">
                <img src="~/assets/img/logo.svg" alt="Logo Residig" />
            </div>
        </div>


        <nav>
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">À propos</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
// Pas de logique spécifique pour ce header simple
</script>

<style scoped>
.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 16px 24px;
    border-radius: 8px;
    background-image: url('~/assets/img/backgroundHeader.png');
    background-size: cover;
    margin: 0;
    min-height: 240px;
    width: 100vw;
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
    font-size: 1.5rem;
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
</style>