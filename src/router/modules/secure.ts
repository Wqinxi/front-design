<<<<<<< HEAD
import type { RouteRecordRaw } from "vue-router";

const SecureRouter:RouteRecordRaw = {
    path: '/secure',
    redirect: '/secure/regulations',
    component: () => import('@/views/work-space/work-space-right/Index.vue'),
    meta: { type: '安全措施' },
    children:[
        {
            path: 'regulations',
            component: () => import('@/views/work-space/work-space-right/secure/SecureRegulations.vue'),
            meta: { title: '安全条例' },
        },
        {
            path: 'emergency-plan',
            component: () => import('@/views/work-space/work-space-right/secure/EmergencyPlan.vue'),
            meta: { title: '应急预案' }
        },
        {
            path: 'contact-phone',
            component: () => import('@/views/work-space/work-space-right/secure/ContactPhone.vue'),
            meta: { title: '联系电话' }
        }

    ]
}
export default SecureRouter

=======

const SecureRouter = {
    path: '/secure',
    redirect: '/secure/regulations',
    component: () => import('@/views/work-space/work-space-right/Index.vue'),
    meta: { type: '安全措施' },
    children:[
        {
            path: 'regulations',
            component: () => import('@/views/work-space/work-space-right/secure/SecureRegulations.vue'),
            meta: { title: '安全条例' },
        },
        {
            path: 'emergency-plan',
            component: () => import('@/views/auth/Index.vue'),
            meta: { title: '应急预案' }
        },
        {
            path: 'contact-phone',
            component: () => import('@/views/work-space/work-space-right/secure/ContactPhone.vue'),
            meta: { title: '联系电话' }
        }

    ]
}
export default SecureRouter

>>>>>>> 09bd6c15b2d35278c354f85e0b20d1a3253232b5
