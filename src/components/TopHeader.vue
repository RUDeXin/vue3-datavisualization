<script setup lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { $ref } from 'vue/macros';
const formatTime = (
    time: string | number | Date,
    fmt: string
): string => {
    if (!time) return ''
    const date = new Date(time)
    const o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds(),
    }
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        )
    for (const k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                // @ts-ignore: Unreachable code error
                RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
            )
        }
    }
    return fmt
}
const WEEK = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
const timeInfo = reactive({
    dateDay: '',
    dateYear: '',
    dateWeek: '',
})

onBeforeMount(() => {
})
onMounted(() => {
    setInterval(() => {
        const date = new Date()
        timeInfo.dateDay = formatTime(date, 'HH:mm:ss')
        timeInfo.dateYear = formatTime(date, 'yyyy-MM-dd')
        timeInfo.dateWeek = WEEK[date.getDay()]
    }, 1000)
})

</script>
<template>
    <div py-2 relative flex justify-center>
        <div relative w="35/100" h-30px>
            <div absolute class="-top-2px" w="6/10" h-5px>
                <dv-decoration-10 :color="['#408caf']" />
            </div>
            <div w="4/10" absolute top-0 right-0 h-full>
                <dv-decoration-8 :color="['#798cc1', 'rgba(0, 0, 0, 0)']" />
            </div>
        </div>
        <div w="3/10" relative>
            <div absolute flex flex-col justify-center items-center w-full top-12px>
                <div text-lg color-white>
                    大屏数据可视化
                </div>
                <div mt-2 w-48 h-8px>
                    <dv-decoration-6 :reverse="true" :color="['#50e3c2', '#67a1e5']" />
                </div>
            </div>
        </div>
        <div relative w="35/100" h-30px>
            <div w="4/10" absolute top-0 left-0 h-full>
                <dv-decoration-8 :reverse="true" :color="['#798cc1', 'rgba(0, 0, 0, 0)']" />
            </div>
            <div absolute class="-top-2px" right-0 w="6/10" h-5px>
                <dv-decoration-10 :color="['#408caf']" />
            </div>
        </div>
    </div>
    <div px-2 flex justify-between>
        <div flex w="4/10">
            <div class="react-left !w-500px" ml-8>
                <span class="react-before"></span>
                <span class="text">标题文本1</span>
            </div>
            <div class="react-left" ml-4>
                <span class="text">标题文本2</span>
            </div>
        </div>
        <div flex w="4/10">
            <div class="react-right !bg-blue-700" mr-4>
                <span class="text">vue3-data-visual</span>
            </div>
            <div class="react-right !w-500px" mr-8>
                <span class="react-after"></span>
                <span class="text !text-end">{{ `${timeInfo.dateWeek} ${timeInfo.dateYear} ${timeInfo.dateDay}`
                }}</span>
            </div>
        </div>
    </div>
    <!-- <div id="top-header">

        <dv-decoration-8 class="header-left-decoration" />
        <dv-decoration-5 class="header-center-decoration" />
        <dv-decoration-8 class="header-right-decoration" :reverse="true" />
        <div class="center-title">大屏数据可视化</div>
    </div> -->
</template>

<style lang="less" scoped >
.react-left {
    &.react-l-s {
        width: 500px;
        text-align: left;
    }

    font-size: 14px;
    width: 300px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    transform: skewX(45deg);
    background-color: #0f1325;

    .react-before {
        position: absolute;
        left: -25px;
        top: 0;
        height: 100%;
        width: 50px;
        background-color: #0f1325;
        transform: skewX(-45deg);
    }

    .text {
        display: inline-block;
        transform: skewX(-45deg);
    }
}

.react-right {
    &.react-l-s {
        width: 500px;
        text-align: left;
    }

    font-size: 14px;
    width: 300px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    transform: skewX(-45deg);
    background-color: #0f1325;

    .react-after {
        position: absolute;
        right: -25px;
        top: 0;
        height: 100%;
        width: 50px;
        background-color: #0f1325;
        transform: skewX(45deg);
    }

    .text {
        display: inline-block;
        transform: skewX(45deg);
    }
}

#top-header {
    position: relative;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;

    .header-center-decoration {
        width: 40%;
        height: 60px;
        margin-top: 30px;
    }

    .header-left-decoration,
    .header-right-decoration {
        width: 25%;
        height: 60px;
    }

    .center-title {
        position: absolute;
        font-size: 30px;
        font-weight: bold;
        left: 50%;
        top: 15px;
        transform: translateX(-50%);
    }
}
</style>