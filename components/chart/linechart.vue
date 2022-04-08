
<script>
import {Line} from "vue-chartjs"
    export default {
        extends: Line,
        props: ["linechartData", "options"],
        data() {
            return {
                
            }
        },
        methods: {
           
        },
        mounted() {
         this.renderChart(this.linechartData, this.options)
        },
    }
</script>