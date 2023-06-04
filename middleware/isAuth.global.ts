import { useUserStore } from "~/modules/user/store/UserStore";

export default defineNuxtRouteMiddleware(async () => {
    const userStore = useUserStore()
    const authCookie = useCookie('access_token')
    
    if(!userStore.isUserAuth && authCookie.value)
    {        
        await userStore.fetchUser();
    }

  })
  