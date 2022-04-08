<template>
  <div class="flex flex-wrap items-center w-full h-screen justify-center">
    <div class="flex flex-wrap w-3/5 items-center h-3/4 bg-white rounded-xl">
      <div class="w-1/2 h-full rounded-tl-xl rounded-bl-xl" style = "background-image: linear-gradient(to right, #01b9f7, #00c2f3, #00caeb, #00d2e1, #03d8d4); overflow:hidden">
        <img src= "~/assets/images/login-bg.png" class="w-full relative bottom-8"/>
      </div>
      <div class="w-1/2 h-full rounded-tr-xl rounded-br-xl p-24 flex flex-col">
            <h2 class="font-bold text-3xl mb-8">Hello ! Welcome back</h2>
            <span class="font-normal text-lg mb-8">Log in with your data that you entered during Your registration</span>
            <div class="w-full  bg-white ">
              <form @submit.prevent="onSubmit" class="w-full">
                <section class="w-full flex flex-wrap justify-between">
                <div class="w-full mb-4">
                    <b-field label="Tài khoản" >
                        <b-input v-model="model.email" class="shadow-md" ></b-input>
                    <!-- <div class="text-red-500 mt-2 error" v-if="$v.model.domain.$error">Không được bỏ trống</div> -->
                    </b-field>
                </div>
                <div class="w-full mb-4">
                    <b-field label="Mật khẩu" >
                        <b-input v-model="model.password" class="shadow-md"></b-input>
                    <!-- <div class="text-red-500 mt-2 error" v-if="$v.model.domain.$error">Không được bỏ trống</div> -->
                    </b-field>
                    <div class="text-xs font-semibold text-right text-blue-500">Quên mật khẩu</div>
                </div>
                <div class="w-full">
                    <button class="block w-full px-16 py-2 bg-orange-500 text-white font-bold mt-4" native-type="submit">Đăng nhập</button>
                </div>
                </section>
              </form>
                <div class="text-sm font-semibold text-left  mt-4">Bạn không có tài khoản? <a class="text-blue-500">Đăng ký ngay!</a></div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  layout: "auth",
  data() {
    return {
     
      isLogin: true,
      model : {
        email: "",
        password: "",
      }
    };
  },
  methods: {
    toast() {
      this.$buefy.toast.open({
        message: "Sai thông tin đăng nhập ! Vui lòng kiểm tra lại",
      });
    },
    onSubmit() {
      this.$store
        .dispatch("auth/authenticateUser", {
          email: this.model.email,
          password: this.model.password,
          isLogin: this.isLogin,
        })
        .then((result) => {
          
          if (result.success) {
            this.$axios.get('https://nuxt-login-40b65-default-rtdb.firebaseio.com/user.json').then((response) => {
            const userArray = []
            for(const key in response.data){
                userArray.push({...response.data[key],id:key})
            }
            let email = localStorage.getItem("email")
            const data = userArray.filter(item => item.email == email)
             localStorage.setItem('user',JSON.stringify(data[0]))
          })
          this.$router.push("/")
          }
        })
        .catch((error) => {
          this.toast();
        });
    },
  },
  computed: {},
  watch: {},
  mounted() {
    var vm = this;
    vm.$nextTick(() => {});
  },
};
</script>

<style>

</style>