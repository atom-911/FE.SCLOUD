<template>
  <div>
   
      <div class="modal-card ">
        <header class="modal-card-head">
          <p class="modal-card-title text-lg font-medium">Thêm khách hàng mới</p>
          <button type="button" class="delete" @click="$emit('close')" />
        </header>
         <form  @submit.prevent="onSave">
        <section class="modal-card-body w-full">
        
            <div class="w-full flex mb-4">
                <div class="w-1/2 px-2">
                    <b-field label="Họ tên">
                        <b-input
                            v-model="model.name"
                            placeholder="Họ tên"
                             :class="{ ' border border-red-500 rounded-sm' : $v.model.name.$error }"
                        >
                        </b-input>
                        <div class="text-red-500 mt-2 error" v-if="$v.model.name.$error">Giá trị bắt buộc</div>
                    </b-field>
                    
                </div>
                <div class="w-1/2 px-2 ">
                    <b-field label="Ngày sinh">
                        <el-date-picker
                            v-model="model.birthDay"
                            type="date"
                            placeholder="Pick a Date"
                            format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </b-field>
                </div>
                <div class="w-1/2 px-2 ">
                    <b-field label="Email">
                        <b-input
                        v-model="model.email"
                        placeholder="Email"  
                        >
                        </b-input>
                    </b-field>
                </div>
            </div>  
            <div class="w-full flex mb-4">
                <div class="w-1/2 px-2">
                    <b-field label="Số điện thoại">
                        <b-input
                        v-model="model.phone"
                            type="number"
                            placeholder="Số điện thoại"
                            :class="{ ' border border-red-500 rounded-sm' : $v.model.phone.$error}"
                        >
                        </b-input>
                        <div class="error text-red-500 mt-2" v-if="$v.model.phone.$error">Giá trị bắt buộc (gồm 10 số)</div>
                    </b-field>
                </div>
                <div class="w-1/2 px-2">
                     <b-field label="Căn cước / CMND">
                        <b-input
                        v-model="model.cmd"
                        placeholder="Căn cước / CMND"  
                        >
                        </b-input>
                    </b-field>
                </div>
            </div>  
            
            <div class="w-full flex mb-4">
                <div class="w-3/4 px-2">
                     <b-field label="Địa chỉ">
                        <b-input
                        v-model="model.address"
                            placeholder="Địa chỉ"
                        >
                        </b-input>
                    </b-field>
                </div>
                <div class="w-1/4 px-2 ml-4">
                   <b-field label="Giới tính" >
                        <b-radio v-model="model.sex"
                            name="gender"
                            native-value="Nam" class="mt-2 ">
                            Nam
                        </b-radio>
                        <b-radio v-model="model.sex"
                            name="gender"
                            native-value="Nữ" class="mt-2 ">
                            Nữ
                        </b-radio>
                    </b-field>
                </div>
            </div>  

        </section>
        <footer class="modal-card-foot justify-end">
          <b-button
            class="bg-gradient-to-r from-green-500 to-green-400 text-sm font-medium "
            label="Xác nhận"
            type="submit"
            @click="onSave()" 
          />
        </footer>
        </form>
      </div>
    
  </div>
</template>

<script>
import { required, numeric,maxLength,minLength } from 'vuelidate/lib/validators'
export default {
 
  data() {
    return {
       date: new Date(),
       model: {
        name : '',
        phone: '',
        address: '',
        email:'',
        idNumber:'',
        birthDay:'',
        sex: 'Nam',
       }
    };
  },
  
  validations: {
      model:  {           
              name: {
                  required,
              },
              phone: {
                  required,
                  numeric,
                  minLength: minLength(10),
                  maxLength: maxLength(10)
              },
            //   idNumber: {
            //       required,
            //       numeric,
            //   },
           
          }
  },
  methods: {
    async onSave() {
       this.$v.model.$touch()
    if(this.$v.model.$invalid)
        {
             
            this.$buefy.toast.open(`Thông tin bắt buộc không được để trống`);
            return          
        }
      
        await this.$axios.post('/customer', this.model);
        this.$emit('update:active')
        this.$buefy.toast.open(`Thêm thành công !`);
        this.$store.dispatch('customer/init')
    },
  },
  computed: {},
  watch: {
     
  },
  mounted() {
    var vm = this;
    vm.$nextTick(() => {});
  },
};
</script>

<style>
.modal-card .has-text-primary i {
  color: orange;
}
.modal .animation-content .modal-card {
  margin: 0 auto;
  
}
.modal .modal-card  {
    width: 780px;
    
}
</style>