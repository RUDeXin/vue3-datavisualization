import { createApp } from 'vue'
import App from '@/App.vue'
import 'uno.css'
// 引入图表（所有图标见 icon 目录下的 demo_index.html）
import './assets/icon/iconfont.css'
import ECharts from "vue-echarts";
import EchatsCanvas from '@/components/EchartsCanvas/EchartsCanvas.vue'
import DataV from 'DataV'
import './test'



const app = createApp(App)
window.$vueApp = app
app.use(DataV)
// register globally (or you can do it locally)
app.component('Echarts', EchatsCanvas)

console.log(app);

app.mount('#app')