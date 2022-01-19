<demo>
支持 disabled
</demo>
<template>
  <Button  disabled border>禁用按钮</Button>
  <Button theme='primary' disabled>禁用按钮</Button>
  <Button disabled>禁用按钮</Button>
  <Button theme="text" disabled>禁用按钮</Button>
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
