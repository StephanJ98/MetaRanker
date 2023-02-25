export function useLogOut() {
    window.localStorage.removeItem('token')
}