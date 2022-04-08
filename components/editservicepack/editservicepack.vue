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
            <b-field label="Gói dịch vụ" >
                <b-input v-model="model.serviceName" ></b-input>
            </b-field>
          </div>
           <div class="w-1/2 px-2 mb-4">
            <b-field label="Chi phí" >
                <b-input v-model="model.price"></b-input>
            </b-field>
          </div>
        </section>
        <footer class="modal-card-foot justify-end">
          <b-button
            class="bg-gradient-to-r from-green-500 to-green-400 text-sm font-medium "
            label="Xác nhận"
            type="is-primary"
             @click="$emit('close')" 
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
      model: this.$attrs.value,
    };
  },
  watch: {
        model: {
            deep: true,
            handler(val){
            }
        }
    },
  methods: {
    onSave() {

    },
     clearDate () {
            this.selected = null
        }
  },
  computed: {

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