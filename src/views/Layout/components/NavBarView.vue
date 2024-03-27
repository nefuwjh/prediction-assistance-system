<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
const userStore = useUserStore()
const router = useRouter()
const confirm = () => {
  console.log('用户要退出登录了')
  // 退出登录业务逻辑实现
  // 1.清除用户信息 触发action
  userStore.clearUserInfo()
  // 2.跳转到首页
  router.push('/')
}
</script>
<template>
  <div>
    <nav>
      <div id="title">PLANTOPEN</div>
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
        <router-link to="/pretreatment">预处理</router-link>
        </li>
        <li>
        <router-link to="/prediction">预测可及性</router-link>
        </li>
        <li>
        <router-link to="/help">帮助文档</router-link>
        </li>
      </ul>
      <div id="login">
        <template v-if="userStore.userInfo.token">
          <span id="login-box"><router-link to="/manage">管理</router-link></span>
          <span id="login-box">
            <el-popconfirm @confirm="confirm" title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消">
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </span>
        </template>
        <template v-else>
          <span id="login-box"><router-link to="/login">login</router-link></span>
        </template>
      </div>
    </nav>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* border: 1px rgb(2, 2, 2) solid; */
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
}
nav ul {
  padding-right: 200px;
  display: flex;
  list-style-type: none;
  text-align: center;
  border-radius: 3px;
  /* border: 1px rgb(0, 255, 17) solid; */
}
nav ul li {
  margin: 0 10px;
  padding: 4px 12px;
  font-family: Arial, sans-serif;
  color: white;
  border-radius: 15px;
  box-shadow: 10px 4px 10px rgb(255, 255, 255);
}
nav ul li:hover {
  background-color: #162d81db;
}
a {
  text-decoration: none;
  color: white;
}
#title {
  display: flex;
  font: 25px sans-serif;
}
#login {
  justify-self: flex-end;
}
#login #login-box {
  padding: 4px 10px;
  margin: 10px;
  background-color: #06c6bf;
  box-shadow: 0px 0px 16px black;
  border-radius: 16px;
  z-index: -1;
}
#login #login-box:hover {
  background-color: #3ab107;
}
</style>