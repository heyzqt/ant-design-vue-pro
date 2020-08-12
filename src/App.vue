<template>
  <div id="app">
    <a-button>button</a-button>
    <div id="nav">
      <router-link to="/dashboard/analysis">Home</router-link> |
      <router-link to="/form">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less"></style>
