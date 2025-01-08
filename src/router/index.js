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
import PostPage from '@/components/PostPage.vue'
import QuizStart from '@/components/QuizStart.vue'
import HalamanKhusus from '@/components/HalamanKhusus.vue'
import DraftPage from '@/components/DraftPage.vue'
import HasilAnalitik from '@/components/HasilAnalitik.vue'
import NotificationPage from '@/components/NotificationPage.vue'
import PostCommentPage from '@/components/PostCommentPage.vue'
import PostingPage from '@/components/PostingPage.vue'
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
        path: '/forgotpassword',
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
    },
    {
        path: '/view/post',
        name: 'Post Page',
        component: PostPage,
    },
    {
        path: '/quiz/start',
        name: 'QuizStart',
        component: QuizStart,
    },
    {
        path: '/khusus',
        name: 'Halaman Khusus',
        component: HalamanKhusus,
    },
    {
        path: '/draft',
        name: 'Draft Page',
        component: DraftPage,
    },
    {
        path:'/analisis',
        name:'Hasil Analitik',
        component: HasilAnalitik,
    },
    {
        path:'/notification',
        name:'Notification Page',
        component: NotificationPage,
    },
    {
        path:'/view/post/comment',
        name:'Post Comment Page',
        component: PostCommentPage,
    },
    {
        path:'/posting',
        name:'Posting Page',
        component: PostingPage,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;