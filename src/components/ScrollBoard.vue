<script setup lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
const config = reactive({
    header: ['组件', '分支', '覆盖率'],
    data: [
        ['组件1', 'dev-1', "<span  class='colorGrass'>↑75%</span>"],
        ['组件2', 'dev-2', "<span  class='colorRed'>↓33%</span>"],
        ['组件3', 'dev-3', "<span  class='colorGrass'>↑100%</span>"],
        ['组件4', 'rea-1', "<span  class='colorGrass'>↑94%</span>"],
        ['组件5', 'rea-2', "<span  class='colorGrass'>↑95%</span>"],
        ['组件6', 'fix-2', "<span  class='colorGrass'>↑63%</span>"],
        ['组件7', 'fix-4', "<span  class='colorGrass'>↑84%</span>"],
        ['组件8', 'fix-7', "<span  class='colorRed'>↓46%</span>"],
        ['组件9', 'dev-2', "<span  class='colorRed'>↓13%</span>"],
        ['组件10', 'dev-9', "<span  class='colorGrass'>↑76%</span>"]
    ],
    rowNum: 7, //表格行数
    headerHeight: 35,
    headerBGC: '#0f1325', //表头
    oddRowBGC: '#0f1325', //奇数行
    evenRowBGC: '#171c33', //偶数行
    index: true,
    columnWidth: [50],
    align: ['center']
})
onBeforeMount(() => {
})
onMounted(() => {
})

</script>
<template>
    <div class="common_bg" py-2>

        <div class="title_color" flex items-center text-10px h-14px>
            <div w-2></div>
            <i class="iconfont icon-zhibiao2" />
            <div w-1></div>
            <span text-white px-1>测试模块</span>
        </div>
        <dv-scroll-board :config="config" style="width: 100%;height:220px" />
    </div>
</template>

<style lang="scss" scoped>
$box-height: 410px;
$box-width: 300px;

.centerRight2 {
    padding: 16px;
    padding-top: 20px;
    height: $box-height;
    width: $box-width;
    border-radius: 5px;

    .bg-color-black {
        height: $box-height - 30px;
        border-radius: 10px;
    }

    .text {
        color: #c3cbde;
    }

    .body-box {
        border-radius: 10px;
        overflow: hidden;

        .dv-scr-board {
            width: 270px;
            height: 340px;
        }
    }
}
</style>