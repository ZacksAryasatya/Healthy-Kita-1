<template>
    <div class="profile-container">
        <header>
            <div class="header-container">
                <div class="logo">
                    <span class="logo-text">HealthyKita.</span>
                </div>
                <nav>
                    <ul>
                        <li><a href="Landing-Page.html">Home</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div class="profile-icon">
                    <img src="" alt="Profile" />
                </div>
            </div>
        </header>
        <div class="header">
            <div class="user-info">
                <span class="username">User.</span>
                <div class="settings-dropdown">
                    <button class="settings-button" @click="toggleDropdown">
                        <i class="fas fa-cog"></i>
                    </button>
                    <div class="dropdown-content" v-if="dropdownVisible">
                        <a href="profile-edit.html" class="dropdown-item">Edit profile</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="profile-details">
            <img src="" alt="Logo Zaden Hub" class="profile-picture" />
            <div class="user-bio">
                <span class="full-name">User.</span>
                <span class="bio-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Architecto ea officiis omnis culpa magni maxime dolor, quos doloremque dolorum <br />
                    dolores sed doloribus suscipit quam veritatis ipsa nihil rerum nobis eum!
                </span>
            </div>
        </div>
        <div class="profile-stats">
            <div class="stat">
                <span class="stat-number">1</span>
                <span class="stat-label">post</span>
            </div>
            <div class="stat">
                <span class="stat-number">2</span>
                <span class="stat-label">followers</span>
            </div>
            <div class="stat">
                <span class="stat-number">2</span>
                <span class="stat-label">following</span>
            </div>
            <div class="stat">
                <span class="stat-number">1</span>
                <span class="stat-label">Ranking</span>
            </div>
        </div>
        <div class="tabs">
            <div class="tab active">POSTS</div>
        </div>
        <div class="posts-section">
            <img src="" alt="Postingan Zaden Hub" class="post-image" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dropdownVisible: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.dropdownVisible = !this.dropdownVisible;
        },
    },
};
</script>

<style scoped>
/* CSS Styles from the provided code */
body {
    background-color: #f5fffa;
    color: #000;
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding-top: 70px;
}

header {
    background-color: #188754;
    color: #fff;
    padding: 10px 0;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 960px;
    margin: 20px auto;
    padding: 0 20px;
}

.logo {
    font-weight: bold;
    font-size: 24px;
    margin-right: 410px;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

nav li {
    margin-left: 20px;
}

nav a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    padding: 8px 16px;
    border-radius: 20px;
    transition: all 0.3s ease;
}

nav a:hover {
    text-decoration: none;
    color: #000;
    background-color: #fff;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.profile-icon img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}

.profile-container {
    width: 935px;
    padding: 30px 20px;
    box-sizing: border-box;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.user-info {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}

.username {
    font-weight: bold;
    font-size: 20px;
}

.settings-dropdown {
    position: relative;
    display: inline-block;
}

.settings-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: #000;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #fff;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    right: 0;
    border-radius: 5px;
    border: 1px solid #ddd;
}

.dropdown-content.show {
    display: block;
}

.dropdown-item {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    color: #000;
}

.dropdown-item:hover {
    background-color: #f1f1f1;
}

.profile-details {
    display: flex;
    margin-bottom: 20px;
    align-items: flex-start;
}

.profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 30px;
}

.user-bio {
    display: flex;
    flex-direction: column;
}

.full-name {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
}

.bio-text {
    font-size: 14px;
    line-height: 1.4;
    word-wrap: break-word;
}

.bio-text a {
    color: #00376b;
    text-decoration: none;
}

.bio-text a:hover {
    text-decoration: underline;
}

.profile-stats {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
}

.stat {
    text-align: center;
}

.stat-number {
    font-weight: bold;
    font-size: 18px;
    display: block;
}

.stat-label {
    font-size: 14px;
    color: #999;
}

.tabs {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin-bottom: 30px;
}

.tab {
    padding: 10px 0;
    cursor: pointer;
    font-weight: bold;
    flex: 1;
    text-align: center;
}

.tab.active {
    border-bottom: 2px solid #000;
}

.posts-section {
    display: flex;
    justify-content: center;
}

.post-image {
    width: 100%;
    max-width: 200px;
    height: auto;
    border: 1px solid #ddd;
}
</style>
