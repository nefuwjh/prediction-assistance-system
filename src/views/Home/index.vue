<script setup lang="ts">

</script>
<template>
  <div class="home">
    <CarouselView/>
    <TabsView/>
    <div class="button">
      <el-button type="success" plain class="button-item" >
        <router-link to="/pretreatment">预处理</router-link>
      </el-button>
      <el-button type="success" plain class="button-item" >
        <router-link to="/prediction">预测可及性</router-link>
      </el-button>
    </div>
  </div>
</template>
<style scoped>
.home {
  padding: 40px 10px;
  /* border: 1px solid red; */
  border-radius: 20px;
}

/* button */
.button {
  padding: 10px;
  /* border: 1px solid red; */
  text-align: center;
}
a {
  text-decoration: none;
  color: #fff;
}
.button-item {
  background-color: #538fff;
  margin: 0 100px;
  box-shadow: 0px 0px 10px rgb(38, 0, 255);
}
</style>
