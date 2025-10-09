<template>
    <div class="contact-info">
        <p>Pour toute question ou information, n'hésitez pas à nous contacter via le formulaire ci-dessous</p>

        <form class="contact-form" @submit.prevent="handleSubmit">
            <label for="name">Nom :</label>
            <input type="text" id="name" name="name" v-model="name" required />

            <label for="email">Email :</label>
            <input type="email" id="email" name="email" v-model="email" required />

            <label for="message">Message :</label>
            <textarea id="message" name="message" rows="5" v-model="message" required></textarea>

            <button type="submit">Envoyer</button>
        </form>
        <p v-if="success" style="color:green;">Message envoyé !</p>
        <p v-if="error" style="color:red;">Erreur lors de l'envoi.</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'
const mail = useMail()

const name = ref('')
const email = ref('')
const message = ref('')
const success = ref(false)
const error = ref(false)

async function handleSubmit() {
    success.value = false
    error.value = false
    try {
        await mail.send({
            to: email.value,
            subject: 'Nouveau message de contact',
            text: `Nom: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`
        })
        success.value = true
        name.value = ''
        email.value = ''
        message.value = ''
        await Swal.fire({
            icon: 'success',
            title: 'Mail envoyé',
            text: 'Le mail a été correctement envoyé, vous serez recontacté rapidement.'
        })
    } catch (e) {
        error.value = true
        await Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Une erreur est survenue lors de l\'envoi du mail.'
        })
    } finally {
        // Reset fields after submission
        name.value = ''
        email.value = ''
        message.value = ''
    }
}
</script>

<style scoped>
.contact-info {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
}

.contact-form {
    display: flex;
    flex-direction: column;
}

.contact-form label {
    margin-bottom: 0.5rem;
}

.contact-form input,
.contact-form textarea {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.contact-form button {
    padding: 0.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: auto;
}

.contact-form button:hover {
    background-color: #0056b3;

}
</style>