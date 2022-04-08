<template>
  <div>
    <form >
      <div class="modal-card ">
        <header class="modal-card-head">
          <p class="modal-card-title text-lg font-medium">Sửa thông tin dịch vụ</p>
          <button type="button" class="delete" @click="$emit('close')" />
        </header>
        <section class="modal-card-body w-full flex flex-wrap justify-between">
          <div class="w-1/2 px-2 mb-4">
            <b-field label="Tên miền" >
                <b-input v-model="model.domain" ></b-input>
            </b-field>
          </div>
           <div class="w-1/2 px-2 mb-4">
            <b-field label="Khách hàng" >
                <b-input v-model="model.customer"></b-input>
            </b-field>
          </div>
          <div class="w-1/2 px-2 mb-4">
            <b-field label="Ngày bắt đầu">
                <el-date-picker
                  v-model="model.startDate"
                  type="date"
                  placeholder="Pick a Date"
                  format="yyyy/MM/dd"
                   value-format="yyyy-MM-dd">
                </el-date-picker>
            </b-field>
          </div>
          <div class="w-1/2 px-2 mb-4">
            <b-field label="Ngày hết hạn">
                <el-date-picker
                  v-model="model.endDate"
                  type="date"
                  placeholder="Pick a Date"
                  format="yyyy/MM/dd"
                   value-format="yyyy-MM-dd">
                </el-date-picker>
            </b-field>
          </div>
          <div class="w-1/2 px-2 mb-4">
            <div class="w-full flex flex-wrap justify-between ">
              <div class="w-1/2 pr-2 ">
                <b-field label="Dịch vụ">
                    <b-select placeholder="Chọn dịch vụ" class="w-full" v-model="model.service">
                        <option v-for="item in services" :key="item" :value="item" class="w-full">{{item}}</option>
                    </b-select>
                </b-field>
              </div>
              <div class="w-1/2 pl-2">
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
                <b-field label="Dung lượng" >
                  <b-select placeholder="Gói dịch vụ" v-model="model.packet" >
                    <option v-for="item in selectedPacket[0]" :key="item.serviceName" :value="item.serviceName" >{{item.serviceName}}</option>
                  </b-select>
                </b-field>
              </div>
              <div class="w-1/2 pl-2">
                <b-field label="Chi phí" >
                    <b-input v-model="selectedPrice"></b-input>
                </b-field>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot justify-end">
          <b-button
            class="bg-gradient-to-r from-green-500 to-green-400 text-sm font-medium "
            label="Xác nhận"
            type="is-primary"
             @click="onSave()" 
          />
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
     
      selected: new Date(),
      brand : this.$store.state.brand.data,
      servicePacket: this.$store.state.servicepack.data,
    };
  },
  watch: {
        
    },
  methods: {
    onSave() {
        // this.$v.model.$touch()
        // if(this.$v.model.$invalid)
        // {
        //     this.$buefy.toast.open(`Thông tin bắt buộc không được để trống`);
        //     return          
        // }
            this.$store.commit("services/Update", this.model)
            this.$emit('update:active')
    },
  },
  computed: {
    model : {
          get() {
              return {...this.$store.state.services.service}
          },
          set(value){
              this.$store.commit("services/storeService", value)
          }
      },
    services() {
            return new Set(this.servicePacket.map( c => c.serviceName));
          },
    data() {
            return this.$store.state.services.data
        },      
    selectedPacket() {
      return this.servicePacket
        .filter( 
          c => c.serviceName == this.model.service )
        .map( c => c.price );
    },
    selectedPrice() {
      return this.selectedPacket[0]
        .filter( 
          c => c.serviceName == this.model.packet )
        .map( c => c.price );
    }
  },
  mounted() {
    var vm = this;
    vm.$nextTick(() => {
     
    });
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