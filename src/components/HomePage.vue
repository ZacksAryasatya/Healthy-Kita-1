<template>
    <div>
        <header class="navbar">
            <div class="container">
                <p class="brand">HealthyKita.</p>
                <nav class="nav-list" aria-label="Main Navigation">
                    <router-link to="/" class="nav-link">Home</router-link>
                    <router-link to="#features" class="nav-link">Features</router-link>
                    <router-link to="#contact" class="nav-link">Contact</router-link>
                </nav>
                <div class="user-profile" @click="toggleDropdown">
                    <img src="asset/img/download (1).jpg" alt="Profile Picture" class="profile-picture" />
                    <div class="dropdown-menu" :class="{ show: isDropdownVisible }">
                        <div class="dropdown-content">
                            <div class="profile-card">
                                <div class="profile-card-header">
                                    <img src="asset/img/download (1).jpg" alt="Profile Picture"
                                        class="card-profile-picture" />
                                    <span class="nickname">Nickname</span>
                                </div>
                                <div class="social-icons">
                                    <a href="#" class="social-icon"><i class="fa-brands fa-facebook"></i></a>
                                    <a href="#" class="social-icon"><i class="fa-brands fa-tiktok"></i></a>
                                    <a href="#" class="social-icon"><i class="fa-brands fa-youtube"></i></a>
                                    <a href="#" class="social-icon"><i class="fa-brands fa-google"></i></a>
                                </div>
                                <div class="profile-stats">
                                    <div class="stat">
                                        <span class="stat-number">350</span>
                                        <span class="stat-label">Post</span>
                                    </div>
                                    <div class="stat">
                                        <span class="stat-number">200</span>
                                        <span class="stat-label">Following</span>
                                    </div>
                                    <div class="stat">
                                        <span class="stat-number">124K</span>
                                        <span class="stat-label">Followers</span>
                                    </div>
                                </div>
                                <div class="dropdown-divider"></div>
                                <router-link to="/profile-page" class="dropdown-item">Kelola Profil</router-link>
                                <div class="dropdown-divider"></div>
                                <router-link to="/rank" class="dropdown-item">Daftar Ranking</router-link>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="hero">
            <div class="container2">
                <h1 class="hero-title">Pemantauan Kesehatan Mental dan Fisik.</h1>
                <p class="hero-text">
                    AirAware adalah platform andalan untuk memantau kualitas udara secara real-time. Dapatkan informasi
                    terkini mengenai tingkat polusi udara, termasuk detail tentang partikel berbahaya seperti PM2.5,
                    PM10, karbon
                    monoksida, ozon, dan nitrogen dioksida.
                </p>
                <form class="search-form">
                    <div class="search-container">
                        <i class="fa-solid fa-magnifying-glass search-icon"></i>
                        <input type="search" placeholder="Search..." class="search-input" />
                        <i class="fa-regular fa-circle-xmark search-clear" style="display: none;"></i>
                    </div>
                </form>
                <a href="https://www.mentalhealth.org.uk/explore-mental-health/a-z-topics/physical-health-and-mental-health"
                    class="hero-btn">
                    Learn more
                </a>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            isDropdownVisible: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.isDropdownVisible = !this.isDropdownVisible;
        },
    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body,
h1,
p,
a {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: inherit;
    font-family: 'Quicksand', sans-serif;
    box-sizing: border-box;
}

body {
    background-color: #f5fffa;
    color: black;
}

.navbar {
    background-color: #188754;
    padding: 2rem 0;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.search-box {
    width: 70%;
    width: 60vw;
}

.search-form {
    width: 240px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    justify-content: center;
}

.search-container {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 24px;
    padding: 0.5rem 1rem;
    width: 200%;
    max-width: 700px;
    box-sizing: border-box;
    background-color: #fff;
    position: relative;
}

.search-icon {
    margin-right: 0.5rem;
    color: #999;
}

.search-input {
    border-right: none;
    outline: none;
    width: 400px;
    padding: 0.5rem;
    border: 0px solid #ccc;
    border-radius: 5px;
    margin-right: 5px;
    border-radius: 5px 0 0 5px;
}

.search-clear {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #999;
    font-size: 1.2rem;
}

.search-clear:hover {
    color: #000;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container2 {
    display: contents;
    align-items: center;
}

.brand {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    margin-right: 650px;
    padding: 0;
}

.nav-list {
    background-color: #188754;
    display: flex;
    gap: 1.5rem;
}

.nav-list :hover a {
    background-color: whitesmoke;
    color: black;
}

.nav-link {
    font-size: 1rem;
    color: #fff;
    opacity: 0.8;
    padding: 10px 15px;
    border-radius: 999px;
    transition: background-color 0.6s ease, color 0.6s ease;
}

.nav-link:hover {
    color: black;
    background-color: white;
}

.nav-link:hover,
.nav-link.active {
    opacity: 1;
}

.hero {
    margin-top: 4rem;
    text-align: center;
    padding: 4rem 1rem;
}

.hero-title {
    color: #1a1a1a;
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.hero-text {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    text-align: center;
    margin: 0 auto;
    max-width: 800px;
    color: gray;
}

.hero-btn {
    display: inline-block;
    background-color: #fff;
    color: #1a1a1a;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 35px;
    transition: background-color 0.3s, color 0.3s;
}

.hero-btn:hover {
    background-color: #444;
    color: #fff;
}

.user-profile {
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.profile-picture {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #188754;
    border-radius: 40px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    min-width: 300px;
    z-index: 1000;
    overflow: hidden;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    pointer-events: none;
    margin-top: 50px;
}

.dropdown-menu.show {
    display: block;
    opacity: 1;
    pointer-events: auto;
    animation: fadeInSlideDown 0.3s ease-in-out;
}

.dropdown-content {
    padding: 16px;
}

.profile-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    background-color: white;
    color: black;
    border-radius: 40px;
    margin: -10px;
}

.profile-card-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
}

.card-profile-picture {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 8px;
}

.nickname {
    font-size: 1.2em;
    font-weight: bold;
}

.social-icons {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
}

.social-icon {
    color: black;
    font-size: 1.2em;
    text-decoration: none;
}

.profile-stats {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 16px;
}

.stat {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.stat-number {
    font-weight: bold;
}

.dropdown-divider {
    border-top: 1px solid #eee;
    margin: 16px 0;
}

.dropdown-item {
    border-radius: 40px;
    padding: 8px 16px;
    text-decoration: none;
    color: black;
    display: block;
    transition: background-color 0.2s;
}

.dropdown-item:hover {
    background-color: #e0e0e0;
}

.user-profile .profile-picture {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}
</style>