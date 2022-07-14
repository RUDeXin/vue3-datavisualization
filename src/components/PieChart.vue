<script setup lang='ts'>
import { EChartsOption } from 'echarts';
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import EchartsCanvas from './EchartsCanvas/EchartsCanvas.vue';
import HeaderTitle from './HeaderTitle.vue';
const options = reactive<EChartsOption>({
    tooltip: {
        trigger: 'item'
    },
    series: [
        {

            // name: 'Access From',
            type: 'pie',
            // radius: 10,
            // center: ['50%', '50%'],
            // roseType: 'area',
            data: [
                { value: 1048, name: '搜索引擎' },
                { value: 735, name: '直链' },
                { value: 580, name: '邮箱' },
                { value: 484, name: '单点广告' },
                { value: 300, name: '视频广告' }
            ],
            itemStyle: {
                // borderColor: 'rgba(0,242,252,.6)',
                // borderWidth: 2,
                // shadowBlur: 10,
                // shadowColor: '#00f2fc',
            },
            label: {
                show: true,
                color: '#2d8cf0'
            },
            emphasis: {
                label: {
                    show: true,
                    color: '#2d8cf0'
                }
            }
        }
    ]
})
onBeforeMount(() => {
})
onMounted(() => {
})

</script>
<template>
    <div>
        <div class="common_bg" py-2>
            <div class="title_color" flex items-center text-10px h-14px>
                <div w-2></div>
                <i class="iconfont icon-tongji4" />
                <div w-1></div>
                <span text-white px-1>测试模块</span>
                <div w-1></div>
                <dv-decoration-3 class="!w-30" h-full />
            </div>
            <div h-220px>
                <EchartsCanvas :options="options" />
            </div>
        </div>
    </div>
</template>

<style scoped >
</style>