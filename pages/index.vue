<template>
  <div class="w-full p-8">
    <div class="w-full">
      <div class="title w-full ml-2">
        <i class="fas fa-bars mr-2 text-xl inline-block"></i>
        <h2 class="font-bold text-2xl inline-block">Dashboard</h2>
      </div>
      <div class="w-full flex justify-between mt-8">
        <div class="item w-1/5 mx-2  rounded-md bg-white">
          <div class="p-4 flex flex-col flex-wrap items-center border-b">
            <span class="text-3xl"><i class="fas fa-globe-asia"></i></span>
            <span class="text-xl font-semibold mt-2">Tên miền</span>
          </div>
          <div class="p-4 flex flex-col flex-wrap">
            <ul>
              <li>
                <a class="block text-base"
                  >Dịch vụ đang sử dụng <span>123</span></a
                >
              </li>
              <li>
                <a class="block text-base"
                  >Dịch vụ sắp hết hạn <span>12</span></a
                >
              </li>
              <li>
                <a class="block text-base">Dịch vụ hết hạn <span>1</span></a>
              </li>
            </ul>
            <div class="text-center">
              <nuxt-link to="/register" class="w-full inline-block bg-green-700 px-4 py-2 text-white rounded-md mt-4">
                Đăng ký
                </nuxt-link>
            </div>
          </div>
        </div>
        <div class="item w-1/5 mx-2  rounded-md bg-white">
          <div class="p-4 flex flex-col flex-wrap items-center border-b">
            <span class="text-3xl"><i class="fas fa-server"></i></span>
            <span class="text-xl font-semibold mt-2">Hosting</span>
          </div>
          <div class="p-4 flex flex-col flex-wrap">
            <ul>
              <li>
                <a class="block text-base"
                  >Dịch vụ đang sử dụng <span>123</span></a
                >
              </li>
              <li>
                <a class="block text-base"
                  >Dịch vụ sắp hết hạn <span>12</span></a
                >
              </li>
              <li>
                <a class="block text-base">Dịch vụ hết hạn <span>1</span></a>
              </li>
            </ul>
            <div class="text-center">
              <nuxt-link to="/register" class="w-full inline-block bg-green-700 px-4 py-2 text-white rounded-md mt-4">
                Đăng ký
                </nuxt-link>
            </div>
          </div>
        </div>
        <div class="item w-1/5 mx-2 rounded-md bg-white">
          <div class="p-4 flex flex-col flex-wrap items-center border-b">
            <span class="text-3xl"><i class="fas fa-shield-alt"></i></span>
            <span class="text-xl font-semibold mt-2">SSL</span>
          </div>
          <div class="p-4 flex flex-col flex-wrap">
            <ul>
              <li>
                <a class="block text-base"
                  >Dịch vụ đang sử dụng <span>123</span></a
                >
              </li>
              <li>
                <a class="block text-base"
                  >Dịch vụ sắp hết hạn <span>12</span></a
                >
              </li>
              <li>
                <a class="block text-base">Dịch vụ hết hạn <span>1</span></a>
              </li>
            </ul>
            <div class="text-center">
              <nuxt-link to="/register" class="w-full inline-block bg-green-700 px-4 py-2 text-white rounded-md mt-4">
                Đăng ký
                </nuxt-link>
            </div>
          </div>
        </div>
        <div class="item w-1/5 mx-2 rounded-md bg-white">
          <div class="p-4 flex flex-col flex-wrap items-center border-b">
            <span class="text-3xl"><i class="far fa-envelope"></i></span>
            <span class="text-xl font-semibold mt-2">Email doanh nghiệp</span>
          </div>
          <div class="p-4 flex flex-col flex-wrap">
            <ul>
              <li>
                <a class="block text-base"
                  >Dịch vụ đang sử dụng <span>123</span></a
                >
              </li>
              <li>
                <a class="block text-base"
                  >Dịch vụ sắp hết hạn <span>12</span></a
                >
              </li>
              <li>
                <a class="block text-base">Dịch vụ hết hạn <span>1</span></a>
              </li>
            </ul>
            <div class="text-center">
              <nuxt-link to="/register" class="w-full inline-block bg-green-700 px-4 py-2 text-white rounded-md mt-4">
                Đăng ký
                </nuxt-link>
            </div>
          </div>
        </div>
        <div class="item w-1/5 mx-2 rounded-md bg-white">
          <div class="p-4 flex flex-col flex-wrap items-center border-b">
            <span class="text-3xl"><i class="fas fa-tools"></i></span>
            <span class="text-xl font-semibold mt-2">Bảo trì</span>
          </div>
          <div class="p-4 flex flex-col flex-wrap">
            <ul>
              <li>
                <a class="block text-base"
                  >Dịch vụ đang sử dụng <span>123</span></a
                >
              </li>
              <li>
                <a class="block text-base"
                  >Dịch vụ sắp hết hạn <span>12</span></a
                >
              </li>
              <li>
                <a class="block text-base">Dịch vụ hết hạn <span>1</span></a>
              </li>
            </ul>
            <div class="text-center">
              <nuxt-link to="/register" class="w-full inline-block bg-green-700 px-4 py-2 text-white rounded-md mt-4">
                Đăng ký
                </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex justify-between mt-12">
      <div class="w-2/3 ml-2 mr-4 px-8 py-8 bg-white rounded-md">
        <linechart class="mt-8" :linechartData="linechartData" :options="linechartOptions" ></linechart>
      </div>
      <div class=" w-1/3 mr-2 ml-4 px-2 py-8 bg-white rounded-md">
        <piechart  :piechartData="piechartData" :options="pichartOptions" ></piechart>
      </div>
    </div>

    <div class="w-full flex justify-between mt-12">
      <div class="w-1/2 bg-white rounded-md p-4 ml-2 mr-4">
          <div class="title w-full ml-2 ">
            <h2 class="font-bold text-2xl inline-block">Lịch sử</h2>
          </div>
          <b-table class="mx-2"
            :data="getlistService"
            :per-page="perPage"
            :striped="isStriped"
            :current-page.sync="currentPage"
            >

            <b-table-column field="domain" label="Tên miền"  v-slot="props">
                {{ props.row.domain }}
            </b-table-column>

            <b-table-column field="customer" label="Khách hàng" v-slot="props">
                {{ props.row.customer }}
            </b-table-column>

            <b-table-column field="service" label="Dịch vụ" v-slot="props">
                {{ props.row.service }}
            </b-table-column>

            <b-table-column field="startDate" label="Ngày bắt đầu" v-slot="props">
                <span class="tag is-success">
                    {{ new Date(props.row.startDate).toLocaleDateString() }}
                </span>
            </b-table-column>

        </b-table>
      </div>
      <div class="w-1/2 bg-white rounded-md p-4 mr-2 ml-4">
        <div class="title w-full ">
          <h2 class="font-bold text-2xl inline-block">Thông tin khách hàng</h2>
        </div>
        <section>    
          <b-table class="mx-2"
              :data="getlistCustomer"
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

              <b-table-column field="name" label="Họ tên"  v-slot="props">
                  {{ props.row.name }}
              </b-table-column>

              <b-table-column field="birthDay" label="Năm sinh" centered v-slot="props">
                  <span class="tag is-success">
                      {{ new Date(props.row.birthDay).toLocaleDateString() }}
                  </span>
              </b-table-column>

              <b-table-column field="phone" label="Số điện thoại" v-slot="props">
                  {{ props.row.phone }}
              </b-table-column>

              <b-table-column label="Giới tính" v-slot="props">
                  <span>
                      <b-icon pack="fas"
                          :icon="props.row.gender === 'Nam' ? 'mars' : 'venus'">
                      </b-icon>
                      {{ props.row.gender }}
                  </span>
              </b-table-column>
          </b-table>
      </section>
      </div>
      
    </div>
  </div>
</template>

<script>
import linechart from '~/components/chart/linechart'
import piechart from '~/components/chart/piechart'
export default {
  async fetch(){
      this.$store.commit('customer/Init', [
      {id:1,name:"Jesse Nam",birthDay:"2016-10-15",gender:"Nam",phone : "0987654321",idNumber : "0123123123211", address : "Vung Tau 1" },
      {id:2,name:"Jesse Trung",birthDay:"2016-10-15",gender:"Nữ", phone : "0987654322",idNumber : "0123123123212",address : "Vung Tau 2" },
      {id:3,name:"Jesse Linh",birthDay:"2016-10-15",gender:"Nữ", phone : "0987654323",idNumber : "0123123123213", address : "Vung Tau 3" },
      {id:4,name:"Jesse Cường",birthDay:"2016-10-15",gender:"Nam", phone : "0987654324",idNumber : "0123123123214", address : "Vung Tau 4" },
      {id:5,name:"Jesse 5",birthDay:"2016-10-15",gender:"Nam", phone : "0987654325",idNumber : "0123123123215", address: "Vung Tau 5" },
      {id:6,name:"Jesse 6",birthDay:"2016-10-15",gender:"Nữ", phone : "0987654326",idNumber : "0123123123216", address : "Vung Tau 6" },
  ] )
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
  components : {linechart,piechart},
  middleware: ['check-auth','authenticated'],
  layout: "default",
  created() {
    // this.listService = this.$store.state.services.data
  },
  data() {
    return {
      linechartData : {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets:[{
          label:"Doanh thu",
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          stack: 'combined',
          data: [400, 200, 120, 390, 100, 400, 390, 800, 400, 200, 120, 110],
          type: 'bar'
        },
        {
          label:"Doanh thu 1",
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 4,
          stack: 'combined',
          data: [400, 200, 120, 390, 100, 400, 390, 800, 400, 200, 120, 110]
        }]
      },
      piechartData : {
        labels: ['Tên miền', 'Hosting', 'Email', 'SSL', 'Bảo trì' ],
        datasets:[{
          label:"Dịch vụ",
           backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            '#4bcc96',
            '#5710A3'
          ],
          hoverOffset: 4,
          data: [40, 20, 20, 10  ,10]
        }]
      },
      linechartOptions:{
        type: 'line',
        maintainAspectRatio: false,
        responsive: true,
        title : {
          display: true,
          position: "bottom",
          text : "Thống kê doanh số theo năm"
        },
      },
      pichartOptions : {
        title : {
          display: true,
          position: "bottom",
          text : "( Đơn vị % )"
        }
      },
      customer : [],
      listService : [],
      isPaginated: true,
      isStriped: true,
      isPaginationSimple: false,
      isPaginationRounded: false,
      paginationPosition: 'bottom',
      currentPage: 1,
      perPage: 6
    };
  },
  computed: {
    getlistCustomer() {
      return this.$store.state.customer.data
    },
    getlistService() {
      return this.$store.state.services.model.slice(0,7)
    }
  },
  watch: {},
  mounted() {
    var vm = this;
    vm.$nextTick(() => {});
  },
};
</script>

<style>
.item ul li a {
  padding: 5px;
}

.item ul li a span {
  padding: 5px;
  font-size: 13px;
  background: #ed5811e0;
  color: white;
  margin-left: 5px;
  border-radius: 5px;
}

.item ul li:first-child a span {
  background: #0095ff;
}
.item ul li:last-child a span {
  background: red;
}

</style>