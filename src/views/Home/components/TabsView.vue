<script setup lang="ts">
import { ref } from 'vue'

const tabPosition = ref('top')

import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<template>
  <div id="tabs">
    <el-tabs v-model="activeName" stretch="true" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="大麦" name="first">
        <div>
          <img src="@/assets/damai.jpg" alt="" />
          <p>
            大麦（Hordeum vulgare
            L.）是禾本科大麦属一年生草本植物。秆粗壮，光滑无毛，直立；叶鞘松弛抱茎，多无毛或基部具柔毛；叶舌膜质，叶片扁平，穗状花序，小穗稠密，每节着生三枚发育的小穗，小穗均无柄；颖线状披针形，外被短柔毛；颖果熟时粘着于稃内，不脱出。种下主要分为青稞和藏青稞两个变种。
          </p>
        </div>
        <router-link to="/barley"></router-link>
      </el-tab-pane>
      <el-tab-pane label="小麦">
        <router-link to="/barley">小麦</router-link>
      </el-tab-pane>
      <el-tab-pane label="高粱">
        <router-link to="/barley">小麦</router-link>
      </el-tab-pane>
      <el-tab-pane label="玉米">
        <router-link to="/barley">小麦</router-link>
      </el-tab-pane>
      <el-tab-pane label="水稻">
        <router-link to="/barley">小麦</router-link>
      </el-tab-pane>
      <el-tab-pane label="番茄">
        <router-link to="/barley">小麦</router-link>
      </el-tab-pane>
      <el-tab-pane label="拟南芥">
        <router-link to="/barley">小麦</router-link>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style scoped>
/* tab */
#tabs {
  padding: 50px 100px;
  text-align: center;
  top: 50px;
  left: 50px;
  /* border: 1px solid red; */
  height: 200px;
}
.demo-tabs {
  background-color: #eff6ff;
  border-radius: 17px;
  left: 0px;
  top: 0px;
  height: 36px;
  /* border: 1px solid red; */
  position: relative;
}
.demo-tabs img {
  margin-right: 30px;
  height: 100px;
  width: 100px;
  border-radius: 100px;
  box-shadow: 0px 0px 20px rgb(255, 255, 255);
}
.demo-tabs div {
  display: flex;
  margin: 10px;
  color: #fff;
  /* border: 1px solid red; */
}
/* 去除灰色横条 */
::v-deep .el-tabs__nav-wrap::after {
  position: static !important;
}
/* 设置滑块颜色 */
::v-deep .el-tabs__active-bar {
  background-color: #538fff !important;
}
/* 设置滑块停止位置 */
::v-deep .el-tabs__active-bar.is-top {
  height: 37px;
  border-radius: 17px;
  top: 0px !important;
}
/* 设置当前选中样式 */
::v-deep .el-tabs__item.is-active {
  color: #ffffff !important;
  z-index: 2;
}
/* 设置未被选中样式 */
::v-deep .el-tabs__item {
  padding: 0 20px !important;
  color: hsl(0, 0%, 4%) !important;
}
</style>