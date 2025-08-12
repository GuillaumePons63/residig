<template>
    <svg xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox" :width="width" :height="height">

        <!-- Cercle -->
        <circle cx="0" cy="0" r="100" stroke="#00e676" stroke-width="8" fill="none" />
        <!-- Croix -->
        <line x1="-100" y1="0" x2="100" y2="0" stroke="#00e676" stroke-width="8" />
        <line x1="0" y1="-100" x2="0" y2="100" stroke="#00e676" stroke-width="8" />

        <!-- Flèche haut -->
        <NuxtLink :to="upLink">
            <g id="arrow-up" fill="#00e676">
                <text x="0" y="-140" text-anchor="middle" font-size="40">{{ upText }}</text>
                <polygon points="-10,-115 0,-135 10,-115" />
                <rect x="-5" y="-115" width="10" height="20" />
            </g>
        </NuxtLink>
        <!-- Flèche droite -->
        <NuxtLink :to="rightLink">
            <g id="arrow-right" fill="#00e676" transform="rotate(90)">
                <text x="15" y="-140" text-anchor="middle" font-size="32">{{ rightText }}</text>
                <polygon points=" -10,-115 0,-135 10,-115" />
                <rect x="-5" y="-115" width="10" height="20" />
            </g>
        </NuxtLink>
        <!-- Flèche bas -->
        <NuxtLink :to="downLink">
            <g id="arrow-down" fill="#00e676" transform="rotate(180)">
                <text x="0" y="-110" text-anchor="middle" font-size="40" transform="rotate(-180 0 -140)">{{ downText
                    }}</text>
                <polygon points="-10,-115 0,-135 10,-115" />
                <rect x="-5" y="-115" width="10" height="20" />
            </g>
        </NuxtLink>
        <!-- Flèche gauche -->
        <NuxtLink :to="leftLink">
            <g id="arrow-left" fill="#00e676" transform="rotate(270)">
                <text x="0" y="-140" text-anchor="middle" font-size="32">{{ leftText }}</text>
                <polygon points="-10,-115 0,-135 10,-115" />
                <rect x="-5" y="-115" width="10" height="20" />
            </g>
        </NuxtLink>

        <!-- Lien centré sans texte -->
        <NuxtLink :to="centerLink">
            <circle cx="0" cy="0" r="28" fill="transparent" />
        </NuxtLink>

    </svg>

</template>

<script setup>
const props = defineProps({
    upText: { type: String, default: 'Contact' },
    upLink: { type: String, default: '/contact' },
    rightText: { type: String, default: 'Jouer' },
    rightLink: { type: String, default: '/' },
    downText: { type: String, default: 'Contribuer' },
    downLink: { type: String, default: '/' },
    leftText: { type: String, default: 'Plonger' },
    leftLink: { type: String, default: '/' },
    viewBox: { type: String, default: '-180 -150 360 300' },
    width: { type: [String, Number], default: 200 },
    height: { type: [String, Number], default: 250 },
    centerLink: { type: String, default: '/pages/a-propos' }
})
</script>

<style scoped>
.logo-nav {
    display: flex;
    align-items: center;
}

.logo {
    height: 40px;
    width: auto;
}
</style>