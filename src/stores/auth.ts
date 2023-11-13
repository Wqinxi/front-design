import {ref, computed, reactive} from 'vue'
import { defineStore } from 'pinia'
 
export const useLoginStore = defineStore('login', () => {

    const form = ref({
        username: '',
        password: '',
    })
    return { form }
})

export const useRegistStore=defineStore('register',()=>{
    
    const form = ref({
        EMID:'',
        TEL:'',
        username:'',
        password:''
    })
    return {form}
})
