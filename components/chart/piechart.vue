
<script>
import {Pie} from "vue-chartjs"
    export default {
        extends: Pie,
        props: ["piechartData", "options"],
        data() {
            return {
                
            }
        },
        methods: {
           
        },
        mounted() {
         this.renderChart(this.piechartData, this.options)
        },
    }
</script>