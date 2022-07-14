<template>
  <dv-full-screen-container text-white>
    <TopHeader />
    <div h-4></div>
    <div flex h-full>
      <div flex flex-col w="25/100" box-border px-3>
        <div p-1 box-border>
          <dv-border-box-12 p-3 box-border style=" width:100%; height: auto;">
            <PieChart />
          </dv-border-box-12>
          <div h-1></div>
          <dv-border-box-12 p-3 box-border style=" width:100%; height: auto;">
            <BarChart />
          </dv-border-box-12>
        </div>
      </div>
      <div flex flex-col w="5/10" h-full>
        <div h-full>
          <FlyMap />
        </div>
      </div>
      <div flex flex-col w="25/100" box-border px-3>
        <div p-1 box-border>
          <dv-border-box-12 p-3 box-border style=" width:100%; height: auto;">
            <ScrollBoard />
          </dv-border-box-12>
          <dv-border-box-13 p-3 box-border style=" width:100%; height: auto;">
            <CapsuleBar />
          </dv-border-box-13>
        </div>
      </div>
    </div>
  </dv-full-screen-container>

</template>

<script>

import { defineComponent } from "vue";
import BarRace from "components/BarRace.vue";
import TopHeader from "./components/TopHeader.vue";
import CapsuleBar from "./components/CapsuleBar.vue";
import FlyMap from "./components/FlyMap.vue";
import PieChart from "./components/PieChart.vue";
import BarChart from "./components/BarChart.vue";
import ScrollBoard from "./components/ScrollBoard.vue";
import ChinaMap from "./components/ChinaMap.vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    BarRace,
    TopHeader,
    CapsuleBar,
    FlyMap,
    PieChart,
    BarChart,
    ScrollBoard,
    ChinaMap
  },
  setup() {

  }
});
</script>

<style lang="less" scoped>
.chart {
  height: 100vh;
}
</style>

<style>
.title_color {
  color: #d3d6dd;
}

.iconfont {
  font-size: 20px !important;
  color: #5cd9e8;
}

.common_bg {
  background-color: #0f1325;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

body {
  margin: 0;
  background-image: url(./assets/pageBg.png);
  background-size: cover;
}
</style>