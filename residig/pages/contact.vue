<template>
    <main class="contact-page">
        <h1>Contactez-nous</h1>
        <div class="contact-content">
            <div class="contact-photo-container">
                <div class="photo">
                    <img src="/photoProfil.jpg" alt="Photo de contact" class="contact-image" />
                </div>
                <div class="header-logo">
                    <img src="~/assets/img/logo.svg" alt="Logo Residig" />
                </div>
            </div>
            <ContactForm />

            <div class="contact-links">
                <a href="https://calendly.com/votre-rdv" target="_blank" rel="noopener" class="rdv-link">
                    Prendre un RDV
                </a>
                <a href="https://www.linkedin.com/in/votre-profil" target="_blank" rel="noopener" class="linkedin-link"
                    aria-label="LinkedIn">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                    </svg>
                    LinkedIn
                </a>
            </div>

        </div>
    </main>
</template>

<script setup>
import ContactForm from '~/components/contactForm.vue';

// Pas de logique spécifique pour ce formulaire de contact simple
</script>

<style>
.contact-page {
    max-width: 700px;
    margin: 40px auto;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
}

.contact-content {
    display: flex;
    gap: 100px;
    align-items: flex-start;
    flex-wrap: wrap;
}



.contact-photo-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}



.header-logo img {
    display: block;
    width: 100px;
}

.contact-image {
    width: 180px;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
}

.contact-form {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.contact-form label {
    font-weight: 500;
}

.contact-form input,
.contact-form textarea {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

.contact-form button {
    align-self: flex-start;
    padding: 10px 24px;
    background: #1976d2;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
}

.contact-form button:hover {
    background: #125ea7;
}

.contact-links {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    padding: 16px;
}

.linkedin-link {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #0a66c2;
    text-decoration: none;
    font-weight: 500;
    background: white;
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    transition: all 0.2s;
}

.linkedin-link:hover {
    color: #004182;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.rdv-link {
    background: #1976d2;
    color: #fff;
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: background 0.2s;
}

.rdv-link:hover {
    background: #125ea7;
}

@media screen and (max-width: 800px) {

    .contact-info {
        max-width: 95vw;
    }

    .contact-content {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: no-wrap;
    }

    .contact-page {
        max-width: 700px;
        margin: 0px;
        padding: 0px;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
    }

    .contact-photo-container {
        flex-direction: column;
        align-items: center;
    }

    .contact-image {
        width: 120px;
    }






    .contact-links {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

}
</style>