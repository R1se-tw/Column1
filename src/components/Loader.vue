<!-- eslint-disable vue/multi-word-component-names -->
<template>
<Teleport to="#back">
    <div class="d-flex justify-content-center align-items-center h-100  loading-container"
      :style="{backgroundColor: background || ''}"
    >
        <div class="loading-content">
            <div class="spinner-border text-primary" role="status">
        <span class="sr-only"></span>
        </div>
        <p v-if="text" class="text-primary small">{{ text }}</p>
      </div>
    </div>
</Teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useDOMCreate from '../hooks/useDOMCreate'

export default defineComponent({
  props: {
    text: {
      type: String
    },
    background: {
      type: String
    }
  },
  setup () {
    // const node = document.createElement('div')
    // node.id = 'back'
    // document.body.appendChild(node)
    // onUnmounted(() => {
    //   document.body.removeChild(node)
    // })
    useDOMCreate('back')
  }
})

</script>

<style>
.loading-container {
    background: rgba(255, 255, 255, .5);
    z-index: 100;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    height: 0;
}
.loading-container {
    text-align: center;
}
</style>
