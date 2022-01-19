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
export default {
  props: {
    size: {
      type: Number,
      default: 30,
    },
    name:{
      type:String
    }
  },
};
const {size, name} = props;
</script>
<style lang="scss">
</style>