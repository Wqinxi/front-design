<<<<<<< HEAD
import {ref, computed, reactive} from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {

    const form = ref({
        username: '',
        password: '',
    })
    return { form }
})

export const useRegisterStore=defineStore('register',()=>{

    const form = ref({
        EMID:'',
        TEL:'',
        username:'',
        password:''
    })
    return {form}
})
export const useRetrievePasswordStore=defineStore('register',()=>{

    const form = ref({
        TEL:'',
        captcha:'',
        password:''
    })
    return {form}
})
=======
import {ref, computed, reactive} from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {

    const form = ref({
        username: '',
        password: '',
    })
    return { form }
})

export const useRegisterStore=defineStore('register',()=>{

    const form = ref({
        EMID:'',
        TEL:'',
        username:'',
        password:''
    })
    return {form}
})
export const useRetrievePasswordStore=defineStore('register',()=>{

    const form = ref({
        TEL:'',
        captcha:'',
        password:''
    })
    return {form}
})
>>>>>>> 09bd6c15b2d35278c354f85e0b20d1a3253232b5
