<template>
    <footer class="footer">
        <nuxt-link to="/pages/mentions-legales" class="footer-link">Mentions légales</nuxt-link>
        <br />
        <nuxt-link to="/pages/partenariat" class="footer-link">Partenariat</nuxt-link>
        <p>&copy; 2025 RESIDIG. Tous droits réservés.</p>
    </footer>
</template>

<style scoped>
.footer-link {
    color: white;
    text-decoration: none;
}

.footer-link:hover {
    text-decoration: underline;
}

.footer {
    text-align: center;
    padding: 0;
    position: relative;
    bottom: 0;
    width: 100%;
}
</style>
