<script  setup lang='ts'>
import { onMounted, defineComponent, ref, onBeforeUnmount, watch, defineExpose, Ref } from 'vue'
import { $ref } from 'vue/macros';
import theme from './theme' // 引入默认主题
import * as echarts from 'echarts'
import geoHuiZhou from '@/assets/geo/huizhou.json'
import geoJiNan from '@/assets/geo/jinan.json'
import geoChina from '@/assets/geo/china.json'
import { IEchartsCanvasExpose } from './types';

interface IEchartsCanvasProps {
    options: any,
    className?: string,
    id?: string
}

const props = defineProps<IEchartsCanvasProps>()
const chartRef = ref<HTMLElement>()
let myChart: { value?: echarts.ECharts } = { value: undefined }
/**
     * 初始化echart
     * @param data 数据项
     * @param clearCaching 是否清除缓存
     */
const initChart = (data?: any, clearCaching = false) => {
    if (data || props.options) {
        myChart?.value?.setOption(data || props.options, clearCaching)
    }
}
// 生命周期
onMounted(() => {
    console.log(chartRef.value, 'chartRef');

    // 定义实例
    echarts.registerTheme('myTheme', theme) // 覆盖默认主题
    echarts.registerMap('huizhou', geoHuiZhou as any)
    echarts.registerMap('china', geoChina as any)
    echarts.registerMap('sc', geoJiNan as any)
    myChart.value = echarts.init(chartRef.value!, 'myTheme')
    initChart()
})
onBeforeUnmount(() => {
    myChart?.value?.dispose()
    myChart.value = undefined
})
// 监听改变
watch(
    () => props.options,
    val => {
        val && initChart(val)
    },
    {
        deep: true
    }
)

// 对外暴露接口
defineExpose<IEchartsCanvasExpose>({
    chartRef,
    initChart,
    myChart
})

</script>
<template>
    <div :id="id" :class="className" ref="chartRef" style="width: 100%; height: 100%;"></div>
</template>

<style scoped >
</style>