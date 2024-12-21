import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/LoginPage.vue'
import RegisterPage from '@/components/RegisterPage.vue'

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;