<template>
  <div>
    分析页
    <Chart :options="options" style="height:400px;"></Chart>
  </div>
</template>

<script>
import Chart from "@/components/Charts";
import random from "lodash/random";
export default {
  data() {
    return {
      options: {
        text: "1111",
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      //模拟数据变化
      //因为Vue不能监听到对象属性的变化，所以直接改变data[random(0, 5)]中数据的方式，Chart是监听不到的，所以方法一是无效的
      // Vue只会监听data引用的改变，所以需要使用map返回一个新数组返回给data，watch才能监听到
      // 方法一
      // this.options.series[0].data[random(0, 5)] = random(0, 100);
      // 方法二
      this.options.series[0].data = this.options.series[0].data.map(() =>
        random(0, 100)
      );
      this.options = { ...this.options }; //新建option对象来使得chart能监听到
    }, 3000);
  },
  components: {
    Chart
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style></style>
