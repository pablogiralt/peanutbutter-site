<template>
  <component
    :is="'section'"
    :class="`${classMain} ${darkMode ? classMain + '--black' : ''} ${classAttr ? classAttr : ''}`"
    v-bind="theme"
  >
    <slot />
  </component>
</template>
<script>
import { commonProps } from '../../utils'

export default {
  name: 'PbSection',
  props: {
    theme: commonProps.theme,
    darkMode: commonProps.darkMode,
    classAttr: {
      type: String,
      required: false,
      default: null
    },
    classMain: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>
