<script setup lang="ts">
</script>
<template>
<div>
  <main>
  <NavBarView id="navbar" />
  <RouterView id="router" />
  </main>
</div>
</template>
<style scoped>
main {
  padding: 20px;
  /* 毛玻璃 */
  background:rgb(255,255,255,0.1);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgb(0,0,0,0.1);
  border: 1px solid rgb(255,255,255,0.5);
  border-right: 1px solid rgb(255,255,255,0.2);
  border-bottom: 1px solid rgb(255,255,255,0.2);
  /*  */
}
#navbar {
  /* border: 1px solid red; */
  height: 50px;
}
#router {
  /* border: 1px solid red; */
}
</style>