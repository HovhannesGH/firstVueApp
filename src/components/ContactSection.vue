<script setup>
import imageMap from "@/assets/images/map.jpg";
import { ref } from 'vue';


const name = ref("");
const email = ref("");
const message = ref("");

</script>


<template>
    <div class="contact-section" id="contact-section">
        <div class="contact-section-bg-image">
            <p>CONTACT</p>
        </div>
        <h1 class="contact-section-title"> WHERE I WORK</h1>
        <h3 class="contact-section-pre-title">I'd love your feedback!</h3>

        <div class="feedback-section">
            <div class="feedback-section-left">
                <div class="feedback-section-left-image-container">
                    <img :src="imageMap" alt="image">
                </div>
            </div>
            <div class="feedback-section-right">
                <ul>
                    <li>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path
                                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                            </svg>
                        </span>
                        Chicago, US
                    </li>
                    <li>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                            </svg>
                        </span>
                        Phone: +00 151515
                    </li>
                    <li>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                            </svg>
                        </span>
                        Email: mail@mail.com
                    </li>
                </ul>
                <p class="feedback-section-right-offer-text">Swing by for a cup of &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path
                            d="M96 64c0-17.7 14.3-32 32-32l320 0 64 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L96 64zM480 224l32 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0 0 128zM32 416l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                    </svg>, or
                    leave me a note:
                </p>

                <form @submit.prevent="sendMessage">
                    <div class="form-first-line">
                        <input type="text" placeholder="Name" v-model="name" required />
                        <input type="email" placeholder="Email" v-model="email" required />
                    </div>
                    <div class="form-second-line">
                        <input placeholder="Message" v-model="message" required></input>
                    </div>
                    <div class="form-third-line">
                        <router-link :to="{
                            name: 'messages',
                            query: { name: name, email: email, message: message }
                        }" class="form-router">
                            <button type="submit" class="send-message-btn">
                                <svg class="send-message-btn-svg" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <path
                                        d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                                </svg>
                                SEND MESSAGE
                            </button>
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>



<style>
@import "../assets/main.css";
</style>
