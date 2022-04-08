<template>
    <div class = " flex flex-wrap items-center relative">
        <span class="text-white">Xin chào <strong class="text-white">{{model.username}}</strong></span>
        <img src = "~/assets/images/avata.jpg" class="h-8 mx-4 rounded-full" /> 
        <span @click="isShow = !isShow" class=""><i class="fas fa-angle-down text-white"></i></span>
        <div class="flex flex-wrap w-48 absolute" style="top: 46px; right:0;">
                <a @click="onLogout" v-if="isShow" class="font-semibold w-48 h-8 flex flex-wrap items-center justify-center bg-white ml-8">Đăng xuất</a>
        </div>
 
    </div>
</template>

<script>
    export default {
        props: {
            model:{}
        },
        data() {
            return {
                isShow: false,
                // model :{}
            }
        },
        computed: {
           
        },
        methods: {
            onLogout() {
                this.$buefy.dialog.confirm({
                title: 'Đăng xuất',
                message: `Bạn thật sự muốn đăng xuất?`,
                confirmText: 'Tiếp tục',
                type: 'is-danger',
                hasIcon: true,
                onConfirm: () => {
                     this.$store.dispatch("auth/logout");
                    this.$router.push("/login");
                }
            })
            },
        },
    mounted() {
        var vm = this;
        vm.$nextTick(()=>{
            // let data = JSON.parse(localStorage.getItem("user"));
            // vm.model = data;
        })
        },
    }
</script>