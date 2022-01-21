<template>
  <template v-if='visible'>
    <div class="wrapper" :class="toastClasses">
      <div class="toast" ref="toast">
        <div class="message">
          <slot name='message'></slot>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup='props, context' lang='ts'>
import {SetupContext, onMounted, computed, PropType} from 'vue';

interface Props {
  visible: boolean,
  autoClose?: number,
  position?: string,
  onClose?: () => void
}

export default {
  props: {
    visible: {
      type: Boolean as PropType<Props>,
      default: true
    },
    autoClose: {
      type: Number as PropType<Props>,
      default: 3
    },
    position: {
      type: String as PropType<Props>,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    },
    onClose: {
      type: Function as PropType<Props>
    }
  }
}
const {position, autoClose, onClose} = props

declare const context: SetupContext
/*
declare const props: {
  autoClose: number | boolean,
  position: 'top' | 'bottom' | 'middle',
  visible: boolean,
  onClose: () => void
}
*/

onMounted(() => {
  execAutoClose()
})

/*
 withDefaults(defineProps<Props>(), {
  position: 'top',
  onClose: () => {
  },
  autoClose: 3
})
*/

export const toastClasses = computed(() => {
  return {[`position-${position}`]: true}
})
export const execAutoClose = () => {
  if (autoClose) {
    setTimeout(() => {
      close()
    }, autoClose * 1000)
  }
}

export const close = () => {
  context.emit('update:visible', false)
  onClose && onClose()
}

</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-background: rgba(0, 0, 0, 0.75);
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%)
  }
  100% {
    opacity: 1;
    transform: translateY(0%)
  }
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%)
  }
  100% {
    opacity: 1;
    transform: translateY(0%)
  }
}

@keyframes slide-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.wrapper {
  position: fixed;
  z-index: 99;
  left: 50%;
  transform: translateX(-50%);

  &.position-top {
    top: 0;

    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down 1s;
    }
  }

  &.position-bottom {
    bottom: 0;

    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up 1s
    }
  }

  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

    .toast {
      animation: slide-in 1s;
    }
  }
}

.toast {
  color: white;
  padding: 0 16px;
  display: flex;
  align-items: center;
  min-height: $toast-min-height;
  font-size: $font-size;
  line-height: 1.8;
  background: $toast-background;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);

  .message {
    padding: 8px;
  }

  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin: 0 16px
  }

  .close {
    cursor: pointer;
    flex-shrink: 0;
  }
}
</style>