<template>
    <div class="w-full p-8">
       <div class="title w-full ml-2">
        <i class="fas fa-bars mr-2 text-xl inline-block"></i>
        <h2 class="font-bold text-2xl inline-block">Đăng ký dịch vụ</h2>
      </div>
      <div class="w-full p-8 bg-white mx-auto mt-16">
        <section class="w-full flex flex-wrap justify-between">
          <div class="w-1/2 px-2 mb-4">
            <b-field label="Tên miền" >
                <b-input v-model="model.domain"  :class="{ ' border border-red-500 rounded-sm' : $v.model.domain.$error }"></b-input>
                <div class="text-red-500 mt-2 error" v-if="$v.model.domain.$error">Không được bỏ trống</div>
            </b-field>
          </div>
           <div class="w-1/2 px-2 mb-4">
            <b-field label="Khách hàng" >
              <b-autocomplete
                v-model="model.customer"
                placeholder="Chọn khách hàng"
                :data="filteredCustomer"
                field="name" 
                :class="{ ' border border-red-500 rounded-sm' : $v.model.customer.$error }"
            >
            </b-autocomplete>
            <div class="text-red-500 mt-2 error" v-if="$v.model.customer.$error">Không được bỏ trống</div>
              <!-- <b-select placeholder="Chọn khách hàng" v-model="model.customer">
                  <option
                      v-for="option in listCustomer"
                      :value="option.name"
                      :key="option.id">
                      {{ option.name }} - {{option.phone}}
                  </option>
              </b-select> -->
            </b-field>
          </div>
          <div class="w-1/2 px-2 mb-4">
            <b-field label="Ngày bắt đầu">
                <el-date-picker
                class="w-full"
                  v-model="model.startDate"
                  type="date"
                  placeholder="Chọn ngày"
                  format="yyyy/MM/dd"
                  value-format="yyyy-MM-dd"
                  :class="{ ' border border-red-500 rounded-sm' : $v.model.startDate.$error }">
                </el-date-picker>
                <div class="text-red-500 mt-2 error" v-if="$v.model.startDate.$error">Không được bỏ trống</div>
            </b-field>
          </div>
           <div class="w-1/2 px-2 mb-4">
            <b-field label="Ngày hết hạn">
                <el-date-picker
                  v-model="model.endDate"
                  type="date"
                  placeholder="Chọn ngày"
                  format="yyyy/MM/dd"
                  value-format="yyyy-MM-dd"
                  :class="{ ' border border-red-500 rounded-sm' : $v.model.endDate.$error }">
                </el-date-picker>
                <div class="text-red-500 mt-2 error" v-if="$v.model.endDate.$error">Không được bỏ trống</div>
            </b-field>
          </div>
          <div class="w-1/2 px-2 mb-4">
             <div class="w-full flex flex-wrap justify-between ">
               <div class="w-1/2 pr-2 ">
                  <b-field label="Dịch vụ">
                      <b-select placeholder="Chọn dịch vụ" :class="{ ' border border-red-500 rounded-sm' : $v.model.service.$error }" v-model="model.service">
                          <option v-for="item in services" :key="item" :value="item" >{{item}}</option>
                      </b-select>
                      <div class="text-red-500 mt-2 error" v-if="$v.model.service.$error">Không được bỏ trống</div>
                  </b-field>
               </div>
                <div class="w-1/2 pl-2 ">
                  <b-field label="Nhà cung cấp">
                      <b-select placeholder="Chọn dịch vụ" class="w-full" v-model="model.brand" >
                          <option v-for="item in this.brand" :key="item.id" :value="item.brandName" class="w-full">{{item.brandName}}</option>                         
                      </b-select>
                  </b-field>
               </div>
            </div>
          </div>
          <div class="w-1/2 px-2 mb-4">
            <div class="w-full flex flex-wrap justify-between ">
                <div class="w-1/2 pr-2 ">
                  <b-field label="Gói dịch vụ" >
                    <b-select placeholder="Gói dịch vụ" :class="{ ' border border-red-500 rounded-sm' : $v.model.packet.$error }" v-model="model.packet" >
                          <option v-for="item in selectedPacket[0]" :key="item.serviceName" :value="item.serviceName" >{{item.serviceName}}</option>
                          
                    </b-select>
                    <div class="text-red-500 mt-2 error" v-if="$v.model.packet.$error">Không được bỏ trống</div>
                  </b-field>
                </div>
                <div class="w-1/2 pl-2">
                  <b-field label="Chi phí" >
                    <b-input  disabled v-model="selectedPrice"></b-input>
                  </b-field>
                </div>
            </div>
          </div>
          
        </section>
        <div class="text-center">
          <button @click="submitForm" class="inline-block px-16 py-2 bg-orange-500 text-white font-bold mt-8">Đăng ký</button>
        </div>
      </div>
    </div>
</template>

<script>
import { required, numeric,maxLength,minLength } from 'vuelidate/lib/validators'
  export default {
    middleware: ['check-auth','authenticated'],
    data(){
      return {
        today: new Date(),
        model  : {
          customer: '',
          domain: '',
          startDate: null,
          endDate: null,
          service : null,
          packet: null,
          brand : null,
          price : null
        },
        brand: this.$store.state.brand.data,
        listCustomer : this.$store.state.customer.data,
        servicePacket: this.$store.state.servicepack.data
      }
    },
     validations: {
      model:  {           
              domain: {
                  required,
              },
              customer: {
                  required,
              },
              startDate: {
                  required,
              },
              endDate: {
                  required,
              },
              service: {
                  required,
              },
              packet : {
                  required,
              },
          }
    },
    computed: {
      filteredCustomer() {
            return this.listCustomer.filter(option => {
                return (
                    option.name
                        .toString()
                        .toLowerCase()
                        .indexOf(this.model.customer.toLowerCase()) >= 0
                )
            })
        },
        services() {
            return new Set(this.servicePacket.map( c => c.serviceName));
          },
          
        selectedPacket() {
          if( this.model.service == null ) {
            return [];
          }
          return this.servicePacket
            .filter( 
              c => c.serviceName == this.model.service )
            .map( c => c.price );
        },
        selectedPrice() {
          if( this.model.packet == null ) {
            return [];
          }
          return this.selectedPacket[0]
            .filter( 
              c => c.serviceName == this.model.packet )
            .map( c => c.price );
        }
    },
    watch: {
        
    },
    methods: {
        clearDate () {
            this.selected = null
        },
        submitForm () {
            this.$v.model.$touch()
            if(this.$v.model.$invalid)
                {
                    this.$buefy.toast.open(`Thông tin bắt buộc không được để trống`);
                    return          
                }
            var insertData = {}
            var itemStatus = ""
            var s = new Date(this.model.startDate)
            var e = new Date(this.model.endDate)
            var ss = s.getTime()
            var ee = e.getTime()
           var tinh = parseInt((ee - ss)/(24*3600*1000))
            if(tinh > 30){
                itemStatus = "Đang sử dụng"
            }
            
            else if (tinh <= 30 && tinh >= 1) {
                itemStatus = "Sắp hết hạn"
            }
            else if (tinh <= 1 && tinh >= 0) {
                itemStatus = "Hết hạn"
            }
          insertData = {
              id: null,
              customer: this.model.customer,
              domain: this.model.domain,
              endDate: this.model.endDate,
              price: this.selectedPrice[0],
              service: this.model.service,
              startDate: this.model.startDate,
              status: itemStatus,
              packet: this.model.packet,
              brand : this.model.brand,
          }
          
          this.$store.commit('services/ADD', insertData);
          this.$buefy.toast.open(`Thêm thành công !`);
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
select, .select,.el-date-editor.el-input, .el-date-editor.el-input__inner{
  width: 100%;
} 
</style>


