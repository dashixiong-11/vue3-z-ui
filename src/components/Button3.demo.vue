<demo>
支持 border
</demo>
<template>
  <div>
    <div>
      <Button theme='primary' size='small' border>主要按钮</Button>
      <Button size='small' border>普通按钮</Button>
    </div>
    <div style='margin: 1em 0'>
      <Button theme='primary' border>主要按钮</Button>
      <Button border>普通按钮</Button>
    </div>
    <div>
      <Button theme='primary' size='big' border>主要按钮</Button>
      <Button size='big' border>普通按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Button
} from "../lib/index";

export default {
  components: {
    Button
  }
}
</script>
