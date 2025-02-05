<script setup>
import { ref, computed } from "vue";
import gridFirstImage from "@/assets/images/p1.jpg";
import gridSecondtImage from "@/assets/images/p2.jpg";
import gridThirdImage from "@/assets/images/p3.jpg";
import gridFourthImage from "@/assets/images/p4.jpg";
import gridFifthImage from "@/assets/images/p5.jpg";
import gridSixthImage from "@/assets/images/p6.jpg";
import gridSeventhImage from "@/assets/images/p7.jpg";
import gridEighthImage from "@/assets/images/p8.jpg";

import gridNinthImage from "@/assets/images/p5.jpg";
import gridTenthImage from "@/assets/images/p6.jpg";
import gridEleventhImage from "@/assets/images/p7.jpg";
import gridTwelthImage from "@/assets/images/p8.jpg";
import gridThirteenthImage from "@/assets/images/p1.jpg";
import gridFourteenthImage from "@/assets/images/p2.jpg";
import gridFifteenthImage from "@/assets/images/p3.jpg";
import gridSixteenthImage from "@/assets/images/p4.jpg";

const initialImages = [
    gridFirstImage,
    gridSecondtImage,
    gridThirdImage,
    gridFourthImage,
    gridFifthImage,
    gridSixthImage,
    gridSeventhImage,
    gridEighthImage,
];

const additionalImages = [
    gridNinthImage,
    gridTenthImage,
    gridEleventhImage,
    gridTwelthImage,
    gridThirteenthImage,
    gridFourteenthImage,
    gridFifteenthImage,
    gridSixteenthImage,
];

const initialDescriptions = [
    "The mist over the mountains",
    "Coffee beans",
    "Bear closeup",
    "Quiet ocean",
    "The mist",
    "My beloved typewriter",
    "Empty ghost train",
    "Sailing",
];

const additionalDescriptions = [
    "The mist",
    "My beloved typewriter",
    "Empty ghost train",
    "Sailing",
];

const loadMore = ref(false);

const displayedImages = computed(() =>
    loadMore.value ? [...initialImages, ...additionalImages] : initialImages
);

const displayedDescriptions = computed(() =>
    loadMore.value ? [...initialDescriptions, ...additionalDescriptions] : initialDescriptions
);

const selectedImage = ref(null);
const selectedDescription = ref(null);
const isModalOpen = ref(false);

function openModal(image, text) {
    selectedImage.value = image;
    selectedDescription.value = text;
    isModalOpen.value = true;
}

function closeModal() {
    isModalOpen.value = false;
}

function toggleLoadMore() {
    loadMore.value = !loadMore.value;
}
</script>

<template>
    <div class="portfolio-section" id="portfolio-section">
        <h1 class="portfolio-section-title"> MY WORK</h1>
        <h3 class="portfolio-section-pre-title">
            Here are some of my latest lorem work ipsum tipsum.
        </h3>
        <h3 class="portfolio-section-pre-title">
            Click on the images to make them bigger
        </h3>
        <div>
            <div class="gallery">
                
                    <div class="gallery-item" v-for="(image, index) in displayedImages" :key="index"
                        @click="openModal(image, displayedDescriptions[index])">
                        <img :src="image" :alt="'Image ' + (index + 1)" />
                    </div>

            </div>

            <div class="modal" v-if="isModalOpen" @click="closeModal">
                <img class="modal-image" :src="selectedImage" alt="Modal Image" />
                <p class="modal-description"> {{ selectedDescription }}</p>
            </div>
        </div>

        <div class="btn-container">
            <button @click="toggleLoadMore">
                {{ loadMore ? "SHOW LESS" : "LOAD MORE" }}
            </button>
        </div>
    </div>
</template>

<style>
@import "../assets/main.css";
</style>
