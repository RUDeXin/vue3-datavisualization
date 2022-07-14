<script setup lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import EchartsCanvas from './EchartsCanvas/EchartsCanvas.vue';
const config = reactive({
    data: [
        {
            name: '惠城',
            value: 167
        },
        {
            name: '惠阳',
            value: 123
        },
        {
            name: '博罗',
            value: 98
        },
        {
            name: '惠东',
            value: 75
        },
        {
            name: '龙门',
            value: 66
        },
    ],
    colors: ['#2d8cf0', '#19be6b', '#ff9900', '#E46CBB', '#9A66E4', '#ed3f14'],
    // unit: '单位'
})

const val = {
    indicatorData: [
        { name: "数据1", max: 300 },
        { name: "数据2", max: 250 },
        { name: "数据3", max: 300 },
        { name: "数据4", max: 5 },
        { name: "数据5", max: 200 },
        { name: "数据6", max: 100 }
    ],
    dataBJ: [
        [94, 69, 114, 2.08, 73, 39, 22],
        [99, 73, 110, 2.43, 76, 48, 23],
        [31, 12, 30, 0.5, 32, 16, 24],
        [42, 27, 43, 1, 53, 22, 25],
        [154, 117, 157, 3.05, 92, 58, 26],
        [234, 185, 230, 4.09, 123, 69, 27],
        [160, 120, 186, 2.77, 91, 50, 28]
    ],
    dataGZ: [
        [84, 94, 140, 2.238, 68, 18, 22],
        [93, 77, 104, 1.165, 53, 7, 23],
        [99, 130, 227, 3.97, 55, 15, 24],
        [146, 84, 139, 1.094, 40, 17, 25],
        [113, 108, 137, 1.481, 48, 15, 26],
        [81, 48, 62, 1.619, 26, 3, 27],
        [56, 48, 68, 1.336, 37, 9, 28]
    ],
    dataSH: [
        [91, 45, 125, 0.82, 34, 23, 1],
        [65, 27, 78, 0.86, 45, 29, 2],
        [83, 60, 84, 1.09, 73, 27, 3],
        [109, 81, 121, 1.28, 68, 51, 4],
        [106, 77, 114, 1.07, 55, 51, 5],
        [109, 81, 121, 1.28, 68, 51, 6],
        [106, 77, 114, 1.07, 55, 51, 7]
    ]
}
// 定义固定配置项
const lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};
const options = reactive({
    radar: {
        indicator: val.indicatorData,
        shape: "circle",
        splitNumber: 5,
        radius: ["0%", "65%"],
        name: {
            textStyle: {
                color: "rgb(238, 197, 102)"
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    "rgba(238, 197, 102, 0.1)",
                    "rgba(238, 197, 102, 0.2)",
                    "rgba(238, 197, 102, 0.4)",
                    "rgba(238, 197, 102, 0.6)",
                    "rgba(238, 197, 102, 0.8)",
                    "rgba(238, 197, 102, 1)"
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "rgba(238, 197, 102, 0.5)"
            }
        }
    },
    series: [
        {
            name: "北京",
            type: "radar",
            lineStyle: lineStyle,
            data: val.dataBJ,
            symbol: "none",
            itemStyle: {
                normal: {
                    color: "#F9713C"
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        },
        {
            name: "上海",
            type: "radar",
            lineStyle: lineStyle,
            data: val.dataSH,
            symbol: "none",
            itemStyle: {
                normal: {
                    color: "#B3E4A1"
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.05
                }
            }
        },
        {
            name: "广州",
            type: "radar",
            lineStyle: lineStyle,
            data: val.dataGZ,
            symbol: "none",
            itemStyle: {
                normal: {
                    color: "rgb(238, 197, 102)"
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.05
                }
            }
        }
    ]
})
onMounted(() => {
    setInterval(() => {
        for (let i = 0; i < config.data.length; i++) {
            config.data[i].value += Math.trunc(Math.random() * 40 - 20)
        }
    }, 1000)
})

</script>
<template>
    <div>
        <div class="common_bg" py-2>
            <div class="title_color" flex items-center text-8px h-14px>
                <div w-2></div>
                <i class="iconfont icon-align-left" />
                <div w-1></div>
                <span text-white px-1>测试模块</span>
                <div w-1></div>
                <dv-decoration-3 class="!w-30" h-full />
            </div>
            <dv-capsule-chart :config="config" />
            <div h-180px>
                <EchartsCanvas :options="options" />
            </div>
        </div>
    </div>

</template>

<style scoped >
:deep(.label-column) {
    color: #2d8cf0 !important;
}

:deep(.unit-label) {
    color: #2d8cf0 !important;
}
</style> 