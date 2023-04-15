export default defineEventHandler((event) => {
    // setCookie(event, 'null', 'null', {sameSite: 'strict'})
    // event.node.req.setHeader('Cookie', 'SameSite=Strict; Secure')
    
    console.log('New request: ' + event.node.req.url)
})