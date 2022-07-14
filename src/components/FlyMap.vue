<script setup lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import EchartsCanvas from './EchartsCanvas/EchartsCanvas.vue';


let data = [
    { name: '惠城区', value: '惠阳' }
];
const v = [
    {
        name: '龙门县',
        value: 1
    },
    {
        name: "博罗县",
        value: 2
    },
    {
        name: "惠城区",
        value: 3
    },
    {
        name: "惠阳区",
        value: 4
    },
    {
        name: "惠东县",
        value: 5
    },
]
const geoCoordMap: any = {
    '惠城区': [
        114.480013,
        23.157902,
    ],
    '惠阳区': [
        114.47078,
        22.865794

    ],
    '博罗县': [
        114.281868,
        23.347302

    ],
    '惠东县': [
        114.944654,
        23.03069

    ],
    '龙门县': [
        114.131828,
        23.661409

    ],
}
//根据data得到每个data中城市的坐标
var convertData = function (data: any) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var fromCoord = geoCoordMap[data[i].name];//获取城市的坐标 source
        var toCoord = geoCoordMap[data[i].value];//获取城市的坐标 destination
        if (fromCoord && toCoord) {
            res.push({
                fromName: data[i].name,
                toName: data[i].value,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};
//根据data得到放射光标效果图。如果起始城市没有值的话，就只显示目的城市
var convertData1 = function (data: any) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        var geoCoord1 = geoCoordMap[data[i].value];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
        if (geoCoord1) {
            res.push({
                name: data[i].value,
                value: geoCoord1.concat(data[i].name)
            })
        }
    }
    return res;
};
const options = reactive({
    tooltip: {
        trigger: 'item',

        position: (point: any) => {
            // 固定在顶部
            return [point[0] + 50, point[1] - 20];
        },
        // formatter: '{b}<br/>{c} (p / km2)'
    },
    // 如果需要根据不同的数据展示深浅不一的颜色，则把这里打开
    // visualMap: {
    //     min: 500,
    //     max: 50000,
    //     text: ['High', 'Low'],
    //     left: 'right',
    //     realtime: false,
    //     calculable: false,
    //     inRange: {
    //         color: ['lightskyblue', 'yellow', 'orangered']
    //     }
    // },
    // 底部背景
    geo: {
        show: true,
        aspectScale: 1, //长宽比
        zoom: 1,
        top: '3%',
        left: '7%',
        map: 'huizhou',
        //是否可以点击鼠标、滚轮缩放
        roam: false,
        itemStyle: {
            normal: {
                borderColor: '#7ad5ff7f',
                shadowOffsetY: 5,
                shadowBlur: 15,
                areaColor: 'rgba(5,21,35,0.1)'
            }
        },
    },
    series: [
        {
            name: 'rode',
            type: 'lines',
            coordinateSystem: 'geo',
            data: convertData(data),
            z: 99,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
            },
            lineStyle: {
                normal: {
                    color: '#ff9900',
                    width: 1,
                    opacity: 1,
                    curveness: 0.2
                }
            }
        },
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: 16,
            itemStyle: {
                normal: {
                    color: '#ff9900'
                }
            },
            data: convertData1(v)
        },
        {

            name: '惠州',
            type: 'map',
            mapType: 'huizhou',
            aspectScale: 1, //地图长度比
            zoom: 1, // 缩放
            top: '2%',
            left: '6%',
            itemStyle: {
                normal: {
                    // 背景渐变色
                    areaColor: {
                        type: 'linear-gradient',
                        x: 0,
                        y: 300,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: 'RGBA(19,96,187,1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'RGBA(7,193,223,1)' // 50% 处的颜色
                        }],
                        global: true // 缺省为 false
                    },
                    borderColor: '#4ECEE6',
                    borderWidth: 1,
                },
                emphasis: {
                    show: false,
                    areaColor: '#4f7fff',
                    borderColor: 'rgba(0,242,252,.6)',
                    borderWidth: 2,
                    shadowBlur: 10,
                    shadowColor: '#00f2fc',
                },
            },
            // label: {
            //     formatter: (params: any) => `${params.name}`,
            //     show: true,
            //     position: 'insideRight',
            //     textStyle: {
            //         fontSize: 14,
            //         color: '#efefef',
            //     },
            //     emphasis: {
            //         textStyle: {
            //             color: '#fff',
            //         },
            //     },
            // },

            data: v,

        },


    ]
})
//定义数据
var globalIndex = 0;
var dataArray = new Array();

dataArray[0] = [{ name: '惠城区', value: '惠阳' }];
dataArray[1] = [{ name: '龙门县', value: '博罗县' }];
dataArray[2] = [{ value: '惠城区' }];
dataArray[3] = [{ name: '惠阳区', value: '博罗县' }];
dataArray[4] = [{ name: '博罗县', value: '龙门县' }];
onMounted(() => {

    //一直要执行的函数
    function nocease() {
        //随机取1-5
        data = dataArray[globalIndex % 5];
        globalIndex++;
        if (data[0].name) {
            options.series[0].data = convertData(data);
            options.series[1].data = convertData1(data);
        }
        else {
            options.series[0].data = [];
            options.series[1].data = convertData1(data);
        }

    }
    setInterval(nocease, 2000);
})

</script>
<template>
    <div h-full>
        <div text-xl text-center class="title_color">地图数据</div>
        <EchartsCanvas :options="options" />
    </div>
</template>

<style scoped >
</style>