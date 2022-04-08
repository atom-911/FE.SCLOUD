<template>
  <div class="w-full p-8">
    <div class="w-full flex justify-between items-center">
      <div class="title w-full ml-2">
        <i class="fas fa-bars mr-2 text-xl inline-block"></i>
        <h2 class="font-bold text-2xl inline-block">Bảng giá tên miền</h2>
      </div>
    
    </div>
    <div class=" w-full px-2 mt-8">
        <b-tabs v-model="activeTab" type="is-toggle" expanded>
            <b-tab-item label="Tên miền quốc tế">
                <div class="w-full ">
                    <b-table class="my-2"
                        :data="tadu[0].domain_list"
                        :striped="isStriped"
                       >
                        <b-table-column field="domain_name" label="Tên miền"  v-slot="props">
                            {{ props.row.domain_name }}
                        </b-table-column>

                        <b-table-column field="regis_price_with_vat" label="Đăng ký mới" v-slot="props">
                            {{ Math.round(props.row.regis_price_with_vat).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} <sup>đ/năm</sup>
                        </b-table-column>

                        <b-table-column field="renew_price_with_vat" label="Gia hạn" v-slot="props">
                            {{ Math.round(props.row.renew_price_with_vat).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} <sup>đ/năm</sup>
                        </b-table-column>
                    </b-table>
                </div>
                
            </b-tab-item>

            <b-tab-item label="Tên miền trong nước">
                <div class="w-full mt-4">
                    <b-table class="my-2"
                        :data="tadu[1].domain_list"
                        :striped="isStriped"
                       >
                        <b-table-column field="domain_name" label="Tên miền"  v-slot="props">
                            {{ props.row.domain_name }}
                        </b-table-column>

                        <b-table-column field="regis_price" label="Đăng ký mới" v-slot="props">
                           {{ Math.round(props.row.regis_price_with_vat).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} <sup>đ/năm</sup>
                        </b-table-column>

                        <b-table-column field="renew_price" label="Gia hạn" v-slot="props">
                            {{ Math.round(props.row.renew_price_with_vat).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} <sup>đ/năm</sup>
                        </b-table-column>
                    </b-table>
                </div>
            </b-tab-item>
    </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['check-auth','authenticated'],
    asyncData({ $axios }) {
    return $axios
      .get("https://api3.tadu.vn/api/product/domain/prices")
      .then((res) => {
        return { tadu: res.data.data };
      })
      .catch((e) => {
        // error({ statusCode: 404, message: "Post not found" });
      });
  },
  data() {
    return {
        activeTab: 0,
        tadu : [],
        isStriped: true,
    }
  },
  computed: {
        
  },
  created() {
  
  },
  mounted() {
    var vm = this;
    vm.$nextTick(async () => {
        
    });
    
  },
};
</script>

<style>

</style>


