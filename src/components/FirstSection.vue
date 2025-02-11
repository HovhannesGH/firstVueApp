<script setup>
import userIcon from "@/assets/icons/user-solid.svg";
import gripIcon from "@/assets/icons/grip-solid.svg";
import messageIcon from "@/assets/icons/envelope-solid.svg";
import searchIcon from "@/assets/icons/search-glass-solid.svg";
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  const handleScroll = () => {
    const menu = document.getElementById("menu");
    const mobileMenu = document.getElementById("mobile-menu");
    if (window.scrollY > 50) {
      menu.classList.add("scrolled");
      mobileMenu.classList.add("scrolled");
    } else {
      menu.classList.remove("scrolled");
      mobileMenu.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<template>
  <div class="first-section" id="first-section">
    <div class="menu" id="menu">
      <ul class="home-ul">
        <div class="menu-items">
          <li class="home-ul-li"><a href="#">HOME</a></li>
          <li class="home-ul-li">
            <a href="#about-section"
              ><img :src="userIcon" alt="userIcon" />ABOUT</a
            >
          </li>
          <li class="home-ul-li">
            <a href="#portfolio-section"
              ><img :src="gripIcon" alt="gripIcon" />PORTFOLIO</a
            >
          </li>
          <li class="home-ul-li">
            <a href="#contact-section"
              ><img :src="messageIcon" alt="messageIcon" />CONTACT</a
            >
          </li>
        </div>
        <div class="menu-search-bar">
          <li class="home-ul-li-search-icon">
            <img :src="searchIcon" alt="searchIcon" />
          </li>
        </div>
      </ul>
    </div>

    <!-- ///////////////////////////////////////////////////// -->
    <div class="mobile-menu" id="mobile-menu">
      <div class="mobile-menu-first-line">
        <div class="mobile-menu-left">
          <a href="#">HOME</a>
        </div>
        <div class="mobile-menu-right">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </div>
      </div>
      <div class="list-container">
        <ul class="home-ul">
          <li class="home-ul-li">
            <a href="#about-section">ABOUT</a>
          </li>
          <li class="home-ul-li">
            <a href="#portfolio-section">PORTFOLIO</a>
          </li>
          <li class="home-ul-li">
            <a href="#contact-section">CONTACT</a>
          </li>
          <li class="home-ul-li">
            <a href="#contact-section">SEARCH</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="home-section">
      <p class="no-media-logo">MY WEBSITE LOGO</p>
      <p class="media-logo">MY LOGO</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.media-logo {
  display: none;
}
.no-media-logo {
  display: blcok;
}
.menu {
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: transparent;
  box-shadow: none;
  transition: box-shadow 0.3s ease;
}

.list-container {
  width: 100%;
}
.menu.scrolled,
.mobile-menu.scrolled {
  box-shadow: 0 0.125rem 0.3125rem 0 rgba(0, 0, 0, 0.16),
    0 0.125rem 0.625rem 0 rgba(0, 0, 0, 0.12);
  background-color: white;
}

.menu.scrolled .home-ul-li a,
.mobile-menu.scrolled .mobile-menu-left a {
  color: #000;
}

.menu-items {
  display: flex;
}

.menu-search-bar {
  width: 3.34rem;
  height: 3.34rem;
  cursor: pointer;
}

.menu-search-bar i {
  padding: 0.95rem;
}

.home-ul {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.home-ul-li img {
  width: 1.25rem;
  height: 1.25rem;
}

.home-ul-li a {
  text-decoration: none;
  color: #777;
  font-size: 1.25rem;
  padding: 0.9375rem 1rem;
  display: flex;
  align-items: center;
}

.home-ul-li a img {
  margin-right: 0.3125rem;
}

.home-ul-li-search-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.home-ul-li-search-icon:hover {
  color: white;
  background-color: #f44336;
}

.home-ul-li:hover a,
.home-ul-li:hover img {
  color: black;
  background-color: #ccc;
}

.menu-search-bar .home-ul-li-search-icon img {
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
}

.home-section {
  opacity: 0.75;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  background-image: url("../assets/images/parallax.jpg");
  background-attachment: scroll;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 57.5vh;
}

.home-section p {
  width: 32.5rem;
  text-align: center;
  color: white;
  letter-spacing: 0.75rem;
  font-size: 1.875rem;
  padding: 0.9375rem 0;
  background-color: #000 !important;
}

// ///////////////////////// mobile - menu/////////////
.mobile-menu {
  display: none;
}

.mobile-menu-first-line {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-menu-right svg {
  height: 1.25rem;
  cursor: pointer;
  padding: 0 1rem 0 0;
  fill: #777;
}

.mobile-menu-left a {
  text-decoration: none;
  color: #777;
  font-size: 1.25rem;
  padding: 0.9375rem 1rem;
  display: flex;
  align-items: center;
}

.mobile-menu-left a:hover {
  color: black;
  background-color: #ccc;
}

@media only screen and (max-width: 750px) {
  .menu {
    display: none;
  }

  .mobile-menu {
    width: 100%;
    position: fixed;
    z-index: 1;
    display: block;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    flex-direction: column;
  }
  .home-ul {
    flex-direction: column;
  }
  .media-logo {
    display: block;
    width: 15.5rem;
  }

  .no-media-logo {
    display: none;
  }
}
</style>
