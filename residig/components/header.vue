<template>
    <header class="header">
        <h1>Mon Application</h1>
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
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    background-color: #2c3e50;
    color: #fff;
}

.header h1 {
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
    color: #fff;
    text-decoration: none;
    font-weight: 500;
}

nav a:hover {
    text-decoration: underline;
}
</style>