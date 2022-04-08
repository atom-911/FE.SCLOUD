<template>
  <div class="w-full p-8">
    <div class="w-full flex justify-between items-center">
      <div class="title w-full ml-2">
        <i class="fas fa-bars mr-2 text-xl inline-block"></i>
        <h2 class="font-bold text-2xl inline-block">Thông tin khách hàng</h2>
      </div>
      <div class="mr-2">
        <b-button
            class="bg-gradient-to-r from-yellow-500 to-yellow-400"
            label="Thêm khách hàng"
            type="is-primary"
            size="is-normal"
            @click="isComponentModalActive = true"
            />

            <b-modal
            v-model="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-label="Example Modal"
            aria-modal
            >
              <template #default="props">
                  <addCustomer
                  @close="props.close"
                  :active.sync="isComponentModalActive"
                  ></addCustomer>
              </template>
            </b-modal>
      </div>
    </div>
    <div class=" w-full px-2">
        <b-field label="Tìm kiếm">
          <b-input v-model="search_query" />
      </b-field>
    </div>
    <div class="w-full mt-8">
      <!-- <listCustomer :filterdata = customers ></listCustomer> -->

        <b-table class="mx-2"
            
            :data="customers"
            :paginated="isPaginated"
            :loading="loading"
            
            :per-page="perPage"
            :striped="isStriped"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :pagination-position="paginationPosition"
            :pagination-rounded="isPaginationRounded"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">

            <b-table-column field="name" label="Họ tên"  v-slot="props" >
                {{ props.row.name }}
            </b-table-column>

            <b-table-column field="birthDay" label="Năm sinh" centered v-slot="props">
                <span class="tag is-success">
                    {{ getFormatDate(props.row.birthDay)}}
                </span>
            </b-table-column>

            <b-table-column field="phone" label="Số điện thoại" v-slot="props">
                {{ props.row.phone }}
            </b-table-column>

            <b-table-column field="cmd" label="CCCD/CMND"  v-slot="props">
                {{ props.row.cmd }}
            </b-table-column>
            <b-table-column field="Email" label="Email"  v-slot="props">
                {{ props.row.email }}
            </b-table-column>

            <b-table-column label="Giới tính" v-slot="props">
                <span>
                    <b-icon pack="fas"
                        :icon="props.row.sex === 'Nam' ? 'mars' : 'venus'">
                    </b-icon>
                    {{ props.row.sex }}
                </span>
            </b-table-column>

             <b-table-column field="address" label="Địa chỉ"  v-slot="props">
                {{ props.row.address }}
            </b-table-column>

             <b-table-column label="Thao tác" v-slot="props">
                <span @click="CustomerEdit(props.row)" class="px-3 border border-teal-500 text-teal-500 mx-1 cursor-pointer">
                    Sửa
                </span>
                 <b-modal
                    v-model="isComponentModalEditActive"
                    has-modal-card
                    trap-focus
                    :destroy-on-hide="false"
                    aria-role="dialog"
                    aria-label="Example Modal"
                    aria-modal
                    >
                    <template #default="props">
                        <formEditcustomer
                        v-model="model"
                        :unit.sync="model"
                        @close="props.close"
                        :active.sync="isComponentModalEditActive"
                        ></formEditcustomer>
                    </template>
                </b-modal>
                <span @click="CustomerDelete(props.row)" class="px-3 border border-red-500 text-red-500 mx-1 cursor-pointer">
                    Xoá
                </span>
            </b-table-column>
        </b-table>
    </div>
  </div>
</template>

<script>
import addCustomer from "~/components/addCustomer/addCustomer.vue";
import formEditcustomer from "~/components/formEditcustomer/formEditcustomer.vue";
import moment from 'moment';
export default {
  middleware: ['check-auth','authenticated'],
    components : {addCustomer, formEditcustomer},
    async fetch(){
        this.$store.commit('customer/Init', 
        (await this.$axios.get('/customer')).data
    )
    },
  data() {
    return {
        isComponentModalEditActive: false,
        keepFirst: false,
        openOnFocus: false,
        selected: null,
        clearable: false,
        search_query: '',
        isPaginated: true,
        isStriped: true,
        isPaginationSimple: false,
        isPaginationRounded: false,
        paginationPosition: 'bottom',
        currentPage: 1,
        perPage: 10,
        isComponentModalActive: false,
        loading: false,
       model: {
        name : '',
        phone: '',
        address: '',
        email:'',
        idNumber:'',
        birthDay:'',
        sex: 'Nam',
       }
    }
  },
  methods: {
    getFormatDate : function (date) {
          return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
      },
    CustomerDelete(index) {
        var vm = this;
        this.$buefy.dialog.confirm({
        title: 'Xóa dịch vụ ',
        message: `Bạn thật sự muốn xóa khách hàng này chứ! <br> Việc này sẽ không thể hủy bỏ`,
        confirmText: 'Tiếp tục',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: async () => {
            await this.$axios.delete('/customer/' + index._id)
            this.$buefy.toast.open(` Đã xóa khách hàng ${index.name} !` );
            vm.refresh();
        }
    })
    },
    CustomerEdit(item) {
        this.isComponentModalEditActive = true;
        this.model = item;
        //this.$store.commit("customer/storeCustomer", item)
       //this.$store.dispatch('customer/customer',item)
    },
    refresh(){
        this.$store.dispatch('customer/init')
    }
  },
  computed: {
    customers() {
        return this.$store.state.customer.data
    },
    
    //   filter:  function() {
    //   var name_re = new RegExp(this.search_query, 'i')
    //   var customers = this.$store.state.customer.data
    //   var data = []
    //   for (var i in customers) {
    //     if (customers[i].name.match(name_re) || customers[i].phone.match(name_re)) {
    //       data.push(customers[i])
    //     }
    //   }
    //   return data
    // }

  },
  watch: {},
  mounted() {
    var vm = this;
    vm.$nextTick(async () => {
      
    });
    
  },
};
</script>

<style>

</style>