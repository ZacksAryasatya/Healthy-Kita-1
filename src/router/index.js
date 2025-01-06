import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/components/LoginPage.vue'
import RegisterPage from '@/components/RegisterPage.vue'
import HomePage from '@/components/HomePage.vue'
import ProfilePage from '@/components/ProfilePage.vue'
import ProfileSettingsPage from '@/components/ProfileSettingsPage.vue'
import RankPage from '@/components/RankPage.vue'
import ForgotPWPage from '@/components/ForgotPWPage.vue'
import NewPWPage from '@/components/NewPWPage.vue'
import QuizPage from '@/components/QuizPage.vue'

const routes = [
    {
        path: '/',
        redirect: 'Register'
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage,
    },
    {
        path: '/profile/:username',
        name: 'Profile',
        component: ProfilePage,
    },
    {
        path: '/profile/settings',
        name: 'ProfileSettings',
        component: ProfileSettingsPage,
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/rank',
        name: 'Rank',
        component: RankPage,
    },
    {
        path: '/forgotpw',
        name: 'Forgot Password',
        component: ForgotPWPage,
    },
    {
        path: '/newpassword',
        name: 'New Password',
        component: NewPWPage,
    },
    {
        path: '/quiz',
        name: 'Quiz',
        component: QuizPage,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;