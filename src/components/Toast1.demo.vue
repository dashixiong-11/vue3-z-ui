<demo>
常规使用
</demo>
<template>
  <Button @click='toggle'> show toast</Button>
</template>

<script lang="ts">
import {showToast} from '../lib/showToast'
import Button from '../lib/Button.vue'

export default {
  components: {
    Button
  },
  setup() {
    const toggle = () => {
      showToast({
        message: '这是一条弹框',
        onClose: () => {
          console.log('toast close')
        }
      })
    }
    return {toggle}
  }
}
</script>
