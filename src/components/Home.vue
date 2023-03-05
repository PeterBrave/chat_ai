<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="header-wrapper">
        <div class="logo">AI-toolbox</div>
        <a-menu
            v-model:selectedKeys="selectedKeys"
            :style="{ lineHeight: '64px' }"
            mode="horizontal"
            theme="dark"
        >
          <a-menu-item key="basic">基础能力</a-menu-item>
          <a-menu-item key="2">敬请期待</a-menu-item>
          <a-menu-item key="3">敬请期待</a-menu-item>
        </a-menu>
      </div>
    </a-layout-header>
    <a-layout-content :style="{ height: 'calc(100vh - 64px - 50px)' }" style="padding: 20px">
      <div :style="{ background: '#fff', padding: '24px', height: '100%' }">
        <!-- 根据是否显示详情页面渲染内容 -->
        <div v-if="!isDetail">
          <div class="card-container">
            <card
                class="card"
                v-for="(card, index) in cards"
                :key="index"
                :title="card.title"
                :description="card.description"
                @click="handleCardClick(index)"
            ></card>
          </div>
        </div>
        <div v-else>
          <router-view />
        </div>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      AI-toolbox ©2023 Created by peter
    </a-layout-footer>
  </a-layout>
</template>

<script>
import axios from 'axios'
import router from "../router";

export default {
  data() {
    return {
      selectedKeys: ['basic'],
      cards: [],
      isDetail: false
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/v1/cards')
        .then(response => {
          this.cards = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
  },
  methods: {
    handleCardClick(id) {
      this.isDetail = true
      router.push(`/detail/${id}`);
    }
  }
}
</script>

<style>
.header-wrapper {
  display: flex;
  align-items: center;
}

.logo {
  display: inline-block;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-right: 24px;
}

a-layout-content {
  flex: 1;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin: 0 -10px;
}

.card {
  flex-basis: calc(25% - 20px);
  margin: 0 10px 20px;
}

#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='light'] .site-layout-content {
  background: #141414;
}
</style>
