<template>
  <div ref="chartDom"></div>
</template>

<script>
import echarts from "echarts";
import { addListener, removeListener } from "resize-detector";
import debounce from "lodash/debounce";
export default {
  props: {
    options: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  created() {
    this.resize = debounce(this.resize, 300); //resize函数回调太频繁，频繁执行Dom操作，资源重新加载，使用debounce做防抖动处理
  },
  mounted() {
    this.renderChart();
    addListener(this.$refs.chartDom, this.resize);
  },
  watch: {
    // 这种方式可行，但是使用deep深度监听，并且options通常数据较大，是比较消耗资源的，所以最好使用其他方式替代
    // options: {
    //   handler(val) {
    //     this.chart.setOption(val);
    //   },
    //   deep: true
    // }
    options(val) {
      this.chart.setOption(val);
    }
  },
  methods: {
    renderChart() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$refs.chartDom); //这里chart不需要响应式数据，所以不需要写在data的return中
      // 使用刚指定的配置项和数据显示图表。
      this.chart.setOption(this.options);
    },
    resize() {
      this.chart.resize();
    }
  },
  beforeDestroy() {
    //结束时清理chart
    removeListener(this.$refs.chartDom, this.resize);
    this.chart.dispose(); //销毁实例
    this.chart = null; //赋值为null
  }
};
</script>

<style></style>
