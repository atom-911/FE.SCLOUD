export const state = () => ({
    data: [],
    customer : {}
 })

 export const getters = {
    data : (state) => state.data
}
   
 export const mutations = {
    Init(state,payload){
        state.data = payload.reverse()
      },
    storeCustomer(state,payload){
        state.customer = payload
    },
    Remove(state, payload) {
        var index = state.data.findIndex(p=>p.id == payload.id);
        state.data.splice(index, 1)
     },
     ADD(state, payload) {
        state.data.unshift(payload);
     },
     Update(state,payload) {
        var index = state.data.findIndex(p=>p.id == payload.id);
        state.data.splice(index, 1, payload)
     } 
 }
   
 export const actions = {
   async init({ commit }, params) {
      var data = await this.$axios.get('/customer')
      commit('Init',data.data)
   },
   async customer({ commit }, params) {
      var data = await this.$axios.get('/customer/'+ params.id)
      commit('storeCustomer',data.data)
   },
   async update({commit}, params) {
      var data = await this.$axios.patch('/customer/' + params.id, params.model);
   }  
 }
 