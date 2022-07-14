<script setup lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import EchartsCanvas from './EchartsCanvas/EchartsCanvas.vue';
import { EChartsOption, graphic } from 'echarts';
import { $ref } from 'vue/macros';
import { IEchartsCanvasExpose } from './EchartsCanvas/types';

const ecCanvas = $ref<IEchartsCanvasExpose>()

// prettier-ignore
let dataAxis = ['点', '击', '滚', '动', '缩', '放'];
// prettier-ignore
let data = [220, 182, 191, 234, 233, 111, 123,];
let yMax = 500;
let dataShadow = [];
for (let i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}
const options = reactive<EChartsOption>({
    xAxis: {
        data: dataAxis,
        axisLine: {
            lineStyle: {
                color: '#2d8cf0'
            }
        },
        axisLabel: {
            color: '#2d8cf0'
        },
        z: 10
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#2d8cf0'
            }
        },
        axisLabel: {
            color: '#2d8cf0'
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        {
            data: data,
            type: 'bar',
            showBackground: true,
            itemStyle: {
                color: new graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'RGBA(19,96,187,1)' },
                    { offset: 1, color: 'RGBA(7,193,223,1)' }
                ])
            },
            emphasis: {
                itemStyle: {
                    color: '#4f7fff'
                }
            },
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 1)',
            }
        }
    ]
})
onMounted(() => {
    const myChart = ecCanvas.myChart?.value!
    // Enable data zoom when user click bar.
    const zoomSize = 6;
    myChart.on('click', function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        myChart.dispatchAction({
            type: 'dataZoom',
            startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
            endValue:
                dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        });
    });
})
</script>
<template>
    <div>
        <div class="common_bg" py-2>
            <div class="title_color" flex items-center text-10px h-14px>
                <div w-2></div>
                <i class="iconfont icon-tongji2" />
                <div w-1></div>
                <span text-white px-1>测试模块</span>
                <div w-1></div>
                <dv-decoration-3 class="!w-30" h-full />
            </div>
            <div h-315px>
                <EchartsCanvas ref="ecCanvas" :options="options" />
            </div>
        </div>
    </div>
</template>

<style scoped >
</style>