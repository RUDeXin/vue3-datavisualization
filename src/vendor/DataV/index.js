/**
 * IMPORT COMPONENTS
 */
import fullScreenContainer from './components/fullScreenContainer/index'
import loading from './components/loading/index'

// border box
import borderBox1 from './components/borderBox1/index'
import borderBox2 from './components/borderBox2/index'
import borderBox3 from './components/borderBox3/index'
import borderBox4 from './components/borderBox4/index'
import borderBox5 from './components/borderBox5/index'
import borderBox6 from './components/borderBox6/index'
import borderBox7 from './components/borderBox7/index'
import borderBox8 from './components/borderBox8/index'
import borderBox9 from './components/borderBox9/index'
import borderBox10 from './components/borderBox10/index'
import borderBox11 from './components/borderBox11/index'
import borderBox12 from './components/borderBox12/index'
import borderBox13 from './components/borderBox13/index'

// decoration
import decoration1 from './components/decoration1/index'
import decoration2 from './components/decoration2/index'
import decoration3 from './components/decoration3/index'
import decoration4 from './components/decoration4/index'
import decoration5 from './components/decoration5/index'
import decoration6 from './components/decoration6/index'
import decoration7 from './components/decoration7/index'
import decoration8 from './components/decoration8/index'
import decoration9 from './components/decoration9/index'
import decoration10 from './components/decoration10/index'
import decoration11 from './components/decoration11/index'
import decoration12 from './components/decoration12/index'

// charts
import charts from './components/charts/index'

import activeRingChart from './components/activeRingChart'
import capsuleChart from './components/capsuleChart'
import waterLevelPond from './components/waterLevelPond/index'
import percentPond from './components/percentPond/index'
import flylineChart from './components/flylineChart'
import flylineChartEnhanced from './components/flylineChartEnhanced'
import conicalColumnChart from './components/conicalColumnChart'
import digitalFlop from './components/digitalFlop'
import scrollBoard from './components/scrollBoard/index'
import scrollRankingBoard from './components/scrollRankingBoard/index'

/**
 * USE COMPONENTS
 */
export default function (Vue) {
  window.$vueApp.use(fullScreenContainer)
  window.$vueApp.use(loading)

  // border box
  window.$vueApp.use(borderBox1)
  window.$vueApp.use(borderBox2)
  window.$vueApp.use(borderBox3)
  window.$vueApp.use(borderBox4)
  window.$vueApp.use(borderBox5)
  window.$vueApp.use(borderBox6)
  window.$vueApp.use(borderBox7)
  window.$vueApp.use(borderBox8)
  window.$vueApp.use(borderBox9)
  window.$vueApp.use(borderBox10)
  window.$vueApp.use(borderBox11)
  window.$vueApp.use(borderBox12)
  window.$vueApp.use(borderBox13)

  // decoration
  window.$vueApp.use(decoration1)
  window.$vueApp.use(decoration2)
  window.$vueApp.use(decoration3)
  window.$vueApp.use(decoration4)
  window.$vueApp.use(decoration5)
  window.$vueApp.use(decoration6)
  window.$vueApp.use(decoration7)
  window.$vueApp.use(decoration8)
  window.$vueApp.use(decoration9)
  window.$vueApp.use(decoration10)
  window.$vueApp.use(decoration11)
  window.$vueApp.use(decoration12)

  // charts
  window.$vueApp.use(charts)

  window.$vueApp.use(activeRingChart)
  window.$vueApp.use(capsuleChart)
  window.$vueApp.use(waterLevelPond)
  window.$vueApp.use(percentPond)
  window.$vueApp.use(flylineChart)
  window.$vueApp.use(flylineChartEnhanced)
  window.$vueApp.use(conicalColumnChart)
  window.$vueApp.use(digitalFlop)
  window.$vueApp.use(scrollBoard)
  window.$vueApp.use(scrollRankingBoard)
}
