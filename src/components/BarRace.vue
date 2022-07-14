<script setup lang='ts'>
import { reactive, toRefs, ref, onBeforeMount, onMounted } from 'vue'
import { $ref } from 'vue/macros'
const myChart: any = $ref()
const data: number[] = [];
for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 200));
}
const option = ref({
    xAxis: {
        max: 'dataMax'
    },
    yAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E'],
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        // max: 2 // only the largest 3 bars will be displayed
    },
    series: [
        {
            realtimeSort: true,
            // name: 'X',
            type: 'bar',
            data: data,
            label: {
                show: true,
                position: 'right',
                valueAnimation: true
            }
        }
    ],
    legend: {
        show: true
    },
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
});

onMounted(() => {
    console.log(option, data);

    function run() {
        for (var i = 0; i < data.length; ++i) {
            if (Math.random() > 0.9) {
                data[i] += Math.round(Math.random() * 2000);
            } else {
                data[i] += Math.round(Math.random() * 200);
            }
        }
        myChart?.chart?.setOption({
            series: [
                {
                    type: 'bar',
                    data
                }
            ]
        });
        console.log(myChart?.chart);
    }
    setInterval(function () {
        run();
    }, 3000);
})

</script>
<template>
    <div w-300px h-200px border border-blue>
        <div text-blue text-center>测试模块1</div>
        <v-chart class="chart" :option="option" ref="myChart"></v-chart>
    </div>
</template>

<style scoped>
.chart {
    height: 100% !important;
    width: 100% !important;
}
</style>