<template>
<div class="w-full p-8">
  <div class="title w-full ml-2">
        <i class="fas fa-bars mr-2 text-xl inline-block"></i>
        <h2 class="font-bold text-2xl inline-block">Thông tin dịch vụ</h2>
    </div>
    <div class="w-full">
        <div class="w-full mb-8" v-for="item in this.data " :key="item.id" >
            <div><h2 class="font-semibold text-xl mb-4 ml-2">{{item.serviceName}}</h2></div>
            <b-table class="mx-2"
                :data="item.price"
                :striped="isStriped">

                <b-table-column field="serviceName" width = "400" label="Gói dịch vụ"  v-slot="props">
                    {{ props.row.serviceName }}
                </b-table-column>

                <b-table-column field="price" label="Chi phí" width = "400" v-slot="props">
                    {{ (props.row.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
                </b-table-column>


                <b-table-column label="Thao tác" v-slot="props">
                    <span @click="handleEdit(props.row)" class="px-3 border border-teal-500 text-teal-500 mx-1 cursor-pointer">
                        Sửa
                    </span>
                    <b-modal
                    v-model="isComponentModalActive"
                    has-modal-card
                    trap-focus
                    :destroy-on-hide="false"
                    aria-role="dialog"
                    aria-label="Example Modal"
                    aria-modal
                    >
                    <template>
                        <editservicepack
                        v-model="model"
                        @close="props.close"
                        :unit.sync="model"
                        ></editservicepack>
                    </template>
                    </b-modal>
                    <span @click="handleDelete(props.row)" class="px-3 border border-red-500 text-red-500 mx-1 cursor-pointer">
                        Xoá
                    </span>
                </b-table-column>
            </b-table>
        </div>
     
  
  </div>
    
</div> 
</template>

<script>
import editservicepack from "~/components/editservicepack/editservicepack";
  export default {
    middleware: ['check-auth','authenticated'],
    components : {editservicepack},
    data() {
      return {
        data: [],
        isStriped: true,
        isComponentModalActive: false,
        model :  {
                
            }
      }
    },
   
    computed: {
 
    },
    methods: {
      handleEdit(item) {
        this.model = item;
        this.isComponentModalActive = true;
        
      },
      handleDelete(item) {
          console.log(item)
            this.$buefy.dialog.confirm({
                title: 'Xóa dịch vụ ',
                message: `Bạn thật sự muốn xóa dịch vụ này chứ! <br> Việc này sẽ không thể hủy bỏ`,
                confirmText: 'Tiếp tục',
                type: 'is-danger',
                hasIcon: true,
                onConfirm: async () => {
                    await this.$store.commit('servicepack/Remove', item);;
                    this.$buefy.toast.open(` Đã xóa dich vụ!` );
                    
                }
            })
      },
     
    },
    mounted(){
      var vm = this;
      vm.$nextTick(()=>{
        this.data = this.$store.state.servicepack.data
      })
    }
  }
</script>
<style>
.modal-background {
    background-color: rgb(10 10 10 / 15%);
}
</style>