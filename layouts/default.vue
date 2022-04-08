<template>
  <div class="flex flex-wrap w-full ">
      <div class="w-full h-14 flex flex-wrap px-8 items-center justify-between bg-gray-700">
        <img src= "~/assets/images/logo-scloud.png" class="h-12"/>
        <userinfo :model="userInfo"></userinfo>
      </div>
      <div class="w-1/6 h-auto max-w-xs min-h-screen">
         <sidebar-menu :menu="navList" class="h-full min-h-screen" :hideToggle= 'true' />
      </div>
      <div class=" h-full min-h-screen w-5/6 max-w-5/6" style ="background-color: #EBECF2">
        <nuxt class="h-full min-h-screen"/>
        <div class=" h-12 bg-white w-full right-0 relative flex items-center justify-end pr-12">
            <span class="font-semibold">Copyright 2022 © Công ty TNHH Công Nghệ Scloud</span>
        </div>
      </div>
       
  </div>
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu";
import userinfo from '~/components/userinfo/userinfo'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
  export default {
  components: {
    SidebarMenu, userinfo
  },
    data(){
      return {
          userInfo: {},
          isShowNav: true,
          selectedItem : {},
          navList: [
            {
              header: true,
              title: "Danh mục",
              
            },
            {
              href: "/",
              title: "Dashboard",
              icon: "fas fa-home"
            },
            {
              title: "Dịch vụ",
              icon: "fa fa-eye",
              child: [
                {
                  href: "/service",
                  title: "Tất cả"
                },
                {
                  href: "/service/domain",
                  title: "Tên miền"
                },
                {
                  href: "/service/hosting",
                  title: "Hosting"
                },
                {
                  href: "/service/ssl",
                  title: "SSL"
                },
                {
                  href: "/service/email",
                  title: "Email doanh nghiệp"
                },
                {
                  href: "/service/maintenance",
                  title: "Bảo trì"
                }
              ]
            },
            {
              href: "/register",
              title: "Đăng ký dịch vụ",
              icon: "fas fa-pen-square",
            },
            {
              href: "/servicepacket",
              title: "Gói dịch vụ",
              icon: "fas fa-cube",
            },
            {
              href: "/domainprice",
              title: "Bảng giá tên miền",
              icon: "fas fa-search-dollar",
            },
            {
              title: "Khách hàng",
              icon: "fa fa-user",
              child: [
                {
                  href: "/customer",
                  title: "Danh sách"
                }
              ]
            }
          ]
      }
    },
    computed: {

    },
    watch: {

    },
    created(){
       
    },
    methods: {
        toggleNavbar(item){
            this.selectedItem.active = false;
            this.selectedItem = item;
            this.selectedItem.active = true;
            this.$router.push(item.link);
        },
    },
    mounted(){
      var vm = this;
      vm.$nextTick(async ()=>{
        let data = JSON.parse(localStorage.getItem("user"));
        vm.userInfo = data
      })
    }
  }
</script>

<style>

.v-sidebar-menu .vsm--arrow:after{
  font-weight: 900
}

.v-sidebar-menu {
  position: static
}


</style>