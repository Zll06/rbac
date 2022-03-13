<!--
 * @Author: your name
 * @Date: 2022-03-13 15:32:30
 * @LastEditTime: 2022-03-13 17:44:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue_x\src\views\login\login.vue
-->
<template>
  <div>
    <header>登陆页面</header>
    <main>
      <div><input value="密码" /></div>
      <button @click="login">登录</button>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$route);
  },
  methods: {
    login() {
      this.$router.push("home");
      this.$store.commit("setRightList", [
        { id: 123, name: "菜单", children: [{id: 222, name: "二级"}] },
        {id: 234, name: "菜单1", children: [{id: 333, name: "耳机"}]},
        {id: 222, name: '菜单三'},
      ]);
    },
  },
};
</script>

<style lang="less" scoped></style>
