import router from './index'

    router.beforeEach((to, from, next) => {
        // ...
        if(from.path == "/login"){
            next()
        }else{
            next()
        }
    
    })