import Vue from 'vue'
import Router from 'uni-simple-router'

Vue.use(Router)

const router = new Router({
	routes: [{
			path: '/login',
			name: 'Login',
			component: () => import('@/pages/Login')
		},
		{
			path: '/register',
			name: 'Register',
			component: () => import('@/pages/Register')
		},
		{
			path: '/personalInfo',
			name: 'PersonalInfo',
			component: () => import('@/pages/PersonalInfo')
		},
		{
			path: '/secondHandManage',
			name: 'secondHandManage',
			component: () => import('@/pages/secondHand')
		},
		{
			path: '/mySale',
			name: 'mySale',
			component: () => import('@/pages/secondHand')
		},
		{
			path: '/secondHandEdit',
			name: 'secondHandEdit',
			component: () => import('@/pages/secondHandEdit')
		},
		{
			path: '/secondHandAdd',
			name: 'secondHandAdd',
			component: () => import('@/pages/secondHand')
		},
		{
			path: '/assistance',
			name: 'assistance',
			component: () => import('@/pages/assistance')
		},
		{
			path: '/assistanceAdd',
			name: 'assistanceAdd',
			component: () => import('@/pages/assistance')
		},
		{
			path: '/assistanceEdit',
			name: 'assistanceEdit',
			component: () => import('@/pages/assistance')
		},
		{
			path: '/assistanceManage',
			name: 'assistanceManage',
			component: () => import('@/pages/assistance')
		},
		{
			path: '/forum',
			name: 'forum',
			component: () => import('@/pages/forum')
		},
		{
			path: '/forumManage',
			name: 'forumManage',
			component: () => import('@/pages/forum')
		},
		{
			path: '/favorite',
			name: 'favorite',
			component: () => import('@/pages/secondHand')
		},
		
	]
})

export default router