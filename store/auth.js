import Cookies from 'js-cookie';
export const state = () => ({
    token: null,
    userinfo: {},
    email : {}
})

export const mutations = {
    setToken(state, token) {
        state.token = token
    },
    clearToken(state) {
        state.token = null
    },
    setUserinfo(state, userinfo) {
        state.userinfo = userinfo
    },
    setEmail(state, email) {
        state.email = email
    }
}

export const actions = {
    authenticateUser(vuexContext, credentials) {
        //check login or Register
        let authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`
        return new Promise((resolve, reject) => {
            if (!credentials.isLogin) {
                authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`
            }
            return (this.$axios
                .$post(
                    authUrlApi,{
                        email: credentials.email,
                        password: credentials.password,
                        phone: credentials.phone,
                        username: credentials.username,
                        address : credentials.address,
                        returnSecureToken: true,
                    }
                )
                .then((result) => {
                    vuexContext.commit('setToken', result.idToken)
                    vuexContext.commit('setUserinfo', result)
                    localStorage.setItem('token', result.idToken)
                    localStorage.setItem('email', credentials.email)
                    localStorage.setItem('user', JSON.stringify({
                        email: credentials.email,
                        password: credentials.password,
                        phone: credentials.phone,
                        username: credentials.username,
                        address : credentials.address,
                    }))
                    Cookies.set('token', result.idToken)
                   
                    resolve({
                        success: true 
                    })
                }).catch((err) => {
                    if (err.response.data.error) {
                        alert('loi roi ma oi')
                    }
                    reject(err.response)
                })
            )
        })
    },
    initAuth(vuexContext, req) {
        let token

        if(req) {
            if(!req.headers.cookie) return false
            const tokenKey = req.headers.cookie.split(';').find(c => c.trim().startsWith('token='))
            if(!tokenKey) return false
            token = tokenKey.split('=')[1]
        }
        else {
            token = localStorage.getItem('token')
            if (!token) return false
        }
        vuexContext.commit('setToken', token)
    },
    logout(vuexContext) {
        vuexContext.commit('clearToken')
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        localStorage.removeItem('user')
        Cookies.remove('token')
    },
    resetpassword(vuexContext) {

    },
    createUser(vuexContext) {

    },
   
}
export const getters = {
    isAuthenticated(state) {
        return state.token != null
    }
}

