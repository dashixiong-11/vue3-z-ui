<demo>
支持 size
</demo>
<template>
  <div>
    <div>
      <Button size="small" theme="primary">小小小</Button>
      <Button size='small' >小小小</Button>
      <Button size="small" theme="text">小小小</Button>
    </div>
    <div style='margin: 1em 0'>
      <Button theme='primary'>普通</Button>
      <Button>普通</Button>
      <Button theme='text'>普通</Button>
    </div>
    <div>
      <Button theme='primary' size="big">大大大</Button>
      <Button size="big">大大大</Button>
      <Button theme='text' size="big">大大大</Button>
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
