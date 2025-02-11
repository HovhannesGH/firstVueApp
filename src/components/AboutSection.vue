<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import girlImage from "@/assets/images/avatar_hat.jpg";
import Progress from "@/components/ui/Progress.vue";

const skills = ref([
  {
    title: "Photography",
    percentage: 90,
    class: "progress-photography progress",
  },
  {
    title: "Web Design",
    percentage: 85,
    class: "progress-web-design progress",
  },
  { title: "Photoshop", percentage: 75, class: "progress-photoshop progress" },
]);

defineProps({
  currentPartners: Number,
  currentProjectsDone: Number,
  currentHappyClients: Number,
  currentMeetings: Number,
});

const scrollY = ref(0);
const currentPartners = ref(0);
const currentProjectsDone = ref(0);
const currentHappyClients = ref(0);
const currentMeetings = ref(0);

const maxPartners = 14;
const maxProjectsDone = 55;
const maxHappyClients = 89;
const maxMeetings = 150;

let partnersAnimationFrame;
let projectsAnimationFrame;
let happyClientsAnimationFrame;
let meetingsAnimationFrame;

const updateScroll = () => {
  scrollY.value = window.scrollY;
};

const animateValue = (current, max, setAnimationFrame) => {
  const animate = () => {
    if (current.value < max) {
      current.value += 1;
      setAnimationFrame(requestAnimationFrame(animate));
    } else {
      cancelAnimationFrame(setAnimationFrame);
    }
  };
  animate();
};

watch(scrollY, (newValue) => {
  if (newValue > 1150 && newValue < 2040) {
    if (currentPartners.value === 0) {
      animateValue(
        currentPartners,
        maxPartners,
        (frame) => (partnersAnimationFrame = frame)
      );
    }
    if (currentProjectsDone.value === 0) {
      animateValue(
        currentProjectsDone,
        maxProjectsDone,
        (frame) => (projectsAnimationFrame = frame)
      );
    }
    if (currentHappyClients.value === 0) {
      animateValue(
        currentHappyClients,
        maxHappyClients,
        (frame) => (happyClientsAnimationFrame = frame)
      );
    }
    if (currentMeetings.value === 0) {
      animateValue(
        currentMeetings,
        maxMeetings,
        (frame) => (meetingsAnimationFrame = frame)
      );
    }
  } else {
    cancelAnimationFrame(partnersAnimationFrame);
    cancelAnimationFrame(projectsAnimationFrame);
    cancelAnimationFrame(happyClientsAnimationFrame);
    cancelAnimationFrame(meetingsAnimationFrame);

    currentPartners.value = 0;
    currentProjectsDone.value = 0;
    currentHappyClients.value = 0;
    currentMeetings.value = 0;
  }
});

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
  cancelAnimationFrame(partnersAnimationFrame);
  cancelAnimationFrame(projectsAnimationFrame);
  cancelAnimationFrame(happyClientsAnimationFrame);
});

const statistics = [
  { name: currentPartners, text: "Partners" },
  { name: currentProjectsDone, text: "Projects Done" },
  { name: currentHappyClients, text: "Happy Clients" },
  { name: currentMeetings, text: "Meetings" },
];
</script>

<template>
  <div class="about" id="about">
    <div class="about__first-block">
      <h1 class="about__title">ABOUT ME</h1>
      <p class="about__subtitle">I love photograpy</p>
      <p class="about__info">
        We have created a fictional "personal" website/blog, and our fictional
        character is a hobby photographer. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>

    <div class="about__second-block">
      <div class="about__second-block-left">
        <h3><i class="fa fa-user" aria-hidden="true"></i> My Name</h3>
        <div class="image-container">
          <img :src="girlImage" alt="Image" />
        </div>
      </div>
      <div class="about-section-second-block-right">
        <p class="about-section-second-block-right-info">
          Welcome to my website. I am lorem ipsum consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>

    <div class="about-section-third-block">
      <p class="about-section-third-block-title">Im really good at:</p>
      <div v-for="(skill, index) in skills" :key="index">
        <Progress :data="skill" />
      </div>
    </div>

    <div class="about-section-forth-block">
      <div class="info-section">
        <div
          class="partners-number"
          v-for="(stat, index) in statistics"
          :key="index"
        >
          {{ stat.name }} + <span>{{ stat.text }}</span>
        </div>
      </div>
      <div class="portfolio-image-section">
        <p>PORTFOLIO</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  margin-top: 6.25rem;

  &__title {
    text-align: center;
    font-weight: 500;
    color: #777;
    font-size: 1.875rem;
  }

  &__subtitle {
    text-align: center;
    margin-top: 1.875rem;
    font-style: italic;
    color: #777;
    font-size: 1.25rem;
    letter-spacing: 0.03125rem;
  }

  &__info {
    max-width: 63.5%;
    margin: 0 auto;
    margin-top: 1.875rem;
    font-size: 1.1875rem;
    line-height: 1.75;
    color: #777;
  }

  &__second-block {
    max-width: 63.5%;
    margin: 3.625rem auto 0 auto;
    display: flex;
    justify-content: space-around;
  }

  &__second-block-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 48%;

    h3 {
      text-align: center;
      color: #777;

      i {
        margin-right: 0.9375rem;
      }
    }
  }
}

.about-section-second-block-right {
  width: 48%;
}

.about-section-second-block-left .image-container {
  max-width: 31.25rem;
}

.about-section-second-block-left img {
  width: 100%;
  margin-top: 3.125rem;
  border-radius: 0.5rem;
  opacity: 0.7;
}

.about-section-second-block-left img:hover {
  opacity: 1;
}

.about-section-second-block-right-info {
  padding: 0 1.5rem 0 0 !important;
  font-size: 1.191rem;
  line-height: 1.8;
  color: #777;
}

.about-section-third-block {
  max-width: 63.5%;
  margin: 3.625rem auto 0 auto;
}

.about-section-third-block .about-section-third-block-title {
  text-align: center;
  color: #777;
  font-size: 1.4375rem;
}

.about-section-forth-block {
  width: 100%;
}

@media screen and (max-width: 750px) {
  .about__second-block {
    flex-direction: column !important;
    align-items: center !important;
  }

  .about-section-second-block-right {
    display: none;
  }
  .about__second-block-left h3 {
    margin-bottom: 70px;
  }

  .about-section-third-block {
    max-width: 93%;
  }

  .info-section {
    flex-direction: column;
    align-items: center;
    height: unset;
  }

  .partners-number {
    margin: 30px;
    font-size: 35px;
    span {
      font-size: 35px;
    }
  }
  .about__info{
    max-width: 93%;
  }
}
</style>
