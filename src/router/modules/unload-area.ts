<<<<<<< HEAD
import type { RouteRecordRaw } from "vue-router";

const UnloadAreaRouter:RouteRecordRaw = {
    path: '/unload-area',
    redirect: '/unload-area/img',
    component: () => import('@/views/work-space/work-space-right/Index.vue'),
    meta: { type: '卸油区' },
    children:[
        {
            path: 'img',
            component: () => import('@/views/work-space/work-space-right/unload-area/ImgHandle.vue'),
            meta: { title: '图像处理' },
        },
        {
            path: 'video',
            component: () => import('@/views/work-space/work-space-right/unload-area/VideoMonitor.vue'),
            meta: { title: '视频监控' }
        }
    ]
}
export default UnloadAreaRouter
=======
import type { RouteRecordRaw } from "vue-router";

const UnloadAreaRouter:RouteRecordRaw = {
    path: '/unload-area',
    redirect: '/unload-area/img',
    component: () => import('@/views/work-space/work-space-right/Index.vue'),
    meta: { type: '卸油区' },
    children:[
        {
            path: 'img',
            component: () => import('@/views/auth/Index.vue'),
            meta: { title: '图像处理' },
        },
        {
            path: 'video',
            component: () => import('@/views/auth/Index.vue'),
            meta: { title: '视频监控' }
        }

    ]
}
export default UnloadAreaRouter
>>>>>>> 09bd6c15b2d35278c354f85e0b20d1a3253232b5
