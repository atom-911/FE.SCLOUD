export const state = () => ({
   model : [],
   service: {},
})

export const getters = {
   data: (state) => state.data
}

export const mutations = {
   Init(state,payload){
      state.model = payload
    },
   storeService(state,payload){
      state.service = payload
   },
   Remove(state, payload) {
      var index = state.model.findIndex(p=>p.id == payload.id);
      state.model.splice(index, 1)
   },

   // Update (state , payload) {
   //    const model = [...state.data];
   //    var index = model.findIndex(p=>p.id == payload.id);
   //    model[index] = {...todos[index],...payload}
   //    state.data = model
   // },
   Update(state,payload) {
      var index = state.model.findIndex(p=>p.id == payload.id);
      state.model.splice(index, 1, payload)
   },
   ADD(state, payload) {
      state.data.unshift(payload);
   }
}

export const actions = {

}
