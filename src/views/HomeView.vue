<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from 'components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  }
})
</script>
