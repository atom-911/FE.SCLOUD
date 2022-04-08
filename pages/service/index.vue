<template>
<div class="w-full p-8">
  <div class="title w-full ml-2">
        <i class="fas fa-bars mr-2 text-xl inline-block"></i>
        <h2 class="font-bold text-2xl inline-block">Thông tin dịch vụ</h2>
    </div>
    <div class="w-full flex flex-wrap justify-between items-center">
    <b-field class=" pl-2">
     <div class="flex">
          <b-checkbox-button class="font-semibold"
            v-for="items in options" :key="items.id"  :native-value="items.status" :type="items.type" v-model="search_query.status" style="margin-right: 2rem">
            {{ items.status}} ({{getLengthStatus(items.status)}})
          </b-checkbox-button>
        </div>
    </b-field>
    <b-field >
          <b-input class="pr-2 mb-4 " v-model="search_query.domain" placeholder="Tìm kiếm" />
    </b-field>
    </div>
    <div class="w-full">
      <b-table class="mx-2"
            :data=" filter"
            :paginated="isPaginated"
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

            <b-table-column field="domain" label="Tên miền"  v-slot="props">
                {{ props.row.domain }}
            </b-table-column>

            <b-table-column field="customer" label="Khách hàng" v-slot="props">
                {{ props.row.customer }}
            </b-table-column>

            <b-table-column field="service" label="Dịch vụ" v-slot="props">
                {{ props.row.service }}
            </b-table-column>

            <b-table-column field="brand" label="Nhà cung cấp" v-slot="props">
                {{ props.row.brand }}
            </b-table-column>

            <b-table-column field="status" label="Trạng thái" v-slot="props">
                {{ props.row.status }}
            </b-table-column>

            <b-table-column field="startDate" label="Ngày bắt đầu" v-slot="props">
                <span class="tag is-success">
                    {{ props.row.startDate}}
                </span>
            </b-table-column>

            <b-table-column field="endDate" label="Ngày kết thúc" v-slot="props">
                <span class="tag is-danger">
                    {{ props.row.endDate }}
                </span>
            </b-table-column>

            <b-table-column field="packet" label="Gói dịch vụ" v-slot="props">
                {{ props.row.packet }}
            </b-table-column>

            <b-table-column field="price" label="Chi phí"  v-slot="props">
                {{ props.row.price }}
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
                      <formEditservice
                        @close="props.close"
                        :active.sync="isComponentModalActive"
                      ></formEditservice>
                  </template>
                  </b-modal>
                <span @click="handleDelete(props.row)" class="px-3 border border-red-500 text-red-500 mx-1 cursor-pointer">
                    Xoá
                </span>
            </b-table-column>
        </b-table>
  </div>
</div> 
</template>

<script>
import formEditservice from "~/components/formEditservice/formEditservice.vue";
  export default {
    middleware: ['check-auth','authenticated'],
    components : {formEditservice},
    async fetch(){
        this.$store.commit('services/Init', [
          {
            id: 123,
            domain:"itvungtau.com1",
            customer: "Nguyễn Văn Cường",
            service: "SSL",
            brand: "Tadu",
            status:  "Đang sử dụng",
            startDate: "2016/10/14",
            endDate: "2022/10/14",
            packet: "2",
            price: "350000"
          },
          {
            id: 1244,
            domain:"itvungtau.com11",
            customer: "Nguyễn Văn Cường",
            service: "Tên miền",
            brand: "Mắt bão",
            status: "Đang sử dụng",
            startDate: "2016/10/14",
            endDate: "2022/10/14",
            packet: "2",
            price: "350000"
          },
          {
            id: 1255,
            domain:"itvungtau.com12",
            customer: "Nguyễn Văn Cường",
            service: "Tên miền",
            brand: "Tadu",
            status: "Đang sử dụng",
            startDate: "2016/10/14",
            endDate: "2022/10/14",
            packet: "2",
            price: "350000"
          },
          {
            id: 1266,
            domain:"itvungtau.com13",
            customer: "Nguyễn Văn Cường",
            service: "Tên miền",
            brand: "Tadu",
            status: "Đang sử dụng",
            startDate: "2016/10/14",
            endDate: "2022/10/14",
            packet: "2",
            price: "350000"
          },
          {
            id: 1277,
            domain:"itvungtau.com1",
            customer: "Nguyễn Văn Cường",
            service: "Tên miền",
            brand: "Tadu",
            status: "Đang sử dụng",
            startDate: "2016/10/14",
            endDate: "2022/10/14",
            packet: "2",
            price: "350000"
          },
          {
            id: 1223,
            domain:"itvungtau.com14",
            customer: "Nguyễn Văn Cường",
            service: "Tên miền",
            brand: "Tadu",
            status: "Đang sử dụng",
            startDate: "2016/10/14",
            endDate: "2022/10/14",
            packet: "2",
            price: "350000"
          },
          {
            id: 1212,
            domain:"itvungtau.com15",
            customer: "Nguyễn Văn Cường",
            service: "Tên miền",
            brand: "Tadu",
            status: "Đang sử dụng",
            startDate: "2016/10/14",
            endDate: "2022/10/14",
            packet: "2",
            price: "350000"
          },
          {
            id: 223,
            domain:"itvungtau.com2",
            customer:"Nguyễn Văn Cường",
            service: "Tên miền",
            brand: "Tadu",
            status: "Đang sử dụng",
            startDate: "2016/10/14",
            endDate: "2022/10/14",
            packet: "2",
            price: "350000"
          },
          {
            id: 334,
            domain:"itvungtau.com3",
            customer: "Nguyễn Văn Cường",
            service: "Hosting",
            brand: "Scloud",
            status: "Sắp hết hạn",
            startDate: "2016/10/14",
            endDate: "2022/10/14",
            packet: "2",
            price: "350000"
          },
          {
            id: 335,
            domain:"itvungtau.com4",
            customer: "Nguyễn Văn Cường",
            service: "Tên miền",
            brand: "Tadu",
            status: "Hết hạn",
            startDate: "2021/10/14",
            endDate: "2022/10/14",
            packet: "2",
            price: "350000"
          },
          {
            id: 336,
            domain:"itvungtau.com5",
            customer: "Nguyễn Văn Cường",
            service: "Tên miền",
            brand: "Tadu",
            status: "Hết hạn",
            startDate: "2021/10/14",
            endDate: "2022/10/14",
            packet: "2",
            price: "350000"
          },
          {
            id: 337,
            domain:"itvungtau.com6",
            customer: "Nguyễn Văn Cường",
            service: "Tên miền",
            brand: "Tadu",
            status: "Hết hạn",
            startDate: "2021/10/14",
            endDate: "2022/10/14",
            packet: "2",
            price: "350000"
          },
          {
            id: 338,
            domain:"itvungtau.com7",
            customer: "Nguyễn Văn Cường",
            service: "Tên miền",
            brand: "Tadu",
            status: "Hết hạn",
            startDate: "2021/10/14",
            endDate: "2022/10/14",
            packet: "2",
            price: "350000"
          },
      ] )
    },
    data() {
      return {
        search_query: {
          domain:'',
          status: []
        },
        options: [{id :1, status: "Đang sử dụng",type: "is-success"}, {id :2,status: "Sắp hết hạn", type: "is-warning"}, {id : 3,status:"Hết hạn", type:"is-danger"}],
        isComponentModalActive: false,
        data: [],
        isPaginated: true,
        isStriped: true,
        isPaginationSimple: false,
        isPaginationRounded: false,
        paginationPosition: 'bottom',
        currentPage: 1,
        perPage: 10,
        model : {
            // id: null,
            // domain: null,
            // customer: null,
            // service: null,
            // brand: null,
            // status: null,
            // startDate: null,
            // endDate: null,
            // packet: null,
            // price: null,
        },
        
      }
    },
    computed: {
      service() {
          return this.$store.state.services.model
      },
      filter: function() {
          var domain_re = new RegExp(this.search_query.domain, 'i')
          var data = []
          for (var i in this.service) {
            if ( ( this.service[i].domain.match(domain_re) && 
            this.search_query.status.includes(this.service[i].status ) ) || ((this.search_query.status == "") && ( this.service[i].domain.match(domain_re)) )) 
            {
              data.push(this.service[i])
            }
        } 
        return data      
        },

       
    },
    methods: {
      getLengthStatus(items){
            var statusLength = this.service.filter((item) => item.status == items);
            return statusLength.length;
          },
      handleEdit(item) {
        this.isComponentModalActive = true;
        this.$store.commit("services/storeService", item)
      },
      handleDelete(index) {
            this.$buefy.dialog.confirm({
                title: 'Xóa dịch vụ ',
                message: `Bạn thật sự muốn xóa dịch vụ này chứ! <br> Việc này sẽ không thể hủy bỏ`,
                confirmText: 'Tiếp tục',
                type: 'is-danger',
                hasIcon: true,
                onConfirm: async () => {
                    await this.$store.commit('services/Remove', index);;
                    this.$buefy.toast.open(` Đã xóa dich vụ!` );
                    
                }
            })
      },
      setPage(val) {
        this.page = val
        
      }
    },
    mounted(){
      var vm = this;
      vm.$nextTick(()=>{
        
      })
    }
  }
</script>
<style>
.el-pager li {
  margin : 0 3px;
  border-radius: 0;
}
.modal-background {
    background-color: rgb(10 10 10 / 15%);
}
</style>