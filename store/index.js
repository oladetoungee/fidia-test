import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
           token: null 
        },
        mutations: {
            
          setToken(state, token) {
              state.token = token
          } 
               
            
        },

    
        actions: {
            signinUser(vuexContext, authData) {
                return this.$axios.$post(
                    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + 
                        process.env.fbAPIKey, {
                            email: authData.email,
                            password: authData.password,
                            returnSecureToken: true
                        }
                ).then(result => {
                    vuexContext.commit("setToken", result.idToken)
                })
                .catch(e => console.log(e))
            },
            loginUser(vuexContext, authData) {
                return this.$axios.$post(
                    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + 
                        process.env.fbAPIKey, {
                            email: authData.email,
                            password: authData.password,
                            returnSecureToken: true
                        }
                ).then(result => {
                    vuexContext.commit("setToken", result.idToken)
                })
                .catch(e => console.log(e))
            }
        },
        getters: {
           isAuthenticated(state) {
               return state.token != null
           }
        }
    })
           
}

export default createStore