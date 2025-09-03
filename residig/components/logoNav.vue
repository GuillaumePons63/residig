<template>
    <svg xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox" :width="width" :height="height">

        <!-- Cercle -->
        <circle cx="0" cy="0" r="100" stroke="#00e676" stroke-width="8" fill="none" />
        <!-- Croix -->
        <line x1="-100" y1="0" x2="100" y2="0" stroke="#00e676" stroke-width="8" />
        <line x1="0" y1="-100" x2="0" y2="100" stroke="#00e676" stroke-width="8" />

        <!-- Flèche haut -->
        <NuxtLink v-if="upEnabled" :to="upLink">
            <g id="arrow-up" fill="#00e676">
                <text x="0" y="-140" text-anchor="middle" font-size="40">{{ upText }}</text>
                <polygon points="-10,-115 0,-135 10,-115" />
                <rect x="-5" y="-115" width="10" height="20" />
            </g>
        </NuxtLink>
        <g v-else id="arrow-up" fill="#00e676">
            <text x="0" y="-140" text-anchor="middle" font-size="40">{{ upText }}</text>
            <polygon points="-10,-115 0,-135 10,-115" />
            <rect x="-5" y="-115" width="10" height="20" />
        </g>

        <!-- Flèche droite -->
        <NuxtLink v-if="rightEnabled" :to="rightLink">
            <g id="arrow-right" fill="#00e676" transform="rotate(90)">
                <text x="15" y="-140" text-anchor="middle" font-size="32">{{ rightText }}</text>
                <polygon points=" -10,-115 0,-135 10,-115" />
                <rect x="-5" y="-115" width="10" height="20" />
            </g>
        </NuxtLink>
        <g v-else id="arrow-right" fill="#00e676" transform="rotate(90)">
            <text x="15" y="-140" text-anchor="middle" font-size="32">{{ rightText }}</text>
            <polygon points=" -10,-115 0,-135 10,-115" />
            <rect x="-5" y="-115" width="10" height="20" />
        </g>

        <!-- Flèche bas -->
        <NuxtLink v-if="downEnabled" :to="downLink">
            <g id="arrow-down" fill="#00e676" transform="rotate(180)">
                <text x="0" y="-110" text-anchor="middle" font-size="40" transform="rotate(-180 0 -140)">{{ downText
                    }}</text>
                <polygon points="-10,-115 0,-135 10,-115" />
                <rect x="-5" y="-115" width="10" height="20" />
            </g>
        </NuxtLink>
        <g v-else id="arrow-down" fill="#00e676" transform="rotate(180)">
            <text x="0" y="-110" text-anchor="middle" font-size="40" transform="rotate(-180 0 -140)">{{ downText
                }}</text>
            <polygon points="-10,-115 0,-135 10,-115" />
            <rect x="-5" y="-115" width="10" height="20" />
        </g>

        <!-- Flèche gauche -->
        <NuxtLink v-if="leftEnabled" :to="leftLink">
            <g id="arrow-left" fill="#00e676" transform="rotate(270)">
                <text x="0" y="-140" text-anchor="middle" font-size="32">{{ leftText }}</text>
                <polygon points="-10,-115 0,-135 10,-115" />
                <rect x="-5" y="-115" width="10" height="20" />
            </g>
        </NuxtLink>
        <g v-else id="arrow-left" fill="#00e676" transform="rotate(270)">
            <text x="0" y="-140" text-anchor="middle" font-size="32">{{ leftText }}</text>
            <polygon points="-10,-115 0,-135 10,-115" />
            <rect x="-5" y="-115" width="10" height="20" />
        </g>

        <!-- Lien centré sans texte -->
        <NuxtLink v-if="centerEnabled" :to="centerLink">
            <circle cx="0" cy="0" r="28" fill="transparent" />
        </NuxtLink>
        <circle v-else cx="0" cy="0" r="28" fill="transparent" opacity="0.3" />

    </svg>
</template>

<script setup>
const props = defineProps({
    upText: { type: String, default: 'Contacter' },
    upLink: { type: String, default: '/contact' },
    upEnabled: { type: Boolean, default: true },
    rightText: { type: String, default: 'Jouer' },
    rightLink: { type: String, default: '/pages/jouer' },
    rightEnabled: { type: Boolean, default: true },
    downText: { type: String, default: 'Contribuer' },
    downLink: { type: String, default: '/pages/contribuer' },
    downEnabled: { type: Boolean, default: true },
    leftText: { type: String, default: 'Plonger' },
    leftLink: { type: String, default: '/pages/plonger' },
    leftEnabled: { type: Boolean, default: true },
    viewBox: { type: String, default: '-180 -150 360 300' },
    width: { type: [String, Number], default: 200 },
    height: { type: [String, Number], default: 250 },
    centerLink: { type: String, default: '/pages/a-propos' },
    centerEnabled: { type: Boolean, default: true }
})
</script>