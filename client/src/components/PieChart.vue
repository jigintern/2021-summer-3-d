<script>
import { Pie, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Pie,
  mixins: [reactiveProp],
  props: ["chartData", "options"],
  mounted: function () {
    let vm = this;

    this.$nextTick(function () {
      //console.log(vm.chartData);
      this.renderChart(vm.chartData, vm.options);
    });
  },
  methods: {
    destroyPieChart() {
      //this.destroy();
    },
    renderPieChart() {
      this.renderChart(this.chartData, this.options);
    },
  },
  watch: {
    chartData: {
      handler: function () {
        //this.destroyPieChart();
        this.renderPieChart();
      },
      deep: true,
    },
  },
};
</script>