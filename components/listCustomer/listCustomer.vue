<template>
    <section>    
        <b-table class="mx-2"
            :data="filterdata"
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

            <!-- <b-table-column field="birthDay" label="Năm sinh" centered v-slot="props">
                <span class="tag is-success">
                    {{ props.row.birthDay}}
                </span>
            </b-table-column> -->

            <b-table-column field="phone" label="Số điện thoại" v-slot="props">
                {{ props.row.phone }}
            </b-table-column>

            <b-table-column field="cmd" label="CCCD/CMND"  v-slot="props">
                {{ props.row.cmd }}
            </b-table-column>
            <b-table-column field="Email" label="CCCD/CMND"  v-slot="props">
                {{ props.row.email }}
            </b-table-column>

            <!-- <b-table-column label="Giới tính" v-slot="props">
                <span>
                    <b-icon pack="fas"
                        :icon="props.row.gender === 'Nam' ? 'mars' : 'venus'">
                    </b-icon>
                    {{ props.row.gender }}
                </span>
            </b-table-column> -->

             <b-table-column field="address" label="Địa chỉ"  v-slot="props">
                {{ props.row.address }}
            </b-table-column>

             <b-table-column label="Thao tác" v-slot="props">
                <span @click="CustomerEdit(props.row)" class="px-3 border border-teal-500 text-teal-500 mx-1 cursor-pointer">
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
                    <template #default="props">
                        <formEditcustomer
                        @close="props.close"
                        :active.sync="isComponentModalActive"
                        ></formEditcustomer>
                    </template>
                </b-modal>
                <span @click="CustomerDelete(props.row)" class="px-3 border border-red-500 text-red-500 mx-1 cursor-pointer">
                    Xoá
                </span>
            </b-table-column>
        </b-table>
    </section>
</template>

<script>
import formEditcustomer from "~/components/formEditcustomer/formEditcustomer.vue";
    export default {
        components : {formEditcustomer},
        props: {
            filterdata : []
        },
        data() {
            return {
                isPaginated: true,
                isStriped: true,
                isPaginationSimple: false,
                isPaginationRounded: false,
                paginationPosition: 'bottom',
                currentPage: 1,
                perPage: 10,
                isComponentModalActive: false,
                loading: false,
            }
        },
        methods: {
            
            CustomerDelete(index) {
                this.$buefy.dialog.confirm({
                title: 'Xóa dịch vụ ',
                message: `Bạn thật sự muốn xóa khách hàng này chứ! <br> Việc này sẽ không thể hủy bỏ`,
                confirmText: 'Tiếp tục',
                type: 'is-danger',
                hasIcon: true,
                onConfirm: async () => {
                    await this.$store.commit('customer/Remove', index);
                    this.$buefy.toast.open(` Đã xóa khách hàng ${index.name} !` );
                }
            })
            },
            CustomerEdit(item) {
                this.isComponentModalActive = true;
                this.$store.commit("customer/storeCustomer", item)
            },
        },
    mounted() {
        var vm = this;
        vm.$nextTick(() => {
        });
        },
    }
</script>