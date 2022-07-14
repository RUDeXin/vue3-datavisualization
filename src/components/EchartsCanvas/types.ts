import { Ref } from "vue";
import { ECharts } from 'echarts'
export interface IEchartsCanvasExpose {
    chartRef: Ref<HTMLElement | undefined>,
    initChart?: any,
    myChart?: { value?: ECharts }
}