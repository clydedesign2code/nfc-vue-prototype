<template>
  <div class="preview-shell">
    <div class="device-selector">
      <button v-for="d in devices" :key="d.name" @click="selected = d" :class="{active: selected.name === d.name}">{{ d.name }}</button>
    </div>
    <div class="device-frame" :style="deviceStyle">
      <div class="device-screen"><slot /></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
const devices = [
  { name: 'iPhone SE', w: 375, h: 667 },
  { name: 'iPhone 14', w: 390, h: 844 },
  { name: 'iPhone 14 Pro Max', w: 430, h: 932 },
  { name: 'Samsung S23', w: 360, h: 780 },
  { name: 'Pixel 7', w: 412, h: 915 }
]
const selected = ref(devices[1])
const deviceStyle = computed(() => ({ width: selected.value.w + 'px', height: selected.value.h + 'px' }))
</script>
<style scoped>
.preview-shell{display:flex;flex-direction:column;align-items:center;background:#1a1a2e;min-height:100vh;padding:24px;gap:16px}
.device-selector{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}
.device-selector button{padding:6px 12px;border-radius:20px;border:1px solid #444;background:#2a2a3e;color:#fff;cursor:pointer;font-size:12px;transition:all .2s}
.device-selector button.active{background:#07c160;border-color:#07c160}
.device-frame{border-radius:44px;border:8px solid #333;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.5);transition:all .3s}
.device-screen{width:100%;height:100%;overflow-y:auto;overflow-x:hidden;background:#fff}
</style>