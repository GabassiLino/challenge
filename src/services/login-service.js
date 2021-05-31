export const loginService = (userName, pass) => {
    
        if (userName === 'admin' && pass==='admin') {
            return true
        }
        return false
}