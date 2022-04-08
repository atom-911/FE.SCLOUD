export const state = () => ({
    data: [
       {
            id: 1,
            brandName : 'Tadu'
       },  
       {
            id: 2,
            brandName : 'Mắt bão'
        },
        {
            id: 3,
            brandName : 'Ten Ten'
        },  
        {
            id: 4,
            brandName: 'Scloud'
      },    
        
    ]
 })
 
 export const getters = {
    data: (state) => state.data
 }
 
 export const mutations = {
    Remove(state, index) {
       state.data.splice(index, 1)
    },
 
    ADD(state, payload) {
       state.data.push(payload);
    }
 }
 
 export const actions = {
 
 }
 