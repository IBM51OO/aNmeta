import { useUserStore } from '@/modules/user/store/UserStore'

export default defineNuxtRouteMiddleware(async (_to, _from) => {
    const user = useUserStore()
        
    if (user.isUserAuth) 
    {
        return navigateTo('/')
    }
  })
  