<template>
  <div class="chart-container">
    <!-- 表头 -->

    <!-- 图表容器 -->
    <div id="main" style="width: 1300px; height: 400px;"></div>
    <div class="chart-header">
      <h2>近7日二手交易发布数量统计</h2>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";  // 引入request模块
import * as echarts from 'echarts';     // 引入echarts

export default {
  name: 'SecondHandStatistics',
  created() {
    this.loadChartData();  // 加载图表数据
  },
  methods: {
    // 加载图表数据
    loadChartData() {
      request.get("/statistics/secondHand").then(res => {
        if (res.code === '0') {
          // 假设后端返回的数据格式为 { date: '2023-02-01', count: 10 }
          const dates = res.data.map(item => item.date);
          const counts = res.data.map(item => item.count);
          this.updateChart(dates, counts);  // 更新图表
        }
      }).catch(err => {
        console.error("请求失败", err);
      });
    },

    // 更新图表数据
    updateChart(dates, counts) {
      const chartDom = document.getElementById('main');
      const myChart = echarts.init(chartDom);
      const option = {
        xAxis: {
          type: 'category',
          data: dates,  // 从后端获取的日期数据
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: counts,  // 从后端获取的交易量数据
            type: 'line',
            smooth: true,
          },
        ],
      };
      myChart.setOption(option);  // 设置ECharts的配置项
    },
  },
};
</script>

<style scoped>
.chart-container {
  padding: 20px;
}

.chart-header {
  text-align: center;
  margin-bottom: 20px;
}

.chart-header h2 {
  font-size: 24px;
  color: #333;
}
</style>
