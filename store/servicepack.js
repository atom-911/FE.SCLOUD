export const state = () => ({

    data: [
       {
           id : 1,
           serviceName : "Tên miền",
           price : [
               {
                     serviceName: "Tên miền .com",
                     price : '350000'
               },
               {
                     serviceName: "Tên miền .vn",
                     price : '650000'
               },
               {
                     serviceName: "Tên miền .net",
                     price : '250000'
               },
           ]
       },
       {
         id : 2,
         serviceName : "SSL",
         price : [
            {
                  serviceName: "Chứng chỉ bảo mật",
                  price : '350000'
            },
         ],
       },
       {
         id : 3,
         serviceName : "Hosting",
         price : [
            {
                  serviceName: "Gói 1GB",
                  price : '1000000'
            },
            {
                  serviceName: "Gói 2GB",
                  price : '1300000'
            },
            {
                  serviceName: "Gói 3GB",
                  price : '1600000'
            },
             
         ]
       },
       {
         id : 4,
         serviceName : "Email doanh nghiệp",
         price : [
            {
                  serviceName: "Gói 20GB",
                  price : '1440000'
            },
            {
                  serviceName: "Gói 50GB",
                  price : '1920000'
            },
            {
                  serviceName: "Gói 100GB",
                  price : '2880000'
            },
            {
                  serviceName: "Gói 200GB",
                  price : '4500000'
            }
         ]
       },
       {
         id : 5,
         serviceName : "Bảo trì",
         price : [
            {
                  serviceName: "Bảo trì website",
                  price : '350000'
            },
         ],
       },
    ]
 })
 
 export const getters = {
    data: (state) => state.data
 }
 
 export const mutations = {
    store(state, data) { state.data = data },
    Remove(state, payload) {  
      
    },

    ADD(state, payload) {
       state.data.push(payload);
    }
 }
 
 export const actions = {
 
 }
 