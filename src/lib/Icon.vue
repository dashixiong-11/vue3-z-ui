<template>
  <svg class="icon z-icon" :style="{width:size +'px',height:size + 'px'}">
    <use :xlink:href=" `#icon-${name}`"></use>
  </svg>
</template>
<script lang="ts" setup="props">

declare const props: {
  name: string,
  size?: number;
}
const {size, name} = props;
export default {
  props: {
    size: {
      type: String,
      default: 30,
    },
    name:{
      type:String
    }
  },
};
</script>
<style lang="scss">
</style>