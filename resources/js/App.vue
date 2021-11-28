<template>
  <component :is="resolveLayout">
    <router-view></router-view>
  </component>
</template>

<script>
import LayoutBlank from '@/layouts/Blank.vue'
import LayoutContent from '@/layouts/Content.vue'

export default {
  components: {
    LayoutBlank,
    LayoutContent,
  },
  computed: {
    resolveLayout() {
      if ( this.$route.meta.layout === 'blank')
        return 'layout-blank'

      return 'layout-content'
    }
  },
}
</script>
